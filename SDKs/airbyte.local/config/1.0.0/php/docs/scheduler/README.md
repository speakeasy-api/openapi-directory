# scheduler

### Available Operations

* [executeDestinationCheckConnection](#executedestinationcheckconnection) - Run check connection for a given destination configuration
* [executeSourceCheckConnection](#executesourcecheckconnection) - Run check connection for a given source configuration
* [executeSourceDiscoverSchema](#executesourcediscoverschema) - Run discover schema for a given source a source configuration

## executeDestinationCheckConnection

Run check connection for a given destination configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DestinationCoreConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DestinationCoreConfig();
    $request->connectionConfiguration = 'necessitatibus';
    $request->destinationDefinitionId = 'c09ff8f0-f816-4ff3-877c-13e902c14125';
    $request->destinationId = 'b0960a66-8151-4a47-aaf9-23c5949f83f3';
    $request->workspaceId = '50cf876f-fb90-41c6-acbb-4e243cf789ff';

    $response = $sdk->scheduler->executeDestinationCheckConnection($request);

    if ($response->checkConnectionRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## executeSourceCheckConnection

Run check connection for a given source configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SourceCoreConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SourceCoreConfig();
    $request->connectionConfiguration = 'animi';
    $request->sourceDefinitionId = 'feda53e5-ae6e-40ac-984c-2b9c247c8837';
    $request->sourceId = '3a40e194-2f32-4e55-8557-56f5d56d0bd0';
    $request->workspaceId = 'af2dfe13-db4f-462c-ba3f-8941aebc0b80';

    $response = $sdk->scheduler->executeSourceCheckConnection($request);

    if ($response->checkConnectionRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## executeSourceDiscoverSchema

Run discover schema for a given source a source configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SourceCoreConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SourceCoreConfig();
    $request->connectionConfiguration = 'deserunt';
    $request->sourceDefinitionId = '6924d3b2-ecfc-4c8f-8950-10f5dd3d6fa1';
    $request->sourceId = '804e54c8-2f16-48a3-a3c8-873e484380b1';
    $request->workspaceId = 'f6b8ca27-5a60-4a04-8495-cc699171b51c';

    $response = $sdk->scheduler->executeSourceDiscoverSchema($request);

    if ($response->sourceDiscoverSchemaRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
