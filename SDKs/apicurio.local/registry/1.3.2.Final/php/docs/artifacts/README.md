# artifacts

## Overview

The primary way to interact with the Apicurio Registry API is to add, update, 
or delete artifacts. This section includes all of these primary operations.

### Available Operations

* [createArtifact](#createartifact) - Create artifact
* [deleteArtifact](#deleteartifact) - Delete artifact
* [getArtifactByGlobalId](#getartifactbyglobalid) - Get artifact by global ID
* [getLatestArtifact](#getlatestartifact) - Get latest artifact
* [listArtifacts](#listartifacts) - List all artifact IDs
* [searchArtifacts](#searchartifacts) - Search for artifacts
* [updateArtifact](#updateartifact) - Update artifact
* [updateArtifactState](#updateartifactstate) - Update artifact state

## createArtifact

Creates a new artifact by posting the artifact content.  The body of the request should
be the raw content of the artifact.  This is typically in JSON format for *most* of the 
supported types, but may be in another format for a few (for example, `PROTOBUF`).

The registry attempts to figure out what kind of artifact is being added from the
following supported list:

* Avro (`AVRO`)
* Protobuf (`PROTOBUF`)
* Protobuf File Descriptor (`PROTOBUF_FD`)
* JSON Schema (`JSON`)
* Kafka Connect (`KCONNECT`)
* OpenAPI (`OPENAPI`)
* AsyncAPI (`ASYNCAPI`)
* GraphQL (`GRAPHQL`)
* Web Services Description Language (`WSDL`)
* XML Schema (`XSD`)

Alternatively, you can specify the artifact type using the `X-Registry-ArtifactType` 
HTTP request header, or include a hint in the request's `Content-Type`.  For example:

```
Content-Type: application/json; artifactType=AVRO
```

An artifact is created using the content provided in the body of the request.  This
content is created under a unique artifact ID that can be provided in the request
using the `X-Registry-ArtifactId` request header.  If not provided in the request,
the server generates a unique ID for the artifact.  It is typically recommended
that callers provide the ID, because this is typically a meaningful identifier, 
and for most use cases should be supplied by the caller.

If an artifact with the provided artifact ID already exists, the default behavior
is for the server to reject the content with a 409 error.  However, the caller can
supply the `ifExists` query parameter to alter this default behavior. The `ifExists`
query parameter can have one of the following values:

* `FAIL` (*default*) - server rejects the content with a 409 error
* `UPDATE` - server updates the existing artifact and returns the new metadata
* `RETURN` - server does not create or add content to the server, but instead 
returns the metadata for the existing artifact
* `RETURN_OR_UPDATE` - server returns an existing **version** that matches the 
provided content if such a version exists, otherwise a new version is created

This operation may fail for one of the following reasons:

* An invalid `ArtifactType` was indicated (HTTP error `400`)
* No `ArtifactType` was indicated and the server could not determine one from the content (HTTP error `400`)
* Provided content (request body) was empty (HTTP error `400`)
* An artifact with the provided ID already exists (HTTP error `409`)
* The content violates one of the configured global rules (HTTP error `409`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateArtifactRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateArtifactXRegistryArtifactTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateArtifactIfExistsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateArtifactRequest();
    $request->requestBody = 'delectus';
    $request->xRegistryArtifactId = 'tempora';
    $request->xRegistryArtifactType = CreateArtifactXRegistryArtifactTypeEnum::OPENAPI;
    $request->ifExists = CreateArtifactIfExistsEnum::UPDATE;

    $response = $sdk->artifacts->createArtifact($request);

    if ($response->artifactMetaData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteArtifact

Deletes an artifact completely, resulting in all versions of the artifact also being
deleted.  This may fail for one of the following reasons:

* No artifact with the `artifactId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteArtifactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteArtifactRequest();
    $request->artifactId = 'minus';

    $response = $sdk->artifacts->deleteArtifact($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getArtifactByGlobalId

Gets the content for an artifact version in the registry using its globally unique
identifier.

This operation may fail for one of the following reasons:

* No artifact version with this `globalId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetArtifactByGlobalIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetArtifactByGlobalIdRequest();
    $request->globalId = 812169;

    $response = $sdk->artifacts->getArtifactByGlobalId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLatestArtifact

Returns the latest version of the artifact in its raw form.  The `Content-Type` of the response depends on the artifact type.  In most cases, this is `application/json`, but for some types it may be different (for example, `PROTOBUF`). If the latest version of the artifact is marked as `DISABLED`, the next available non-disabled version will be used.

This operation may fail for one of the following reasons:

* No artifact with this `artifactId` exists or all versions are `DISABLED` (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLatestArtifactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLatestArtifactRequest();
    $request->artifactId = 'voluptatum';

    $response = $sdk->artifacts->getLatestArtifact($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listArtifacts

Returns a list of IDs of all artifacts in the registry as a flat list.  Typically the
server is configured to limit the number of artifact IDs returned when a large number 
of artifacts exist. In this case, the result of this call may be non-deterministic. The 
default limit is typically 1000 artifacts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->artifacts->listArtifacts();

    if ($response->listArtifacts200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchArtifacts

Returns a paginated list of all artifacts that match the provided search criteria.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchArtifactsRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchArtifactsOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchArtifactsOverEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchArtifactsRequest();
    $request->limit = 479977;
    $request->offset = 568045;
    $request->order = SearchArtifactsOrderEnum::ASC;
    $request->over = SearchArtifactsOverEnum::LABELS;
    $request->search = 'temporibus';

    $response = $sdk->artifacts->searchArtifacts($request);

    if ($response->artifactSearchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateArtifact

Updates an artifact by uploading new content.  The body of the request should
be the raw content of the artifact.  This is typically in JSON format for *most*
of the supported types, but may be in another format for a few (for example, `PROTOBUF`).

The registry attempts to figure out what kind of artifact is being added from the
following supported list:

* Avro (`AVRO`)
* Protobuf (`PROTOBUF`)
* Protobuf File Descriptor (`PROTOBUF_FD`)
* JSON Schema (`JSON`)
* Kafka Connect (`KCONNECT`)
* OpenAPI (`OPENAPI`)
* AsyncAPI (`ASYNCAPI`)
* GraphQL (`GRAPHQL`)
* Web Services Description Language (`WSDL`)
* XML Schema (`XSD`)

Alternatively, you can specify the artifact type using the `X-Registry-ArtifactType` 
HTTP request header, or include a hint in the request's `Content-Type`.  For example:

```
Content-Type: application/json; artifactType=AVRO
```

The update could fail for a number of reasons including:

* Provided content (request body) was empty (HTTP error `400`)
* No artifact with the `artifactId` exists (HTTP error `404`)
* The new content violates one of the rules configured for the artifact (HTTP error `409`)
* The provided artifact type is not recognized (HTTP error `404`)
* A server error occurred (HTTP error `500`)

When successful, this creates a new version of the artifact, making it the most recent
(and therefore official) version of the artifact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateArtifactRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateArtifactXRegistryArtifactTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateArtifactRequest();
    $request->requestBody = 'ab';
    $request->xRegistryArtifactType = UpdateArtifactXRegistryArtifactTypeEnum::JSON;
    $request->artifactId = 'veritatis';

    $response = $sdk->artifacts->updateArtifact($request);

    if ($response->artifactMetaData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateArtifactState

Updates the state of the artifact. For example, you can use this to mark the latest version of an artifact as `DEPRECATED`. The operation changes the state of the latest version of the artifact, even if this version is `DISABLED`. If multiple versions exist, only the most recent is changed.

The following state changes are supported:

* Enabled -> Disabled
* Enabled -> Deprecated
* Enabled -> Deleted
* Disabled -> Enabled
* Disabled -> Deleted
* Disabled -> Deprecated
* Deprecated -> Deleted

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* Artifact cannot transition to the given state (HTTP error `400`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateArtifactStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateState;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateArtifactStateRequest();
    $request->updateState = new UpdateState();
    $request->updateState->state = ArtifactStateEnum::DEPRECATED;
    $request->artifactId = 'perferendis';

    $response = $sdk->artifacts->updateArtifactState($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
