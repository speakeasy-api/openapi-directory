# ssh

### Available Operations

* [protocolSshGetArgs](#protocolsshgetargs) - Show the agent's SSH argument structure
* [protocolSshGetConfig](#protocolsshgetconfig) - Show the agent's SSH configuration
* [protocolSshGetStatistics](#protocolsshgetstatistics) - Show the agent's SSH statistics
* [protocolSshGetStatsHdr](#protocolsshgetstatshdr) - Show the SSH statistics headers
* [protocolSshGetTrace](#protocolsshgettrace) - Show the agent's SSH traffic tracing
* [protocolSshIpaliasDisable](#protocolsshipaliasdisable) - Disable individual IP aliases on the agent and the simulator host
* [protocolSshIpaliasEnable](#protocolsshipaliasenable) - Enable individual IP aliases on the agent and the simulator host
* [protocolSshIpaliasIsenabled](#protocolsshipaliasisenabled) - Check individual IP aliases on the agent and the simulator host
* [protocolSshIpaliasList](#protocolsshipaliaslist) - List all IP aliases on the agent and the simulator host
* [protocolSshSetConfig](#protocolsshsetconfig) - Set the agent's SSH configuration
* [protocolSshSetTrace](#protocolsshsettrace) - Set the agent's SSH traffic tracing

## protocolSshGetArgs

Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSshGetArgsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSshGetArgsRequest();
    $request->agentNum = 453697;

    $response = $sdk->ssh->protocolSshGetArgs($request);

    if ($response->protocolSshGetArgs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSshGetConfig

Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSshGetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSshGetConfigRequest();
    $request->agentNum = 677082;

    $response = $sdk->ssh->protocolSshGetConfig($request);

    if ($response->configSSH !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSshGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSshGetStatisticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSshGetStatisticsRequest();
    $request->agentNum = 536579;

    $response = $sdk->ssh->protocolSshGetStatistics($request);

    if ($response->protocolSshGetStatistics200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSshGetStatsHdr

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
    $response = $sdk->ssh->protocolSshGetStatsHdr();

    if ($response->protocolSshGetStatsHdr200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSshGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSshGetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSshGetTraceRequest();
    $request->agentNum = 607045;

    $response = $sdk->ssh->protocolSshGetTrace($request);

    if ($response->configSSH !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSshIpaliasDisable

By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSshIpaliasDisableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSshIpaliasDisableRequest();
    $request->agentNum = 896672;
    $request->ipaddress = 'distinctio';
    $request->port = 990339;

    $response = $sdk->ssh->protocolSshIpaliasDisable($request);

    if ($response->protocolSshIpaliasDisable200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSshIpaliasEnable

By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSshIpaliasEnableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSshIpaliasEnableRequest();
    $request->agentNum = 469497;
    $request->ipaddress = 'ipsum';
    $request->port = 456015;

    $response = $sdk->ssh->protocolSshIpaliasEnable($request);

    if ($response->protocolSshIpaliasEnable200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSshIpaliasIsenabled

By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSshIpaliasIsenabledRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSshIpaliasIsenabledRequest();
    $request->agentNum = 663078;
    $request->ipaddress = 'saepe';
    $request->port = 263322;

    $response = $sdk->ssh->protocolSshIpaliasIsenabled($request);

    if ($response->protocolSshIpaliasIsenabled200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSshIpaliasList

By default, the MIMIC SSH server listens on all the IP addresses (aliases) that are configured for an agent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSshIpaliasListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSshIpaliasListRequest();
    $request->agentNum = 137220;

    $response = $sdk->ssh->protocolSshIpaliasList($request);

    if ($response->ipAliases !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSshSetConfig

Agent's SSH configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSshSetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSshSetConfigRequest();
    $request->agentNum = 20651;
    $request->argument = 'amet';
    $request->value = 'optio';

    $response = $sdk->ssh->protocolSshSetConfig($request);

    if ($response->protocolSshSetConfig200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSshSetTrace

1 to enable, 0 to disable

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSshSetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSshSetTraceRequest();
    $request->agentNum = 881586;
    $request->enableOrNot = 'ad';

    $response = $sdk->ssh->protocolSshSetTrace($request);

    if ($response->protocolSshSetTrace200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
