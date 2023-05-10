# SDK

## Overview

AWS IoT Events monitors your equipment or device fleets for failures or changes in operation, and triggers actions when such events occur. You can use AWS IoT Events API operations to create, read, update, and delete inputs and detector models, and to list their versions.

Amazon Web Services documentation
<https://docs.aws.amazon.com/iotevents/>
### Available Operations

* [createAlarmModel](#createalarmmodel) - Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get notified when the value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html">Create an alarm model</a> in the <i>AWS IoT Events Developer Guide</i>.
* [createDetectorModel](#createdetectormodel) - Creates a detector model.
* [createInput](#createinput) - Creates an input.
* [deleteAlarmModel](#deletealarmmodel) - Deletes an alarm model. Any alarm instances that were created based on this alarm model are also deleted. This action can't be undone.
* [deleteDetectorModel](#deletedetectormodel) - Deletes a detector model. Any active instances of the detector model are also deleted.
* [deleteInput](#deleteinput) - Deletes an input.
* [describeAlarmModel](#describealarmmodel) - Retrieves information about an alarm model. If you don't specify a value for the <code>alarmModelVersion</code> parameter, the latest version is returned.
* [describeDetectorModel](#describedetectormodel) - Describes a detector model. If the <code>version</code> parameter is not specified, information about the latest version is returned.
* [describeDetectorModelAnalysis](#describedetectormodelanalysis) - <p>Retrieves runtime information about a detector model analysis.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
* [describeInput](#describeinput) - Describes an input.
* [describeLoggingOptions](#describeloggingoptions) - Retrieves the current settings of the AWS IoT Events logging options.
* [getDetectorModelAnalysisResults](#getdetectormodelanalysisresults) - <p>Retrieves one or more analysis results of the detector model.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
* [listAlarmModelVersions](#listalarmmodelversions) - Lists all the versions of an alarm model. The operation returns only the metadata associated with each alarm model version.
* [listAlarmModels](#listalarmmodels) - Lists the alarm models that you created. The operation returns only the metadata associated with each alarm model.
* [listDetectorModelVersions](#listdetectormodelversions) - Lists all the versions of a detector model. Only the metadata associated with each detector model version is returned.
* [listDetectorModels](#listdetectormodels) - Lists the detector models you have created. Only the metadata associated with each detector model is returned.
* [listInputRoutings](#listinputroutings) -  Lists one or more input routings. 
* [listInputs](#listinputs) - Lists the inputs you have created.
* [listTagsForResource](#listtagsforresource) - Lists the tags (metadata) you have assigned to the resource.
* [putLoggingOptions](#putloggingoptions) - <p>Sets or updates the AWS IoT Events logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. If you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect.</p>
* [startDetectorModelAnalysis](#startdetectormodelanalysis) - Performs an analysis of your detector model. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-analyze-api.html">Troubleshooting a detector model</a> in the <i>AWS IoT Events Developer Guide</i>.
* [tagResource](#tagresource) - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
* [untagResource](#untagresource) - Removes the given tags (metadata) from the resource.
* [updateAlarmModel](#updatealarmmodel) - Updates an alarm model. Any alarms that were created based on the previous version are deleted and then created again as new data arrives.
* [updateDetectorModel](#updatedetectormodel) - Updates a detector model. Detectors (instances) spawned by the previous version are deleted and then re-created as new inputs arrive.
* [updateInput](#updateinput) - Updates an input.

## createAlarmModel

Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get notified when the value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html">Create an alarm model</a> in the <i>AWS IoT Events Developer Guide</i>.

### Example Usage

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
    ];
    $request->requestBody->alarmModelDescription = 'molestiae';
    $request->requestBody->alarmModelName = 'minus';
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
    $request->requestBody->alarmRule->simpleRule->inputProperty = 'iusto';
    $request->requestBody->alarmRule->simpleRule->threshold = 'excepturi';
    $request->requestBody->key = 'nisi';
    $request->requestBody->roleArn = 'recusandae';
    $request->requestBody->severity = 836079;
    $request->requestBody->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->createAlarmModel($request);

    if ($response->createAlarmModelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDetectorModel

Creates a detector model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDetectorModelRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDetectorModelRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateDetectorModelRequestBodyDetectorModelDefinition;
use \OpenAPI\OpenAPI\Models\Shared\State;
use \OpenAPI\OpenAPI\Models\Shared\OnEnterLifecycle;
use \OpenAPI\OpenAPI\Models\Shared\Event;
use \OpenAPI\OpenAPI\Models\Shared\Action;
use \OpenAPI\OpenAPI\Models\Shared\ClearTimerAction;
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
use \OpenAPI\OpenAPI\Models\Shared\ResetTimerAction;
use \OpenAPI\OpenAPI\Models\Shared\SetTimerAction;
use \OpenAPI\OpenAPI\Models\Shared\SetVariableAction;
use \OpenAPI\OpenAPI\Models\Shared\SNSTopicPublishAction;
use \OpenAPI\OpenAPI\Models\Shared\SqsAction;
use \OpenAPI\OpenAPI\Models\Shared\OnExitLifecycle;
use \OpenAPI\OpenAPI\Models\Shared\OnInputLifecycle;
use \OpenAPI\OpenAPI\Models\Shared\TransitionEvent;
use \OpenAPI\OpenAPI\Models\Operations\CreateDetectorModelRequestBodyEvaluationMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDetectorModelRequest();
    $request->requestBody = new CreateDetectorModelRequestBody();
    $request->requestBody->detectorModelDefinition = new CreateDetectorModelRequestBodyDetectorModelDefinition();
    $request->requestBody->detectorModelDefinition->initialStateName = 'quo';
    $request->requestBody->detectorModelDefinition->states = [
        new State(),
    ];
    $request->requestBody->detectorModelDescription = 'at';
    $request->requestBody->detectorModelName = 'at';
    $request->requestBody->evaluationMethod = CreateDetectorModelRequestBodyEvaluationMethodEnum::SERIAL;
    $request->requestBody->key = 'molestiae';
    $request->requestBody->roleArn = 'quod';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'officia';

    $response = $sdk->sdk->createDetectorModel($request);

    if ($response->createDetectorModelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInput

Creates an input.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateInputRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInputRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateInputRequestBodyInputDefinition;
use \OpenAPI\OpenAPI\Models\Shared\Attribute;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInputRequest();
    $request->requestBody = new CreateInputRequestBody();
    $request->requestBody->inputDefinition = new CreateInputRequestBodyInputDefinition();
    $request->requestBody->inputDefinition->attributes = [
        new Attribute(),
        new Attribute(),
        new Attribute(),
    ];
    $request->requestBody->inputDescription = 'fugit';
    $request->requestBody->inputName = 'deleniti';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->createInput($request);

    if ($response->createInputResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAlarmModel

Deletes an alarm model. Any alarm instances that were created based on this alarm model are also deleted. This action can't be undone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAlarmModelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAlarmModelRequest();
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->alarmModelName = 'ad';

    $response = $sdk->sdk->deleteAlarmModel($request);

    if ($response->deleteAlarmModelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDetectorModel

Deletes a detector model. Any active instances of the detector model are also deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDetectorModelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDetectorModelRequest();
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'hic';
    $request->detectorModelName = 'saepe';

    $response = $sdk->sdk->deleteDetectorModel($request);

    if ($response->deleteDetectorModelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInput

Deletes an input.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInputRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInputRequest();
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'quidem';
    $request->inputName = 'architecto';

    $response = $sdk->sdk->deleteInput($request);

    if ($response->deleteInputResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAlarmModel

Retrieves information about an alarm model. If you don't specify a value for the <code>alarmModelVersion</code> parameter, the latest version is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAlarmModelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAlarmModelRequest();
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->alarmModelName = 'corporis';
    $request->version = 'explicabo';

    $response = $sdk->sdk->describeAlarmModel($request);

    if ($response->describeAlarmModelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDetectorModel

Describes a detector model. If the <code>version</code> parameter is not specified, information about the latest version is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDetectorModelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDetectorModelRequest();
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->detectorModelName = 'iure';
    $request->version = 'culpa';

    $response = $sdk->sdk->describeDetectorModel($request);

    if ($response->describeDetectorModelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDetectorModelAnalysis

<p>Retrieves runtime information about a detector model analysis.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDetectorModelAnalysisRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDetectorModelAnalysisRequest();
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->analysisId = 'repellat';

    $response = $sdk->sdk->describeDetectorModelAnalysis($request);

    if ($response->describeDetectorModelAnalysisResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeInput

Describes an input.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInputRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeInputRequest();
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'velit';
    $request->inputName = 'error';

    $response = $sdk->sdk->describeInput($request);

    if ($response->describeInputResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLoggingOptions

Retrieves the current settings of the AWS IoT Events logging options.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLoggingOptionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLoggingOptionsRequest();
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->describeLoggingOptions($request);

    if ($response->describeLoggingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDetectorModelAnalysisResults

<p>Retrieves one or more analysis results of the detector model.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDetectorModelAnalysisResultsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDetectorModelAnalysisResultsRequest();
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'aut';
    $request->analysisId = 'quasi';
    $request->maxResults = 622846;
    $request->nextToken = 'temporibus';

    $response = $sdk->sdk->getDetectorModelAnalysisResults($request);

    if ($response->getDetectorModelAnalysisResultsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAlarmModelVersions

Lists all the versions of an alarm model. The operation returns only the metadata associated with each alarm model version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAlarmModelVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAlarmModelVersionsRequest();
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->alarmModelName = 'voluptatibus';
    $request->maxResults = 55714;
    $request->nextToken = 'omnis';

    $response = $sdk->sdk->listAlarmModelVersions($request);

    if ($response->listAlarmModelVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAlarmModels

Lists the alarm models that you created. The operation returns only the metadata associated with each alarm model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAlarmModelsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAlarmModelsRequest();
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'maiores';
    $request->maxResults = 120196;
    $request->nextToken = 'corporis';

    $response = $sdk->sdk->listAlarmModels($request);

    if ($response->listAlarmModelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDetectorModelVersions

Lists all the versions of a detector model. Only the metadata associated with each detector model version is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDetectorModelVersionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDetectorModelVersionsRequest();
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'commodi';
    $request->detectorModelName = 'repudiandae';
    $request->maxResults = 64147;
    $request->nextToken = 'ipsum';

    $response = $sdk->sdk->listDetectorModelVersions($request);

    if ($response->listDetectorModelVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDetectorModels

Lists the detector models you have created. Only the metadata associated with each detector model is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDetectorModelsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDetectorModelsRequest();
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'rem';
    $request->maxResults = 916723;
    $request->nextToken = 'quasi';

    $response = $sdk->sdk->listDetectorModels($request);

    if ($response->listDetectorModelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInputRoutings

 Lists one or more input routings. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListInputRoutingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListInputRoutingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListInputRoutingsRequestBodyInputIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\IotEventsInputIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\IotSiteWiseInputIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\IotSiteWiseAssetModelPropertyIdentifier;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInputRoutingsRequest();
    $request->requestBody = new ListInputRoutingsRequestBody();
    $request->requestBody->inputIdentifier = new ListInputRoutingsRequestBodyInputIdentifier();
    $request->requestBody->inputIdentifier->iotEventsInputIdentifier = new IotEventsInputIdentifier();
    $request->requestBody->inputIdentifier->iotEventsInputIdentifier->inputName = 'repudiandae';
    $request->requestBody->inputIdentifier->iotSiteWiseInputIdentifier = new IotSiteWiseInputIdentifier();
    $request->requestBody->inputIdentifier->iotSiteWiseInputIdentifier->iotSiteWiseAssetModelPropertyIdentifier = new IotSiteWiseAssetModelPropertyIdentifier();
    $request->requestBody->inputIdentifier->iotSiteWiseInputIdentifier->iotSiteWiseAssetModelPropertyIdentifier->assetModelId = 'sint';
    $request->requestBody->inputIdentifier->iotSiteWiseInputIdentifier->iotSiteWiseAssetModelPropertyIdentifier->propertyId = 'veritatis';
    $request->requestBody->maxResults = 929297;
    $request->requestBody->nextToken = 'incidunt';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'distinctio';

    $response = $sdk->sdk->listInputRoutings($request);

    if ($response->listInputRoutingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInputs

Lists the inputs you have created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListInputsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInputsRequest();
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'quos';
    $request->maxResults = 20107;
    $request->nextToken = 'magni';

    $response = $sdk->sdk->listInputs($request);

    if ($response->listInputsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags (metadata) you have assigned to the resource.

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
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'tempora';
    $request->resourceArn = 'facilis';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putLoggingOptions

<p>Sets or updates the AWS IoT Events logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. If you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutLoggingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutLoggingOptionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutLoggingOptionsRequestBodyLoggingOptions;
use \OpenAPI\OpenAPI\Models\Shared\DetectorDebugOption;
use \OpenAPI\OpenAPI\Models\Shared\LoggingLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutLoggingOptionsRequest();
    $request->requestBody = new PutLoggingOptionsRequestBody();
    $request->requestBody->loggingOptions = new PutLoggingOptionsRequestBodyLoggingOptions();
    $request->requestBody->loggingOptions->detectorDebugOptions = [
        new DetectorDebugOption(),
        new DetectorDebugOption(),
        new DetectorDebugOption(),
    ];
    $request->requestBody->loggingOptions->enabled = false;
    $request->requestBody->loggingOptions->level = LoggingLevelEnum::ERROR;
    $request->requestBody->loggingOptions->roleArn = 'delectus';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->putLoggingOptions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startDetectorModelAnalysis

Performs an analysis of your detector model. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-analyze-api.html">Troubleshooting a detector model</a> in the <i>AWS IoT Events Developer Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartDetectorModelAnalysisRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartDetectorModelAnalysisRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartDetectorModelAnalysisRequestBodyDetectorModelDefinition;
use \OpenAPI\OpenAPI\Models\Shared\State;
use \OpenAPI\OpenAPI\Models\Shared\OnEnterLifecycle;
use \OpenAPI\OpenAPI\Models\Shared\Event;
use \OpenAPI\OpenAPI\Models\Shared\Action;
use \OpenAPI\OpenAPI\Models\Shared\ClearTimerAction;
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
use \OpenAPI\OpenAPI\Models\Shared\ResetTimerAction;
use \OpenAPI\OpenAPI\Models\Shared\SetTimerAction;
use \OpenAPI\OpenAPI\Models\Shared\SetVariableAction;
use \OpenAPI\OpenAPI\Models\Shared\SNSTopicPublishAction;
use \OpenAPI\OpenAPI\Models\Shared\SqsAction;
use \OpenAPI\OpenAPI\Models\Shared\OnExitLifecycle;
use \OpenAPI\OpenAPI\Models\Shared\OnInputLifecycle;
use \OpenAPI\OpenAPI\Models\Shared\TransitionEvent;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartDetectorModelAnalysisRequest();
    $request->requestBody = new StartDetectorModelAnalysisRequestBody();
    $request->requestBody->detectorModelDefinition = new StartDetectorModelAnalysisRequestBodyDetectorModelDefinition();
    $request->requestBody->detectorModelDefinition->initialStateName = 'sint';
    $request->requestBody->detectorModelDefinition->states = [
        new State(),
        new State(),
        new State(),
    ];
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->sdk->startDetectorModelAnalysis($request);

    if ($response->startDetectorModelAnalysisResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.

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
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->resourceArn = 'laborum';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes the given tags (metadata) from the resource.

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
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'quidem';
    $request->resourceArn = 'provident';
    $request->tagKeys = [
        'id',
        'blanditiis',
        'deleniti',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAlarmModel

Updates an alarm model. Any alarms that were created based on the previous version are deleted and then created again as new data arrives.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAlarmModelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAlarmModelRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAlarmModelRequestBodyAlarmCapabilities;
use \OpenAPI\OpenAPI\Models\Shared\AcknowledgeFlow;
use \OpenAPI\OpenAPI\Models\Shared\InitializationConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAlarmModelRequestBodyAlarmEventActions;
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
use \OpenAPI\OpenAPI\Models\Operations\UpdateAlarmModelRequestBodyAlarmNotification;
use \OpenAPI\OpenAPI\Models\Shared\NotificationAction;
use \OpenAPI\OpenAPI\Models\Shared\NotificationTargetActions;
use \OpenAPI\OpenAPI\Models\Shared\EmailConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EmailContent;
use \OpenAPI\OpenAPI\Models\Shared\EmailRecipients;
use \OpenAPI\OpenAPI\Models\Shared\RecipientDetail;
use \OpenAPI\OpenAPI\Models\Shared\SSOIdentity;
use \OpenAPI\OpenAPI\Models\Shared\SMSConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAlarmModelRequestBodyAlarmRule;
use \OpenAPI\OpenAPI\Models\Shared\SimpleRule;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAlarmModelRequest();
    $request->requestBody = new UpdateAlarmModelRequestBody();
    $request->requestBody->alarmCapabilities = new UpdateAlarmModelRequestBodyAlarmCapabilities();
    $request->requestBody->alarmCapabilities->acknowledgeFlow = new AcknowledgeFlow();
    $request->requestBody->alarmCapabilities->acknowledgeFlow->enabled = false;
    $request->requestBody->alarmCapabilities->initializationConfiguration = new InitializationConfiguration();
    $request->requestBody->alarmCapabilities->initializationConfiguration->disabledOnInitialization = false;
    $request->requestBody->alarmEventActions = new UpdateAlarmModelRequestBodyAlarmEventActions();
    $request->requestBody->alarmEventActions->alarmActions = [
        new AlarmAction(),
        new AlarmAction(),
        new AlarmAction(),
        new AlarmAction(),
    ];
    $request->requestBody->alarmModelDescription = 'amet';
    $request->requestBody->alarmNotification = new UpdateAlarmModelRequestBodyAlarmNotification();
    $request->requestBody->alarmNotification->notificationActions = [
        new NotificationAction(),
        new NotificationAction(),
        new NotificationAction(),
    ];
    $request->requestBody->alarmRule = new UpdateAlarmModelRequestBodyAlarmRule();
    $request->requestBody->alarmRule->simpleRule = new SimpleRule();
    $request->requestBody->alarmRule->simpleRule->comparisonOperator = ComparisonOperatorEnum::LESS;
    $request->requestBody->alarmRule->simpleRule->inputProperty = 'vel';
    $request->requestBody->alarmRule->simpleRule->threshold = 'natus';
    $request->requestBody->roleArn = 'omnis';
    $request->requestBody->severity = 474867;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'labore';
    $request->alarmModelName = 'suscipit';

    $response = $sdk->sdk->updateAlarmModel($request);

    if ($response->updateAlarmModelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDetectorModel

Updates a detector model. Detectors (instances) spawned by the previous version are deleted and then re-created as new inputs arrive.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDetectorModelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDetectorModelRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDetectorModelRequestBodyDetectorModelDefinition;
use \OpenAPI\OpenAPI\Models\Shared\State;
use \OpenAPI\OpenAPI\Models\Shared\OnEnterLifecycle;
use \OpenAPI\OpenAPI\Models\Shared\Event;
use \OpenAPI\OpenAPI\Models\Shared\Action;
use \OpenAPI\OpenAPI\Models\Shared\ClearTimerAction;
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
use \OpenAPI\OpenAPI\Models\Shared\ResetTimerAction;
use \OpenAPI\OpenAPI\Models\Shared\SetTimerAction;
use \OpenAPI\OpenAPI\Models\Shared\SetVariableAction;
use \OpenAPI\OpenAPI\Models\Shared\SNSTopicPublishAction;
use \OpenAPI\OpenAPI\Models\Shared\SqsAction;
use \OpenAPI\OpenAPI\Models\Shared\OnExitLifecycle;
use \OpenAPI\OpenAPI\Models\Shared\OnInputLifecycle;
use \OpenAPI\OpenAPI\Models\Shared\TransitionEvent;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDetectorModelRequestBodyEvaluationMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDetectorModelRequest();
    $request->requestBody = new UpdateDetectorModelRequestBody();
    $request->requestBody->detectorModelDefinition = new UpdateDetectorModelRequestBodyDetectorModelDefinition();
    $request->requestBody->detectorModelDefinition->initialStateName = 'natus';
    $request->requestBody->detectorModelDefinition->states = [
        new State(),
        new State(),
        new State(),
    ];
    $request->requestBody->detectorModelDescription = 'eum';
    $request->requestBody->evaluationMethod = UpdateDetectorModelRequestBodyEvaluationMethodEnum::SERIAL;
    $request->requestBody->roleArn = 'aspernatur';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'quos';
    $request->detectorModelName = 'sint';

    $response = $sdk->sdk->updateDetectorModel($request);

    if ($response->updateDetectorModelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInput

Updates an input.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInputRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInputRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInputRequestBodyInputDefinition;
use \OpenAPI\OpenAPI\Models\Shared\Attribute;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInputRequest();
    $request->requestBody = new UpdateInputRequestBody();
    $request->requestBody->inputDefinition = new UpdateInputRequestBodyInputDefinition();
    $request->requestBody->inputDefinition->attributes = [
        new Attribute(),
    ];
    $request->requestBody->inputDescription = 'mollitia';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'odit';
    $request->inputName = 'nemo';

    $response = $sdk->sdk->updateInput($request);

    if ($response->updateInputResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
