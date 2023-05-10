# SDK

## Overview

<p>Amazon Augmented AI (Amazon A2I) adds the benefit of human judgment to any machine learning application. When an AI application can't evaluate data with a high degree of confidence, human reviewers can take over. This human review is called a human review workflow. To create and start a human review workflow, you need three resources: a <i>worker task template</i>, a <i>flow definition</i>, and a <i>human loop</i>.</p> <p>For information about these resources and prerequisites for using Amazon A2I, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-getting-started.html">Get Started with Amazon Augmented AI</a> in the Amazon SageMaker Developer Guide.</p> <p>This API reference includes information about API actions and data types that you can use to interact with Amazon A2I programmatically. Use this guide to:</p> <ul> <li> <p>Start a human loop with the <code>StartHumanLoop</code> operation when using Amazon A2I with a <i>custom task type</i>. To learn more about the difference between custom and built-in task types, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-task-types-general.html">Use Task Types </a>. To learn how to start a human loop using this API, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-start-human-loop.html#a2i-instructions-starthumanloop">Create and Start a Human Loop for a Custom Task Type </a> in the Amazon SageMaker Developer Guide.</p> </li> <li> <p>Manage your human loops. You can list all human loops that you have created, describe individual human loops, and stop and delete human loops. To learn more, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-monitor-humanloop-results.html">Monitor and Manage Your Human Loop </a> in the Amazon SageMaker Developer Guide.</p> </li> </ul> <p>Amazon A2I integrates APIs from various AWS services to create and start human review workflows for those services. To learn how Amazon A2I uses these APIs, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-api-references.html">Use APIs in Amazon A2I</a> in the Amazon SageMaker Developer Guide.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/sagemaker/>
### Available Operations

* [deleteHumanLoop](#deletehumanloop) - <p>Deletes the specified human loop for a flow definition.</p> <p>If the human loop was deleted, this operation will return a <code>ResourceNotFoundException</code>. </p>
* [describeHumanLoop](#describehumanloop) - Returns information about the specified human loop. If the human loop was deleted, this operation will return a <code>ResourceNotFoundException</code> error. 
* [listHumanLoops](#listhumanloops) - Returns information about human loops, given the specified parameters. If a human loop was deleted, it will not be included.
* [startHumanLoop](#starthumanloop) - Starts a human loop, provided that at least one activation condition is met.
* [stopHumanLoop](#stophumanloop) - Stops the specified human loop.

## deleteHumanLoop

<p>Deletes the specified human loop for a flow definition.</p> <p>If the human loop was deleted, this operation will return a <code>ResourceNotFoundException</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHumanLoopRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteHumanLoopRequest();
    $request->humanLoopName = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->deleteHumanLoop($request);

    if ($response->deleteHumanLoopResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeHumanLoop

Returns information about the specified human loop. If the human loop was deleted, this operation will return a <code>ResourceNotFoundException</code> error. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeHumanLoopRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeHumanLoopRequest();
    $request->humanLoopName = 'delectus';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->describeHumanLoop($request);

    if ($response->describeHumanLoopResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listHumanLoops

Returns information about human loops, given the specified parameters. If a human loop was deleted, it will not be included.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListHumanLoopsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListHumanLoopsSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListHumanLoopsRequest();
    $request->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-20T06:24:36.919Z');
    $request->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-29T11:50:59.674Z');
    $request->flowDefinitionArn = 'ab';
    $request->maxResults = 337396;
    $request->nextToken = 'veritatis';
    $request->sortOrder = ListHumanLoopsSortOrderEnum::DESCENDING;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'at';

    $response = $sdk->sdk->listHumanLoops($request);

    if ($response->listHumanLoopsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startHumanLoop

Starts a human loop, provided that at least one activation condition is met.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartHumanLoopRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartHumanLoopRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartHumanLoopRequestBodyDataAttributes;
use \OpenAPI\OpenAPI\Models\Shared\ContentClassifierEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartHumanLoopRequestBodyHumanLoopInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartHumanLoopRequest();
    $request->requestBody = new StartHumanLoopRequestBody();
    $request->requestBody->dataAttributes = new StartHumanLoopRequestBodyDataAttributes();
    $request->requestBody->dataAttributes->contentClassifiers = [
        ContentClassifierEnum::FREE_OF_ADULT_CONTENT,
        ContentClassifierEnum::FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION,
        ContentClassifierEnum::FREE_OF_ADULT_CONTENT,
        ContentClassifierEnum::FREE_OF_ADULT_CONTENT,
    ];
    $request->requestBody->flowDefinitionArn = 'esse';
    $request->requestBody->humanLoopInput = new StartHumanLoopRequestBodyHumanLoopInput();
    $request->requestBody->humanLoopInput->inputContent = 'totam';
    $request->requestBody->humanLoopName = 'porro';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->startHumanLoop($request);

    if ($response->startHumanLoopResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopHumanLoop

Stops the specified human loop.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopHumanLoopRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopHumanLoopRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopHumanLoopRequest();
    $request->requestBody = new StopHumanLoopRequestBody();
    $request->requestBody->humanLoopName = 'hic';
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->stopHumanLoop($request);

    if ($response->stopHumanLoopResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
