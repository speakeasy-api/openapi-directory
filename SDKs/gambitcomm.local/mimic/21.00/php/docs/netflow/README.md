# netflow

### Available Operations

* [protocolNetflowChangeAttr](#protocolnetflowchangeattr) - Change NETFLOW export attributes
* [protocolNetflowChangeDfs](#protocolnetflowchangedfs) - Change NETFLOW data export interval
* [protocolNetflowChangeTfs](#protocolnetflowchangetfs) - Change NETFLOW template export interval
* [protocolNetflowGetArgs](#protocolnetflowgetargs) - Show the agent's NETFLOW argument structure
* [protocolNetflowGetConfig](#protocolnetflowgetconfig) - Show the agent's NETFLOW configuration
* [protocolNetflowGetStatistics](#protocolnetflowgetstatistics) - Show the agent's NETFLOW statistics
* [protocolNetflowGetStatsHdr](#protocolnetflowgetstatshdr) - Show the NETFLOW statistics headers
* [protocolNetflowGetTrace](#protocolnetflowgettrace) - Show the agent's NETFLOW traffic tracing
* [protocolNetflowHalt](#protocolnetflowhalt) - Halt NETFLOW traffic
* [protocolNetflowList](#protocolnetflowlist) - Show list of NETFLOW exports
* [protocolNetflowReload](#protocolnetflowreload) - Reload NETFLOW configuration before resuming traffic
* [protocolNetflowResume](#protocolnetflowresume) - Resuming traffic
* [protocolNetflowSetCollector](#protocolnetflowsetcollector) - Swap NETFLOW collector
* [protocolNetflowSetConfig](#protocolnetflowsetconfig) - Set the agent's NETFLOW configuration
* [protocolNetflowSetFileName](#protocolnetflowsetfilename) - Swap NETFLOW configuration file
* [protocolNetflowSetTrace](#protocolnetflowsettrace) - Set the agent's NETFLOW traffic tracing

## protocolNetflowChangeAttr

Change attributes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolNetflowChangeAttrRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolNetflowChangeAttrRequest();
    $request->agentNum = 653201;
    $request->attr = 'reiciendis';
    $request->fieldNum = 652103;
    $request->flowsetUid = 320997;
    $request->value = 'eum';

    $response = $sdk->netflow->protocolNetflowChangeAttr($request);

    if ($response->protocolNetflowChangeAttr200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolNetflowChangeDfs

Interval in msec .

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolNetflowChangeDfsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolNetflowChangeDfsRequest();
    $request->agentNum = 221262;
    $request->interval = 896547;

    $response = $sdk->netflow->protocolNetflowChangeDfs($request);

    if ($response->protocolNetflowChangeDfs200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolNetflowChangeTfs

Interval in msec .

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolNetflowChangeTfsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolNetflowChangeTfsRequest();
    $request->agentNum = 141264;
    $request->interval = 367562;

    $response = $sdk->netflow->protocolNetflowChangeTfs($request);

    if ($response->protocolNetflowChangeTfs200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolNetflowGetArgs

Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolNetflowGetArgsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolNetflowGetArgsRequest();
    $request->agentNum = 97260;

    $response = $sdk->netflow->protocolNetflowGetArgs($request);

    if ($response->protocolNetflowGetArgs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolNetflowGetConfig

Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolNetflowGetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolNetflowGetConfigRequest();
    $request->agentNum = 435865;

    $response = $sdk->netflow->protocolNetflowGetConfig($request);

    if ($response->configNETFLOW !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolNetflowGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolNetflowGetStatisticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolNetflowGetStatisticsRequest();
    $request->agentNum = 984043;

    $response = $sdk->netflow->protocolNetflowGetStatistics($request);

    if ($response->protocolNetflowGetStatistics200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolNetflowGetStatsHdr

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
    $response = $sdk->netflow->protocolNetflowGetStatsHdr();

    if ($response->protocolNetflowGetStatsHdr200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolNetflowGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolNetflowGetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolNetflowGetTraceRequest();
    $request->agentNum = 891924;

    $response = $sdk->netflow->protocolNetflowGetTrace($request);

    if ($response->configNETFLOW !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolNetflowHalt

Halt NETFLOW traffic

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolNetflowHaltRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolNetflowHaltRequest();
    $request->agentNum = 260341;

    $response = $sdk->netflow->protocolNetflowHalt($request);

    if ($response->protocolNetflowHalt200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolNetflowList

Show list of NETFLOW exports

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolNetflowListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolNetflowListRequest();
    $request->agentNum = 806194;

    $response = $sdk->netflow->protocolNetflowList($request);

    if ($response->protocolNetflowList200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolNetflowReload

Reload NETFLOW configuration before resuming traffic

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolNetflowReloadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolNetflowReloadRequest();
    $request->agentNum = 537023;

    $response = $sdk->netflow->protocolNetflowReload($request);

    if ($response->protocolNetflowReload200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolNetflowResume

Resuming traffic

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolNetflowResumeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolNetflowResumeRequest();
    $request->agentNum = 703889;

    $response = $sdk->netflow->protocolNetflowResume($request);

    if ($response->protocolNetflowResume200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolNetflowSetCollector

Allow changing collector without stopping agent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolNetflowSetCollectorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolNetflowSetCollectorRequest();
    $request->agentNum = 447926;
    $request->collectorIP = 'architecto';

    $response = $sdk->netflow->protocolNetflowSetCollector($request);

    if ($response->protocolNetflowSetCollector200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolNetflowSetConfig

Agent's NETFLOW configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolNetflowSetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolNetflowSetConfigRequest();
    $request->agentNum = 99569;
    $request->argument = 'repudiandae';
    $request->value = 'ullam';

    $response = $sdk->netflow->protocolNetflowSetConfig($request);

    if ($response->protocolNetflowSetConfig200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolNetflowSetFileName

Allow reloading the configuration file for an agent without stopping agent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolNetflowSetFileNameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolNetflowSetFileNameRequest();
    $request->agentNum = 714242;
    $request->fileName = 'nihil';

    $response = $sdk->netflow->protocolNetflowSetFileName($request);

    if ($response->protocolNetflowSetFileName200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolNetflowSetTrace

1 to enable, 0 to disable

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolNetflowSetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolNetflowSetTraceRequest();
    $request->agentNum = 998848;
    $request->enableOrNot = 'quibusdam';

    $response = $sdk->netflow->protocolNetflowSetTrace($request);

    if ($response->protocolNetflowSetTrace200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
