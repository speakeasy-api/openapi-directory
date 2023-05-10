<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAlarmModelRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAlarmModelRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateAlarmModelRequestBodyAlarmCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\AcknowledgeFlow;
use \OpenAPI\OpenAPI\Models\Shared\InitializationConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateAlarmModelRequestBodyAlarmEventActions;
use \OpenAPI\OpenAPI\Models\Shared\AlarmAction;
use \OpenAPI\OpenAPI\Models\Shared\DynamoDBAction;
use \OpenAPI\OpenAPI\Models\Shared\Payload;
use \OpenAPI\OpenAPI\Models\Shared\PayloadTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DynamoDBv2Action;
use \OpenAPI\OpenAPI\Models\Shared\FirehoseAction;
use \OpenAPI\OpenAPI\Models\Shared\IotEventsAction;
use \OpenAPI\OpenAPI\Models\Shared\IotSiteWiseAction;
use \OpenAPI\OpenAPI\Models\Shared\AssetPropertyValue;
use \OpenAPI\OpenAPI\Models\Shared\AssetPropertyTimestamp;
use \OpenAPI\OpenAPI\Models\Shared\AssetPropertyVariant;
use \OpenAPI\OpenAPI\Models\Shared\IotTopicPublishAction;
use \OpenAPI\OpenAPI\Models\Shared\LambdaAction;
use \OpenAPI\OpenAPI\Models\Shared\SNSTopicPublishAction;
use \OpenAPI\OpenAPI\Models\Shared\SqsAction;
use \OpenAPI\OpenAPI\Models\Operations\CreateAlarmModelRequestBodyAlarmNotification;
use \OpenAPI\OpenAPI\Models\Shared\NotificationAction;
use \OpenAPI\OpenAPI\Models\Shared\NotificationTargetActions;
use \OpenAPI\OpenAPI\Models\Shared\EmailConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EmailContent;
use \OpenAPI\OpenAPI\Models\Shared\EmailRecipients;
use \OpenAPI\OpenAPI\Models\Shared\RecipientDetail;
use \OpenAPI\OpenAPI\Models\Shared\SSOIdentity;
use \OpenAPI\OpenAPI\Models\Shared\SMSConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateAlarmModelRequestBodyAlarmRule;
use \OpenAPI\OpenAPI\Models\Shared\SimpleRule;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAlarmModelRequest();
    $request->requestBody = new CreateAlarmModelRequestBody();
    $request->requestBody->alarmCapabilities = new CreateAlarmModelRequestBodyAlarmCapabilities();
    $request->requestBody->alarmCapabilities->acknowledgeFlow = new AcknowledgeFlow();
    $request->requestBody->alarmCapabilities->acknowledgeFlow->enabled = false;
    $request->requestBody->alarmCapabilities->initializationConfiguration = new InitializationConfiguration();
    $request->requestBody->alarmCapabilities->initializationConfiguration->disabledOnInitialization = false;
    $request->requestBody->alarmEventActions = new CreateAlarmModelRequestBodyAlarmEventActions();
    $request->requestBody->alarmEventActions->alarmActions = [
        new AlarmAction(),
        new AlarmAction(),
        new AlarmAction(),
    ];
    $request->requestBody->alarmModelDescription = 'provident';
    $request->requestBody->alarmModelName = 'distinctio';
    $request->requestBody->alarmNotification = new CreateAlarmModelRequestBodyAlarmNotification();
    $request->requestBody->alarmNotification->notificationActions = [
        new NotificationAction(),
        new NotificationAction(),
        new NotificationAction(),
        new NotificationAction(),
    ];
    $request->requestBody->alarmRule = new CreateAlarmModelRequestBodyAlarmRule();
    $request->requestBody->alarmRule->simpleRule = new SimpleRule();
    $request->requestBody->alarmRule->simpleRule->comparisonOperator = ComparisonOperatorEnum::LESS_OR_EQUAL;
    $request->requestBody->alarmRule->simpleRule->inputProperty = 'nulla';
    $request->requestBody->alarmRule->simpleRule->threshold = 'corrupti';
    $request->requestBody->key = 'illum';
    $request->requestBody->roleArn = 'vel';
    $request->requestBody->severity = 623564;
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->createAlarmModel($request);

    if ($response->createAlarmModelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->