# tftp

### Available Operations

* [protocolTftpGetArgs](#protocoltftpgetargs) - Show the agent's TFTP argument structure
* [protocolTftpGetConfig](#protocoltftpgetconfig) - Show the agent's TFTP configuration
* [protocolTftpGetStatistics](#protocoltftpgetstatistics) - Show the agent's TFTP statistics
* [protocolTftpGetStatsHdr](#protocoltftpgetstatshdr) - Show the TFTP statistics headers
* [protocolTftpGetTrace](#protocoltftpgettrace) - Show the agent's TFTP traffic tracing
* [protocolTftpSessionGetParameter](#protocoltftpsessiongetparameter) - Show a parameter of a TFTP sesssion
* [protocolTftpSessionRead](#protocoltftpsessionread) - Create a read session to download srcfile from server
* [protocolTftpSessionSetParameter](#protocoltftpsessionsetparameter) - Set a parameter of a TFTP sesssion
* [protocolTftpSessionStart](#protocoltftpsessionstart) - Start a TFTP sesssion
* [protocolTftpSessionStatus](#protocoltftpsessionstatus) - Check a TFTP sesssion's status
* [protocolTftpSessionStop](#protocoltftpsessionstop) - Stop a TFTP sesssion
* [protocolTftpSessionWrite](#protocoltftpsessionwrite) - Create a read session to upload srcfile to server
* [protocolTftpSetConfig](#protocoltftpsetconfig) - Set the agent's TFTP configuration
* [protocolTftpSetTrace](#protocoltftpsettrace) - Set the agent's TFTP traffic tracing

## protocolTftpGetArgs

Agent's TFTP configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTftpGetArgsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTftpGetArgsRequest();
    $request->agentNum = 463150;

    $response = $sdk->tftp->protocolTftpGetArgs($request);

    if ($response->protocolTftpGetArgs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTftpGetConfig

Agent's TFTP configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTftpGetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTftpGetConfigRequest();
    $request->agentNum = 565421;

    $response = $sdk->tftp->protocolTftpGetConfig($request);

    if ($response->configTFTP !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTftpGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTftpGetStatisticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTftpGetStatisticsRequest();
    $request->agentNum = 840429;

    $response = $sdk->tftp->protocolTftpGetStatistics($request);

    if ($response->protocolTftpGetStatistics200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTftpGetStatsHdr

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
    $response = $sdk->tftp->protocolTftpGetStatsHdr();

    if ($response->protocolTftpGetStatsHdr200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTftpGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTftpGetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTftpGetTraceRequest();
    $request->agentNum = 183280;

    $response = $sdk->tftp->protocolTftpGetTrace($request);

    if ($response->configTFTP !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTftpSessionGetParameter

Parameter is server , port , or dstfile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTftpSessionGetParameterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTftpSessionGetParameterRequest();
    $request->agentNum = 204865;
    $request->parameter = 'fugit';
    $request->sessionID = 'magni';

    $response = $sdk->tftp->protocolTftpSessionGetParameter($request);

    if ($response->protocolTftpSessionGetParameter200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTftpSessionRead

Session ID is returned

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTftpSessionReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTftpSessionReadRequest();
    $request->agentNum = 488056;
    $request->srcfile = 'sunt';

    $response = $sdk->tftp->protocolTftpSessionRead($request);

    if ($response->protocolTftpSessionRead200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTftpSessionSetParameter

Parameter is server , port , or dstfile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTftpSessionSetParameterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTftpSessionSetParameterRequest();
    $request->agentNum = 355613;
    $request->parameter = 'nam';
    $request->sessionID = 'hic';
    $request->value = 'voluptatem';

    $response = $sdk->tftp->protocolTftpSessionSetParameter($request);

    if ($response->protocolTftpSessionSetParameter200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTftpSessionStart

Start uploading or downloading the file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTftpSessionStartRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTftpSessionStartRequest();
    $request->agentNum = 765326;
    $request->sessionID = 'soluta';

    $response = $sdk->tftp->protocolTftpSessionStart($request);

    if ($response->protocolTftpSessionStart200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTftpSessionStatus

Status includes running state, bytes transfered, and time elapsed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTftpSessionStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTftpSessionStatusRequest();
    $request->agentNum = 748664;
    $request->sessionID = 'et';

    $response = $sdk->tftp->protocolTftpSessionStatus($request);

    if ($response->protocolTftpSessionStatus200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTftpSessionStop

Stop uploading or downloading the file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTftpSessionStopRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTftpSessionStopRequest();
    $request->agentNum = 903720;
    $request->sessionID = 'ipsum';

    $response = $sdk->tftp->protocolTftpSessionStop($request);

    if ($response->protocolTftpSessionStop200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTftpSessionWrite

Session ID is returned

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTftpSessionWriteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTftpSessionWriteRequest();
    $request->agentNum = 83422;
    $request->srcfile = 'nobis';

    $response = $sdk->tftp->protocolTftpSessionWrite($request);

    if ($response->protocolTftpSessionWrite200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTftpSetConfig

Agent's TFTP configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTftpSetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTftpSetConfigRequest();
    $request->agentNum = 552193;
    $request->argument = 'tempore';
    $request->value = 'cupiditate';

    $response = $sdk->tftp->protocolTftpSetConfig($request);

    if ($response->protocolTftpSetConfig200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolTftpSetTrace

1 to enable, 0 to disable

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolTftpSetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolTftpSetTraceRequest();
    $request->agentNum = 45614;
    $request->enableOrNot = 'delectus';

    $response = $sdk->tftp->protocolTftpSetTrace($request);

    if ($response->protocolTftpSetTrace200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
