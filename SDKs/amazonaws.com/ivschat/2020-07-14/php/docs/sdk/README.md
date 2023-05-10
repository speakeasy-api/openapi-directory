# SDK

## Overview

<p> <b>Introduction</b> </p> <p>The Amazon IVS Chat control-plane API enables you to create and manage Amazon IVS Chat resources. You also need to integrate with the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/chat-messaging-api.html"> Amazon IVS Chat Messaging API</a>, to enable users to interact with chat rooms in real time.</p> <p>The API is an AWS regional service. For a list of supported regions and Amazon IVS Chat HTTPS service endpoints, see the Amazon IVS Chat information on the <a href="https://docs.aws.amazon.com/general/latest/gr/ivs.html">Amazon IVS page</a> in the <i>AWS General Reference</i>. </p> <p> <b>Notes on terminology:</b> </p> <ul> <li> <p>You create service applications using the Amazon IVS Chat API. We refer to these as <i>applications</i>.</p> </li> <li> <p>You create front-end client applications (browser and Android/iOS apps) using the Amazon IVS Chat Messaging API. We refer to these as <i>clients</i>. </p> </li> </ul> <p> <b>Resources</b> </p> <p>The following resources are part of Amazon IVS Chat:</p> <ul> <li> <p> <b>LoggingConfiguration</b> — A configuration that allows customers to store and record sent messages in a chat room. See the Logging Configuration endpoints for more information.</p> </li> <li> <p> <b>Room</b> — The central Amazon IVS Chat resource through which clients connect to and exchange chat messages. See the Room endpoints for more information.</p> </li> </ul> <p> <b>Tagging</b> </p> <p>A <i>tag</i> is a metadata label that you assign to an AWS resource. A tag comprises a <i>key</i> and a <i>value</i>, both set by you. For example, you might set a tag as <code>topic:nature</code> to label a particular video category. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no service-specific constraints beyond what is documented there.</p> <p>Tags can help you identify and organize your AWS resources. For example, you can use the same tag for different resources to indicate that they are related. You can also use tags to manage access (see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Access Tags</a>).</p> <p>The Amazon IVS Chat API has these tag-related endpoints: <a>TagResource</a>, <a>UntagResource</a>, and <a>ListTagsForResource</a>. The following resource supports tagging: Room.</p> <p>At most 50 tags can be applied to a resource.</p> <p> <b>API Access Security</b> </p> <p>Your Amazon IVS Chat applications (service applications and clients) must be authenticated and authorized to access Amazon IVS Chat resources. Note the differences between these concepts:</p> <ul> <li> <p> <i>Authentication</i> is about verifying identity. Requests to the Amazon IVS Chat API must be signed to verify your identity.</p> </li> <li> <p> <i>Authorization</i> is about granting permissions. Your IAM roles need to have permissions for Amazon IVS Chat API requests.</p> </li> </ul> <p>Users (viewers) connect to a room using secure access tokens that you create using the <a>CreateChatToken</a> endpoint through the AWS SDK. You call CreateChatToken for every user’s chat session, passing identity and authorization information about the user.</p> <p> <b>Signing API Requests</b> </p> <p>HTTP API requests must be signed with an AWS SigV4 signature using your AWS security credentials. The AWS Command Line Interface (CLI) and the AWS SDKs take care of signing the underlying API calls for you. However, if your application calls the Amazon IVS Chat HTTP API directly, it’s your responsibility to sign the requests.</p> <p>You generate a signature using valid AWS credentials for an IAM role that has permission to perform the requested action. For example, DeleteMessage requests must be made using an IAM role that has the <code>ivschat:DeleteMessage</code> permission.</p> <p>For more information:</p> <ul> <li> <p>Authentication and generating signatures — See <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating Requests (Amazon Web Services Signature Version 4)</a> in the <i>Amazon Web Services General Reference</i>.</p> </li> <li> <p>Managing Amazon IVS permissions — See <a href="https://docs.aws.amazon.com/ivs/latest/userguide/security-iam.html">Identity and Access Management</a> on the Security page of the <i>Amazon IVS User Guide</i>.</p> </li> </ul> <p> <b>Amazon Resource Names (ARNs)</b> </p> <p>ARNs uniquely identify AWS resources. An ARN is required when you need to specify a resource unambiguously across all of AWS, such as in IAM policies and API calls. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names</a> in the <i>AWS General Reference</i>.</p> <p> <b>Messaging Endpoints</b> </p> <ul> <li> <p> <a>DeleteMessage</a> — Sends an event to a specific room which directs clients to delete a specific message; that is, unrender it from view and delete it from the client’s chat history. This event’s <code>EventName</code> is <code>aws:DELETE_MESSAGE</code>. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-deletemessage-publish.html"> DeleteMessage</a> WebSocket operation in the Amazon IVS Chat Messaging API.</p> </li> <li> <p> <a>DisconnectUser</a> — Disconnects all connections using a specified user ID from a room. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-disconnectuser-publish.html"> DisconnectUser</a> WebSocket operation in the Amazon IVS Chat Messaging API.</p> </li> <li> <p> <a>SendEvent</a> — Sends an event to a room. Use this within your application’s business logic to send events to clients of a room; e.g., to notify clients to change the way the chat UI is rendered.</p> </li> </ul> <p> <b>Chat Token Endpoint</b> </p> <ul> <li> <p> <a>CreateChatToken</a> — Creates an encrypted token that is used by a chat participant to establish an individual WebSocket chat connection to a room. When the token is used to connect to chat, the connection is valid for the session duration specified in the request. The token becomes invalid at the token-expiration timestamp included in the response.</p> </li> </ul> <p> <b>Room Endpoints</b> </p> <ul> <li> <p> <a>CreateRoom</a> — Creates a room that allows clients to connect and pass messages.</p> </li> <li> <p> <a>DeleteRoom</a> — Deletes the specified room.</p> </li> <li> <p> <a>GetRoom</a> — Gets the specified room.</p> </li> <li> <p> <a>ListRooms</a> — Gets summary information about all your rooms in the AWS region where the API request is processed. </p> </li> <li> <p> <a>UpdateRoom</a> — Updates a room’s configuration.</p> </li> </ul> <p> <b>Logging Configuration Endpoints</b> </p> <ul> <li> <p> <a>CreateLoggingConfiguration</a> — Creates a logging configuration that allows clients to store and record sent messages.</p> </li> <li> <p> <a>DeleteLoggingConfiguration</a> — Deletes the specified logging configuration.</p> </li> <li> <p> <a>GetLoggingConfiguration</a> — Gets the specified logging configuration.</p> </li> <li> <p> <a>ListLoggingConfigurations</a> — Gets summary information about all your logging configurations in the AWS region where the API request is processed.</p> </li> <li> <p> <a>UpdateLoggingConfiguration</a> — Updates a specified logging configuration.</p> </li> </ul> <p> <b>Tags Endpoints</b> </p> <ul> <li> <p> <a>ListTagsForResource</a> — Gets information about AWS tags for the specified ARN.</p> </li> <li> <p> <a>TagResource</a> — Adds or updates tags for the AWS resource with the specified ARN.</p> </li> <li> <p> <a>UntagResource</a> — Removes tags from the resource with the specified ARN.</p> </li> </ul> <p>All the above are HTTP operations. There is a separate <i>messaging</i> API for managing Chat resources; see the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/chat-messaging-api.html"> Amazon IVS Chat Messaging API Reference</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ivschat/>
### Available Operations

* [createChatToken](#createchattoken) - <p>Creates an encrypted token that is used by a chat participant to establish an individual WebSocket chat connection to a room. When the token is used to connect to chat, the connection is valid for the session duration specified in the request. The token becomes invalid at the token-expiration timestamp included in the response.</p> <p>Use the <code>capabilities</code> field to permit an end user to send messages or moderate a room.</p> <p>The <code>attributes</code> field securely attaches structured data to the chat session; the data is included within each message sent by the end user and received by other participants in the room. Common use cases for attributes include passing end-user profile data like an icon, display name, colors, badges, and other display features.</p> <p>Encryption keys are owned by Amazon IVS Chat and never used directly by your application.</p>
* [createLoggingConfiguration](#createloggingconfiguration) - Creates a logging configuration that allows clients to store and record sent messages.
* [createRoom](#createroom) - Creates a room that allows clients to connect and pass messages.
* [deleteLoggingConfiguration](#deleteloggingconfiguration) - Deletes the specified logging configuration.
* [deleteMessage](#deletemessage) - Sends an event to a specific room which directs clients to delete a specific message; that is, unrender it from view and delete it from the client’s chat history. This event’s <code>EventName</code> is <code>aws:DELETE_MESSAGE</code>. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-deletemessage-publish.html"> DeleteMessage</a> WebSocket operation in the Amazon IVS Chat Messaging API.
* [deleteRoom](#deleteroom) - Deletes the specified room.
* [disconnectUser](#disconnectuser) - Disconnects all connections using a specified user ID from a room. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-disconnectuser-publish.html"> DisconnectUser</a> WebSocket operation in the Amazon IVS Chat Messaging API.
* [getLoggingConfiguration](#getloggingconfiguration) - Gets the specified logging configuration.
* [getRoom](#getroom) - Gets the specified room.
* [listLoggingConfigurations](#listloggingconfigurations) - Gets summary information about all your logging configurations in the AWS region where the API request is processed.
* [listRooms](#listrooms) - Gets summary information about all your rooms in the AWS region where the API request is processed. Results are sorted in descending order of <code>updateTime</code>.
* [listTagsForResource](#listtagsforresource) - Gets information about AWS tags for the specified ARN.
* [sendEvent](#sendevent) - Sends an event to a room. Use this within your application’s business logic to send events to clients of a room; e.g., to notify clients to change the way the chat UI is rendered.
* [tagResource](#tagresource) - Adds or updates tags for the AWS resource with the specified ARN.
* [untagResource](#untagresource) - Removes tags from the resource with the specified ARN.
* [updateLoggingConfiguration](#updateloggingconfiguration) - Updates a specified logging configuration.
* [updateRoom](#updateroom) - Updates a room’s configuration.

## createChatToken

<p>Creates an encrypted token that is used by a chat participant to establish an individual WebSocket chat connection to a room. When the token is used to connect to chat, the connection is valid for the session duration specified in the request. The token becomes invalid at the token-expiration timestamp included in the response.</p> <p>Use the <code>capabilities</code> field to permit an end user to send messages or moderate a room.</p> <p>The <code>attributes</code> field securely attaches structured data to the chat session; the data is included within each message sent by the end user and received by other participants in the room. Common use cases for attributes include passing end-user profile data like an icon, display name, colors, badges, and other display features.</p> <p>Encryption keys are owned by Amazon IVS Chat and never used directly by your application.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateChatTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateChatTokenRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ChatTokenCapabilityEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateChatTokenRequest();
    $request->requestBody = new CreateChatTokenRequestBody();
    $request->requestBody->attributes = [
        'iusto' => 'excepturi',
        'nisi' => 'recusandae',
        'temporibus' => 'ab',
    ];
    $request->requestBody->capabilities = [
        ChatTokenCapabilityEnum::SEND_MESSAGE,
        ChatTokenCapabilityEnum::DISCONNECT_USER,
    ];
    $request->requestBody->roomIdentifier = 'perferendis';
    $request->requestBody->sessionDurationInMinutes = 368241;
    $request->requestBody->userId = 'repellendus';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->createChatToken($request);

    if ($response->createChatTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLoggingConfiguration

Creates a logging configuration that allows clients to store and record sent messages.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLoggingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateLoggingConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateLoggingConfigurationRequestBodyDestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLogsDestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\FirehoseDestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\S3DestinationConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLoggingConfigurationRequest();
    $request->requestBody = new CreateLoggingConfigurationRequestBody();
    $request->requestBody->destinationConfiguration = new CreateLoggingConfigurationRequestBodyDestinationConfiguration();
    $request->requestBody->destinationConfiguration->cloudWatchLogs = new CloudWatchLogsDestinationConfiguration();
    $request->requestBody->destinationConfiguration->cloudWatchLogs->logGroupName = 'quod';
    $request->requestBody->destinationConfiguration->firehose = new FirehoseDestinationConfiguration();
    $request->requestBody->destinationConfiguration->firehose->deliveryStreamName = 'quod';
    $request->requestBody->destinationConfiguration->s3 = new S3DestinationConfiguration();
    $request->requestBody->destinationConfiguration->s3->bucketName = 'esse';
    $request->requestBody->name = 'Miss Lowell Parisian';
    $request->requestBody->tags = [
        'fugit' => 'deleniti',
        'hic' => 'optio',
        'totam' => 'beatae',
    ];
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->createLoggingConfiguration($request);

    if ($response->createLoggingConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRoom

Creates a room that allows clients to connect and pass messages.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRoomRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRoomRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateRoomRequestBodyMessageReviewHandler;
use \OpenAPI\OpenAPI\Models\Shared\FallbackResultEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRoomRequest();
    $request->requestBody = new CreateRoomRequestBody();
    $request->requestBody->loggingConfigurationIdentifiers = [
        'excepturi',
    ];
    $request->requestBody->maximumMessageLength = 135218;
    $request->requestBody->maximumMessageRatePerSecond = 18789;
    $request->requestBody->messageReviewHandler = new CreateRoomRequestBodyMessageReviewHandler();
    $request->requestBody->messageReviewHandler->fallbackResult = FallbackResultEnum::ALLOW;
    $request->requestBody->messageReviewHandler->uri = 'https://crazy-ophthalmologist.biz';
    $request->requestBody->name = 'Lester Welch';
    $request->requestBody->tags = [
        'corporis' => 'iste',
        'iure' => 'saepe',
    ];
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->createRoom($request);

    if ($response->createRoomResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLoggingConfiguration

Deletes the specified logging configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLoggingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLoggingConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLoggingConfigurationRequest();
    $request->requestBody = new DeleteLoggingConfigurationRequestBody();
    $request->requestBody->identifier = 'dolores';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'nemo';

    $response = $sdk->sdk->deleteLoggingConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMessage

Sends an event to a specific room which directs clients to delete a specific message; that is, unrender it from view and delete it from the client’s chat history. This event’s <code>EventName</code> is <code>aws:DELETE_MESSAGE</code>. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-deletemessage-publish.html"> DeleteMessage</a> WebSocket operation in the Amazon IVS Chat Messaging API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMessageRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMessageRequest();
    $request->requestBody = new DeleteMessageRequestBody();
    $request->requestBody->id = '5907aff1-a3a2-4fa9-8677-39251aa52c3f';
    $request->requestBody->reason = 'ipsam';
    $request->requestBody->roomIdentifier = 'id';
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->deleteMessage($request);

    if ($response->deleteMessageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRoom

Deletes the specified room.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRoomRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRoomRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRoomRequest();
    $request->requestBody = new DeleteRoomRequestBody();
    $request->requestBody->identifier = 'reiciendis';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->deleteRoom($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disconnectUser

Disconnects all connections using a specified user ID from a room. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-disconnectuser-publish.html"> DisconnectUser</a> WebSocket operation in the Amazon IVS Chat Messaging API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisconnectUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisconnectUserRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisconnectUserRequest();
    $request->requestBody = new DisconnectUserRequestBody();
    $request->requestBody->reason = 'voluptate';
    $request->requestBody->roomIdentifier = 'cum';
    $request->requestBody->userId = 'perferendis';
    $request->xAmzAlgorithm = 'doloremque';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'dolore';

    $response = $sdk->sdk->disconnectUser($request);

    if ($response->disconnectUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLoggingConfiguration

Gets the specified logging configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLoggingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLoggingConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLoggingConfigurationRequest();
    $request->requestBody = new GetLoggingConfigurationRequestBody();
    $request->requestBody->identifier = 'iusto';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->getLoggingConfiguration($request);

    if ($response->getLoggingConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRoom

Gets the specified room.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRoomRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRoomRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRoomRequest();
    $request->requestBody = new GetRoomRequestBody();
    $request->requestBody->identifier = 'ipsum';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'rem';

    $response = $sdk->sdk->getRoom($request);

    if ($response->getRoomResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLoggingConfigurations

Gets summary information about all your logging configurations in the AWS region where the API request is processed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLoggingConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListLoggingConfigurationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLoggingConfigurationsRequest();
    $request->requestBody = new ListLoggingConfigurationsRequestBody();
    $request->requestBody->maxResults = 916723;
    $request->requestBody->nextToken = 'quasi';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->maxResults = 'est';
    $request->nextToken = 'quibusdam';

    $response = $sdk->sdk->listLoggingConfigurations($request);

    if ($response->listLoggingConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRooms

Gets summary information about all your rooms in the AWS region where the API request is processed. Results are sorted in descending order of <code>updateTime</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRoomsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRoomsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRoomsRequest();
    $request->requestBody = new ListRoomsRequestBody();
    $request->requestBody->loggingConfigurationIdentifier = 'explicabo';
    $request->requestBody->maxResults = 647174;
    $request->requestBody->messageReviewHandlerUri = 'distinctio';
    $request->requestBody->name = 'Francisco Gleason';
    $request->requestBody->nextToken = 'cupiditate';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'fugit';
    $request->maxResults = 'dolorum';
    $request->nextToken = 'excepturi';

    $response = $sdk->sdk->listRooms($request);

    if ($response->listRoomsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Gets information about AWS tags for the specified ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'non';
    $request->resourceArn = 'eligendi';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendEvent

Sends an event to a room. Use this within your application’s business logic to send events to clients of a room; e.g., to notify clients to change the way the chat UI is rendered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\SendEventRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendEventRequest();
    $request->requestBody = new SendEventRequestBody();
    $request->requestBody->attributes = [
        'aliquid' => 'provident',
        'necessitatibus' => 'sint',
        'officia' => 'dolor',
    ];
    $request->requestBody->eventName = 'debitis';
    $request->requestBody->roomIdentifier = 'a';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->sendEvent($request);

    if ($response->sendEventResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds or updates tags for the AWS resource with the specified ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'cumque' => 'facere',
        'ea' => 'aliquid',
    ];
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'delectus';
    $request->resourceArn = 'quidem';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags from the resource with the specified ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'amet';
    $request->resourceArn = 'deserunt';
    $request->tagKeys = [
        'vel',
        'natus',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLoggingConfiguration

Updates a specified logging configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLoggingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLoggingConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLoggingConfigurationRequestBodyDestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLogsDestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\FirehoseDestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\S3DestinationConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLoggingConfigurationRequest();
    $request->requestBody = new UpdateLoggingConfigurationRequestBody();
    $request->requestBody->destinationConfiguration = new UpdateLoggingConfigurationRequestBodyDestinationConfiguration();
    $request->requestBody->destinationConfiguration->cloudWatchLogs = new CloudWatchLogsDestinationConfiguration();
    $request->requestBody->destinationConfiguration->cloudWatchLogs->logGroupName = 'omnis';
    $request->requestBody->destinationConfiguration->firehose = new FirehoseDestinationConfiguration();
    $request->requestBody->destinationConfiguration->firehose->deliveryStreamName = 'molestiae';
    $request->requestBody->destinationConfiguration->s3 = new S3DestinationConfiguration();
    $request->requestBody->destinationConfiguration->s3->bucketName = 'perferendis';
    $request->requestBody->identifier = 'nihil';
    $request->requestBody->name = 'Verna Olson';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->updateLoggingConfiguration($request);

    if ($response->updateLoggingConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRoom

Updates a room’s configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoomRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoomRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRoomRequestBodyMessageReviewHandler;
use \OpenAPI\OpenAPI\Models\Shared\FallbackResultEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRoomRequest();
    $request->requestBody = new UpdateRoomRequestBody();
    $request->requestBody->identifier = 'magnam';
    $request->requestBody->loggingConfigurationIdentifiers = [
        'excepturi',
    ];
    $request->requestBody->maximumMessageLength = 354047;
    $request->requestBody->maximumMessageRatePerSecond = 590873;
    $request->requestBody->messageReviewHandler = new UpdateRoomRequestBodyMessageReviewHandler();
    $request->requestBody->messageReviewHandler->fallbackResult = FallbackResultEnum::DENY;
    $request->requestBody->messageReviewHandler->uri = 'https://angelic-pharmacist.org';
    $request->requestBody->name = 'Tommy Kemmer';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'eius';

    $response = $sdk->sdk->updateRoom($request);

    if ($response->updateRoomResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
