# SDK

## Overview

<p> Amazon DevOps Guru is a fully managed service that helps you identify anomalous behavior in business critical operational applications. You specify the Amazon Web Services resources that you want DevOps Guru to cover, then the Amazon CloudWatch metrics and Amazon Web Services CloudTrail events related to those resources are analyzed. When anomalous behavior is detected, DevOps Guru creates an <i>insight</i> that includes recommendations, related events, and related metrics that can help you improve your operational applications. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html">What is Amazon DevOps Guru</a>. </p> <p> You can specify 1 or 2 Amazon Simple Notification Service topics so you are notified every time a new insight is created. You can also enable DevOps Guru to generate an OpsItem in Amazon Web Services Systems Manager for each insight to help you manage and track your work addressing insights. </p> <p> To learn about the DevOps Guru workflow, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html#how-it-works">How DevOps Guru works</a>. To learn about DevOps Guru concepts, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/concepts.html">Concepts in DevOps Guru</a>. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/devops-guru/>
### Available Operations

* [addNotificationChannel](#addnotificationchannel) - <p> Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important DevOps Guru events, such as when an insight is generated. </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for cross account Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see Permissions for cross account Amazon SNS topics.</p> <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>
* [deleteInsight](#deleteinsight) - Deletes the insight along with the associated anomalies, events and recommendations.
* [describeAccountHealth](#describeaccounthealth) -  Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in your Amazon Web Services account. 
* [describeAccountOverview](#describeaccountoverview) -  For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights. 
* [describeAnomaly](#describeanomaly) -  Returns details about an anomaly that you specify using its ID. 
* [describeEventSourcesConfig](#describeeventsourcesconfig) - Returns the integration status of services that are integrated with DevOps Guru as Consumer via EventBridge. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.
* [describeFeedback](#describefeedback) -  Returns the most recent feedback submitted in the current Amazon Web Services account and Region. 
* [describeInsight](#describeinsight) -  Returns details about an insight that you specify using its ID. 
* [describeOrganizationHealth](#describeorganizationhealth) - Returns active insights, predictive insights, and resource hours analyzed in last hour.
* [describeOrganizationOverview](#describeorganizationoverview) - Returns an overview of your organization's history based on the specified time range. The overview includes the total reactive and proactive insights.
* [describeOrganizationResourceCollectionHealth](#describeorganizationresourcecollectionhealth) - Provides an overview of your system's health. If additional member accounts are part of your organization, you can filter those accounts using the <code>AccountIds</code> field.
* [describeResourceCollectionHealth](#describeresourcecollectionhealth) -  Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR) for all closed insights in resource collections in your account. You specify the type of Amazon Web Services resources collection. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. 
* [describeServiceIntegration](#describeserviceintegration) -  Returns the integration status of services that are integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight. 
* [getCostEstimation](#getcostestimation) - Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.
* [getResourceCollection](#getresourcecollection) -  Returns lists Amazon Web Services resources that are of the specified resource collection type. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. 
* [listAnomaliesForInsight](#listanomaliesforinsight) -  Returns a list of the anomalies that belong to an insight that you specify using its ID. 
* [listAnomalousLogGroups](#listanomalousloggroups) -  Returns the list of log groups that contain log anomalies. 
* [listEvents](#listevents) -  Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters to specify which events are returned. 
* [listInsights](#listinsights) -  Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time and status (<code>ONGOING</code>, <code>CLOSED</code>, or <code>ANY</code>). 
* [listMonitoredResources](#listmonitoredresources) -  Returns the list of all log groups that are being monitored and tagged by DevOps Guru. 
* [listNotificationChannels](#listnotificationchannels) -  Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS). 
* [listOrganizationInsights](#listorganizationinsights) - Returns a list of insights associated with the account or OU Id.
* [listRecommendations](#listrecommendations) -  Returns a list of a specified insight's recommendations. Each recommendation includes a list of related metrics and a list of related events. 
* [putFeedback](#putfeedback) -  Collects customer feedback about the specified insight. 
* [removeNotificationChannel](#removenotificationchannel) -  Removes a notification channel from DevOps Guru. A notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. 
* [searchInsights](#searchinsights) - <p> Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code> or <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>
* [searchOrganizationInsights](#searchorganizationinsights) - <p> Returns a list of insights in your organization. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code>, <code>CLOSED</code>, and <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>
* [startCostEstimation](#startcostestimation) - Starts the creation of an estimate of the monthly cost to analyze your Amazon Web Services resources.
* [updateEventSourcesConfig](#updateeventsourcesconfig) - Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.
* [updateResourceCollection](#updateresourcecollection) -  Updates the collection of resources that DevOps Guru analyzes. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. This method also creates the IAM role required for you to use DevOps Guru. 
* [updateServiceIntegration](#updateserviceintegration) -  Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight. 

## addNotificationChannel

<p> Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important DevOps Guru events, such as when an insight is generated. </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for cross account Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see Permissions for cross account Amazon SNS topics.</p> <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddNotificationChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddNotificationChannelRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AddNotificationChannelRequestBodyConfig;
use \OpenAPI\OpenAPI\Models\Shared\NotificationFilterConfig;
use \OpenAPI\OpenAPI\Models\Shared\NotificationMessageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InsightSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\SnsChannelConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddNotificationChannelRequest();
    $request->requestBody = new AddNotificationChannelRequestBody();
    $request->requestBody->config = new AddNotificationChannelRequestBodyConfig();
    $request->requestBody->config->filters = new NotificationFilterConfig();
    $request->requestBody->config->filters->messageTypes = [
        NotificationMessageTypeEnum::CLOSED_INSIGHT,
        NotificationMessageTypeEnum::CLOSED_INSIGHT,
        NotificationMessageTypeEnum::NEW_ASSOCIATION,
        NotificationMessageTypeEnum::SEVERITY_UPGRADED,
    ];
    $request->requestBody->config->filters->severities = [
        InsightSeverityEnum::MEDIUM,
        InsightSeverityEnum::MEDIUM,
        InsightSeverityEnum::MEDIUM,
        InsightSeverityEnum::MEDIUM,
    ];
    $request->requestBody->config->sns = new SnsChannelConfig();
    $request->requestBody->config->sns->topicArn = 'recusandae';
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->addNotificationChannel($request);

    if ($response->addNotificationChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInsight

Deletes the insight along with the associated anomalies, events and recommendations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInsightRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInsightRequest();
    $request->id = 'dfc2ddf7-cc78-4ca1-ba92-8fc816742cb7';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->sdk->deleteInsight($request);

    if ($response->deleteInsightResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAccountHealth

 Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in your Amazon Web Services account. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAccountHealthRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAccountHealthRequest();
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'fuga';

    $response = $sdk->sdk->describeAccountHealth($request);

    if ($response->describeAccountHealthResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAccountOverview

 For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAccountOverviewRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAccountOverviewRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAccountOverviewRequest();
    $request->requestBody = new DescribeAccountOverviewRequestBody();
    $request->requestBody->fromTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-22T18:42:38.160Z');
    $request->requestBody->toTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-15T23:12:00.119Z');
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->describeAccountOverview($request);

    if ($response->describeAccountOverviewResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAnomaly

 Returns details about an anomaly that you specify using its ID. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAnomalyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAnomalyRequest();
    $request->accountId = 'laborum';
    $request->id = '2352c595-5907-4aff-9a3a-2fa946773925';
    $request->xAmzAlgorithm = 'vitae';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'animi';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'sequi';

    $response = $sdk->sdk->describeAnomaly($request);

    if ($response->describeAnomalyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEventSourcesConfig

Returns the integration status of services that are integrated with DevOps Guru as Consumer via EventBridge. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEventSourcesConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEventSourcesConfigRequest();
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->sdk->describeEventSourcesConfig($request);

    if ($response->describeEventSourcesConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFeedback

 Returns the most recent feedback submitted in the current Amazon Web Services account and Region. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFeedbackRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFeedbackRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFeedbackRequest();
    $request->requestBody = new DescribeFeedbackRequestBody();
    $request->requestBody->insightId = 'temporibus';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'praesentium';

    $response = $sdk->sdk->describeFeedback($request);

    if ($response->describeFeedbackResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeInsight

 Returns details about an insight that you specify using its ID. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInsightRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeInsightRequest();
    $request->accountId = 'voluptatibus';
    $request->id = '097b0074-f154-471b-9e6e-13b99d488e1e';
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';

    $response = $sdk->sdk->describeInsight($request);

    if ($response->describeInsightResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeOrganizationHealth

Returns active insights, predictive insights, and resource hours analyzed in last hour.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOrganizationHealthRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOrganizationHealthRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeOrganizationHealthRequest();
    $request->requestBody = new DescribeOrganizationHealthRequestBody();
    $request->requestBody->accountIds = [
        'explicabo',
        'deserunt',
        'distinctio',
        'quibusdam',
    ];
    $request->requestBody->organizationalUnitIds = [
        'modi',
        'qui',
    ];
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->describeOrganizationHealth($request);

    if ($response->describeOrganizationHealthResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeOrganizationOverview

Returns an overview of your organization's history based on the specified time range. The overview includes the total reactive and proactive insights.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOrganizationOverviewRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOrganizationOverviewRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeOrganizationOverviewRequest();
    $request->requestBody = new DescribeOrganizationOverviewRequestBody();
    $request->requestBody->accountIds = [
        'fugit',
    ];
    $request->requestBody->fromTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-11T04:17:07.569Z');
    $request->requestBody->organizationalUnitIds = [
        'facilis',
        'tempore',
    ];
    $request->requestBody->toTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-14T19:13:42.009Z');
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->describeOrganizationOverview($request);

    if ($response->describeOrganizationOverviewResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeOrganizationResourceCollectionHealth

Provides an overview of your system's health. If additional member accounts are part of your organization, you can filter those accounts using the <code>AccountIds</code> field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOrganizationResourceCollectionHealthRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOrganizationResourceCollectionHealthRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DescribeOrganizationResourceCollectionHealthRequestBodyOrganizationResourceCollectionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeOrganizationResourceCollectionHealthRequest();
    $request->nextToken = 'sint';
    $request->requestBody = new DescribeOrganizationResourceCollectionHealthRequestBody();
    $request->requestBody->accountIds = [
        'dolor',
        'debitis',
        'a',
    ];
    $request->requestBody->maxResults = 680056;
    $request->requestBody->nextToken = 'in';
    $request->requestBody->organizationResourceCollectionType = DescribeOrganizationResourceCollectionHealthRequestBodyOrganizationResourceCollectionTypeEnum::AWS_SERVICE;
    $request->requestBody->organizationalUnitIds = [
        'maiores',
        'rerum',
        'dicta',
        'magnam',
    ];
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'non';

    $response = $sdk->sdk->describeOrganizationResourceCollectionHealth($request);

    if ($response->describeOrganizationResourceCollectionHealthResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeResourceCollectionHealth

 Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR) for all closed insights in resource collections in your account. You specify the type of Amazon Web Services resources collection. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeResourceCollectionHealthRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeResourceCollectionHealthResourceCollectionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeResourceCollectionHealthRequest();
    $request->nextToken = 'occaecati';
    $request->resourceCollectionType = DescribeResourceCollectionHealthResourceCollectionTypeEnum::AWS_CLOUD_FORMATION;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'blanditiis';

    $response = $sdk->sdk->describeResourceCollectionHealth($request);

    if ($response->describeResourceCollectionHealthResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeServiceIntegration

 Returns the integration status of services that are integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeServiceIntegrationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeServiceIntegrationRequest();
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->describeServiceIntegration($request);

    if ($response->describeServiceIntegrationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCostEstimation

Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCostEstimationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCostEstimationRequest();
    $request->nextToken = 'omnis';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'labore';

    $response = $sdk->sdk->getCostEstimation($request);

    if ($response->getCostEstimationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourceCollection

 Returns lists Amazon Web Services resources that are of the specified resource collection type. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceCollectionResourceCollectionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourceCollectionRequest();
    $request->nextToken = 'labore';
    $request->resourceCollectionType = GetResourceCollectionResourceCollectionTypeEnum::AWS_SERVICE;
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'magnam';

    $response = $sdk->sdk->getResourceCollection($request);

    if ($response->getResourceCollectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAnomaliesForInsight

 Returns a list of the anomalies that belong to an insight that you specify using its ID. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAnomaliesForInsightRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAnomaliesForInsightRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListAnomaliesForInsightRequestBodyFilters;
use \OpenAPI\OpenAPI\Models\Shared\ServiceCollection;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAnomaliesForInsightRequestBodyStartTimeRange;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAnomaliesForInsightRequest();
    $request->insightId = 'et';
    $request->maxResults = 'excepturi';
    $request->nextToken = 'ullam';
    $request->requestBody = new ListAnomaliesForInsightRequestBody();
    $request->requestBody->accountId = 'provident';
    $request->requestBody->filters = new ListAnomaliesForInsightRequestBodyFilters();
    $request->requestBody->filters->serviceCollection = new ServiceCollection();
    $request->requestBody->filters->serviceCollection->serviceNames = [
        ServiceNameEnum::NAT_GATEWAY,
        ServiceNameEnum::API_GATEWAY,
        ServiceNameEnum::RDS,
    ];
    $request->requestBody->maxResults = 968962;
    $request->requestBody->nextToken = 'mollitia';
    $request->requestBody->startTimeRange = new ListAnomaliesForInsightRequestBodyStartTimeRange();
    $request->requestBody->startTimeRange->fromTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-27T12:46:27.682Z');
    $request->requestBody->startTimeRange->toTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-07T18:15:06.372Z');
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'eius';

    $response = $sdk->sdk->listAnomaliesForInsight($request);

    if ($response->listAnomaliesForInsightResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAnomalousLogGroups

 Returns the list of log groups that contain log anomalies. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAnomalousLogGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAnomalousLogGroupsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAnomalousLogGroupsRequest();
    $request->maxResults = 'maxime';
    $request->nextToken = 'deleniti';
    $request->requestBody = new ListAnomalousLogGroupsRequestBody();
    $request->requestBody->insightId = 'facilis';
    $request->requestBody->maxResults = 447926;
    $request->requestBody->nextToken = 'architecto';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'repellat';
    $request->xAmzSignedHeaders = 'quibusdam';

    $response = $sdk->sdk->listAnomalousLogGroups($request);

    if ($response->listAnomalousLogGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEvents

 Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters to specify which events are returned. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEventsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListEventsRequestBodyFilters;
use \OpenAPI\OpenAPI\Models\Shared\EventDataSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventClassEnum;
use \OpenAPI\OpenAPI\Models\Shared\EventTimeRange;
use \OpenAPI\OpenAPI\Models\Shared\ResourceCollection;
use \OpenAPI\OpenAPI\Models\Shared\CloudFormationCollection;
use \OpenAPI\OpenAPI\Models\Shared\TagCollection;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEventsRequest();
    $request->maxResults = 'sed';
    $request->nextToken = 'saepe';
    $request->requestBody = new ListEventsRequestBody();
    $request->requestBody->accountId = 'pariatur';
    $request->requestBody->filters = new ListEventsRequestBodyFilters();
    $request->requestBody->filters->dataSource = EventDataSourceEnum::AWS_CLOUD_TRAIL;
    $request->requestBody->filters->eventClass = EventClassEnum::INFRASTRUCTURE;
    $request->requestBody->filters->eventSource = 'praesentium';
    $request->requestBody->filters->eventTimeRange = new EventTimeRange();
    $request->requestBody->filters->eventTimeRange->fromTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-01T04:49:52.515Z');
    $request->requestBody->filters->eventTimeRange->toTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-22T15:30:46.869Z');
    $request->requestBody->filters->insightId = 'illum';
    $request->requestBody->filters->resourceCollection = new ResourceCollection();
    $request->requestBody->filters->resourceCollection->cloudFormation = new CloudFormationCollection();
    $request->requestBody->filters->resourceCollection->cloudFormation->stackNames = [
        'maxime',
        'ea',
        'excepturi',
        'odit',
    ];
    $request->requestBody->filters->resourceCollection->tags = [
        new TagCollection(),
        new TagCollection(),
    ];
    $request->requestBody->maxResults = 33222;
    $request->requestBody->nextToken = 'ab';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'autem';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'eaque';

    $response = $sdk->sdk->listEvents($request);

    if ($response->listEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInsights

 Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time and status (<code>ONGOING</code>, <code>CLOSED</code>, or <code>ANY</code>). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListInsightsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListInsightsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListInsightsRequestBodyStatusFilter;
use \OpenAPI\OpenAPI\Models\Shared\ListInsightsAnyStatusFilter;
use \OpenAPI\OpenAPI\Models\Shared\StartTimeRange;
use \OpenAPI\OpenAPI\Models\Shared\InsightTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListInsightsClosedStatusFilter;
use \OpenAPI\OpenAPI\Models\Shared\EndTimeRange;
use \OpenAPI\OpenAPI\Models\Shared\ListInsightsOngoingStatusFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInsightsRequest();
    $request->maxResults = 'pariatur';
    $request->nextToken = 'nemo';
    $request->requestBody = new ListInsightsRequestBody();
    $request->requestBody->maxResults = 975522;
    $request->requestBody->nextToken = 'perferendis';
    $request->requestBody->statusFilter = new ListInsightsRequestBodyStatusFilter();
    $request->requestBody->statusFilter->any = new ListInsightsAnyStatusFilter();
    $request->requestBody->statusFilter->any->startTimeRange = new StartTimeRange();
    $request->requestBody->statusFilter->any->startTimeRange->fromTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-23T08:05:27.776Z');
    $request->requestBody->statusFilter->any->startTimeRange->toTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-27T19:22:24.458Z');
    $request->requestBody->statusFilter->any->type = InsightTypeEnum::REACTIVE;
    $request->requestBody->statusFilter->closed = new ListInsightsClosedStatusFilter();
    $request->requestBody->statusFilter->closed->endTimeRange = new EndTimeRange();
    $request->requestBody->statusFilter->closed->endTimeRange->fromTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-23T15:50:52.666Z');
    $request->requestBody->statusFilter->closed->endTimeRange->toTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-28T17:02:52.151Z');
    $request->requestBody->statusFilter->closed->type = InsightTypeEnum::REACTIVE;
    $request->requestBody->statusFilter->ongoing = new ListInsightsOngoingStatusFilter();
    $request->requestBody->statusFilter->ongoing->type = InsightTypeEnum::PROACTIVE;
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'nesciunt';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'dolores';

    $response = $sdk->sdk->listInsights($request);

    if ($response->listInsightsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMonitoredResources

 Returns the list of all log groups that are being monitored and tagged by DevOps Guru. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMonitoredResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMonitoredResourcesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListMonitoredResourcesRequestBodyFilters;
use \OpenAPI\OpenAPI\Models\Shared\ResourcePermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeFilterEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMonitoredResourcesRequest();
    $request->maxResults = 'minus';
    $request->nextToken = 'quam';
    $request->requestBody = new ListMonitoredResourcesRequestBody();
    $request->requestBody->filters = new ListMonitoredResourcesRequestBodyFilters();
    $request->requestBody->filters->resourcePermission = ResourcePermissionEnum::FULL_PERMISSION;
    $request->requestBody->filters->resourceTypeFilters = [
        ResourceTypeFilterEnum::ELASTIC_LOAD_BALANCING_V2_LOAD_BALANCER,
        ResourceTypeFilterEnum::STEP_FUNCTIONS_ACTIVITY,
        ResourceTypeFilterEnum::STEP_FUNCTIONS_ACTIVITY,
        ResourceTypeFilterEnum::RDS_DB_INSTANCE,
    ];
    $request->requestBody->maxResults = 704415;
    $request->requestBody->nextToken = 'perspiciatis';
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->listMonitoredResources($request);

    if ($response->listMonitoredResourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNotificationChannels

 Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListNotificationChannelsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListNotificationChannelsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListNotificationChannelsRequest();
    $request->nextToken = 'rerum';
    $request->requestBody = new ListNotificationChannelsRequestBody();
    $request->requestBody->nextToken = 'adipisci';
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'pariatur';

    $response = $sdk->sdk->listNotificationChannels($request);

    if ($response->listNotificationChannelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOrganizationInsights

Returns a list of insights associated with the account or OU Id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListOrganizationInsightsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListOrganizationInsightsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListOrganizationInsightsRequestBodyStatusFilter;
use \OpenAPI\OpenAPI\Models\Shared\ListInsightsAnyStatusFilter;
use \OpenAPI\OpenAPI\Models\Shared\StartTimeRange;
use \OpenAPI\OpenAPI\Models\Shared\InsightTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListInsightsClosedStatusFilter;
use \OpenAPI\OpenAPI\Models\Shared\EndTimeRange;
use \OpenAPI\OpenAPI\Models\Shared\ListInsightsOngoingStatusFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOrganizationInsightsRequest();
    $request->maxResults = 'provident';
    $request->nextToken = 'nobis';
    $request->requestBody = new ListOrganizationInsightsRequestBody();
    $request->requestBody->accountIds = [
        'delectus',
        'quaerat',
        'quos',
    ];
    $request->requestBody->maxResults = 398221;
    $request->requestBody->nextToken = 'dolorem';
    $request->requestBody->organizationalUnitIds = [
        'dolor',
    ];
    $request->requestBody->statusFilter = new ListOrganizationInsightsRequestBodyStatusFilter();
    $request->requestBody->statusFilter->any = new ListInsightsAnyStatusFilter();
    $request->requestBody->statusFilter->any->startTimeRange = new StartTimeRange();
    $request->requestBody->statusFilter->any->startTimeRange->fromTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-13T03:45:19.154Z');
    $request->requestBody->statusFilter->any->startTimeRange->toTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-17T07:36:26.867Z');
    $request->requestBody->statusFilter->any->type = InsightTypeEnum::PROACTIVE;
    $request->requestBody->statusFilter->closed = new ListInsightsClosedStatusFilter();
    $request->requestBody->statusFilter->closed->endTimeRange = new EndTimeRange();
    $request->requestBody->statusFilter->closed->endTimeRange->fromTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-05T23:34:50.715Z');
    $request->requestBody->statusFilter->closed->endTimeRange->toTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-26T23:32:35.989Z');
    $request->requestBody->statusFilter->closed->type = InsightTypeEnum::PROACTIVE;
    $request->requestBody->statusFilter->ongoing = new ListInsightsOngoingStatusFilter();
    $request->requestBody->statusFilter->ongoing->type = InsightTypeEnum::REACTIVE;
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->listOrganizationInsights($request);

    if ($response->listOrganizationInsightsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRecommendations

 Returns a list of a specified insight's recommendations. Each recommendation includes a list of related metrics and a list of related events. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRecommendationsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListRecommendationsRequestBodyLocaleEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRecommendationsRequest();
    $request->nextToken = 'quidem';
    $request->requestBody = new ListRecommendationsRequestBody();
    $request->requestBody->accountId = 'voluptatibus';
    $request->requestBody->insightId = 'voluptas';
    $request->requestBody->locale = ListRecommendationsRequestBodyLocaleEnum::JA_JP;
    $request->requestBody->nextToken = 'eos';
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->listRecommendations($request);

    if ($response->listRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putFeedback

 Collects customer feedback about the specified insight. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutFeedbackRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutFeedbackRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutFeedbackRequestBodyInsightFeedback;
use \OpenAPI\OpenAPI\Models\Shared\InsightFeedbackOptionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutFeedbackRequest();
    $request->requestBody = new PutFeedbackRequestBody();
    $request->requestBody->insightFeedback = new PutFeedbackRequestBodyInsightFeedback();
    $request->requestBody->insightFeedback->feedback = InsightFeedbackOptionEnum::ALERT_TOO_SENSITIVE;
    $request->requestBody->insightFeedback->id = 'a89ebf73-7ae4-4203-8e5e-6a95d8a0d446';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'officiis';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'harum';

    $response = $sdk->sdk->putFeedback($request);

    if ($response->putFeedbackResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeNotificationChannel

 Removes a notification channel from DevOps Guru. A notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveNotificationChannelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveNotificationChannelRequest();
    $request->id = '73cf3be4-53f8-470b-b26b-5a73429cdb1a';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->removeNotificationChannel($request);

    if ($response->removeNotificationChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchInsights

<p> Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code> or <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchInsightsRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchInsightsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SearchInsightsRequestBodyFilters;
use \OpenAPI\OpenAPI\Models\Shared\ResourceCollection;
use \OpenAPI\OpenAPI\Models\Shared\CloudFormationCollection;
use \OpenAPI\OpenAPI\Models\Shared\TagCollection;
use \OpenAPI\OpenAPI\Models\Shared\ServiceCollection;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\InsightSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\InsightStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchInsightsRequestBodyStartTimeRange;
use \OpenAPI\OpenAPI\Models\Operations\SearchInsightsRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchInsightsRequest();
    $request->maxResults = 'quam';
    $request->nextToken = 'molestias';
    $request->requestBody = new SearchInsightsRequestBody();
    $request->requestBody->filters = new SearchInsightsRequestBodyFilters();
    $request->requestBody->filters->resourceCollection = new ResourceCollection();
    $request->requestBody->filters->resourceCollection->cloudFormation = new CloudFormationCollection();
    $request->requestBody->filters->resourceCollection->cloudFormation->stackNames = [
        'qui',
        'neque',
        'fugit',
        'magni',
    ];
    $request->requestBody->filters->resourceCollection->tags = [
        new TagCollection(),
        new TagCollection(),
    ];
    $request->requestBody->filters->serviceCollection = new ServiceCollection();
    $request->requestBody->filters->serviceCollection->serviceNames = [
        ServiceNameEnum::ELASTIC_BEANSTALK,
    ];
    $request->requestBody->filters->severities = [
        InsightSeverityEnum::HIGH,
        InsightSeverityEnum::LOW,
        InsightSeverityEnum::HIGH,
    ];
    $request->requestBody->filters->statuses = [
        InsightStatusEnum::CLOSED,
        InsightStatusEnum::ONGOING,
        InsightStatusEnum::CLOSED,
    ];
    $request->requestBody->maxResults = 217450;
    $request->requestBody->nextToken = 'veritatis';
    $request->requestBody->startTimeRange = new SearchInsightsRequestBodyStartTimeRange();
    $request->requestBody->startTimeRange->fromTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-23T21:35:15.992Z');
    $request->requestBody->startTimeRange->toTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-31T07:58:44.750Z');
    $request->requestBody->type = SearchInsightsRequestBodyTypeEnum::REACTIVE;
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->searchInsights($request);

    if ($response->searchInsightsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchOrganizationInsights

<p> Returns a list of insights in your organization. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code>, <code>CLOSED</code>, and <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchOrganizationInsightsRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchOrganizationInsightsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SearchOrganizationInsightsRequestBodyFilters;
use \OpenAPI\OpenAPI\Models\Shared\ResourceCollection;
use \OpenAPI\OpenAPI\Models\Shared\CloudFormationCollection;
use \OpenAPI\OpenAPI\Models\Shared\TagCollection;
use \OpenAPI\OpenAPI\Models\Shared\ServiceCollection;
use \OpenAPI\OpenAPI\Models\Shared\ServiceNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\InsightSeverityEnum;
use \OpenAPI\OpenAPI\Models\Shared\InsightStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchOrganizationInsightsRequestBodyStartTimeRange;
use \OpenAPI\OpenAPI\Models\Operations\SearchOrganizationInsightsRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchOrganizationInsightsRequest();
    $request->maxResults = 'quae';
    $request->nextToken = 'aut';
    $request->requestBody = new SearchOrganizationInsightsRequestBody();
    $request->requestBody->accountIds = [
        'itaque',
        'consequatur',
        'est',
    ];
    $request->requestBody->filters = new SearchOrganizationInsightsRequestBodyFilters();
    $request->requestBody->filters->resourceCollection = new ResourceCollection();
    $request->requestBody->filters->resourceCollection->cloudFormation = new CloudFormationCollection();
    $request->requestBody->filters->resourceCollection->cloudFormation->stackNames = [
        'porro',
        'doloribus',
        'ut',
        'facilis',
    ];
    $request->requestBody->filters->resourceCollection->tags = [
        new TagCollection(),
        new TagCollection(),
        new TagCollection(),
    ];
    $request->requestBody->filters->serviceCollection = new ServiceCollection();
    $request->requestBody->filters->serviceCollection->serviceNames = [
        ServiceNameEnum::APPLICATION_ELB,
    ];
    $request->requestBody->filters->severities = [
        InsightSeverityEnum::MEDIUM,
        InsightSeverityEnum::MEDIUM,
        InsightSeverityEnum::HIGH,
    ];
    $request->requestBody->filters->statuses = [
        InsightStatusEnum::CLOSED,
        InsightStatusEnum::CLOSED,
        InsightStatusEnum::ONGOING,
        InsightStatusEnum::ONGOING,
    ];
    $request->requestBody->maxResults = 961571;
    $request->requestBody->nextToken = 'voluptate';
    $request->requestBody->startTimeRange = new SearchOrganizationInsightsRequestBodyStartTimeRange();
    $request->requestBody->startTimeRange->fromTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-14T05:06:03.793Z');
    $request->requestBody->startTimeRange->toTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-10T23:11:25.857Z');
    $request->requestBody->type = SearchOrganizationInsightsRequestBodyTypeEnum::PROACTIVE;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'ducimus';

    $response = $sdk->sdk->searchOrganizationInsights($request);

    if ($response->searchOrganizationInsightsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startCostEstimation

Starts the creation of an estimate of the monthly cost to analyze your Amazon Web Services resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartCostEstimationRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartCostEstimationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartCostEstimationRequestBodyResourceCollection;
use \OpenAPI\OpenAPI\Models\Shared\CloudFormationCostEstimationResourceCollectionFilter;
use \OpenAPI\OpenAPI\Models\Shared\TagCostEstimationResourceCollectionFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartCostEstimationRequest();
    $request->requestBody = new StartCostEstimationRequestBody();
    $request->requestBody->clientToken = 'dolore';
    $request->requestBody->resourceCollection = new StartCostEstimationRequestBodyResourceCollection();
    $request->requestBody->resourceCollection->cloudFormation = new CloudFormationCostEstimationResourceCollectionFilter();
    $request->requestBody->resourceCollection->cloudFormation->stackNames = [
        'illum',
        'sequi',
        'natus',
        'impedit',
    ];
    $request->requestBody->resourceCollection->tags = [
        new TagCostEstimationResourceCollectionFilter(),
    ];
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'exercitationem';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'doloribus';

    $response = $sdk->sdk->startCostEstimation($request);

    if ($response->startCostEstimationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEventSourcesConfig

Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEventSourcesConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEventSourcesConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEventSourcesConfigRequestBodyEventSources;
use \OpenAPI\OpenAPI\Models\Shared\AmazonCodeGuruProfilerIntegration;
use \OpenAPI\OpenAPI\Models\Shared\EventSourceOptInStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEventSourcesConfigRequest();
    $request->requestBody = new UpdateEventSourcesConfigRequestBody();
    $request->requestBody->eventSources = new UpdateEventSourcesConfigRequestBodyEventSources();
    $request->requestBody->eventSources->amazonCodeGuruProfiler = new AmazonCodeGuruProfilerIntegration();
    $request->requestBody->eventSources->amazonCodeGuruProfiler->status = EventSourceOptInStatusEnum::ENABLED;
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'ducimus';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->updateEventSourcesConfig($request);

    if ($response->updateEventSourcesConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateResourceCollection

 Updates the collection of resources that DevOps Guru analyzes. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. This method also creates the IAM role required for you to use DevOps Guru. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResourceCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResourceCollectionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResourceCollectionRequestBodyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResourceCollectionRequestBodyResourceCollection;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCloudFormationCollectionFilter;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTagCollectionFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateResourceCollectionRequest();
    $request->requestBody = new UpdateResourceCollectionRequestBody();
    $request->requestBody->action = UpdateResourceCollectionRequestBodyActionEnum::ADD;
    $request->requestBody->resourceCollection = new UpdateResourceCollectionRequestBodyResourceCollection();
    $request->requestBody->resourceCollection->cloudFormation = new UpdateCloudFormationCollectionFilter();
    $request->requestBody->resourceCollection->cloudFormation->stackNames = [
        'possimus',
        'magnam',
    ];
    $request->requestBody->resourceCollection->tags = [
        new UpdateTagCollectionFilter(),
    ];
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'ex';

    $response = $sdk->sdk->updateResourceCollection($request);

    if ($response->updateResourceCollectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceIntegration

 Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceIntegrationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceIntegrationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceIntegrationRequestBodyServiceIntegration;
use \OpenAPI\OpenAPI\Models\Shared\LogsAnomalyDetectionIntegrationConfig;
use \OpenAPI\OpenAPI\Models\Shared\OptInStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OpsCenterIntegrationConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceIntegrationRequest();
    $request->requestBody = new UpdateServiceIntegrationRequestBody();
    $request->requestBody->serviceIntegration = new UpdateServiceIntegrationRequestBodyServiceIntegration();
    $request->requestBody->serviceIntegration->logsAnomalyDetection = new LogsAnomalyDetectionIntegrationConfig();
    $request->requestBody->serviceIntegration->logsAnomalyDetection->optInStatus = OptInStatusEnum::DISABLED;
    $request->requestBody->serviceIntegration->opsCenter = new OpsCenterIntegrationConfig();
    $request->requestBody->serviceIntegration->opsCenter->optInStatus = OptInStatusEnum::DISABLED;
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'impedit';

    $response = $sdk->sdk->updateServiceIntegration($request);

    if ($response->updateServiceIntegrationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
