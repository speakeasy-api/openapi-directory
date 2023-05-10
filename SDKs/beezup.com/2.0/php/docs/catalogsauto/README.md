# catalogsAuto

### Available Operations

* [autoConfigureAutoImportInterval](#autoconfigureautoimportinterval) - Configure Auto Import Interval
* [autoDeleteAutoImport](#autodeleteautoimport) - Delete Auto Import
* [autoGetAutoImportConfiguration](#autogetautoimportconfiguration) - Get the auto import configuration
* [autoPauseAutoImport](#autopauseautoimport) - Pause Auto Import
* [autoResumeAutoImport](#autoresumeautoimport) - Resume Auto Import
* [autoScheduleAutoImport](#autoscheduleautoimport) - Configure Auto Import Schedules
* [autoStartAutoImport](#autostartautoimport) - Start Auto Import Manually
* [importationActivateAutoImport](#importationactivateautoimport) - Activate the auto importation of the last successful manual catalog importation.

## autoConfigureAutoImportInterval

Configure Auto Import Interval

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutoConfigureAutoImportIntervalRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfigureAutoImportIntervalRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutoConfigureAutoImportIntervalRequest();
    $request->configureAutoImportIntervalRequest = new ConfigureAutoImportIntervalRequest();
    $request->configureAutoImportIntervalRequest->interval = '04:00:00';
    $request->storeId = 'quia';

    $response = $sdk->catalogsAuto->autoConfigureAutoImportInterval($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## autoDeleteAutoImport

Delete Auto Import

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutoDeleteAutoImportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutoDeleteAutoImportRequest();
    $request->storeId = 'quis';

    $response = $sdk->catalogsAuto->autoDeleteAutoImport($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## autoGetAutoImportConfiguration

Get the auto import configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutoGetAutoImportConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutoGetAutoImportConfigurationRequest();
    $request->storeId = 'vitae';

    $response = $sdk->catalogsAuto->autoGetAutoImportConfiguration($request);

    if ($response->autoImportConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## autoPauseAutoImport

Pause Auto Import

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutoPauseAutoImportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutoPauseAutoImportRequest();
    $request->storeId = 'laborum';

    $response = $sdk->catalogsAuto->autoPauseAutoImport($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## autoResumeAutoImport

Resume Auto Import

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutoResumeAutoImportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutoResumeAutoImportRequest();
    $request->storeId = 'animi';

    $response = $sdk->catalogsAuto->autoResumeAutoImport($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## autoScheduleAutoImport

Configure Auto Import Schedules

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutoScheduleAutoImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScheduleAutoImportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutoScheduleAutoImportRequest();
    $request->scheduleAutoImportRequest = new ScheduleAutoImportRequest();
    $request->scheduleAutoImportRequest->localTimeZoneName = 'Romance Standard Time';
    $request->scheduleAutoImportRequest->schedules = [
        'odit',
        'quo',
    ];
    $request->storeId = 'sequi';

    $response = $sdk->catalogsAuto->autoScheduleAutoImport($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## autoStartAutoImport

Start Auto Import Manually

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AutoStartAutoImportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AutoStartAutoImportRequest();
    $request->storeId = 'tenetur';

    $response = $sdk->catalogsAuto->autoStartAutoImport($request);

    if ($response->linksImportationGetImportationMonitoringLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationActivateAutoImport

Once you have made your fist manual catalog importation with success, you can call this operation to import it automatically. No parameter required, we know which one it is.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationActivateAutoImportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationActivateAutoImportRequest();
    $request->storeId = 'ipsam';

    $response = $sdk->catalogsAuto->importationActivateAutoImport($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
