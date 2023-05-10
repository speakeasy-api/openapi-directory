# SDK

## Overview

Kinesis Video Streams Signaling Service is a intermediate service that establishes a communication channel for discovering peers, transmitting offers and answers in order to establish peer-to-peer connection in webRTC technology.

Amazon Web Services documentation
<https://docs.aws.amazon.com/kinesisvideo/>
### Available Operations

* [getIceServerConfig](#geticeserverconfig) - <p>Gets the Interactive Connectivity Establishment (ICE) server configuration information, including URIs, username, and password which can be used to configure the WebRTC connection. The ICE component uses this configuration information to setup the WebRTC connection, including authenticating with the Traversal Using Relays around NAT (TURN) relay server. </p> <p>TURN is a protocol that is used to improve the connectivity of peer-to-peer applications. By providing a cloud-based relay service, TURN ensures that a connection can be established even when one or more peers are incapable of a direct peer-to-peer connection. For more information, see <a href="https://tools.ietf.org/html/draft-uberti-rtcweb-turn-rest-00">A REST API For Access To TURN Services</a>.</p> <p> You can invoke this API to establish a fallback mechanism in case either of the peers is unable to establish a direct peer-to-peer connection over a signaling channel. You must specify either a signaling channel ARN or the client ID in order to invoke this API.</p>
* [sendAlexaOfferToMaster](#sendalexaoffertomaster) - This API allows you to connect WebRTC-enabled devices with Alexa display devices. When invoked, it sends the Alexa Session Description Protocol (SDP) offer to the master peer. The offer is delivered as soon as the master is connected to the specified signaling channel. This API returns the SDP answer from the connected master. If the master is not connected to the signaling channel, redelivery requests are made until the message expires.

## getIceServerConfig

<p>Gets the Interactive Connectivity Establishment (ICE) server configuration information, including URIs, username, and password which can be used to configure the WebRTC connection. The ICE component uses this configuration information to setup the WebRTC connection, including authenticating with the Traversal Using Relays around NAT (TURN) relay server. </p> <p>TURN is a protocol that is used to improve the connectivity of peer-to-peer applications. By providing a cloud-based relay service, TURN ensures that a connection can be established even when one or more peers are incapable of a direct peer-to-peer connection. For more information, see <a href="https://tools.ietf.org/html/draft-uberti-rtcweb-turn-rest-00">A REST API For Access To TURN Services</a>.</p> <p> You can invoke this API to establish a fallback mechanism in case either of the peers is unable to establish a direct peer-to-peer connection over a signaling channel. You must specify either a signaling channel ARN or the client ID in order to invoke this API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIceServerConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetIceServerConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetIceServerConfigRequestBodyServiceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIceServerConfigRequest();
    $request->requestBody = new GetIceServerConfigRequestBody();
    $request->requestBody->channelARN = 'magnam';
    $request->requestBody->clientId = 'debitis';
    $request->requestBody->service = GetIceServerConfigRequestBodyServiceEnum::TURN;
    $request->requestBody->username = 'Anahi38';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'nisi';

    $response = $sdk->sdk->getIceServerConfig($request);

    if ($response->getIceServerConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendAlexaOfferToMaster

This API allows you to connect WebRTC-enabled devices with Alexa display devices. When invoked, it sends the Alexa Session Description Protocol (SDP) offer to the master peer. The offer is delivered as soon as the master is connected to the specified signaling channel. This API returns the SDP answer from the connected master. If the master is not connected to the signaling channel, redelivery requests are made until the message expires.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendAlexaOfferToMasterRequest;
use \OpenAPI\OpenAPI\Models\Operations\SendAlexaOfferToMasterRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendAlexaOfferToMasterRequest();
    $request->requestBody = new SendAlexaOfferToMasterRequestBody();
    $request->requestBody->channelARN = 'recusandae';
    $request->requestBody->messagePayload = 'temporibus';
    $request->requestBody->senderClientId = 'ab';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->sendAlexaOfferToMaster($request);

    if ($response->sendAlexaOfferToMasterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
