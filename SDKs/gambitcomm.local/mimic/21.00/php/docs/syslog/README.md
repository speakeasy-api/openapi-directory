# syslog

### Available Operations

* [protocolSyslogGetArgs](#protocolsysloggetargs) - Show the agent's SYSLOG argument structure
* [protocolSyslogGetAttr](#protocolsysloggetattr) - Show the outgoing message's attributes
* [protocolSyslogGetConfig](#protocolsysloggetconfig) - Show the agent's SYSLOG configuration
* [protocolSyslogGetStatistics](#protocolsysloggetstatistics) - Show the agent's SYSLOG statistics
* [protocolSyslogGetStatsHdr](#protocolsysloggetstatshdr) - Show the SYSLOG statistics headers
* [protocolSyslogGetTrace](#protocolsysloggettrace) - Show the agent's SYSLOG traffic tracing
* [protocolSyslogSend](#protocolsyslogsend) - Set the agent's SYSLOG traffic tracing
* [protocolSyslogSetAttr](#protocolsyslogsetattr) - Set the outgoing message's attributes
* [protocolSyslogSetConfig](#protocolsyslogsetconfig) - Set the agent's SYSLOG configuration
* [protocolSyslogSetTrace](#protocolsyslogsettrace) - Set the agent's SYSLOG traffic tracing

## protocolSyslogGetArgs

Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSyslogGetArgsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSyslogGetArgsRequest();
    $request->agentNum = 904425;

    $response = $sdk->syslog->protocolSyslogGetArgs($request);

    if ($response->protocolSyslogGetArgs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSyslogGetAttr

Attribute can be server , sequence , separator , hostname , timestamp

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSyslogGetAttrRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSyslogGetAttrRequest();
    $request->agentNum = 383464;
    $request->attr = 'deserunt';

    $response = $sdk->syslog->protocolSyslogGetAttr($request);

    if ($response->protocolSyslogGetAttr200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSyslogGetConfig

Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSyslogGetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSyslogGetConfigRequest();
    $request->agentNum = 588317;

    $response = $sdk->syslog->protocolSyslogGetConfig($request);

    if ($response->configSYSLOG !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSyslogGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSyslogGetStatisticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSyslogGetStatisticsRequest();
    $request->agentNum = 324683;

    $response = $sdk->syslog->protocolSyslogGetStatistics($request);

    if ($response->protocolSyslogGetStatistics200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSyslogGetStatsHdr

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
    $response = $sdk->syslog->protocolSyslogGetStatsHdr();

    if ($response->protocolSyslogGetStatsHdr200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSyslogGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSyslogGetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSyslogGetTraceRequest();
    $request->agentNum = 831049;

    $response = $sdk->syslog->protocolSyslogGetTrace($request);

    if ($response->configSYSLOG !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSyslogSend

1 to enable, 0 to disable

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSyslogSendRequest;
use \OpenAPI\OpenAPI\Models\Shared\SyslogMsg;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSyslogSendRequest();
    $request->syslogMsg = new SyslogMsg();
    $request->syslogMsg->hostname = 'mature-pansy.com';
    $request->syslogMsg->message = 'at';
    $request->syslogMsg->separator = 'quaerat';
    $request->syslogMsg->sequence = 'tempora';
    $request->syslogMsg->timestamp = 'vel';
    $request->agentNum = 798047;
    $request->pri = 885338;

    $response = $sdk->syslog->protocolSyslogSend($request);

    if ($response->protocolSyslogSend200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSyslogSetAttr

Attribute can be server , sequence , separator , hostname , timestamp

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSyslogSetAttrRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSyslogSetAttrRequest();
    $request->agentNum = 185636;
    $request->attr = 'dolorum';
    $request->value = 'a';

    $response = $sdk->syslog->protocolSyslogSetAttr($request);

    if ($response->protocolSyslogSetAttr200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSyslogSetConfig

Agent's SYSLOG configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSyslogSetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSyslogSetConfigRequest();
    $request->agentNum = 456130;
    $request->argument = 'harum';
    $request->value = 'iusto';

    $response = $sdk->syslog->protocolSyslogSetConfig($request);

    if ($response->protocolSyslogSetConfig200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSyslogSetTrace

1 to enable, 0 to disable

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSyslogSetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSyslogSetTraceRequest();
    $request->agentNum = 215507;
    $request->enableOrNot = 'quisquam';

    $response = $sdk->syslog->protocolSyslogSetTrace($request);

    if ($response->protocolSyslogSetTrace200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
