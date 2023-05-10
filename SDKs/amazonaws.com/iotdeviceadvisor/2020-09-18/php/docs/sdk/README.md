# SDK

## Overview

Amazon Web Services IoT Core Device Advisor is a cloud-based, fully managed test capability for validating IoT devices during device software development. Device Advisor provides pre-built tests that you can use to validate IoT devices for reliable and secure connectivity with Amazon Web Services IoT Core before deploying devices to production. By using Device Advisor, you can confirm that your devices can connect to Amazon Web Services IoT Core, follow security best practices and, if applicable, receive software updates from IoT Device Management. You can also download signed qualification reports to submit to the Amazon Web Services Partner Network to get your device qualified for the Amazon Web Services Partner Device Catalog without the need to send your device in and wait for it to be tested.

Amazon Web Services documentation
<https://docs.aws.amazon.com/iotdeviceadvisor/>
### Available Operations

* [createSuiteDefinition](#createsuitedefinition) - <p>Creates a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSuiteDefinition</a> action.</p>
* [deleteSuiteDefinition](#deletesuitedefinition) - <p>Deletes a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteSuiteDefinition</a> action.</p>
* [getEndpoint](#getendpoint) - Gets information about an Device Advisor endpoint.
* [getSuiteDefinition](#getsuitedefinition) - <p>Gets information about a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteDefinition</a> action.</p>
* [getSuiteRun](#getsuiterun) - <p>Gets information about a Device Advisor test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRun</a> action.</p>
* [getSuiteRunReport](#getsuiterunreport) - <p>Gets a report download link for a successful Device Advisor qualifying test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRunReport</a> action.</p>
* [listSuiteDefinitions](#listsuitedefinitions) - <p>Lists the Device Advisor test suites you have created.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteDefinitions</a> action.</p>
* [listSuiteRuns](#listsuiteruns) - <p>Lists runs of the specified Device Advisor test suite. You can list all runs of the test suite, or the runs of a specific version of the test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteRuns</a> action.</p>
* [listTagsForResource](#listtagsforresource) - <p>Lists the tags attached to an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTagsForResource</a> action.</p>
* [startSuiteRun](#startsuiterun) - <p>Starts a Device Advisor test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartSuiteRun</a> action.</p>
* [stopSuiteRun](#stopsuiterun) - <p>Stops a Device Advisor test suite run that is currently running.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StopSuiteRun</a> action.</p>
* [tagResource](#tagresource) - <p>Adds to and modifies existing tags of an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TagResource</a> action.</p>
* [untagResource](#untagresource) - <p>Removes tags from an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UntagResource</a> action.</p>
* [updateSuiteDefinition](#updatesuitedefinition) - <p>Updates a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateSuiteDefinition</a> action.</p>

## createSuiteDefinition

<p>Creates a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSuiteDefinition</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSuiteDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSuiteDefinitionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DeviceUnderTest;
use \OpenAPI\OpenAPI\Models\Shared\ProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSuiteDefinitionRequest();
    $request->requestBody = new CreateSuiteDefinitionRequestBody();
    $request->requestBody->suiteDefinitionConfiguration = new CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration();
    $request->requestBody->suiteDefinitionConfiguration->devicePermissionRoleArn = 'placeat';
    $request->requestBody->suiteDefinitionConfiguration->devices = [
        new DeviceUnderTest(),
        new DeviceUnderTest(),
        new DeviceUnderTest(),
    ];
    $request->requestBody->suiteDefinitionConfiguration->intendedForQualification = false;
    $request->requestBody->suiteDefinitionConfiguration->isLongDurationTest = false;
    $request->requestBody->suiteDefinitionConfiguration->protocol = ProtocolEnum::MQTT_V311;
    $request->requestBody->suiteDefinitionConfiguration->rootGroup = 'excepturi';
    $request->requestBody->suiteDefinitionConfiguration->suiteDefinitionName = 'nisi';
    $request->requestBody->tags = [
        'temporibus' => 'ab',
        'quis' => 'veritatis',
        'deserunt' => 'perferendis',
        'ipsam' => 'repellendus',
    ];
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->createSuiteDefinition($request);

    if ($response->createSuiteDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSuiteDefinition

<p>Deletes a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteSuiteDefinition</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSuiteDefinitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSuiteDefinitionRequest();
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'dicta';
    $request->suiteDefinitionId = 'nam';

    $response = $sdk->sdk->deleteSuiteDefinition($request);

    if ($response->deleteSuiteDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEndpoint

Gets information about an Device Advisor endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEndpointRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEndpointRequest();
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'totam';
    $request->certificateArn = 'beatae';
    $request->thingArn = 'commodi';

    $response = $sdk->sdk->getEndpoint($request);

    if ($response->getEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSuiteDefinition

<p>Gets information about a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteDefinition</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSuiteDefinitionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSuiteDefinitionRequest();
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->suiteDefinitionId = 'excepturi';
    $request->suiteDefinitionVersion = 'aspernatur';

    $response = $sdk->sdk->getSuiteDefinition($request);

    if ($response->getSuiteDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSuiteRun

<p>Gets information about a Device Advisor test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRun</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSuiteRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSuiteRunRequest();
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'natus';
    $request->suiteDefinitionId = 'laboriosam';
    $request->suiteRunId = 'hic';

    $response = $sdk->sdk->getSuiteRun($request);

    if ($response->getSuiteRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSuiteRunReport

<p>Gets a report download link for a successful Device Advisor qualifying test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRunReport</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSuiteRunReportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSuiteRunReportRequest();
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'saepe';
    $request->suiteDefinitionId = 'quidem';
    $request->suiteRunId = 'architecto';

    $response = $sdk->sdk->getSuiteRunReport($request);

    if ($response->getSuiteRunReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSuiteDefinitions

<p>Lists the Device Advisor test suites you have created.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteDefinitions</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSuiteDefinitionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSuiteDefinitionsRequest();
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->maxResults = 358152;
    $request->nextToken = 'explicabo';

    $response = $sdk->sdk->listSuiteDefinitions($request);

    if ($response->listSuiteDefinitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSuiteRuns

<p>Lists runs of the specified Device Advisor test suite. You can list all runs of the test suite, or the runs of a specific version of the test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteRuns</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSuiteRunsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSuiteRunsRequest();
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->maxResults = 438601;
    $request->nextToken = 'culpa';
    $request->suiteDefinitionId = 'doloribus';
    $request->suiteDefinitionVersion = 'sapiente';

    $response = $sdk->sdk->listSuiteRuns($request);

    if ($response->listSuiteRunsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

<p>Lists the tags attached to an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTagsForResource</a> action.</p>

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
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'repellat';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->resourceArn = 'occaecati';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startSuiteRun

<p>Starts a Device Advisor test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartSuiteRun</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartSuiteRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartSuiteRunRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartSuiteRunRequestBodySuiteRunConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DeviceUnderTest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartSuiteRunRequest();
    $request->requestBody = new StartSuiteRunRequestBody();
    $request->requestBody->suiteDefinitionVersion = 'numquam';
    $request->requestBody->suiteRunConfiguration = new StartSuiteRunRequestBodySuiteRunConfiguration();
    $request->requestBody->suiteRunConfiguration->parallelRun = false;
    $request->requestBody->suiteRunConfiguration->primaryDevice = new DeviceUnderTest();
    $request->requestBody->suiteRunConfiguration->primaryDevice->certificateArn = 'commodi';
    $request->requestBody->suiteRunConfiguration->primaryDevice->thingArn = 'quam';
    $request->requestBody->suiteRunConfiguration->selectedTestList = [
        'velit',
        'error',
    ];
    $request->requestBody->tags = [
        'quis' => 'vitae',
    ];
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->suiteDefinitionId = 'ipsam';

    $response = $sdk->sdk->startSuiteRun($request);

    if ($response->startSuiteRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopSuiteRun

<p>Stops a Device Advisor test suite run that is currently running.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StopSuiteRun</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopSuiteRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopSuiteRunRequest();
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'laborum';
    $request->suiteDefinitionId = 'quasi';
    $request->suiteRunId = 'reiciendis';

    $response = $sdk->sdk->stopSuiteRun($request);

    if ($response->stopSuiteRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Adds to and modifies existing tags of an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TagResource</a> action.</p>

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
        'vero' => 'nihil',
        'praesentium' => 'voluptatibus',
        'ipsa' => 'omnis',
        'voluptate' => 'cum',
    ];
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'corporis';
    $request->resourceArn = 'dolore';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

<p>Removes tags from an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UntagResource</a> action.</p>

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
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->resourceArn = 'quae';
    $request->tagKeys = [
        'quidem',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSuiteDefinition

<p>Updates a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateSuiteDefinition</a> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSuiteDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSuiteDefinitionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DeviceUnderTest;
use \OpenAPI\OpenAPI\Models\Shared\ProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSuiteDefinitionRequest();
    $request->requestBody = new UpdateSuiteDefinitionRequestBody();
    $request->requestBody->suiteDefinitionConfiguration = new UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration();
    $request->requestBody->suiteDefinitionConfiguration->devicePermissionRoleArn = 'molestias';
    $request->requestBody->suiteDefinitionConfiguration->devices = [
        new DeviceUnderTest(),
        new DeviceUnderTest(),
        new DeviceUnderTest(),
    ];
    $request->requestBody->suiteDefinitionConfiguration->intendedForQualification = false;
    $request->requestBody->suiteDefinitionConfiguration->isLongDurationTest = false;
    $request->requestBody->suiteDefinitionConfiguration->protocol = ProtocolEnum::MQTT_V5;
    $request->requestBody->suiteDefinitionConfiguration->rootGroup = 'modi';
    $request->requestBody->suiteDefinitionConfiguration->suiteDefinitionName = 'praesentium';
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'voluptates';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'itaque';
    $request->suiteDefinitionId = 'incidunt';

    $response = $sdk->sdk->updateSuiteDefinition($request);

    if ($response->updateSuiteDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
