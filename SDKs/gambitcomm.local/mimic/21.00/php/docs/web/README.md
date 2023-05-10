# web

### Available Operations

* [protocolWebGetArgs](#protocolwebgetargs) - Show the agent's WEB argument structure
* [protocolWebGetConfig](#protocolwebgetconfig) - Show the agent's WEB configuration
* [protocolWebGetStatistics](#protocolwebgetstatistics) - Show the agent's WEB statistics
* [protocolWebGetStatsHdr](#protocolwebgetstatshdr) - Show the WEB statistics headers
* [protocolWebGetTrace](#protocolwebgettrace) - Show the agent's WEB traffic tracing
* [protocolWebPortAdd](#protocolwebportadd) - Add the agent's WEB port
* [protocolWebPortExists](#protocolwebportexists) - Show the agent's WEB port
* [protocolWebPortRemove](#protocolwebportremove) - Remove the agent's WEB port
* [protocolWebPortSet](#protocolwebportset) - Set the agent's WEB port attribute
* [protocolWebPortStart](#protocolwebportstart) - Start the agent's WEB port
* [protocolWebPortStop](#protocolwebportstop) - Stop the agent's WEB port
* [protocolWebSetConfig](#protocolwebsetconfig) - Set the agent's WEB configuration
* [protocolWebSetTrace](#protocolwebsettrace) - Set the agent's WEB traffic tracing

## protocolWebGetArgs

Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolWebGetArgsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolWebGetArgsRequest();
    $request->agentNum = 224317;

    $response = $sdk->web->protocolWebGetArgs($request);

    if ($response->protocolWebGetArgs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolWebGetConfig

Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolWebGetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolWebGetConfigRequest();
    $request->agentNum = 980700;

    $response = $sdk->web->protocolWebGetConfig($request);

    if ($response->configWEB !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolWebGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolWebGetStatisticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolWebGetStatisticsRequest();
    $request->agentNum = 97844;

    $response = $sdk->web->protocolWebGetStatistics($request);

    if ($response->protocolWebGetStatistics200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolWebGetStatsHdr

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
    $response = $sdk->web->protocolWebGetStatsHdr();

    if ($response->protocolWebGetStatsHdr200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolWebGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolWebGetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolWebGetTraceRequest();
    $request->agentNum = 406120;

    $response = $sdk->web->protocolWebGetTrace($request);

    if ($response->configWEB !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolWebPortAdd

Add port

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolWebPortAddRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolWebPortAddRequest();
    $request->agentNum = 862192;
    $request->port = 569211;

    $response = $sdk->web->protocolWebPortAdd($request);

    if ($response->protocolWebPortAdd200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolWebPortExists

Check the port. 1 means existing, 0 means not

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolWebPortExistsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolWebPortExistsRequest();
    $request->agentNum = 972920;
    $request->port = 343605;

    $response = $sdk->web->protocolWebPortExists($request);

    if ($response->protocolWebPortExists200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolWebPortRemove

Remove port

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolWebPortRemoveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolWebPortRemoveRequest();
    $request->agentNum = 960835;
    $request->port = 788873;

    $response = $sdk->web->protocolWebPortRemove($request);

    if ($response->protocolWebPortRemove200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolWebPortSet

Set port

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolWebPortSetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolWebPortSetRequest();
    $request->agentNum = 906556;
    $request->port = 411372;
    $request->protocol = 'impedit';
    $request->version = 'corporis';

    $response = $sdk->web->protocolWebPortSet($request);

    if ($response->protocolWebPortSet200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolWebPortStart

Start port

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolWebPortStartRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolWebPortStartRequest();
    $request->agentNum = 333145;
    $request->port = 399499;

    $response = $sdk->web->protocolWebPortStart($request);

    if ($response->protocolWebPortStart200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolWebPortStop

Stop port

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolWebPortStopRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolWebPortStopRequest();
    $request->agentNum = 81101;
    $request->port = 301831;

    $response = $sdk->web->protocolWebPortStop($request);

    if ($response->protocolWebPortStop200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolWebSetConfig

Agent's WEB configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolWebSetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolWebSetConfigRequest();
    $request->agentNum = 407241;
    $request->argument = 'quo';
    $request->value = 'consectetur';

    $response = $sdk->web->protocolWebSetConfig($request);

    if ($response->protocolWebSetConfig200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolWebSetTrace

1 to enable, 0 to disable

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolWebSetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolWebSetTraceRequest();
    $request->agentNum = 926213;
    $request->enableOrNot = 'aspernatur';

    $response = $sdk->web->protocolWebSetTrace($request);

    if ($response->protocolWebSetTrace200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
