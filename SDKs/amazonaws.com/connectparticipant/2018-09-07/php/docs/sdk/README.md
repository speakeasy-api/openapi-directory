# SDK

## Overview

<p>Amazon Connect is an easy-to-use omnichannel cloud contact center service that enables companies of any size to deliver superior customer service at a lower cost. Amazon Connect communications capabilities make it easy for companies to deliver personalized interactions across communication channels, including chat. </p> <p>Use the Amazon Connect Participant Service to manage participants (for example, agents, customers, and managers listening in), and to send messages and events within a chat contact. The APIs in the service enable the following: sending chat messages, attachment sharing, managing a participant's connection state and message events, and retrieving chat transcripts.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/connect/>
### Available Operations

* [completeAttachmentUpload](#completeattachmentupload) - <p>Allows you to confirm that the attachment has been uploaded using the pre-signed URL provided in StartAttachmentUpload API. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
* [createParticipantConnection](#createparticipantconnection) - <p>Creates the participant's connection. </p> <note> <p> <code>ParticipantToken</code> is used for invoking this API instead of <code>ConnectionToken</code>.</p> </note> <p>The participant token is valid for the lifetime of the participant – until they are part of a contact.</p> <p>The response URL for <code>WEBSOCKET</code> Type has a connect expiry timeout of 100s. Clients must manually connect to the returned websocket URL and subscribe to the desired topic. </p> <p>For chat, you need to publish the following on the established websocket connection:</p> <p> <code>{"topic":"aws/subscribe","content":{"topics":["aws/chat"]}}</code> </p> <p>Upon websocket URL expiry, as specified in the response ConnectionExpiry parameter, clients need to call this API again to obtain a new websocket URL and perform the same steps as before.</p> <p> <b>Message streaming support</b>: This API can also be used together with the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactStreaming.html">StartContactStreaming</a> API to create a participant connection for chat contacts that are not using a websocket. For more information about message streaming, <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-message-streaming.html">Enable real-time chat message streaming</a> in the <i>Amazon Connect Administrator Guide</i>.</p> <p> <b>Feature specifications</b>: For information about feature specifications, such as the allowed number of open websocket connections per participant, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#feature-limits">Feature specifications</a> in the <i>Amazon Connect Administrator Guide</i>. </p> <note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p> </note>
* [disconnectParticipant](#disconnectparticipant) - <p>Disconnects a participant. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
* [getAttachment](#getattachment) - <p>Provides a pre-signed URL for download of a completed attachment. This is an asynchronous API for use with active contacts.</p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
* [getTranscript](#gettranscript) - <p>Retrieves a transcript of the session, including details about any attachments. For information about accessing past chat contact transcripts for a persistent chat, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
* [sendEvent](#sendevent) - <p>Sends an event. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
* [sendMessage](#sendmessage) - <p>Sends a message.</p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
* [startAttachmentUpload](#startattachmentupload) - <p>Provides a pre-signed Amazon S3 URL in response for uploading the file directly to S3.</p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>

## completeAttachmentUpload

<p>Allows you to confirm that the attachment has been uploaded using the pre-signed URL provided in StartAttachmentUpload API. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CompleteAttachmentUploadRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompleteAttachmentUploadRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompleteAttachmentUploadRequest();
    $request->requestBody = new CompleteAttachmentUploadRequestBody();
    $request->requestBody->attachmentIds = [
        'debitis',
        'ipsa',
    ];
    $request->requestBody->clientToken = 'delectus';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzBearer = 'suscipit';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'placeat';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->completeAttachmentUpload($request);

    if ($response->completeAttachmentUploadResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createParticipantConnection

<p>Creates the participant's connection. </p> <note> <p> <code>ParticipantToken</code> is used for invoking this API instead of <code>ConnectionToken</code>.</p> </note> <p>The participant token is valid for the lifetime of the participant – until they are part of a contact.</p> <p>The response URL for <code>WEBSOCKET</code> Type has a connect expiry timeout of 100s. Clients must manually connect to the returned websocket URL and subscribe to the desired topic. </p> <p>For chat, you need to publish the following on the established websocket connection:</p> <p> <code>{"topic":"aws/subscribe","content":{"topics":["aws/chat"]}}</code> </p> <p>Upon websocket URL expiry, as specified in the response ConnectionExpiry parameter, clients need to call this API again to obtain a new websocket URL and perform the same steps as before.</p> <p> <b>Message streaming support</b>: This API can also be used together with the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactStreaming.html">StartContactStreaming</a> API to create a participant connection for chat contacts that are not using a websocket. For more information about message streaming, <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-message-streaming.html">Enable real-time chat message streaming</a> in the <i>Amazon Connect Administrator Guide</i>.</p> <p> <b>Feature specifications</b>: For information about feature specifications, such as the allowed number of open websocket connections per participant, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#feature-limits">Feature specifications</a> in the <i>Amazon Connect Administrator Guide</i>. </p> <note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateParticipantConnectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateParticipantConnectionRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateParticipantConnectionRequest();
    $request->requestBody = new CreateParticipantConnectionRequestBody();
    $request->requestBody->connectParticipant = false;
    $request->requestBody->type = [
        ConnectionTypeEnum::CONNECTION_CREDENTIALS,
        ConnectionTypeEnum::CONNECTION_CREDENTIALS,
    ];
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzBearer = 'quis';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->createParticipantConnection($request);

    if ($response->createParticipantConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disconnectParticipant

<p>Disconnects a participant. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisconnectParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisconnectParticipantRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisconnectParticipantRequest();
    $request->requestBody = new DisconnectParticipantRequestBody();
    $request->requestBody->clientToken = 'quo';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzBearer = 'at';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->disconnectParticipant($request);

    if ($response->disconnectParticipantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAttachment

<p>Provides a pre-signed URL for download of a completed attachment. This is an asynchronous API for use with active contacts.</p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAttachmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAttachmentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAttachmentRequest();
    $request->requestBody = new GetAttachmentRequestBody();
    $request->requestBody->attachmentId = 'totam';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzBearer = 'dolorum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->getAttachment($request);

    if ($response->getAttachmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTranscript

<p>Retrieves a transcript of the session, including details about any attachments. For information about accessing past chat contact transcripts for a persistent chat, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTranscriptRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTranscriptRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetTranscriptRequestBodyScanDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTranscriptRequestBodySortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTranscriptRequestBodyStartPosition;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTranscriptRequest();
    $request->maxResults = 'hic';
    $request->nextToken = 'optio';
    $request->requestBody = new GetTranscriptRequestBody();
    $request->requestBody->contactId = 'totam';
    $request->requestBody->maxResults = 105907;
    $request->requestBody->nextToken = 'commodi';
    $request->requestBody->scanDirection = GetTranscriptRequestBodyScanDirectionEnum::FORWARD;
    $request->requestBody->sortOrder = GetTranscriptRequestBodySortOrderEnum::DESCENDING;
    $request->requestBody->startPosition = new GetTranscriptRequestBodyStartPosition();
    $request->requestBody->startPosition->absoluteTime = 'qui';
    $request->requestBody->startPosition->id = 'cb739205-9293-496f-aa75-96eb10faaa23';
    $request->requestBody->startPosition->mostRecent = 358152;
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzBearer = 'nobis';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'accusantium';

    $response = $sdk->sdk->getTranscript($request);

    if ($response->getTranscriptResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendEvent

<p>Sends an event. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>

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
    $request->requestBody->clientToken = 'iure';
    $request->requestBody->content = 'culpa';
    $request->requestBody->contentType = 'doloribus';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzBearer = 'architecto';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'repellat';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->sendEvent($request);

    if ($response->sendEventResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendMessage

<p>Sends a message.</p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\SendMessageRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendMessageRequest();
    $request->requestBody = new SendMessageRequestBody();
    $request->requestBody->clientToken = 'occaecati';
    $request->requestBody->content = 'numquam';
    $request->requestBody->contentType = 'commodi';
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzBearer = 'molestiae';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'quia';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'vitae';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->sendMessage($request);

    if ($response->sendMessageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startAttachmentUpload

<p>Provides a pre-signed Amazon S3 URL in response for uploading the file directly to S3.</p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartAttachmentUploadRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartAttachmentUploadRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartAttachmentUploadRequest();
    $request->requestBody = new StartAttachmentUploadRequestBody();
    $request->requestBody->attachmentName = 'animi';
    $request->requestBody->attachmentSizeInBytes = 317202;
    $request->requestBody->clientToken = 'odit';
    $request->requestBody->contentType = 'quo';
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzBearer = 'tenetur';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->sdk->startAttachmentUpload($request);

    if ($response->startAttachmentUploadResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
