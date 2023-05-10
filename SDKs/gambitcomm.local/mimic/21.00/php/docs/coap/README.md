# coap

### Available Operations

* [protocolCoapGetArgs](#protocolcoapgetargs) - Show the agent's COAP argument structure
* [protocolCoapGetConfig](#protocolcoapgetconfig) - Show the agent's COAP configuration
* [protocolCoapGetStatistics](#protocolcoapgetstatistics) - Show the agent's COAP statistics
* [protocolCoapGetStatsHdr](#protocolcoapgetstatshdr) - Show the COAP statistics headers
* [protocolCoapGetTrace](#protocolcoapgettrace) - Show the agent's COAP traffic tracing
* [protocolCoapSetConfig](#protocolcoapsetconfig) - Set the agent's COAP configuration
* [protocolCoapSetTrace](#protocolcoapsettrace) - Set the agent's COAP traffic tracing

## protocolCoapGetArgs

Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolCoapGetArgsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolCoapGetArgsRequest();
    $request->agentNum = 19987;

    $response = $sdk->coap->protocolCoapGetArgs($request);

    if ($response->protocolCoapGetArgs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolCoapGetConfig

Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolCoapGetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolCoapGetConfigRequest();
    $request->agentNum = 39187;

    $response = $sdk->coap->protocolCoapGetConfig($request);

    if ($response->configCOAP !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolCoapGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolCoapGetStatisticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolCoapGetStatisticsRequest();
    $request->agentNum = 441711;

    $response = $sdk->coap->protocolCoapGetStatistics($request);

    if ($response->protocolCoapGetStatistics200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolCoapGetStatsHdr

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
    $response = $sdk->coap->protocolCoapGetStatsHdr();

    if ($response->protocolCoapGetStatsHdr200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolCoapGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolCoapGetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolCoapGetTraceRequest();
    $request->agentNum = 282807;

    $response = $sdk->coap->protocolCoapGetTrace($request);

    if ($response->configCOAP !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolCoapSetConfig

Agent's COAP configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolCoapSetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolCoapSetConfigRequest();
    $request->agentNum = 979587;
    $request->argument = 'dicta';
    $request->value = 'corporis';

    $response = $sdk->coap->protocolCoapSetConfig($request);

    if ($response->protocolCoapSetConfig200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolCoapSetTrace

1 to enable, 0 to disable

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolCoapSetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolCoapSetTraceRequest();
    $request->agentNum = 296140;
    $request->enableOrNot = 'iusto';

    $response = $sdk->coap->protocolCoapSetTrace($request);

    if ($response->protocolCoapSetTrace200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
