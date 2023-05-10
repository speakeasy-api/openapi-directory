# sflow

### Available Operations

* [protocolSflowGetArgs](#protocolsflowgetargs) - Show the agent's SFLOW argument structure
* [protocolSflowGetConfig](#protocolsflowgetconfig) - Show the agent's SFLOW configuration
* [protocolSflowGetStatistics](#protocolsflowgetstatistics) - Show the agent's SFLOW statistics
* [protocolSflowGetStatsHdr](#protocolsflowgetstatshdr) - Show the SFLOW statistics headers
* [protocolSflowGetTrace](#protocolsflowgettrace) - Show the agent's SFLOW traffic tracing
* [protocolSflowHalt](#protocolsflowhalt) - Halt SFLOW traffic
* [protocolSflowReload](#protocolsflowreload) - Reload SFLOW configuration before resuming traffic
* [protocolSflowResume](#protocolsflowresume) - Resuming traffic
* [protocolSflowSetConfig](#protocolsflowsetconfig) - Set the agent's SFLOW configuration
* [protocolSflowSetTrace](#protocolsflowsettrace) - Set the agent's SFLOW traffic tracing

## protocolSflowGetArgs

Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSflowGetArgsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSflowGetArgsRequest();
    $request->agentNum = 453543;

    $response = $sdk->sflow->protocolSflowGetArgs($request);

    if ($response->protocolSflowGetArgs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSflowGetConfig

Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSflowGetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSflowGetConfigRequest();
    $request->agentNum = 420075;

    $response = $sdk->sflow->protocolSflowGetConfig($request);

    if ($response->configSFLOW !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSflowGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSflowGetStatisticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSflowGetStatisticsRequest();
    $request->agentNum = 722056;

    $response = $sdk->sflow->protocolSflowGetStatistics($request);

    if ($response->protocolSflowGetStatistics200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSflowGetStatsHdr

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
    $response = $sdk->sflow->protocolSflowGetStatsHdr();

    if ($response->protocolSflowGetStatsHdr200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSflowGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSflowGetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSflowGetTraceRequest();
    $request->agentNum = 50588;

    $response = $sdk->sflow->protocolSflowGetTrace($request);

    if ($response->configSFLOW !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSflowHalt

Halt SFLOW traffic

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSflowHaltRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSflowHaltRequest();
    $request->agentNum = 866383;

    $response = $sdk->sflow->protocolSflowHalt($request);

    if ($response->protocolSflowHalt200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSflowReload

Reload SFLOW configuration before resuming traffic

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSflowReloadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSflowReloadRequest();
    $request->agentNum = 365496;

    $response = $sdk->sflow->protocolSflowReload($request);

    if ($response->protocolSflowReload200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSflowResume

Resuming traffic

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSflowResumeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSflowResumeRequest();
    $request->agentNum = 975522;

    $response = $sdk->sflow->protocolSflowResume($request);

    if ($response->protocolSflowResume200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSflowSetConfig

Agent's SFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSflowSetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSflowSetConfigRequest();
    $request->agentNum = 16627;
    $request->argument = 'fugiat';
    $request->value = 'amet';

    $response = $sdk->sflow->protocolSflowSetConfig($request);

    if ($response->protocolSflowSetConfig200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSflowSetTrace

1 to enable, 0 to disable

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSflowSetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSflowSetTraceRequest();
    $request->agentNum = 11714;
    $request->enableOrNot = 'cumque';

    $response = $sdk->sflow->protocolSflowSetTrace($request);

    if ($response->protocolSflowSetTrace200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
