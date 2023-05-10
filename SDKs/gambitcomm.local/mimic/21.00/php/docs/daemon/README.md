# daemon

### Available Operations

* [addDaemonTimerScript](#adddaemontimerscript) - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
* [cfgLoad](#cfgload) - Load the lab configuration file file.
* [cfgNew](#cfgnew) - Clear the lab configuration.
* [cfgSave](#cfgsave) - Save the lab configuration.
* [cfgSaveas](#cfgsaveas) - Save the lab configuration in file.
* [delDaemonTimerScript](#deldaemontimerscript) - Remove a timer script from the execution list.
* [getActiveDataList](#getactivedatalist) - The list of {agentnum {statistics}} for agents that are currently active and whose statistics have changed since the last invocation of this command.
* [getActiveList](#getactivelist) - The list of {agentnum} that are currently active (running or paused).
* [getCfgFileChanged](#getcfgfilechanged) - This predicate indicates if the currently loaded agent configuration file has changed.
* [getCfgfile](#getcfgfile) - The currently loaded lab configuration file for the particular user.
* [getChangedConfigList](#getchangedconfiglist) - The list of {agentnum} for which a configurable parameter changed.
* [getChangedStateList](#getchangedstatelist) - The list of {agentnum state} for which the state changed.
* [getClients](#getclients) - The number of clients currently connected to the daemon.
* [getConfiguredList](#getconfiguredlist) - The list of {agentnum} that are currently configured.
* [getDaemonProtocols](#getdaemonprotocols) - The set of protocols supported by the Simulator.
* [getInterfaces](#getinterfaces) - The set of network interfaces that can be used for simulations.
* [getLast](#getlast) - The last configured agent instance.
* [getLog](#getlog) - The current log file for the Simulator.
* [getMax](#getmax) - The maximum number of agent instances.
* [getNetaddr](#getnetaddr) - The network address of the host where the MIMIC simulator is running.
* [getNetdev](#getnetdev) - The default network device to be used for agent addresses.
* [getProduct](#getproduct) - The product number that is licensed.
* [getReturn](#getreturn) - The return mode.
* [getVersion](#getversion) - The version of the MIMIC command interface.
* [listDaemonTimerScripts](#listdaemontimerscripts) - List the timer scripts currently running along with the their intervals.
* [mgetInfo](#mgetinfo) - Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.
* [setLog](#setlog) - The current log file for the Simulator.
* [setNetdev](#setnetdev) - The network address of the host where the MIMIC simulator is running.
* [startAllAgents](#startallagents) - Start MIMIC.
* [stopAllAgents](#stopallagents) - Stop MIMIC.
* [storeExists](#storeexists) - This command can be used as a predicate to ascertain the existence of a given variable.
* [storeGet](#storeget) - Fetches the value associated with a variable.
* [storeList](#storelist) - This command will return the list of variables in the said scope.
* [storeLreplace](#storelreplace) - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
* [storePersists](#storepersists) - This command can be used as a predicate to ascertain the persistence of a given variable.
* [storeSave](#storesave) - This operation flushes all global objects which need to be made persistent to disk.
* [storeSet](#storeset) - Set the variable store for the global storage
* [storeUnset](#storeunset) - Deletes a variable which is currently defined.
* [terminate](#terminate) - Terminate the MIMIC daemon.

## addDaemonTimerScript

Add a new timer script to be executed at specified interval (in msec) with the specified argument.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddDaemonTimerScriptRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddDaemonTimerScriptRequest();
    $request->arg = 'excepturi';
    $request->interval = 865103;
    $request->script = 'modi';

    $response = $sdk->daemon->addDaemonTimerScript($request);

    if ($response->addDaemonTimerScript200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cfgLoad

Load agents in cfgFile from firstAgentNum to lastAgentNum on startAgentNum of current configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CfgLoadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CfgLoadRequest();
    $request->cfgFile = 'praesentium';
    $request->firstAgentNum = 523248;
    $request->lastAgentNum = 916723;
    $request->startAgentNum = 93940;

    $response = $sdk->daemon->cfgLoad($request);

    if ($response->cfgLoad200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cfgNew

Clear the lab configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CfgNewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CfgNewRequest();
    $request->firstAgentNum = 921158;
    $request->lastAgentNum = 575947;

    $response = $sdk->daemon->cfgNew($request);

    if ($response->cfgNew200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cfgSave

Save the lab configuration.

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
    $response = $sdk->daemon->cfgSave();

    if ($response->cfgSave200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cfgSaveas

Save the lab configuration in file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CfgSaveasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CfgSaveasRequest();
    $request->cfgFile = 'veritatis';
    $request->firstAgentNum = 929297;
    $request->lastAgentNum = 277718;

    $response = $sdk->daemon->cfgSaveas($request);

    if ($response->cfgSaveas200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## delDaemonTimerScript

The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DelDaemonTimerScriptRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DelDaemonTimerScriptRequest();
    $request->arg = 'enim';
    $request->interval = 9356;
    $request->script = 'est';

    $response = $sdk->daemon->delDaemonTimerScript($request);

    if ($response->delDaemonTimerScript200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActiveDataList

This list is guaranteed to be sorted into increasing order.

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
    $response = $sdk->daemon->getActiveDataList();

    if ($response->getActiveDataList200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActiveList

This list is guaranteed to be sorted into increasing order.

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
    $response = $sdk->daemon->getActiveList();

    if ($response->getActiveList200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCfgFileChanged

Whether the loaded agent configuration file has changed since the last time this predicate was queried. This allows for a client to detect agent configuration changes and to synchronize those changes from the MIMIC daemon.

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
    $response = $sdk->daemon->getCfgFileChanged();

    if ($response->getCfgFileChanged200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCfgfile

In the case of multi-user access this command returns a different configuration file loaded for each user.

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
    $response = $sdk->daemon->getCfgfile();

    if ($response->getCfgfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChangedConfigList

This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.

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
    $response = $sdk->daemon->getChangedConfigList();

    if ($response->getChangedConfigList200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChangedStateList

This list contains at most 5000 agent(s), and is guaranteed to be sorted into increasing order.

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
    $response = $sdk->daemon->getChangedStateList();

    if ($response->agentStates !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getClients

The number of clients currently connected to the daemon.

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
    $response = $sdk->daemon->getClients();

    if ($response->getClients200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConfiguredList

This list is guaranteed to be sorted into increasing order.

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
    $response = $sdk->daemon->getConfiguredList();

    if ($response->getConfiguredList200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDaemonProtocols

The set of protocols supported by the Simulator.

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
    $response = $sdk->daemon->getDaemonProtocols();

    if ($response->getDaemonProtocols200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInterfaces

The set of network interfaces that can be used for simulations.

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
    $response = $sdk->daemon->getInterfaces();

    if ($response->getInterfaces200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLast

The last configured agent instance.

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
    $response = $sdk->daemon->getLast();

    if ($response->getLast200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLog

The current log file for the Simulator.

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
    $response = $sdk->daemon->getLog();

    if ($response->getLog200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMax

The maximum number of agent instances.

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
    $response = $sdk->daemon->getMax();

    if ($response->getMax200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetaddr

The network address of the host where the MIMIC simulator is running.

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
    $response = $sdk->daemon->getNetaddr();

    if ($response->getNetaddr200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetdev

The default network device to be used for agent addresses if the interface is not explicitly specified for an agent.

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
    $response = $sdk->daemon->getNetdev();

    if ($response->getNetdev200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProduct

The product number that is licensed.

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
    $response = $sdk->daemon->getProduct();

    if ($response->getProduct200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReturn

The OpenAPI daemon operates in two modes, nocatch, where error returns from MIMIC operations return error; or catch, where the TCL catch semantics are used (these are similar to C++ exceptions)

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
    $response = $sdk->daemon->getReturn();

    if ($response->getReturn200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVersion

The version of the MIMIC command interface.

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
    $response = $sdk->daemon->getVersion();

    if ($response->getVersion200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDaemonTimerScripts

The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.

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
    $response = $sdk->daemon->listDaemonTimerScripts();

    if ($response->timerScripts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mgetInfo

Get multiple sets of information about MIMIC, where infoArray is one of the parameters defined in the mimic get command.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MgetInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MgetInfoRequest();
    $request->infoArray = [
        'explicabo',
        'deserunt',
        'distinctio',
        'quibusdam',
    ];

    $response = $sdk->daemon->mgetInfo($request);

    if ($response->mgetInfo200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setLog

The current log file for the Simulator.

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
'labore'

    $response = $sdk->daemon->setLog($request);

    if ($response->setLog200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setNetdev

The network address of the host where the MIMIC simulator is running.

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
    $response = $sdk->daemon->setNetdev();

    if ($response->setNetdev200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startAllAgents

Start MIMIC.

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
    $response = $sdk->daemon->startAllAgents();

    if ($response->startAllAgents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopAllAgents

Stop MIMIC.

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
    $response = $sdk->daemon->stopAllAgents();

    if ($response->stopAllAgents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storeExists

It returns "1" if the variable exists, else "0".

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StoreExistsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoreExistsRequest();
    $request->var = 'modi';

    $response = $sdk->daemon->storeExists($request);

    if ($response->storeExists200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storeGet

The value will be returned as a string (like all Tcl values).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StoreGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoreGetRequest();
    $request->var = 'qui';

    $response = $sdk->daemon->storeGet($request);

    if ($response->storeGet200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storeList

The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.

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
    $response = $sdk->daemon->storeList();

    if ($response->storeList200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storeLreplace

These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StoreLreplaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoreLreplaceRequest();
    $request->requestBody = 'aliquid';
    $request->index = 586513;
    $request->var = 'quos';

    $response = $sdk->daemon->storeLreplace($request);

    if ($response->storeLreplace200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storePersists

It returns "1" if the variable is persistent, else "0".

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StorePersistsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorePersistsRequest();
    $request->var = 'perferendis';

    $response = $sdk->daemon->storePersists($request);

    if ($response->storePersists200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storeSave

The MIMIC daemon caches persistent objects and their changes, and writes them to disk at program termination. If it were to crash, these changes would be lost. This operation allows to checkpoint the cache, ie. write changes to persistent objects to disk. To save the lab configuration with per-agent persistent information the mimic save operation needs to be used.

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
    $response = $sdk->daemon->storeSave();

    if ($response->storeSave200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storeSet

Persist 1 means persistent , 0 means non-persistent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StoreSetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoreSetRequest();
    $request->requestBody = 'magni';
    $request->persist = 828940;
    $request->var = 'ipsam';

    $response = $sdk->daemon->storeSet($request);

    if ($response->storeSet200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storeUnset

This will cleanup persistent variables if needed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StoreUnsetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoreUnsetRequest();
    $request->var = 'alias';

    $response = $sdk->daemon->storeUnset($request);

    if ($response->storeUnset200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## terminate

Terminate the MIMIC daemon.

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
    $response = $sdk->daemon->terminate();

    if ($response->terminate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
