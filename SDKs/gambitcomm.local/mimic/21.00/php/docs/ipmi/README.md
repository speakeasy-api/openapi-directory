# ipmi

### Available Operations

* [protocolIpmiGetArgs](#protocolipmigetargs) - Show the agent's IPMI argument structure
* [protocolIpmiGetAttr](#protocolipmigetattr) - Show the outgoing message's attributes
* [protocolIpmiGetConfig](#protocolipmigetconfig) - Show the agent's IPMI configuration
* [protocolIpmiGetStatistics](#protocolipmigetstatistics) - Show the agent's IPMI statistics
* [protocolIpmiGetStatsHdr](#protocolipmigetstatshdr) - Show the IPMI statistics headers
* [protocolIpmiGetTrace](#protocolipmigettrace) - Show the agent's IPMI traffic tracing
* [protocolIpmiSetAttr](#protocolipmisetattr) - Set the outgoing message's attributes
* [protocolIpmiSetConfig](#protocolipmisetconfig) - Set the agent's IPMI configuration
* [protocolIpmiSetTrace](#protocolipmisettrace) - Set the agent's IPMI traffic tracing

## protocolIpmiGetArgs

Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolIpmiGetArgsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolIpmiGetArgsRequest();
    $request->agentNum = 146441;

    $response = $sdk->ipmi->protocolIpmiGetArgs($request);

    if ($response->protocolIpmiGetArgs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolIpmiGetAttr

Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolIpmiGetAttrRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolIpmiGetAttrRequest();
    $request->agentNum = 677817;
    $request->attr = 'excepturi';

    $response = $sdk->ipmi->protocolIpmiGetAttr($request);

    if ($response->protocolIpmiGetAttr200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolIpmiGetConfig

Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolIpmiGetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolIpmiGetConfigRequest();
    $request->agentNum = 270008;

    $response = $sdk->ipmi->protocolIpmiGetConfig($request);

    if ($response->configIPMI !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolIpmiGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolIpmiGetStatisticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolIpmiGetStatisticsRequest();
    $request->agentNum = 703737;

    $response = $sdk->ipmi->protocolIpmiGetStatistics($request);

    if ($response->protocolIpmiGetStatistics200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolIpmiGetStatsHdr

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
    $response = $sdk->ipmi->protocolIpmiGetStatsHdr();

    if ($response->protocolIpmiGetStatsHdr200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolIpmiGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolIpmiGetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolIpmiGetTraceRequest();
    $request->agentNum = 735194;

    $response = $sdk->ipmi->protocolIpmiGetTrace($request);

    if ($response->configIPMI !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolIpmiSetAttr

Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolIpmiSetAttrRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolIpmiSetAttrRequest();
    $request->agentNum = 288476;
    $request->attr = 'delectus';
    $request->value = 'eum';

    $response = $sdk->ipmi->protocolIpmiSetAttr($request);

    if ($response->protocolIpmiSetAttr200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolIpmiSetConfig

Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolIpmiSetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolIpmiSetConfigRequest();
    $request->agentNum = 248753;
    $request->argument = 'eligendi';
    $request->value = 'sint';

    $response = $sdk->ipmi->protocolIpmiSetConfig($request);

    if ($response->protocolIpmiSetConfig200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolIpmiSetTrace

1 to enable, 0 to disable

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolIpmiSetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolIpmiSetTraceRequest();
    $request->agentNum = 396098;
    $request->enableOrNot = 'provident';

    $response = $sdk->ipmi->protocolIpmiSetTrace($request);

    if ($response->protocolIpmiSetTrace200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
