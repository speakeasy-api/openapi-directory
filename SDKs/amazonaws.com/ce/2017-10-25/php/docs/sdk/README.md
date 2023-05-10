# SDK

## Overview

<p>You can use the Cost Explorer API to programmatically query your cost and usage data. You can query for aggregated data such as total monthly costs or total daily usage. You can also query for granular data. This might include the number of daily write operations for Amazon DynamoDB database tables in your production environment. </p> <p>Service Endpoint</p> <p>The Cost Explorer API provides the following endpoint:</p> <ul> <li> <p> <code>https://ce.us-east-1.amazonaws.com</code> </p> </li> </ul> <p>For information about the costs that are associated with the Cost Explorer API, see <a href="http://aws.amazon.com/aws-cost-management/pricing/">Amazon Web Services Cost Management Pricing</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ce/>
### Available Operations

* [createAnomalyMonitor](#createanomalymonitor) - Creates a new cost anomaly detection monitor with the requested type and monitor specification. 
* [createAnomalySubscription](#createanomalysubscription) - Adds an alert subscription to a cost anomaly detection monitor. You can use each subscription to define subscribers with email or SNS notifications. Email subscribers can set an absolute or percentage threshold and a time frequency for receiving notifications. 
* [createCostCategoryDefinition](#createcostcategorydefinition) - Creates a new Cost Category with the requested name and rules.
* [deleteAnomalyMonitor](#deleteanomalymonitor) - Deletes a cost anomaly monitor. 
* [deleteAnomalySubscription](#deleteanomalysubscription) - Deletes a cost anomaly subscription. 
* [deleteCostCategoryDefinition](#deletecostcategorydefinition) - Deletes a Cost Category. Expenses from this month going forward will no longer be categorized with this Cost Category.
* [describeCostCategoryDefinition](#describecostcategorydefinition) - <p>Returns the name, Amazon Resource Name (ARN), rules, definition, and effective dates of a Cost Category that's defined in the account.</p> <p>You have the option to use <code>EffectiveOn</code> to return a Cost Category that's active on a specific date. If there's no <code>EffectiveOn</code> specified, you see a Cost Category that's effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. </p>
* [getAnomalies](#getanomalies) - Retrieves all of the cost anomalies detected on your account during the time period that's specified by the <code>DateInterval</code> object. Anomalies are available for up to 90 days.
* [getAnomalyMonitors](#getanomalymonitors) - Retrieves the cost anomaly monitor definitions for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). 
* [getAnomalySubscriptions](#getanomalysubscriptions) - Retrieves the cost anomaly subscription objects for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). 
* [getCostAndUsage](#getcostandusage) - <p>Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric that you want the request to return. For example, you can specify <code>BlendedCosts</code> or <code>UsageQuantity</code>. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts.</p> <p>For information about filter limitations, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-limits.html">Quotas and restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p>
* [getCostAndUsageWithResources](#getcostandusagewithresources) - <p>Retrieves cost and usage metrics with resources for your account. You can specify which cost and usage-related metric, such as <code>BlendedCosts</code> or <code>UsageQuantity</code>, that you want the request to return. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud – Compute service only.</p> <note> <p>This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information about how to access the Settings page, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-access.html">Controlling Access for Cost Explorer</a> in the <i>Billing and Cost Management User Guide</i>.</p> </note>
* [getCostCategories](#getcostcategories) - <p>Retrieves an array of Cost Category names and values incurred cost.</p> <note> <p>If some Cost Category names and values are not associated with any cost, they will not be returned by this API.</p> </note>
* [getCostForecast](#getcostforecast) - Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs. 
* [getDimensionValues](#getdimensionvalues) - Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. 
* [getReservationCoverage](#getreservationcoverage) - <p>Retrieves the reservation coverage for your account, which you can use to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data about reservation usage by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>TAG</p> </li> <li> <p>TENANCY</p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation. </p>
* [getReservationPurchaseRecommendation](#getreservationpurchaserecommendation) - <p>Gets recommendations for reservation purchases. These recommendations might help you to reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing.</p> <p>Amazon Web Services generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After Amazon Web Services has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of Reserved Instance (RI) to purchase to maximize your estimated savings. </p> <p>For example, Amazon Web Services automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. Amazon Web Services recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible Reserved Instance (RI). Amazon Web Services also shows the equal number of normalized units. This way, you can purchase any instance size that you want. For this example, your RI recommendation is for <code>c4.large</code> because that is the smallest size instance in the c4 instance family.</p>
* [getReservationUtilization](#getreservationutilization) - Retrieves the reservation utilization for your account. Management account in an organization have access to member accounts. You can filter data by dimensions in a time period. You can use <code>GetDimensionValues</code> to determine the possible dimension values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>. 
* [getRightsizingRecommendation](#getrightsizingrecommendation) - <p>Creates recommendations that help you save cost by identifying idle and underutilized Amazon EC2 instances.</p> <p>Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics. For more information about calculation and function, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-rightsizing.html">Optimizing Your Cost with Rightsizing Recommendations</a> in the <i>Billing and Cost Management User Guide</i>.</p>
* [getSavingsPlansCoverage](#getsavingsplanscoverage) - <p>Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data for Savings Plans usage with the following dimensions:</p> <ul> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>SERVICE</code> </p> </li> <li> <p> <code>INSTANCE_FAMILY</code> </p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation.</p>
* [getSavingsPlansPurchaseRecommendation](#getsavingsplanspurchaserecommendation) - Retrieves the Savings Plans recommendations for your account. First use <code>StartSavingsPlansPurchaseRecommendationGeneration</code> to generate a new set of recommendations, and then use <code>GetSavingsPlansPurchaseRecommendation</code> to retrieve them.
* [getSavingsPlansUtilization](#getsavingsplansutilization) - <p>Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p>You can't group by any dimension values for <code>GetSavingsPlansUtilization</code>.</p> </note>
* [getSavingsPlansUtilizationDetails](#getsavingsplansutilizationdetails) - <p>Retrieves attribute data along with aggregate utilization and savings data for a given time period. This doesn't support granular or grouped data (daily/monthly) in response. You can't retrieve data by dates in a single response similar to <code>GetSavingsPlanUtilization</code>, but you have the option to make multiple calls to <code>GetSavingsPlanUtilizationDetails</code> by providing individual dates. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p> <code>GetSavingsPlanUtilizationDetails</code> internally groups data by <code>SavingsPlansArn</code>.</p> </note>
* [getTags](#gettags) - Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. 
* [getUsageForecast](#getusageforecast) - Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage. 
* [listCostAllocationTags](#listcostallocationtags) - Get a list of cost allocation tags. All inputs in the API are optional and serve as filters. By default, all cost allocation tags are returned. 
* [listCostCategoryDefinitions](#listcostcategorydefinitions) - Returns the name, Amazon Resource Name (ARN), <code>NumberOfRules</code> and effective dates of all Cost Categories defined in the account. You have the option to use <code>EffectiveOn</code> to return a list of Cost Categories that were active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see Cost Categories that are effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. <code>ListCostCategoryDefinitions</code> supports pagination. The request can have a <code>MaxResults</code> range up to 100.
* [listSavingsPlansPurchaseRecommendationGeneration](#listsavingsplanspurchaserecommendationgeneration) - Retrieves a list of your historical recommendation generations within the past 30 days.
* [listTagsForResource](#listtagsforresource) - Returns a list of resource tags associated with the resource specified by the Amazon Resource Name (ARN). 
* [provideAnomalyFeedback](#provideanomalyfeedback) - Modifies the feedback property of a given cost anomaly. 
* [startSavingsPlansPurchaseRecommendationGeneration](#startsavingsplanspurchaserecommendationgeneration) - <p>Requests a Savings Plans recommendation generation. This enables you to calculate a fresh set of Savings Plans recommendations that takes your latest usage data and current Savings Plans inventory into account. You can refresh Savings Plans recommendations up to three times daily for a consolidated billing family.</p> <note> <p> <code>StartSavingsPlansPurchaseRecommendationGeneration</code> has no request syntax because no input parameters are needed to support this operation.</p> </note>
* [tagResource](#tagresource) - <p>An API operation for adding one or more tags (key-value pairs) to a resource.</p> <p>You can use the <code>TagResource</code> operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value you specify replaces the previous value for that tag.</p> <p>Although the maximum number of array members is 200, user-tag maximum is 50. The remaining are reserved for Amazon Web Services use.</p>
* [untagResource](#untagresource) - Removes one or more tags from a resource. Specify only tag keys in your request. Don't specify the value. 
* [updateAnomalyMonitor](#updateanomalymonitor) - Updates an existing cost anomaly monitor. The changes made are applied going forward, and doesn't change anomalies detected in the past. 
* [updateAnomalySubscription](#updateanomalysubscription) - Updates an existing cost anomaly monitor subscription. 
* [updateCostAllocationTagsStatus](#updatecostallocationtagsstatus) - Updates status for cost allocation tags in bulk, with maximum batch size of 20. If the tag status that's updated is the same as the existing tag status, the request doesn't fail. Instead, it doesn't have any effect on the tag status (for example, activating the active tag). 
* [updateCostCategoryDefinition](#updatecostcategorydefinition) - Updates an existing Cost Category. Changes made to the Cost Category rules will be used to categorize the current month’s expenses and future expenses. This won’t change categorization for the previous months.

## createAnomalyMonitor

Creates a new cost anomaly detection monitor with the requested type and monitor specification. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAnomalyMonitorRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAnomalyMonitorRequest;
use \OpenAPI\OpenAPI\Models\Shared\AnomalyMonitor;
use \OpenAPI\OpenAPI\Models\Shared\MonitorDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Expression;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryValues;
use \OpenAPI\OpenAPI\Models\Shared\MatchOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValues;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagValues;
use \OpenAPI\OpenAPI\Models\Shared\MonitorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTag;
use \OpenAPI\OpenAPI\Models\Operations\CreateAnomalyMonitorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAnomalyMonitorRequest();
    $request->createAnomalyMonitorRequest = new CreateAnomalyMonitorRequest();
    $request->createAnomalyMonitorRequest->anomalyMonitor = new AnomalyMonitor();
    $request->createAnomalyMonitorRequest->anomalyMonitor->creationDate = 'maiores';
    $request->createAnomalyMonitorRequest->anomalyMonitor->dimensionalValueCount = 473608;
    $request->createAnomalyMonitorRequest->anomalyMonitor->lastEvaluatedDate = 'quod';
    $request->createAnomalyMonitorRequest->anomalyMonitor->lastUpdatedDate = 'quod';
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorArn = 'esse';
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorDimension = MonitorDimensionEnum::SERVICE;
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorName = 'totam';
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification = new Expression();
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->and = [
        new Expression(),
        new Expression(),
        new Expression(),
        new Expression(),
    ];
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->costCategories = new CostCategoryValues();
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->costCategories->key = 'dolorum';
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->costCategories->matchOptions = [
        MatchOptionEnum::CASE_SENSITIVE,
    ];
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->costCategories->values = [
        'occaecati',
        'fugit',
        'deleniti',
    ];
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->dimensions = new DimensionValues();
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->dimensions->key = DimensionEnum::ANOMALY_TOTAL_IMPACT_ABSOLUTE;
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->dimensions->matchOptions = [
        MatchOptionEnum::CONTAINS,
        MatchOptionEnum::EQUALS,
        MatchOptionEnum::ENDS_WITH,
        MatchOptionEnum::ENDS_WITH,
    ];
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->dimensions->values = [
        'qui',
        'impedit',
    ];
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->not = new Expression();
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->or = [
        new Expression(),
        new Expression(),
        new Expression(),
    ];
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->tags = new TagValues();
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->tags->key = 'esse';
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->tags->matchOptions = [
        MatchOptionEnum::CONTAINS,
    ];
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorSpecification->tags->values = [
        'perferendis',
    ];
    $request->createAnomalyMonitorRequest->anomalyMonitor->monitorType = MonitorTypeEnum::DIMENSIONAL;
    $request->createAnomalyMonitorRequest->resourceTags = [
        new ResourceTag(),
        new ResourceTag(),
        new ResourceTag(),
    ];
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = CreateAnomalyMonitorXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_CREATE_ANOMALY_MONITOR;

    $response = $sdk->sdk->createAnomalyMonitor($request);

    if ($response->createAnomalyMonitorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAnomalySubscription

Adds an alert subscription to a cost anomaly detection monitor. You can use each subscription to define subscribers with email or SNS notifications. Email subscribers can set an absolute or percentage threshold and a time frequency for receiving notifications. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAnomalySubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAnomalySubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AnomalySubscription;
use \OpenAPI\OpenAPI\Models\Shared\AnomalySubscriptionFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Subscriber;
use \OpenAPI\OpenAPI\Models\Shared\SubscriberStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Expression;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryValues;
use \OpenAPI\OpenAPI\Models\Shared\MatchOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValues;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagValues;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTag;
use \OpenAPI\OpenAPI\Models\Operations\CreateAnomalySubscriptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAnomalySubscriptionRequest();
    $request->createAnomalySubscriptionRequest = new CreateAnomalySubscriptionRequest();
    $request->createAnomalySubscriptionRequest->anomalySubscription = new AnomalySubscription();
    $request->createAnomalySubscriptionRequest->anomalySubscription->accountId = 'fuga';
    $request->createAnomalySubscriptionRequest->anomalySubscription->frequency = AnomalySubscriptionFrequencyEnum::IMMEDIATE;
    $request->createAnomalySubscriptionRequest->anomalySubscription->monitorArnList = [
        'iste',
        'iure',
    ];
    $request->createAnomalySubscriptionRequest->anomalySubscription->subscribers = [
        new Subscriber(),
        new Subscriber(),
        new Subscriber(),
        new Subscriber(),
    ];
    $request->createAnomalySubscriptionRequest->anomalySubscription->subscriptionArn = 'quidem';
    $request->createAnomalySubscriptionRequest->anomalySubscription->subscriptionName = 'architecto';
    $request->createAnomalySubscriptionRequest->anomalySubscription->threshold = 602.25;
    $request->createAnomalySubscriptionRequest->anomalySubscription->thresholdExpression = new Expression();
    $request->createAnomalySubscriptionRequest->anomalySubscription->thresholdExpression->and = [
        new Expression(),
        new Expression(),
        new Expression(),
        new Expression(),
    ];
    $request->createAnomalySubscriptionRequest->anomalySubscription->thresholdExpression->costCategories = new CostCategoryValues();
    $request->createAnomalySubscriptionRequest->anomalySubscription->thresholdExpression->costCategories->key = 'est';
    $request->createAnomalySubscriptionRequest->anomalySubscription->thresholdExpression->costCategories->matchOptions = [
        MatchOptionEnum::CASE_SENSITIVE,
        MatchOptionEnum::ABSENT,
        MatchOptionEnum::ABSENT,
    ];
    $request->createAnomalySubscriptionRequest->anomalySubscription->thresholdExpression->costCategories->values = [
        'explicabo',
        'nobis',
    ];
    $request->createAnomalySubscriptionRequest->anomalySubscription->thresholdExpression->dimensions = new DimensionValues();
    $request->createAnomalySubscriptionRequest->anomalySubscription->thresholdExpression->dimensions->key = DimensionEnum::USAGE_TYPE_GROUP;
    $request->createAnomalySubscriptionRequest->anomalySubscription->thresholdExpression->dimensions->matchOptions = [
        MatchOptionEnum::STARTS_WITH,
        MatchOptionEnum::STARTS_WITH,
        MatchOptionEnum::CONTAINS,
    ];
    $request->createAnomalySubscriptionRequest->anomalySubscription->thresholdExpression->dimensions->values = [
        'iure',
    ];
    $request->createAnomalySubscriptionRequest->anomalySubscription->thresholdExpression->not = new Expression();
    $request->createAnomalySubscriptionRequest->anomalySubscription->thresholdExpression->or = [
        new Expression(),
        new Expression(),
        new Expression(),
    ];
    $request->createAnomalySubscriptionRequest->anomalySubscription->thresholdExpression->tags = new TagValues();
    $request->createAnomalySubscriptionRequest->anomalySubscription->thresholdExpression->tags->key = 'doloribus';
    $request->createAnomalySubscriptionRequest->anomalySubscription->thresholdExpression->tags->matchOptions = [
        MatchOptionEnum::EQUALS,
        MatchOptionEnum::CASE_SENSITIVE,
        MatchOptionEnum::ABSENT,
        MatchOptionEnum::CASE_SENSITIVE,
    ];
    $request->createAnomalySubscriptionRequest->anomalySubscription->thresholdExpression->tags->values = [
        'repellat',
    ];
    $request->createAnomalySubscriptionRequest->resourceTags = [
        new ResourceTag(),
        new ResourceTag(),
        new ResourceTag(),
    ];
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = CreateAnomalySubscriptionXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_CREATE_ANOMALY_SUBSCRIPTION;

    $response = $sdk->sdk->createAnomalySubscription($request);

    if ($response->createAnomalySubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCostCategoryDefinition

Creates a new Cost Category with the requested name and rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCostCategoryDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCostCategoryDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTag;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryRuleVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryRule;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryInheritedValueDimension;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryInheritedValueDimensionNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\Expression;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryValues;
use \OpenAPI\OpenAPI\Models\Shared\MatchOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValues;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagValues;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryRuleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CostCategorySplitChargeRule;
use \OpenAPI\OpenAPI\Models\Shared\CostCategorySplitChargeMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\CostCategorySplitChargeRuleParameter;
use \OpenAPI\OpenAPI\Models\Shared\CostCategorySplitChargeRuleParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCostCategoryDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCostCategoryDefinitionRequest();
    $request->createCostCategoryDefinitionRequest = new CreateCostCategoryDefinitionRequest();
    $request->createCostCategoryDefinitionRequest->defaultValue = 'quia';
    $request->createCostCategoryDefinitionRequest->effectiveStart = 'quis';
    $request->createCostCategoryDefinitionRequest->name = 'Kayla O'Kon';
    $request->createCostCategoryDefinitionRequest->resourceTags = [
        new ResourceTag(),
        new ResourceTag(),
        new ResourceTag(),
        new ResourceTag(),
    ];
    $request->createCostCategoryDefinitionRequest->ruleVersion = CostCategoryRuleVersionEnum::COST_CATEGORY_EXPRESSION_V1;
    $request->createCostCategoryDefinitionRequest->rules = [
        new CostCategoryRule(),
    ];
    $request->createCostCategoryDefinitionRequest->splitChargeRules = [
        new CostCategorySplitChargeRule(),
        new CostCategorySplitChargeRule(),
        new CostCategorySplitChargeRule(),
        new CostCategorySplitChargeRule(),
    ];
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->xAmzTarget = CreateCostCategoryDefinitionXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_CREATE_COST_CATEGORY_DEFINITION;

    $response = $sdk->sdk->createCostCategoryDefinition($request);

    if ($response->createCostCategoryDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAnomalyMonitor

Deletes a cost anomaly monitor. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAnomalyMonitorRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAnomalyMonitorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAnomalyMonitorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAnomalyMonitorRequest();
    $request->deleteAnomalyMonitorRequest = new DeleteAnomalyMonitorRequest();
    $request->deleteAnomalyMonitorRequest->monitorArn = 'laborum';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = DeleteAnomalyMonitorXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_DELETE_ANOMALY_MONITOR;

    $response = $sdk->sdk->deleteAnomalyMonitor($request);

    if ($response->deleteAnomalyMonitorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAnomalySubscription

Deletes a cost anomaly subscription. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAnomalySubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAnomalySubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAnomalySubscriptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAnomalySubscriptionRequest();
    $request->deleteAnomalySubscriptionRequest = new DeleteAnomalySubscriptionRequest();
    $request->deleteAnomalySubscriptionRequest->subscriptionArn = 'ipsa';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'ut';
    $request->xAmzTarget = DeleteAnomalySubscriptionXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_DELETE_ANOMALY_SUBSCRIPTION;

    $response = $sdk->sdk->deleteAnomalySubscription($request);

    if ($response->deleteAnomalySubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCostCategoryDefinition

Deletes a Cost Category. Expenses from this month going forward will no longer be categorized with this Cost Category.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCostCategoryDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteCostCategoryDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCostCategoryDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCostCategoryDefinitionRequest();
    $request->deleteCostCategoryDefinitionRequest = new DeleteCostCategoryDefinitionRequest();
    $request->deleteCostCategoryDefinitionRequest->costCategoryArn = 'maiores';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = DeleteCostCategoryDefinitionXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_DELETE_COST_CATEGORY_DEFINITION;

    $response = $sdk->sdk->deleteCostCategoryDefinition($request);

    if ($response->deleteCostCategoryDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCostCategoryDefinition

<p>Returns the name, Amazon Resource Name (ARN), rules, definition, and effective dates of a Cost Category that's defined in the account.</p> <p>You have the option to use <code>EffectiveOn</code> to return a Cost Category that's active on a specific date. If there's no <code>EffectiveOn</code> specified, you see a Cost Category that's effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCostCategoryDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeCostCategoryDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCostCategoryDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCostCategoryDefinitionRequest();
    $request->describeCostCategoryDefinitionRequest = new DescribeCostCategoryDefinitionRequest();
    $request->describeCostCategoryDefinitionRequest->costCategoryArn = 'accusamus';
    $request->describeCostCategoryDefinitionRequest->effectiveOn = 'commodi';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = DescribeCostCategoryDefinitionXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_DESCRIBE_COST_CATEGORY_DEFINITION;

    $response = $sdk->sdk->describeCostCategoryDefinition($request);

    if ($response->describeCostCategoryDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnomalies

Retrieves all of the cost anomalies detected on your account during the time period that's specified by the <code>DateInterval</code> object. Anomalies are available for up to 90 days.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAnomaliesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAnomaliesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AnomalyDateInterval;
use \OpenAPI\OpenAPI\Models\Shared\AnomalyFeedbackTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TotalImpactFilter;
use \OpenAPI\OpenAPI\Models\Shared\NumericOperatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAnomaliesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAnomaliesRequest();
    $request->getAnomaliesRequest = new GetAnomaliesRequest();
    $request->getAnomaliesRequest->dateInterval = new AnomalyDateInterval();
    $request->getAnomaliesRequest->dateInterval->endDate = 'modi';
    $request->getAnomaliesRequest->dateInterval->startDate = 'praesentium';
    $request->getAnomaliesRequest->feedback = AnomalyFeedbackTypeEnum::NO;
    $request->getAnomaliesRequest->maxResults = 916723;
    $request->getAnomaliesRequest->monitorArn = 'quasi';
    $request->getAnomaliesRequest->nextPageToken = 'repudiandae';
    $request->getAnomaliesRequest->totalImpact = new TotalImpactFilter();
    $request->getAnomaliesRequest->totalImpact->endValue = 5759.47;
    $request->getAnomaliesRequest->totalImpact->numericOperator = NumericOperatorEnum::EQUAL;
    $request->getAnomaliesRequest->totalImpact->startValue = 9292.97;
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = GetAnomaliesXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_GET_ANOMALIES;

    $response = $sdk->sdk->getAnomalies($request);

    if ($response->getAnomaliesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnomalyMonitors

Retrieves the cost anomaly monitor definitions for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAnomalyMonitorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAnomalyMonitorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAnomalyMonitorsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAnomalyMonitorsRequest();
    $request->getAnomalyMonitorsRequest = new GetAnomalyMonitorsRequest();
    $request->getAnomalyMonitorsRequest->maxResults = 716327;
    $request->getAnomalyMonitorsRequest->monitorArnList = [
        'labore',
        'modi',
        'qui',
        'aliquid',
    ];
    $request->getAnomalyMonitorsRequest->nextPageToken = 'cupiditate';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = GetAnomalyMonitorsXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_GET_ANOMALY_MONITORS;

    $response = $sdk->sdk->getAnomalyMonitors($request);

    if ($response->getAnomalyMonitorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnomalySubscriptions

Retrieves the cost anomaly subscription objects for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAnomalySubscriptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAnomalySubscriptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAnomalySubscriptionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAnomalySubscriptionsRequest();
    $request->getAnomalySubscriptionsRequest = new GetAnomalySubscriptionsRequest();
    $request->getAnomalySubscriptionsRequest->maxResults = 677817;
    $request->getAnomalySubscriptionsRequest->monitorArn = 'excepturi';
    $request->getAnomalySubscriptionsRequest->nextPageToken = 'tempora';
    $request->getAnomalySubscriptionsRequest->subscriptionArnList = [
        'tempore',
        'labore',
        'delectus',
    ];
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->xAmzTarget = GetAnomalySubscriptionsXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_GET_ANOMALY_SUBSCRIPTIONS;

    $response = $sdk->sdk->getAnomalySubscriptions($request);

    if ($response->getAnomalySubscriptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCostAndUsage

<p>Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric that you want the request to return. For example, you can specify <code>BlendedCosts</code> or <code>UsageQuantity</code>. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts.</p> <p>For information about filter limitations, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-limits.html">Quotas and restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCostAndUsageRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCostAndUsageRequest;
use \OpenAPI\OpenAPI\Models\Shared\Expression;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryValues;
use \OpenAPI\OpenAPI\Models\Shared\MatchOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValues;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagValues;
use \OpenAPI\OpenAPI\Models\Shared\GranularityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GroupDefinition;
use \OpenAPI\OpenAPI\Models\Shared\GroupDefinitionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DateInterval;
use \OpenAPI\OpenAPI\Models\Operations\GetCostAndUsageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCostAndUsageRequest();
    $request->getCostAndUsageRequest = new GetCostAndUsageRequest();
    $request->getCostAndUsageRequest->filter = new Expression();
    $request->getCostAndUsageRequest->filter->and = [
        new Expression(),
        new Expression(),
        new Expression(),
    ];
    $request->getCostAndUsageRequest->filter->costCategories = new CostCategoryValues();
    $request->getCostAndUsageRequest->filter->costCategories->key = 'officia';
    $request->getCostAndUsageRequest->filter->costCategories->matchOptions = [
        MatchOptionEnum::GREATER_THAN_OR_EQUAL,
    ];
    $request->getCostAndUsageRequest->filter->costCategories->values = [
        'dolorum',
        'in',
        'in',
        'illum',
    ];
    $request->getCostAndUsageRequest->filter->dimensions = new DimensionValues();
    $request->getCostAndUsageRequest->filter->dimensions->key = DimensionEnum::ANOMALY_TOTAL_IMPACT_PERCENTAGE;
    $request->getCostAndUsageRequest->filter->dimensions->matchOptions = [
        MatchOptionEnum::EQUALS,
        MatchOptionEnum::STARTS_WITH,
        MatchOptionEnum::CASE_INSENSITIVE,
    ];
    $request->getCostAndUsageRequest->filter->dimensions->values = [
        'ea',
        'aliquid',
        'laborum',
        'accusamus',
    ];
    $request->getCostAndUsageRequest->filter->not = new Expression();
    $request->getCostAndUsageRequest->filter->or = [
        new Expression(),
    ];
    $request->getCostAndUsageRequest->filter->tags = new TagValues();
    $request->getCostAndUsageRequest->filter->tags->key = 'occaecati';
    $request->getCostAndUsageRequest->filter->tags->matchOptions = [
        MatchOptionEnum::GREATER_THAN_OR_EQUAL,
        MatchOptionEnum::GREATER_THAN_OR_EQUAL,
    ];
    $request->getCostAndUsageRequest->filter->tags->values = [
        'provident',
        'nam',
        'id',
    ];
    $request->getCostAndUsageRequest->granularity = GranularityEnum::MONTHLY;
    $request->getCostAndUsageRequest->groupBy = [
        new GroupDefinition(),
        new GroupDefinition(),
        new GroupDefinition(),
    ];
    $request->getCostAndUsageRequest->metrics = [
        'amet',
        'deserunt',
        'nisi',
        'vel',
    ];
    $request->getCostAndUsageRequest->nextPageToken = 'natus';
    $request->getCostAndUsageRequest->timePeriod = new DateInterval();
    $request->getCostAndUsageRequest->timePeriod->end = 'omnis';
    $request->getCostAndUsageRequest->timePeriod->start = 'molestiae';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = GetCostAndUsageXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_GET_COST_AND_USAGE;

    $response = $sdk->sdk->getCostAndUsage($request);

    if ($response->getCostAndUsageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCostAndUsageWithResources

<p>Retrieves cost and usage metrics with resources for your account. You can specify which cost and usage-related metric, such as <code>BlendedCosts</code> or <code>UsageQuantity</code>, that you want the request to return. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud – Compute service only.</p> <note> <p>This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information about how to access the Settings page, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-access.html">Controlling Access for Cost Explorer</a> in the <i>Billing and Cost Management User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCostAndUsageWithResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCostAndUsageWithResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\Expression;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryValues;
use \OpenAPI\OpenAPI\Models\Shared\MatchOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValues;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagValues;
use \OpenAPI\OpenAPI\Models\Shared\GranularityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GroupDefinition;
use \OpenAPI\OpenAPI\Models\Shared\GroupDefinitionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DateInterval;
use \OpenAPI\OpenAPI\Models\Operations\GetCostAndUsageWithResourcesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCostAndUsageWithResourcesRequest();
    $request->getCostAndUsageWithResourcesRequest = new GetCostAndUsageWithResourcesRequest();
    $request->getCostAndUsageWithResourcesRequest->filter = new Expression();
    $request->getCostAndUsageWithResourcesRequest->filter->and = [
        new Expression(),
        new Expression(),
    ];
    $request->getCostAndUsageWithResourcesRequest->filter->costCategories = new CostCategoryValues();
    $request->getCostAndUsageWithResourcesRequest->filter->costCategories->key = 'natus';
    $request->getCostAndUsageWithResourcesRequest->filter->costCategories->matchOptions = [
        MatchOptionEnum::ENDS_WITH,
        MatchOptionEnum::GREATER_THAN_OR_EQUAL,
        MatchOptionEnum::ABSENT,
    ];
    $request->getCostAndUsageWithResourcesRequest->filter->costCategories->values = [
        'magnam',
    ];
    $request->getCostAndUsageWithResourcesRequest->filter->dimensions = new DimensionValues();
    $request->getCostAndUsageWithResourcesRequest->filter->dimensions->key = DimensionEnum::LINKED_ACCOUNT_NAME;
    $request->getCostAndUsageWithResourcesRequest->filter->dimensions->matchOptions = [
        MatchOptionEnum::STARTS_WITH,
        MatchOptionEnum::CONTAINS,
        MatchOptionEnum::CONTAINS,
    ];
    $request->getCostAndUsageWithResourcesRequest->filter->dimensions->values = [
        'accusantium',
        'mollitia',
        'reiciendis',
    ];
    $request->getCostAndUsageWithResourcesRequest->filter->not = new Expression();
    $request->getCostAndUsageWithResourcesRequest->filter->or = [
        new Expression(),
        new Expression(),
        new Expression(),
    ];
    $request->getCostAndUsageWithResourcesRequest->filter->tags = new TagValues();
    $request->getCostAndUsageWithResourcesRequest->filter->tags->key = 'ad';
    $request->getCostAndUsageWithResourcesRequest->filter->tags->matchOptions = [
        MatchOptionEnum::ABSENT,
        MatchOptionEnum::GREATER_THAN_OR_EQUAL,
    ];
    $request->getCostAndUsageWithResourcesRequest->filter->tags->values = [
        'nemo',
    ];
    $request->getCostAndUsageWithResourcesRequest->granularity = GranularityEnum::DAILY;
    $request->getCostAndUsageWithResourcesRequest->groupBy = [
        new GroupDefinition(),
        new GroupDefinition(),
    ];
    $request->getCostAndUsageWithResourcesRequest->metrics = [
        'debitis',
        'eius',
        'maxime',
        'deleniti',
    ];
    $request->getCostAndUsageWithResourcesRequest->nextPageToken = 'facilis';
    $request->getCostAndUsageWithResourcesRequest->timePeriod = new DateInterval();
    $request->getCostAndUsageWithResourcesRequest->timePeriod->end = 'in';
    $request->getCostAndUsageWithResourcesRequest->timePeriod->start = 'architecto';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'repellat';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->xAmzTarget = GetCostAndUsageWithResourcesXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_GET_COST_AND_USAGE_WITH_RESOURCES;

    $response = $sdk->sdk->getCostAndUsageWithResources($request);

    if ($response->getCostAndUsageWithResourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCostCategories

<p>Retrieves an array of Cost Category names and values incurred cost.</p> <note> <p>If some Cost Category names and values are not associated with any cost, they will not be returned by this API.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCostCategoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCostCategoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\Expression;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryValues;
use \OpenAPI\OpenAPI\Models\Shared\MatchOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValues;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagValues;
use \OpenAPI\OpenAPI\Models\Shared\SortDefinition;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\DateInterval;
use \OpenAPI\OpenAPI\Models\Operations\GetCostCategoriesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCostCategoriesRequest();
    $request->getCostCategoriesRequest = new GetCostCategoriesRequest();
    $request->getCostCategoriesRequest->costCategoryName = 'sed';
    $request->getCostCategoriesRequest->filter = new Expression();
    $request->getCostCategoriesRequest->filter->and = [
        new Expression(),
        new Expression(),
        new Expression(),
        new Expression(),
    ];
    $request->getCostCategoriesRequest->filter->costCategories = new CostCategoryValues();
    $request->getCostCategoriesRequest->filter->costCategories->key = 'pariatur';
    $request->getCostCategoriesRequest->filter->costCategories->matchOptions = [
        MatchOptionEnum::ABSENT,
    ];
    $request->getCostCategoriesRequest->filter->costCategories->values = [
        'natus',
        'magni',
        'sunt',
    ];
    $request->getCostCategoriesRequest->filter->dimensions = new DimensionValues();
    $request->getCostCategoriesRequest->filter->dimensions->key = DimensionEnum::SAVINGS_PLANS_TYPE;
    $request->getCostCategoriesRequest->filter->dimensions->matchOptions = [
        MatchOptionEnum::CASE_INSENSITIVE,
        MatchOptionEnum::CASE_INSENSITIVE,
        MatchOptionEnum::ENDS_WITH,
        MatchOptionEnum::CONTAINS,
    ];
    $request->getCostCategoriesRequest->filter->dimensions->values = [
        'ea',
    ];
    $request->getCostCategoriesRequest->filter->not = new Expression();
    $request->getCostCategoriesRequest->filter->or = [
        new Expression(),
    ];
    $request->getCostCategoriesRequest->filter->tags = new TagValues();
    $request->getCostCategoriesRequest->filter->tags->key = 'ab';
    $request->getCostCategoriesRequest->filter->tags->matchOptions = [
        MatchOptionEnum::CASE_SENSITIVE,
        MatchOptionEnum::STARTS_WITH,
        MatchOptionEnum::ENDS_WITH,
        MatchOptionEnum::ENDS_WITH,
    ];
    $request->getCostCategoriesRequest->filter->tags->values = [
        'eaque',
        'pariatur',
        'nemo',
    ];
    $request->getCostCategoriesRequest->maxResults = 975522;
    $request->getCostCategoriesRequest->nextPageToken = 'perferendis';
    $request->getCostCategoriesRequest->searchString = 'fugiat';
    $request->getCostCategoriesRequest->sortBy = [
        new SortDefinition(),
    ];
    $request->getCostCategoriesRequest->timePeriod = new DateInterval();
    $request->getCostCategoriesRequest->timePeriod->end = 'aut';
    $request->getCostCategoriesRequest->timePeriod->start = 'cumque';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = GetCostCategoriesXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_GET_COST_CATEGORIES;

    $response = $sdk->sdk->getCostCategories($request);

    if ($response->getCostCategoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCostForecast

Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCostForecastRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCostForecastRequest;
use \OpenAPI\OpenAPI\Models\Shared\Expression;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryValues;
use \OpenAPI\OpenAPI\Models\Shared\MatchOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValues;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagValues;
use \OpenAPI\OpenAPI\Models\Shared\GranularityEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricEnum;
use \OpenAPI\OpenAPI\Models\Shared\DateInterval;
use \OpenAPI\OpenAPI\Models\Operations\GetCostForecastXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCostForecastRequest();
    $request->getCostForecastRequest = new GetCostForecastRequest();
    $request->getCostForecastRequest->filter = new Expression();
    $request->getCostForecastRequest->filter->and = [
        new Expression(),
        new Expression(),
    ];
    $request->getCostForecastRequest->filter->costCategories = new CostCategoryValues();
    $request->getCostForecastRequest->filter->costCategories->key = 'eaque';
    $request->getCostForecastRequest->filter->costCategories->matchOptions = [
        MatchOptionEnum::ABSENT,
        MatchOptionEnum::ABSENT,
    ];
    $request->getCostForecastRequest->filter->costCategories->values = [
        'dolores',
    ];
    $request->getCostForecastRequest->filter->dimensions = new DimensionValues();
    $request->getCostForecastRequest->filter->dimensions->key = DimensionEnum::SAVINGS_PLANS_TYPE;
    $request->getCostForecastRequest->filter->dimensions->matchOptions = [
        MatchOptionEnum::ABSENT,
        MatchOptionEnum::CASE_INSENSITIVE,
    ];
    $request->getCostForecastRequest->filter->dimensions->values = [
        'hic',
        'recusandae',
    ];
    $request->getCostForecastRequest->filter->not = new Expression();
    $request->getCostForecastRequest->filter->or = [
        new Expression(),
        new Expression(),
        new Expression(),
    ];
    $request->getCostForecastRequest->filter->tags = new TagValues();
    $request->getCostForecastRequest->filter->tags->key = 'facilis';
    $request->getCostForecastRequest->filter->tags->matchOptions = [
        MatchOptionEnum::EQUALS,
        MatchOptionEnum::CASE_INSENSITIVE,
        MatchOptionEnum::ABSENT,
    ];
    $request->getCostForecastRequest->filter->tags->values = [
        'error',
        'eaque',
        'occaecati',
    ];
    $request->getCostForecastRequest->granularity = GranularityEnum::HOURLY;
    $request->getCostForecastRequest->metric = MetricEnum::UNBLENDED_COST;
    $request->getCostForecastRequest->predictionIntervalLevel = 992397;
    $request->getCostForecastRequest->timePeriod = new DateInterval();
    $request->getCostForecastRequest->timePeriod->end = 'earum';
    $request->getCostForecastRequest->timePeriod->start = 'modi';
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = GetCostForecastXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_GET_COST_FORECAST;

    $response = $sdk->sdk->getCostForecast($request);

    if ($response->getCostForecastResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDimensionValues

Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDimensionValuesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDimensionValuesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContextEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Expression;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryValues;
use \OpenAPI\OpenAPI\Models\Shared\MatchOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValues;
use \OpenAPI\OpenAPI\Models\Shared\TagValues;
use \OpenAPI\OpenAPI\Models\Shared\SortDefinition;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\DateInterval;
use \OpenAPI\OpenAPI\Models\Operations\GetDimensionValuesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDimensionValuesRequest();
    $request->getDimensionValuesRequest = new GetDimensionValuesRequest();
    $request->getDimensionValuesRequest->context = ContextEnum::SAVINGS_PLANS;
    $request->getDimensionValuesRequest->dimension = DimensionEnum::USAGE_TYPE_GROUP;
    $request->getDimensionValuesRequest->filter = new Expression();
    $request->getDimensionValuesRequest->filter->and = [
        new Expression(),
        new Expression(),
        new Expression(),
    ];
    $request->getDimensionValuesRequest->filter->costCategories = new CostCategoryValues();
    $request->getDimensionValuesRequest->filter->costCategories->key = 'aliquid';
    $request->getDimensionValuesRequest->filter->costCategories->matchOptions = [
        MatchOptionEnum::ABSENT,
    ];
    $request->getDimensionValuesRequest->filter->costCategories->values = [
        'qui',
    ];
    $request->getDimensionValuesRequest->filter->dimensions = new DimensionValues();
    $request->getDimensionValuesRequest->filter->dimensions->key = DimensionEnum::SERVICE;
    $request->getDimensionValuesRequest->filter->dimensions->matchOptions = [
        MatchOptionEnum::CONTAINS,
        MatchOptionEnum::CASE_SENSITIVE,
        MatchOptionEnum::ENDS_WITH,
        MatchOptionEnum::ENDS_WITH,
    ];
    $request->getDimensionValuesRequest->filter->dimensions->values = [
        'amet',
        'dolorum',
        'numquam',
        'veritatis',
    ];
    $request->getDimensionValuesRequest->filter->not = new Expression();
    $request->getDimensionValuesRequest->filter->or = [
        new Expression(),
    ];
    $request->getDimensionValuesRequest->filter->tags = new TagValues();
    $request->getDimensionValuesRequest->filter->tags->key = 'ipsa';
    $request->getDimensionValuesRequest->filter->tags->matchOptions = [
        MatchOptionEnum::ENDS_WITH,
        MatchOptionEnum::STARTS_WITH,
    ];
    $request->getDimensionValuesRequest->filter->tags->values = [
        'quidem',
        'voluptatibus',
        'voluptas',
        'natus',
    ];
    $request->getDimensionValuesRequest->maxResults = 179603;
    $request->getDimensionValuesRequest->nextPageToken = 'atque';
    $request->getDimensionValuesRequest->searchString = 'sit';
    $request->getDimensionValuesRequest->sortBy = [
        new SortDefinition(),
        new SortDefinition(),
        new SortDefinition(),
        new SortDefinition(),
    ];
    $request->getDimensionValuesRequest->timePeriod = new DateInterval();
    $request->getDimensionValuesRequest->timePeriod->end = 'ab';
    $request->getDimensionValuesRequest->timePeriod->start = 'soluta';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->xAmzTarget = GetDimensionValuesXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_GET_DIMENSION_VALUES;

    $response = $sdk->sdk->getDimensionValues($request);

    if ($response->getDimensionValuesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReservationCoverage

<p>Retrieves the reservation coverage for your account, which you can use to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data about reservation usage by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>TAG</p> </li> <li> <p>TENANCY</p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReservationCoverageRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetReservationCoverageRequest;
use \OpenAPI\OpenAPI\Models\Shared\Expression;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryValues;
use \OpenAPI\OpenAPI\Models\Shared\MatchOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValues;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagValues;
use \OpenAPI\OpenAPI\Models\Shared\GranularityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GroupDefinition;
use \OpenAPI\OpenAPI\Models\Shared\GroupDefinitionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortDefinition;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\DateInterval;
use \OpenAPI\OpenAPI\Models\Operations\GetReservationCoverageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReservationCoverageRequest();
    $request->getReservationCoverageRequest = new GetReservationCoverageRequest();
    $request->getReservationCoverageRequest->filter = new Expression();
    $request->getReservationCoverageRequest->filter->and = [
        new Expression(),
        new Expression(),
        new Expression(),
    ];
    $request->getReservationCoverageRequest->filter->costCategories = new CostCategoryValues();
    $request->getReservationCoverageRequest->filter->costCategories->key = 'asperiores';
    $request->getReservationCoverageRequest->filter->costCategories->matchOptions = [
        MatchOptionEnum::ABSENT,
        MatchOptionEnum::ENDS_WITH,
    ];
    $request->getReservationCoverageRequest->filter->costCategories->values = [
        'saepe',
        'eius',
        'aspernatur',
    ];
    $request->getReservationCoverageRequest->filter->dimensions = new DimensionValues();
    $request->getReservationCoverageRequest->filter->dimensions->key = DimensionEnum::AZ;
    $request->getReservationCoverageRequest->filter->dimensions->matchOptions = [
        MatchOptionEnum::CASE_INSENSITIVE,
    ];
    $request->getReservationCoverageRequest->filter->dimensions->values = [
        'ad',
        'saepe',
        'suscipit',
        'deserunt',
    ];
    $request->getReservationCoverageRequest->filter->not = new Expression();
    $request->getReservationCoverageRequest->filter->or = [
        new Expression(),
        new Expression(),
        new Expression(),
    ];
    $request->getReservationCoverageRequest->filter->tags = new TagValues();
    $request->getReservationCoverageRequest->filter->tags->key = 'minima';
    $request->getReservationCoverageRequest->filter->tags->matchOptions = [
        MatchOptionEnum::CONTAINS,
        MatchOptionEnum::CASE_SENSITIVE,
        MatchOptionEnum::EQUALS,
        MatchOptionEnum::CASE_INSENSITIVE,
    ];
    $request->getReservationCoverageRequest->filter->tags->values = [
        'tempora',
        'vel',
    ];
    $request->getReservationCoverageRequest->granularity = GranularityEnum::HOURLY;
    $request->getReservationCoverageRequest->groupBy = [
        new GroupDefinition(),
        new GroupDefinition(),
        new GroupDefinition(),
        new GroupDefinition(),
    ];
    $request->getReservationCoverageRequest->maxResults = 185636;
    $request->getReservationCoverageRequest->metrics = [
        'a',
        'esse',
        'harum',
    ];
    $request->getReservationCoverageRequest->nextPageToken = 'iusto';
    $request->getReservationCoverageRequest->sortBy = new SortDefinition();
    $request->getReservationCoverageRequest->sortBy->key = 'ipsum';
    $request->getReservationCoverageRequest->sortBy->sortOrder = SortOrderEnum::DESCENDING;
    $request->getReservationCoverageRequest->timePeriod = new DateInterval();
    $request->getReservationCoverageRequest->timePeriod->end = 'tenetur';
    $request->getReservationCoverageRequest->timePeriod->start = 'amet';
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = GetReservationCoverageXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_GET_RESERVATION_COVERAGE;

    $response = $sdk->sdk->getReservationCoverage($request);

    if ($response->getReservationCoverageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReservationPurchaseRecommendation

<p>Gets recommendations for reservation purchases. These recommendations might help you to reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing.</p> <p>Amazon Web Services generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After Amazon Web Services has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of Reserved Instance (RI) to purchase to maximize your estimated savings. </p> <p>For example, Amazon Web Services automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. Amazon Web Services recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible Reserved Instance (RI). Amazon Web Services also shows the equal number of normalized units. This way, you can purchase any instance size that you want. For this example, your RI recommendation is for <code>c4.large</code> because that is the smallest size instance in the c4 instance family.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReservationPurchaseRecommendationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetReservationPurchaseRecommendationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Expression;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryValues;
use \OpenAPI\OpenAPI\Models\Shared\MatchOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValues;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagValues;
use \OpenAPI\OpenAPI\Models\Shared\LookbackPeriodInDaysEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceSpecification;
use \OpenAPI\OpenAPI\Models\Shared\Ec2Specification;
use \OpenAPI\OpenAPI\Models\Shared\OfferingClassEnum;
use \OpenAPI\OpenAPI\Models\Shared\TermInYearsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetReservationPurchaseRecommendationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReservationPurchaseRecommendationRequest();
    $request->getReservationPurchaseRecommendationRequest = new GetReservationPurchaseRecommendationRequest();
    $request->getReservationPurchaseRecommendationRequest->accountId = 'nihil';
    $request->getReservationPurchaseRecommendationRequest->accountScope = AccountScopeEnum::PAYER;
    $request->getReservationPurchaseRecommendationRequest->filter = new Expression();
    $request->getReservationPurchaseRecommendationRequest->filter->and = [
        new Expression(),
        new Expression(),
        new Expression(),
    ];
    $request->getReservationPurchaseRecommendationRequest->filter->costCategories = new CostCategoryValues();
    $request->getReservationPurchaseRecommendationRequest->filter->costCategories->key = 'neque';
    $request->getReservationPurchaseRecommendationRequest->filter->costCategories->matchOptions = [
        MatchOptionEnum::ENDS_WITH,
    ];
    $request->getReservationPurchaseRecommendationRequest->filter->costCategories->values = [
        'voluptas',
        'deserunt',
        'quam',
    ];
    $request->getReservationPurchaseRecommendationRequest->filter->dimensions = new DimensionValues();
    $request->getReservationPurchaseRecommendationRequest->filter->dimensions->key = DimensionEnum::SERVICE;
    $request->getReservationPurchaseRecommendationRequest->filter->dimensions->matchOptions = [
        MatchOptionEnum::ABSENT,
        MatchOptionEnum::CONTAINS,
    ];
    $request->getReservationPurchaseRecommendationRequest->filter->dimensions->values = [
        'pariatur',
        'soluta',
        'dicta',
        'laborum',
    ];
    $request->getReservationPurchaseRecommendationRequest->filter->not = new Expression();
    $request->getReservationPurchaseRecommendationRequest->filter->or = [
        new Expression(),
        new Expression(),
        new Expression(),
    ];
    $request->getReservationPurchaseRecommendationRequest->filter->tags = new TagValues();
    $request->getReservationPurchaseRecommendationRequest->filter->tags->key = 'incidunt';
    $request->getReservationPurchaseRecommendationRequest->filter->tags->matchOptions = [
        MatchOptionEnum::ABSENT,
    ];
    $request->getReservationPurchaseRecommendationRequest->filter->tags->values = [
        'facilis',
        'aliquid',
        'quam',
    ];
    $request->getReservationPurchaseRecommendationRequest->lookbackPeriodInDays = LookbackPeriodInDaysEnum::THIRTY_DAYS;
    $request->getReservationPurchaseRecommendationRequest->nextPageToken = 'temporibus';
    $request->getReservationPurchaseRecommendationRequest->pageSize = 183280;
    $request->getReservationPurchaseRecommendationRequest->paymentOption = PaymentOptionEnum::PARTIAL_UPFRONT;
    $request->getReservationPurchaseRecommendationRequest->service = 'fugit';
    $request->getReservationPurchaseRecommendationRequest->serviceSpecification = new ServiceSpecification();
    $request->getReservationPurchaseRecommendationRequest->serviceSpecification->ec2Specification = new Ec2Specification();
    $request->getReservationPurchaseRecommendationRequest->serviceSpecification->ec2Specification->offeringClass = OfferingClassEnum::STANDARD;
    $request->getReservationPurchaseRecommendationRequest->termInYears = TermInYearsEnum::ONE_YEAR;
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'soluta';
    $request->xAmzTarget = GetReservationPurchaseRecommendationXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_GET_RESERVATION_PURCHASE_RECOMMENDATION;

    $response = $sdk->sdk->getReservationPurchaseRecommendation($request);

    if ($response->getReservationPurchaseRecommendationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReservationUtilization

Retrieves the reservation utilization for your account. Management account in an organization have access to member accounts. You can filter data by dimensions in a time period. You can use <code>GetDimensionValues</code> to determine the possible dimension values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReservationUtilizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetReservationUtilizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Expression;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryValues;
use \OpenAPI\OpenAPI\Models\Shared\MatchOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValues;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagValues;
use \OpenAPI\OpenAPI\Models\Shared\GranularityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GroupDefinition;
use \OpenAPI\OpenAPI\Models\Shared\GroupDefinitionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortDefinition;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\DateInterval;
use \OpenAPI\OpenAPI\Models\Operations\GetReservationUtilizationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReservationUtilizationRequest();
    $request->getReservationUtilizationRequest = new GetReservationUtilizationRequest();
    $request->getReservationUtilizationRequest->filter = new Expression();
    $request->getReservationUtilizationRequest->filter->and = [
        new Expression(),
        new Expression(),
        new Expression(),
    ];
    $request->getReservationUtilizationRequest->filter->costCategories = new CostCategoryValues();
    $request->getReservationUtilizationRequest->filter->costCategories->key = 'et';
    $request->getReservationUtilizationRequest->filter->costCategories->matchOptions = [
        MatchOptionEnum::ABSENT,
        MatchOptionEnum::EQUALS,
        MatchOptionEnum::CASE_SENSITIVE,
        MatchOptionEnum::CONTAINS,
    ];
    $request->getReservationUtilizationRequest->filter->costCategories->values = [
        'cupiditate',
        'aperiam',
        'delectus',
    ];
    $request->getReservationUtilizationRequest->filter->dimensions = new DimensionValues();
    $request->getReservationUtilizationRequest->filter->dimensions->key = DimensionEnum::SERVICE;
    $request->getReservationUtilizationRequest->filter->dimensions->matchOptions = [
        MatchOptionEnum::STARTS_WITH,
        MatchOptionEnum::ABSENT,
    ];
    $request->getReservationUtilizationRequest->filter->dimensions->values = [
        'architecto',
        'quae',
        'aut',
    ];
    $request->getReservationUtilizationRequest->filter->not = new Expression();
    $request->getReservationUtilizationRequest->filter->or = [
        new Expression(),
        new Expression(),
        new Expression(),
    ];
    $request->getReservationUtilizationRequest->filter->tags = new TagValues();
    $request->getReservationUtilizationRequest->filter->tags->key = 'itaque';
    $request->getReservationUtilizationRequest->filter->tags->matchOptions = [
        MatchOptionEnum::CASE_SENSITIVE,
    ];
    $request->getReservationUtilizationRequest->filter->tags->values = [
        'porro',
        'doloribus',
        'ut',
        'facilis',
    ];
    $request->getReservationUtilizationRequest->granularity = GranularityEnum::MONTHLY;
    $request->getReservationUtilizationRequest->groupBy = [
        new GroupDefinition(),
    ];
    $request->getReservationUtilizationRequest->maxResults = 63955;
    $request->getReservationUtilizationRequest->nextPageToken = 'laudantium';
    $request->getReservationUtilizationRequest->sortBy = new SortDefinition();
    $request->getReservationUtilizationRequest->sortBy->key = 'odio';
    $request->getReservationUtilizationRequest->sortBy->sortOrder = SortOrderEnum::DESCENDING;
    $request->getReservationUtilizationRequest->timePeriod = new DateInterval();
    $request->getReservationUtilizationRequest->timePeriod->end = 'voluptatibus';
    $request->getReservationUtilizationRequest->timePeriod->start = 'quisquam';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'consectetur';
    $request->xAmzTarget = GetReservationUtilizationXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_GET_RESERVATION_UTILIZATION;

    $response = $sdk->sdk->getReservationUtilization($request);

    if ($response->getReservationUtilizationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRightsizingRecommendation

<p>Creates recommendations that help you save cost by identifying idle and underutilized Amazon EC2 instances.</p> <p>Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics. For more information about calculation and function, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-rightsizing.html">Optimizing Your Cost with Rightsizing Recommendations</a> in the <i>Billing and Cost Management User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRightsizingRecommendationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRightsizingRecommendationRequest;
use \OpenAPI\OpenAPI\Models\Shared\RightsizingRecommendationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\RecommendationTargetEnum;
use \OpenAPI\OpenAPI\Models\Shared\Expression;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryValues;
use \OpenAPI\OpenAPI\Models\Shared\MatchOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValues;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagValues;
use \OpenAPI\OpenAPI\Models\Operations\GetRightsizingRecommendationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRightsizingRecommendationRequest();
    $request->getRightsizingRecommendationRequest = new GetRightsizingRecommendationRequest();
    $request->getRightsizingRecommendationRequest->configuration = new RightsizingRecommendationConfiguration();
    $request->getRightsizingRecommendationRequest->configuration->benefitsConsidered = false;
    $request->getRightsizingRecommendationRequest->configuration->recommendationTarget = RecommendationTargetEnum::CROSS_INSTANCE_FAMILY;
    $request->getRightsizingRecommendationRequest->filter = new Expression();
    $request->getRightsizingRecommendationRequest->filter->and = [
        new Expression(),
        new Expression(),
        new Expression(),
        new Expression(),
    ];
    $request->getRightsizingRecommendationRequest->filter->costCategories = new CostCategoryValues();
    $request->getRightsizingRecommendationRequest->filter->costCategories->key = 'dignissimos';
    $request->getRightsizingRecommendationRequest->filter->costCategories->matchOptions = [
        MatchOptionEnum::CASE_SENSITIVE,
        MatchOptionEnum::CASE_INSENSITIVE,
        MatchOptionEnum::ENDS_WITH,
        MatchOptionEnum::CASE_SENSITIVE,
    ];
    $request->getRightsizingRecommendationRequest->filter->costCategories->values = [
        'vero',
        'ducimus',
        'dolore',
    ];
    $request->getRightsizingRecommendationRequest->filter->dimensions = new DimensionValues();
    $request->getRightsizingRecommendationRequest->filter->dimensions->key = DimensionEnum::PAYMENT_OPTION;
    $request->getRightsizingRecommendationRequest->filter->dimensions->matchOptions = [
        MatchOptionEnum::ABSENT,
        MatchOptionEnum::CONTAINS,
        MatchOptionEnum::CASE_INSENSITIVE,
        MatchOptionEnum::EQUALS,
    ];
    $request->getRightsizingRecommendationRequest->filter->dimensions->values = [
        'exercitationem',
        'nulla',
        'fugit',
        'porro',
    ];
    $request->getRightsizingRecommendationRequest->filter->not = new Expression();
    $request->getRightsizingRecommendationRequest->filter->or = [
        new Expression(),
        new Expression(),
        new Expression(),
        new Expression(),
    ];
    $request->getRightsizingRecommendationRequest->filter->tags = new TagValues();
    $request->getRightsizingRecommendationRequest->filter->tags->key = 'doloribus';
    $request->getRightsizingRecommendationRequest->filter->tags->matchOptions = [
        MatchOptionEnum::CASE_INSENSITIVE,
        MatchOptionEnum::ENDS_WITH,
    ];
    $request->getRightsizingRecommendationRequest->filter->tags->values = [
        'officia',
    ];
    $request->getRightsizingRecommendationRequest->nextPageToken = 'tempora';
    $request->getRightsizingRecommendationRequest->pageSize = 368584;
    $request->getRightsizingRecommendationRequest->service = 'ea';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'ratione';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'laudantium';
    $request->xAmzTarget = GetRightsizingRecommendationXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_GET_RIGHTSIZING_RECOMMENDATION;

    $response = $sdk->sdk->getRightsizingRecommendation($request);

    if ($response->getRightsizingRecommendationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSavingsPlansCoverage

<p>Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data for Savings Plans usage with the following dimensions:</p> <ul> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>SERVICE</code> </p> </li> <li> <p> <code>INSTANCE_FAMILY</code> </p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSavingsPlansCoverageRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSavingsPlansCoverageRequest;
use \OpenAPI\OpenAPI\Models\Shared\Expression;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryValues;
use \OpenAPI\OpenAPI\Models\Shared\MatchOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValues;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagValues;
use \OpenAPI\OpenAPI\Models\Shared\GranularityEnum;
use \OpenAPI\OpenAPI\Models\Shared\GroupDefinition;
use \OpenAPI\OpenAPI\Models\Shared\GroupDefinitionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortDefinition;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\DateInterval;
use \OpenAPI\OpenAPI\Models\Operations\GetSavingsPlansCoverageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSavingsPlansCoverageRequest();
    $request->getSavingsPlansCoverageRequest = new GetSavingsPlansCoverageRequest();
    $request->getSavingsPlansCoverageRequest->filter = new Expression();
    $request->getSavingsPlansCoverageRequest->filter->and = [
        new Expression(),
    ];
    $request->getSavingsPlansCoverageRequest->filter->costCategories = new CostCategoryValues();
    $request->getSavingsPlansCoverageRequest->filter->costCategories->key = 'dolor';
    $request->getSavingsPlansCoverageRequest->filter->costCategories->matchOptions = [
        MatchOptionEnum::EQUALS,
        MatchOptionEnum::ENDS_WITH,
        MatchOptionEnum::CASE_INSENSITIVE,
        MatchOptionEnum::CONTAINS,
    ];
    $request->getSavingsPlansCoverageRequest->filter->costCategories->values = [
        'nostrum',
        'sapiente',
        'quisquam',
        'saepe',
    ];
    $request->getSavingsPlansCoverageRequest->filter->dimensions = new DimensionValues();
    $request->getSavingsPlansCoverageRequest->filter->dimensions->key = DimensionEnum::TENANCY;
    $request->getSavingsPlansCoverageRequest->filter->dimensions->matchOptions = [
        MatchOptionEnum::STARTS_WITH,
        MatchOptionEnum::STARTS_WITH,
        MatchOptionEnum::ENDS_WITH,
        MatchOptionEnum::EQUALS,
    ];
    $request->getSavingsPlansCoverageRequest->filter->dimensions->values = [
        'ea',
        'quo',
    ];
    $request->getSavingsPlansCoverageRequest->filter->not = new Expression();
    $request->getSavingsPlansCoverageRequest->filter->or = [
        new Expression(),
    ];
    $request->getSavingsPlansCoverageRequest->filter->tags = new TagValues();
    $request->getSavingsPlansCoverageRequest->filter->tags->key = 'recusandae';
    $request->getSavingsPlansCoverageRequest->filter->tags->matchOptions = [
        MatchOptionEnum::STARTS_WITH,
    ];
    $request->getSavingsPlansCoverageRequest->filter->tags->values = [
        'a',
    ];
    $request->getSavingsPlansCoverageRequest->granularity = GranularityEnum::HOURLY;
    $request->getSavingsPlansCoverageRequest->groupBy = [
        new GroupDefinition(),
    ];
    $request->getSavingsPlansCoverageRequest->maxResults = 11427;
    $request->getSavingsPlansCoverageRequest->metrics = [
        'impedit',
        'aliquam',
        'fugit',
    ];
    $request->getSavingsPlansCoverageRequest->nextToken = 'accusamus';
    $request->getSavingsPlansCoverageRequest->sortBy = new SortDefinition();
    $request->getSavingsPlansCoverageRequest->sortBy->key = 'inventore';
    $request->getSavingsPlansCoverageRequest->sortBy->sortOrder = SortOrderEnum::ASCENDING;
    $request->getSavingsPlansCoverageRequest->timePeriod = new DateInterval();
    $request->getSavingsPlansCoverageRequest->timePeriod->end = 'et';
    $request->getSavingsPlansCoverageRequest->timePeriod->start = 'dolorum';
    $request->maxResults = 'laborum';
    $request->nextToken = 'placeat';
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'nulla';
    $request->xAmzTarget = GetSavingsPlansCoverageXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_GET_SAVINGS_PLANS_COVERAGE;

    $response = $sdk->sdk->getSavingsPlansCoverage($request);

    if ($response->getSavingsPlansCoverageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSavingsPlansPurchaseRecommendation

Retrieves the Savings Plans recommendations for your account. First use <code>StartSavingsPlansPurchaseRecommendationGeneration</code> to generate a new set of recommendations, and then use <code>GetSavingsPlansPurchaseRecommendation</code> to retrieve them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSavingsPlansPurchaseRecommendationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSavingsPlansPurchaseRecommendationRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Expression;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryValues;
use \OpenAPI\OpenAPI\Models\Shared\MatchOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValues;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagValues;
use \OpenAPI\OpenAPI\Models\Shared\LookbackPeriodInDaysEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SupportedSavingsPlansTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TermInYearsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetSavingsPlansPurchaseRecommendationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSavingsPlansPurchaseRecommendationRequest();
    $request->getSavingsPlansPurchaseRecommendationRequest = new GetSavingsPlansPurchaseRecommendationRequest();
    $request->getSavingsPlansPurchaseRecommendationRequest->accountScope = AccountScopeEnum::PAYER;
    $request->getSavingsPlansPurchaseRecommendationRequest->filter = new Expression();
    $request->getSavingsPlansPurchaseRecommendationRequest->filter->and = [
        new Expression(),
        new Expression(),
        new Expression(),
    ];
    $request->getSavingsPlansPurchaseRecommendationRequest->filter->costCategories = new CostCategoryValues();
    $request->getSavingsPlansPurchaseRecommendationRequest->filter->costCategories->key = 'quasi';
    $request->getSavingsPlansPurchaseRecommendationRequest->filter->costCategories->matchOptions = [
        MatchOptionEnum::STARTS_WITH,
        MatchOptionEnum::ABSENT,
    ];
    $request->getSavingsPlansPurchaseRecommendationRequest->filter->costCategories->values = [
        'ipsa',
        'molestiae',
        'magnam',
    ];
    $request->getSavingsPlansPurchaseRecommendationRequest->filter->dimensions = new DimensionValues();
    $request->getSavingsPlansPurchaseRecommendationRequest->filter->dimensions->key = DimensionEnum::SUBSCRIPTION_ID;
    $request->getSavingsPlansPurchaseRecommendationRequest->filter->dimensions->matchOptions = [
        MatchOptionEnum::ENDS_WITH,
        MatchOptionEnum::ENDS_WITH,
    ];
    $request->getSavingsPlansPurchaseRecommendationRequest->filter->dimensions->values = [
        'fuga',
        'reprehenderit',
        'quidem',
    ];
    $request->getSavingsPlansPurchaseRecommendationRequest->filter->not = new Expression();
    $request->getSavingsPlansPurchaseRecommendationRequest->filter->or = [
        new Expression(),
        new Expression(),
        new Expression(),
        new Expression(),
    ];
    $request->getSavingsPlansPurchaseRecommendationRequest->filter->tags = new TagValues();
    $request->getSavingsPlansPurchaseRecommendationRequest->filter->tags->key = 'ut';
    $request->getSavingsPlansPurchaseRecommendationRequest->filter->tags->matchOptions = [
        MatchOptionEnum::ENDS_WITH,
        MatchOptionEnum::CASE_INSENSITIVE,
    ];
    $request->getSavingsPlansPurchaseRecommendationRequest->filter->tags->values = [
        'praesentium',
    ];
    $request->getSavingsPlansPurchaseRecommendationRequest->lookbackPeriodInDays = LookbackPeriodInDaysEnum::SIXTY_DAYS;
    $request->getSavingsPlansPurchaseRecommendationRequest->nextPageToken = 'veritatis';
    $request->getSavingsPlansPurchaseRecommendationRequest->pageSize = 56848;
    $request->getSavingsPlansPurchaseRecommendationRequest->paymentOption = PaymentOptionEnum::LIGHT_UTILIZATION;
    $request->getSavingsPlansPurchaseRecommendationRequest->savingsPlansType = SupportedSavingsPlansTypeEnum::SAGEMAKER_SP;
    $request->getSavingsPlansPurchaseRecommendationRequest->termInYears = TermInYearsEnum::ONE_YEAR;
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = GetSavingsPlansPurchaseRecommendationXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_GET_SAVINGS_PLANS_PURCHASE_RECOMMENDATION;

    $response = $sdk->sdk->getSavingsPlansPurchaseRecommendation($request);

    if ($response->getSavingsPlansPurchaseRecommendationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSavingsPlansUtilization

<p>Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p>You can't group by any dimension values for <code>GetSavingsPlansUtilization</code>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSavingsPlansUtilizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSavingsPlansUtilizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Expression;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryValues;
use \OpenAPI\OpenAPI\Models\Shared\MatchOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValues;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagValues;
use \OpenAPI\OpenAPI\Models\Shared\GranularityEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortDefinition;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\DateInterval;
use \OpenAPI\OpenAPI\Models\Operations\GetSavingsPlansUtilizationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSavingsPlansUtilizationRequest();
    $request->getSavingsPlansUtilizationRequest = new GetSavingsPlansUtilizationRequest();
    $request->getSavingsPlansUtilizationRequest->filter = new Expression();
    $request->getSavingsPlansUtilizationRequest->filter->and = [
        new Expression(),
    ];
    $request->getSavingsPlansUtilizationRequest->filter->costCategories = new CostCategoryValues();
    $request->getSavingsPlansUtilizationRequest->filter->costCategories->key = 'cupiditate';
    $request->getSavingsPlansUtilizationRequest->filter->costCategories->matchOptions = [
        MatchOptionEnum::STARTS_WITH,
    ];
    $request->getSavingsPlansUtilizationRequest->filter->costCategories->values = [
        'ipsam',
        'aspernatur',
        'sequi',
        'quo',
    ];
    $request->getSavingsPlansUtilizationRequest->filter->dimensions = new DimensionValues();
    $request->getSavingsPlansUtilizationRequest->filter->dimensions->key = DimensionEnum::PLATFORM;
    $request->getSavingsPlansUtilizationRequest->filter->dimensions->matchOptions = [
        MatchOptionEnum::EQUALS,
        MatchOptionEnum::CASE_SENSITIVE,
        MatchOptionEnum::CASE_INSENSITIVE,
        MatchOptionEnum::ENDS_WITH,
    ];
    $request->getSavingsPlansUtilizationRequest->filter->dimensions->values = [
        'nihil',
    ];
    $request->getSavingsPlansUtilizationRequest->filter->not = new Expression();
    $request->getSavingsPlansUtilizationRequest->filter->or = [
        new Expression(),
        new Expression(),
        new Expression(),
    ];
    $request->getSavingsPlansUtilizationRequest->filter->tags = new TagValues();
    $request->getSavingsPlansUtilizationRequest->filter->tags->key = 'accusamus';
    $request->getSavingsPlansUtilizationRequest->filter->tags->matchOptions = [
        MatchOptionEnum::ENDS_WITH,
        MatchOptionEnum::CONTAINS,
    ];
    $request->getSavingsPlansUtilizationRequest->filter->tags->values = [
        'sapiente',
        'dolores',
    ];
    $request->getSavingsPlansUtilizationRequest->granularity = GranularityEnum::MONTHLY;
    $request->getSavingsPlansUtilizationRequest->sortBy = new SortDefinition();
    $request->getSavingsPlansUtilizationRequest->sortBy->key = 'molestiae';
    $request->getSavingsPlansUtilizationRequest->sortBy->sortOrder = SortOrderEnum::ASCENDING;
    $request->getSavingsPlansUtilizationRequest->timePeriod = new DateInterval();
    $request->getSavingsPlansUtilizationRequest->timePeriod->end = 'porro';
    $request->getSavingsPlansUtilizationRequest->timePeriod->start = 'eum';
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = GetSavingsPlansUtilizationXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_GET_SAVINGS_PLANS_UTILIZATION;

    $response = $sdk->sdk->getSavingsPlansUtilization($request);

    if ($response->getSavingsPlansUtilizationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSavingsPlansUtilizationDetails

<p>Retrieves attribute data along with aggregate utilization and savings data for a given time period. This doesn't support granular or grouped data (daily/monthly) in response. You can't retrieve data by dates in a single response similar to <code>GetSavingsPlanUtilization</code>, but you have the option to make multiple calls to <code>GetSavingsPlanUtilizationDetails</code> by providing individual dates. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p> <code>GetSavingsPlanUtilizationDetails</code> internally groups data by <code>SavingsPlansArn</code>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSavingsPlansUtilizationDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSavingsPlansUtilizationDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SavingsPlansDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Expression;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryValues;
use \OpenAPI\OpenAPI\Models\Shared\MatchOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValues;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagValues;
use \OpenAPI\OpenAPI\Models\Shared\SortDefinition;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\DateInterval;
use \OpenAPI\OpenAPI\Models\Operations\GetSavingsPlansUtilizationDetailsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSavingsPlansUtilizationDetailsRequest();
    $request->getSavingsPlansUtilizationDetailsRequest = new GetSavingsPlansUtilizationDetailsRequest();
    $request->getSavingsPlansUtilizationDetailsRequest->dataType = [
        SavingsPlansDataTypeEnum::AMORTIZED_COMMITMENT,
        SavingsPlansDataTypeEnum::ATTRIBUTES,
    ];
    $request->getSavingsPlansUtilizationDetailsRequest->filter = new Expression();
    $request->getSavingsPlansUtilizationDetailsRequest->filter->and = [
        new Expression(),
        new Expression(),
    ];
    $request->getSavingsPlansUtilizationDetailsRequest->filter->costCategories = new CostCategoryValues();
    $request->getSavingsPlansUtilizationDetailsRequest->filter->costCategories->key = 'nisi';
    $request->getSavingsPlansUtilizationDetailsRequest->filter->costCategories->matchOptions = [
        MatchOptionEnum::GREATER_THAN_OR_EQUAL,
    ];
    $request->getSavingsPlansUtilizationDetailsRequest->filter->costCategories->values = [
        'ratione',
    ];
    $request->getSavingsPlansUtilizationDetailsRequest->filter->dimensions = new DimensionValues();
    $request->getSavingsPlansUtilizationDetailsRequest->filter->dimensions->key = DimensionEnum::OPERATION;
    $request->getSavingsPlansUtilizationDetailsRequest->filter->dimensions->matchOptions = [
        MatchOptionEnum::CONTAINS,
        MatchOptionEnum::CONTAINS,
        MatchOptionEnum::EQUALS,
        MatchOptionEnum::ENDS_WITH,
    ];
    $request->getSavingsPlansUtilizationDetailsRequest->filter->dimensions->values = [
        'accusamus',
        'veritatis',
        'esse',
        'quod',
    ];
    $request->getSavingsPlansUtilizationDetailsRequest->filter->not = new Expression();
    $request->getSavingsPlansUtilizationDetailsRequest->filter->or = [
        new Expression(),
        new Expression(),
        new Expression(),
    ];
    $request->getSavingsPlansUtilizationDetailsRequest->filter->tags = new TagValues();
    $request->getSavingsPlansUtilizationDetailsRequest->filter->tags->key = 'vero';
    $request->getSavingsPlansUtilizationDetailsRequest->filter->tags->matchOptions = [
        MatchOptionEnum::EQUALS,
        MatchOptionEnum::GREATER_THAN_OR_EQUAL,
    ];
    $request->getSavingsPlansUtilizationDetailsRequest->filter->tags->values = [
        'harum',
        'molestiae',
    ];
    $request->getSavingsPlansUtilizationDetailsRequest->maxResults = 699622;
    $request->getSavingsPlansUtilizationDetailsRequest->nextToken = 'occaecati';
    $request->getSavingsPlansUtilizationDetailsRequest->sortBy = new SortDefinition();
    $request->getSavingsPlansUtilizationDetailsRequest->sortBy->key = 'minima';
    $request->getSavingsPlansUtilizationDetailsRequest->sortBy->sortOrder = SortOrderEnum::DESCENDING;
    $request->getSavingsPlansUtilizationDetailsRequest->timePeriod = new DateInterval();
    $request->getSavingsPlansUtilizationDetailsRequest->timePeriod->end = 'eligendi';
    $request->getSavingsPlansUtilizationDetailsRequest->timePeriod->start = 'sit';
    $request->maxResults = 'culpa';
    $request->nextToken = 'tempore';
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = GetSavingsPlansUtilizationDetailsXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_GET_SAVINGS_PLANS_UTILIZATION_DETAILS;

    $response = $sdk->sdk->getSavingsPlansUtilizationDetails($request);

    if ($response->getSavingsPlansUtilizationDetailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTags

Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Expression;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryValues;
use \OpenAPI\OpenAPI\Models\Shared\MatchOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValues;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagValues;
use \OpenAPI\OpenAPI\Models\Shared\SortDefinition;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\DateInterval;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsRequest();
    $request->getTagsRequest = new GetTagsRequest();
    $request->getTagsRequest->filter = new Expression();
    $request->getTagsRequest->filter->and = [
        new Expression(),
    ];
    $request->getTagsRequest->filter->costCategories = new CostCategoryValues();
    $request->getTagsRequest->filter->costCategories->key = 'esse';
    $request->getTagsRequest->filter->costCategories->matchOptions = [
        MatchOptionEnum::CONTAINS,
        MatchOptionEnum::GREATER_THAN_OR_EQUAL,
        MatchOptionEnum::CASE_INSENSITIVE,
    ];
    $request->getTagsRequest->filter->costCategories->values = [
        'esse',
        'quasi',
        'a',
    ];
    $request->getTagsRequest->filter->dimensions = new DimensionValues();
    $request->getTagsRequest->filter->dimensions->key = DimensionEnum::INSTANCE_TYPE_FAMILY;
    $request->getTagsRequest->filter->dimensions->matchOptions = [
        MatchOptionEnum::CASE_INSENSITIVE,
        MatchOptionEnum::CASE_INSENSITIVE,
        MatchOptionEnum::ABSENT,
    ];
    $request->getTagsRequest->filter->dimensions->values = [
        'asperiores',
        'facere',
        'veritatis',
        'consequuntur',
    ];
    $request->getTagsRequest->filter->not = new Expression();
    $request->getTagsRequest->filter->or = [
        new Expression(),
    ];
    $request->getTagsRequest->filter->tags = new TagValues();
    $request->getTagsRequest->filter->tags->key = 'similique';
    $request->getTagsRequest->filter->tags->matchOptions = [
        MatchOptionEnum::ENDS_WITH,
        MatchOptionEnum::GREATER_THAN_OR_EQUAL,
        MatchOptionEnum::EQUALS,
    ];
    $request->getTagsRequest->filter->tags->values = [
        'vel',
        'in',
        'eius',
        'libero',
    ];
    $request->getTagsRequest->maxResults = 849039;
    $request->getTagsRequest->nextPageToken = 'soluta';
    $request->getTagsRequest->searchString = 'accusantium';
    $request->getTagsRequest->sortBy = [
        new SortDefinition(),
        new SortDefinition(),
    ];
    $request->getTagsRequest->tagKey = 'sapiente';
    $request->getTagsRequest->timePeriod = new DateInterval();
    $request->getTagsRequest->timePeriod->end = 'dicta';
    $request->getTagsRequest->timePeriod->start = 'ullam';
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->xAmzTarget = GetTagsXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_GET_TAGS;

    $response = $sdk->sdk->getTags($request);

    if ($response->getTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUsageForecast

Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUsageForecastRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetUsageForecastRequest;
use \OpenAPI\OpenAPI\Models\Shared\Expression;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryValues;
use \OpenAPI\OpenAPI\Models\Shared\MatchOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValues;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagValues;
use \OpenAPI\OpenAPI\Models\Shared\GranularityEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricEnum;
use \OpenAPI\OpenAPI\Models\Shared\DateInterval;
use \OpenAPI\OpenAPI\Models\Operations\GetUsageForecastXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUsageForecastRequest();
    $request->getUsageForecastRequest = new GetUsageForecastRequest();
    $request->getUsageForecastRequest->filter = new Expression();
    $request->getUsageForecastRequest->filter->and = [
        new Expression(),
        new Expression(),
    ];
    $request->getUsageForecastRequest->filter->costCategories = new CostCategoryValues();
    $request->getUsageForecastRequest->filter->costCategories->key = 'deleniti';
    $request->getUsageForecastRequest->filter->costCategories->matchOptions = [
        MatchOptionEnum::CASE_SENSITIVE,
        MatchOptionEnum::EQUALS,
        MatchOptionEnum::CONTAINS,
        MatchOptionEnum::GREATER_THAN_OR_EQUAL,
    ];
    $request->getUsageForecastRequest->filter->costCategories->values = [
        'at',
    ];
    $request->getUsageForecastRequest->filter->dimensions = new DimensionValues();
    $request->getUsageForecastRequest->filter->dimensions->key = DimensionEnum::LINKED_ACCOUNT_NAME;
    $request->getUsageForecastRequest->filter->dimensions->matchOptions = [
        MatchOptionEnum::EQUALS,
        MatchOptionEnum::STARTS_WITH,
    ];
    $request->getUsageForecastRequest->filter->dimensions->values = [
        'consectetur',
    ];
    $request->getUsageForecastRequest->filter->not = new Expression();
    $request->getUsageForecastRequest->filter->or = [
        new Expression(),
    ];
    $request->getUsageForecastRequest->filter->tags = new TagValues();
    $request->getUsageForecastRequest->filter->tags->key = 'iste';
    $request->getUsageForecastRequest->filter->tags->matchOptions = [
        MatchOptionEnum::EQUALS,
        MatchOptionEnum::CONTAINS,
        MatchOptionEnum::EQUALS,
        MatchOptionEnum::CONTAINS,
    ];
    $request->getUsageForecastRequest->filter->tags->values = [
        'mollitia',
        'ab',
    ];
    $request->getUsageForecastRequest->granularity = GranularityEnum::MONTHLY;
    $request->getUsageForecastRequest->metric = MetricEnum::UNBLENDED_COST;
    $request->getUsageForecastRequest->predictionIntervalLevel = 32465;
    $request->getUsageForecastRequest->timePeriod = new DateInterval();
    $request->getUsageForecastRequest->timePeriod->end = 'dolor';
    $request->getUsageForecastRequest->timePeriod->start = 'occaecati';
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = GetUsageForecastXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_GET_USAGE_FORECAST;

    $response = $sdk->sdk->getUsageForecast($request);

    if ($response->getUsageForecastResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCostAllocationTags

Get a list of cost allocation tags. All inputs in the API are optional and serve as filters. By default, all cost allocation tags are returned. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCostAllocationTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCostAllocationTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CostAllocationTagStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\CostAllocationTagTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCostAllocationTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCostAllocationTagsRequest();
    $request->listCostAllocationTagsRequest = new ListCostAllocationTagsRequest();
    $request->listCostAllocationTagsRequest->maxResults = 981640;
    $request->listCostAllocationTagsRequest->nextToken = 'natus';
    $request->listCostAllocationTagsRequest->status = CostAllocationTagStatusEnum::ACTIVE;
    $request->listCostAllocationTagsRequest->tagKeys = [
        'voluptas',
        'asperiores',
        'aperiam',
        'ea',
    ];
    $request->listCostAllocationTagsRequest->type = CostAllocationTagTypeEnum::AWS_GENERATED;
    $request->maxResults = 'consequuntur';
    $request->nextToken = 'repellendus';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'quae';
    $request->xAmzTarget = ListCostAllocationTagsXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_LIST_COST_ALLOCATION_TAGS;

    $response = $sdk->sdk->listCostAllocationTags($request);

    if ($response->listCostAllocationTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCostCategoryDefinitions

Returns the name, Amazon Resource Name (ARN), <code>NumberOfRules</code> and effective dates of all Cost Categories defined in the account. You have the option to use <code>EffectiveOn</code> to return a list of Cost Categories that were active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see Cost Categories that are effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. <code>ListCostCategoryDefinitions</code> supports pagination. The request can have a <code>MaxResults</code> range up to 100.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCostCategoryDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCostCategoryDefinitionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCostCategoryDefinitionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCostCategoryDefinitionsRequest();
    $request->listCostCategoryDefinitionsRequest = new ListCostCategoryDefinitionsRequest();
    $request->listCostCategoryDefinitionsRequest->effectiveOn = 'quaerat';
    $request->listCostCategoryDefinitionsRequest->maxResults = 783235;
    $request->listCostCategoryDefinitionsRequest->nextToken = 'quod';
    $request->maxResults = 'labore';
    $request->nextToken = 'ab';
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'est';
    $request->xAmzTarget = ListCostCategoryDefinitionsXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_LIST_COST_CATEGORY_DEFINITIONS;

    $response = $sdk->sdk->listCostCategoryDefinitions($request);

    if ($response->listCostCategoryDefinitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSavingsPlansPurchaseRecommendationGeneration

Retrieves a list of your historical recommendation generations within the past 30 days.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSavingsPlansPurchaseRecommendationGenerationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSavingsPlansPurchaseRecommendationGenerationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GenerationStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListSavingsPlansPurchaseRecommendationGenerationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSavingsPlansPurchaseRecommendationGenerationRequest();
    $request->listSavingsPlansPurchaseRecommendationGenerationRequest = new ListSavingsPlansPurchaseRecommendationGenerationRequest();
    $request->listSavingsPlansPurchaseRecommendationGenerationRequest->generationStatus = GenerationStatusEnum::FAILED;
    $request->listSavingsPlansPurchaseRecommendationGenerationRequest->nextPageToken = 'totam';
    $request->listSavingsPlansPurchaseRecommendationGenerationRequest->pageSize = 853940;
    $request->listSavingsPlansPurchaseRecommendationGenerationRequest->recommendationIds = [
        'ducimus',
        'quos',
    ];
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = ListSavingsPlansPurchaseRecommendationGenerationXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_LIST_SAVINGS_PLANS_PURCHASE_RECOMMENDATION_GENERATION;

    $response = $sdk->sdk->listSavingsPlansPurchaseRecommendationGeneration($request);

    if ($response->listSavingsPlansPurchaseRecommendationGenerationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Returns a list of resource tags associated with the resource specified by the Amazon Resource Name (ARN). 

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
    $request->listTagsForResourceRequest->resourceArn = 'corporis';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'cum';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## provideAnomalyFeedback

Modifies the feedback property of a given cost anomaly. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProvideAnomalyFeedbackRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProvideAnomalyFeedbackRequest;
use \OpenAPI\OpenAPI\Models\Shared\AnomalyFeedbackTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ProvideAnomalyFeedbackXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProvideAnomalyFeedbackRequest();
    $request->provideAnomalyFeedbackRequest = new ProvideAnomalyFeedbackRequest();
    $request->provideAnomalyFeedbackRequest->anomalyId = 'consectetur';
    $request->provideAnomalyFeedbackRequest->feedback = AnomalyFeedbackTypeEnum::NO;
    $request->xAmzAlgorithm = 'exercitationem';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = ProvideAnomalyFeedbackXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_PROVIDE_ANOMALY_FEEDBACK;

    $response = $sdk->sdk->provideAnomalyFeedback($request);

    if ($response->provideAnomalyFeedbackResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startSavingsPlansPurchaseRecommendationGeneration

<p>Requests a Savings Plans recommendation generation. This enables you to calculate a fresh set of Savings Plans recommendations that takes your latest usage data and current Savings Plans inventory into account. You can refresh Savings Plans recommendations up to three times daily for a consolidated billing family.</p> <note> <p> <code>StartSavingsPlansPurchaseRecommendationGeneration</code> has no request syntax because no input parameters are needed to support this operation.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartSavingsPlansPurchaseRecommendationGenerationRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartSavingsPlansPurchaseRecommendationGenerationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartSavingsPlansPurchaseRecommendationGenerationRequest();
    $request->requestBody = [
        'saepe' => 'necessitatibus',
        'dolore' => 'sunt',
        'asperiores' => 'adipisci',
    ];
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'consectetur';
    $request->xAmzTarget = StartSavingsPlansPurchaseRecommendationGenerationXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_START_SAVINGS_PLANS_PURCHASE_RECOMMENDATION_GENERATION;

    $response = $sdk->sdk->startSavingsPlansPurchaseRecommendationGeneration($request);

    if ($response->startSavingsPlansPurchaseRecommendationGenerationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>An API operation for adding one or more tags (key-value pairs) to a resource.</p> <p>You can use the <code>TagResource</code> operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value you specify replaces the previous value for that tag.</p> <p>Although the maximum number of array members is 200, user-tag maximum is 50. The remaining are reserved for Amazon Web Services use.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceArn = 'corporis';
    $request->tagResourceRequest->resourceTags = [
        new ResourceTag(),
        new ResourceTag(),
        new ResourceTag(),
    ];
    $request->xAmzAlgorithm = 'laboriosam';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'vitae';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'similique';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tags from a resource. Specify only tag keys in your request. Don't specify the value. 

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
    $request->untagResourceRequest->resourceArn = 'tempora';
    $request->untagResourceRequest->resourceTagKeys = [
        'voluptas',
    ];
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'minus';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAnomalyMonitor

Updates an existing cost anomaly monitor. The changes made are applied going forward, and doesn't change anomalies detected in the past. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAnomalyMonitorRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAnomalyMonitorRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAnomalyMonitorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAnomalyMonitorRequest();
    $request->updateAnomalyMonitorRequest = new UpdateAnomalyMonitorRequest();
    $request->updateAnomalyMonitorRequest->monitorArn = 'dolores';
    $request->updateAnomalyMonitorRequest->monitorName = 'blanditiis';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->xAmzTarget = UpdateAnomalyMonitorXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_UPDATE_ANOMALY_MONITOR;

    $response = $sdk->sdk->updateAnomalyMonitor($request);

    if ($response->updateAnomalyMonitorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAnomalySubscription

Updates an existing cost anomaly monitor subscription. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAnomalySubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAnomalySubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AnomalySubscriptionFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Subscriber;
use \OpenAPI\OpenAPI\Models\Shared\SubscriberStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Expression;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryValues;
use \OpenAPI\OpenAPI\Models\Shared\MatchOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValues;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagValues;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAnomalySubscriptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAnomalySubscriptionRequest();
    $request->updateAnomalySubscriptionRequest = new UpdateAnomalySubscriptionRequest();
    $request->updateAnomalySubscriptionRequest->frequency = AnomalySubscriptionFrequencyEnum::WEEKLY;
    $request->updateAnomalySubscriptionRequest->monitorArnList = [
        'quas',
        'hic',
        'nesciunt',
    ];
    $request->updateAnomalySubscriptionRequest->subscribers = [
        new Subscriber(),
        new Subscriber(),
        new Subscriber(),
    ];
    $request->updateAnomalySubscriptionRequest->subscriptionArn = 'corrupti';
    $request->updateAnomalySubscriptionRequest->subscriptionName = 'pariatur';
    $request->updateAnomalySubscriptionRequest->threshold = 5196.43;
    $request->updateAnomalySubscriptionRequest->thresholdExpression = new Expression();
    $request->updateAnomalySubscriptionRequest->thresholdExpression->and = [
        new Expression(),
        new Expression(),
        new Expression(),
        new Expression(),
    ];
    $request->updateAnomalySubscriptionRequest->thresholdExpression->costCategories = new CostCategoryValues();
    $request->updateAnomalySubscriptionRequest->thresholdExpression->costCategories->key = 'exercitationem';
    $request->updateAnomalySubscriptionRequest->thresholdExpression->costCategories->matchOptions = [
        MatchOptionEnum::EQUALS,
        MatchOptionEnum::CASE_SENSITIVE,
        MatchOptionEnum::ABSENT,
        MatchOptionEnum::GREATER_THAN_OR_EQUAL,
    ];
    $request->updateAnomalySubscriptionRequest->thresholdExpression->costCategories->values = [
        'asperiores',
    ];
    $request->updateAnomalySubscriptionRequest->thresholdExpression->dimensions = new DimensionValues();
    $request->updateAnomalySubscriptionRequest->thresholdExpression->dimensions->key = DimensionEnum::RESOURCE_ID;
    $request->updateAnomalySubscriptionRequest->thresholdExpression->dimensions->matchOptions = [
        MatchOptionEnum::CASE_SENSITIVE,
        MatchOptionEnum::EQUALS,
    ];
    $request->updateAnomalySubscriptionRequest->thresholdExpression->dimensions->values = [
        'dolore',
        'laborum',
        'sed',
    ];
    $request->updateAnomalySubscriptionRequest->thresholdExpression->not = new Expression();
    $request->updateAnomalySubscriptionRequest->thresholdExpression->or = [
        new Expression(),
        new Expression(),
    ];
    $request->updateAnomalySubscriptionRequest->thresholdExpression->tags = new TagValues();
    $request->updateAnomalySubscriptionRequest->thresholdExpression->tags->key = 'commodi';
    $request->updateAnomalySubscriptionRequest->thresholdExpression->tags->matchOptions = [
        MatchOptionEnum::ABSENT,
        MatchOptionEnum::ENDS_WITH,
        MatchOptionEnum::CONTAINS,
    ];
    $request->updateAnomalySubscriptionRequest->thresholdExpression->tags->values = [
        'suscipit',
    ];
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'illo';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = UpdateAnomalySubscriptionXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_UPDATE_ANOMALY_SUBSCRIPTION;

    $response = $sdk->sdk->updateAnomalySubscription($request);

    if ($response->updateAnomalySubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCostAllocationTagsStatus

Updates status for cost allocation tags in bulk, with maximum batch size of 20. If the tag status that's updated is the same as the existing tag status, the request doesn't fail. Instead, it doesn't have any effect on the tag status (for example, activating the active tag). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCostAllocationTagsStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCostAllocationTagsStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\CostAllocationTagStatusEntry;
use \OpenAPI\OpenAPI\Models\Shared\CostAllocationTagStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCostAllocationTagsStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCostAllocationTagsStatusRequest();
    $request->updateCostAllocationTagsStatusRequest = new UpdateCostAllocationTagsStatusRequest();
    $request->updateCostAllocationTagsStatusRequest->costAllocationTagsStatus = [
        new CostAllocationTagStatusEntry(),
        new CostAllocationTagStatusEntry(),
    ];
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = UpdateCostAllocationTagsStatusXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_UPDATE_COST_ALLOCATION_TAGS_STATUS;

    $response = $sdk->sdk->updateCostAllocationTagsStatus($request);

    if ($response->updateCostAllocationTagsStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCostCategoryDefinition

Updates an existing Cost Category. Changes made to the Cost Category rules will be used to categorize the current month’s expenses and future expenses. This won’t change categorization for the previous months.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCostCategoryDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCostCategoryDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryRuleVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryRule;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryInheritedValueDimension;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryInheritedValueDimensionNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\Expression;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryValues;
use \OpenAPI\OpenAPI\Models\Shared\MatchOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DimensionValues;
use \OpenAPI\OpenAPI\Models\Shared\DimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TagValues;
use \OpenAPI\OpenAPI\Models\Shared\CostCategoryRuleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CostCategorySplitChargeRule;
use \OpenAPI\OpenAPI\Models\Shared\CostCategorySplitChargeMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\CostCategorySplitChargeRuleParameter;
use \OpenAPI\OpenAPI\Models\Shared\CostCategorySplitChargeRuleParameterTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCostCategoryDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCostCategoryDefinitionRequest();
    $request->updateCostCategoryDefinitionRequest = new UpdateCostCategoryDefinitionRequest();
    $request->updateCostCategoryDefinitionRequest->costCategoryArn = 'quos';
    $request->updateCostCategoryDefinitionRequest->defaultValue = 'voluptatibus';
    $request->updateCostCategoryDefinitionRequest->effectiveStart = 'tempora';
    $request->updateCostCategoryDefinitionRequest->ruleVersion = CostCategoryRuleVersionEnum::COST_CATEGORY_EXPRESSION_V1;
    $request->updateCostCategoryDefinitionRequest->rules = [
        new CostCategoryRule(),
        new CostCategoryRule(),
    ];
    $request->updateCostCategoryDefinitionRequest->splitChargeRules = [
        new CostCategorySplitChargeRule(),
        new CostCategorySplitChargeRule(),
    ];
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = UpdateCostCategoryDefinitionXAmzTargetEnum::AWS_INSIGHTS_INDEX_SERVICE_UPDATE_COST_CATEGORY_DEFINITION;

    $response = $sdk->sdk->updateCostCategoryDefinition($request);

    if ($response->updateCostCategoryDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
