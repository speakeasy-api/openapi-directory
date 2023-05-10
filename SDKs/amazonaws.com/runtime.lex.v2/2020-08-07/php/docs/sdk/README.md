# SDK

## Overview

This section contains documentation for the Amazon Lex V2 Runtime V2 API operations.

Amazon Web Services documentation
<https://docs.aws.amazon.com/runtime-v2-lex/>
### Available Operations

* [deleteSession](#deletesession) - <p>Removes session information for a specified bot, alias, and user ID. </p> <p>You can use this operation to restart a conversation with a bot. When you remove a session, the entire history of the session is removed so that you can start again.</p> <p>You don't need to delete a session. Sessions have a time limit and will expire. Set the session time limit when you create the bot. The default is 5 minutes, but you can specify anything between 1 minute and 24 hours.</p> <p>If you specify a bot or alias ID that doesn't exist, you receive a <code>BadRequestException.</code> </p> <p>If the locale doesn't exist in the bot, or if the locale hasn't been enables for the alias, you receive a <code>BadRequestException</code>.</p>
* [getSession](#getsession) - <p>Returns session information for a specified bot, alias, and user.</p> <p>For example, you can use this operation to retrieve session information for a user that has left a long-running session in use.</p> <p>If the bot, alias, or session identifier doesn't exist, Amazon Lex V2 returns a <code>BadRequestException</code>. If the locale doesn't exist or is not enabled for the alias, you receive a <code>BadRequestException</code>.</p>
* [putSession](#putsession) - Creates a new session or modifies an existing session with an Amazon Lex V2 bot. Use this operation to enable your application to set the state of the bot.
* [recognizeText](#recognizetext) - <p>Sends user input to Amazon Lex V2. Client applications use this API to send requests to Amazon Lex V2 at runtime. Amazon Lex V2 then interprets the user input using the machine learning model that it build for the bot.</p> <p>In response, Amazon Lex V2 returns the next message to convey to the user and an optional response card to display.</p> <p>If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_PostFulfillmentStatusSpecification.html">PostFulfillmentStatusSpecification</a>.</p> <ul> <li> <p> <b>Success message</b> - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present.</p> </li> <li> <p> <b>Failed message</b> - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message.</p> </li> <li> <p> <b>Timeout message</b> - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete.html">Completion message</a>.</p>
* [recognizeUtterance](#recognizeutterance) - <p>Sends user input to Amazon Lex V2. You can send text or speech. Clients use this API to send text and audio requests to Amazon Lex V2 at runtime. Amazon Lex V2 interprets the user input using the machine learning model built for the bot.</p> <p>The following request fields must be compressed with gzip and then base64 encoded before you send them to Amazon Lex V2. </p> <ul> <li> <p>requestAttributes</p> </li> <li> <p>sessionState</p> </li> </ul> <p>The following response fields are compressed using gzip and then base64 encoded by Amazon Lex V2. Before you can use these fields, you must decode and decompress them. </p> <ul> <li> <p>inputTranscript</p> </li> <li> <p>interpretations</p> </li> <li> <p>messages</p> </li> <li> <p>requestAttributes</p> </li> <li> <p>sessionState</p> </li> </ul> <p>The example contains a Java application that compresses and encodes a Java object to send to Amazon Lex V2, and a second that decodes and decompresses a response from Amazon Lex V2.</p> <p>If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_PostFulfillmentStatusSpecification.html">PostFulfillmentStatusSpecification</a>.</p> <ul> <li> <p> <b>Success message</b> - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present.</p> </li> <li> <p> <b>Failed message</b> - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message.</p> </li> <li> <p> <b>Timeout message</b> - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete.html">Completion message</a>.</p>

## deleteSession

<p>Removes session information for a specified bot, alias, and user ID. </p> <p>You can use this operation to restart a conversation with a bot. When you remove a session, the entire history of the session is removed so that you can start again.</p> <p>You don't need to delete a session. Sessions have a time limit and will expire. Set the session time limit when you create the bot. The default is 5 minutes, but you can specify anything between 1 minute and 24 hours.</p> <p>If you specify a bot or alias ID that doesn't exist, you receive a <code>BadRequestException.</code> </p> <p>If the locale doesn't exist in the bot, or if the locale hasn't been enables for the alias, you receive a <code>BadRequestException</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSessionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSessionRequest();
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->botAliasId = 'suscipit';
    $request->botId = 'molestiae';
    $request->localeId = 'minus';
    $request->sessionId = 'placeat';

    $response = $sdk->sdk->deleteSession($request);

    if ($response->deleteSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSession

<p>Returns session information for a specified bot, alias, and user.</p> <p>For example, you can use this operation to retrieve session information for a user that has left a long-running session in use.</p> <p>If the bot, alias, or session identifier doesn't exist, Amazon Lex V2 returns a <code>BadRequestException</code>. If the locale doesn't exist or is not enabled for the alias, you receive a <code>BadRequestException</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSessionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSessionRequest();
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'ab';
    $request->botAliasId = 'quis';
    $request->botId = 'veritatis';
    $request->localeId = 'deserunt';
    $request->sessionId = 'perferendis';

    $response = $sdk->sdk->getSession($request);

    if ($response->getSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSession

Creates a new session or modifies an existing session with an Amazon Lex V2 bot. Use this operation to enable your application to set the state of the bot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutSessionRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Message;
use \OpenAPI\OpenAPI\Models\Shared\MessageContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImageResponseCard;
use \OpenAPI\OpenAPI\Models\Shared\Button;
use \OpenAPI\OpenAPI\Models\Operations\PutSessionRequestBodySessionState;
use \OpenAPI\OpenAPI\Models\Shared\ActiveContext;
use \OpenAPI\OpenAPI\Models\Shared\ActiveContextTimeToLive;
use \OpenAPI\OpenAPI\Models\Shared\DialogAction;
use \OpenAPI\OpenAPI\Models\Shared\StyleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ElicitSubSlot;
use \OpenAPI\OpenAPI\Models\Shared\DialogActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Intent;
use \OpenAPI\OpenAPI\Models\Shared\ConfirmationStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\Slot;
use \OpenAPI\OpenAPI\Models\Shared\Value;
use \OpenAPI\OpenAPI\Models\Shared\IntentStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeHints;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeHintDetails;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeHintValue;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSessionRequest();
    $request->requestBody = new PutSessionRequestBody();
    $request->requestBody->messages = [
        new Message(),
        new Message(),
    ];
    $request->requestBody->requestAttributes = [
        'sapiente' => 'quo',
        'odit' => 'at',
        'at' => 'maiores',
        'molestiae' => 'quod',
    ];
    $request->requestBody->sessionState = new PutSessionRequestBodySessionState();
    $request->requestBody->sessionState->activeContexts = [
        new ActiveContext(),
        new ActiveContext(),
        new ActiveContext(),
        new ActiveContext(),
    ];
    $request->requestBody->sessionState->dialogAction = new DialogAction();
    $request->requestBody->sessionState->dialogAction->slotElicitationStyle = StyleTypeEnum::SPELL_BY_LETTER;
    $request->requestBody->sessionState->dialogAction->slotToElicit = 'totam';
    $request->requestBody->sessionState->dialogAction->subSlotToElicit = new ElicitSubSlot();
    $request->requestBody->sessionState->dialogAction->subSlotToElicit->name = 'Omar Carroll';
    $request->requestBody->sessionState->dialogAction->subSlotToElicit->subSlotToElicit = new ElicitSubSlot();
    $request->requestBody->sessionState->dialogAction->type = DialogActionTypeEnum::ELICIT_INTENT;
    $request->requestBody->sessionState->intent = new Intent();
    $request->requestBody->sessionState->intent->confirmationState = ConfirmationStateEnum::CONFIRMED;
    $request->requestBody->sessionState->intent->name = 'Irvin Rosenbaum III';
    $request->requestBody->sessionState->intent->slots = [
        'modi' => new Slot(),
        'qui' => new Slot(),
    ];
    $request->requestBody->sessionState->intent->state = IntentStateEnum::WAITING;
    $request->requestBody->sessionState->originatingRequestId = 'cum';
    $request->requestBody->sessionState->runtimeHints = new RuntimeHints();
    $request->requestBody->sessionState->runtimeHints->slotHints = [
        'ipsum' => [
            'aspernatur' => new RuntimeHintDetails(),
            'perferendis' => new RuntimeHintDetails(),
            'ad' => new RuntimeHintDetails(),
        ],
        'natus' => [
            'iste' => new RuntimeHintDetails(),
        ],
    ];
    $request->requestBody->sessionState->sessionAttributes = [
        'natus' => 'laboriosam',
    ];
    $request->responseContentType = 'hic';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'saepe';
    $request->botAliasId = 'quidem';
    $request->botId = 'architecto';
    $request->localeId = 'ipsa';
    $request->sessionId = 'reiciendis';

    $response = $sdk->sdk->putSession($request);

    if ($response->putSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recognizeText

<p>Sends user input to Amazon Lex V2. Client applications use this API to send requests to Amazon Lex V2 at runtime. Amazon Lex V2 then interprets the user input using the machine learning model that it build for the bot.</p> <p>In response, Amazon Lex V2 returns the next message to convey to the user and an optional response card to display.</p> <p>If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_PostFulfillmentStatusSpecification.html">PostFulfillmentStatusSpecification</a>.</p> <ul> <li> <p> <b>Success message</b> - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present.</p> </li> <li> <p> <b>Failed message</b> - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message.</p> </li> <li> <p> <b>Timeout message</b> - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete.html">Completion message</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RecognizeTextRequest;
use \OpenAPI\OpenAPI\Models\Operations\RecognizeTextRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RecognizeTextRequestBodySessionState;
use \OpenAPI\OpenAPI\Models\Shared\ActiveContext;
use \OpenAPI\OpenAPI\Models\Shared\ActiveContextTimeToLive;
use \OpenAPI\OpenAPI\Models\Shared\DialogAction;
use \OpenAPI\OpenAPI\Models\Shared\StyleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ElicitSubSlot;
use \OpenAPI\OpenAPI\Models\Shared\DialogActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Intent;
use \OpenAPI\OpenAPI\Models\Shared\ConfirmationStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\Slot;
use \OpenAPI\OpenAPI\Models\Shared\Value;
use \OpenAPI\OpenAPI\Models\Shared\IntentStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeHints;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeHintDetails;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeHintValue;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecognizeTextRequest();
    $request->requestBody = new RecognizeTextRequestBody();
    $request->requestBody->requestAttributes = [
        'mollitia' => 'laborum',
        'dolores' => 'dolorem',
        'corporis' => 'explicabo',
    ];
    $request->requestBody->sessionState = new RecognizeTextRequestBodySessionState();
    $request->requestBody->sessionState->activeContexts = [
        new ActiveContext(),
        new ActiveContext(),
        new ActiveContext(),
        new ActiveContext(),
    ];
    $request->requestBody->sessionState->dialogAction = new DialogAction();
    $request->requestBody->sessionState->dialogAction->slotElicitationStyle = StyleTypeEnum::DEFAULT;
    $request->requestBody->sessionState->dialogAction->slotToElicit = 'omnis';
    $request->requestBody->sessionState->dialogAction->subSlotToElicit = new ElicitSubSlot();
    $request->requestBody->sessionState->dialogAction->subSlotToElicit->name = 'Ms. Cathy Marks';
    $request->requestBody->sessionState->dialogAction->subSlotToElicit->subSlotToElicit = new ElicitSubSlot();
    $request->requestBody->sessionState->dialogAction->type = DialogActionTypeEnum::NONE;
    $request->requestBody->sessionState->intent = new Intent();
    $request->requestBody->sessionState->intent->confirmationState = ConfirmationStateEnum::NONE;
    $request->requestBody->sessionState->intent->name = 'Angie Durgan';
    $request->requestBody->sessionState->intent->slots = [
        'mollitia' => new Slot(),
        'occaecati' => new Slot(),
        'numquam' => new Slot(),
        'commodi' => new Slot(),
    ];
    $request->requestBody->sessionState->intent->state = IntentStateEnum::IN_PROGRESS;
    $request->requestBody->sessionState->originatingRequestId = 'molestiae';
    $request->requestBody->sessionState->runtimeHints = new RuntimeHints();
    $request->requestBody->sessionState->runtimeHints->slotHints = [
        'error' => [
            'quis' => new RuntimeHintDetails(),
        ],
    ];
    $request->requestBody->sessionState->sessionAttributes = [
        'laborum' => 'animi',
    ];
    $request->requestBody->text = 'enim';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'possimus';
    $request->botAliasId = 'aut';
    $request->botId = 'quasi';
    $request->localeId = 'error';
    $request->sessionId = 'temporibus';

    $response = $sdk->sdk->recognizeText($request);

    if ($response->recognizeTextResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recognizeUtterance

<p>Sends user input to Amazon Lex V2. You can send text or speech. Clients use this API to send text and audio requests to Amazon Lex V2 at runtime. Amazon Lex V2 interprets the user input using the machine learning model built for the bot.</p> <p>The following request fields must be compressed with gzip and then base64 encoded before you send them to Amazon Lex V2. </p> <ul> <li> <p>requestAttributes</p> </li> <li> <p>sessionState</p> </li> </ul> <p>The following response fields are compressed using gzip and then base64 encoded by Amazon Lex V2. Before you can use these fields, you must decode and decompress them. </p> <ul> <li> <p>inputTranscript</p> </li> <li> <p>interpretations</p> </li> <li> <p>messages</p> </li> <li> <p>requestAttributes</p> </li> <li> <p>sessionState</p> </li> </ul> <p>The example contains a Java application that compresses and encodes a Java object to send to Amazon Lex V2, and a second that decodes and decompresses a response from Amazon Lex V2.</p> <p>If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_PostFulfillmentStatusSpecification.html">PostFulfillmentStatusSpecification</a>.</p> <ul> <li> <p> <b>Success message</b> - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present.</p> </li> <li> <p> <b>Failed message</b> - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message.</p> </li> <li> <p> <b>Timeout message</b> - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete.html">Completion message</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RecognizeUtteranceRequest;
use \OpenAPI\OpenAPI\Models\Operations\RecognizeUtteranceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecognizeUtteranceRequest();
    $request->contentType = 'laborum';
    $request->requestBody = new RecognizeUtteranceRequestBody();
    $request->requestBody->inputStream = 'quasi';
    $request->responseContentType = 'reiciendis';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'omnis';
    $request->botAliasId = 'voluptate';
    $request->botId = 'cum';
    $request->localeId = 'perferendis';
    $request->sessionId = 'doloremque';
    $request->xAmzLexRequestAttributes = 'reprehenderit';
    $request->xAmzLexSessionState = 'ut';

    $response = $sdk->sdk->recognizeUtterance($request);

    if ($response->recognizeUtteranceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
