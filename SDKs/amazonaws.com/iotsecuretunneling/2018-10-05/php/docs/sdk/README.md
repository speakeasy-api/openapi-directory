# SDK

## Overview

<fullname>IoT Secure Tunneling</fullname> <p>IoT Secure Tunneling creates remote connections to devices deployed in the field.</p> <p>For more information about how IoT Secure Tunneling works, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/secure-tunneling.html">IoT Secure Tunneling</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/iot/>
### Available Operations

* [closeTunnel](#closetunnel) - <p>Closes a tunnel identified by the unique tunnel id. When a <code>CloseTunnel</code> request is received, we close the WebSocket connections between the client and proxy server so no data can be transmitted.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CloseTunnel</a> action.</p>
* [describeTunnel](#describetunnel) - <p>Gets information about a tunnel identified by the unique tunnel id.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeTunnel</a> action.</p>
* [listTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [listTunnels](#listtunnels) - <p>List all tunnels for an Amazon Web Services account. Tunnels are listed by creation time in descending order, newer tunnels will be listed before older tunnels.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTunnels</a> action.</p>
* [openTunnel](#opentunnel) - <p>Creates a new tunnel, and returns two client access tokens for clients to use to connect to the IoT Secure Tunneling proxy server.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">OpenTunnel</a> action.</p>
* [rotateTunnelAccessToken](#rotatetunnelaccesstoken) - <p>Revokes the current client access token (CAT) and returns new CAT for clients to use when reconnecting to secure tunneling to access the same tunnel.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RotateTunnelAccessToken</a> action.</p> <note> <p>Rotating the CAT doesn't extend the tunnel duration. For example, say the tunnel duration is 12 hours and the tunnel has already been open for 4 hours. When you rotate the access tokens, the new tokens that are generated can only be used for the remaining 8 hours.</p> </note>
* [tagResource](#tagresource) - A resource tag.
* [untagResource](#untagresource) - Removes a tag from a resource.

## closeTunnel

<p>Closes a tunnel identified by the unique tunnel id. When a <code>CloseTunnel</code> request is received, we close the WebSocket connections between the client and proxy server so no data can be transmitted.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CloseTunnel</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CloseTunnelRequest;
use \OpenAPI\OpenAPI\Models\Shared\CloseTunnelRequest;
use \OpenAPI\OpenAPI\Models\Operations\CloseTunnelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloseTunnelRequest();
    $request->closeTunnelRequest = new CloseTunnelRequest();
    $request->closeTunnelRequest->delete = false;
    $request->closeTunnelRequest->tunnelId = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = CloseTunnelXAmzTargetEnum::IO_T_SECURED_TUNNELING_CLOSE_TUNNEL;

    $response = $sdk->sdk->closeTunnel($request);

    if ($response->closeTunnelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTunnel

<p>Gets information about a tunnel identified by the unique tunnel id.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeTunnel</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTunnelRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTunnelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTunnelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTunnelRequest();
    $request->describeTunnelRequest = new DescribeTunnelRequest();
    $request->describeTunnelRequest->tunnelId = 'delectus';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'iusto';
    $request->xAmzTarget = DescribeTunnelXAmzTargetEnum::IO_T_SECURED_TUNNELING_DESCRIBE_TUNNEL;

    $response = $sdk->sdk->describeTunnel($request);

    if ($response->describeTunnelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags for the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceArn = 'excepturi';
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::IO_T_SECURED_TUNNELING_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTunnels

<p>List all tunnels for an Amazon Web Services account. Tunnels are listed by creation time in descending order, newer tunnels will be listed before older tunnels.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTunnels</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTunnelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTunnelsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTunnelsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTunnelsRequest();
    $request->listTunnelsRequest = new ListTunnelsRequest();
    $request->listTunnelsRequest->maxResults = 20218;
    $request->listTunnelsRequest->nextToken = 'ipsam';
    $request->listTunnelsRequest->thingName = 'repellendus';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = ListTunnelsXAmzTargetEnum::IO_T_SECURED_TUNNELING_LIST_TUNNELS;
    $request->maxResults = 'quod';
    $request->nextToken = 'quod';

    $response = $sdk->sdk->listTunnels($request);

    if ($response->listTunnelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## openTunnel

<p>Creates a new tunnel, and returns two client access tokens for clients to use to connect to the IoT Secure Tunneling proxy server.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">OpenTunnel</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OpenTunnelRequest;
use \OpenAPI\OpenAPI\Models\Shared\OpenTunnelRequest;
use \OpenAPI\OpenAPI\Models\Shared\DestinationConfig;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TimeoutConfig;
use \OpenAPI\OpenAPI\Models\Operations\OpenTunnelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OpenTunnelRequest();
    $request->openTunnelRequest = new OpenTunnelRequest();
    $request->openTunnelRequest->description = 'esse';
    $request->openTunnelRequest->destinationConfig = new DestinationConfig();
    $request->openTunnelRequest->destinationConfig->services = [
        'porro',
        'dolorum',
        'dicta',
    ];
    $request->openTunnelRequest->destinationConfig->thingName = 'nam';
    $request->openTunnelRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->openTunnelRequest->timeoutConfig = new TimeoutConfig();
    $request->openTunnelRequest->timeoutConfig->maxLifetimeTimeoutMinutes = 582020;
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = OpenTunnelXAmzTargetEnum::IO_T_SECURED_TUNNELING_OPEN_TUNNEL;

    $response = $sdk->sdk->openTunnel($request);

    if ($response->openTunnelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rotateTunnelAccessToken

<p>Revokes the current client access token (CAT) and returns new CAT for clients to use when reconnecting to secure tunneling to access the same tunnel.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RotateTunnelAccessToken</a> action.</p> <note> <p>Rotating the CAT doesn't extend the tunnel duration. For example, say the tunnel duration is 12 hours and the tunnel has already been open for 4 hours. When you rotate the access tokens, the new tokens that are generated can only be used for the remaining 8 hours.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RotateTunnelAccessTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\RotateTunnelAccessTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClientModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DestinationConfig;
use \OpenAPI\OpenAPI\Models\Operations\RotateTunnelAccessTokenXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RotateTunnelAccessTokenRequest();
    $request->rotateTunnelAccessTokenRequest = new RotateTunnelAccessTokenRequest();
    $request->rotateTunnelAccessTokenRequest->clientMode = ClientModeEnum::DESTINATION;
    $request->rotateTunnelAccessTokenRequest->destinationConfig = new DestinationConfig();
    $request->rotateTunnelAccessTokenRequest->destinationConfig->services = [
        'qui',
        'impedit',
    ];
    $request->rotateTunnelAccessTokenRequest->destinationConfig->thingName = 'cum';
    $request->rotateTunnelAccessTokenRequest->tunnelId = 'esse';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = RotateTunnelAccessTokenXAmzTargetEnum::IO_T_SECURED_TUNNELING_ROTATE_TUNNEL_ACCESS_TOKEN;

    $response = $sdk->sdk->rotateTunnelAccessToken($request);

    if ($response->rotateTunnelAccessTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

A resource tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceArn = 'iste';
    $request->tagResourceRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::IO_T_SECURED_TUNNELING_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes a tag from a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceArn = 'iste';
    $request->untagResourceRequest->tagKeys = [
        'saepe',
        'quidem',
    ];
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::IO_T_SECURED_TUNNELING_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
