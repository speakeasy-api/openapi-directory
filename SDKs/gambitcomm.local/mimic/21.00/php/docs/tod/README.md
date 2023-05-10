# tod

### Available Operations

* [protocolTodGetArgs](#protocoltodgetargs) - Show the agent's TOD argument structure
* [protocolTodGetConfig](#protocoltodgetconfig) - Show the agent's TOD configuration
* [protocolTodGetStatistics](#protocoltodgetstatistics) - Show the agent's TOD statistics
* [protocolTodGetStatsHdr](#protocoltodgetstatshdr) - Show the TOD statistics headers
* [protocolTodGetTrace](#protocoltodgettrace) - Show the agent's TOD traffic tracing
* [protocolTodGettime](#protocoltodgettime) - Retrieve TOD time
* [protocolTodSetConfig](#protocoltodsetconfig) - Set the agent's TOD configuration
* [protocolTodSetTrace](#protocoltodsettrace) - Set the agent's TOD traffic tracing

## protocolTodGetArgs

Agent's TOD configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTodGetArgsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTodGetArgsRequest();
    $request->agentNum = 209157;

    $response = $sdk->tod->protocolTodGetArgs($request);

    if ($response->protocolTodGetArgs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTodGetConfig

Agent's TOD configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTodGetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTodGetConfigRequest();
    $request->agentNum = 292147;

    $response = $sdk->tod->protocolTodGetConfig($request);

    if ($response->configTOD !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTodGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTodGetStatisticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTodGetStatisticsRequest();
    $request->agentNum = 286915;

    $response = $sdk->tod->protocolTodGetStatistics($request);

    if ($response->protocolTodGetStatistics200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTodGetStatsHdr

The headers of statistics fields

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->tod->protocolTodGetStatsHdr();

    if ($response->protocolTodGetStatsHdr200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTodGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTodGetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTodGetTraceRequest();
    $request->agentNum = 240829;

    $response = $sdk->tod->protocolTodGetTrace($request);

    if ($response->configTOD !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTodGettime

Retrive time from server

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTodGettimeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTodGettimeRequest();
    $request->agentNum = 677263;
    $request->numRetries = 100294;
    $request->portNum = 63038;
    $request->scriptName = 'aut';
    $request->serverAddr = 'quas';
    $request->timeSec = 929530;

    $response = $sdk->tod->protocolTodGettime($request);

    if ($response->protocolTodGettime200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTodSetConfig

Agent's TOD configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTodSetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTodSetConfigRequest();
    $request->agentNum = 9240;
    $request->argument = 'est';
    $request->value = 'repellendus';

    $response = $sdk->tod->protocolTodSetConfig($request);

    if ($response->protocolTodSetConfig200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTodSetTrace

1 to enable, 0 to disable

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTodSetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTodSetTraceRequest();
    $request->agentNum = 785153;
    $request->enableOrNot = 'doloribus';

    $response = $sdk->tod->protocolTodSetTrace($request);

    if ($response->protocolTodSetTrace200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
