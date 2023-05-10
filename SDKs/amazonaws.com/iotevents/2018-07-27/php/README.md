# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createAlarmModel](docs/sdk/README.md#createalarmmodel) - Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get notified when the value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html">Create an alarm model</a> in the <i>AWS IoT Events Developer Guide</i>.
* [createDetectorModel](docs/sdk/README.md#createdetectormodel) - Creates a detector model.
* [createInput](docs/sdk/README.md#createinput) - Creates an input.
* [deleteAlarmModel](docs/sdk/README.md#deletealarmmodel) - Deletes an alarm model. Any alarm instances that were created based on this alarm model are also deleted. This action can't be undone.
* [deleteDetectorModel](docs/sdk/README.md#deletedetectormodel) - Deletes a detector model. Any active instances of the detector model are also deleted.
* [deleteInput](docs/sdk/README.md#deleteinput) - Deletes an input.
* [describeAlarmModel](docs/sdk/README.md#describealarmmodel) - Retrieves information about an alarm model. If you don't specify a value for the <code>alarmModelVersion</code> parameter, the latest version is returned.
* [describeDetectorModel](docs/sdk/README.md#describedetectormodel) - Describes a detector model. If the <code>version</code> parameter is not specified, information about the latest version is returned.
* [describeDetectorModelAnalysis](docs/sdk/README.md#describedetectormodelanalysis) - <p>Retrieves runtime information about a detector model analysis.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
* [describeInput](docs/sdk/README.md#describeinput) - Describes an input.
* [describeLoggingOptions](docs/sdk/README.md#describeloggingoptions) - Retrieves the current settings of the AWS IoT Events logging options.
* [getDetectorModelAnalysisResults](docs/sdk/README.md#getdetectormodelanalysisresults) - <p>Retrieves one or more analysis results of the detector model.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
* [listAlarmModelVersions](docs/sdk/README.md#listalarmmodelversions) - Lists all the versions of an alarm model. The operation returns only the metadata associated with each alarm model version.
* [listAlarmModels](docs/sdk/README.md#listalarmmodels) - Lists the alarm models that you created. The operation returns only the metadata associated with each alarm model.
* [listDetectorModelVersions](docs/sdk/README.md#listdetectormodelversions) - Lists all the versions of a detector model. Only the metadata associated with each detector model version is returned.
* [listDetectorModels](docs/sdk/README.md#listdetectormodels) - Lists the detector models you have created. Only the metadata associated with each detector model is returned.
* [listInputRoutings](docs/sdk/README.md#listinputroutings) -  Lists one or more input routings. 
* [listInputs](docs/sdk/README.md#listinputs) - Lists the inputs you have created.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags (metadata) you have assigned to the resource.
* [putLoggingOptions](docs/sdk/README.md#putloggingoptions) - <p>Sets or updates the AWS IoT Events logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. If you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect.</p>
* [startDetectorModelAnalysis](docs/sdk/README.md#startdetectormodelanalysis) - Performs an analysis of your detector model. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-analyze-api.html">Troubleshooting a detector model</a> in the <i>AWS IoT Events Developer Guide</i>.
* [tagResource](docs/sdk/README.md#tagresource) - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
* [untagResource](docs/sdk/README.md#untagresource) - Removes the given tags (metadata) from the resource.
* [updateAlarmModel](docs/sdk/README.md#updatealarmmodel) - Updates an alarm model. Any alarms that were created based on the previous version are deleted and then created again as new data arrives.
* [updateDetectorModel](docs/sdk/README.md#updatedetectormodel) - Updates a detector model. Detectors (instances) spawned by the previous version are deleted and then re-created as new inputs arrive.
* [updateInput](docs/sdk/README.md#updateinput) - Updates an input.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
