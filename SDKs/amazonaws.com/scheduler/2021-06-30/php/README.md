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
use \OpenAPI\OpenAPI\Models\Operations\CreateScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateScheduleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateScheduleRequestBodyFlexibleTimeWindow;
use \OpenAPI\OpenAPI\Models\Shared\FlexibleTimeWindowModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateScheduleRequestBodyStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateScheduleRequestBodyTarget;
use \OpenAPI\OpenAPI\Models\Shared\DeadLetterConfig;
use \OpenAPI\OpenAPI\Models\Shared\EcsParameters;
use \OpenAPI\OpenAPI\Models\Shared\CapacityProviderStrategyItem;
use \OpenAPI\OpenAPI\Models\Shared\LaunchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NetworkConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AwsVpcConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AssignPublicIpEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementConstraint;
use \OpenAPI\OpenAPI\Models\Shared\PlacementConstraintTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlacementStrategy;
use \OpenAPI\OpenAPI\Models\Shared\PlacementStrategyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropagateTagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventBridgeParameters;
use \OpenAPI\OpenAPI\Models\Shared\KinesisParameters;
use \OpenAPI\OpenAPI\Models\Shared\RetryPolicy;
use \OpenAPI\OpenAPI\Models\Shared\SageMakerPipelineParameters;
use \OpenAPI\OpenAPI\Models\Shared\SageMakerPipelineParameter;
use \OpenAPI\OpenAPI\Models\Shared\SqsParameters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateScheduleRequest();
    $request->name = 'Terrence Rau';
    $request->requestBody = new CreateScheduleRequestBody();
    $request->requestBody->clientToken = 'nulla';
    $request->requestBody->description = 'corrupti';
    $request->requestBody->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-24T02:21:06.409Z');
    $request->requestBody->flexibleTimeWindow = new CreateScheduleRequestBodyFlexibleTimeWindow();
    $request->requestBody->flexibleTimeWindow->maximumWindowInMinutes = 623564;
    $request->requestBody->flexibleTimeWindow->mode = FlexibleTimeWindowModeEnum::FLEXIBLE;
    $request->requestBody->groupName = 'suscipit';
    $request->requestBody->kmsKeyArn = 'iure';
    $request->requestBody->scheduleExpression = 'magnam';
    $request->requestBody->scheduleExpressionTimezone = 'debitis';
    $request->requestBody->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-14T06:18:51.036Z');
    $request->requestBody->state = CreateScheduleRequestBodyStateEnum::ENABLED;
    $request->requestBody->target = new CreateScheduleRequestBodyTarget();
    $request->requestBody->target->arn = 'suscipit';
    $request->requestBody->target->deadLetterConfig = new DeadLetterConfig();
    $request->requestBody->target->deadLetterConfig->arn = 'molestiae';
    $request->requestBody->target->ecsParameters = new EcsParameters();
    $request->requestBody->target->ecsParameters->capacityProviderStrategy = [
        new CapacityProviderStrategyItem(),
        new CapacityProviderStrategyItem(),
        new CapacityProviderStrategyItem(),
        new CapacityProviderStrategyItem(),
    ];
    $request->requestBody->target->ecsParameters->enableECSManagedTags = false;
    $request->requestBody->target->ecsParameters->enableExecuteCommand = false;
    $request->requestBody->target->ecsParameters->group = 'placeat';
    $request->requestBody->target->ecsParameters->launchType = LaunchTypeEnum::FARGATE;
    $request->requestBody->target->ecsParameters->networkConfiguration = new NetworkConfiguration();
    $request->requestBody->target->ecsParameters->networkConfiguration->awsvpcConfiguration = new AwsVpcConfiguration();
    $request->requestBody->target->ecsParameters->networkConfiguration->awsvpcConfiguration->assignPublicIp = AssignPublicIpEnum::ENABLED;
    $request->requestBody->target->ecsParameters->networkConfiguration->awsvpcConfiguration->securityGroups = [
        'nisi',
        'recusandae',
        'temporibus',
    ];
    $request->requestBody->target->ecsParameters->networkConfiguration->awsvpcConfiguration->subnets = [
        'quis',
    ];
    $request->requestBody->target->ecsParameters->placementConstraints = [
        new PlacementConstraint(),
    ];
    $request->requestBody->target->ecsParameters->placementStrategy = [
        new PlacementStrategy(),
        new PlacementStrategy(),
        new PlacementStrategy(),
    ];
    $request->requestBody->target->ecsParameters->platformVersion = 'perferendis';
    $request->requestBody->target->ecsParameters->propagateTags = PropagateTagsEnum::TASK_DEFINITION;
    $request->requestBody->target->ecsParameters->referenceId = 'ipsam';
    $request->requestBody->target->ecsParameters->tags = [
        [
            'quo' => 'odit',
            'at' => 'at',
            'maiores' => 'molestiae',
            'quod' => 'quod',
        ],
        [
            'totam' => 'porro',
            'dolorum' => 'dicta',
        ],
        [
            'officia' => 'occaecati',
            'fugit' => 'deleniti',
            'hic' => 'optio',
        ],
        [
            'beatae' => 'commodi',
            'molestiae' => 'modi',
            'qui' => 'impedit',
        ],
    ];
    $request->requestBody->target->ecsParameters->taskCount = 736918;
    $request->requestBody->target->ecsParameters->taskDefinitionArn = 'esse';
    $request->requestBody->target->eventBridgeParameters = new EventBridgeParameters();
    $request->requestBody->target->eventBridgeParameters->detailType = 'ipsum';
    $request->requestBody->target->eventBridgeParameters->source = 'excepturi';
    $request->requestBody->target->input = 'aspernatur';
    $request->requestBody->target->kinesisParameters = new KinesisParameters();
    $request->requestBody->target->kinesisParameters->partitionKey = 'perferendis';
    $request->requestBody->target->retryPolicy = new RetryPolicy();
    $request->requestBody->target->retryPolicy->maximumEventAgeInSeconds = 324141;
    $request->requestBody->target->retryPolicy->maximumRetryAttempts = 617636;
    $request->requestBody->target->roleArn = 'sed';
    $request->requestBody->target->sageMakerPipelineParameters = new SageMakerPipelineParameters();
    $request->requestBody->target->sageMakerPipelineParameters->pipelineParameterList = [
        new SageMakerPipelineParameter(),
        new SageMakerPipelineParameter(),
        new SageMakerPipelineParameter(),
    ];
    $request->requestBody->target->sqsParameters = new SqsParameters();
    $request->requestBody->target->sqsParameters->messageGroupId = 'dolor';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->createSchedule($request);

    if ($response->createScheduleOutput !== null) {
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

* [createSchedule](docs/sdk/README.md#createschedule) - Creates the specified schedule.
* [createScheduleGroup](docs/sdk/README.md#createschedulegroup) - Creates the specified schedule group.
* [deleteSchedule](docs/sdk/README.md#deleteschedule) - Deletes the specified schedule.
* [deleteScheduleGroup](docs/sdk/README.md#deleteschedulegroup) - <p>Deletes the specified schedule group. Deleting a schedule group results in EventBridge Scheduler deleting all schedules associated with the group. When you delete a group, it remains in a <code>DELETING</code> state until all of its associated schedules are deleted. Schedules associated with the group that are set to run while the schedule group is in the process of being deleted might continue to invoke their targets until the schedule group and its associated schedules are deleted.</p> <note> <p> This operation is eventually consistent. </p> </note>
* [getSchedule](docs/sdk/README.md#getschedule) - Retrieves the specified schedule.
* [getScheduleGroup](docs/sdk/README.md#getschedulegroup) - Retrieves the specified schedule group.
* [listScheduleGroups](docs/sdk/README.md#listschedulegroups) - Returns a paginated list of your schedule groups.
* [listSchedules](docs/sdk/README.md#listschedules) - Returns a paginated list of your EventBridge Scheduler schedules.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags associated with the Scheduler resource.
* [tagResource](docs/sdk/README.md#tagresource) - Assigns one or more tags (key-value pairs) to the specified EventBridge Scheduler resource. You can only assign tags to schedule groups.
* [untagResource](docs/sdk/README.md#untagresource) - Removes one or more tags from the specified EventBridge Scheduler schedule group.
* [updateSchedule](docs/sdk/README.md#updateschedule) - <p> Updates the specified schedule. When you call <code>UpdateSchedule</code>, EventBridge Scheduler uses all values, including empty values, specified in the request and overrides the existing schedule. This is by design. This means that if you do not set an optional field in your request, that field will be set to its system-default value after the update. </p> <p> Before calling this operation, we recommend that you call the <code>GetSchedule</code> API operation and make a note of all optional parameters for your <code>UpdateSchedule</code> call. </p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
