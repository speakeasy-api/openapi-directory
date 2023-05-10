# snmPv3

### Available Operations

* [protocolSnmpv3AccessAdd](#protocolsnmpv3accessadd) - Adds a new access entry with the specified parameters.
* [protocolSnmpv3AccessClear](#protocolsnmpv3accessclear) - Clears all access entries.
* [protocolSnmpv3AccessDel](#protocolsnmpv3accessdel) - Deletes the specified access entry.
* [protocolSnmpv3AccessList](#protocolsnmpv3accesslist) - Returns the current acccess entries as an array of strings.
* [protocolSnmpv3GetConfig](#protocolsnmpv3getconfig) - Returns the SNMPv3 configuration.
* [protocolSnmpv3GetContextEngineid](#protocolsnmpv3getcontextengineid) - Retrieves the contextEngineID for the agent instance.
* [protocolSnmpv3GetEngineboots](#protocolsnmpv3getengineboots) - Retrieves the number of times the agent has been restarted.
* [protocolSnmpv3GetEngineid](#protocolsnmpv3getengineid) - For started agents, retrieves the current engineID in use by the snmpv3 module.
* [protocolSnmpv3GetEnginetime](#protocolsnmpv3getenginetime) - Retrieves the time in seconds for which the agent has been running.
* [protocolSnmpv3GroupAdd](#protocolsnmpv3groupadd) - Adds a new group entry with the specified parameters.
* [protocolSnmpv3GroupClear](#protocolsnmpv3groupclear) - Clears all group entries.
* [protocolSnmpv3GroupDel](#protocolsnmpv3groupdel) - Deletes the specified group entry.
* [protocolSnmpv3GroupList](#protocolsnmpv3grouplist) - Returns the current group entries as an array of strings.
* [protocolSnmpv3SetConfig](#protocolsnmpv3setconfig) - Changes the SNMPv3 configuration.
* [protocolSnmpv3UserAdd](#protocolsnmpv3useradd) - Adds a new user entry with the specified parameters.
* [protocolSnmpv3UserClear](#protocolsnmpv3userclear) - Clears all user entries.
* [protocolSnmpv3UserDel](#protocolsnmpv3userdel) - Deletes the specified user entry.
* [protocolSnmpv3UserList](#protocolsnmpv3userlist) - Returns the current user entries as a Tcl list.
* [protocolSnmpv3UsmSave](#protocolsnmpv3usmsave) - Saves current user settings in the currently loaded USM config file.
* [protocolSnmpv3UsmSaveas](#protocolsnmpv3usmsaveas) - Saves current user settings in the specified USM config file.
* [protocolSnmpv3VacmSave](#protocolsnmpv3vacmsave) - Saves current group, access, view settings in the currently loaded VACM config file.
* [protocolSnmpv3VacmSaveas](#protocolsnmpv3vacmsaveas) - Saves current group, access, view settings in the specified VACM config file.
* [protocolSnmpv3ViewAdd](#protocolsnmpv3viewadd) - Adds a new view entry with the specified parameters.
* [protocolSnmpv3ViewClear](#protocolsnmpv3viewclear) - Clears all view entries.
* [protocolSnmpv3ViewDel](#protocolsnmpv3viewdel) - Deletes the specified view entry.
* [protocolSnmpv3ViewList](#protocolsnmpv3viewlist) - Returns the current view entries as an array of strings.

## protocolSnmpv3AccessAdd

Adds a new access entry with the specified parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3AccessAddRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3AccessAddRequest();
    $request->agentNum = 944120;
    $request->contextMatch = 'recusandae';
    $request->groupName = 'omnis';
    $request->notifyView = 'facilis';
    $request->prefix = 'perspiciatis';
    $request->readView = 'voluptatem';
    $request->securityLevel = 'porro';
    $request->securityModel = 'consequuntur';
    $request->writeView = 'blanditiis';

    $response = $sdk->snmPv3->protocolSnmpv3AccessAdd($request);

    if ($response->protocolSnmpv3AccessAdd200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3AccessClear

Clears all access entries.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3AccessClearRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3AccessClearRequest();
    $request->agentNum = 621479;

    $response = $sdk->snmPv3->protocolSnmpv3AccessClear($request);

    if ($response->protocolSnmpv3AccessClear200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3AccessDel

Deletes the specified access entry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3AccessDelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3AccessDelRequest();
    $request->accessName = 'eaque';
    $request->agentNum = 577229;

    $response = $sdk->snmPv3->protocolSnmpv3AccessDel($request);

    if ($response->protocolSnmpv3AccessDel200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3AccessList

Returns the current acccess entries as an array of strings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3AccessListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3AccessListRequest();
    $request->agentNum = 699098;

    $response = $sdk->snmPv3->protocolSnmpv3AccessList($request);

    if ($response->protocolSnmpv3AccessList200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3GetConfig

Returns the SNMPv3 configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3GetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3GetConfigRequest();
    $request->agentNum = 237893;

    $response = $sdk->snmPv3->protocolSnmpv3GetConfig($request);

    if ($response->configSNMPv3 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3GetContextEngineid

Retrieves the contextEngineID for the agent instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3GetContextEngineidRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3GetContextEngineidRequest();
    $request->agentNum = 992397;

    $response = $sdk->snmPv3->protocolSnmpv3GetContextEngineid($request);

    if ($response->protocolSnmpv3GetContextEngineid200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3GetEngineboots

Retrieves the number of times the agent has been restarted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3GetEnginebootsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3GetEnginebootsRequest();
    $request->agentNum = 934214;

    $response = $sdk->snmPv3->protocolSnmpv3GetEngineboots($request);

    if ($response->protocolSnmpv3GetEngineboots200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3GetEngineid

For stopped agents, this operation is meaningless. If not explicitly set by the user then the autogenerated engineID is returned. The format of the engineID is in the familiar hex format, eg. \x01 23 45 67 89...

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3GetEngineidRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3GetEngineidRequest();
    $request->agentNum = 267262;

    $response = $sdk->snmPv3->protocolSnmpv3GetEngineid($request);

    if ($response->protocolSnmpv3GetEngineid200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3GetEnginetime

Retrieves the time in seconds for which the agent has been running.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3GetEnginetimeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3GetEnginetimeRequest();
    $request->agentNum = 613966;

    $response = $sdk->snmPv3->protocolSnmpv3GetEnginetime($request);

    if ($response->protocolSnmpv3GetEnginetime200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3GroupAdd

Adds a new group entry with the specified parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3GroupAddRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3GroupAddRequest();
    $request->agentNum = 679091;
    $request->groupName = 'deleniti';
    $request->securityModel = 'pariatur';
    $request->securityName = 'provident';

    $response = $sdk->snmPv3->protocolSnmpv3GroupAdd($request);

    if ($response->protocolSnmpv3GroupAdd200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3GroupClear

Clears all group entries.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3GroupClearRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3GroupClearRequest();
    $request->agentNum = 750844;

    $response = $sdk->snmPv3->protocolSnmpv3GroupClear($request);

    if ($response->protocolSnmpv3GroupClear200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3GroupDel

Deletes the specified group entry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3GroupDelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3GroupDelRequest();
    $request->agentNum = 730122;
    $request->groupName = 'delectus';

    $response = $sdk->snmPv3->protocolSnmpv3GroupDel($request);

    if ($response->protocolSnmpv3GroupDel200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3GroupList

Returns the current group entries as an array of strings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3GroupListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3GroupListRequest();
    $request->agentNum = 311945;

    $response = $sdk->snmPv3->protocolSnmpv3GroupList($request);

    if ($response->protocolSnmpv3GroupList200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3SetConfig

Changes the SNMPv3 configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3SetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3SetConfigRequest();
    $request->agentNum = 554242;
    $request->parameter = 'aliquid';
    $request->value = 'dolorem';

    $response = $sdk->snmPv3->protocolSnmpv3SetConfig($request);

    if ($response->protocolSnmpv3SetConfig200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3UserAdd

Adds a new user entry with the specified parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3UserAddRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3UserAddRequest();
    $request->agentNum = 209843;
    $request->authKey = 'dolor';
    $request->authProtocol = 'qui';
    $request->privKey = 'ipsum';
    $request->privProtocol = 'hic';
    $request->securityName = 'excepturi';
    $request->userName = 'Myrtle_Klein';

    $response = $sdk->snmPv3->protocolSnmpv3UserAdd($request);

    if ($response->protocolSnmpv3UserAdd200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3UserClear

Clears all user entries.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3UserClearRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3UserClearRequest();
    $request->agentNum = 227414;

    $response = $sdk->snmPv3->protocolSnmpv3UserClear($request);

    if ($response->protocolSnmpv3UserClear200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3UserDel

Deletes the specified user entry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3UserDelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3UserDelRequest();
    $request->agentNum = 680545;
    $request->userName = 'Deonte5';

    $response = $sdk->snmPv3->protocolSnmpv3UserDel($request);

    if ($response->protocolSnmpv3UserDel200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3UserList

Returns the current user entries as a Tcl list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3UserListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3UserListRequest();
    $request->agentNum = 434417;

    $response = $sdk->snmPv3->protocolSnmpv3UserList($request);

    if ($response->protocolSnmpv3UserList200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3UsmSave

Saves current user settings in the currently loaded USM config file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3UsmSaveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3UsmSaveRequest();
    $request->agentNum = 487838;

    $response = $sdk->snmPv3->protocolSnmpv3UsmSave($request);

    if ($response->protocolSnmpv3UsmSave200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3UsmSaveas

Saves current user settings in the specified USM config file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3UsmSaveasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3UsmSaveasRequest();
    $request->agentNum = 311796;
    $request->filename = 'accusamus';

    $response = $sdk->snmPv3->protocolSnmpv3UsmSaveas($request);

    if ($response->protocolSnmpv3UsmSaveas200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3VacmSave

Saves current group, access, view settings in the currently loaded VACM config file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3VacmSaveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3VacmSaveRequest();
    $request->agentNum = 696344;

    $response = $sdk->snmPv3->protocolSnmpv3VacmSave($request);

    if ($response->protocolSnmpv3VacmSave200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3VacmSaveas

Saves current group, access, view settings in the specified VACM config file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3VacmSaveasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3VacmSaveasRequest();
    $request->agentNum = 976405;
    $request->filename = 'voluptas';

    $response = $sdk->snmPv3->protocolSnmpv3VacmSaveas($request);

    if ($response->protocolSnmpv3VacmSaveas200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3ViewAdd

Adds a new view entry with the specified parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3ViewAddRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3ViewAddRequest();
    $request->agentNum = 617658;
    $request->mask = 'eos';
    $request->subtree = 'atque';
    $request->viewName = 'sit';
    $request->viewType = 'fugiat';

    $response = $sdk->snmPv3->protocolSnmpv3ViewAdd($request);

    if ($response->protocolSnmpv3ViewAdd200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3ViewClear

Clears all view entries.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3ViewClearRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3ViewClearRequest();
    $request->agentNum = 67249;

    $response = $sdk->snmPv3->protocolSnmpv3ViewClear($request);

    if ($response->protocolSnmpv3ViewClear200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3ViewDel

Deletes the specified view entry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3ViewDelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3ViewDelRequest();
    $request->agentNum = 743835;
    $request->viewName = 'dolorum';

    $response = $sdk->snmPv3->protocolSnmpv3ViewDel($request);

    if ($response->protocolSnmpv3ViewDel200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolSnmpv3ViewList

Returns the current view entries as an array of strings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolSnmpv3ViewListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolSnmpv3ViewListRequest();
    $request->agentNum = 478596;

    $response = $sdk->snmPv3->protocolSnmpv3ViewList($request);

    if ($response->protocolSnmpv3ViewList200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
