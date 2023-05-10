# mqtt

### Available Operations

* [protocolMqttClientGetProtstate](#protocolmqttclientgetprotstate) - Show the agent's MQTT TCP connection state
* [protocolMqttClientGetState](#protocolmqttclientgetstate) - Show the agent's MQTT state
* [protocolMqttClientMessageCard](#protocolmqttclientmessagecard) - Show the agent's current messages' cardinality
* [protocolMqttClientMessageGet](#protocolmqttclientmessageget) - Show the agent's message attributes
* [protocolMqttClientMessageSet](#protocolmqttclientmessageset) - Set the agent's message attributes
* [protocolMqttClientResubscribe](#protocolmqttclientresubscribe) - Restart receiving messages from a subcription of the agent
* [protocolMqttClientRuntimeAbort](#protocolmqttclientruntimeabort) - Abort agent's MQTT TCP session without sending DISCONNECT command
* [protocolMqttClientRuntimeConnect](#protocolmqttclientruntimeconnect) - Start agent's MQTT TCP session
* [protocolMqttClientRuntimeDisconnect](#protocolmqttclientruntimedisconnect) - Disconnect agent's MQTT TCP session by sending DISCONNECT command
* [protocolMqttClientSetBroker](#protocolmqttclientsetbroker) - Set the agent's MQTT TCP connection target broker
* [protocolMqttClientSetCleansession](#protocolmqttclientsetcleansession) - Set the agent's MQTT session
* [protocolMqttClientSetClientid](#protocolmqttclientsetclientid) - Set the agent's MQTT client ID
* [protocolMqttClientSetKeepalive](#protocolmqttclientsetkeepalive) - Set the agent's MQTT TCP keepalive
* [protocolMqttClientSetOnDisconnect](#protocolmqttclientsetondisconnect) - Set the agent's MQTT disconnection action
* [protocolMqttClientSetPassword](#protocolmqttclientsetpassword) - Set the agent's MQTT client password
* [protocolMqttClientSetPort](#protocolmqttclientsetport) - Set the agent's MQTT TCP connection target port
* [protocolMqttClientSetUsername](#protocolmqttclientsetusername) - Set the agent's MQTT client username
* [protocolMqttClientSetWillmsg](#protocolmqttclientsetwillmsg) - Set the agent's MQTT client's will
* [protocolMqttClientSetWillqos](#protocolmqttclientsetwillqos) - Set the agent's MQTT will message's QOS field
* [protocolMqttClientSetWillretain](#protocolmqttclientsetwillretain) - Set the agent's MQTT retained will
* [protocolMqttClientSetWilltopic](#protocolmqttclientsetwilltopic) - Set the agent's MQTT client will's topic
* [protocolMqttClientSubscribeCard](#protocolmqttclientsubscribecard) - Show the agent's current subscriptions' cardinality
* [protocolMqttClientSubscribeGet](#protocolmqttclientsubscribeget) - Show the agent's subscription attributes
* [protocolMqttClientSubscribeSet](#protocolmqttclientsubscribeset) - Set the agent's subscribe attributes
* [protocolMqttClientUnsubscribe](#protocolmqttclientunsubscribe) - Stops receiving messages from a subcription of the agent
* [protocolMqttGetArgs](#protocolmqttgetargs) - Show the agent's MQTT argument structure
* [protocolMqttGetConfig](#protocolmqttgetconfig) - Show the agent's MQTT configuration
* [protocolMqttGetStatistics](#protocolmqttgetstatistics) - Show the agent's MQTT statistics
* [protocolMqttGetStatsHdr](#protocolmqttgetstatshdr) - Show the MQTT statistics headers
* [protocolMqttGetTrace](#protocolmqttgettrace) - Show the agent's MQTT traffic tracing
* [protocolMqttSetConfig](#protocolmqttsetconfig) - Set the agent's MQTT configuration
* [protocolMqttSetTrace](#protocolmqttsettrace) - Set the agent's MQTT traffic tracing

## protocolMqttClientGetProtstate

0 - stopped, 2 - disconnected, 3 - connecting, 4 - connected, 5 - waiting for CONNACK, 6 - waiting for SUBACK, 7 - CONNACK received, in steady state

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientGetProtstateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientGetProtstateRequest();
    $request->agentNum = 896039;

    $response = $sdk->mqtt->protocolMqttClientGetProtstate($request);

    if ($response->protocolMqttClientGetProtstate200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttClientGetState

0 means stopped, 1 means running

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientGetStateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientGetStateRequest();
    $request->agentNum = 572252;

    $response = $sdk->mqtt->protocolMqttClientGetState($request);

    if ($response->protocolMqttClientGetState200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttClientMessageCard

0 or more

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientMessageCardRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientMessageCardRequest();
    $request->agentNum = 638921;

    $response = $sdk->mqtt->protocolMqttClientMessageCard($request);

    if ($response->protocolMqttClientMessageCard200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttClientMessageGet

Attribute can be topic, interval, count, sent , pre, post, properties(list of PUBLISH properties), properties.i (i-th PUBLISH property), properties.PROP-NAME (PUBLISH property with name PROP-NAME)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientMessageGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientMessageGetRequest();
    $request->agentNum = 223081;
    $request->attr = 'debitis';
    $request->msgNum = 952749;

    $response = $sdk->mqtt->protocolMqttClientMessageGet($request);

    if ($response->protocolMqttClientMessageGet200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttClientMessageSet

Attribute can not be sent or properties . Use set/{msgNum}/count/{value} together with get/{msgNum}/count to throttle the outgoing MQTT message to the broker.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientMessageSetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientMessageSetRequest();
    $request->agentNum = 680056;
    $request->attr = 'in';
    $request->msgNum = 449198;
    $request->value = 'illum';

    $response = $sdk->mqtt->protocolMqttClientMessageSet($request);

    if ($response->protocolMqttClientMessageSet200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttClientResubscribe

Restarts a subscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientResubscribeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientResubscribeRequest();
    $request->agentNum = 978571;
    $request->subNum = 699479;

    $response = $sdk->mqtt->protocolMqttClientResubscribe($request);

    if ($response->protocolMqttClientResubscribe200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttClientRuntimeAbort

Abort a connection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientRuntimeAbortRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientRuntimeAbortRequest();
    $request->agentNum = 116202;

    $response = $sdk->mqtt->protocolMqttClientRuntimeAbort($request);

    if ($response->protocolMqttClientRuntimeAbort200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttClientRuntimeConnect

Start a connection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientRuntimeConnectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientRuntimeConnectRequest();
    $request->agentNum = 297437;

    $response = $sdk->mqtt->protocolMqttClientRuntimeConnect($request);

    if ($response->protocolMqttClientRuntimeConnect200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttClientRuntimeDisconnect

Graceful disconnect

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientRuntimeDisconnectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientRuntimeDisconnectRequest();
    $request->agentNum = 767024;

    $response = $sdk->mqtt->protocolMqttClientRuntimeDisconnect($request);

    if ($response->protocolMqttClientRuntimeDisconnect200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttClientSetBroker

Broker IP address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientSetBrokerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientSetBrokerRequest();
    $request->agentNum = 813798;
    $request->brokerAddr = 'ea';

    $response = $sdk->mqtt->protocolMqttClientSetBroker($request);

    if ($response->protocolMqttClientSetBroker200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttClientSetCleansession

1 for clean session , 0 not

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientSetCleansessionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientSetCleansessionRequest();
    $request->agentNum = 396506;
    $request->cleanOrNot = 675439;

    $response = $sdk->mqtt->protocolMqttClientSetCleansession($request);

    if ($response->protocolMqttClientSetCleansession200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttClientSetClientid

MQTT client ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientSetClientidRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientSetClientidRequest();
    $request->agentNum = 881104;
    $request->clientID = 'non';

    $response = $sdk->mqtt->protocolMqttClientSetClientid($request);

    if ($response->protocolMqttClientSetClientid200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttClientSetKeepalive

Keep alive the TCP connection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientSetKeepaliveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientSetKeepaliveRequest();
    $request->agentNum = 581273;
    $request->aliveTime = 313218;

    $response = $sdk->mqtt->protocolMqttClientSetKeepalive($request);

    if ($response->protocolMqttClientSetKeepalive200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttClientSetOnDisconnect

Action to take when MQTT session is disconnected

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientSetOnDisconnectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientSetOnDisconnectRequest();
    $request->action = 'accusamus';
    $request->agentNum = 965417;

    $response = $sdk->mqtt->protocolMqttClientSetOnDisconnect($request);

    if ($response->protocolMqttClientSetOnDisconnect200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttClientSetPassword

Client password

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientSetPasswordRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientSetPasswordRequest();
    $request->agentNum = 692532;
    $request->password = 'provident';

    $response = $sdk->mqtt->protocolMqttClientSetPassword($request);

    if ($response->protocolMqttClientSetPassword200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttClientSetPort

target TCP port

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientSetPortRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientSetPortRequest();
    $request->agentNum = 725255;
    $request->port = 'id';

    $response = $sdk->mqtt->protocolMqttClientSetPort($request);

    if ($response->protocolMqttClientSetPort200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttClientSetUsername

Client username

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientSetUsernameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientSetUsernameRequest();
    $request->agentNum = 501324;
    $request->username = 'Kacie64';

    $response = $sdk->mqtt->protocolMqttClientSetUsername($request);

    if ($response->protocolMqttClientSetUsername200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttClientSetWillmsg

Will message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientSetWillmsgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientSetWillmsgRequest();
    $request->agentNum = 394869;
    $request->msg = 'vel';

    $response = $sdk->mqtt->protocolMqttClientSetWillmsg($request);

    if ($response->protocolMqttClientSetWillmsg200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttClientSetWillqos

QOS field

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientSetWillqosRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientSetWillqosRequest();
    $request->agentNum = 618809;
    $request->qos = 'omnis';

    $response = $sdk->mqtt->protocolMqttClientSetWillqos($request);

    if ($response->protocolMqttClientSetWillqos200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttClientSetWillretain

Retaining will

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientSetWillretainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientSetWillretainRequest();
    $request->agentNum = 474867;
    $request->retain = 'perferendis';

    $response = $sdk->mqtt->protocolMqttClientSetWillretain($request);

    if ($response->protocolMqttClientSetWillretain200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttClientSetWilltopic

Will topic for the will message

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientSetWilltopicRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientSetWilltopicRequest();
    $request->agentNum = 470132;
    $request->topic = 'magnam';

    $response = $sdk->mqtt->protocolMqttClientSetWilltopic($request);

    if ($response->protocolMqttClientSetWilltopic200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttClientSubscribeCard

0 or more

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientSubscribeCardRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientSubscribeCardRequest();
    $request->agentNum = 716075;

    $response = $sdk->mqtt->protocolMqttClientSubscribeCard($request);

    if ($response->protocolMqttClientSubscribeCard200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttClientSubscribeGet

Attribute can be topic, properties(list of SUBSCRIBE properties), properties.i (i-th SUBSCRIBE property), properties.PROP-NAME (SUBSCRIBE property with name PROP-NAME)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientSubscribeGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientSubscribeGetRequest();
    $request->agentNum = 660174;
    $request->attr = 'labore';
    $request->subNum = 290077;

    $response = $sdk->mqtt->protocolMqttClientSubscribeGet($request);

    if ($response->protocolMqttClientSubscribeGet200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttClientSubscribeSet

Attribute can not be properties .

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientSubscribeSetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientSubscribeSetRequest();
    $request->agentNum = 383462;
    $request->attr = 'natus';
    $request->subNum = 749170;
    $request->value = 'eum';

    $response = $sdk->mqtt->protocolMqttClientSubscribeSet($request);

    if ($response->protocolMqttClientSubscribeSet200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttClientUnsubscribe

Stops a subscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttClientUnsubscribeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttClientUnsubscribeRequest();
    $request->agentNum = 878453;
    $request->subNum = 135474;

    $response = $sdk->mqtt->protocolMqttClientUnsubscribe($request);

    if ($response->protocolMqttClientUnsubscribe200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttGetArgs

Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttGetArgsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttGetArgsRequest();
    $request->agentNum = 102863;

    $response = $sdk->mqtt->protocolMqttGetArgs($request);

    if ($response->protocolMqttGetArgs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttGetConfig

Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttGetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttGetConfigRequest();
    $request->agentNum = 298282;

    $response = $sdk->mqtt->protocolMqttGetConfig($request);

    if ($response->configMQTT !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttGetStatistics

Statistics of fields indicated in the headers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttGetStatisticsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttGetStatisticsRequest();
    $request->agentNum = 92373;

    $response = $sdk->mqtt->protocolMqttGetStatistics($request);

    if ($response->protocolMqttGetStatistics200ApplicationJSONInt32Integers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttGetStatsHdr

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
    $response = $sdk->mqtt->protocolMqttGetStatsHdr();

    if ($response->protocolMqttGetStatsHdr200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttGetTrace

Trace 1 means enabled, 0 means not

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttGetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttGetTraceRequest();
    $request->agentNum = 569965;

    $response = $sdk->mqtt->protocolMqttGetTrace($request);

    if ($response->configMQTT !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttSetConfig

Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttSetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttSetConfigRequest();
    $request->agentNum = 354047;
    $request->argument = 'provident';
    $request->value = 'quos';

    $response = $sdk->mqtt->protocolMqttSetConfig($request);

    if ($response->protocolMqttSetConfig200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## protocolMqttSetTrace

1 to enable, 0 to disable

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProtocolMqttSetTraceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProtocolMqttSetTraceRequest();
    $request->agentNum = 574325;
    $request->enableOrNot = 'accusantium';

    $response = $sdk->mqtt->protocolMqttSetTrace($request);

    if ($response->protocolMqttSetTrace200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
