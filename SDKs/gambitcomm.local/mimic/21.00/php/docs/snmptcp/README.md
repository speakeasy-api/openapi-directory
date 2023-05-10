# snmptcp

### Available Operations

* [protocolSnmptcpGetArgs](#protocolsnmptcpgetargs) - Show the agent's SNMPTCP argument structure
* [protocolSnmptcpGetConfig](#protocolsnmptcpgetconfig) - Show the agent's SNMPTCP configuration
* [protocolSnmptcpGetStatistics](#protocolsnmptcpgetstatistics) - Show the agent's SNMPTCP statistics
* [protocolSnmptcpGetStatsHdr](#protocolsnmptcpgetstatshdr) - Show the SNMPTCP statistics headers
* [protocolSnmptcpGetTrace](#protocolsnmptcpgettrace) - Show the agent's SNMPTCP traffic tracing
* [protocolSnmptcpIpaliasDisable](#protocolsnmptcpipaliasdisable) - Disable individual IP aliases on the agent and the simulator host
* [protocolSnmptcpIpaliasEnable](#protocolsnmptcpipaliasenable) - Enable individual IP aliases on the agent and the simulator host
* [protocolSnmptcpIpaliasIsenabled](#protocolsnmptcpipaliasisenabled) - Check individual IP aliases on the agent and the simulator host
* [protocolSnmptcpIpaliasList](#protocolsnmptcpipaliaslist) - List all IP aliases on the agent and the simulator host
* [protocolSnmptcpSetConfig](#protocolsnmptcpsetconfig) - Set the agent's SNMPTCP configuration
* [protocolSnmptcpSetTrace](#protocolsnmptcpsettrace) - Set the agent's SNMPTCP traffic tracing

## protocolSnmptcpGetArgs

Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmptcpGetArgsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmptcpGetArgsRequest();
    $request->agentNum = 359978;

    $response = $sdk->snmptcp->protocolSnmptcpGetArgs($request);

    if ($response->protocolSnmptcpGetArgs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmptcpGetConfig

Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmptcpGetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmptcpGetConfigRequest();
    $request->agentNum = 944124;

    $response = $sdk->snmptcp->protocolSnmptcpGetConfig($request);

    if ($response->configSNMPTCP !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmptcpGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmptcpGetStatisticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmptcpGetStatisticsRequest();
    $request->agentNum = 729991;

    $response = $sdk->snmptcp->protocolSnmptcpGetStatistics($request);

    if ($response->protocolSnmptcpGetStatistics200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmptcpGetStatsHdr

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
    $response = $sdk->snmptcp->protocolSnmptcpGetStatsHdr();

    if ($response->protocolSnmptcpGetStatsHdr200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmptcpGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmptcpGetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmptcpGetTraceRequest();
    $request->agentNum = 749999;

    $response = $sdk->snmptcp->protocolSnmptcpGetTrace($request);

    if ($response->configSNMPTCP !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmptcpIpaliasDisable

By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmptcpIpaliasDisableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmptcpIpaliasDisableRequest();
    $request->agentNum = 171629;
    $request->ipaddress = 'quis';
    $request->port = 521037;

    $response = $sdk->snmptcp->protocolSnmptcpIpaliasDisable($request);

    if ($response->protocolSnmptcpIpaliasDisable200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmptcpIpaliasEnable

By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmptcpIpaliasEnableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmptcpIpaliasEnableRequest();
    $request->agentNum = 489549;
    $request->ipaddress = 'eaque';
    $request->port = 338985;

    $response = $sdk->snmptcp->protocolSnmptcpIpaliasEnable($request);

    if ($response->protocolSnmptcpIpaliasEnable200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmptcpIpaliasIsenabled

By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmptcpIpaliasIsenabledRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmptcpIpaliasIsenabledRequest();
    $request->agentNum = 199996;
    $request->ipaddress = 'eos';
    $request->port = 18521;

    $response = $sdk->snmptcp->protocolSnmptcpIpaliasIsenabled($request);

    if ($response->protocolSnmptcpIpaliasIsenabled200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmptcpIpaliasList

By default, the MIMIC SNMPTCP server listens on all the IP addresses (aliases) that are configured for an agent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmptcpIpaliasListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmptcpIpaliasListRequest();
    $request->agentNum = 170986;

    $response = $sdk->snmptcp->protocolSnmptcpIpaliasList($request);

    if ($response->ipAliases !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmptcpSetConfig

Agent's SNMPTCP configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmptcpSetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmptcpSetConfigRequest();
    $request->agentNum = 793698;
    $request->argument = 'quam';
    $request->value = 'dolor';

    $response = $sdk->snmptcp->protocolSnmptcpSetConfig($request);

    if ($response->protocolSnmptcpSetConfig200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmptcpSetTrace

1 to enable, 0 to disable

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmptcpSetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmptcpSetTraceRequest();
    $request->agentNum = 874573;
    $request->enableOrNot = 'nostrum';

    $response = $sdk->snmptcp->protocolSnmptcpSetTrace($request);

    if ($response->protocolSnmptcpSetTrace200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
