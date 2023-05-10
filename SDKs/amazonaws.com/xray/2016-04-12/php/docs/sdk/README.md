# SDK

## Overview

Amazon Web Services X-Ray provides APIs for managing debug traces and retrieving service maps and other data created by processing those traces.

Amazon Web Services documentation
<https://docs.aws.amazon.com/xray/>
### Available Operations

* [batchGetTraces](#batchgettraces) - Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use <code>GetTraceSummaries</code> to get a list of trace IDs.
* [createGroup](#creategroup) - Creates a group resource with a name and a filter expression. 
* [createSamplingRule](#createsamplingrule) - Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html">GetSamplingRules</a>, and evaluate each rule in ascending order of <i>priority</i> for each request. If a rule matches, the service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to X-Ray with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> to get updated versions of each in-use rule. The updated rule contains a trace quota that the service can use instead of borrowing from the reservoir.
* [deleteGroup](#deletegroup) - Deletes a group resource.
* [deleteResourcePolicy](#deleteresourcepolicy) - Deletes a resource policy from the target Amazon Web Services account.
* [deleteSamplingRule](#deletesamplingrule) - Deletes a sampling rule.
* [getEncryptionConfig](#getencryptionconfig) - Retrieves the current encryption configuration for X-Ray data.
* [getGroup](#getgroup) - Retrieves group resource details.
* [getGroups](#getgroups) - Retrieves all active group details.
* [getInsight](#getinsight) - Retrieves the summary information of an insight. This includes impact to clients and root cause services, the top anomalous services, the category, the state of the insight, and the start and end time of the insight.
* [getInsightEvents](#getinsightevents) - X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray console.
* [getInsightImpactGraph](#getinsightimpactgraph) - Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only structural information. For a complete service graph, use this API with the GetServiceGraph API.
* [getInsightSummaries](#getinsightsummaries) - Retrieves the summaries of all insights in the specified group matching the provided filter values.
* [getSamplingRules](#getsamplingrules) - Retrieves all sampling rules.
* [getSamplingStatisticSummaries](#getsamplingstatisticsummaries) - Retrieves information about recent sampling results for all sampling rules.
* [getSamplingTargets](#getsamplingtargets) - Requests a sampling quota for rules that the service is using to sample requests. 
* [getServiceGraph](#getservicegraph) - Retrieves a document that describes services that process incoming requests, and downstream services that they call as a result. Root services process incoming requests and make calls to downstream services. Root services are applications that use the <a href="https://docs.aws.amazon.com/xray/index.html">Amazon Web Services X-Ray SDK</a>. Downstream services can be other applications, Amazon Web Services resources, HTTP web APIs, or SQL databases.
* [getTimeSeriesServiceStatistics](#gettimeseriesservicestatistics) - Get an aggregation of service statistics defined by a specific time range.
* [getTraceGraph](#gettracegraph) - Retrieves a service graph for one or more specific trace IDs.
* [getTraceSummaries](#gettracesummaries) - <p>Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to <code>BatchGetTraces</code>.</p> <p>A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through <code>api.example.com</code>:</p> <p> <code>service("api.example.com")</code> </p> <p>This filter expression finds traces that have an annotation named <code>account</code> with the value <code>12345</code>:</p> <p> <code>annotation.account = "12345"</code> </p> <p>For a full list of indexed fields and keywords that you can use in filter expressions, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html">Using Filter Expressions</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p>
* [listResourcePolicies](#listresourcepolicies) - Returns the list of resource policies in the target Amazon Web Services account.
* [listTagsForResource](#listtagsforresource) - Returns a list of tags that are applied to the specified Amazon Web Services X-Ray group or sampling rule.
* [putEncryptionConfig](#putencryptionconfig) - Updates the encryption configuration for X-Ray data.
* [putResourcePolicy](#putresourcepolicy) -  Sets the resource policy to grant one or more Amazon Web Services services and accounts permissions to access X-Ray. Each resource policy will be associated with a specific Amazon Web Services account. Each Amazon Web Services account can have a maximum of 5 resource policies, and each policy name must be unique within that account. The maximum size of each resource policy is 5KB. 
* [putTelemetryRecords](#puttelemetryrecords) - Used by the Amazon Web Services X-Ray daemon to upload telemetry.
* [putTraceSegments](#puttracesegments) - <p>Uploads segment documents to Amazon Web Services X-Ray. The <a href="https://docs.aws.amazon.com/xray/index.html">X-Ray SDK</a> generates segment documents and sends them to the X-Ray daemon, which uploads them in batches. A segment document can be a completed segment, an in-progress segment, or an array of subsegments.</p> <p>Segments must include the following fields. For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">Amazon Web Services X-Ray Segment Documents</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p> <p class="title"> <b>Required segment document fields</b> </p> <ul> <li> <p> <code>name</code> - The name of the service that handled the request.</p> </li> <li> <p> <code>id</code> - A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits.</p> </li> <li> <p> <code>trace_id</code> - A unique identifier that connects all segments and subsegments originating from a single client request.</p> </li> <li> <p> <code>start_time</code> - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to milliseconds. For example, <code>1480615200.010</code> or <code>1.480615200010E9</code>.</p> </li> <li> <p> <code>end_time</code> - Time the segment or subsegment was closed. For example, <code>1480615200.090</code> or <code>1.480615200090E9</code>. Specify either an <code>end_time</code> or <code>in_progress</code>.</p> </li> <li> <p> <code>in_progress</code> - Set to <code>true</code> instead of specifying an <code>end_time</code> to record that a segment has been started, but is not complete. Send an in-progress segment when your application receives a request that will take a long time to serve, to trace that the request was received. When the response is sent, send the complete segment to overwrite the in-progress segment.</p> </li> </ul> <p>A <code>trace_id</code> consists of three numbers separated by hyphens. For example, 1-58406520-a006649127e371903a2de979. This includes:</p> <p class="title"> <b>Trace ID Format</b> </p> <ul> <li> <p>The version number, for instance, <code>1</code>.</p> </li> <li> <p>The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For example, 10:00AM December 2nd, 2016 PST in epoch time is <code>1480615200</code> seconds, or <code>58406520</code> in hexadecimal.</p> </li> <li> <p>A 96-bit identifier for the trace, globally unique, in 24 hexadecimal digits.</p> </li> </ul>
* [tagResource](#tagresource) - Applies tags to an existing Amazon Web Services X-Ray group or sampling rule.
* [untagResource](#untagresource) - Removes tags from an Amazon Web Services X-Ray group or sampling rule. You cannot edit or delete system tags (those with an <code>aws:</code> prefix).
* [updateGroup](#updategroup) - Updates a group resource.
* [updateSamplingRule](#updatesamplingrule) - Modifies a sampling rule's configuration.

## batchGetTraces

Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use <code>GetTraceSummaries</code> to get a list of trace IDs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetTracesRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetTracesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetTracesRequest();
    $request->nextToken = 'magnam';
    $request->requestBody = new BatchGetTracesRequestBody();
    $request->requestBody->nextToken = 'debitis';
    $request->requestBody->traceIds = [
        'delectus',
    ];
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->batchGetTraces($request);

    if ($response->batchGetTracesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGroup

Creates a group resource with a name and a filter expression. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateGroupRequestBodyInsightsConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGroupRequest();
    $request->requestBody = new CreateGroupRequestBody();
    $request->requestBody->filterExpression = 'excepturi';
    $request->requestBody->groupName = 'nisi';
    $request->requestBody->insightsConfiguration = new CreateGroupRequestBodyInsightsConfiguration();
    $request->requestBody->insightsConfiguration->insightsEnabled = false;
    $request->requestBody->insightsConfiguration->notificationsEnabled = false;
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->createGroup($request);

    if ($response->createGroupResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSamplingRule

Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html">GetSamplingRules</a>, and evaluate each rule in ascending order of <i>priority</i> for each request. If a rule matches, the service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to X-Ray with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> to get updated versions of each in-use rule. The updated rule contains a trace quota that the service can use instead of borrowing from the reservoir.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSamplingRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSamplingRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateSamplingRuleRequestBodySamplingRule;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSamplingRuleRequest();
    $request->requestBody = new CreateSamplingRuleRequestBody();
    $request->requestBody->samplingRule = new CreateSamplingRuleRequestBodySamplingRule();
    $request->requestBody->samplingRule->attributes = [
        'sapiente' => 'quo',
        'odit' => 'at',
        'at' => 'maiores',
        'molestiae' => 'quod',
    ];
    $request->requestBody->samplingRule->fixedRate = 8009.11;
    $request->requestBody->samplingRule->httpMethod = 'esse';
    $request->requestBody->samplingRule->host = 'totam';
    $request->requestBody->samplingRule->priority = 780529;
    $request->requestBody->samplingRule->reservoirSize = 678880;
    $request->requestBody->samplingRule->resourceARN = 'dicta';
    $request->requestBody->samplingRule->ruleARN = 'nam';
    $request->requestBody->samplingRule->ruleName = 'officia';
    $request->requestBody->samplingRule->serviceName = 'occaecati';
    $request->requestBody->samplingRule->serviceType = 'fugit';
    $request->requestBody->samplingRule->urlPath = 'deleniti';
    $request->requestBody->samplingRule->version = 944669;
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'impedit';

    $response = $sdk->sdk->createSamplingRule($request);

    if ($response->createSamplingRuleResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGroup

Deletes a group resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGroupRequest();
    $request->requestBody = new DeleteGroupRequestBody();
    $request->requestBody->groupARN = 'cum';
    $request->requestBody->groupName = 'esse';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->sdk->deleteGroup($request);

    if ($response->deleteGroupResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResourcePolicy

Deletes a resource policy from the target Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourcePolicyRequest();
    $request->requestBody = new DeleteResourcePolicyRequestBody();
    $request->requestBody->policyName = 'iste';
    $request->requestBody->policyRevisionId = 'dolor';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->deleteResourcePolicy($request);

    if ($response->deleteResourcePolicyResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSamplingRule

Deletes a sampling rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSamplingRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSamplingRuleRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSamplingRuleRequest();
    $request->requestBody = new DeleteSamplingRuleRequestBody();
    $request->requestBody->ruleARN = 'iste';
    $request->requestBody->ruleName = 'iure';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->deleteSamplingRule($request);

    if ($response->deleteSamplingRuleResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEncryptionConfig

Retrieves the current encryption configuration for X-Ray data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEncryptionConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEncryptionConfigRequest();
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->getEncryptionConfig($request);

    if ($response->getEncryptionConfigResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGroup

Retrieves group resource details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupRequest();
    $request->requestBody = new GetGroupRequestBody();
    $request->requestBody->groupARN = 'omnis';
    $request->requestBody->groupName = 'nemo';
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->getGroup($request);

    if ($response->getGroupResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGroups

Retrieves all active group details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupsRequest();
    $request->nextToken = 'architecto';
    $request->requestBody = new GetGroupsRequestBody();
    $request->requestBody->nextToken = 'mollitia';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'numquam';

    $response = $sdk->sdk->getGroups($request);

    if ($response->getGroupsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInsight

Retrieves the summary information of an insight. This includes impact to clients and root cause services, the top anomalous services, the category, the state of the insight, and the start and end time of the insight.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInsightRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInsightRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInsightRequest();
    $request->requestBody = new GetInsightRequestBody();
    $request->requestBody->insightId = 'commodi';
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'quia';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'vitae';

    $response = $sdk->sdk->getInsight($request);

    if ($response->getInsightResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInsightEvents

X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray console.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInsightEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInsightEventsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInsightEventsRequest();
    $request->maxResults = 'laborum';
    $request->nextToken = 'animi';
    $request->requestBody = new GetInsightEventsRequestBody();
    $request->requestBody->insightId = 'enim';
    $request->requestBody->maxResults = 138183;
    $request->requestBody->nextToken = 'quo';
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->getInsightEvents($request);

    if ($response->getInsightEventsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInsightImpactGraph

Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only structural information. For a complete service graph, use this API with the GetServiceGraph API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInsightImpactGraphRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInsightImpactGraphRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInsightImpactGraphRequest();
    $request->requestBody = new GetInsightImpactGraphRequestBody();
    $request->requestBody->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-29T07:12:18.684Z');
    $request->requestBody->insightId = 'laborum';
    $request->requestBody->nextToken = 'quasi';
    $request->requestBody->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-01-27T18:38:42.890Z');
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->getInsightImpactGraph($request);

    if ($response->getInsightImpactGraphResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInsightSummaries

Retrieves the summaries of all insights in the specified group matching the provided filter values.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInsightSummariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInsightSummariesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\InsightStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInsightSummariesRequest();
    $request->maxResults = 'cum';
    $request->nextToken = 'perferendis';
    $request->requestBody = new GetInsightSummariesRequestBody();
    $request->requestBody->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-23T18:36:43.822Z');
    $request->requestBody->groupARN = 'ut';
    $request->requestBody->groupName = 'maiores';
    $request->requestBody->maxResults = 120196;
    $request->requestBody->nextToken = 'corporis';
    $request->requestBody->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-09T11:22:20.922Z');
    $request->requestBody->states = [
        InsightStateEnum::CLOSED,
    ];
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->getInsightSummaries($request);

    if ($response->getInsightSummariesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSamplingRules

Retrieves all sampling rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSamplingRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSamplingRulesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSamplingRulesRequest();
    $request->nextToken = 'molestias';
    $request->requestBody = new GetSamplingRulesRequestBody();
    $request->requestBody->nextToken = 'excepturi';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'repudiandae';

    $response = $sdk->sdk->getSamplingRules($request);

    if ($response->getSamplingRulesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSamplingStatisticSummaries

Retrieves information about recent sampling results for all sampling rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSamplingStatisticSummariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSamplingStatisticSummariesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSamplingStatisticSummariesRequest();
    $request->nextToken = 'sint';
    $request->requestBody = new GetSamplingStatisticSummariesRequestBody();
    $request->requestBody->nextToken = 'veritatis';
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'explicabo';

    $response = $sdk->sdk->getSamplingStatisticSummaries($request);

    if ($response->getSamplingStatisticSummariesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSamplingTargets

Requests a sampling quota for rules that the service is using to sample requests. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSamplingTargetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSamplingTargetsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SamplingStatisticsDocument;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSamplingTargetsRequest();
    $request->requestBody = new GetSamplingTargetsRequestBody();
    $request->requestBody->samplingStatisticsDocuments = [
        new SamplingStatisticsDocument(),
        new SamplingStatisticsDocument(),
        new SamplingStatisticsDocument(),
    ];
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'cupiditate';

    $response = $sdk->sdk->getSamplingTargets($request);

    if ($response->getSamplingTargetsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServiceGraph

Retrieves a document that describes services that process incoming requests, and downstream services that they call as a result. Root services process incoming requests and make calls to downstream services. Root services are applications that use the <a href="https://docs.aws.amazon.com/xray/index.html">Amazon Web Services X-Ray SDK</a>. Downstream services can be other applications, Amazon Web Services resources, HTTP web APIs, or SQL databases.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceGraphRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceGraphRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceGraphRequest();
    $request->nextToken = 'quos';
    $request->requestBody = new GetServiceGraphRequestBody();
    $request->requestBody->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-01T19:07:16.800Z');
    $request->requestBody->groupARN = 'assumenda';
    $request->requestBody->groupName = 'ipsam';
    $request->requestBody->nextToken = 'alias';
    $request->requestBody->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-28T14:19:37.294Z');
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'eum';

    $response = $sdk->sdk->getServiceGraph($request);

    if ($response->getServiceGraphResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTimeSeriesServiceStatistics

Get an aggregation of service statistics defined by a specific time range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTimeSeriesServiceStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTimeSeriesServiceStatisticsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTimeSeriesServiceStatisticsRequest();
    $request->nextToken = 'non';
    $request->requestBody = new GetTimeSeriesServiceStatisticsRequestBody();
    $request->requestBody->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-10T02:35:06.342Z');
    $request->requestBody->entitySelectorExpression = 'aliquid';
    $request->requestBody->forecastStatistics = false;
    $request->requestBody->groupARN = 'provident';
    $request->requestBody->groupName = 'necessitatibus';
    $request->requestBody->nextToken = 'sint';
    $request->requestBody->period = 638921;
    $request->requestBody->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-09T13:58:59.361Z');
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'rerum';

    $response = $sdk->sdk->getTimeSeriesServiceStatistics($request);

    if ($response->getTimeSeriesServiceStatisticsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTraceGraph

Retrieves a service graph for one or more specific trace IDs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTraceGraphRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTraceGraphRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTraceGraphRequest();
    $request->nextToken = 'dicta';
    $request->requestBody = new GetTraceGraphRequestBody();
    $request->requestBody->nextToken = 'magnam';
    $request->requestBody->traceIds = [
        'facere',
        'ea',
        'aliquid',
        'laborum',
    ];
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->getTraceGraph($request);

    if ($response->getTraceGraphResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTraceSummaries

<p>Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to <code>BatchGetTraces</code>.</p> <p>A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through <code>api.example.com</code>:</p> <p> <code>service("api.example.com")</code> </p> <p>This filter expression finds traces that have an annotation named <code>account</code> with the value <code>12345</code>:</p> <p> <code>annotation.account = "12345"</code> </p> <p>For a full list of indexed fields and keywords that you can use in filter expressions, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html">Using Filter Expressions</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTraceSummariesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTraceSummariesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetTraceSummariesRequestBodySamplingStrategy;
use \OpenAPI\OpenAPI\Models\Shared\SamplingStrategyNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTraceSummariesRequestBodyTimeRangeTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTraceSummariesRequest();
    $request->nextToken = 'provident';
    $request->requestBody = new GetTraceSummariesRequestBody();
    $request->requestBody->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-06T10:36:33.442Z');
    $request->requestBody->filterExpression = 'blanditiis';
    $request->requestBody->nextToken = 'deleniti';
    $request->requestBody->sampling = false;
    $request->requestBody->samplingStrategy = new GetTraceSummariesRequestBodySamplingStrategy();
    $request->requestBody->samplingStrategy->name = SamplingStrategyNameEnum::FIXED_RATE;
    $request->requestBody->samplingStrategy->value = 2305.33;
    $request->requestBody->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-18T17:53:23.400Z');
    $request->requestBody->timeRangeType = GetTraceSummariesRequestBodyTimeRangeTypeEnum::TRACE_ID;
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'distinctio';

    $response = $sdk->sdk->getTraceSummaries($request);

    if ($response->getTraceSummariesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResourcePolicies

Returns the list of resource policies in the target Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResourcePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListResourcePoliciesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResourcePoliciesRequest();
    $request->nextToken = 'id';
    $request->requestBody = new ListResourcePoliciesRequestBody();
    $request->requestBody->nextToken = 'labore';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'aspernatur';

    $response = $sdk->sdk->listResourcePolicies($request);

    if ($response->listResourcePoliciesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Returns a list of tags that are applied to the specified Amazon Web Services X-Ray group or sampling rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->nextToken = 'architecto';
    $request->requestBody = new ListTagsForResourceRequestBody();
    $request->requestBody->nextToken = 'magnam';
    $request->requestBody->resourceARN = 'et';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putEncryptionConfig

Updates the encryption configuration for X-Ray data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutEncryptionConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutEncryptionConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutEncryptionConfigRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutEncryptionConfigRequest();
    $request->requestBody = new PutEncryptionConfigRequestBody();
    $request->requestBody->keyId = 'reiciendis';
    $request->requestBody->type = PutEncryptionConfigRequestBodyTypeEnum::KMS;
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->putEncryptionConfig($request);

    if ($response->putEncryptionConfigResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putResourcePolicy

 Sets the resource policy to grant one or more Amazon Web Services services and accounts permissions to access X-Ray. Each resource policy will be associated with a specific Amazon Web Services account. Each Amazon Web Services account can have a maximum of 5 resource policies, and each policy name must be unique within that account. The maximum size of each resource policy is 5KB. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePolicyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutResourcePolicyRequest();
    $request->requestBody = new PutResourcePolicyRequestBody();
    $request->requestBody->bypassPolicyLockoutCheck = false;
    $request->requestBody->policyDocument = 'iure';
    $request->requestBody->policyName = 'doloribus';
    $request->requestBody->policyRevisionId = 'debitis';
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->putResourcePolicy($request);

    if ($response->putResourcePolicyResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putTelemetryRecords

Used by the Amazon Web Services X-Ray daemon to upload telemetry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutTelemetryRecordsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutTelemetryRecordsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\TelemetryRecord;
use \OpenAPI\OpenAPI\Models\Shared\BackendConnectionErrors;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutTelemetryRecordsRequest();
    $request->requestBody = new PutTelemetryRecordsRequestBody();
    $request->requestBody->ec2InstanceId = 'repudiandae';
    $request->requestBody->hostname = 'grim-quinoa.info';
    $request->requestBody->resourceARN = 'repellat';
    $request->requestBody->telemetryRecords = [
        new TelemetryRecord(),
        new TelemetryRecord(),
        new TelemetryRecord(),
        new TelemetryRecord(),
    ];
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->putTelemetryRecords($request);

    if ($response->putTelemetryRecordsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putTraceSegments

<p>Uploads segment documents to Amazon Web Services X-Ray. The <a href="https://docs.aws.amazon.com/xray/index.html">X-Ray SDK</a> generates segment documents and sends them to the X-Ray daemon, which uploads them in batches. A segment document can be a completed segment, an in-progress segment, or an array of subsegments.</p> <p>Segments must include the following fields. For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">Amazon Web Services X-Ray Segment Documents</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p> <p class="title"> <b>Required segment document fields</b> </p> <ul> <li> <p> <code>name</code> - The name of the service that handled the request.</p> </li> <li> <p> <code>id</code> - A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits.</p> </li> <li> <p> <code>trace_id</code> - A unique identifier that connects all segments and subsegments originating from a single client request.</p> </li> <li> <p> <code>start_time</code> - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to milliseconds. For example, <code>1480615200.010</code> or <code>1.480615200010E9</code>.</p> </li> <li> <p> <code>end_time</code> - Time the segment or subsegment was closed. For example, <code>1480615200.090</code> or <code>1.480615200090E9</code>. Specify either an <code>end_time</code> or <code>in_progress</code>.</p> </li> <li> <p> <code>in_progress</code> - Set to <code>true</code> instead of specifying an <code>end_time</code> to record that a segment has been started, but is not complete. Send an in-progress segment when your application receives a request that will take a long time to serve, to trace that the request was received. When the response is sent, send the complete segment to overwrite the in-progress segment.</p> </li> </ul> <p>A <code>trace_id</code> consists of three numbers separated by hyphens. For example, 1-58406520-a006649127e371903a2de979. This includes:</p> <p class="title"> <b>Trace ID Format</b> </p> <ul> <li> <p>The version number, for instance, <code>1</code>.</p> </li> <li> <p>The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For example, 10:00AM December 2nd, 2016 PST in epoch time is <code>1480615200</code> seconds, or <code>58406520</code> in hexadecimal.</p> </li> <li> <p>A 96-bit identifier for the trace, globally unique, in 24 hexadecimal digits.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutTraceSegmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutTraceSegmentsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutTraceSegmentsRequest();
    $request->requestBody = new PutTraceSegmentsRequestBody();
    $request->requestBody->traceSegmentDocuments = [
        'sunt',
    ];
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->putTraceSegments($request);

    if ($response->putTraceSegmentsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Applies tags to an existing Amazon Web Services X-Ray group or sampling rule.

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
    $request->requestBody->resourceARN = 'ea';
    $request->requestBody->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'autem';
    $request->xAmzSignedHeaders = 'nam';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags from an Amazon Web Services X-Ray group or sampling rule. You cannot edit or delete system tags (those with an <code>aws:</code> prefix).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->requestBody = new UntagResourceRequestBody();
    $request->requestBody->resourceARN = 'eaque';
    $request->requestBody->tagKeys = [
        'nemo',
        'voluptatibus',
        'perferendis',
        'fugiat',
    ];
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateGroup

Updates a group resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateGroupRequestBodyInsightsConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateGroupRequest();
    $request->requestBody = new UpdateGroupRequestBody();
    $request->requestBody->filterExpression = 'dolores';
    $request->requestBody->groupARN = 'quis';
    $request->requestBody->groupName = 'totam';
    $request->requestBody->insightsConfiguration = new UpdateGroupRequestBodyInsightsConfiguration();
    $request->requestBody->insightsConfiguration->insightsEnabled = false;
    $request->requestBody->insightsConfiguration->notificationsEnabled = false;
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'nesciunt';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'dolores';

    $response = $sdk->sdk->updateGroup($request);

    if ($response->updateGroupResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSamplingRule

Modifies a sampling rule's configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSamplingRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSamplingRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSamplingRuleRequestBodySamplingRuleUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSamplingRuleRequest();
    $request->requestBody = new UpdateSamplingRuleRequestBody();
    $request->requestBody->samplingRuleUpdate = new UpdateSamplingRuleRequestBodySamplingRuleUpdate();
    $request->requestBody->samplingRuleUpdate->attributes = [
        'quam' => 'dolor',
        'vero' => 'nostrum',
        'hic' => 'recusandae',
        'omnis' => 'facilis',
    ];
    $request->requestBody->samplingRuleUpdate->fixedRate = 5966.56;
    $request->requestBody->samplingRuleUpdate->httpMethod = 'voluptatem';
    $request->requestBody->samplingRuleUpdate->host = 'porro';
    $request->requestBody->samplingRuleUpdate->priority = 164694;
    $request->requestBody->samplingRuleUpdate->reservoirSize = 500026;
    $request->requestBody->samplingRuleUpdate->resourceARN = 'error';
    $request->requestBody->samplingRuleUpdate->ruleARN = 'eaque';
    $request->requestBody->samplingRuleUpdate->ruleName = 'occaecati';
    $request->requestBody->samplingRuleUpdate->serviceName = 'rerum';
    $request->requestBody->samplingRuleUpdate->serviceType = 'adipisci';
    $request->requestBody->samplingRuleUpdate->urlPath = 'asperiores';
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'provident';

    $response = $sdk->sdk->updateSamplingRule($request);

    if ($response->updateSamplingRuleResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
