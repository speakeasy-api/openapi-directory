# registry

### Available Operations

* [registryCreateApi](#registrycreateapi) - CreateApi creates a specified API.
* [registryCreateApiDeployment](#registrycreateapideployment) - CreateApiDeployment creates a specified deployment.
* [registryCreateApiSpec](#registrycreateapispec) - CreateApiSpec creates a specified spec.
* [registryCreateApiVersion](#registrycreateapiversion) - CreateApiVersion creates a specified version.
* [registryCreateArtifact](#registrycreateartifact) - CreateArtifact creates a specified artifact.
* [registryDeleteApi](#registrydeleteapi) - DeleteApi removes a specified API and all of the resources that it
 owns.
* [registryDeleteApiDeployment](#registrydeleteapideployment) - DeleteApiDeployment removes a specified deployment, all revisions, and all
 child resources (e.g. artifacts).
* [registryDeleteApiDeploymentRevision](#registrydeleteapideploymentrevision) - DeleteApiDeploymentRevision deletes a revision of a deployment.
* [registryDeleteApiSpec](#registrydeleteapispec) - DeleteApiSpec removes a specified spec, all revisions, and all child
 resources (e.g. artifacts).
* [registryDeleteApiSpecRevision](#registrydeleteapispecrevision) - DeleteApiSpecRevision deletes a revision of a spec.
* [registryDeleteApiVersion](#registrydeleteapiversion) - DeleteApiVersion removes a specified version and all of the resources that
 it owns.
* [registryDeleteArtifact](#registrydeleteartifact) - DeleteArtifact removes a specified artifact.
* [registryGetApi](#registrygetapi) - GetApi returns a specified API.
* [registryGetApiDeployment](#registrygetapideployment) - GetApiDeployment returns a specified deployment.
* [registryGetApiSpec](#registrygetapispec) - GetApiSpec returns a specified spec.
* [registryGetApiSpecContents](#registrygetapispeccontents) - GetApiSpecContents returns the contents of a specified spec.
 If specs are stored with GZip compression, the default behavior
 is to return the spec uncompressed (the mime_type response field
 indicates the exact format returned).
* [registryGetApiVersion](#registrygetapiversion) - GetApiVersion returns a specified version.
* [registryGetArtifact](#registrygetartifact) - GetArtifact returns a specified artifact.
* [registryGetArtifactContents](#registrygetartifactcontents) - GetArtifactContents returns the contents of a specified artifact.
 If artifacts are stored with GZip compression, the default behavior
 is to return the artifact uncompressed (the mime_type response field
 indicates the exact format returned).
* [registryListApiDeploymentRevisions](#registrylistapideploymentrevisions) - ListApiDeploymentRevisions lists all revisions of a deployment.
 Revisions are returned in descending order of revision creation time.
* [registryListApiDeployments](#registrylistapideployments) - ListApiDeployments returns matching deployments.
* [registryListApiSpecRevisions](#registrylistapispecrevisions) - ListApiSpecRevisions lists all revisions of a spec.
 Revisions are returned in descending order of revision creation time.
* [registryListApiSpecs](#registrylistapispecs) - ListApiSpecs returns matching specs.
* [registryListApiVersions](#registrylistapiversions) - ListApiVersions returns matching versions.
* [registryListApis](#registrylistapis) - ListApis returns matching APIs.
* [registryListArtifacts](#registrylistartifacts) - ListArtifacts returns matching artifacts.
* [registryReplaceArtifact](#registryreplaceartifact) - ReplaceArtifact can be used to replace a specified artifact.
* [registryRollbackApiDeployment](#registryrollbackapideployment) - RollbackApiDeployment sets the current revision to a specified prior
 revision. Note that this creates a new revision with a new revision ID.
* [registryRollbackApiSpec](#registryrollbackapispec) - RollbackApiSpec sets the current revision to a specified prior revision.
 Note that this creates a new revision with a new revision ID.
* [registryTagApiDeploymentRevision](#registrytagapideploymentrevision) - TagApiDeploymentRevision adds a tag to a specified revision of a
 deployment.
* [registryTagApiSpecRevision](#registrytagapispecrevision) - TagApiSpecRevision adds a tag to a specified revision of a spec.
* [registryUpdateApi](#registryupdateapi) - UpdateApi can be used to modify a specified API.
* [registryUpdateApiDeployment](#registryupdateapideployment) - UpdateApiDeployment can be used to modify a specified deployment.
* [registryUpdateApiSpec](#registryupdateapispec) - UpdateApiSpec can be used to modify a specified spec.
* [registryUpdateApiVersion](#registryupdateapiversion) - UpdateApiVersion can be used to modify a specified version.

## registryCreateApi

CreateApi creates a specified API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryCreateApiRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryCreateApiRequest();
    $request->apiInput = new ApiInput();
    $request->apiInput->annotations = [
        'ab' => 'quis',
        'veritatis' => 'deserunt',
        'perferendis' => 'ipsam',
        'repellendus' => 'sapiente',
    ];
    $request->apiInput->availability = 'quo';
    $request->apiInput->description = 'odit';
    $request->apiInput->displayName = 'at';
    $request->apiInput->labels = [
        'maiores' => 'molestiae',
        'quod' => 'quod',
        'esse' => 'totam',
        'porro' => 'dolorum',
    ];
    $request->apiInput->name = 'Antoinette Nikolaus';
    $request->apiInput->recommendedDeployment = 'deleniti';
    $request->apiInput->recommendedVersion = 'hic';
    $request->apiId = 'optio';
    $request->location = 'totam';
    $request->project = 'beatae';

    $response = $sdk->registry->registryCreateApi($request);

    if ($response->api !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryCreateApiDeployment

CreateApiDeployment creates a specified deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryCreateApiDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiDeploymentInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryCreateApiDeploymentRequest();
    $request->apiDeploymentInput = new ApiDeploymentInput();
    $request->apiDeploymentInput->accessGuidance = 'commodi';
    $request->apiDeploymentInput->annotations = [
        'modi' => 'qui',
        'impedit' => 'cum',
    ];
    $request->apiDeploymentInput->apiSpecRevision = 'esse';
    $request->apiDeploymentInput->description = 'ipsum';
    $request->apiDeploymentInput->displayName = 'excepturi';
    $request->apiDeploymentInput->endpointUri = 'aspernatur';
    $request->apiDeploymentInput->externalChannelUri = 'perferendis';
    $request->apiDeploymentInput->intendedAudience = 'ad';
    $request->apiDeploymentInput->labels = [
        'sed' => 'iste',
        'dolor' => 'natus',
        'laboriosam' => 'hic',
    ];
    $request->apiDeploymentInput->name = 'Wilbur Kirlin';
    $request->api = 'iure';
    $request->apiDeploymentId = 'saepe';
    $request->location = 'quidem';
    $request->project = 'architecto';

    $response = $sdk->registry->registryCreateApiDeployment($request);

    if ($response->apiDeployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryCreateApiSpec

CreateApiSpec creates a specified spec.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryCreateApiSpecRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiSpecInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryCreateApiSpecRequest();
    $request->apiSpecInput = new ApiSpecInput();
    $request->apiSpecInput->annotations = [
        'reiciendis' => 'est',
    ];
    $request->apiSpecInput->contents = 'mollitia';
    $request->apiSpecInput->description = 'laborum';
    $request->apiSpecInput->filename = 'dolores';
    $request->apiSpecInput->labels = [
        'corporis' => 'explicabo',
    ];
    $request->apiSpecInput->mimeType = 'nobis';
    $request->apiSpecInput->name = 'Guadalupe Hickle';
    $request->apiSpecInput->sourceUri = 'accusantium';
    $request->api = 'iure';
    $request->apiSpecId = 'culpa';
    $request->location = 'doloribus';
    $request->project = 'sapiente';
    $request->version = 'architecto';

    $response = $sdk->registry->registryCreateApiSpec($request);

    if ($response->apiSpec !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryCreateApiVersion

CreateApiVersion creates a specified version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryCreateApiVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiVersionInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryCreateApiVersionRequest();
    $request->apiVersionInput = new ApiVersionInput();
    $request->apiVersionInput->annotations = [
        'dolorem' => 'culpa',
        'consequuntur' => 'repellat',
        'mollitia' => 'occaecati',
    ];
    $request->apiVersionInput->description = 'numquam';
    $request->apiVersionInput->displayName = 'commodi';
    $request->apiVersionInput->labels = [
        'molestiae' => 'velit',
        'error' => 'quia',
    ];
    $request->apiVersionInput->name = 'Gloria Padberg';
    $request->apiVersionInput->state = 'odit';
    $request->api = 'quo';
    $request->apiVersionId = 'sequi';
    $request->location = 'tenetur';
    $request->project = 'ipsam';

    $response = $sdk->registry->registryCreateApiVersion($request);

    if ($response->apiVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryCreateArtifact

CreateArtifact creates a specified artifact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryCreateArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryCreateArtifactRequest();
    $request->artifactInput = new ArtifactInput();
    $request->artifactInput->contents = 'id';
    $request->artifactInput->mimeType = 'possimus';
    $request->artifactInput->name = 'Joyce Mueller';
    $request->artifactId = 'quasi';
    $request->location = 'reiciendis';
    $request->project = 'voluptatibus';

    $response = $sdk->registry->registryCreateArtifact($request);

    if ($response->artifact !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryDeleteApi

DeleteApi removes a specified API and all of the resources that it
 owns.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryDeleteApiRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryDeleteApiRequest();
    $request->api = 'vero';
    $request->force = false;
    $request->location = 'nihil';
    $request->project = 'praesentium';

    $response = $sdk->registry->registryDeleteApi($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryDeleteApiDeployment

DeleteApiDeployment removes a specified deployment, all revisions, and all
 child resources (e.g. artifacts).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryDeleteApiDeploymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryDeleteApiDeploymentRequest();
    $request->api = 'voluptatibus';
    $request->deployment = 'ipsa';
    $request->force = false;
    $request->location = 'omnis';
    $request->project = 'voluptate';

    $response = $sdk->registry->registryDeleteApiDeployment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryDeleteApiDeploymentRevision

DeleteApiDeploymentRevision deletes a revision of a deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryDeleteApiDeploymentRevisionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryDeleteApiDeploymentRevisionRequest();
    $request->api = 'cum';
    $request->deployment = 'perferendis';
    $request->location = 'doloremque';
    $request->project = 'reprehenderit';

    $response = $sdk->registry->registryDeleteApiDeploymentRevision($request);

    if ($response->apiDeployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryDeleteApiSpec

DeleteApiSpec removes a specified spec, all revisions, and all child
 resources (e.g. artifacts).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryDeleteApiSpecRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryDeleteApiSpecRequest();
    $request->api = 'ut';
    $request->force = false;
    $request->location = 'maiores';
    $request->project = 'dicta';
    $request->spec = 'corporis';
    $request->version = 'dolore';

    $response = $sdk->registry->registryDeleteApiSpec($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryDeleteApiSpecRevision

DeleteApiSpecRevision deletes a revision of a spec.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryDeleteApiSpecRevisionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryDeleteApiSpecRevisionRequest();
    $request->api = 'iusto';
    $request->location = 'dicta';
    $request->project = 'harum';
    $request->spec = 'enim';
    $request->version = 'accusamus';

    $response = $sdk->registry->registryDeleteApiSpecRevision($request);

    if ($response->apiSpec !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryDeleteApiVersion

DeleteApiVersion removes a specified version and all of the resources that
 it owns.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryDeleteApiVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryDeleteApiVersionRequest();
    $request->api = 'commodi';
    $request->force = false;
    $request->location = 'repudiandae';
    $request->project = 'quae';
    $request->version = 'ipsum';

    $response = $sdk->registry->registryDeleteApiVersion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryDeleteArtifact

DeleteArtifact removes a specified artifact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryDeleteArtifactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryDeleteArtifactRequest();
    $request->artifact = 'quidem';
    $request->location = 'molestias';
    $request->project = 'excepturi';

    $response = $sdk->registry->registryDeleteArtifact($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryGetApi

GetApi returns a specified API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryGetApiRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryGetApiRequest();
    $request->api = 'pariatur';
    $request->location = 'modi';
    $request->project = 'praesentium';

    $response = $sdk->registry->registryGetApi($request);

    if ($response->api !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryGetApiDeployment

GetApiDeployment returns a specified deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryGetApiDeploymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryGetApiDeploymentRequest();
    $request->api = 'rem';
    $request->deployment = 'voluptates';
    $request->location = 'quasi';
    $request->project = 'repudiandae';

    $response = $sdk->registry->registryGetApiDeployment($request);

    if ($response->apiDeployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryGetApiSpec

GetApiSpec returns a specified spec.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryGetApiSpecRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryGetApiSpecRequest();
    $request->api = 'sint';
    $request->location = 'veritatis';
    $request->project = 'itaque';
    $request->spec = 'incidunt';
    $request->version = 'enim';

    $response = $sdk->registry->registryGetApiSpec($request);

    if ($response->apiSpec !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryGetApiSpecContents

GetApiSpecContents returns the contents of a specified spec.
 If specs are stored with GZip compression, the default behavior
 is to return the spec uncompressed (the mime_type response field
 indicates the exact format returned).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryGetApiSpecContentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryGetApiSpecContentsRequest();
    $request->api = 'consequatur';
    $request->location = 'est';
    $request->project = 'quibusdam';
    $request->spec = 'explicabo';
    $request->version = 'deserunt';

    $response = $sdk->registry->registryGetApiSpecContents($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryGetApiVersion

GetApiVersion returns a specified version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryGetApiVersionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryGetApiVersionRequest();
    $request->api = 'distinctio';
    $request->location = 'quibusdam';
    $request->project = 'labore';
    $request->version = 'modi';

    $response = $sdk->registry->registryGetApiVersion($request);

    if ($response->apiVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryGetArtifact

GetArtifact returns a specified artifact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryGetArtifactRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryGetArtifactRequest();
    $request->artifact = 'qui';
    $request->location = 'aliquid';
    $request->project = 'cupiditate';

    $response = $sdk->registry->registryGetArtifact($request);

    if ($response->artifact !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryGetArtifactContents

GetArtifactContents returns the contents of a specified artifact.
 If artifacts are stored with GZip compression, the default behavior
 is to return the artifact uncompressed (the mime_type response field
 indicates the exact format returned).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryGetArtifactContentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryGetArtifactContentsRequest();
    $request->artifact = 'quos';
    $request->location = 'perferendis';
    $request->project = 'magni';

    $response = $sdk->registry->registryGetArtifactContents($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryListApiDeploymentRevisions

ListApiDeploymentRevisions lists all revisions of a deployment.
 Revisions are returned in descending order of revision creation time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryListApiDeploymentRevisionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryListApiDeploymentRevisionsRequest();
    $request->api = 'assumenda';
    $request->deployment = 'ipsam';
    $request->location = 'alias';
    $request->pageSize = 146441;
    $request->pageToken = 'dolorum';
    $request->project = 'excepturi';

    $response = $sdk->registry->registryListApiDeploymentRevisions($request);

    if ($response->listApiDeploymentRevisionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryListApiDeployments

ListApiDeployments returns matching deployments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryListApiDeploymentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryListApiDeploymentsRequest();
    $request->api = 'tempora';
    $request->filter = 'facilis';
    $request->location = 'tempore';
    $request->pageSize = 288476;
    $request->pageToken = 'delectus';
    $request->project = 'eum';

    $response = $sdk->registry->registryListApiDeployments($request);

    if ($response->listApiDeploymentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryListApiSpecRevisions

ListApiSpecRevisions lists all revisions of a spec.
 Revisions are returned in descending order of revision creation time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryListApiSpecRevisionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryListApiSpecRevisionsRequest();
    $request->api = 'non';
    $request->location = 'eligendi';
    $request->pageSize = 576157;
    $request->pageToken = 'aliquid';
    $request->project = 'provident';
    $request->spec = 'necessitatibus';
    $request->version = 'sint';

    $response = $sdk->registry->registryListApiSpecRevisions($request);

    if ($response->listApiSpecRevisionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryListApiSpecs

ListApiSpecs returns matching specs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryListApiSpecsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryListApiSpecsRequest();
    $request->api = 'officia';
    $request->filter = 'dolor';
    $request->location = 'debitis';
    $request->pageSize = 952749;
    $request->pageToken = 'dolorum';
    $request->project = 'in';
    $request->version = 'in';

    $response = $sdk->registry->registryListApiSpecs($request);

    if ($response->listApiSpecsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryListApiVersions

ListApiVersions returns matching versions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryListApiVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryListApiVersionsRequest();
    $request->api = 'illum';
    $request->filter = 'maiores';
    $request->location = 'rerum';
    $request->pageSize = 116202;
    $request->pageToken = 'magnam';
    $request->project = 'cumque';

    $response = $sdk->registry->registryListApiVersions($request);

    if ($response->listApiVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryListApis

ListApis returns matching APIs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryListApisRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryListApisRequest();
    $request->filter = 'facere';
    $request->location = 'ea';
    $request->pageSize = 396506;
    $request->pageToken = 'laborum';
    $request->project = 'accusamus';

    $response = $sdk->registry->registryListApis($request);

    if ($response->listApisResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryListArtifacts

ListArtifacts returns matching artifacts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryListArtifactsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryListArtifactsRequest();
    $request->filter = 'non';
    $request->location = 'occaecati';
    $request->pageSize = 313218;
    $request->pageToken = 'accusamus';
    $request->project = 'delectus';

    $response = $sdk->registry->registryListArtifacts($request);

    if ($response->listArtifactsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryReplaceArtifact

ReplaceArtifact can be used to replace a specified artifact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryReplaceArtifactRequest;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryReplaceArtifactRequest();
    $request->artifactInput = new ArtifactInput();
    $request->artifactInput->contents = 'quidem';
    $request->artifactInput->mimeType = 'provident';
    $request->artifactInput->name = 'Lynn Kuvalis';
    $request->artifact = 'amet';
    $request->location = 'deserunt';
    $request->project = 'nisi';

    $response = $sdk->registry->registryReplaceArtifact($request);

    if ($response->artifact !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryRollbackApiDeployment

RollbackApiDeployment sets the current revision to a specified prior
 revision. Note that this creates a new revision with a new revision ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryRollbackApiDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\RollbackApiDeploymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryRollbackApiDeploymentRequest();
    $request->rollbackApiDeploymentRequest = new RollbackApiDeploymentRequest();
    $request->rollbackApiDeploymentRequest->name = 'Ada Moen IV';
    $request->rollbackApiDeploymentRequest->revisionId = 'magnam';
    $request->api = 'distinctio';
    $request->deployment = 'id';
    $request->location = 'labore';
    $request->project = 'labore';

    $response = $sdk->registry->registryRollbackApiDeployment($request);

    if ($response->apiDeployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryRollbackApiSpec

RollbackApiSpec sets the current revision to a specified prior revision.
 Note that this creates a new revision with a new revision ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryRollbackApiSpecRequest;
use \OpenAPI\OpenAPI\Models\Shared\RollbackApiSpecRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryRollbackApiSpecRequest();
    $request->rollbackApiSpecRequest = new RollbackApiSpecRequest();
    $request->rollbackApiSpecRequest->name = 'Ada Rohan';
    $request->rollbackApiSpecRequest->revisionId = 'aspernatur';
    $request->api = 'architecto';
    $request->location = 'magnam';
    $request->project = 'et';
    $request->spec = 'excepturi';
    $request->version = 'ullam';

    $response = $sdk->registry->registryRollbackApiSpec($request);

    if ($response->apiSpec !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryTagApiDeploymentRevision

TagApiDeploymentRevision adds a tag to a specified revision of a
 deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryTagApiDeploymentRevisionRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagApiDeploymentRevisionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryTagApiDeploymentRevisionRequest();
    $request->tagApiDeploymentRevisionRequest = new TagApiDeploymentRevisionRequest();
    $request->tagApiDeploymentRevisionRequest->name = 'Miss Julian Marvin';
    $request->tagApiDeploymentRevisionRequest->tag = 'mollitia';
    $request->api = 'ad';
    $request->deployment = 'eum';
    $request->location = 'dolor';
    $request->project = 'necessitatibus';

    $response = $sdk->registry->registryTagApiDeploymentRevision($request);

    if ($response->apiDeployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryTagApiSpecRevision

TagApiSpecRevision adds a tag to a specified revision of a spec.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryTagApiSpecRevisionRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagApiSpecRevisionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryTagApiSpecRevisionRequest();
    $request->tagApiSpecRevisionRequest = new TagApiSpecRevisionRequest();
    $request->tagApiSpecRevisionRequest->name = 'Vivian Boyle';
    $request->tagApiSpecRevisionRequest->tag = 'debitis';
    $request->api = 'eius';
    $request->location = 'maxime';
    $request->project = 'deleniti';
    $request->spec = 'facilis';
    $request->version = 'in';

    $response = $sdk->registry->registryTagApiSpecRevision($request);

    if ($response->apiSpec !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryUpdateApi

UpdateApi can be used to modify a specified API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryUpdateApiRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryUpdateApiRequest();
    $request->apiInput = new ApiInput();
    $request->apiInput->annotations = [
        'architecto' => 'repudiandae',
    ];
    $request->apiInput->availability = 'ullam';
    $request->apiInput->description = 'expedita';
    $request->apiInput->displayName = 'nihil';
    $request->apiInput->labels = [
        'quibusdam' => 'sed',
        'saepe' => 'pariatur',
        'accusantium' => 'consequuntur',
        'praesentium' => 'natus',
    ];
    $request->apiInput->name = 'Joan Satterfield';
    $request->apiInput->recommendedDeployment = 'maxime';
    $request->apiInput->recommendedVersion = 'ea';
    $request->allowMissing = false;
    $request->api = 'excepturi';
    $request->location = 'odit';
    $request->project = 'ea';
    $request->updateMask = 'accusantium';

    $response = $sdk->registry->registryUpdateApi($request);

    if ($response->api !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryUpdateApiDeployment

UpdateApiDeployment can be used to modify a specified deployment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryUpdateApiDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiDeploymentInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryUpdateApiDeploymentRequest();
    $request->apiDeploymentInput = new ApiDeploymentInput();
    $request->apiDeploymentInput->accessGuidance = 'ab';
    $request->apiDeploymentInput->annotations = [
        'quidem' => 'ipsam',
        'voluptate' => 'autem',
        'nam' => 'eaque',
        'pariatur' => 'nemo',
    ];
    $request->apiDeploymentInput->apiSpecRevision = 'voluptatibus';
    $request->apiDeploymentInput->description = 'perferendis';
    $request->apiDeploymentInput->displayName = 'fugiat';
    $request->apiDeploymentInput->endpointUri = 'amet';
    $request->apiDeploymentInput->externalChannelUri = 'aut';
    $request->apiDeploymentInput->intendedAudience = 'cumque';
    $request->apiDeploymentInput->labels = [
        'hic' => 'libero',
        'nobis' => 'dolores',
    ];
    $request->apiDeploymentInput->name = 'Mrs. Deanna Kuhn';
    $request->allowMissing = false;
    $request->api = 'eos';
    $request->deployment = 'perferendis';
    $request->location = 'dolores';
    $request->project = 'minus';
    $request->updateMask = 'quam';

    $response = $sdk->registry->registryUpdateApiDeployment($request);

    if ($response->apiDeployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryUpdateApiSpec

UpdateApiSpec can be used to modify a specified spec.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryUpdateApiSpecRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiSpecInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryUpdateApiSpecRequest();
    $request->apiSpecInput = new ApiSpecInput();
    $request->apiSpecInput->annotations = [
        'vero' => 'nostrum',
    ];
    $request->apiSpecInput->contents = 'hic';
    $request->apiSpecInput->description = 'recusandae';
    $request->apiSpecInput->filename = 'omnis';
    $request->apiSpecInput->labels = [
        'perspiciatis' => 'voluptatem',
        'porro' => 'consequuntur',
        'blanditiis' => 'error',
    ];
    $request->apiSpecInput->mimeType = 'eaque';
    $request->apiSpecInput->name = 'Jean Ferry';
    $request->apiSpecInput->sourceUri = 'modi';
    $request->allowMissing = false;
    $request->api = 'iste';
    $request->location = 'dolorum';
    $request->project = 'deleniti';
    $request->spec = 'pariatur';
    $request->updateMask = 'provident';
    $request->version = 'nobis';

    $response = $sdk->registry->registryUpdateApiSpec($request);

    if ($response->apiSpec !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registryUpdateApiVersion

UpdateApiVersion can be used to modify a specified version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryUpdateApiVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiVersionInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryUpdateApiVersionRequest();
    $request->apiVersionInput = new ApiVersionInput();
    $request->apiVersionInput->annotations = [
        'delectus' => 'quaerat',
        'quos' => 'aliquid',
        'dolorem' => 'dolorem',
    ];
    $request->apiVersionInput->description = 'dolor';
    $request->apiVersionInput->displayName = 'qui';
    $request->apiVersionInput->labels = [
        'hic' => 'excepturi',
    ];
    $request->apiVersionInput->name = 'Adrian Kuhn';
    $request->apiVersionInput->state = 'dolorum';
    $request->allowMissing = false;
    $request->api = 'numquam';
    $request->location = 'veritatis';
    $request->project = 'ipsa';
    $request->updateMask = 'ipsa';
    $request->version = 'iure';

    $response = $sdk->registry->registryUpdateApiVersion($request);

    if ($response->apiVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
