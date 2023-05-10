# SDK

## Overview

<p>These interfaces allow you to apply the AWS library of pre-defined <i>controls</i> to your organizational units, programmatically. In this context, controls are the same as AWS Control Tower guardrails.</p> <p>To call these APIs, you'll need to know:</p> <ul> <li> <p>the <code>ControlARN</code> for the control--that is, the guardrail--you are targeting,</p> </li> <li> <p>and the ARN associated with the target organizational unit (OU).</p> </li> </ul> <p> <b>To get the <code>ControlARN</code> for your AWS Control Tower guardrail:</b> </p> <p>The <code>ControlARN</code> contains the control name which is specified in each guardrail. For a list of control names for <i>Strongly recommended</i> and <i>Elective</i> guardrails, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-identifiers.html.html">Resource identifiers for APIs and guardrails</a> in the <a href="https://docs.aws.amazon.com/controltower/latest/userguide/automating-tasks.html">Automating tasks section</a> of the AWS Control Tower User Guide. Remember that <i>Mandatory</i> guardrails cannot be added or removed.</p> <note> <p> <b>ARN format:</b> <code>arn:aws:controltower:{REGION}::control/{CONTROL_NAME}</code> </p> <p> <b>Example:</b> </p> <p> <code>arn:aws:controltower:us-west-2::control/AWS-GR_AUTOSCALING_LAUNCH_CONFIG_PUBLIC_IP_DISABLED</code> </p> </note> <p> <b>To get the ARN for an OU:</b> </p> <p>In the AWS Organizations console, you can find the ARN for the OU on the <b>Organizational unit details</b> page associated with that OU.</p> <note> <p> <b>OU ARN format:</b> </p> <p> <code>arn:${Partition}:organizations::${MasterAccountId}:ou/o-${OrganizationId}/ou-${OrganizationalUnitId}</code> </p> </note> <p class="title"> <b>Details and examples</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/userguide/control-identifiers.html">List of resource identifiers for APIs and guardrails</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/userguide/guardrail-api-examples-short.html">Guardrail API examples (CLI)</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/userguide/enable-controls.html">Enable controls with AWS CloudFormation</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/controltower/latest/userguide/creating-resources-with-cloudformation.html">Creating AWS Control Tower resources with AWS CloudFormation</a> </p> </li> </ul> <p>To view the open source resource repository on GitHub, see <a href="https://github.com/aws-cloudformation/aws-cloudformation-resource-providers-controltower">aws-cloudformation/aws-cloudformation-resource-providers-controltower</a> </p> <p> <b>Recording API Requests</b> </p> <p>AWS Control Tower supports AWS CloudTrail, a service that records AWS API calls for your AWS account and delivers log files to an Amazon S3 bucket. By using information collected by CloudTrail, you can determine which requests the AWS Control Tower service received, who made the request and when, and so on. For more about AWS Control Tower and its support for CloudTrail, see <a href="https://docs.aws.amazon.com/controltower/latest/userguide/logging-using-cloudtrail.html">Logging AWS Control Tower Actions with AWS CloudTrail</a> in the AWS Control Tower User Guide. To learn more about CloudTrail, including how to turn it on and find your log files, see the AWS CloudTrail User Guide.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/controltower/>
### Available Operations

* [disableControl](#disablecontrol) - This API call turns off a control. It starts an asynchronous operation that deletes AWS resources on the specified organizational unit and the accounts it contains. The resources will vary according to the control that you specify.
* [enableControl](#enablecontrol) - This API call activates a control. It starts an asynchronous operation that creates AWS resources on the specified organizational unit and the accounts it contains. The resources created will vary according to the control that you specify.
* [getControlOperation](#getcontroloperation) - Returns the status of a particular <code>EnableControl</code> or <code>DisableControl</code> operation. Displays a message in case of error. Details for an operation are available for 90 days.
* [listEnabledControls](#listenabledcontrols) - Lists the controls enabled by AWS Control Tower on the specified organizational unit and the accounts it contains.

## disableControl

This API call turns off a control. It starts an asynchronous operation that deletes AWS resources on the specified organizational unit and the accounts it contains. The resources will vary according to the control that you specify.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableControlRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableControlRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableControlRequest();
    $request->requestBody = new DisableControlRequestBody();
    $request->requestBody->controlIdentifier = 'error';
    $request->requestBody->targetIdentifier = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->disableControl($request);

    if ($response->disableControlOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableControl

This API call activates a control. It starts an asynchronous operation that creates AWS resources on the specified organizational unit and the accounts it contains. The resources created will vary according to the control that you specify.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableControlRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableControlRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableControlRequest();
    $request->requestBody = new EnableControlRequestBody();
    $request->requestBody->controlIdentifier = 'suscipit';
    $request->requestBody->targetIdentifier = 'molestiae';
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->enableControl($request);

    if ($response->enableControlOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getControlOperation

Returns the status of a particular <code>EnableControl</code> or <code>DisableControl</code> operation. Displays a message in case of error. Details for an operation are available for 90 days.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetControlOperationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetControlOperationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetControlOperationRequest();
    $request->requestBody = new GetControlOperationRequestBody();
    $request->requestBody->operationIdentifier = 'temporibus';
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'repellendus';

    $response = $sdk->sdk->getControlOperation($request);

    if ($response->getControlOperationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEnabledControls

Lists the controls enabled by AWS Control Tower on the specified organizational unit and the accounts it contains.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEnabledControlsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEnabledControlsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEnabledControlsRequest();
    $request->requestBody = new ListEnabledControlsRequestBody();
    $request->requestBody->maxResults = 957156;
    $request->requestBody->nextToken = 'quo';
    $request->requestBody->targetIdentifier = 'odit';
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'esse';
    $request->maxResults = 'totam';
    $request->nextToken = 'porro';

    $response = $sdk->sdk->listEnabledControls($request);

    if ($response->listEnabledControlsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
