# SDK

## Overview

Fault Injection Simulator is a managed service that enables you to perform fault injection experiments on your Amazon Web Services workloads. For more information, see the <a href="https://docs.aws.amazon.com/fis/latest/userguide/">Fault Injection Simulator User Guide</a>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/fis/>
### Available Operations

* [createExperimentTemplate](#createexperimenttemplate) - <p>Creates an experiment template. </p> <p>An experiment template includes the following components:</p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your Amazon Web Services environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html">Experiment templates</a> in the <i>Fault Injection Simulator User Guide</i>.</p>
* [deleteExperimentTemplate](#deleteexperimenttemplate) - Deletes the specified experiment template.
* [getAction](#getaction) - Gets information about the specified FIS action.
* [getExperiment](#getexperiment) - Gets information about the specified experiment.
* [getExperimentTemplate](#getexperimenttemplate) - Gets information about the specified experiment template.
* [getTargetResourceType](#gettargetresourcetype) - Gets information about the specified resource type.
* [listActions](#listactions) - Lists the available FIS actions.
* [listExperimentTemplates](#listexperimenttemplates) - Lists your experiment templates.
* [listExperiments](#listexperiments) - Lists your experiments.
* [listTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [listTargetResourceTypes](#listtargetresourcetypes) - Lists the target resource types.
* [startExperiment](#startexperiment) - Starts running an experiment from the specified experiment template.
* [stopExperiment](#stopexperiment) - Stops the specified experiment.
* [tagResource](#tagresource) - Applies the specified tags to the specified resource.
* [untagResource](#untagresource) - Removes the specified tags from the specified resource.
* [updateExperimentTemplate](#updateexperimenttemplate) - Updates the specified experiment template.

## createExperimentTemplate

<p>Creates an experiment template. </p> <p>An experiment template includes the following components:</p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your Amazon Web Services environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html">Experiment templates</a> in the <i>Fault Injection Simulator User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateExperimentTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateExperimentTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\CreateExperimentTemplateActionInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateExperimentTemplateRequestBodyLogConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ExperimentTemplateCloudWatchLogsLogConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\ExperimentTemplateS3LogConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\CreateExperimentTemplateStopConditionInput;
use \OpenAPI\OpenAPI\Models\Shared\CreateExperimentTemplateTargetInput;
use \OpenAPI\OpenAPI\Models\Shared\ExperimentTemplateTargetInputFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExperimentTemplateRequest();
    $request->requestBody = new CreateExperimentTemplateRequestBody();
    $request->requestBody->actions = [
        'ab' => new CreateExperimentTemplateActionInput(),
        'quis' => new CreateExperimentTemplateActionInput(),
        'veritatis' => new CreateExperimentTemplateActionInput(),
        'deserunt' => new CreateExperimentTemplateActionInput(),
    ];
    $request->requestBody->clientToken = 'perferendis';
    $request->requestBody->description = 'ipsam';
    $request->requestBody->logConfiguration = new CreateExperimentTemplateRequestBodyLogConfiguration();
    $request->requestBody->logConfiguration->cloudWatchLogsConfiguration = new ExperimentTemplateCloudWatchLogsLogConfigurationInput();
    $request->requestBody->logConfiguration->cloudWatchLogsConfiguration->logGroupArn = 'repellendus';
    $request->requestBody->logConfiguration->logSchemaVersion = 957156;
    $request->requestBody->logConfiguration->s3Configuration = new ExperimentTemplateS3LogConfigurationInput();
    $request->requestBody->logConfiguration->s3Configuration->bucketName = 'quo';
    $request->requestBody->logConfiguration->s3Configuration->prefix = 'odit';
    $request->requestBody->roleArn = 'at';
    $request->requestBody->stopConditions = [
        new CreateExperimentTemplateStopConditionInput(),
        new CreateExperimentTemplateStopConditionInput(),
        new CreateExperimentTemplateStopConditionInput(),
        new CreateExperimentTemplateStopConditionInput(),
    ];
    $request->requestBody->tags = [
        'molestiae' => 'quod',
        'quod' => 'esse',
        'totam' => 'porro',
        'dolorum' => 'dicta',
    ];
    $request->requestBody->targets = [
        'officia' => new CreateExperimentTemplateTargetInput(),
        'occaecati' => new CreateExperimentTemplateTargetInput(),
        'fugit' => new CreateExperimentTemplateTargetInput(),
    ];
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->createExperimentTemplate($request);

    if ($response->createExperimentTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteExperimentTemplate

Deletes the specified experiment template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteExperimentTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteExperimentTemplateRequest();
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->id = '20592939-6fea-4759-aeb1-0faaa2352c59';

    $response = $sdk->sdk->deleteExperimentTemplate($request);

    if ($response->deleteExperimentTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAction

Gets information about the specified FIS action.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionRequest();
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->id = 'f1a3a2fa-9467-4739-a51a-a52c3f5ad019';

    $response = $sdk->sdk->getAction($request);

    if ($response->getActionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExperiment

Gets information about the specified experiment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetExperimentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExperimentRequest();
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nihil';
    $request->id = '8f097b00-74f1-4547-9b5e-6e13b99d488e';

    $response = $sdk->sdk->getExperiment($request);

    if ($response->getExperimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExperimentTemplate

Gets information about the specified experiment template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetExperimentTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExperimentTemplateRequest();
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'enim';
    $request->id = '0ad2abd4-4269-4802-9502-a94bb4f63c96';

    $response = $sdk->sdk->getExperimentTemplate($request);

    if ($response->getExperimentTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTargetResourceType

Gets information about the specified resource type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTargetResourceTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTargetResourceTypeRequest();
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'a';
    $request->resourceType = 'dolorum';

    $response = $sdk->sdk->getTargetResourceType($request);

    if ($response->getTargetResourceTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listActions

Lists the available FIS actions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListActionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListActionsRequest();
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'magnam';
    $request->maxResults = 767024;
    $request->nextToken = 'facere';

    $response = $sdk->sdk->listActions($request);

    if ($response->listActionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listExperimentTemplates

Lists your experiment templates.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListExperimentTemplatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListExperimentTemplatesRequest();
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'enim';
    $request->maxResults = 881736;
    $request->nextToken = 'delectus';

    $response = $sdk->sdk->listExperimentTemplates($request);

    if ($response->listExperimentTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listExperiments

Lists your experiments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListExperimentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListExperimentsRequest();
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->maxResults = 230533;
    $request->nextToken = 'deserunt';

    $response = $sdk->sdk->listExperiments($request);

    if ($response->listExperimentsResponse !== null) {
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

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'nihil';
    $request->resourceArn = 'magnam';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTargetResourceTypes

Lists the target resource types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTargetResourceTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTargetResourceTypesRequest();
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'nobis';
    $request->maxResults = 428769;
    $request->nextToken = 'vero';

    $response = $sdk->sdk->listTargetResourceTypes($request);

    if ($response->listTargetResourceTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startExperiment

Starts running an experiment from the specified experiment template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartExperimentRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartExperimentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartExperimentRequest();
    $request->requestBody = new StartExperimentRequestBody();
    $request->requestBody->clientToken = 'aspernatur';
    $request->requestBody->experimentTemplateId = 'architecto';
    $request->requestBody->tags = [
        'et' => 'excepturi',
        'ullam' => 'provident',
    ];
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'ad';

    $response = $sdk->sdk->startExperiment($request);

    if ($response->startExperimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopExperiment

Stops the specified experiment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopExperimentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopExperimentRequest();
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'iure';
    $request->id = 'fe4c8b71-1e5b-47fd-aed0-28921cddc692';

    $response = $sdk->sdk->stopExperiment($request);

    if ($response->stopExperimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Applies the specified tags to the specified resource.

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
        'accusantium' => 'ab',
        'maiores' => 'quidem',
    ];
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'nemo';
    $request->resourceArn = 'voluptatibus';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes the specified tags from the specified resource.

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
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'hic';
    $request->resourceArn = 'libero';
    $request->tagKeys = [
        'dolores',
        'quis',
        'totam',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateExperimentTemplate

Updates the specified experiment template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateExperimentTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateExperimentTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\UpdateExperimentTemplateActionInputItem;
use \OpenAPI\OpenAPI\Models\Operations\UpdateExperimentTemplateRequestBodyLogConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ExperimentTemplateCloudWatchLogsLogConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\ExperimentTemplateS3LogConfigurationInput;
use \OpenAPI\OpenAPI\Models\Shared\UpdateExperimentTemplateStopConditionInput;
use \OpenAPI\OpenAPI\Models\Shared\UpdateExperimentTemplateTargetInput;
use \OpenAPI\OpenAPI\Models\Shared\ExperimentTemplateTargetInputFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateExperimentTemplateRequest();
    $request->requestBody = new UpdateExperimentTemplateRequestBody();
    $request->requestBody->actions = [
        'eaque' => new UpdateExperimentTemplateActionInputItem(),
        'quis' => new UpdateExperimentTemplateActionInputItem(),
    ];
    $request->requestBody->description = 'nesciunt';
    $request->requestBody->logConfiguration = new UpdateExperimentTemplateRequestBodyLogConfiguration();
    $request->requestBody->logConfiguration->cloudWatchLogsConfiguration = new ExperimentTemplateCloudWatchLogsLogConfigurationInput();
    $request->requestBody->logConfiguration->cloudWatchLogsConfiguration->logGroupArn = 'eos';
    $request->requestBody->logConfiguration->logSchemaVersion = 18521;
    $request->requestBody->logConfiguration->s3Configuration = new ExperimentTemplateS3LogConfigurationInput();
    $request->requestBody->logConfiguration->s3Configuration->bucketName = 'dolores';
    $request->requestBody->logConfiguration->s3Configuration->prefix = 'minus';
    $request->requestBody->roleArn = 'quam';
    $request->requestBody->stopConditions = [
        new UpdateExperimentTemplateStopConditionInput(),
    ];
    $request->requestBody->targets = [
        'nostrum' => new UpdateExperimentTemplateTargetInput(),
        'hic' => new UpdateExperimentTemplateTargetInput(),
        'recusandae' => new UpdateExperimentTemplateTargetInput(),
        'omnis' => new UpdateExperimentTemplateTargetInput(),
    ];
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'perspiciatis';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'error';
    $request->id = '09b3fe49-a8d9-4cbf-8863-3323f9b77f3a';

    $response = $sdk->sdk->updateExperimentTemplate($request);

    if ($response->updateExperimentTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
