# SDK

## Overview

 Amazon EventBridge Scheduler is a serverless scheduler that allows you to create, run, and manage tasks from one central, managed service. EventBridge Scheduler delivers your tasks reliably, with built-in mechanisms that adjust your schedules based on the availability of downstream targets. The following reference lists the available API actions, and data types for EventBridge Scheduler. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/scheduler/>
### Available Operations

* [createSchedule](#createschedule) - Creates the specified schedule.
* [createScheduleGroup](#createschedulegroup) - Creates the specified schedule group.
* [deleteSchedule](#deleteschedule) - Deletes the specified schedule.
* [deleteScheduleGroup](#deleteschedulegroup) - <p>Deletes the specified schedule group. Deleting a schedule group results in EventBridge Scheduler deleting all schedules associated with the group. When you delete a group, it remains in a <code>DELETING</code> state until all of its associated schedules are deleted. Schedules associated with the group that are set to run while the schedule group is in the process of being deleted might continue to invoke their targets until the schedule group and its associated schedules are deleted.</p> <note> <p> This operation is eventually consistent. </p> </note>
* [getSchedule](#getschedule) - Retrieves the specified schedule.
* [getScheduleGroup](#getschedulegroup) - Retrieves the specified schedule group.
* [listScheduleGroups](#listschedulegroups) - Returns a paginated list of your schedule groups.
* [listSchedules](#listschedules) - Returns a paginated list of your EventBridge Scheduler schedules.
* [listTagsForResource](#listtagsforresource) - Lists the tags associated with the Scheduler resource.
* [tagResource](#tagresource) - Assigns one or more tags (key-value pairs) to the specified EventBridge Scheduler resource. You can only assign tags to schedule groups.
* [untagResource](#untagresource) - Removes one or more tags from the specified EventBridge Scheduler schedule group.
* [updateSchedule](#updateschedule) - <p> Updates the specified schedule. When you call <code>UpdateSchedule</code>, EventBridge Scheduler uses all values, including empty values, specified in the request and overrides the existing schedule. This is by design. This means that if you do not set an optional field in your request, that field will be set to its system-default value after the update. </p> <p> Before calling this operation, we recommend that you call the <code>GetSchedule</code> API operation and make a note of all optional parameters for your <code>UpdateSchedule</code> call. </p>

## createSchedule

Creates the specified schedule.

### Example Usage

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
    $request->name = 'Brad Turcotte Jr.';
    $request->requestBody = new CreateScheduleRequestBody();
    $request->requestBody->clientToken = 'reiciendis';
    $request->requestBody->description = 'est';
    $request->requestBody->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-29T10:25:27.700Z');
    $request->requestBody->flexibleTimeWindow = new CreateScheduleRequestBodyFlexibleTimeWindow();
    $request->requestBody->flexibleTimeWindow->maximumWindowInMinutes = 170909;
    $request->requestBody->flexibleTimeWindow->mode = FlexibleTimeWindowModeEnum::OFF;
    $request->requestBody->groupName = 'corporis';
    $request->requestBody->kmsKeyArn = 'explicabo';
    $request->requestBody->scheduleExpression = 'nobis';
    $request->requestBody->scheduleExpressionTimezone = 'enim';
    $request->requestBody->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-10T11:47:13.463Z');
    $request->requestBody->state = CreateScheduleRequestBodyStateEnum::ENABLED;
    $request->requestBody->target = new CreateScheduleRequestBodyTarget();
    $request->requestBody->target->arn = 'excepturi';
    $request->requestBody->target->deadLetterConfig = new DeadLetterConfig();
    $request->requestBody->target->deadLetterConfig->arn = 'accusantium';
    $request->requestBody->target->ecsParameters = new EcsParameters();
    $request->requestBody->target->ecsParameters->capacityProviderStrategy = [
        new CapacityProviderStrategyItem(),
        new CapacityProviderStrategyItem(),
    ];
    $request->requestBody->target->ecsParameters->enableECSManagedTags = false;
    $request->requestBody->target->ecsParameters->enableExecuteCommand = false;
    $request->requestBody->target->ecsParameters->group = 'culpa';
    $request->requestBody->target->ecsParameters->launchType = LaunchTypeEnum::EXTERNAL;
    $request->requestBody->target->ecsParameters->networkConfiguration = new NetworkConfiguration();
    $request->requestBody->target->ecsParameters->networkConfiguration->awsvpcConfiguration = new AwsVpcConfiguration();
    $request->requestBody->target->ecsParameters->networkConfiguration->awsvpcConfiguration->assignPublicIp = AssignPublicIpEnum::DISABLED;
    $request->requestBody->target->ecsParameters->networkConfiguration->awsvpcConfiguration->securityGroups = [
        'mollitia',
    ];
    $request->requestBody->target->ecsParameters->networkConfiguration->awsvpcConfiguration->subnets = [
        'culpa',
    ];
    $request->requestBody->target->ecsParameters->placementConstraints = [
        new PlacementConstraint(),
    ];
    $request->requestBody->target->ecsParameters->placementStrategy = [
        new PlacementStrategy(),
        new PlacementStrategy(),
        new PlacementStrategy(),
        new PlacementStrategy(),
    ];
    $request->requestBody->target->ecsParameters->platformVersion = 'mollitia';
    $request->requestBody->target->ecsParameters->propagateTags = PropagateTagsEnum::TASK_DEFINITION;
    $request->requestBody->target->ecsParameters->referenceId = 'occaecati';
    $request->requestBody->target->ecsParameters->tags = [
        [
            'quam' => 'molestiae',
            'velit' => 'error',
        ],
        [
            'quis' => 'vitae',
        ],
    ];
    $request->requestBody->target->ecsParameters->taskCount = 674752;
    $request->requestBody->target->ecsParameters->taskDefinitionArn = 'animi';
    $request->requestBody->target->eventBridgeParameters = new EventBridgeParameters();
    $request->requestBody->target->eventBridgeParameters->detailType = 'enim';
    $request->requestBody->target->eventBridgeParameters->source = 'odit';
    $request->requestBody->target->input = 'quo';
    $request->requestBody->target->kinesisParameters = new KinesisParameters();
    $request->requestBody->target->kinesisParameters->partitionKey = 'sequi';
    $request->requestBody->target->retryPolicy = new RetryPolicy();
    $request->requestBody->target->retryPolicy->maximumEventAgeInSeconds = 949572;
    $request->requestBody->target->retryPolicy->maximumRetryAttempts = 368725;
    $request->requestBody->target->roleArn = 'id';
    $request->requestBody->target->sageMakerPipelineParameters = new SageMakerPipelineParameters();
    $request->requestBody->target->sageMakerPipelineParameters->pipelineParameterList = [
        new SageMakerPipelineParameter(),
        new SageMakerPipelineParameter(),
        new SageMakerPipelineParameter(),
        new SageMakerPipelineParameter(),
    ];
    $request->requestBody->target->sqsParameters = new SqsParameters();
    $request->requestBody->target->sqsParameters->messageGroupId = 'aut';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->createSchedule($request);

    if ($response->createScheduleOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createScheduleGroup

Creates the specified schedule group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateScheduleGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateScheduleGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateScheduleGroupRequest();
    $request->name = 'Jessie Langosh V';
    $request->requestBody = new CreateScheduleGroupRequestBody();
    $request->requestBody->clientToken = 'voluptate';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->createScheduleGroup($request);

    if ($response->createScheduleGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSchedule

Deletes the specified schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScheduleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteScheduleRequest();
    $request->name = 'Heidi Carter';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'molestias';
    $request->clientToken = 'excepturi';
    $request->groupName = 'pariatur';

    $response = $sdk->sdk->deleteSchedule($request);

    if ($response->deleteScheduleOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteScheduleGroup

<p>Deletes the specified schedule group. Deleting a schedule group results in EventBridge Scheduler deleting all schedules associated with the group. When you delete a group, it remains in a <code>DELETING</code> state until all of its associated schedules are deleted. Schedules associated with the group that are set to run while the schedule group is in the process of being deleted might continue to invoke their targets until the schedule group and its associated schedules are deleted.</p> <note> <p> This operation is eventually consistent. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScheduleGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteScheduleGroupRequest();
    $request->name = 'Irma Ledner DVM';
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';
    $request->clientToken = 'quibusdam';

    $response = $sdk->sdk->deleteScheduleGroup($request);

    if ($response->deleteScheduleGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchedule

Retrieves the specified schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetScheduleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScheduleRequest();
    $request->name = 'Joanna Rau';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'magni';
    $request->groupName = 'assumenda';

    $response = $sdk->sdk->getSchedule($request);

    if ($response->getScheduleOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScheduleGroup

Retrieves the specified schedule group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetScheduleGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScheduleGroupRequest();
    $request->name = 'Linda Corkery';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'non';

    $response = $sdk->sdk->getScheduleGroup($request);

    if ($response->getScheduleGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listScheduleGroups

Returns a paginated list of your schedule groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListScheduleGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListScheduleGroupsRequest();
    $request->maxResults = 756107;
    $request->namePrefix = 'sint';
    $request->nextToken = 'aliquid';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'a';

    $response = $sdk->sdk->listScheduleGroups($request);

    if ($response->listScheduleGroupsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSchedules

Returns a paginated list of your EventBridge Scheduler schedules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSchedulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSchedulesStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSchedulesRequest();
    $request->maxResults = 680056;
    $request->namePrefix = 'in';
    $request->nextToken = 'in';
    $request->scheduleGroup = 'illum';
    $request->state = ListSchedulesStateEnum::DISABLED;
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->listSchedules($request);

    if ($response->listSchedulesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags associated with the Scheduler resource.

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
    $request->resourceArn = 'laborum';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Assigns one or more tags (key-value pairs) to the specified EventBridge Scheduler resource. You can only assign tags to schedule groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->resourceArn = 'nam';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'nisi';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tags from the specified EventBridge Scheduler schedule group.

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
    $request->resourceArn = 'vel';
    $request->tagKeys = [
        'omnis',
        'molestiae',
        'perferendis',
    ];
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSchedule

<p> Updates the specified schedule. When you call <code>UpdateSchedule</code>, EventBridge Scheduler uses all values, including empty values, specified in the request and overrides the existing schedule. This is by design. This means that if you do not set an optional field in your request, that field will be set to its system-default value after the update. </p> <p> Before calling this operation, we recommend that you call the <code>GetSchedule</code> API operation and make a note of all optional parameters for your <code>UpdateSchedule</code> call. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateScheduleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateScheduleRequestBodyFlexibleTimeWindow;
use \OpenAPI\OpenAPI\Models\Shared\FlexibleTimeWindowModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateScheduleRequestBodyStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateScheduleRequestBodyTarget;
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
    $request = new UpdateScheduleRequest();
    $request->name = 'Robin Keebler';
    $request->requestBody = new UpdateScheduleRequestBody();
    $request->requestBody->clientToken = 'architecto';
    $request->requestBody->description = 'magnam';
    $request->requestBody->endDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-06T23:06:26.119Z');
    $request->requestBody->flexibleTimeWindow = new UpdateScheduleRequestBodyFlexibleTimeWindow();
    $request->requestBody->flexibleTimeWindow->maximumWindowInMinutes = 354047;
    $request->requestBody->flexibleTimeWindow->mode = FlexibleTimeWindowModeEnum::FLEXIBLE;
    $request->requestBody->groupName = 'quos';
    $request->requestBody->kmsKeyArn = 'sint';
    $request->requestBody->scheduleExpression = 'accusantium';
    $request->requestBody->scheduleExpressionTimezone = 'mollitia';
    $request->requestBody->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-16T22:43:33.071Z');
    $request->requestBody->state = UpdateScheduleRequestBodyStateEnum::ENABLED;
    $request->requestBody->target = new UpdateScheduleRequestBodyTarget();
    $request->requestBody->target->arn = 'eum';
    $request->requestBody->target->deadLetterConfig = new DeadLetterConfig();
    $request->requestBody->target->deadLetterConfig->arn = 'dolor';
    $request->requestBody->target->ecsParameters = new EcsParameters();
    $request->requestBody->target->ecsParameters->capacityProviderStrategy = [
        new CapacityProviderStrategyItem(),
        new CapacityProviderStrategyItem(),
        new CapacityProviderStrategyItem(),
        new CapacityProviderStrategyItem(),
    ];
    $request->requestBody->target->ecsParameters->enableECSManagedTags = false;
    $request->requestBody->target->ecsParameters->enableExecuteCommand = false;
    $request->requestBody->target->ecsParameters->group = 'odit';
    $request->requestBody->target->ecsParameters->launchType = LaunchTypeEnum::FARGATE;
    $request->requestBody->target->ecsParameters->networkConfiguration = new NetworkConfiguration();
    $request->requestBody->target->ecsParameters->networkConfiguration->awsvpcConfiguration = new AwsVpcConfiguration();
    $request->requestBody->target->ecsParameters->networkConfiguration->awsvpcConfiguration->assignPublicIp = AssignPublicIpEnum::ENABLED;
    $request->requestBody->target->ecsParameters->networkConfiguration->awsvpcConfiguration->securityGroups = [
        'doloribus',
        'debitis',
    ];
    $request->requestBody->target->ecsParameters->networkConfiguration->awsvpcConfiguration->subnets = [
        'maxime',
        'deleniti',
    ];
    $request->requestBody->target->ecsParameters->placementConstraints = [
        new PlacementConstraint(),
        new PlacementConstraint(),
        new PlacementConstraint(),
    ];
    $request->requestBody->target->ecsParameters->placementStrategy = [
        new PlacementStrategy(),
        new PlacementStrategy(),
    ];
    $request->requestBody->target->ecsParameters->platformVersion = 'architecto';
    $request->requestBody->target->ecsParameters->propagateTags = PropagateTagsEnum::TASK_DEFINITION;
    $request->requestBody->target->ecsParameters->referenceId = 'architecto';
    $request->requestBody->target->ecsParameters->tags = [
        [
            'expedita' => 'nihil',
            'repellat' => 'quibusdam',
        ],
        [
            'saepe' => 'pariatur',
        ],
        [
            'consequuntur' => 'praesentium',
        ],
        [
            'magni' => 'sunt',
            'quo' => 'illum',
            'pariatur' => 'maxime',
        ],
    ];
    $request->requestBody->target->ecsParameters->taskCount = 411397;
    $request->requestBody->target->ecsParameters->taskDefinitionArn = 'excepturi';
    $request->requestBody->target->eventBridgeParameters = new EventBridgeParameters();
    $request->requestBody->target->eventBridgeParameters->detailType = 'odit';
    $request->requestBody->target->eventBridgeParameters->source = 'ea';
    $request->requestBody->target->input = 'accusantium';
    $request->requestBody->target->kinesisParameters = new KinesisParameters();
    $request->requestBody->target->kinesisParameters->partitionKey = 'ab';
    $request->requestBody->target->retryPolicy = new RetryPolicy();
    $request->requestBody->target->retryPolicy->maximumEventAgeInSeconds = 982575;
    $request->requestBody->target->retryPolicy->maximumRetryAttempts = 697429;
    $request->requestBody->target->roleArn = 'ipsam';
    $request->requestBody->target->sageMakerPipelineParameters = new SageMakerPipelineParameters();
    $request->requestBody->target->sageMakerPipelineParameters->pipelineParameterList = [
        new SageMakerPipelineParameter(),
        new SageMakerPipelineParameter(),
    ];
    $request->requestBody->target->sqsParameters = new SqsParameters();
    $request->requestBody->target->sqsParameters->messageGroupId = 'autem';
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'fugiat';

    $response = $sdk->sdk->updateSchedule($request);

    if ($response->updateScheduleOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
