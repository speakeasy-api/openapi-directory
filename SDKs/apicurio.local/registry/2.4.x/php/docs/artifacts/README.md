# artifacts

## Overview

The primary way to interact with the Apicurio Registry API is to add, update, 
or delete artifacts. This section includes all of these primary operations.

### Available Operations

* [createArtifactJson](#createartifactjson) - Create artifact
* [createArtifactRaw](#createartifactraw) - Create artifact
* [deleteArtifact](#deleteartifact) - Delete artifact
* [deleteArtifactsInGroup](#deleteartifactsingroup) - Delete artifacts in group
* [getContentByGlobalId](#getcontentbyglobalid) - Get artifact by global ID
* [getContentByHash](#getcontentbyhash) - Get artifact content by SHA-256 hash
* [getContentById](#getcontentbyid) - Get artifact content by ID
* [getLatestArtifact](#getlatestartifact) - Get latest artifact
* [listArtifactsInGroup](#listartifactsingroup) - List artifacts in group
* [referencesByContentHash](#referencesbycontenthash) - List artifact references by hash
* [referencesByContentId](#referencesbycontentid) - List artifact references by content ID
* [referencesByGlobalId](#referencesbyglobalid) - List artifact references by global ID
* [searchArtifacts](#searchartifacts) - Search for artifacts
* [searchArtifactsByContent](#searchartifactsbycontent) - Search for artifacts by content
* [updateArtifactState](#updateartifactstate) - Update artifact state
* [updateArtifactJson](#updateartifactjson) - Update artifact
* [updateArtifactRaw](#updateartifactraw) - Update artifact

## createArtifactJson

Creates a new artifact by posting the artifact content.  The body of the request should
be the raw content of the artifact.  This is typically in JSON format for *most* of the 
supported types, but may be in another format for a few (for example, `PROTOBUF`).

The registry attempts to figure out what kind of artifact is being added from the
following supported list:

* Avro (`AVRO`)
* Protobuf (`PROTOBUF`)
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
use \OpenAPI\OpenAPI\Models\Operations\CreateArtifactJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactContent;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactReference;
use \OpenAPI\OpenAPI\Models\Operations\CreateArtifactJsonXRegistryHashAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\IfExistsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateArtifactJsonRequest();
    $request->artifactContent = new ArtifactContent();
    $request->artifactContent->content = 'nisi';
    $request->artifactContent->references = [
        new ArtifactReference(),
        new ArtifactReference(),
        new ArtifactReference(),
        new ArtifactReference(),
    ];
    $request->xRegistryArtifactId = 'temporibus';
    $request->xRegistryArtifactType = 'AVRO';
    $request->xRegistryContentHash = 'ab';
    $request->xRegistryDescription = '"Artifact description"';
    $request->xRegistryDescriptionEncoded = '"QXJ0aWZhY3QgZGVzY3JpcHRpb24K"';
    $request->xRegistryHashAlgorithm = CreateArtifactJsonXRegistryHashAlgorithmEnum::SHA256;
    $request->xRegistryName = '"Artifact name"';
    $request->xRegistryNameEncoded = '"QXJ0aWZhY3QgbmFtZQo="';
    $request->xRegistryVersion = '"3.1.6"';
    $request->canonical = false;
    $request->groupId = '"my-group"';
    $request->ifExists = IfExistsEnum::FAIL;

    $response = $sdk->artifacts->createArtifactJson($request);

    if ($response->artifactMetaData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createArtifactRaw

Creates a new artifact by posting the artifact content.  The body of the request should
be the raw content of the artifact.  This is typically in JSON format for *most* of the 
supported types, but may be in another format for a few (for example, `PROTOBUF`).

The registry attempts to figure out what kind of artifact is being added from the
following supported list:

* Avro (`AVRO`)
* Protobuf (`PROTOBUF`)
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
use \OpenAPI\OpenAPI\Models\Operations\CreateArtifactRawRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateArtifactRawXRegistryHashAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\IfExistsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateArtifactRawRequest();
    $request->requestBody = 'deserunt';
    $request->xRegistryArtifactId = 'perferendis';
    $request->xRegistryArtifactType = 'AVRO';
    $request->xRegistryContentHash = 'ipsam';
    $request->xRegistryDescription = '"Artifact description"';
    $request->xRegistryDescriptionEncoded = '"QXJ0aWZhY3QgZGVzY3JpcHRpb24K"';
    $request->xRegistryHashAlgorithm = CreateArtifactRawXRegistryHashAlgorithmEnum::MD5;
    $request->xRegistryName = '"Artifact name"';
    $request->xRegistryNameEncoded = '"QXJ0aWZhY3QgbmFtZQo="';
    $request->xRegistryVersion = '"3.1.6"';
    $request->canonical = false;
    $request->groupId = '"my-group"';
    $request->ifExists = IfExistsEnum::RETURN_OR_UPDATE;

    $response = $sdk->artifacts->createArtifactRaw($request);

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
    $request->artifactId = '"example-artifact"';
    $request->groupId = '"my-group"';

    $response = $sdk->artifacts->deleteArtifact($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteArtifactsInGroup

Deletes all of the artifacts that exist in a given group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteArtifactsInGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteArtifactsInGroupRequest();
    $request->groupId = '"my-group"';

    $response = $sdk->artifacts->deleteArtifactsInGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContentByGlobalId

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
use \OpenAPI\OpenAPI\Models\Operations\GetContentByGlobalIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContentByGlobalIdRequest();
    $request->dereference = false;
    $request->globalId = 778157;

    $response = $sdk->artifacts->getContentByGlobalId($request);

    if ($response->fileContent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContentByHash

Gets the content for an artifact version in the registry using the 
SHA-256 hash of the content.  This content hash may be shared by multiple artifact
versions in the case where the artifact versions have identical content.

This operation may fail for one of the following reasons:

* No content with this `contentHash` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContentByHashRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContentByHashRequest();
    $request->contentHash = 'odit';

    $response = $sdk->artifacts->getContentByHash($request);

    if ($response->fileContent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContentById

Gets the content for an artifact version in the registry using the unique content
identifier for that content.  This content ID may be shared by multiple artifact
versions in the case where the artifact versions are identical.

This operation may fail for one of the following reasons:

* No content with this `contentId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContentByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContentByIdRequest();
    $request->contentId = 870013;

    $response = $sdk->artifacts->getContentById($request);

    if ($response->fileContent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLatestArtifact

Returns the latest version of the artifact in its raw form.  The `Content-Type` of the
response depends on the artifact type.  In most cases, this is `application/json`, but 
for some types it may be different (for example, `PROTOBUF`).
If the latest version of the artifact is marked as `DISABLED`, the next available non-disabled version will be used.

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
    $request->artifactId = '"example-artifact"';
    $request->dereference = false;
    $request->groupId = '"my-group"';

    $response = $sdk->artifacts->getLatestArtifact($request);

    if ($response->fileContent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listArtifactsInGroup

Returns a list of all artifacts in the group.  This list is paged.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListArtifactsInGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListArtifactsInGroupRequest();
    $request->groupId = '"my-group"';
    $request->limit = 870088;
    $request->offset = 978619;
    $request->order = SortOrderEnum::ASC;
    $request->orderby = SortByEnum::CREATED_ON;

    $response = $sdk->artifacts->listArtifactsInGroup($request);

    if ($response->artifactSearchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## referencesByContentHash

Returns a list containing all the artifact references using the artifact content hash.

This operation may fail for one of the following reasons:

* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReferencesByContentHashRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReferencesByContentHashRequest();
    $request->contentHash = 'quod';

    $response = $sdk->artifacts->referencesByContentHash($request);

    if ($response->artifactReferences !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## referencesByContentId

Returns a list containing all the artifact references using the artifact content ID.

This operation may fail for one of the following reasons:

* A server error occurred (HTTP error `500`)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReferencesByContentIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReferencesByContentIdRequest();
    $request->contentId = 461479;

    $response = $sdk->artifacts->referencesByContentId($request);

    if ($response->artifactReferences !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## referencesByGlobalId

Returns a list containing all the artifact references using the artifact global ID.

This operation may fail for one of the following reasons:

* A server error occurred (HTTP error `500`)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReferencesByGlobalIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReferencesByGlobalIdRequest();
    $request->globalId = 520478;

    $response = $sdk->artifacts->referencesByGlobalId($request);

    if ($response->artifactReferences !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchArtifacts

Returns a paginated list of all artifacts that match the provided filter criteria.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchArtifactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchArtifactsRequest();
    $request->contentId = 780529;
    $request->description = 'dolorum';
    $request->globalId = 118274;
    $request->group = 'nam';
    $request->labels = [
        'occaecati',
        'fugit',
        'deleniti',
    ];
    $request->limit = 944669;
    $request->name = 'Everett Breitenberg';
    $request->offset = 264555;
    $request->order = SortOrderEnum::ASC;
    $request->orderby = SortByEnum::CREATED_ON;
    $request->properties = [
        'esse',
        'ipsum',
        'excepturi',
    ];

    $response = $sdk->artifacts->searchArtifacts($request);

    if ($response->artifactSearchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchArtifactsByContent

Returns a paginated list of all artifacts with at least one version that matches the
posted content.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchArtifactsByContentRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchArtifactsByContentOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchArtifactsByContentOrderbyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchArtifactsByContentRequest();
    $request->requestBody = 'aspernatur';
    $request->artifactType = 'AVRO';
    $request->canonical = false;
    $request->limit = 18789;
    $request->offset = 324141;
    $request->order = SearchArtifactsByContentOrderEnum::DESC;
    $request->orderby = SearchArtifactsByContentOrderbyEnum::NAME;

    $response = $sdk->artifacts->searchArtifactsByContent($request);

    if ($response->artifactSearchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateArtifactState

Updates the state of the artifact.  For example, you can use this to mark the latest version of an artifact as `DEPRECATED`. The operation changes the state of the latest version of the artifact, even if this version is `DISABLED`. If multiple versions exist, only the most recent is changed.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
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
    $request->updateState->state = ArtifactStateEnum::DISABLED;
    $request->artifactId = '"example-artifact"';
    $request->groupId = '"my-group"';

    $response = $sdk->artifacts->updateArtifactState($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateArtifactJson

Updates an artifact by uploading new content.  The body of the request can
be the raw content of the artifact or a JSON object containing both the raw content and
a set of references to other artifacts..  This is typically in JSON format for *most*
of the supported types, but may be in another format for a few (for example, `PROTOBUF`).
The type of the content should be compatible with the artifact's type (it would be
an error to update an `AVRO` artifact with new `OPENAPI` content, for example).

The update could fail for a number of reasons including:

* Provided content (request body) was empty (HTTP error `400`)
* No artifact with the `artifactId` exists (HTTP error `404`)
* The new content violates one of the rules configured for the artifact (HTTP error `409`)
* A server error occurred (HTTP error `500`)

When successful, this creates a new version of the artifact, making it the most recent
(and therefore official) version of the artifact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateArtifactJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactContent;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateArtifactJsonRequest();
    $request->artifactContent = new ArtifactContent();
    $request->artifactContent->content = 'dolor';
    $request->artifactContent->references = [
        new ArtifactReference(),
        new ArtifactReference(),
        new ArtifactReference(),
    ];
    $request->xRegistryDescription = '"Artifact description"';
    $request->xRegistryDescriptionEncoded = '"QXJ0aWZhY3QgZGVzY3JpcHRpb24K"';
    $request->xRegistryName = '"Artifact name"';
    $request->xRegistryNameEncoded = '"QXJ0aWZhY3QgbmFtZQo="';
    $request->xRegistryVersion = '"3.1.6"';
    $request->artifactId = '"example-artifact"';
    $request->groupId = '"my-group"';

    $response = $sdk->artifacts->updateArtifactJson($request);

    if ($response->artifactMetaData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateArtifactRaw

Updates an artifact by uploading new content.  The body of the request can
be the raw content of the artifact or a JSON object containing both the raw content and
a set of references to other artifacts..  This is typically in JSON format for *most*
of the supported types, but may be in another format for a few (for example, `PROTOBUF`).
The type of the content should be compatible with the artifact's type (it would be
an error to update an `AVRO` artifact with new `OPENAPI` content, for example).

The update could fail for a number of reasons including:

* Provided content (request body) was empty (HTTP error `400`)
* No artifact with the `artifactId` exists (HTTP error `404`)
* The new content violates one of the rules configured for the artifact (HTTP error `409`)
* A server error occurred (HTTP error `500`)

When successful, this creates a new version of the artifact, making it the most recent
(and therefore official) version of the artifact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateArtifactRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateArtifactRawRequest();
    $request->requestBody = 'laboriosam';
    $request->xRegistryDescription = '"Artifact description"';
    $request->xRegistryDescriptionEncoded = '"QXJ0aWZhY3QgZGVzY3JpcHRpb24K"';
    $request->xRegistryName = '"Artifact name"';
    $request->xRegistryNameEncoded = '"QXJ0aWZhY3QgbmFtZQo="';
    $request->xRegistryVersion = '"3.1.6"';
    $request->artifactId = '"example-artifact"';
    $request->groupId = '"my-group"';

    $response = $sdk->artifacts->updateArtifactRaw($request);

    if ($response->artifactMetaData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
