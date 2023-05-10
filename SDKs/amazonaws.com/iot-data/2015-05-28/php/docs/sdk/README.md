# SDK

## Overview

<fullname>IoT data</fullname> <p>IoT data enables secure, bi-directional communication between Internet-connected things (such as sensors, actuators, embedded devices, or smart appliances) and the Amazon Web Services cloud. It implements a broker for applications and things to publish messages over HTTP (Publish) and retrieve, update, and delete shadows. A shadow is a persistent representation of your things and their state in the Amazon Web Services cloud.</p> <p>Find the endpoint address for actions in IoT data by running this CLI command:</p> <p> <code>aws iot describe-endpoint --endpoint-type iot:Data-ATS</code> </p> <p>The service name used by <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Amazon Web ServicesSignature Version 4</a> to sign requests is: <i>iotdevicegateway</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/iot/>
### Available Operations

* [deleteThingShadow](#deletethingshadow) - <p>Deletes the shadow for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThingShadow</a> action.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_DeleteThingShadow.html">DeleteThingShadow</a> in the IoT Developer Guide.</p>
* [getRetainedMessage](#getretainedmessage) - <p>Gets the details of a single retained message for the specified topic.</p> <p>This action returns the message payload of the retained message, which can incur messaging costs. To list only the topic names of the retained messages, call <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_iotdata_ListRetainedMessages.html">ListRetainedMessages</a>.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleethubfordevicemanagement.html#awsiotfleethubfordevicemanagement-actions-as-permissions">GetRetainedMessage</a> action.</p> <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">Amazon Web Services IoT Core pricing - Messaging</a>.</p>
* [getThingShadow](#getthingshadow) - <p>Gets the shadow for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetThingShadow</a> action.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_GetThingShadow.html">GetThingShadow</a> in the IoT Developer Guide.</p>
* [listNamedShadowsForThing](#listnamedshadowsforthing) - <p>Lists the shadows for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListNamedShadowsForThing</a> action.</p>
* [listRetainedMessages](#listretainedmessages) - <p>Lists summary information about the retained messages stored for the account.</p> <p>This action returns only the topic names of the retained messages. It doesn't return any message payloads. Although this action doesn't return a message payload, it can still incur messaging costs.</p> <p>To get the message payload of a retained message, call <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_iotdata_GetRetainedMessage.html">GetRetainedMessage</a> with the topic name of the retained message.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleethubfordevicemanagement.html#awsiotfleethubfordevicemanagement-actions-as-permissions">ListRetainedMessages</a> action.</p> <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">Amazon Web Services IoT Core pricing - Messaging</a>.</p>
* [publish](#publish) - <p>Publishes an MQTT message.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">Publish</a> action.</p> <p>For more information about MQTT messages, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html">MQTT Protocol</a> in the IoT Developer Guide.</p> <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">Amazon Web Services IoT Core pricing - Messaging</a>.</p>
* [updateThingShadow](#updatethingshadow) - <p>Updates the shadow for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThingShadow</a> action.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_UpdateThingShadow.html">UpdateThingShadow</a> in the IoT Developer Guide.</p>

## deleteThingShadow

<p>Deletes the shadow for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThingShadow</a> action.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_DeleteThingShadow.html">DeleteThingShadow</a> in the IoT Developer Guide.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteThingShadowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteThingShadowRequest();
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->name = 'Irving Lehner';
    $request->thingName = 'nisi';

    $response = $sdk->sdk->deleteThingShadow($request);

    if ($response->deleteThingShadowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRetainedMessage

<p>Gets the details of a single retained message for the specified topic.</p> <p>This action returns the message payload of the retained message, which can incur messaging costs. To list only the topic names of the retained messages, call <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_iotdata_ListRetainedMessages.html">ListRetainedMessages</a>.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleethubfordevicemanagement.html#awsiotfleethubfordevicemanagement-actions-as-permissions">GetRetainedMessage</a> action.</p> <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">Amazon Web Services IoT Core pricing - Messaging</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRetainedMessageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRetainedMessageRequest();
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->topic = 'ipsam';

    $response = $sdk->sdk->getRetainedMessage($request);

    if ($response->getRetainedMessageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getThingShadow

<p>Gets the shadow for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetThingShadow</a> action.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_GetThingShadow.html">GetThingShadow</a> in the IoT Developer Guide.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetThingShadowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetThingShadowRequest();
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'maiores';
    $request->name = 'Bernadette Schmidt';
    $request->thingName = 'porro';

    $response = $sdk->sdk->getThingShadow($request);

    if ($response->getThingShadowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNamedShadowsForThing

<p>Lists the shadows for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListNamedShadowsForThing</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListNamedShadowsForThingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListNamedShadowsForThingRequest();
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->nextToken = 'hic';
    $request->pageSize = 758616;
    $request->thingName = 'totam';

    $response = $sdk->sdk->listNamedShadowsForThing($request);

    if ($response->listNamedShadowsForThingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRetainedMessages

<p>Lists summary information about the retained messages stored for the account.</p> <p>This action returns only the topic names of the retained messages. It doesn't return any message payloads. Although this action doesn't return a message payload, it can still incur messaging costs.</p> <p>To get the message payload of a retained message, call <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_iotdata_GetRetainedMessage.html">GetRetainedMessage</a> with the topic name of the retained message.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleethubfordevicemanagement.html#awsiotfleethubfordevicemanagement-actions-as-permissions">ListRetainedMessages</a> action.</p> <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">Amazon Web Services IoT Core pricing - Messaging</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRetainedMessagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRetainedMessagesRequest();
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'cum';
    $request->maxResults = 456150;
    $request->nextToken = 'ipsum';

    $response = $sdk->sdk->listRetainedMessages($request);

    if ($response->listRetainedMessagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publish

<p>Publishes an MQTT message.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">Publish</a> action.</p> <p>For more information about MQTT messages, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html">MQTT Protocol</a> in the IoT Developer Guide.</p> <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">Amazon Web Services IoT Core pricing - Messaging</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PublishRequest;
use \OpenAPI\OpenAPI\Models\Operations\PublishRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PublishXAmzMqtt5PayloadFormatIndicatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishRequest();
    $request->requestBody = new PublishRequestBody();
    $request->requestBody->payload = 'excepturi';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolor';
    $request->contentType = 'natus';
    $request->messageExpiry = 386489;
    $request->qos = 943749;
    $request->responseTopic = 'saepe';
    $request->retain = false;
    $request->topic = 'fuga';
    $request->xAmzMqtt5CorrelationData = 'in';
    $request->xAmzMqtt5PayloadFormatIndicator = PublishXAmzMqtt5PayloadFormatIndicatorEnum::UNSPECIFIED_BYTES;
    $request->xAmzMqtt5UserProperties = 'iste';

    $response = $sdk->sdk->publish($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateThingShadow

<p>Updates the shadow for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThingShadow</a> action.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_UpdateThingShadow.html">UpdateThingShadow</a> in the IoT Developer Guide.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateThingShadowRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateThingShadowRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateThingShadowRequest();
    $request->requestBody = new UpdateThingShadowRequestBody();
    $request->requestBody->payload = 'iure';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->name = 'Ernest Ebert';
    $request->thingName = 'nobis';

    $response = $sdk->sdk->updateThingShadow($request);

    if ($response->updateThingShadowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
