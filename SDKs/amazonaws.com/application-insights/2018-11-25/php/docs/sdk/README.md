# SDK

## Overview

<fullname>Amazon CloudWatch Application Insights</fullname> <p> Amazon CloudWatch Application Insights is a service that helps you detect common problems with your applications. It enables you to pinpoint the source of issues in your applications (built with technologies such as Microsoft IIS, .NET, and Microsoft SQL Server), by providing key insights into detected problems.</p> <p>After you onboard your application, CloudWatch Application Insights identifies, recommends, and sets up metrics and logs. It continuously analyzes and correlates your metrics and logs for unusual behavior to surface actionable problems with your application. For example, if your application is slow and unresponsive and leading to HTTP 500 errors in your Application Load Balancer (ALB), Application Insights informs you that a memory pressure problem with your SQL Server database is occurring. It bases this analysis on impactful metrics and log errors. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/applicationinsights/>
### Available Operations

* [createApplication](#createapplication) - Adds an application that is created from a resource group.
* [createComponent](#createcomponent) - Creates a custom component by grouping similar standalone instances to monitor.
* [createLogPattern](#createlogpattern) - Adds an log pattern to a <code>LogPatternSet</code>.
* [deleteApplication](#deleteapplication) - Removes the specified application from monitoring. Does not delete the application.
* [deleteComponent](#deletecomponent) - Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.
* [deleteLogPattern](#deletelogpattern) - Removes the specified log pattern from a <code>LogPatternSet</code>.
* [describeApplication](#describeapplication) - Describes the application.
* [describeComponent](#describecomponent) - Describes a component and lists the resources that are grouped together in a component.
* [describeComponentConfiguration](#describecomponentconfiguration) - Describes the monitoring configuration of the component.
* [describeComponentConfigurationRecommendation](#describecomponentconfigurationrecommendation) - Describes the recommended monitoring configuration of the component.
* [describeLogPattern](#describelogpattern) - Describe a specific log pattern from a <code>LogPatternSet</code>.
* [describeObservation](#describeobservation) - Describes an anomaly or error with the application.
* [describeProblem](#describeproblem) - Describes an application problem.
* [describeProblemObservations](#describeproblemobservations) - Describes the anomalies or errors associated with the problem.
* [listApplications](#listapplications) - Lists the IDs of the applications that you are monitoring. 
* [listComponents](#listcomponents) - Lists the auto-grouped, standalone, and custom components of the application.
* [listConfigurationHistory](#listconfigurationhistory) - <p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: </p> <ul> <li> <p>INFO: creating a new alarm or updating an alarm threshold.</p> </li> <li> <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p> </li> <li> <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p> </li> </ul>
* [listLogPatternSets](#listlogpatternsets) - Lists the log pattern sets in the specific application.
* [listLogPatterns](#listlogpatterns) - Lists the log patterns in the specific log <code>LogPatternSet</code>.
* [listProblems](#listproblems) - Lists the problems with your application.
* [listTagsForResource](#listtagsforresource) - Retrieve a list of the tags (keys and values) that are associated with a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
* [tagResource](#tagresource) - <p>Add one or more tags (keys and values) to a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage application in different ways, such as by purpose, owner, environment, or other criteria. </p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
* [untagResource](#untagresource) - Remove one or more tags (keys and values) from a specified application.
* [updateApplication](#updateapplication) - Updates the application.
* [updateComponent](#updatecomponent) - Updates the custom component name and/or the list of resources that make up the component.
* [updateComponentConfiguration](#updatecomponentconfiguration) - Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by <code>DescribeComponentConfigurationRecommendation</code>. 
* [updateLogPattern](#updatelogpattern) - Adds a log pattern to a <code>LogPatternSet</code>.

## createApplication

Adds an application that is created from a resource group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GroupingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApplicationRequest();
    $request->createApplicationRequest = new CreateApplicationRequest();
    $request->createApplicationRequest->autoConfigEnabled = false;
    $request->createApplicationRequest->autoCreate = false;
    $request->createApplicationRequest->cweMonitorEnabled = false;
    $request->createApplicationRequest->groupingType = GroupingTypeEnum::ACCOUNT_BASED;
    $request->createApplicationRequest->opsCenterEnabled = false;
    $request->createApplicationRequest->opsItemSNSTopicArn = 'deserunt';
    $request->createApplicationRequest->resourceGroupName = 'suscipit';
    $request->createApplicationRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = CreateApplicationXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_CREATE_APPLICATION;

    $response = $sdk->sdk->createApplication($request);

    if ($response->createApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createComponent

Creates a custom component by grouping similar standalone instances to monitor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateComponentRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateComponentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateComponentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateComponentRequest();
    $request->createComponentRequest = new CreateComponentRequest();
    $request->createComponentRequest->componentName = 'minus';
    $request->createComponentRequest->resourceGroupName = 'placeat';
    $request->createComponentRequest->resourceList = [
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = CreateComponentXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_CREATE_COMPONENT;

    $response = $sdk->sdk->createComponent($request);

    if ($response->createComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLogPattern

Adds an log pattern to a <code>LogPatternSet</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLogPatternRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLogPatternRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateLogPatternXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLogPatternRequest();
    $request->createLogPatternRequest = new CreateLogPatternRequest();
    $request->createLogPatternRequest->pattern = 'ipsam';
    $request->createLogPatternRequest->patternName = 'repellendus';
    $request->createLogPatternRequest->patternSetName = 'sapiente';
    $request->createLogPatternRequest->rank = 778157;
    $request->createLogPatternRequest->resourceGroupName = 'odit';
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = CreateLogPatternXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_CREATE_LOG_PATTERN;

    $response = $sdk->sdk->createLogPattern($request);

    if ($response->createLogPatternResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApplication

Removes the specified application from monitoring. Does not delete the application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApplicationRequest();
    $request->deleteApplicationRequest = new DeleteApplicationRequest();
    $request->deleteApplicationRequest->resourceGroupName = 'totam';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = DeleteApplicationXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_DELETE_APPLICATION;

    $response = $sdk->sdk->deleteApplication($request);

    if ($response->deleteApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteComponent

Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteComponentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteComponentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteComponentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteComponentRequest();
    $request->deleteComponentRequest = new DeleteComponentRequest();
    $request->deleteComponentRequest->componentName = 'deleniti';
    $request->deleteComponentRequest->resourceGroupName = 'hic';
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = DeleteComponentXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_DELETE_COMPONENT;

    $response = $sdk->sdk->deleteComponent($request);

    if ($response->deleteComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLogPattern

Removes the specified log pattern from a <code>LogPatternSet</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLogPatternRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteLogPatternRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLogPatternXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLogPatternRequest();
    $request->deleteLogPatternRequest = new DeleteLogPatternRequest();
    $request->deleteLogPatternRequest->patternName = 'impedit';
    $request->deleteLogPatternRequest->patternSetName = 'cum';
    $request->deleteLogPatternRequest->resourceGroupName = 'esse';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = DeleteLogPatternXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_DELETE_LOG_PATTERN;

    $response = $sdk->sdk->deleteLogPattern($request);

    if ($response->deleteLogPatternResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeApplication

Describes the application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeApplicationRequest();
    $request->describeApplicationRequest = new DescribeApplicationRequest();
    $request->describeApplicationRequest->resourceGroupName = 'iste';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'laboriosam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = DescribeApplicationXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_DESCRIBE_APPLICATION;

    $response = $sdk->sdk->describeApplication($request);

    if ($response->describeApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeComponent

Describes a component and lists the resources that are grouped together in a component.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeComponentRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeComponentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeComponentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeComponentRequest();
    $request->describeComponentRequest = new DescribeComponentRequest();
    $request->describeComponentRequest->componentName = 'corporis';
    $request->describeComponentRequest->resourceGroupName = 'iste';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'est';
    $request->xAmzTarget = DescribeComponentXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_DESCRIBE_COMPONENT;

    $response = $sdk->sdk->describeComponent($request);

    if ($response->describeComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeComponentConfiguration

Describes the monitoring configuration of the component.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeComponentConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeComponentConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeComponentConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeComponentConfigurationRequest();
    $request->describeComponentConfigurationRequest = new DescribeComponentConfigurationRequest();
    $request->describeComponentConfigurationRequest->componentName = 'mollitia';
    $request->describeComponentConfigurationRequest->resourceGroupName = 'laborum';
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = DescribeComponentConfigurationXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_DESCRIBE_COMPONENT_CONFIGURATION;

    $response = $sdk->sdk->describeComponentConfiguration($request);

    if ($response->describeComponentConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeComponentConfigurationRecommendation

Describes the recommended monitoring configuration of the component.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeComponentConfigurationRecommendationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeComponentConfigurationRecommendationRequest;
use \OpenAPI\OpenAPI\Models\Shared\TierEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeComponentConfigurationRecommendationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeComponentConfigurationRecommendationRequest();
    $request->describeComponentConfigurationRecommendationRequest = new DescribeComponentConfigurationRecommendationRequest();
    $request->describeComponentConfigurationRecommendationRequest->componentName = 'nemo';
    $request->describeComponentConfigurationRecommendationRequest->resourceGroupName = 'minima';
    $request->describeComponentConfigurationRecommendationRequest->tier = TierEnum::JAVA_JMX;
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = DescribeComponentConfigurationRecommendationXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_DESCRIBE_COMPONENT_CONFIGURATION_RECOMMENDATION;

    $response = $sdk->sdk->describeComponentConfigurationRecommendation($request);

    if ($response->describeComponentConfigurationRecommendationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLogPattern

Describe a specific log pattern from a <code>LogPatternSet</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLogPatternRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeLogPatternRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLogPatternXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLogPatternRequest();
    $request->describeLogPatternRequest = new DescribeLogPatternRequest();
    $request->describeLogPatternRequest->patternName = 'dolorem';
    $request->describeLogPatternRequest->patternSetName = 'culpa';
    $request->describeLogPatternRequest->resourceGroupName = 'consequuntur';
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = DescribeLogPatternXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_DESCRIBE_LOG_PATTERN;

    $response = $sdk->sdk->describeLogPattern($request);

    if ($response->describeLogPatternResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeObservation

Describes an anomaly or error with the application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeObservationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeObservationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeObservationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeObservationRequest();
    $request->describeObservationRequest = new DescribeObservationRequest();
    $request->describeObservationRequest->observationId = 'velit';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'vitae';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = DescribeObservationXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_DESCRIBE_OBSERVATION;

    $response = $sdk->sdk->describeObservation($request);

    if ($response->describeObservationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeProblem

Describes an application problem.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProblemRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeProblemRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProblemXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeProblemRequest();
    $request->describeProblemRequest = new DescribeProblemRequest();
    $request->describeProblemRequest->problemId = 'odit';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'aut';
    $request->xAmzTarget = DescribeProblemXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_DESCRIBE_PROBLEM;

    $response = $sdk->sdk->describeProblem($request);

    if ($response->describeProblemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeProblemObservations

Describes the anomalies or errors associated with the problem.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProblemObservationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeProblemObservationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProblemObservationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeProblemObservationsRequest();
    $request->describeProblemObservationsRequest = new DescribeProblemObservationsRequest();
    $request->describeProblemObservationsRequest->problemId = 'quasi';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = DescribeProblemObservationsXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_DESCRIBE_PROBLEM_OBSERVATIONS;

    $response = $sdk->sdk->describeProblemObservations($request);

    if ($response->describeProblemObservationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApplications

Lists the IDs of the applications that you are monitoring. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListApplicationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListApplicationsRequest();
    $request->listApplicationsRequest = new ListApplicationsRequest();
    $request->listApplicationsRequest->maxResults = 468651;
    $request->listApplicationsRequest->nextToken = 'praesentium';
    $request->maxResults = 'voluptatibus';
    $request->nextToken = 'ipsa';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'ut';
    $request->xAmzTarget = ListApplicationsXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_LIST_APPLICATIONS;

    $response = $sdk->sdk->listApplications($request);

    if ($response->listApplicationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listComponents

Lists the auto-grouped, standalone, and custom components of the application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListComponentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListComponentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListComponentsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListComponentsRequest();
    $request->listComponentsRequest = new ListComponentsRequest();
    $request->listComponentsRequest->maxResults = 979587;
    $request->listComponentsRequest->nextToken = 'dicta';
    $request->listComponentsRequest->resourceGroupName = 'corporis';
    $request->maxResults = 'dolore';
    $request->nextToken = 'iusto';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'quae';
    $request->xAmzTarget = ListComponentsXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_LIST_COMPONENTS;

    $response = $sdk->sdk->listComponents($request);

    if ($response->listComponentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConfigurationHistory

<p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: </p> <ul> <li> <p>INFO: creating a new alarm or updating an alarm threshold.</p> </li> <li> <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p> </li> <li> <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListConfigurationHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListConfigurationHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationEventStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListConfigurationHistoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConfigurationHistoryRequest();
    $request->listConfigurationHistoryRequest = new ListConfigurationHistoryRequest();
    $request->listConfigurationHistoryRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-23T05:56:38.936Z');
    $request->listConfigurationHistoryRequest->eventStatus = ConfigurationEventStatusEnum::WARN;
    $request->listConfigurationHistoryRequest->maxResults = 566602;
    $request->listConfigurationHistoryRequest->nextToken = 'pariatur';
    $request->listConfigurationHistoryRequest->resourceGroupName = 'modi';
    $request->listConfigurationHistoryRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-15T00:41:38.329Z');
    $request->maxResults = 'voluptates';
    $request->nextToken = 'quasi';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->xAmzTarget = ListConfigurationHistoryXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_LIST_CONFIGURATION_HISTORY;

    $response = $sdk->sdk->listConfigurationHistory($request);

    if ($response->listConfigurationHistoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLogPatternSets

Lists the log pattern sets in the specific application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLogPatternSetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListLogPatternSetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListLogPatternSetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLogPatternSetsRequest();
    $request->listLogPatternSetsRequest = new ListLogPatternSetsRequest();
    $request->listLogPatternSetsRequest->maxResults = 667411;
    $request->listLogPatternSetsRequest->nextToken = 'quibusdam';
    $request->listLogPatternSetsRequest->resourceGroupName = 'explicabo';
    $request->maxResults = 'deserunt';
    $request->nextToken = 'distinctio';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'quos';
    $request->xAmzTarget = ListLogPatternSetsXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_LIST_LOG_PATTERN_SETS;

    $response = $sdk->sdk->listLogPatternSets($request);

    if ($response->listLogPatternSetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLogPatterns

Lists the log patterns in the specific log <code>LogPatternSet</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLogPatternsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListLogPatternsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListLogPatternsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLogPatternsRequest();
    $request->listLogPatternsRequest = new ListLogPatternsRequest();
    $request->listLogPatternsRequest->maxResults = 20107;
    $request->listLogPatternsRequest->nextToken = 'magni';
    $request->listLogPatternsRequest->patternSetName = 'assumenda';
    $request->listLogPatternsRequest->resourceGroupName = 'ipsam';
    $request->maxResults = 'alias';
    $request->nextToken = 'fugit';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = ListLogPatternsXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_LIST_LOG_PATTERNS;

    $response = $sdk->sdk->listLogPatterns($request);

    if ($response->listLogPatternsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProblems

Lists the problems with your application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProblemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListProblemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListProblemsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProblemsRequest();
    $request->listProblemsRequest = new ListProblemsRequest();
    $request->listProblemsRequest->componentName = 'eum';
    $request->listProblemsRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-31T00:30:19.135Z');
    $request->listProblemsRequest->maxResults = 576157;
    $request->listProblemsRequest->nextToken = 'aliquid';
    $request->listProblemsRequest->resourceGroupName = 'provident';
    $request->listProblemsRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-14T09:13:11.675Z');
    $request->maxResults = 'officia';
    $request->nextToken = 'dolor';
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = ListProblemsXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_LIST_PROBLEMS;

    $response = $sdk->sdk->listProblems($request);

    if ($response->listProblemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Retrieve a list of the tags (keys and values) that are associated with a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceARN = 'rerum';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'facere';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Add one or more tags (keys and values) to a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage application in different ways, such as by purpose, owner, environment, or other criteria. </p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceARN = 'accusamus';
    $request->tagResourceRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Remove one or more tags (keys and values) from a specified application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceARN = 'id';
    $request->untagResourceRequest->tagKeys = [
        'deleniti',
        'sapiente',
        'amet',
    ];
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApplication

Updates the application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApplicationRequest();
    $request->updateApplicationRequest = new UpdateApplicationRequest();
    $request->updateApplicationRequest->autoConfigEnabled = false;
    $request->updateApplicationRequest->cweMonitorEnabled = false;
    $request->updateApplicationRequest->opsCenterEnabled = false;
    $request->updateApplicationRequest->opsItemSNSTopicArn = 'nihil';
    $request->updateApplicationRequest->removeSNSTopic = false;
    $request->updateApplicationRequest->resourceGroupName = 'magnam';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = UpdateApplicationXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_UPDATE_APPLICATION;

    $response = $sdk->sdk->updateApplication($request);

    if ($response->updateApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateComponent

Updates the custom component name and/or the list of resources that make up the component.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateComponentRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateComponentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateComponentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateComponentRequest();
    $request->updateComponentRequest = new UpdateComponentRequest();
    $request->updateComponentRequest->componentName = 'eum';
    $request->updateComponentRequest->newComponentName = 'vero';
    $request->updateComponentRequest->resourceGroupName = 'aspernatur';
    $request->updateComponentRequest->resourceList = [
        'magnam',
    ];
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = UpdateComponentXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_UPDATE_COMPONENT;

    $response = $sdk->sdk->updateComponent($request);

    if ($response->updateComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateComponentConfiguration

Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by <code>DescribeComponentConfigurationRecommendation</code>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateComponentConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateComponentConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\TierEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateComponentConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateComponentConfigurationRequest();
    $request->updateComponentConfigurationRequest = new UpdateComponentConfigurationRequest();
    $request->updateComponentConfigurationRequest->autoConfigEnabled = false;
    $request->updateComponentConfigurationRequest->componentConfiguration = 'mollitia';
    $request->updateComponentConfigurationRequest->componentName = 'reiciendis';
    $request->updateComponentConfigurationRequest->monitor = false;
    $request->updateComponentConfigurationRequest->resourceGroupName = 'mollitia';
    $request->updateComponentConfigurationRequest->tier = TierEnum::DOT_NET_WEB;
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = UpdateComponentConfigurationXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_UPDATE_COMPONENT_CONFIGURATION;

    $response = $sdk->sdk->updateComponentConfiguration($request);

    if ($response->updateComponentConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLogPattern

Adds a log pattern to a <code>LogPatternSet</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLogPatternRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateLogPatternRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLogPatternXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLogPatternRequest();
    $request->updateLogPatternRequest = new UpdateLogPatternRequest();
    $request->updateLogPatternRequest->pattern = 'doloribus';
    $request->updateLogPatternRequest->patternName = 'debitis';
    $request->updateLogPatternRequest->patternSetName = 'eius';
    $request->updateLogPatternRequest->rank = 806194;
    $request->updateLogPatternRequest->resourceGroupName = 'deleniti';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'expedita';
    $request->xAmzTarget = UpdateLogPatternXAmzTargetEnum::EC2_WINDOWS_BARLEY_SERVICE_UPDATE_LOG_PATTERN;

    $response = $sdk->sdk->updateLogPattern($request);

    if ($response->updateLogPatternResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
