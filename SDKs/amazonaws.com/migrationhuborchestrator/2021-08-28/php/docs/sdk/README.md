# SDK

## Overview

This API reference provides descriptions, syntax, and other details about each of the actions and data types for AWS Migration Hub Orchestrator. he topic for each action shows the API request parameters and the response. Alternatively, you can use one of the AWS SDKs to access an API that is tailored to the programming language or platform that you're using.

Amazon Web Services documentation
<https://docs.aws.amazon.com/migrationhub-orchestrator/>
### Available Operations

* [createWorkflow](#createworkflow) - Create a workflow to orchestrate your migrations.
* [createWorkflowStep](#createworkflowstep) - Create a step in the migration workflow.
* [createWorkflowStepGroup](#createworkflowstepgroup) - Create a step group in a migration workflow.
* [deleteWorkflow](#deleteworkflow) - Delete a migration workflow. You must pause a running workflow in Migration Hub Orchestrator console to delete it.
* [deleteWorkflowStep](#deleteworkflowstep) - Delete a step in a migration workflow. Pause the workflow to delete a running step.
* [deleteWorkflowStepGroup](#deleteworkflowstepgroup) - Delete a step group in a migration workflow.
* [getTemplate](#gettemplate) - Get the template you want to use for creating a migration workflow.
* [getTemplateStep](#gettemplatestep) - Get a specific step in a template.
* [getTemplateStepGroup](#gettemplatestepgroup) - Get a step group in a template.
* [getWorkflow](#getworkflow) - Get migration workflow.
* [getWorkflowStep](#getworkflowstep) - Get a step in the migration workflow.
* [getWorkflowStepGroup](#getworkflowstepgroup) - Get the step group of a migration workflow.
* [listPlugins](#listplugins) - List AWS Migration Hub Orchestrator plugins.
* [listTagsForResource](#listtagsforresource) - List the tags added to a resource.
* [listTemplateStepGroups](#listtemplatestepgroups) - List the step groups in a template.
* [listTemplateSteps](#listtemplatesteps) - List the steps in a template.
* [listTemplates](#listtemplates) - List the templates available in Migration Hub Orchestrator to create a migration workflow.
* [listWorkflowStepGroups](#listworkflowstepgroups) - List the step groups in a migration workflow.
* [listWorkflowSteps](#listworkflowsteps) - List the steps in a workflow.
* [listWorkflows](#listworkflows) - List the migration workflows.
* [retryWorkflowStep](#retryworkflowstep) - Retry a failed step in a migration workflow.
* [startWorkflow](#startworkflow) - Start a migration workflow.
* [stopWorkflow](#stopworkflow) - Stop an ongoing migration workflow.
* [tagResource](#tagresource) - Tag a resource by specifying its Amazon Resource Name (ARN).
* [untagResource](#untagresource) - Deletes the tags for a resource.
* [updateWorkflow](#updateworkflow) - Update a migration workflow.
* [updateWorkflowStep](#updateworkflowstep) - Update a step in a migration workflow.
* [updateWorkflowStepGroup](#updateworkflowstepgroup) - Update the step group in a migration workflow.

## createWorkflow

Create a workflow to orchestrate your migrations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkflowRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\StepInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkflowRequest();
    $request->requestBody = new CreateWorkflowRequestBody();
    $request->requestBody->applicationConfigurationId = 'deserunt';
    $request->requestBody->description = 'perferendis';
    $request->requestBody->inputParameters = [
        'repellendus' => new StepInput(),
        'sapiente' => new StepInput(),
    ];
    $request->requestBody->name = 'Fred Strosin';
    $request->requestBody->stepTargets = [
        'quod',
        'quod',
    ];
    $request->requestBody->tags = [
        'totam' => 'porro',
        'dolorum' => 'dicta',
    ];
    $request->requestBody->templateId = 'nam';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->createWorkflow($request);

    if ($response->createMigrationWorkflowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorkflowStep

Create a step in the migration workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkflowStepRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkflowStepRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowStepOutput;
use \OpenAPI\OpenAPI\Models\Shared\DataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowStepOutputUnion;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkflowStepRequestBodyStepActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkflowStepRequestBodyWorkflowStepAutomationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\PlatformCommand;
use \OpenAPI\OpenAPI\Models\Shared\RunEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlatformScriptKey;
use \OpenAPI\OpenAPI\Models\Shared\TargetTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkflowStepRequest();
    $request->requestBody = new CreateWorkflowStepRequestBody();
    $request->requestBody->description = 'beatae';
    $request->requestBody->name = 'Tanya Gleason';
    $request->requestBody->next = [
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->requestBody->outputs = [
        new WorkflowStepOutput(),
    ];
    $request->requestBody->previous = [
        'ad',
    ];
    $request->requestBody->stepActionType = CreateWorkflowStepRequestBodyStepActionTypeEnum::AUTOMATED;
    $request->requestBody->stepGroupId = 'sed';
    $request->requestBody->stepTarget = [
        'dolor',
        'natus',
        'laboriosam',
    ];
    $request->requestBody->workflowId = 'hic';
    $request->requestBody->workflowStepAutomationConfiguration = new CreateWorkflowStepRequestBodyWorkflowStepAutomationConfiguration();
    $request->requestBody->workflowStepAutomationConfiguration->command = new PlatformCommand();
    $request->requestBody->workflowStepAutomationConfiguration->command->linux = 'saepe';
    $request->requestBody->workflowStepAutomationConfiguration->command->windows = 'fuga';
    $request->requestBody->workflowStepAutomationConfiguration->runEnvironment = RunEnvironmentEnum::AWS;
    $request->requestBody->workflowStepAutomationConfiguration->scriptLocationS3Bucket = 'corporis';
    $request->requestBody->workflowStepAutomationConfiguration->scriptLocationS3Key = new PlatformScriptKey();
    $request->requestBody->workflowStepAutomationConfiguration->scriptLocationS3Key->linux = 'iste';
    $request->requestBody->workflowStepAutomationConfiguration->scriptLocationS3Key->windows = 'iure';
    $request->requestBody->workflowStepAutomationConfiguration->targetType = TargetTypeEnum::NONE;
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->createWorkflowStep($request);

    if ($response->createWorkflowStepResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorkflowStepGroup

Create a step group in a migration workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkflowStepGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkflowStepGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkflowStepGroupRequest();
    $request->requestBody = new CreateWorkflowStepGroupRequestBody();
    $request->requestBody->description = 'dolores';
    $request->requestBody->name = 'Stacy Champlin';
    $request->requestBody->next = [
        'nemo',
        'minima',
        'excepturi',
    ];
    $request->requestBody->previous = [
        'iure',
    ];
    $request->requestBody->workflowId = 'culpa';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->createWorkflowStepGroup($request);

    if ($response->createWorkflowStepGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkflow

Delete a migration workflow. You must pause a running workflow in Migration Hub Orchestrator console to delete it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkflowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkflowRequest();
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->id = '39251aa5-2c3f-45ad-819d-a1ffe78f097b';

    $response = $sdk->sdk->deleteWorkflow($request);

    if ($response->deleteMigrationWorkflowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkflowStep

Delete a step in a migration workflow. Pause the workflow to delete a running step.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkflowStepRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkflowStepRequest();
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'corporis';
    $request->id = '471b5e6e-13b9-49d4-88e1-e91e450ad2ab';
    $request->stepGroupId = 'quibusdam';
    $request->workflowId = 'labore';

    $response = $sdk->sdk->deleteWorkflowStep($request);

    if ($response->deleteWorkflowStepResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkflowStepGroup

Delete a step group in a migration workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkflowStepGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkflowStepGroupRequest();
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'magni';
    $request->id = 'd502a94b-b4f6-43c9-a9e9-a3efa77dfb14';
    $request->workflowId = 'cumque';

    $response = $sdk->sdk->deleteWorkflowStepGroup($request);

    if ($response->deleteWorkflowStepGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTemplate

Get the template you want to use for creating a migration workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTemplateRequest();
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->id = '5efb9ba8-8f3a-4669-9707-4ba4469b6e21';

    $response = $sdk->sdk->getTemplate($request);

    if ($response->getMigrationWorkflowTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTemplateStep

Get a specific step in a template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTemplateStepRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTemplateStepRequest();
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'sint';
    $request->id = '0afa563e-2516-4fe4-88b7-11e5b7fd2ed0';
    $request->stepGroupId = 'consequuntur';
    $request->templateId = 'praesentium';

    $response = $sdk->sdk->getTemplateStep($request);

    if ($response->getTemplateStepResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTemplateStepGroup

Get a step group in a template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTemplateStepGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTemplateStepGroupRequest();
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'maxime';
    $request->id = '692601fb-576b-40d5-b0d3-0c5fbb258705';
    $request->templateId = 'nesciunt';

    $response = $sdk->sdk->getTemplateStepGroup($request);

    if ($response->getTemplateStepGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkflow

Get migration workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkflowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkflowRequest();
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'vero';
    $request->id = '5fe9b90c-2890-49b3-be49-a8d9cbf48633';

    $response = $sdk->sdk->getWorkflow($request);

    if ($response->getMigrationWorkflowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkflowStep

Get a step in the migration workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkflowStepRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkflowStepRequest();
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->id = '7f3a4100-674e-4bf6-9280-d1ba77a89ebf';
    $request->stepGroupId = 'nihil';
    $request->workflowId = 'ipsum';

    $response = $sdk->sdk->getWorkflowStep($request);

    if ($response->getWorkflowStepResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkflowStepGroup

Get the step group of a migration workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkflowStepGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkflowStepGroupRequest();
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'amet';
    $request->id = 'ce5e6a95-d8a0-4d44-ace2-af7a73cf3be4';
    $request->workflowId = 'enim';

    $response = $sdk->sdk->getWorkflowStepGroup($request);

    if ($response->getWorkflowStepGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPlugins

List AWS Migration Hub Orchestrator plugins.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPluginsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPluginsRequest();
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'neque';
    $request->maxResults = 153694;
    $request->nextToken = 'vel';

    $response = $sdk->sdk->listPlugins($request);

    if ($response->listPluginsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

List the tags added to a resource.

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
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'qui';
    $request->resourceArn = 'cupiditate';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTemplateStepGroups

List the step groups in a template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTemplateStepGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTemplateStepGroupsRequest();
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->maxResults = 132068;
    $request->nextToken = 'dolores';
    $request->templateId = 'distinctio';

    $response = $sdk->sdk->listTemplateStepGroups($request);

    if ($response->listTemplateStepGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTemplateSteps

List the steps in a template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTemplateStepsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTemplateStepsRequest();
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'neque';
    $request->maxResults = 144847;
    $request->nextToken = 'magni';
    $request->stepGroupId = 'odio';
    $request->templateId = 'sunt';

    $response = $sdk->sdk->listTemplateSteps($request);

    if ($response->listTemplateStepsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTemplates

List the templates available in Migration Hub Orchestrator to create a migration workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTemplatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTemplatesRequest();
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'nobis';
    $request->maxResults = 92596;
    $request->name = 'Dale Boehm';
    $request->nextToken = 'tempore';

    $response = $sdk->sdk->listTemplates($request);

    if ($response->listMigrationWorkflowTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkflowStepGroups

List the step groups in a migration workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkflowStepGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkflowStepGroupsRequest();
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'aperiam';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->maxResults = 677263;
    $request->nextToken = 'architecto';
    $request->workflowId = 'quae';

    $response = $sdk->sdk->listWorkflowStepGroups($request);

    if ($response->listWorkflowStepGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkflowSteps

List the steps in a workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkflowStepsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkflowStepsRequest();
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'porro';
    $request->maxResults = 984330;
    $request->nextToken = 'ut';
    $request->stepGroupId = 'facilis';
    $request->workflowId = 'cupiditate';

    $response = $sdk->sdk->listWorkflowSteps($request);

    if ($response->listWorkflowStepsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkflows

List the migration workflows.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkflowsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkflowsStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkflowsRequest();
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'quisquam';
    $request->adsApplicationConfigurationName = 'vero';
    $request->maxResults = 606476;
    $request->name = 'Tiffany Willms';
    $request->nextToken = 'vero';
    $request->status = ListWorkflowsStatusEnum::COMPLETED;
    $request->templateId = 'dignissimos';

    $response = $sdk->sdk->listWorkflows($request);

    if ($response->listMigrationWorkflowsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retryWorkflowStep

Retry a failed step in a migration workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetryWorkflowStepRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetryWorkflowStepRequest();
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'similique';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'vero';
    $request->id = '74dd39c0-f5d2-4cff-bc70-a45626d43681';
    $request->stepGroupId = 'dolor';
    $request->workflowId = 'maiores';

    $response = $sdk->sdk->retryWorkflowStep($request);

    if ($response->retryWorkflowStepResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startWorkflow

Start a migration workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartWorkflowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartWorkflowRequest();
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->id = 'ce6c5561-46c3-4e25-8fb0-08c42e141aac';

    $response = $sdk->sdk->startWorkflow($request);

    if ($response->startMigrationWorkflowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopWorkflow

Stop an ongoing migration workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopWorkflowRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopWorkflowRequest();
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'nulla';
    $request->id = '6b144290-7474-4778-a7bd-466d28c10ab3';

    $response = $sdk->sdk->stopWorkflow($request);

    if ($response->stopMigrationWorkflowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Tag a resource by specifying its Amazon Resource Name (ARN).

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
        'illum' => 'quo',
        'fuga' => 'eius',
        'eos' => 'voluptas',
        'ab' => 'cupiditate',
    ];
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'quo';
    $request->resourceArn = 'esse';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Deletes the tags for a resource.

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
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'aperiam';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'inventore';
    $request->xAmzSignedHeaders = 'nihil';
    $request->resourceArn = 'totam';
    $request->tagKeys = [
        'aliquam',
        'odio',
        'occaecati',
        'commodi',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkflow

Update a migration workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkflowRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\StepInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkflowRequest();
    $request->requestBody = new UpdateWorkflowRequestBody();
    $request->requestBody->description = 'sapiente';
    $request->requestBody->inputParameters = [
        'deserunt' => new StepInput(),
    ];
    $request->requestBody->name = 'Carol Sawayn';
    $request->requestBody->stepTargets = [
        'consequuntur',
        'deleniti',
        'fugit',
    ];
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'nisi';
    $request->id = '2f222e98-17ee-417c-be61-e6b7b95bc0ab';

    $response = $sdk->sdk->updateWorkflow($request);

    if ($response->updateMigrationWorkflowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkflowStep

Update a step in a migration workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkflowStepRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkflowStepRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowStepOutput;
use \OpenAPI\OpenAPI\Models\Shared\DataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowStepOutputUnion;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkflowStepRequestBodyStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkflowStepRequestBodyStepActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkflowStepRequestBodyWorkflowStepAutomationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\PlatformCommand;
use \OpenAPI\OpenAPI\Models\Shared\RunEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\PlatformScriptKey;
use \OpenAPI\OpenAPI\Models\Shared\TargetTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkflowStepRequest();
    $request->requestBody = new UpdateWorkflowStepRequestBody();
    $request->requestBody->description = 'adipisci';
    $request->requestBody->name = 'Carlos Altenwerth';
    $request->requestBody->next = [
        'consectetur',
        'esse',
        'blanditiis',
        'provident',
    ];
    $request->requestBody->outputs = [
        new WorkflowStepOutput(),
        new WorkflowStepOutput(),
        new WorkflowStepOutput(),
        new WorkflowStepOutput(),
    ];
    $request->requestBody->previous = [
        'quas',
        'esse',
        'quasi',
        'a',
    ];
    $request->requestBody->status = UpdateWorkflowStepRequestBodyStatusEnum::FAILED;
    $request->requestBody->stepActionType = UpdateWorkflowStepRequestBodyStepActionTypeEnum::AUTOMATED;
    $request->requestBody->stepGroupId = 'pariatur';
    $request->requestBody->stepTarget = [
        'quia',
        'eveniet',
        'asperiores',
        'facere',
    ];
    $request->requestBody->workflowId = 'veritatis';
    $request->requestBody->workflowStepAutomationConfiguration = new UpdateWorkflowStepRequestBodyWorkflowStepAutomationConfiguration();
    $request->requestBody->workflowStepAutomationConfiguration->command = new PlatformCommand();
    $request->requestBody->workflowStepAutomationConfiguration->command->linux = 'consequuntur';
    $request->requestBody->workflowStepAutomationConfiguration->command->windows = 'quasi';
    $request->requestBody->workflowStepAutomationConfiguration->runEnvironment = RunEnvironmentEnum::ONPREMISE;
    $request->requestBody->workflowStepAutomationConfiguration->scriptLocationS3Bucket = 'culpa';
    $request->requestBody->workflowStepAutomationConfiguration->scriptLocationS3Key = new PlatformScriptKey();
    $request->requestBody->workflowStepAutomationConfiguration->scriptLocationS3Key->linux = 'aliquid';
    $request->requestBody->workflowStepAutomationConfiguration->scriptLocationS3Key->windows = 'tenetur';
    $request->requestBody->workflowStepAutomationConfiguration->targetType = TargetTypeEnum::SINGLE;
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'soluta';
    $request->id = '04f15756-082d-468e-a19f-1d17051339d0';

    $response = $sdk->sdk->updateWorkflowStep($request);

    if ($response->updateWorkflowStepResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkflowStepGroup

Update the step group in a migration workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkflowStepGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkflowStepGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkflowStepGroupRequest();
    $request->requestBody = new UpdateWorkflowStepGroupRequestBody();
    $request->requestBody->description = 'rem';
    $request->requestBody->name = 'Marsha Keebler IV';
    $request->requestBody->next = [
        'voluptatem',
        'dolor',
    ];
    $request->requestBody->previous = [
        'numquam',
        'impedit',
        'explicabo',
    ];
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'velit';
    $request->id = 'f5f0642d-ac7a-4f51-9cc4-13aa63aae8d6';
    $request->workflowId = 'ducimus';

    $response = $sdk->sdk->updateWorkflowStepGroup($request);

    if ($response->updateWorkflowStepGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
