# dhcp

### Available Operations

* [protocolDhcpGetArgs](#protocoldhcpgetargs) - Show the agent's DHCP argument structure
* [protocolDhcpGetConfig](#protocoldhcpgetconfig) - Show the agent's DHCP configuration
* [protocolDhcpGetStatistics](#protocoldhcpgetstatistics) - Show the agent's DHCP statistics
* [protocolDhcpGetStatsHdr](#protocoldhcpgetstatshdr) - Show the DHCP statistics headers
* [protocolDhcpGetTrace](#protocoldhcpgettrace) - Show the agent's DHCP traffic tracing
* [protocolDhcpParams](#protocoldhcpparams) - Show the parameters configured by the server in its DHCP-OFFER message
* [protocolDhcpSetConfig](#protocoldhcpsetconfig) - Set the agent's DHCP configuration
* [protocolDhcpSetTrace](#protocoldhcpsettrace) - Set the agent's DHCP traffic tracing

## protocolDhcpGetArgs

Agent's DHCP configuration particulars

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolDhcpGetArgsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolDhcpGetArgsRequest();
    $request->agentNum = 118727;

    $response = $sdk->dhcp->protocolDhcpGetArgs($request);

    if ($response->protocolDhcpGetArgs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolDhcpGetConfig

Agent's DHCP configuration hwaddr,classid,add_options,script

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolDhcpGetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolDhcpGetConfigRequest();
    $request->agentNum = 688661;

    $response = $sdk->dhcp->protocolDhcpGetConfig($request);

    if ($response->configDHCP !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolDhcpGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolDhcpGetStatisticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolDhcpGetStatisticsRequest();
    $request->agentNum = 317983;

    $response = $sdk->dhcp->protocolDhcpGetStatistics($request);

    if ($response->protocolDhcpGetStatistics200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolDhcpGetStatsHdr

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
    $response = $sdk->dhcp->protocolDhcpGetStatsHdr();

    if ($response->protocolDhcpGetStatsHdr200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolDhcpGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolDhcpGetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolDhcpGetTraceRequest();
    $request->agentNum = 880476;

    $response = $sdk->dhcp->protocolDhcpGetTrace($request);

    if ($response->configDHCP !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolDhcpParams

DHCP-OFFER message parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolDhcpParamsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolDhcpParamsRequest();
    $request->agentNum = 414263;

    $response = $sdk->dhcp->protocolDhcpParams($request);

    if ($response->protocolDhcpParams200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolDhcpSetConfig

Agent's DHCP configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolDhcpSetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolDhcpSetConfigRequest();
    $request->agentNum = 918236;
    $request->argument = 'quae';
    $request->value = 'ipsum';

    $response = $sdk->dhcp->protocolDhcpSetConfig($request);

    if ($response->protocolDhcpSetConfig200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolDhcpSetTrace

1 to enable, 0 to disable

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolDhcpSetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolDhcpSetTraceRequest();
    $request->agentNum = 692472;
    $request->enableOrNot = 'molestias';

    $response = $sdk->dhcp->protocolDhcpSetTrace($request);

    if ($response->protocolDhcpSetTrace200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
