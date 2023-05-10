# health

## Overview

The Health service allows you to both validate and monitor your Appwrite server's health.

### Available Operations

* [healthGet](#healthget) - Get HTTP
* [healthGetAntiVirus](#healthgetantivirus) - Get Anti virus
* [healthGetCache](#healthgetcache) - Get Cache
* [healthGetDB](#healthgetdb) - Get DB
* [healthGetQueueCertificates](#healthgetqueuecertificates) - Get Certificate Queue
* [healthGetQueueFunctions](#healthgetqueuefunctions) - Get Functions Queue
* [healthGetQueueLogs](#healthgetqueuelogs) - Get Logs Queue
* [healthGetQueueTasks](#healthgetqueuetasks) - Get Tasks Queue
* [healthGetQueueUsage](#healthgetqueueusage) - Get Usage Queue
* [healthGetQueueWebhooks](#healthgetqueuewebhooks) - Get Webhooks Queue
* [healthGetStorageLocal](#healthgetstoragelocal) - Get Local Storage
* [healthGetTime](#healthgettime) - Get Time

## healthGet

Check the Appwrite HTTP server is up and responsive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HealthGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new HealthGetSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->health->healthGet($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## healthGetAntiVirus

Check the Appwrite Anti Virus server is up and connection is successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HealthGetAntiVirusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new HealthGetAntiVirusSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->health->healthGetAntiVirus($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## healthGetCache

Check the Appwrite in-memory cache server is up and connection is successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HealthGetCacheSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new HealthGetCacheSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->health->healthGetCache($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## healthGetDB

Check the Appwrite database server is up and connection is successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HealthGetDBSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new HealthGetDBSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->health->healthGetDB($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## healthGetQueueCertificates

Get the number of certificates that are waiting to be issued against [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HealthGetQueueCertificatesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new HealthGetQueueCertificatesSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->health->healthGetQueueCertificates($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## healthGetQueueFunctions

Get Functions Queue

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HealthGetQueueFunctionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new HealthGetQueueFunctionsSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->health->healthGetQueueFunctions($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## healthGetQueueLogs

Get the number of logs that are waiting to be processed in the Appwrite internal queue server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HealthGetQueueLogsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new HealthGetQueueLogsSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->health->healthGetQueueLogs($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## healthGetQueueTasks

Get the number of tasks that are waiting to be processed in the Appwrite internal queue server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HealthGetQueueTasksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new HealthGetQueueTasksSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->health->healthGetQueueTasks($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## healthGetQueueUsage

Get the number of usage stats that are waiting to be processed in the Appwrite internal queue server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HealthGetQueueUsageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new HealthGetQueueUsageSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->health->healthGetQueueUsage($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## healthGetQueueWebhooks

Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HealthGetQueueWebhooksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new HealthGetQueueWebhooksSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->health->healthGetQueueWebhooks($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## healthGetStorageLocal

Check the Appwrite local storage device is up and connection is successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HealthGetStorageLocalSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new HealthGetStorageLocalSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->health->healthGetStorageLocal($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## healthGetTime

Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HealthGetTimeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new HealthGetTimeSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->health->healthGetTime($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
