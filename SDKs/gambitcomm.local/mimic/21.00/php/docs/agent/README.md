# agent

### Available Operations

* [addIpalias](#addipalias) - Adds a new ipalias for the agent.
* [addTimerScript](#addtimerscript) - Add a new timer script to be executed at specified interval (in msec) with the specified argument.
* [agentRemove](#agentremove) - Remove the current agent.
* [agentStoreCopy](#agentstorecopy) - This command copies the variable store from the other agent to this agent.
* [agentStoreExists](#agentstoreexists) - This command can be used as a predicate to ascertain the existence of a given variable.
* [agentStoreGet](#agentstoreget) - Fetches the value associated with a variable.
* [agentStoreList](#agentstorelist) - This command will return the list of variables in the said scope.
* [agentStoreLreplace](#agentstorelreplace) - These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.
* [agentStorePersists](#agentstorepersists) - This command can be used as a predicate to ascertain the persistence of a given variable.
* [agentStoreSet](#agentstoreset) - These commands allow the creation of a new variable, or changing an existing value.
* [agentStoreUnset](#agentstoreunset) - Deletes a variable which is currently defined.
* [delIpalias](#delipalias) - Deletes an existing ipalias from the agent.
* [delTimerScript](#deltimerscript) - Remove a timer script from the execution list.
* [fromAdd](#fromadd) - Add a source address that the agent will accept messages from.
* [fromDel](#fromdel) - delete a source address that the agent will accept messages from.
* [fromList](#fromlist) - List the source addresses that the agent will accept messages from.
* [getAgentState](#getagentstate) - current running state of the agent
* [getChanged](#getchanged) - has the agent value space changed?
* [getConfigChanged](#getconfigchanged) - has the lab configuration changed?
* [getDelay](#getdelay) - one-way transit delay in msec.
* [getDrops](#getdrops) - drop rate (every N-th PDU). 0 means no drops.
* [getHost](#gethost) - host address of the agent.
* [getInformTimeout](#getinformtimeout) - timeout in seconds for retransmitting INFORM PDUs.
* [getInterface](#getinterface) - network interface card for the agent.
* [getMask](#getmask) - subnet mask of the agent.
* [getMibs](#getmibs) - set of MIBs, simulations and scenarios
* [getNumberStarts](#getnumberstarts) - number of starts for the agent.
* [getOiddir](#getoiddir) - MIB directory of the agent.
* [getOwner](#getowner) - owner of the agent.
* [getPdusize](#getpdusize) - maximum PDU size.
* [getPort](#getport) - port number
* [getPrivdir](#getprivdir) - private directory of the agent.
* [getProtocols](#getprotocols) - protocols supported by agent
* [getReadCommunity](#getreadcommunity) - read community string
* [getScen](#getscen) - first scenario name
* [getSim](#getsim) - first simulation name
* [getStarttime](#getstarttime) - relative start time
* [getStateChanged](#getstatechanged) - has the agent state changed?
* [getStatistics](#getstatistics) - current statistics of the agent instance
* [getTrace](#gettrace) - SNMP PDU tracing
* [getValidate](#getvalidate) - SNMP SET validation policy.
* [getWriteCommunity](#getwritecommunity) - write community string
* [halt](#halt) - Halt the current agent.
* [listIpaliases](#listipaliases) - Lists all the additional ipaliases configured for the agent.
* [listTimerScripts](#listtimerscripts) - List the timer scripts currently running along with the their intervals.
* [new](#new) - Add an agent.
* [pauseNow](#pausenow) - Pause the current agent.
* [protocolGetConfig](#protocolgetconfig) - Returns the protocol's configuration.
* [reload](#reload) - Reload the current agent.
* [resume](#resume) - Resume the current agent.
* [save](#save) - Save agent MIB values.
* [setDelay](#setdelay) - one-way transit delay in msec
* [setDrops](#setdrops) - drop rate (every N-th PDU)
* [setHost](#sethost) - host address of the agent.
* [setInformTimeout](#setinformtimeout) - timeout in seconds for retransmitting INFORM PDUs
* [setInterface](#setinterface) - network interface card for the agent
* [setMask](#setmask) - subnet mask of the agent.
* [setMibs](#setmibs) - set of MIBs, simulations and scenarios
* [setOiddir](#setoiddir) - MIB directory of the agent.
* [setOwner](#setowner) - owner of the agent
* [setPdusize](#setpdusize) - maximum PDU size
* [setPort](#setport) - port number
* [setPrivdir](#setprivdir) - private directory of the agent.
* [setProtocols](#setprotocols) - protocols supported by agent as a comma-separated list
* [setReadCommunity](#setreadcommunity) - read community string
* [setStarttime](#setstarttime) - relative start time
* [setTrace](#settrace) - SNMP PDU tracing
* [setValidate](#setvalidate) - SNMP SET validation policy
* [setWriteCommunity](#setwritecommunity) - write community string
* [start](#start) - Start the current agent.
* [startIpalias](#startipalias) - Starts an existing ipalias for the agent.
* [statusIpalias](#statusipalias) - Returns the status (0=down, 1=up) of an existing ipalias for the agent.
* [stop](#stop) - Show the agent's primary IP address
* [stopIpalias](#stopipalias) - Stops an existing ipalias for the agent.
* [trapConfigAdd](#trapconfigadd) - Add a trap destination to the set of destinations.
* [trapConfigDel](#trapconfigdel) - Remove a trap destination from the set of destinations.
* [trapConfigList](#trapconfiglist) - List the set of trap destinations for this agent instance.
* [trapList](#traplist) - List the outstanding asynchronous traps for this agent instance.

## addIpalias

port defaults to 161 if not specified. mask defaults to the class-based network mask for the address. interface defaults to the default network interface.  If port is set to 0, the system will automatically select a port number. This is useful for client-mode protocols, such as TFTP or TOD. Upon start of an IP alias with a 0 (auto-assigned) port number, its port will change to contain the value of the selected system port.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddIpaliasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddIpaliasRequest();
    $request->ip = 'suscipit';
    $request->agentNum = 437587;
    $request->interface = 'magnam';
    $request->mask = 'debitis';
    $request->port = 56713;

    $response = $sdk->agent->addIpalias($request);

    if ($response->addIpalias200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addTimerScript

Add a new timer script to be executed at specified interval (in msec) with the specified argument.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddTimerScriptRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTimerScriptRequest();
    $request->agentNum = 963663;
    $request->arg = 'tempora';
    $request->interval = 383441;
    $request->script = 'molestiae';

    $response = $sdk->agent->addTimerScript($request);

    if ($response->addTimerScript200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## agentRemove

For speed, this operation will complete asynchronously. The same synchronization considerations apply as in /mimic/agent/start.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AgentRemoveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AgentRemoveRequest();
    $request->agentNum = 791725;

    $response = $sdk->agent->agentRemove($request);

    if ($response->agentRemove200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## agentStoreCopy

This command copies the variable store from the other agent to this agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AgentStoreCopyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AgentStoreCopyRequest();
    $request->agentNum = 812169;
    $request->otherAgent = 528895;

    $response = $sdk->agent->agentStoreCopy($request);

    if ($response->agentStoreCopy200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## agentStoreExists

It returns "1" if the variable exists, else "0".

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AgentStoreExistsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AgentStoreExistsRequest();
    $request->agentNum = 479977;
    $request->var = 'excepturi';

    $response = $sdk->agent->agentStoreExists($request);

    if ($response->agentStoreExists200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## agentStoreGet

The value will be returned as a string (like all Tcl values).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AgentStoreGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AgentStoreGetRequest();
    $request->agentNum = 392785;
    $request->var = 'recusandae';

    $response = $sdk->agent->agentStoreGet($request);

    if ($response->agentStoreGet200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## agentStoreList

The list will be a Tcl format list with curly braces "{}" around each list element. These elements in turn are space separated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AgentStoreListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AgentStoreListRequest();
    $request->agentNum = 836079;

    $response = $sdk->agent->agentStoreList($request);

    if ($response->agentStoreList200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## agentStoreLreplace

These commands treat the variable as a list, and allow to replace an entry in the list at the specified index with the specified value. The variable has to already exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AgentStoreLreplaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AgentStoreLreplaceRequest();
    $request->requestBody = 'ab';
    $request->agentNum = 337396;
    $request->index = 87129;
    $request->var = 'deserunt';

    $response = $sdk->agent->agentStoreLreplace($request);

    if ($response->agentStoreLreplace200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## agentStorePersists

It returns "1" if the variable is persistent, else "0".

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AgentStorePersistsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AgentStorePersistsRequest();
    $request->agentNum = 20218;
    $request->var = 'ipsam';

    $response = $sdk->agent->agentStorePersists($request);

    if ($response->agentStorePersists200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## agentStoreSet

The append sub-command will append the value to an existing variable, or create a new one. The set sub-command will overwrite an existing variable, or create a new one. The optional persist flag can be used to indicate if the variable is to be persistent as described above. By default a value of '0' will be implied for the persist flag. To avoid mistakes, for existing variables the persist flag can only be set. If you want to reset it, you first need to unset the variable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AgentStoreSetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AgentStoreSetRequest();
    $request->requestBody = 'repellendus';
    $request->agentNum = 957156;
    $request->persist = 778157;
    $request->var = 'odit';

    $response = $sdk->agent->agentStoreSet($request);

    if ($response->agentStoreSet200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## agentStoreUnset

This will cleanup persistent variables if needed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AgentStoreUnsetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AgentStoreUnsetRequest();
    $request->agentNum = 870013;
    $request->var = 'at';

    $response = $sdk->agent->agentStoreUnset($request);

    if ($response->agentStoreUnset200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## delIpalias

port defaults to 161 if not specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DelIpaliasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DelIpaliasRequest();
    $request->ip = 'maiores';
    $request->agentNum = 473608;
    $request->port = 799159;

    $response = $sdk->agent->delIpalias($request);

    if ($response->delIpalias200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## delTimerScript

The first scheduled script that matches the script name, and optionally the interval and argument will be deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DelTimerScriptRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DelTimerScriptRequest();
    $request->agentNum = 800911;
    $request->arg = 'esse';
    $request->interval = 520478;
    $request->script = 'porro';

    $response = $sdk->agent->delTimerScript($request);

    if ($response->delTimerScript200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fromAdd

An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FromAddRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FromAddRequest();
    $request->ip = 'dolorum';
    $request->agentNum = 118274;
    $request->port = 720633;

    $response = $sdk->agent->fromAdd($request);

    if ($response->fromAdd200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fromDel

An empty ipaddress or 0.0.0.0 both imply any address. Similarly an empty port or 0 both imply any port. For agents with source-address-indexing enabled, messages which do not match any source address will be discarded with an ERROR message, similar to community string mismatches.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FromDelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FromDelRequest();
    $request->ip = 'officia';
    $request->agentNum = 582020;
    $request->port = 143353;

    $response = $sdk->agent->fromDel($request);

    if ($response->fromDel200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fromList

This in effect implements source-address-indexing, where 2 agents with the same address can be configured, each accepting messages from different management stations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FromListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FromListRequest();
    $request->agentNum = 537373;

    $response = $sdk->agent->fromList($request);

    if ($response->ipSources !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAgentState

0-Unknown 1-Running 2-Stopped 3-Halted 4-Paused 5-Deleted 6-Stopping

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAgentStateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAgentStateRequest();
    $request->agentNum = 944669;

    $response = $sdk->agent->getAgentState($request);

    if ($response->getAgentState200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChanged

has the agent value space changed?

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetChangedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChangedRequest();
    $request->agentNum = 758616;

    $response = $sdk->agent->getChanged($request);

    if ($response->getChanged200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConfigChanged

has the lab configuration changed?

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConfigChangedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConfigChangedRequest();
    $request->agentNum = 521848;

    $response = $sdk->agent->getConfigChanged($request);

    if ($response->getConfigChanged200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDelay

The minimum granularity is 10 msec.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDelayRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDelayRequest();
    $request->agentNum = 105907;

    $response = $sdk->agent->getDelay($request);

    if ($response->getDelay200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDrops

drop rate (every N-th PDU). 0 means no drops.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDropsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDropsRequest();
    $request->agentNum = 414662;

    $response = $sdk->agent->getDrops($request);

    if ($response->getDrops200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHost

Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetHostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHostRequest();
    $request->agentNum = 473600;

    $response = $sdk->agent->getHost($request);

    if ($response->getHost200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInformTimeout

The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInformTimeoutRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInformTimeoutRequest();
    $request->agentNum = 264555;

    $response = $sdk->agent->getInformTimeout($request);

    if ($response->getInformTimeout200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInterface

network interface card for the agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInterfaceRequest();
    $request->agentNum = 186332;

    $response = $sdk->agent->getInterface($request);

    if ($response->getInterface200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMask

subnet mask of the agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMaskRequest();
    $request->agentNum = 774234;

    $response = $sdk->agent->getMask($request);

    if ($response->getMask200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMibs

set of MIBs, simulations and scenarios

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMibsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMibsRequest();
    $request->agentNum = 736918;

    $response = $sdk->agent->getMibs($request);

    if ($response->triplets !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNumberStarts

This count is incremented each time an agent starts. It affects the SNMPv3 EngineBoots parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNumberStartsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumberStartsRequest();
    $request->agentNum = 456150;

    $response = $sdk->agent->getNumberStarts($request);

    if ($response->getNumberStarts200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOiddir

MIB directory of the agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOiddirRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOiddirRequest();
    $request->agentNum = 216550;

    $response = $sdk->agent->getOiddir($request);

    if ($response->getOiddir200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOwner

owner of the agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOwnerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOwnerRequest();
    $request->agentNum = 568434;

    $response = $sdk->agent->getOwner($request);

    if ($response->getOwner200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPdusize

The limit for this configurable is 65536.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPdusizeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPdusizeRequest();
    $request->agentNum = 135218;

    $response = $sdk->agent->getPdusize($request);

    if ($response->getPdusize200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPort

port number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPortRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPortRequest();
    $request->agentNum = 18789;

    $response = $sdk->agent->getPort($request);

    if ($response->getPort200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPrivdir

private directory of the agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPrivdirRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPrivdirRequest();
    $request->agentNum = 324141;

    $response = $sdk->agent->getPrivdir($request);

    if ($response->getPrivdir200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProtocols

protocols supported by agent as an array of strings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProtocolsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProtocolsRequest();
    $request->agentNum = 617636;

    $response = $sdk->agent->getProtocols($request);

    if ($response->getProtocols200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReadCommunity

read community string

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReadCommunityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReadCommunityRequest();
    $request->agentNum = 149675;

    $response = $sdk->agent->getReadCommunity($request);

    if ($response->getReadCommunity200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScen

first scenario name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetScenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScenRequest();
    $request->agentNum = 612096;

    $response = $sdk->agent->getScen($request);

    if ($response->getScen200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSim

first simulation name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSimRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSimRequest();
    $request->agentNum = 222321;

    $response = $sdk->agent->getSim($request);

    if ($response->getSim200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStarttime

relative start time

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStarttimeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStarttimeRequest();
    $request->agentNum = 616934;

    $response = $sdk->agent->getStarttime($request);

    if ($response->getStarttime200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStateChanged

has the agent state changed?

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStateChangedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStateChangedRequest();
    $request->agentNum = 386489;

    $response = $sdk->agent->getStateChanged($request);

    if ($response->getStateChanged200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStatistics

The statistics are returned as 64-bit decimal numbers for the following statistics, total, discarded, error, GET, GETNEXT, SET, GETBULK, trap, GET variables, GETNEXT variables, SET variables, GETBULK variables, INFORM sent, INFORM re-sent, INFORM timed out, INFORM acked, INFORM REPORT

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStatisticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStatisticsRequest();
    $request->agentNum = 943749;

    $response = $sdk->agent->getStatistics($request);

    if ($response->getStatistics200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTrace

SNMP PDU tracing

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTraceRequest();
    $request->agentNum = 902599;

    $response = $sdk->agent->getTrace($request);

    if ($response->getTrace200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getValidate

Is a bitmask in which with the following bits (from LSB) check for type, length, range, access

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetValidateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetValidateRequest();
    $request->agentNum = 681820;

    $response = $sdk->agent->getValidate($request);

    if ($response->getValidate200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWriteCommunity

write community string

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWriteCommunityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWriteCommunityRequest();
    $request->agentNum = 449950;

    $response = $sdk->agent->getWriteCommunity($request);

    if ($response->getWriteCommunity200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## halt

Halt the current agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\HaltRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HaltRequest();
    $request->agentNum = 359508;

    $response = $sdk->agent->halt($request);

    if ($response->halt200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIpaliases

The agent host address (set with mimic agent set host) is not in this list, since it is already accessible separately with mimic agent get host.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListIpaliasesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIpaliasesRequest();
    $request->agentNum = 613064;

    $response = $sdk->agent->listIpaliases($request);

    if ($response->ipAliases !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTimerScripts

The command mimic timer script list lists global timer scripts, the command /mimic/timer/script/{agentNum}/list is the per-agent equivalent NOTE Global timer scripts run globally but within them you can address individual agents using {agentNum}. To schedule timerscripts for an individual agent, use /mimic/timer/script/{agentNum}.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTimerScriptsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTimerScriptsRequest();
    $request->agentNum = 437032;

    $response = $sdk->agent->listTimerScripts($request);

    if ($response->timerScripts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## new

Add an agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\NewRequest;
use \OpenAPI\OpenAPI\Models\Shared\Triplet;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NewRequest();
    $request->ip = 'saepe';
    $request->requestBody = [
        new Triplet(),
        new Triplet(),
        new Triplet(),
    ];
    $request->agentNum = 99280;

    $response = $sdk->agent->new($request);

    if ($response->new200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pauseNow

Pause the current agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PauseNowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PauseNowRequest();
    $request->agentNum = 60225;

    $response = $sdk->agent->pauseNow($request);

    if ($response->pauseNow200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolGetConfig

Returns the protocol's configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolGetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolGetConfigRequest();
    $request->agentNum = 969810;
    $request->prot = 'est';

    $response = $sdk->agent->protocolGetConfig($request);

    if ($response->protocolGetConfig200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reload

This only works for halted agents. The net effect is the same as restarting an agent (ie. stop, start, halt), but without disconnecting the network (and thus existing connections).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ReloadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReloadRequest();
    $request->agentNum = 653140;

    $response = $sdk->agent->reload($request);

    if ($response->reload200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resume

Resume the current agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResumeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResumeRequest();
    $request->agentNum = 670638;

    $response = $sdk->agent->resume($request);

    if ($response->resume200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## save

Save agent MIB values.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SaveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SaveRequest();
    $request->agentNum = 170909;

    $response = $sdk->agent->save($request);

    if ($response->save200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setDelay

The minimum granularity is 10 msec.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetDelayRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetDelayRequest();
    $request->agentNum = 210382;
    $request->delay = 358152;

    $response = $sdk->agent->setDelay($request);

    if ($response->setDelay200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setDrops

0 means no drops

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetDropsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetDropsRequest();
    $request->agentNum = 128926;
    $request->drops = 750686;

    $response = $sdk->agent->setDrops($request);

    if ($response->setDrops200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setHost

Currently, only IPv4 addresses are allowed as the main address of the agent, but both IPv4 and IPv6 addresses are allowed as IP aliases for the agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetHostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetHostRequest();
    $request->agentNum = 315428;
    $request->host = 'omnis';

    $response = $sdk->agent->setHost($request);

    if ($response->setHost200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setInformTimeout

The agent will retransmit INFORM PDUs at this interval until it has received a reply from the manager.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetInformTimeoutRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetInformTimeoutRequest();
    $request->agentNum = 363711;
    $request->informTimeout = 325047;

    $response = $sdk->agent->setInformTimeout($request);

    if ($response->setInformTimeout200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setInterface

network interface card for the agent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetInterfaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetInterfaceRequest();
    $request->agentNum = 570197;
    $request->interface = 'accusantium';

    $response = $sdk->agent->setInterface($request);

    if ($response->setInterface200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setMask

subnet mask of the agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetMaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetMaskRequest();
    $request->agentNum = 438601;
    $request->mask = 'culpa';

    $response = $sdk->agent->setMask($request);

    if ($response->setMask200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setMibs

set of MIBs, simulations and scenarios

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetMibsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Triplet;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetMibsRequest();
    $request->requestBody = [
        new Triplet(),
        new Triplet(),
        new Triplet(),
        new Triplet(),
    ];
    $request->agentNum = 958950;

    $response = $sdk->agent->setMibs($request);

    if ($response->setMibs200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setOiddir

MIB directory of the agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetOiddirRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetOiddirRequest();
    $request->agentNum = 102044;
    $request->oiddir = 'mollitia';

    $response = $sdk->agent->setOiddir($request);

    if ($response->setOiddir200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setOwner

owner of the agent

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetOwnerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetOwnerRequest();
    $request->agentNum = 208876;
    $request->owner = 'culpa';

    $response = $sdk->agent->setOwner($request);

    if ($response->setOwner200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setPdusize

The limit for this configurable is 65536

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetPdusizeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetPdusizeRequest();
    $request->agentNum = 161309;
    $request->pdusize = 995300;

    $response = $sdk->agent->setPdusize($request);

    if ($response->setPdusize200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setPort

port number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetPortRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetPortRequest();
    $request->agentNum = 653108;
    $request->port = 581850;

    $response = $sdk->agent->setPort($request);

    if ($response->setPort200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setPrivdir

private directory of the agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetPrivdirRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetPrivdirRequest();
    $request->agentNum = 253291;
    $request->privdir = 'commodi';

    $response = $sdk->agent->setPrivdir($request);

    if ($response->setPrivdir200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setProtocols

protocols supported by agent as a comma-separated list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetProtocolsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetProtocolsRequest();
    $request->requestBody = [
        'molestiae',
        'velit',
    ];
    $request->agentNum = 623510;

    $response = $sdk->agent->setProtocols($request);

    if ($response->setProtocols200ApplicationJSONStringIntegers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setReadCommunity

read community string

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetReadCommunityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetReadCommunityRequest();
    $request->agentNum = 158969;
    $request->read = 'quis';

    $response = $sdk->agent->setReadCommunity($request);

    if ($response->setReadCommunity200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setStarttime

relative start time

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetStarttimeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetStarttimeRequest();
    $request->agentNum = 110375;
    $request->start = 674752;

    $response = $sdk->agent->setStarttime($request);

    if ($response->setStarttime200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setTrace

SNMP PDU tracing

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetTraceRequest();
    $request->agentNum = 656330;
    $request->trace = 317202;

    $response = $sdk->agent->setTrace($request);

    if ($response->setTrace200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setValidate

Is a bitmask in which with the following bits (from LSB) check for type, length, range, access. A default value of 65535 does all validation checking.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetValidateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetValidateRequest();
    $request->agentNum = 138183;
    $request->validate = 778346;

    $response = $sdk->agent->setValidate($request);

    if ($response->setValidate200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setWriteCommunity

write community string

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetWriteCommunityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetWriteCommunityRequest();
    $request->agentNum = 196582;
    $request->write = 'tenetur';

    $response = $sdk->agent->setWriteCommunity($request);

    if ($response->setWriteCommunity200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## start

For speed, this operation will complete asynchronously. A successful return from this command means the starting of the agent is in progress. If you need to rely on the agent to have completed startup, you should wait for it's state to become RUNNING.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartRequest();
    $request->agentNum = 368725;

    $response = $sdk->agent->start($request);

    if ($response->start200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startIpalias

port defaults to 161 if not specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartIpaliasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartIpaliasRequest();
    $request->ip = 'id';
    $request->agentNum = 820994;
    $request->port = 13571;

    $response = $sdk->agent->startIpalias($request);

    if ($response->startIpalias200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## statusIpalias

port defaults to 161 if not specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StatusIpaliasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StatusIpaliasRequest();
    $request->ip = 'quasi';
    $request->agentNum = 622846;
    $request->port = 837945;

    $response = $sdk->agent->statusIpalias($request);

    if ($response->statusIpalias200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stop

Agent primary IP address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopRequest();
    $request->agentNum = 673660;

    $response = $sdk->agent->stop($request);

    if ($response->stop200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopIpalias

port defaults to 161 if not specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopIpaliasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopIpaliasRequest();
    $request->ip = 'quasi';
    $request->agentNum = 971945;
    $request->port = 976460;

    $response = $sdk->agent->stopIpalias($request);

    if ($response->stopIpalias200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## trapConfigAdd

Add a trap destination to the set of destinations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TrapConfigAddRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TrapConfigAddRequest();
    $request->ip = 'vero';
    $request->agentNum = 468651;
    $request->port = 509624;

    $response = $sdk->agent->trapConfigAdd($request);

    if ($response->trapConfigAdd200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## trapConfigDel

Remove a trap destination from the set of destinations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TrapConfigDelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TrapConfigDelRequest();
    $request->ip = 'voluptatibus';
    $request->agentNum = 55714;
    $request->port = 604846;

    $response = $sdk->agent->trapConfigDel($request);

    if ($response->trapConfigDel200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## trapConfigList

Each trap destination is identified with an IP address and a port number. The default port number is the standard SNMP trap port 162.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TrapConfigListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TrapConfigListRequest();
    $request->agentNum = 451159;

    $response = $sdk->agent->trapConfigList($request);

    if ($response->trapDests !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## trapList

List the outstanding asynchronous traps for this agent instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TrapListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TrapListRequest();
    $request->agentNum = 739264;

    $response = $sdk->agent->trapList($request);

    if ($response->trapList200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
