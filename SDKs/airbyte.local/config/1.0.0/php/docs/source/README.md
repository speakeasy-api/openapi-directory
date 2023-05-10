# source

## Overview

Source related resources.

### Available Operations

* [checkConnectionToSource](#checkconnectiontosource) - Check connection to the source
* [checkConnectionToSourceForUpdate](#checkconnectiontosourceforupdate) - Check connection for a proposed update to a source
* [cloneSource](#clonesource) - Clone source
* [createSource](#createsource) - Create a source
* [deleteSource](#deletesource) - Delete a source
* [discoverSchemaForSource](#discoverschemaforsource) - Discover the schema catalog of the source
* [getMostRecentSourceActorCatalog](#getmostrecentsourceactorcatalog) - Get most recent ActorCatalog for source
* [getSource](#getsource) - Get source
* [listSourcesForWorkspace](#listsourcesforworkspace) - List sources for workspace
* [searchSources](#searchsources) - Search sources
* [updateSource](#updatesource) - Update a source
* [writeDiscoverCatalogResult](#writediscovercatalogresult) - Should only called from worker, to write result from discover activity back to DB.

## checkConnectionToSource

Check connection to the source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SourceIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SourceIdRequestBody();
    $request->sourceId = '1bdb1cf4-b888-4ebd-bc4c-cca99bc7fc0b';

    $response = $sdk->source->checkConnectionToSource($request);

    if ($response->checkConnectionRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checkConnectionToSourceForUpdate

Check connection for a proposed update to a source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SourceUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SourceUpdate();
    $request->connectionConfiguration = 'fugit';
    $request->name = 'Mr. Guillermo Walter';
    $request->sourceId = '73e42b00-6d67-4887-8ba8-581a58208c54';

    $response = $sdk->source->checkConnectionToSourceForUpdate($request);

    if ($response->checkConnectionRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloneSource

Clone source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SourceCloneRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SourceCloneConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SourceCloneRequestBody();
    $request->sourceCloneId = 'fefa9c95-f2ea-4c55-a5d3-07cfee81206e';
    $request->sourceConfiguration = new SourceCloneConfiguration();
    $request->sourceConfiguration->connectionConfiguration = 'sed';
    $request->sourceConfiguration->name = 'Ralph Dooley';

    $response = $sdk->source->cloneSource($request);

    if ($response->sourceRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSource

Create a source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SourceCreate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SourceCreate();
    $request->connectionConfiguration = 'aliquam';
    $request->name = 'Edwin Cartwright';
    $request->sourceDefinitionId = '80d3f213-2af0-4310-ad51-4f4cc6f18bf9';
    $request->workspaceId = '621a6a4f-77a8-47ee-be4b-e752c65b3441';

    $response = $sdk->source->createSource($request);

    if ($response->sourceRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSource

Delete a source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SourceIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SourceIdRequestBody();
    $request->sourceId = '8e3bb91c-8d97-45e0-a841-9d8f84f144f3';

    $response = $sdk->source->deleteSource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## discoverSchemaForSource

Discover the schema catalog of the source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SourceDiscoverSchemaRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SourceDiscoverSchemaRequestBody();
    $request->connectionId = 'e07edcc4-aa5f-43ca-bd90-5a972e056728';
    $request->disableCache = false;
    $request->notifySchemaChange = false;
    $request->sourceId = '227b2d30-9470-4bf7-a4fa-87cf535a6fae';

    $response = $sdk->source->discoverSchemaForSource($request);

    if ($response->sourceDiscoverSchemaRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMostRecentSourceActorCatalog

Get most recent ActorCatalog for source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SourceIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SourceIdRequestBody();
    $request->sourceId = '54ebf60c-321f-4023-b75d-2367fe1a0cc8';

    $response = $sdk->source->getMostRecentSourceActorCatalog($request);

    if ($response->actorCatalogWithUpdatedAt !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSource

Get source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SourceIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SourceIdRequestBody();
    $request->sourceId = 'df79f0a3-96d9-40c3-a4b7-c15dfbace188';

    $response = $sdk->source->getSource($request);

    if ($response->sourceRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSourcesForWorkspace

List sources for workspace. Does not return deleted sources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\WorkspaceIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkspaceIdRequestBody();
    $request->workspaceId = 'b1c4ee2c-8c6c-4e61-9fee-b1c7cbdb6eec';

    $response = $sdk->source->listSourcesForWorkspace($request);

    if ($response->sourceReadList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchSources

Search sources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SourceSearch;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SourceSearch();
    $request->connectionConfiguration = 'nihil';
    $request->name = 'Tracy Kuphal';
    $request->sourceDefinitionId = 'a2531774-7dc9-415a-92ca-f5dd6723dc0f';
    $request->sourceId = '5ae2f3a6-b700-4878-b561-43f5a6c98b55';
    $request->sourceName = 'ipsam';
    $request->workspaceId = '54080d40-bcac-4c6c-bd6b-5f3ec909304f';

    $response = $sdk->source->searchSources($request);

    if ($response->sourceReadList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSource

Update a source

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SourceUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SourceUpdate();
    $request->connectionConfiguration = 'omnis';
    $request->name = 'Gina Robel';
    $request->sourceId = '2553819b-474b-40ed-a0e5-6248fff639a9';

    $response = $sdk->source->updateSource($request);

    if ($response->sourceRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## writeDiscoverCatalogResult

Should only called from worker, to write result from discover activity back to DB.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SourceDiscoverSchemaWriteRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AirbyteCatalog;
use \OpenAPI\OpenAPI\Models\Shared\AirbyteStreamAndConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AirbyteStreamConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DestinationSyncModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SelectedFieldInfo;
use \OpenAPI\OpenAPI\Models\Shared\SyncModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AirbyteStream;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SourceDiscoverSchemaWriteRequestBody();
    $request->catalog = new AirbyteCatalog();
    $request->catalog->streams = [
        new AirbyteStreamAndConfiguration(),
    ];
    $request->configurationHash = 'ipsa';
    $request->connectorVersion = 'mollitia';
    $request->sourceId = 'bdcab626-7669-46e1-ac00-221b335d89ac';

    $response = $sdk->source->writeDiscoverCatalogResult($request);

    if ($response->discoverCatalogResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
