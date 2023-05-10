# SDK

## Overview

<p> This section provides documentation for the Amazon CodeGuru Profiler API operations. </p> <p> Amazon CodeGuru Profiler collects runtime performance data from your live applications, and provides recommendations that can help you fine-tune your application performance. Using machine learning algorithms, CodeGuru Profiler can help you find your most expensive lines of code and suggest ways you can improve efficiency and remove CPU bottlenecks. </p> <p> Amazon CodeGuru Profiler provides different visualizations of profiling data to help you identify what code is running on the CPU, see how much time is consumed, and suggest ways to reduce CPU utilization. </p> <note> <p>Amazon CodeGuru Profiler currently supports applications written in all Java virtual machine (JVM) languages and Python. While CodeGuru Profiler supports both visualizations and recommendations for applications written in Java, it can also generate visualizations and a subset of recommendations for applications written in other JVM languages and Python.</p> </note> <p> For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/what-is-codeguru-profiler.html">What is Amazon CodeGuru Profiler</a> in the <i>Amazon CodeGuru Profiler User Guide</i>. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codeguru-profiler/>
### Available Operations

* [addNotificationChannels](#addnotificationchannels) - Add up to 2 anomaly notifications channels for a profiling group.
* [batchGetFrameMetricData](#batchgetframemetricdata) -  Returns the time series of values for a requested list of frame metrics from a time period.
* [configureAgent](#configureagent) -  Used by profiler agents to report their current state and to receive remote configuration updates. For example, <code>ConfigureAgent</code> can be used to tell an agent whether to profile or not and for how long to return profiling data. 
* [createProfilingGroup](#createprofilinggroup) - Creates a profiling group.
* [deleteProfilingGroup](#deleteprofilinggroup) - Deletes a profiling group.
* [describeProfilingGroup](#describeprofilinggroup) -  Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> object that contains information about the requested profiling group. 
* [getFindingsReportAccountSummary](#getfindingsreportaccountsummary) -  Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_FindingsReportSummary.html"> <code>FindingsReportSummary</code> </a> objects that contain analysis results for all profiling groups in your AWS account. 
* [getNotificationConfiguration](#getnotificationconfiguration) - Get the current configuration for anomaly notifications for a profiling group.
* [getPolicy](#getpolicy) -  Returns the JSON-formatted resource-based policy on a profiling group. 
* [getProfile](#getprofile) - <p> Gets the aggregated profile of a profiling group for a specified time range. Amazon CodeGuru Profiler collects posted agent profiles for a profiling group into aggregated profiles. </p> <pre><code> &lt;note&gt; &lt;p&gt; Because aggregated profiles expire over time &lt;code&gt;GetProfile&lt;/code&gt; is not idempotent. &lt;/p&gt; &lt;/note&gt; &lt;p&gt; Specify the time range for the requested aggregated profile using 1 or 2 of the following parameters: &lt;code&gt;startTime&lt;/code&gt;, &lt;code&gt;endTime&lt;/code&gt;, &lt;code&gt;period&lt;/code&gt;. The maximum time range allowed is 7 days. If you specify all 3 parameters, an exception is thrown. If you specify only &lt;code&gt;period&lt;/code&gt;, the latest aggregated profile is returned. &lt;/p&gt; &lt;p&gt; Aggregated profiles are available with aggregation periods of 5 minutes, 1 hour, and 1 day, aligned to UTC. The aggregation period of an aggregated profile determines how long it is retained. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AggregatedProfileTime.html&quot;&gt; &lt;code&gt;AggregatedProfileTime&lt;/code&gt; &lt;/a&gt;. The aggregated profile's aggregation period determines how long it is retained by CodeGuru Profiler. &lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 5 minutes, the aggregated profile is retained for 15 days. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 1 hour, the aggregated profile is retained for 60 days. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 1 day, the aggregated profile is retained for 3 years. &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;p&gt;There are two use cases for calling &lt;code&gt;GetProfile&lt;/code&gt;.&lt;/p&gt; &lt;ol&gt; &lt;li&gt; &lt;p&gt; If you want to return an aggregated profile that already exists, use &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html&quot;&gt; &lt;code&gt;ListProfileTimes&lt;/code&gt; &lt;/a&gt; to view the time ranges of existing aggregated profiles. Use them in a &lt;code&gt;GetProfile&lt;/code&gt; request to return a specific, existing aggregated profile. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If you want to return an aggregated profile for a time range that doesn't align with an existing aggregated profile, then CodeGuru Profiler makes a best effort to combine existing aggregated profiles from the requested time range and return them as one aggregated profile. &lt;/p&gt; &lt;p&gt; If aggregated profiles do not exist for the full time range requested, then aggregated profiles for a smaller time range are returned. For example, if the requested time range is from 00:00 to 00:20, and the existing aggregated profiles are from 00:15 and 00:25, then the aggregated profiles from 00:15 to 00:20 are returned. &lt;/p&gt; &lt;/li&gt; &lt;/ol&gt; </code></pre>
* [getRecommendations](#getrecommendations) -  Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Recommendation.html"> <code>Recommendation</code> </a> objects that contain recommendations for a profiling group for a given time period. A list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Anomaly.html"> <code>Anomaly</code> </a> objects that contains details about anomalies detected in the profiling group for the same time period is also returned. 
* [listFindingsReports](#listfindingsreports) - List the available reports for a given profiling group and time range.
* [listProfileTimes](#listprofiletimes) - Lists the start times of the available aggregated profiles of a profiling group for an aggregation period within the specified time range.
* [listProfilingGroups](#listprofilinggroups) -  Returns a list of profiling groups. The profiling groups are returned as <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> objects. 
* [listTagsForResource](#listtagsforresource) -  Returns a list of the tags that are assigned to a specified resource. 
* [postAgentProfile](#postagentprofile) -  Submits profiling data to an aggregated profile of a profiling group. To get an aggregated profile that is created with this profiling data, use <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html"> <code>GetProfile</code> </a>. 
* [putPermission](#putpermission) - <p> Adds permissions to a profiling group's resource-based policy that are provided using an action group. If a profiling group doesn't have a resource-based policy, one is created for it using the permissions in the action group and the roles and users in the <code>principals</code> parameter. </p> <pre><code> &lt;p&gt; The one supported action group that can be added is &lt;code&gt;agentPermission&lt;/code&gt; which grants &lt;code&gt;ConfigureAgent&lt;/code&gt; and &lt;code&gt;PostAgent&lt;/code&gt; permissions. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html&quot;&gt;Resource-based policies in CodeGuru Profiler&lt;/a&gt; in the &lt;i&gt;Amazon CodeGuru Profiler User Guide&lt;/i&gt;, &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html&quot;&gt; &lt;code&gt;ConfigureAgent&lt;/code&gt; &lt;/a&gt;, and &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html&quot;&gt; &lt;code&gt;PostAgentProfile&lt;/code&gt; &lt;/a&gt;. &lt;/p&gt; &lt;p&gt; The first time you call &lt;code&gt;PutPermission&lt;/code&gt; on a profiling group, do not specify a &lt;code&gt;revisionId&lt;/code&gt; because it doesn't have a resource-based policy. Subsequent calls must provide a &lt;code&gt;revisionId&lt;/code&gt; to specify which revision of the resource-based policy to add the permissions to. &lt;/p&gt; &lt;p&gt; The response contains the profiling group's JSON-formatted resource policy. &lt;/p&gt; </code></pre>
* [removeNotificationChannel](#removenotificationchannel) - Remove one anomaly notifications channel for a profiling group.
* [removePermission](#removepermission) -  Removes permissions from a profiling group's resource-based policy that are provided using an action group. The one supported action group that can be removed is <code>agentPermission</code> which grants <code>ConfigureAgent</code> and <code>PostAgent</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html">Resource-based policies in CodeGuru Profiler</a> in the <i>Amazon CodeGuru Profiler User Guide</i>, <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html"> <code>PostAgentProfile</code> </a>. 
* [submitFeedback](#submitfeedback) - Sends feedback to CodeGuru Profiler about whether the anomaly detected by the analysis is useful or not.
* [tagResource](#tagresource) -  Use to assign one or more tags to a resource. 
* [untagResource](#untagresource) -  Use to remove one or more tags from a resource. 
* [updateProfilingGroup](#updateprofilinggroup) - Updates a profiling group.

## addNotificationChannels

Add up to 2 anomaly notifications channels for a profiling group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddNotificationChannelsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddNotificationChannelsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Channel;
use \OpenAPI\OpenAPI\Models\Shared\EventPublisherEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddNotificationChannelsRequest();
    $request->requestBody = new AddNotificationChannelsRequestBody();
    $request->requestBody->channels = [
        new Channel(),
        new Channel(),
        new Channel(),
    ];
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'delectus';
    $request->profilingGroupName = 'tempora';

    $response = $sdk->sdk->addNotificationChannels($request);

    if ($response->addNotificationChannelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetFrameMetricData

 Returns the time series of values for a requested list of frame metrics from a time period.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetFrameMetricDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetFrameMetricDataRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\FrameMetric;
use \OpenAPI\OpenAPI\Models\Shared\MetricTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetFrameMetricDataTargetResolutionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetFrameMetricDataRequest();
    $request->requestBody = new BatchGetFrameMetricDataRequestBody();
    $request->requestBody->frameMetrics = [
        new FrameMetric(),
        new FrameMetric(),
    ];
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'nisi';
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-29T11:50:59.674Z');
    $request->period = 'ab';
    $request->profilingGroupName = 'quis';
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-09T10:00:51.349Z');
    $request->targetResolution = BatchGetFrameMetricDataTargetResolutionEnum::PT5_M;

    $response = $sdk->sdk->batchGetFrameMetricData($request);

    if ($response->batchGetFrameMetricDataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## configureAgent

 Used by profiler agents to report their current state and to receive remote configuration updates. For example, <code>ConfigureAgent</code> can be used to tell an agent whether to profile or not and for how long to return profiling data. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConfigureAgentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConfigureAgentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfigureAgentRequest();
    $request->requestBody = new ConfigureAgentRequestBody();
    $request->requestBody->fleetInstanceId = 'ipsam';
    $request->requestBody->metadata = [
        'sapiente' => 'quo',
        'odit' => 'at',
        'at' => 'maiores',
        'molestiae' => 'quod',
    ];
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'nam';
    $request->profilingGroupName = 'officia';

    $response = $sdk->sdk->configureAgent($request);

    if ($response->configureAgentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProfilingGroup

Creates a profiling group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProfilingGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateProfilingGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateProfilingGroupRequestBodyAgentOrchestrationConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateProfilingGroupRequestBodyComputePlatformEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProfilingGroupRequest();
    $request->requestBody = new CreateProfilingGroupRequestBody();
    $request->requestBody->agentOrchestrationConfig = new CreateProfilingGroupRequestBodyAgentOrchestrationConfig();
    $request->requestBody->agentOrchestrationConfig->profilingEnabled = false;
    $request->requestBody->computePlatform = CreateProfilingGroupRequestBodyComputePlatformEnum::AWS_LAMBDA;
    $request->requestBody->profilingGroupName = 'fugit';
    $request->requestBody->tags = [
        'hic' => 'optio',
        'totam' => 'beatae',
        'commodi' => 'molestiae',
    ];
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->clientToken = 'aspernatur';

    $response = $sdk->sdk->createProfilingGroup($request);

    if ($response->createProfilingGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProfilingGroup

Deletes a profiling group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProfilingGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProfilingGroupRequest();
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'natus';
    $request->profilingGroupName = 'laboriosam';

    $response = $sdk->sdk->deleteProfilingGroup($request);

    if ($response->deleteProfilingGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeProfilingGroup

 Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> object that contains information about the requested profiling group. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProfilingGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeProfilingGroupRequest();
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'iure';
    $request->profilingGroupName = 'saepe';

    $response = $sdk->sdk->describeProfilingGroup($request);

    if ($response->describeProfilingGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFindingsReportAccountSummary

 Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_FindingsReportSummary.html"> <code>FindingsReportSummary</code> </a> objects that contain analysis results for all profiling groups in your AWS account. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFindingsReportAccountSummaryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFindingsReportAccountSummaryRequest();
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'laborum';
    $request->dailyReportsOnly = false;
    $request->maxResults = 170909;
    $request->nextToken = 'dolorem';

    $response = $sdk->sdk->getFindingsReportAccountSummary($request);

    if ($response->getFindingsReportAccountSummaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNotificationConfiguration

Get the current configuration for anomaly notifications for a profiling group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNotificationConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNotificationConfigurationRequest();
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'minima';
    $request->profilingGroupName = 'excepturi';

    $response = $sdk->sdk->getNotificationConfiguration($request);

    if ($response->getNotificationConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPolicy

 Returns the JSON-formatted resource-based policy on a profiling group. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPolicyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPolicyRequest();
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->profilingGroupName = 'dolorem';

    $response = $sdk->sdk->getPolicy($request);

    if ($response->getPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProfile

<p> Gets the aggregated profile of a profiling group for a specified time range. Amazon CodeGuru Profiler collects posted agent profiles for a profiling group into aggregated profiles. </p> <pre><code> &lt;note&gt; &lt;p&gt; Because aggregated profiles expire over time &lt;code&gt;GetProfile&lt;/code&gt; is not idempotent. &lt;/p&gt; &lt;/note&gt; &lt;p&gt; Specify the time range for the requested aggregated profile using 1 or 2 of the following parameters: &lt;code&gt;startTime&lt;/code&gt;, &lt;code&gt;endTime&lt;/code&gt;, &lt;code&gt;period&lt;/code&gt;. The maximum time range allowed is 7 days. If you specify all 3 parameters, an exception is thrown. If you specify only &lt;code&gt;period&lt;/code&gt;, the latest aggregated profile is returned. &lt;/p&gt; &lt;p&gt; Aggregated profiles are available with aggregation periods of 5 minutes, 1 hour, and 1 day, aligned to UTC. The aggregation period of an aggregated profile determines how long it is retained. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AggregatedProfileTime.html&quot;&gt; &lt;code&gt;AggregatedProfileTime&lt;/code&gt; &lt;/a&gt;. The aggregated profile's aggregation period determines how long it is retained by CodeGuru Profiler. &lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 5 minutes, the aggregated profile is retained for 15 days. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 1 hour, the aggregated profile is retained for 60 days. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If the aggregation period is 1 day, the aggregated profile is retained for 3 years. &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;p&gt;There are two use cases for calling &lt;code&gt;GetProfile&lt;/code&gt;.&lt;/p&gt; &lt;ol&gt; &lt;li&gt; &lt;p&gt; If you want to return an aggregated profile that already exists, use &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html&quot;&gt; &lt;code&gt;ListProfileTimes&lt;/code&gt; &lt;/a&gt; to view the time ranges of existing aggregated profiles. Use them in a &lt;code&gt;GetProfile&lt;/code&gt; request to return a specific, existing aggregated profile. &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; If you want to return an aggregated profile for a time range that doesn't align with an existing aggregated profile, then CodeGuru Profiler makes a best effort to combine existing aggregated profiles from the requested time range and return them as one aggregated profile. &lt;/p&gt; &lt;p&gt; If aggregated profiles do not exist for the full time range requested, then aggregated profiles for a smaller time range are returned. For example, if the requested time range is from 00:00 to 00:20, and the existing aggregated profiles are from 00:15 and 00:25, then the aggregated profiles from 00:15 to 00:20 are returned. &lt;/p&gt; &lt;/li&gt; &lt;/ol&gt; </code></pre>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProfileRequest();
    $request->accept = 'culpa';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'quam';
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-03T18:49:53.900Z');
    $request->maxDepth = 623510;
    $request->period = 'quia';
    $request->profilingGroupName = 'quis';
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-29T17:10:10.440Z');

    $response = $sdk->sdk->getProfile($request);

    if ($response->getProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRecommendations

 Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Recommendation.html"> <code>Recommendation</code> </a> objects that contain recommendations for a profiling group for a given time period. A list of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Anomaly.html"> <code>Anomaly</code> </a> objects that contains details about anomalies detected in the profiling group for the same time period is also returned. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRecommendationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRecommendationsRequest();
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-11T16:11:54.761Z');
    $request->locale = 'aut';
    $request->profilingGroupName = 'quasi';
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-29T07:12:18.684Z');

    $response = $sdk->sdk->getRecommendations($request);

    if ($response->getRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFindingsReports

List the available reports for a given profiling group and time range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFindingsReportsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFindingsReportsRequest();
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->dailyReportsOnly = false;
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-31T23:49:03.388Z');
    $request->maxResults = 604846;
    $request->nextToken = 'voluptate';
    $request->profilingGroupName = 'cum';
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-17T16:42:52.927Z');

    $response = $sdk->sdk->listFindingsReports($request);

    if ($response->listFindingsReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProfileTimes

Lists the start times of the available aggregated profiles of a profiling group for an aggregation period within the specified time range.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProfileTimesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListProfileTimesOrderByEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListProfileTimesPeriodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProfileTimesRequest();
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'iusto';
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-24T15:19:40.519Z');
    $request->maxResults = 317983;
    $request->nextToken = 'accusamus';
    $request->orderBy = ListProfileTimesOrderByEnum::TIMESTAMP_DESCENDING;
    $request->period = ListProfileTimesPeriodEnum::P1_D;
    $request->profilingGroupName = 'quae';
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-23T05:56:38.936Z');

    $response = $sdk->sdk->listProfileTimes($request);

    if ($response->listProfileTimesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProfilingGroups

 Returns a list of profiling groups. The profiling groups are returned as <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html"> <code>ProfilingGroupDescription</code> </a> objects. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProfilingGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProfilingGroupsRequest();
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'voluptates';
    $request->includeDescription = false;
    $request->maxResults = 93940;
    $request->nextToken = 'repudiandae';

    $response = $sdk->sdk->listProfilingGroups($request);

    if ($response->listProfilingGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

 Returns a list of the tags that are assigned to a specified resource. 

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
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';
    $request->resourceArn = 'quibusdam';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAgentProfile

 Submits profiling data to an aggregated profile of a profiling group. To get an aggregated profile that is created with this profiling data, use <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html"> <code>GetProfile</code> </a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAgentProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostAgentProfileRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAgentProfileRequest();
    $request->contentType = 'explicabo';
    $request->requestBody = new PostAgentProfileRequestBody();
    $request->requestBody->agentProfile = 'deserunt';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->profileToken = 'quos';
    $request->profilingGroupName = 'perferendis';

    $response = $sdk->sdk->postAgentProfile($request);

    if ($response->postAgentProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putPermission

<p> Adds permissions to a profiling group's resource-based policy that are provided using an action group. If a profiling group doesn't have a resource-based policy, one is created for it using the permissions in the action group and the roles and users in the <code>principals</code> parameter. </p> <pre><code> &lt;p&gt; The one supported action group that can be added is &lt;code&gt;agentPermission&lt;/code&gt; which grants &lt;code&gt;ConfigureAgent&lt;/code&gt; and &lt;code&gt;PostAgent&lt;/code&gt; permissions. For more information, see &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html&quot;&gt;Resource-based policies in CodeGuru Profiler&lt;/a&gt; in the &lt;i&gt;Amazon CodeGuru Profiler User Guide&lt;/i&gt;, &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html&quot;&gt; &lt;code&gt;ConfigureAgent&lt;/code&gt; &lt;/a&gt;, and &lt;a href=&quot;https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html&quot;&gt; &lt;code&gt;PostAgentProfile&lt;/code&gt; &lt;/a&gt;. &lt;/p&gt; &lt;p&gt; The first time you call &lt;code&gt;PutPermission&lt;/code&gt; on a profiling group, do not specify a &lt;code&gt;revisionId&lt;/code&gt; because it doesn't have a resource-based policy. Subsequent calls must provide a &lt;code&gt;revisionId&lt;/code&gt; to specify which revision of the resource-based policy to add the permissions to. &lt;/p&gt; &lt;p&gt; The response contains the profiling group's JSON-formatted resource policy. &lt;/p&gt; </code></pre>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutPermissionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutPermissionActionGroupEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutPermissionRequest();
    $request->requestBody = new PutPermissionRequestBody();
    $request->requestBody->principals = [
        'assumenda',
    ];
    $request->requestBody->revisionId = 'ipsam';
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'tempore';
    $request->actionGroup = PutPermissionActionGroupEnum::AGENT_PERMISSIONS;
    $request->profilingGroupName = 'labore';

    $response = $sdk->sdk->putPermission($request);

    if ($response->putPermissionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeNotificationChannel

Remove one anomaly notifications channel for a profiling group.

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
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'provident';
    $request->channelId = 'necessitatibus';
    $request->profilingGroupName = 'sint';

    $response = $sdk->sdk->removeNotificationChannel($request);

    if ($response->removeNotificationChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removePermission

 Removes permissions from a profiling group's resource-based policy that are provided using an action group. The one supported action group that can be removed is <code>agentPermission</code> which grants <code>ConfigureAgent</code> and <code>PostAgent</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html">Resource-based policies in CodeGuru Profiler</a> in the <i>Amazon CodeGuru Profiler User Guide</i>, <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html"> <code>PostAgentProfile</code> </a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemovePermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemovePermissionActionGroupEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemovePermissionRequest();
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'in';
    $request->actionGroup = RemovePermissionActionGroupEnum::AGENT_PERMISSIONS;
    $request->profilingGroupName = 'illum';
    $request->revisionId = 'maiores';

    $response = $sdk->sdk->removePermission($request);

    if ($response->removePermissionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## submitFeedback

Sends feedback to CodeGuru Profiler about whether the anomaly detected by the analysis is useful or not.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SubmitFeedbackRequest;
use \OpenAPI\OpenAPI\Models\Operations\SubmitFeedbackRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SubmitFeedbackRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubmitFeedbackRequest();
    $request->requestBody = new SubmitFeedbackRequestBody();
    $request->requestBody->comment = 'rerum';
    $request->requestBody->type = SubmitFeedbackRequestBodyTypeEnum::POSITIVE;
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->anomalyInstanceId = 'non';
    $request->profilingGroupName = 'occaecati';

    $response = $sdk->sdk->submitFeedback($request);

    if ($response->submitFeedbackResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

 Use to assign one or more tags to a resource. 

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
        'accusamus' => 'delectus',
        'quidem' => 'provident',
    ];
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->resourceArn = 'nisi';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

 Use to remove one or more tags from a resource. 

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
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'magnam';
    $request->resourceArn = 'distinctio';
    $request->tagKeys = [
        'labore',
        'labore',
        'suscipit',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProfilingGroup

Updates a profiling group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProfilingGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProfilingGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProfilingGroupRequestBodyAgentOrchestrationConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProfilingGroupRequest();
    $request->requestBody = new UpdateProfilingGroupRequestBody();
    $request->requestBody->agentOrchestrationConfig = new UpdateProfilingGroupRequestBodyAgentOrchestrationConfig();
    $request->requestBody->agentOrchestrationConfig->profilingEnabled = false;
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'magnam';
    $request->profilingGroupName = 'et';

    $response = $sdk->sdk->updateProfilingGroup($request);

    if ($response->updateProfilingGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
