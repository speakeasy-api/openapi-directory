# proxy

### Available Operations

* [protocolProxyGetArgs](#protocolproxygetargs) - Show the agent's PROXY argument structure
* [protocolProxyGetConfig](#protocolproxygetconfig) - Show the agent's PROXY configuration
* [protocolProxyGetStatistics](#protocolproxygetstatistics) - Show the agent's PROXY statistics
* [protocolProxyGetStatsHdr](#protocolproxygetstatshdr) - Show the PROXY statistics headers
* [protocolProxyGetTrace](#protocolproxygettrace) - Show the agent's PROXY traffic tracing
* [protocolProxyPortAdd](#protocolproxyportadd) - Add individual proxy target on the agent and the simulator host
* [protocolProxyPortIsstarted](#protocolproxyportisstarted) - Check individual target
* [protocolProxyPortList](#protocolproxyportlist) - List all proxy targets
* [protocolProxyPortRemove](#protocolproxyportremove) - Remove individual proxy target on the agent and the simulator host
* [protocolProxyPortStart](#protocolproxyportstart) - Start additional target
* [protocolProxyPortStop](#protocolproxyportstop) - Stop additional target
* [protocolProxySetConfig](#protocolproxysetconfig) - Set the agent's PROXY configuration
* [protocolProxySetTrace](#protocolproxysettrace) - Set the agent's PROXY traffic tracing

## protocolProxyGetArgs

Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolProxyGetArgsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolProxyGetArgsRequest();
    $request->agentNum = 149448;

    $response = $sdk->proxy->protocolProxyGetArgs($request);

    if ($response->protocolProxyGetArgs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolProxyGetConfig

Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolProxyGetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolProxyGetConfigRequest();
    $request->agentNum = 904648;

    $response = $sdk->proxy->protocolProxyGetConfig($request);

    if ($response->configPROXY !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolProxyGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolProxyGetStatisticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolProxyGetStatisticsRequest();
    $request->agentNum = 868126;

    $response = $sdk->proxy->protocolProxyGetStatistics($request);

    if ($response->protocolProxyGetStatistics200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolProxyGetStatsHdr

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
    $response = $sdk->proxy->protocolProxyGetStatsHdr();

    if ($response->protocolProxyGetStatsHdr200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolProxyGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolProxyGetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolProxyGetTraceRequest();
    $request->agentNum = 37559;

    $response = $sdk->proxy->protocolProxyGetTrace($request);

    if ($response->configPROXY !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolProxyPortAdd

Additional proxy target

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolProxyPortAddRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolProxyPortAddRequest();
    $request->agentNum = 162493;
    $request->port = 508315;
    $request->target = 'natus';
    $request->targetPort = 166847;

    $response = $sdk->proxy->protocolProxyPortAdd($request);

    if ($response->protocolProxyPortAdd200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolProxyPortIsstarted

Check individual target

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolProxyPortIsstartedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolProxyPortIsstartedRequest();
    $request->agentNum = 123820;
    $request->port = 779051;

    $response = $sdk->proxy->protocolProxyPortIsstarted($request);

    if ($response->protocolProxyPortIsstarted200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolProxyPortList

List all proxy targets

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolProxyPortListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolProxyPortListRequest();
    $request->agentNum = 848009;

    $response = $sdk->proxy->protocolProxyPortList($request);

    if ($response->protocolProxyPortList200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolProxyPortRemove

Remove proxy target

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolProxyPortRemoveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolProxyPortRemoveRequest();
    $request->agentNum = 864934;
    $request->port = 807319;

    $response = $sdk->proxy->protocolProxyPortRemove($request);

    if ($response->protocolProxyPortRemove200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolProxyPortStart

Start additional target

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolProxyPortStartRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolProxyPortStartRequest();
    $request->agentNum = 411397;
    $request->port = 569101;

    $response = $sdk->proxy->protocolProxyPortStart($request);

    if ($response->protocolProxyPortStart200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolProxyPortStop

Stop additional target

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolProxyPortStopRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolProxyPortStopRequest();
    $request->agentNum = 139972;
    $request->port = 407183;

    $response = $sdk->proxy->protocolProxyPortStop($request);

    if ($response->protocolProxyPortStop200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolProxySetConfig

Agent's PROXY configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolProxySetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolProxySetConfigRequest();
    $request->agentNum = 33222;
    $request->argument = 'ab';
    $request->value = 'maiores';

    $response = $sdk->proxy->protocolProxySetConfig($request);

    if ($response->protocolProxySetConfig200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolProxySetTrace

1 to enable, 0 to disable

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolProxySetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolProxySetTraceRequest();
    $request->agentNum = 697429;
    $request->enableOrNot = 'ipsam';

    $response = $sdk->proxy->protocolProxySetTrace($request);

    if ($response->protocolProxySetTrace200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
