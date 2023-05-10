# valuespace

### Available Operations

* [add](#add) - Add an entry to a table.
* [evalValue](#evalvalue) - Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.
* [getInfo](#getinfo) - Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.
* [getInstances](#getinstances) - Display the MIB object instances for the specified object.
* [getMib](#getmib) - Return the MIB that defines the specified object.
* [getName](#getname) - Return the symbolic name of the specified object identifier.
* [getObjects](#getobjects) - Display the MIB objects below the current position
* [getOid](#getoid) - Return the numeric OID of the specified object.
* [getState](#getstate) - Get the state of a MIB object object.
* [getValue](#getvalue) - Get a variable in the Value Space.
* [getVariables](#getvariables) - Display the variables for the specified instance instance for the specified MIB object object
* [msetValue](#msetvalue) - Set multiple variables in the Value Space.
* [munsetValue](#munsetvalue) - Unset multiple variables in the Value Space
* [remove](#remove) - Remove an entry from a table.
* [setState](#setstate) - Set the state of a MIB object object
* [setValue](#setvalue) - Set a variable in the Value Space.
* [splitOid](#splitoid) - Split the numerical OID into the object OID and instance OID.
* [unsetValue](#unsetvalue) - Unset a variable in the Value Space in order to free its memory.

## add

The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddRequest();
    $request->agentNum = 281730;
    $request->instance = 'facilis';
    $request->object = 'cupiditate';

    $response = $sdk->valuespace->add($request);

    if ($response->add200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## evalValue

Evaluate the values of the specified instance instance for each specified MIB object object and return it as it would through SNMP requests.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EvalValueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EvalValueRequest();
    $request->agentNum = 181631;
    $request->instance = 'quae';
    $request->object = 'laudantium';

    $response = $sdk->valuespace->evalValue($request);

    if ($response->evalValue200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInfo

Return the syntactical information for the specified object, such as type, size, range, enumerations, and ACCESS.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInfoRequest();
    $request->agentNum = 485628;
    $request->object = 'occaecati';

    $response = $sdk->valuespace->getInfo($request);

    if ($response->getInfo200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInstances

This enables MIB browsing of the MIB on the current agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInstancesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInstancesRequest();
    $request->agentNum = 977496;
    $request->object = 'quisquam';

    $response = $sdk->valuespace->getInstances($request);

    if ($response->getInstances200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMib

This will only return a MIB name if the object is unmistakeably defined in a MIB.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMibRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMibRequest();
    $request->agentNum = 876506;
    $request->object = 'omnis';

    $response = $sdk->valuespace->getMib($request);

    if ($response->getMib200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getName

Return the symbolic name of the specified object identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNameRequest();
    $request->oid = 'quis';
    $request->agentNum = 218403;

    $response = $sdk->valuespace->getName($request);

    if ($response->getName200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getObjects

This command is similar to the ls or dir operating system commands to list filesystem directories.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetObjectsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetObjectsRequest();
    $request->oid = 'delectus';
    $request->agentNum = 455169;

    $response = $sdk->valuespace->getObjects($request);

    if ($response->getObjects200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOid

Return the numeric OID of the specified object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOidRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOidRequest();
    $request->agentNum = 231701;
    $request->object = 'vero';

    $response = $sdk->valuespace->getOid($request);

    if ($response->getOid200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getState

To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStateRequest();
    $request->agentNum = 949319;
    $request->object = 'dignissimos';

    $response = $sdk->valuespace->getState($request);

    if ($response->getState200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getValue

Get a variable in the Value Space.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetValueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetValueRequest();
    $request->agentNum = 941378;
    $request->instance = 'distinctio';
    $request->object = 'quod';
    $request->variable = 'odio';

    $response = $sdk->valuespace->getValue($request);

    if ($response->getValue200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVariables

This enables variable browsing of the MIB on the current agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetVariablesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVariablesRequest();
    $request->agentNum = 630448;
    $request->instance = 'facilis';
    $request->object = 'vero';

    $response = $sdk->valuespace->getVariables($request);

    if ($response->getVariables200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## msetValue

This is a performance optimization of the mimic value set command, to be used when many variables are to be set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MsetValueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MsetValueRequest();
    $request->requestBody = [
        [
            'quibusdam',
            'illum',
        ],
        [
            'natus',
        ],
    ];
    $request->agentNum = 773326;

    $response = $sdk->valuespace->msetValue($request);

    if ($response->msetValue200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## munsetValue

This is a performance optimization of the mimic value unset command, to be used when many variables are to be unset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MunsetValueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MunsetValueRequest();
    $request->requestBody = [
        [
            'exercitationem',
            'nulla',
            'fugit',
            'porro',
        ],
    ];
    $request->agentNum = 981830;

    $response = $sdk->valuespace->munsetValue($request);

    if ($response->munsetValue200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## remove

The object needs to specify the MIB object with the INDEX clause, usually an object whose name ends with Entry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveRequest();
    $request->agentNum = 985033;
    $request->instance = 'iusto';
    $request->object = 'eligendi';

    $response = $sdk->valuespace->remove($request);

    if ($response->remove200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setState

To disable traversal into a MIB object and any subtree underneath, set the state to 0, else set the state to 1.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetStateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetStateRequest();
    $request->agentNum = 497391;
    $request->object = 'alias';
    $request->state = 639473;

    $response = $sdk->valuespace->setState($request);

    if ($response->setState200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setValue

NOTE to set a binary string value, specify a string starting with \\x followed by pairs of hexadecimal digits, eg. "\\x 01 23 45". This command also assigns SNMP PDU action scripts for GET* and SET requests on a MIB object. The instance parameter must be 0. The following variables enable actions, g - The specified TCL script will be run on GET or GETNEXT requests. It has to exist under the simulation directory. s - The specified script will be run on SET requests. It has to exist under the simulation directory. This command also controls advanced trap generation functionality. The following variables control trap generation r, tu, c - These variables together represent the rate settings for the trap. r and tu is the actual per second rate and c represents the total duration in seconds for which the trap is sent. As soon as the c variable is set, the trap generation begins, for this reason it should be the last variable set for a particular trap. The following variables have to be set before setting the c variable to modify the behavior of the generated trap(s). OBJECT - An object name when used as a variable is looked up during the trap send and the value of that variable is included in the PDU. OBJECT.i - This type of variable will be used to assign an optional instance for the specified object in the traps varbind. The value of this variable identifies the index. e.g. The commands below will send ifIndex.2 with a value of 5 in the linkUp trap PDU. i - This variable is used to specify any extra version specific information to the trap generation code. Here is what it can be used to represent for various SNMP versions SNMPv1 - [community_string][,[enterprise][,agent_addr]] SNMPv2c - community_string SNMPv2 - source_party,destination_party,context SNMPv3 - user_name,context v - This variable lets the user override the version of the PDU being generated. The possible values are - "1", "2c", "2" and "3". o - This variable is used for traps that need extra variables to be added to the PDU along with the ones defined in the MIB as its variables. This lets the user force extra objects (along with instances if needed). All variables to be sent need to be assigned to the o variable. O - To omit any variables which are defined in the MIB you can use the O (capital o) variable. This needs to be set to the list of OIDs of the variable bindings in the order defined in the MIB. ip - The variable ip is used for generating the trap from the N-th IP alias address. a - This variable associates an action script to the trap or INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. It will be executed before each instance of the trap is sent out. I - This optional variable controls the generation of INFORM PDUs. An INFORM is sent only if the variable is non-zero, else a TRAP is generated. R, T, E - This variable associates an action script to the INFORM request. The action script specified in the value of this variable has to exist in the simulation directory. The action script associated with the R variable will be executed on receiving a INFORM RESPONSE, the one associated with the T variable on a timeout (ie. no response), the one associated with the E variable on a report PDU. eid.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine id for the destination specified by IP-ADDRESS and optionally by PORT. eb.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine boots. et.IP-ADDRESS.PORT - control variable allows to configure message authoritative engine time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetValueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetValueRequest();
    $request->requestBody = 'tempora';
    $request->agentNum = 368584;
    $request->instance = 'ea';
    $request->object = 'aspernatur';
    $request->variable = 'vel';

    $response = $sdk->valuespace->setValue($request);

    if ($response->setValue200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## splitOid

This is useful if you have an OID which is a combination of object and instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SplitOidRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SplitOidRequest();
    $request->oid = 'possimus';
    $request->agentNum = 297842;

    $response = $sdk->valuespace->splitOid($request);

    if ($response->splitOid200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unsetValue

Only variables that have previously been set can be unset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnsetValueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnsetValueRequest();
    $request->agentNum = 189848;
    $request->instance = 'ex';
    $request->object = 'laudantium';
    $request->variable = 'dicta';

    $response = $sdk->valuespace->unsetValue($request);

    if ($response->unsetValue200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
