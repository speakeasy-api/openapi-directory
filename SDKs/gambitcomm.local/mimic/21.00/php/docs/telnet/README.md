# telnet

### Available Operations

* [protocolTelnetConnectionLogon](#protocoltelnetconnectionlogon) - Changes the connection's current logon.
* [protocolTelnetConnectionRequest](#protocoltelnetconnectionrequest) - Executes the command asynchronously .
* [protocolTelnetConnectionSignal](#protocoltelnetconnectionsignal) - Triggers the asynchronous signal event with the specified signal name
* [protocolTelnetGetArgs](#protocoltelnetgetargs) - Show the agent's TELNET argument structure
* [protocolTelnetGetConfig](#protocoltelnetgetconfig) - Show the agent's TELNET configuration
* [protocolTelnetGetStatistics](#protocoltelnetgetstatistics) - Show the agent's TELNET statistics
* [protocolTelnetGetStatsHdr](#protocoltelnetgetstatshdr) - Show the TELNET statistics headers
* [protocolTelnetGetTrace](#protocoltelnetgettrace) - Show the agent's TELNET traffic tracing
* [protocolTelnetIpaliasDisable](#protocoltelnetipaliasdisable) - Disable individual IP aliases on the agent and the simulator host
* [protocolTelnetIpaliasEnable](#protocoltelnetipaliasenable) - Enable individual IP aliases on the agent and the simulator host
* [protocolTelnetIpaliasIsenabled](#protocoltelnetipaliasisenabled) - Check individual IP aliases on the agent and the simulator host
* [protocolTelnetIpaliasList](#protocoltelnetipaliaslist) - List all IP aliases on the agent and the simulator host
* [protocolTelnetServerGetConnections](#protocoltelnetservergetconnections) - Show the agent's TELNET connections
* [protocolTelnetServerGetKeymap](#protocoltelnetservergetkeymap) - Show the agent's TELNET keymap file name
* [protocolTelnetServerGetRulesdb](#protocoltelnetservergetrulesdb) - Show the agent's TELNET rules db file name
* [protocolTelnetServerGetState](#protocoltelnetservergetstate) - Show the agent's TELNET server state
* [protocolTelnetServerGetUserdb](#protocoltelnetservergetuserdb) - Show the agent's TELNET user db file name
* [protocolTelnetServerGetUsers](#protocoltelnetservergetusers) - Show the agent's TELNET users
* [protocolTelnetSetConfig](#protocoltelnetsetconfig) - Set the agent's TELNET configuration
* [protocolTelnetSetTrace](#protocoltelnetsettrace) - Set the agent's TELNET traffic tracing

## protocolTelnetConnectionLogon

Logon change allows (hidden) commands for a different access mode to run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTelnetConnectionLogonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTelnetConnectionLogonRequest();
    $request->agentNum = 947371;
    $request->connectionID = 229442;
    $request->password = 'tempore';
    $request->user = 'accusamus';

    $response = $sdk->telnet->protocolTelnetConnectionLogon($request);

    if ($response->protocolTelnetConnectionLogon200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTelnetConnectionRequest

Equivalent of the command typed in by the user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTelnetConnectionRequestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTelnetConnectionRequestRequest();
    $request->agentNum = 253941;
    $request->command = 'enim';
    $request->connectionID = 213312;

    $response = $sdk->telnet->protocolTelnetConnectionRequest($request);

    if ($response->protocolTelnetConnectionRequest200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTelnetConnectionSignal

Signal name is either connect or idle

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTelnetConnectionSignalRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTelnetConnectionSignalRequest();
    $request->agentNum = 957451;
    $request->connectionID = 518201;
    $request->signalName = 'nihil';

    $response = $sdk->telnet->protocolTelnetConnectionSignal($request);

    if ($response->protocolTelnetConnectionSignal200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTelnetGetArgs

Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTelnetGetArgsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTelnetGetArgsRequest();
    $request->agentNum = 25662;

    $response = $sdk->telnet->protocolTelnetGetArgs($request);

    if ($response->protocolTelnetGetArgs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTelnetGetConfig

Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTelnetGetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTelnetGetConfigRequest();
    $request->agentNum = 711584;

    $response = $sdk->telnet->protocolTelnetGetConfig($request);

    if ($response->configTELNET !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTelnetGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTelnetGetStatisticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTelnetGetStatisticsRequest();
    $request->agentNum = 207470;

    $response = $sdk->telnet->protocolTelnetGetStatistics($request);

    if ($response->protocolTelnetGetStatistics200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTelnetGetStatsHdr

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
    $response = $sdk->telnet->protocolTelnetGetStatsHdr();

    if ($response->protocolTelnetGetStatsHdr200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTelnetGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTelnetGetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTelnetGetTraceRequest();
    $request->agentNum = 153694;

    $response = $sdk->telnet->protocolTelnetGetTrace($request);

    if ($response->configTELNET !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTelnetIpaliasDisable

By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTelnetIpaliasDisableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTelnetIpaliasDisableRequest();
    $request->agentNum = 424685;
    $request->ipaddress = 'libero';
    $request->port = 374170;

    $response = $sdk->telnet->protocolTelnetIpaliasDisable($request);

    if ($response->protocolTelnetIpaliasDisable200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTelnetIpaliasEnable

By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTelnetIpaliasEnableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTelnetIpaliasEnableRequest();
    $request->agentNum = 646265;
    $request->ipaddress = 'quam';
    $request->port = 214880;

    $response = $sdk->telnet->protocolTelnetIpaliasEnable($request);

    if ($response->protocolTelnetIpaliasEnable200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTelnetIpaliasIsenabled

By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTelnetIpaliasIsenabledRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTelnetIpaliasIsenabledRequest();
    $request->agentNum = 277628;
    $request->ipaddress = 'qui';
    $request->port = 586784;

    $response = $sdk->telnet->protocolTelnetIpaliasIsenabled($request);

    if ($response->protocolTelnetIpaliasIsenabled200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTelnetIpaliasList

By default, the MIMIC TELNET server listens on all the IP addresses (aliases) that are configured for an agent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTelnetIpaliasListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTelnetIpaliasListRequest();
    $request->agentNum = 807581;

    $response = $sdk->telnet->protocolTelnetIpaliasList($request);

    if ($response->ipAliases !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTelnetServerGetConnections

IDs of all connected connections

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTelnetServerGetConnectionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTelnetServerGetConnectionsRequest();
    $request->agentNum = 863856;

    $response = $sdk->telnet->protocolTelnetServerGetConnections($request);

    if ($response->protocolTelnetServerGetConnections200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTelnetServerGetKeymap

Keymap file name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTelnetServerGetKeymapRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTelnetServerGetKeymapRequest();
    $request->agentNum = 747080;

    $response = $sdk->telnet->protocolTelnetServerGetKeymap($request);

    if ($response->protocolTelnetServerGetKeymap200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTelnetServerGetRulesdb

Rules db file name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTelnetServerGetRulesdbRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTelnetServerGetRulesdbRequest();
    $request->agentNum = 117531;

    $response = $sdk->telnet->protocolTelnetServerGetRulesdb($request);

    if ($response->protocolTelnetServerGetRulesdb200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTelnetServerGetState

Return 1 means accepting connections, 0 not

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTelnetServerGetStateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTelnetServerGetStateRequest();
    $request->agentNum = 674848;

    $response = $sdk->telnet->protocolTelnetServerGetState($request);

    if ($response->protocolTelnetServerGetState200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTelnetServerGetUserdb

User db file name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTelnetServerGetUserdbRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTelnetServerGetUserdbRequest();
    $request->agentNum = 517379;

    $response = $sdk->telnet->protocolTelnetServerGetUserdb($request);

    if ($response->protocolTelnetServerGetUserdb200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTelnetServerGetUsers

List of users

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTelnetServerGetUsersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTelnetServerGetUsersRequest();
    $request->agentNum = 276894;

    $response = $sdk->telnet->protocolTelnetServerGetUsers($request);

    if ($response->telnetUsers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTelnetSetConfig

Agent's TELNET configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTelnetSetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTelnetSetConfigRequest();
    $request->agentNum = 132068;
    $request->argument = 'dolores';
    $request->value = 'distinctio';

    $response = $sdk->telnet->protocolTelnetSetConfig($request);

    if ($response->protocolTelnetSetConfig200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTelnetSetTrace

1 to enable, 0 to disable

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTelnetSetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTelnetSetTraceRequest();
    $request->agentNum = 704474;
    $request->enableOrNot = 'aliquid';

    $response = $sdk->telnet->protocolTelnetSetTrace($request);

    if ($response->protocolTelnetSetTrace200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
