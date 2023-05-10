# versions

## Overview

When artifact content is updated, old versions of the artifact content are not lost.  All versions can be listed and accessed if necessary. This section describes the operations used to list and access all versions of an artifact's content and metadata.

### Available Operations

* [createArtifactVersionJson](#createartifactversionjson) - Create artifact version
* [createArtifactVersionRaw](#createartifactversionraw) - Create artifact version
* [deleteArtifactVersion](#deleteartifactversion) - Delete artifact version
* [getArtifactVersion](#getartifactversion) - Get artifact version
* [getArtifactVersionReferences](#getartifactversionreferences) - Get artifact version
* [listArtifactVersions](#listartifactversions) - List artifact versions
* [updateArtifactVersionState](#updateartifactversionstate) - Update artifact version state

## createArtifactVersionJson

Creates a new version of the artifact by uploading new content.  The configured rules for
the artifact are applied, and if they all pass, the new content is added as the most recent 
version of the artifact.  If any of the rules fail, an error is returned.

The body of the request can be the raw content of the new artifact version, or the raw content 
and a set of references pointing to other artifacts, and the type
of that content should match the artifact's type (for example if the artifact type is `AVRO`
then the content of the request should be an Apache Avro document).

This operation can fail for the following reasons:

* Provided content (request body) was empty (HTTP error `400`)
* No artifact with this `artifactId` exists (HTTP error `404`)
* The new content violates one of the rules configured for the artifact (HTTP error `409`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateArtifactVersionJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactContent;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateArtifactVersionJsonRequest();
    $request->artifactContent = new ArtifactContent();
    $request->artifactContent->content = 'consequatur';
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

    $response = $sdk->versions->createArtifactVersionJson($request);

    if ($response->versionMetaData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createArtifactVersionRaw

Creates a new version of the artifact by uploading new content.  The configured rules for
the artifact are applied, and if they all pass, the new content is added as the most recent 
version of the artifact.  If any of the rules fail, an error is returned.

The body of the request can be the raw content of the new artifact version, or the raw content 
and a set of references pointing to other artifacts, and the type
of that content should match the artifact's type (for example if the artifact type is `AVRO`
then the content of the request should be an Apache Avro document).

This operation can fail for the following reasons:

* Provided content (request body) was empty (HTTP error `400`)
* No artifact with this `artifactId` exists (HTTP error `404`)
* The new content violates one of the rules configured for the artifact (HTTP error `409`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateArtifactVersionRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateArtifactVersionRawRequest();
    $request->requestBody = 'quibusdam';
    $request->xRegistryDescription = '"Artifact description"';
    $request->xRegistryDescriptionEncoded = '"QXJ0aWZhY3QgZGVzY3JpcHRpb24K"';
    $request->xRegistryName = '"Artifact name"';
    $request->xRegistryNameEncoded = '"QXJ0aWZhY3QgbmFtZQo="';
    $request->xRegistryVersion = '"3.1.6"';
    $request->artifactId = '"example-artifact"';
    $request->groupId = '"my-group"';

    $response = $sdk->versions->createArtifactVersionRaw($request);

    if ($response->versionMetaData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteArtifactVersion

Deletes a single version of the artifact. Parameters `groupId`, `artifactId` and the unique `version`
are needed. If this is the only version of the artifact, this operation is the same as 
deleting the entire artifact.

This feature is disabled by default and it's discouraged for normal usage. To enable it, set the `registry.rest.artifact.deletion.enabled` property to true. This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No version with this `version` exists (HTTP error `404`)
 * Feature is disabled (HTTP error `405`)
 * A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteArtifactVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteArtifactVersionRequest();
    $request->artifactId = '"example-artifact"';
    $request->groupId = '"my-group"';
    $request->version = '"3.1.6"';

    $response = $sdk->versions->deleteArtifactVersion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getArtifactVersion

Retrieves a single version of the artifact content.  Both the `artifactId` and the
unique `version` number must be provided.  The `Content-Type` of the response depends 
on the artifact type.  In most cases, this is `application/json`, but for some types 
it may be different (for example, `PROTOBUF`).

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No version with this `version` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetArtifactVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetArtifactVersionRequest();
    $request->artifactId = '"example-artifact"';
    $request->dereference = false;
    $request->groupId = '"my-group"';
    $request->version = '"3.1.6"';

    $response = $sdk->versions->getArtifactVersion($request);

    if ($response->fileContent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getArtifactVersionReferences

Retrieves a single version of the artifact content.  Both the `artifactId` and the
unique `version` number must be provided.  The `Content-Type` of the response depends 
on the artifact type.  In most cases, this is `application/json`, but for some types 
it may be different (for example, `PROTOBUF`).

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No version with this `version` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetArtifactVersionReferencesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetArtifactVersionReferencesRequest();
    $request->artifactId = '"example-artifact"';
    $request->groupId = '"my-group"';
    $request->version = '"3.1.6"';

    $response = $sdk->versions->getArtifactVersionReferences($request);

    if ($response->artifactReferences !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listArtifactVersions

Returns a list of all versions of the artifact.  The result set is paged.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListArtifactVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListArtifactVersionsRequest();
    $request->artifactId = '"example-artifact"';
    $request->groupId = '"my-group"';
    $request->limit = 131797;
    $request->offset = 647174;

    $response = $sdk->versions->listArtifactVersions($request);

    if ($response->versionSearchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateArtifactVersionState

Updates the state of a specific version of an artifact.  For example, you can use 
this operation to disable a specific version.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No version with this `version` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateArtifactVersionStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateState;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateArtifactVersionStateRequest();
    $request->updateState = new UpdateState();
    $request->updateState->state = ArtifactStateEnum::DEPRECATED;
    $request->artifactId = '"example-artifact"';
    $request->groupId = '"my-group"';
    $request->version = '"3.1.6"';

    $response = $sdk->versions->updateArtifactVersionState($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
