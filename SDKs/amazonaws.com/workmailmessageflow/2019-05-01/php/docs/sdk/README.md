# SDK

## Overview

The WorkMail Message Flow API provides access to email messages as they are being sent and received by a WorkMail organization.

Amazon Web Services documentation
<https://docs.aws.amazon.com/workmailmessageflow/>
### Available Operations

* [getRawMessageContent](#getrawmessagecontent) - Retrieves the raw content of an in-transit email message, in MIME format.
* [putRawMessageContent](#putrawmessagecontent) - <p>Updates the raw content of an in-transit email message, in MIME format.</p> <p>This example describes how to update in-transit email message. For more information and examples for using this API, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html"> Updating message content with AWS Lambda</a>.</p> <note> <p>Updates to an in-transit message only appear when you call <code>PutRawMessageContent</code> from an AWS Lambda function configured with a synchronous <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/lambda.html#synchronous-rules"> Run Lambda</a> rule. If you call <code>PutRawMessageContent</code> on a delivered or sent message, the message remains unchanged, even though <a href="https://docs.aws.amazon.com/workmail/latest/APIReference/API_messageflow_GetRawMessageContent.html">GetRawMessageContent</a> returns an updated message. </p> </note>

## getRawMessageContent

Retrieves the raw content of an in-transit email message, in MIME format.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRawMessageContentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRawMessageContentRequest();
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'debitis';
    $request->messageId = 'ipsa';

    $response = $sdk->sdk->getRawMessageContent($request);

    if ($response->getRawMessageContentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRawMessageContent

<p>Updates the raw content of an in-transit email message, in MIME format.</p> <p>This example describes how to update in-transit email message. For more information and examples for using this API, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html"> Updating message content with AWS Lambda</a>.</p> <note> <p>Updates to an in-transit message only appear when you call <code>PutRawMessageContent</code> from an AWS Lambda function configured with a synchronous <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/lambda.html#synchronous-rules"> Run Lambda</a> rule. If you call <code>PutRawMessageContent</code> on a delivered or sent message, the message remains unchanged, even though <a href="https://docs.aws.amazon.com/workmail/latest/APIReference/API_messageflow_GetRawMessageContent.html">GetRawMessageContent</a> returns an updated message. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutRawMessageContentRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutRawMessageContentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutRawMessageContentRequestBodyContent;
use \OpenAPI\OpenAPI\Models\Shared\S3Reference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRawMessageContentRequest();
    $request->requestBody = new PutRawMessageContentRequestBody();
    $request->requestBody->content = new PutRawMessageContentRequestBodyContent();
    $request->requestBody->content->s3Reference = new S3Reference();
    $request->requestBody->content->s3Reference->bucket = 'delectus';
    $request->requestBody->content->s3Reference->key = 'tempora';
    $request->requestBody->content->s3Reference->objectVersion = 'suscipit';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'nisi';
    $request->messageId = 'recusandae';

    $response = $sdk->sdk->putRawMessageContent($request);

    if ($response->putRawMessageContentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
