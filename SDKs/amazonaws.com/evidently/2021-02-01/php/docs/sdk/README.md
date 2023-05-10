# SDK

## Overview

<p>You can use Amazon CloudWatch Evidently to safely validate new features by serving them to a specified percentage of your users while you roll out the feature. You can monitor the performance of the new feature to help you decide when to ramp up traffic to your users. This helps you reduce risk and identify unintended consequences before you fully launch the feature.</p> <p>You can also conduct A/B experiments to make feature design decisions based on evidence and data. An experiment can test as many as five variations at once. Evidently collects experiment data and analyzes it using statistical methods. It also provides clear recommendations about which variations perform better. You can test both user-facing features and backend features.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/evidently/>
### Available Operations

* [batchEvaluateFeature](#batchevaluatefeature) - <p>This operation assigns feature variation to user sessions. For each user session, you pass in an <code>entityID</code> that represents the user. Evidently then checks the evaluation rules and assigns the variation.</p> <p>The first rules that are evaluated are the override rules. If the user's <code>entityID</code> matches an override rule, the user is served the variation specified by that rule.</p> <p>Next, if there is a launch of the feature, the user might be assigned to a variation in the launch. The chance of this depends on the percentage of users that are allocated to that launch. If the user is enrolled in the launch, the variation they are served depends on the allocation of the various feature variations used for the launch.</p> <p>If the user is not assigned to a launch, and there is an ongoing experiment for this feature, the user might be assigned to a variation in the experiment. The chance of this depends on the percentage of users that are allocated to that experiment. If the user is enrolled in the experiment, the variation they are served depends on the allocation of the various feature variations used for the experiment. </p> <p>If the user is not assigned to a launch or experiment, they are served the default variation.</p>
* [createExperiment](#createexperiment) - <p>Creates an Evidently <i>experiment</i>. Before you create an experiment, you must create the feature to use for the experiment.</p> <p>An experiment helps you make feature design decisions based on evidence and data. An experiment can test as many as five variations at once. Evidently collects experiment data and analyzes it by statistical methods, and provides clear recommendations about which variations perform better.</p> <p>You can optionally specify a <code>segment</code> to have the experiment consider only certain audience types in the experiment, such as using only user sessions from a certain location or who use a certain internet browser.</p> <p>Don't use this operation to update an existing experiment. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateExperiment.html">UpdateExperiment</a>. </p>
* [createFeature](#createfeature) - <p>Creates an Evidently <i>feature</i> that you want to launch or test. You can define up to five variations of a feature, and use these variations in your launches and experiments. A feature must be created in a project. For information about creating a project, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateProject.html">CreateProject</a>.</p> <p>Don't use this operation to update an existing feature. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateFeature.html">UpdateFeature</a>. </p>
* [createLaunch](#createlaunch) - <p>Creates a <i>launch</i> of a given feature. Before you create a launch, you must create the feature to use for the launch.</p> <p>You can use a launch to safely validate new features by serving them to a specified percentage of your users while you roll out the feature. You can monitor the performance of the new feature to help you decide when to ramp up traffic to more users. This helps you reduce risk and identify unintended consequences before you fully launch the feature.</p> <p>Don't use this operation to update an existing launch. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateLaunch.html">UpdateLaunch</a>. </p>
* [createProject](#createproject) - <p>Creates a project, which is the logical object in Evidently that can contain features, launches, and experiments. Use projects to group similar features together.</p> <p>To update an existing project, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateProject.html">UpdateProject</a>.</p>
* [createSegment](#createsegment) - <p>Use this operation to define a <i>segment</i> of your audience. A segment is a portion of your audience that share one or more characteristics. Examples could be Chrome browser users, users in Europe, or Firefox browser users in Europe who also fit other criteria that your application collects, such as age.</p> <p>Using a segment in an experiment limits that experiment to evaluate only the users who match the segment criteria. Using one or more segments in a launch allows you to define different traffic splits for the different audience segments.</p> <p>For more information about segment pattern syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html#CloudWatch-Evidently-segments-syntax.html"> Segment rule pattern syntax</a>.</p> <p>The pattern that you define for a segment is matched against the value of <code>evaluationContext</code>, which is passed into Evidently in the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation, when Evidently assigns a feature variation to a user.</p>
* [deleteExperiment](#deleteexperiment) - <p>Deletes an Evidently experiment. The feature used for the experiment is not deleted.</p> <p>To stop an experiment without deleting it, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StopExperiment.html">StopExperiment</a>. </p>
* [deleteFeature](#deletefeature) - Deletes an Evidently feature.
* [deleteLaunch](#deletelaunch) - <p>Deletes an Evidently launch. The feature used for the launch is not deleted.</p> <p>To stop a launch without deleting it, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StopLaunch.html">StopLaunch</a>. </p>
* [deleteProject](#deleteproject) - Deletes an Evidently project. Before you can delete a project, you must delete all the features that the project contains. To delete a feature, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_DeleteFeature.html">DeleteFeature</a>.
* [deleteSegment](#deletesegment) - Deletes a segment. You can't delete a segment that is being used in a launch or experiment, even if that launch or experiment is not currently running.
* [evaluateFeature](#evaluatefeature) - <p>This operation assigns a feature variation to one given user session. You pass in an <code>entityID</code> that represents the user. Evidently then checks the evaluation rules and assigns the variation.</p> <p>The first rules that are evaluated are the override rules. If the user's <code>entityID</code> matches an override rule, the user is served the variation specified by that rule.</p> <p>If there is a current launch with this feature that uses segment overrides, and if the user session's <code>evaluationContext</code> matches a segment rule defined in a segment override, the configuration in the segment overrides is used. For more information about segments, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateSegment.html">CreateSegment</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html">Use segments to focus your audience</a>.</p> <p>If there is a launch with no segment overrides, the user might be assigned to a variation in the launch. The chance of this depends on the percentage of users that are allocated to that launch. If the user is enrolled in the launch, the variation they are served depends on the allocation of the various feature variations used for the launch.</p> <p>If the user is not assigned to a launch, and there is an ongoing experiment for this feature, the user might be assigned to a variation in the experiment. The chance of this depends on the percentage of users that are allocated to that experiment.</p> <p>If the experiment uses a segment, then only user sessions with <code>evaluationContext</code> values that match the segment rule are used in the experiment.</p> <p>If the user is enrolled in the experiment, the variation they are served depends on the allocation of the various feature variations used for the experiment. </p> <p>If the user is not assigned to a launch or experiment, they are served the default variation.</p>
* [getExperiment](#getexperiment) - Returns the details about one experiment. You must already know the experiment name. To retrieve a list of experiments in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListExperiments.html">ListExperiments</a>.
* [getExperimentResults](#getexperimentresults) - <p>Retrieves the results of a running or completed experiment. No results are available until there have been 100 events for each variation and at least 10 minutes have passed since the start of the experiment. To increase the statistical power, Evidently performs an additional offline p-value analysis at the end of the experiment. Offline p-value analysis can detect statistical significance in some cases where the anytime p-values used during the experiment do not find statistical significance.</p> <p>Experiment results are available up to 63 days after the start of the experiment. They are not available after that because of CloudWatch data retention policies.</p>
* [getFeature](#getfeature) - Returns the details about one feature. You must already know the feature name. To retrieve a list of features in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListFeatures.html">ListFeatures</a>.
* [getLaunch](#getlaunch) - Returns the details about one launch. You must already know the launch name. To retrieve a list of launches in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListLaunches.html">ListLaunches</a>.
* [getProject](#getproject) - Returns the details about one launch. You must already know the project name. To retrieve a list of projects in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListProjects.html">ListProjects</a>.
* [getSegment](#getsegment) - Returns information about the specified segment. Specify the segment you want to view by specifying its ARN.
* [listExperiments](#listexperiments) - Returns configuration details about all the experiments in the specified project.
* [listFeatures](#listfeatures) - Returns configuration details about all the features in the specified project.
* [listLaunches](#listlaunches) - Returns configuration details about all the launches in the specified project.
* [listProjects](#listprojects) - Returns configuration details about all the projects in the current Region in your account.
* [listSegmentReferences](#listsegmentreferences) - Use this operation to find which experiments or launches are using a specified segment.
* [listSegments](#listsegments) - Returns a list of audience segments that you have created in your account in this Region.
* [listTagsForResource](#listtagsforresource) - Displays the tags associated with an Evidently resource.
* [putProjectEvents](#putprojectevents) - Sends performance events to Evidently. These events can be used to evaluate a launch or an experiment.
* [startExperiment](#startexperiment) - Starts an existing experiment. To create an experiment, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateExperiment.html">CreateExperiment</a>.
* [startLaunch](#startlaunch) - Starts an existing launch. To create a launch, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateLaunch.html">CreateLaunch</a>.
* [stopExperiment](#stopexperiment) - Stops an experiment that is currently running. If you stop an experiment, you can't resume it or restart it.
* [stopLaunch](#stoplaunch) - Stops a launch that is currently running. After you stop a launch, you will not be able to resume it or restart it. Also, it will not be evaluated as a rule for traffic allocation, and the traffic that was allocated to the launch will instead be available to the feature's experiment, if there is one. Otherwise, all traffic will be served the default variation after the launch is stopped.
* [tagResource](#tagresource) - <p>Assigns one or more tags (key-value pairs) to the specified CloudWatch Evidently resource. Projects, features, launches, and experiments can be tagged.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
* [testSegmentPattern](#testsegmentpattern) - Use this operation to test a rules pattern that you plan to use to create an audience segment. For more information about segments, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateSegment.html">CreateSegment</a>.
* [untagResource](#untagresource) - Removes one or more tags from the specified resource.
* [updateExperiment](#updateexperiment) - <p>Updates an Evidently experiment. </p> <p>Don't use this operation to update an experiment's tag. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
* [updateFeature](#updatefeature) - <p>Updates an existing feature.</p> <p>You can't use this operation to update the tags of an existing feature. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
* [updateLaunch](#updatelaunch) - <p>Updates a launch of a given feature. </p> <p>Don't use this operation to update the tags of an existing launch. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
* [updateProject](#updateproject) - <p>Updates the description of an existing project.</p> <p>To create a new project, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateProject.html">CreateProject</a>.</p> <p>Don't use this operation to update the data storage options of a project. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateProjectDataDelivery.html">UpdateProjectDataDelivery</a>. </p> <p>Don't use this operation to update the tags of a project. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
* [updateProjectDataDelivery](#updateprojectdatadelivery) - <p>Updates the data storage options for this project. If you store evaluation events, you an keep them and analyze them on your own. If you choose not to store evaluation events, Evidently deletes them after using them to produce metrics and other experiment results that you can view.</p> <p>You can't specify both <code>cloudWatchLogs</code> and <code>s3Destination</code> in the same operation.</p>

## batchEvaluateFeature

<p>This operation assigns feature variation to user sessions. For each user session, you pass in an <code>entityID</code> that represents the user. Evidently then checks the evaluation rules and assigns the variation.</p> <p>The first rules that are evaluated are the override rules. If the user's <code>entityID</code> matches an override rule, the user is served the variation specified by that rule.</p> <p>Next, if there is a launch of the feature, the user might be assigned to a variation in the launch. The chance of this depends on the percentage of users that are allocated to that launch. If the user is enrolled in the launch, the variation they are served depends on the allocation of the various feature variations used for the launch.</p> <p>If the user is not assigned to a launch, and there is an ongoing experiment for this feature, the user might be assigned to a variation in the experiment. The chance of this depends on the percentage of users that are allocated to that experiment. If the user is enrolled in the experiment, the variation they are served depends on the allocation of the various feature variations used for the experiment. </p> <p>If the user is not assigned to a launch or experiment, they are served the default variation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchEvaluateFeatureRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchEvaluateFeatureRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\EvaluationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchEvaluateFeatureRequest();
    $request->requestBody = new BatchEvaluateFeatureRequestBody();
    $request->requestBody->requests = [
        new EvaluationRequest(),
        new EvaluationRequest(),
        new EvaluationRequest(),
    ];
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'delectus';
    $request->project = 'tempora';

    $response = $sdk->sdk->batchEvaluateFeature($request);

    if ($response->batchEvaluateFeatureResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createExperiment

<p>Creates an Evidently <i>experiment</i>. Before you create an experiment, you must create the feature to use for the experiment.</p> <p>An experiment helps you make feature design decisions based on evidence and data. An experiment can test as many as five variations at once. Evidently collects experiment data and analyzes it by statistical methods, and provides clear recommendations about which variations perform better.</p> <p>You can optionally specify a <code>segment</code> to have the experiment consider only certain audience types in the experiment, such as using only user sessions from a certain location or who use a certain internet browser.</p> <p>Don't use this operation to update an existing experiment. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateExperiment.html">UpdateExperiment</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateExperimentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateExperimentRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\MetricGoalConfig;
use \OpenAPI\OpenAPI\Models\Shared\ChangeDirectionEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricDefinitionConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateExperimentRequestBodyOnlineAbConfig;
use \OpenAPI\OpenAPI\Models\Shared\TreatmentConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateExperimentRequest();
    $request->requestBody = new CreateExperimentRequestBody();
    $request->requestBody->description = 'suscipit';
    $request->requestBody->metricGoals = [
        new MetricGoalConfig(),
        new MetricGoalConfig(),
    ];
    $request->requestBody->name = 'Irving Lehner';
    $request->requestBody->onlineAbConfig = new CreateExperimentRequestBodyOnlineAbConfig();
    $request->requestBody->onlineAbConfig->controlTreatmentName = 'nisi';
    $request->requestBody->onlineAbConfig->treatmentWeights = [
        'temporibus' => 71036,
        'quis' => 87129,
        'deserunt' => 20218,
        'ipsam' => 832620,
    ];
    $request->requestBody->randomizationSalt = 'sapiente';
    $request->requestBody->samplingRate = 778157;
    $request->requestBody->segment = 'odit';
    $request->requestBody->tags = [
        'at' => 'maiores',
        'molestiae' => 'quod',
        'quod' => 'esse',
        'totam' => 'porro',
    ];
    $request->requestBody->treatments = [
        new TreatmentConfig(),
        new TreatmentConfig(),
        new TreatmentConfig(),
    ];
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'hic';
    $request->project = 'optio';

    $response = $sdk->sdk->createExperiment($request);

    if ($response->createExperimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFeature

<p>Creates an Evidently <i>feature</i> that you want to launch or test. You can define up to five variations of a feature, and use these variations in your launches and experiments. A feature must be created in a project. For information about creating a project, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateProject.html">CreateProject</a>.</p> <p>Don't use this operation to update an existing feature. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateFeature.html">UpdateFeature</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFeatureRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFeatureRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateFeatureRequestBodyEvaluationStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\VariationConfig;
use \OpenAPI\OpenAPI\Models\Shared\VariableValue;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFeatureRequest();
    $request->requestBody = new CreateFeatureRequestBody();
    $request->requestBody->defaultVariation = 'totam';
    $request->requestBody->description = 'beatae';
    $request->requestBody->entityOverrides = [
        'molestiae' => 'modi',
        'qui' => 'impedit',
    ];
    $request->requestBody->evaluationStrategy = CreateFeatureRequestBodyEvaluationStrategyEnum::DEFAULT_VARIATION;
    $request->requestBody->name = 'Edna Mante II';
    $request->requestBody->tags = [
        'sed' => 'iste',
        'dolor' => 'natus',
        'laboriosam' => 'hic',
    ];
    $request->requestBody->variations = [
        new VariationConfig(),
        new VariationConfig(),
        new VariationConfig(),
        new VariationConfig(),
    ];
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'quidem';
    $request->project = 'architecto';

    $response = $sdk->sdk->createFeature($request);

    if ($response->createFeatureResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLaunch

<p>Creates a <i>launch</i> of a given feature. Before you create a launch, you must create the feature to use for the launch.</p> <p>You can use a launch to safely validate new features by serving them to a specified percentage of your users while you roll out the feature. You can monitor the performance of the new feature to help you decide when to ramp up traffic to more users. This helps you reduce risk and identify unintended consequences before you fully launch the feature.</p> <p>Don't use this operation to update an existing launch. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateLaunch.html">UpdateLaunch</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLaunchRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateLaunchRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\LaunchGroupConfig;
use \OpenAPI\OpenAPI\Models\Shared\MetricMonitorConfig;
use \OpenAPI\OpenAPI\Models\Shared\MetricDefinitionConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateLaunchRequestBodyScheduledSplitsConfig;
use \OpenAPI\OpenAPI\Models\Shared\ScheduledSplitConfig;
use \OpenAPI\OpenAPI\Models\Shared\SegmentOverride;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLaunchRequest();
    $request->requestBody = new CreateLaunchRequestBody();
    $request->requestBody->description = 'ipsa';
    $request->requestBody->groups = [
        new LaunchGroupConfig(),
        new LaunchGroupConfig(),
        new LaunchGroupConfig(),
        new LaunchGroupConfig(),
    ];
    $request->requestBody->metricMonitors = [
        new MetricMonitorConfig(),
        new MetricMonitorConfig(),
        new MetricMonitorConfig(),
    ];
    $request->requestBody->name = 'Cameron Dach';
    $request->requestBody->randomizationSalt = 'explicabo';
    $request->requestBody->scheduledSplitsConfig = new CreateLaunchRequestBodyScheduledSplitsConfig();
    $request->requestBody->scheduledSplitsConfig->steps = [
        new ScheduledSplitConfig(),
        new ScheduledSplitConfig(),
        new ScheduledSplitConfig(),
        new ScheduledSplitConfig(),
    ];
    $request->requestBody->tags = [
        'omnis' => 'nemo',
        'minima' => 'excepturi',
    ];
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->project = 'dolorem';

    $response = $sdk->sdk->createLaunch($request);

    if ($response->createLaunchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProject

<p>Creates a project, which is the logical object in Evidently that can contain features, launches, and experiments. Use projects to group similar features together.</p> <p>To update an existing project, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateProject.html">UpdateProject</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectRequestBodyAppConfigResource;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectRequestBodyDataDelivery;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLogsDestinationConfig;
use \OpenAPI\OpenAPI\Models\Shared\S3DestinationConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProjectRequest();
    $request->requestBody = new CreateProjectRequestBody();
    $request->requestBody->appConfigResource = new CreateProjectRequestBodyAppConfigResource();
    $request->requestBody->appConfigResource->applicationId = 'culpa';
    $request->requestBody->appConfigResource->environmentId = 'consequuntur';
    $request->requestBody->dataDelivery = new CreateProjectRequestBodyDataDelivery();
    $request->requestBody->dataDelivery->cloudWatchLogs = new CloudWatchLogsDestinationConfig();
    $request->requestBody->dataDelivery->cloudWatchLogs->logGroup = 'repellat';
    $request->requestBody->dataDelivery->s3Destination = new S3DestinationConfig();
    $request->requestBody->dataDelivery->s3Destination->bucket = 'mollitia';
    $request->requestBody->dataDelivery->s3Destination->prefix = 'occaecati';
    $request->requestBody->description = 'numquam';
    $request->requestBody->name = 'Claudia Krajcik';
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

    $response = $sdk->sdk->createProject($request);

    if ($response->createProjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSegment

<p>Use this operation to define a <i>segment</i> of your audience. A segment is a portion of your audience that share one or more characteristics. Examples could be Chrome browser users, users in Europe, or Firefox browser users in Europe who also fit other criteria that your application collects, such as age.</p> <p>Using a segment in an experiment limits that experiment to evaluate only the users who match the segment criteria. Using one or more segments in a launch allows you to define different traffic splits for the different audience segments.</p> <p>For more information about segment pattern syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html#CloudWatch-Evidently-segments-syntax.html"> Segment rule pattern syntax</a>.</p> <p>The pattern that you define for a segment is matched against the value of <code>evaluationContext</code>, which is passed into Evidently in the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation, when Evidently assigns a feature variation to a user.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSegmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSegmentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSegmentRequest();
    $request->requestBody = new CreateSegmentRequestBody();
    $request->requestBody->description = 'ipsam';
    $request->requestBody->name = 'Miss Rufus Ankunding';
    $request->requestBody->pattern = 'laborum';
    $request->requestBody->tags = [
        'reiciendis' => 'voluptatibus',
    ];
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->createSegment($request);

    if ($response->createSegmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteExperiment

<p>Deletes an Evidently experiment. The feature used for the experiment is not deleted.</p> <p>To stop an experiment without deleting it, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StopExperiment.html">StopExperiment</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteExperimentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteExperimentRequest();
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'dicta';
    $request->experiment = 'corporis';
    $request->project = 'dolore';

    $response = $sdk->sdk->deleteExperiment($request);

    if ($response->deleteExperimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFeature

Deletes an Evidently feature.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFeatureRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFeatureRequest();
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->feature = 'quae';
    $request->project = 'ipsum';

    $response = $sdk->sdk->deleteFeature($request);

    if ($response->deleteFeatureResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLaunch

<p>Deletes an Evidently launch. The feature used for the launch is not deleted.</p> <p>To stop a launch without deleting it, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StopLaunch.html">StopLaunch</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLaunchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLaunchRequest();
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'rem';
    $request->launch = 'voluptates';
    $request->project = 'quasi';

    $response = $sdk->sdk->deleteLaunch($request);

    if ($response->deleteLaunchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProject

Deletes an Evidently project. Before you can delete a project, you must delete all the features that the project contains. To delete a feature, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_DeleteFeature.html">DeleteFeature</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProjectRequest();
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->project = 'est';

    $response = $sdk->sdk->deleteProject($request);

    if ($response->deleteProjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSegment

Deletes a segment. You can't delete a segment that is being used in a launch or experiment, even if that launch or experiment is not currently running.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSegmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSegmentRequest();
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'modi';
    $request->segment = 'qui';

    $response = $sdk->sdk->deleteSegment($request);

    if ($response->deleteSegmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## evaluateFeature

<p>This operation assigns a feature variation to one given user session. You pass in an <code>entityID</code> that represents the user. Evidently then checks the evaluation rules and assigns the variation.</p> <p>The first rules that are evaluated are the override rules. If the user's <code>entityID</code> matches an override rule, the user is served the variation specified by that rule.</p> <p>If there is a current launch with this feature that uses segment overrides, and if the user session's <code>evaluationContext</code> matches a segment rule defined in a segment override, the configuration in the segment overrides is used. For more information about segments, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateSegment.html">CreateSegment</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html">Use segments to focus your audience</a>.</p> <p>If there is a launch with no segment overrides, the user might be assigned to a variation in the launch. The chance of this depends on the percentage of users that are allocated to that launch. If the user is enrolled in the launch, the variation they are served depends on the allocation of the various feature variations used for the launch.</p> <p>If the user is not assigned to a launch, and there is an ongoing experiment for this feature, the user might be assigned to a variation in the experiment. The chance of this depends on the percentage of users that are allocated to that experiment.</p> <p>If the experiment uses a segment, then only user sessions with <code>evaluationContext</code> values that match the segment rule are used in the experiment.</p> <p>If the user is enrolled in the experiment, the variation they are served depends on the allocation of the various feature variations used for the experiment. </p> <p>If the user is not assigned to a launch or experiment, they are served the default variation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EvaluateFeatureRequest;
use \OpenAPI\OpenAPI\Models\Operations\EvaluateFeatureRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EvaluateFeatureRequest();
    $request->requestBody = new EvaluateFeatureRequestBody();
    $request->requestBody->entityId = 'aliquid';
    $request->requestBody->evaluationContext = 'cupiditate';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'fugit';
    $request->feature = 'dolorum';
    $request->project = 'excepturi';

    $response = $sdk->sdk->evaluateFeature($request);

    if ($response->evaluateFeatureResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExperiment

Returns the details about one experiment. You must already know the experiment name. To retrieve a list of experiments in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListExperiments.html">ListExperiments</a>.

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
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'non';
    $request->experiment = 'eligendi';
    $request->project = 'sint';

    $response = $sdk->sdk->getExperiment($request);

    if ($response->getExperimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExperimentResults

<p>Retrieves the results of a running or completed experiment. No results are available until there have been 100 events for each variation and at least 10 minutes have passed since the start of the experiment. To increase the statistical power, Evidently performs an additional offline p-value analysis at the end of the experiment. Offline p-value analysis can detect statistical significance in some cases where the anytime p-values used during the experiment do not find statistical significance.</p> <p>Experiment results are available up to 63 days after the start of the experiment. They are not available after that because of CloudWatch data retention policies.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetExperimentResultsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetExperimentResultsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetExperimentResultsRequestBodyBaseStatEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExperimentReportNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExperimentResultRequestTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExperimentResultsRequest();
    $request->requestBody = new GetExperimentResultsRequestBody();
    $request->requestBody->baseStat = GetExperimentResultsRequestBodyBaseStatEnum::MEAN;
    $request->requestBody->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-29T21:42:45.399Z');
    $request->requestBody->metricNames = [
        'sint',
        'officia',
        'dolor',
        'debitis',
    ];
    $request->requestBody->period = 952749;
    $request->requestBody->reportNames = [
        ExperimentReportNameEnum::BAYESIAN_INFERENCE,
        ExperimentReportNameEnum::BAYESIAN_INFERENCE,
        ExperimentReportNameEnum::BAYESIAN_INFERENCE,
    ];
    $request->requestBody->resultStats = [
        ExperimentResultRequestTypeEnum::TREATMENT_EFFECT,
        ExperimentResultRequestTypeEnum::P_VALUE,
    ];
    $request->requestBody->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-26T01:41:04.216Z');
    $request->requestBody->treatmentNames = [
        'magnam',
    ];
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'non';
    $request->experiment = 'occaecati';
    $request->project = 'enim';

    $response = $sdk->sdk->getExperimentResults($request);

    if ($response->getExperimentResultsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFeature

Returns the details about one feature. You must already know the feature name. To retrieve a list of features in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListFeatures.html">ListFeatures</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFeatureRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFeatureRequest();
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'blanditiis';
    $request->feature = 'deleniti';
    $request->project = 'sapiente';

    $response = $sdk->sdk->getFeature($request);

    if ($response->getFeatureResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLaunch

Returns the details about one launch. You must already know the launch name. To retrieve a list of launches in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListLaunches.html">ListLaunches</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLaunchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLaunchRequest();
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->launch = 'perferendis';
    $request->project = 'nihil';

    $response = $sdk->sdk->getLaunch($request);

    if ($response->getLaunchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProject

Returns the details about one launch. You must already know the project name. To retrieve a list of projects in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListProjects.html">ListProjects</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectRequest();
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'natus';
    $request->project = 'nobis';

    $response = $sdk->sdk->getProject($request);

    if ($response->getProjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSegment

Returns information about the specified segment. Specify the segment you want to view by specifying its ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSegmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSegmentRequest();
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->segment = 'ullam';

    $response = $sdk->sdk->getSegment($request);

    if ($response->getSegmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listExperiments

Returns configuration details about all the experiments in the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListExperimentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListExperimentsStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListExperimentsRequest();
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->maxResults = 320997;
    $request->nextToken = 'eum';
    $request->project = 'dolor';
    $request->status = ListExperimentsStatusEnum::CANCELLED;

    $response = $sdk->sdk->listExperiments($request);

    if ($response->listExperimentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFeatures

Returns configuration details about all the features in the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFeaturesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFeaturesRequest();
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'eius';
    $request->maxResults = 806194;
    $request->nextToken = 'deleniti';
    $request->project = 'facilis';

    $response = $sdk->sdk->listFeatures($request);

    if ($response->listFeaturesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLaunches

Returns configuration details about all the launches in the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLaunchesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListLaunchesStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLaunchesRequest();
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'nihil';
    $request->maxResults = 998848;
    $request->nextToken = 'quibusdam';
    $request->project = 'sed';
    $request->status = ListLaunchesStatusEnum::CANCELLED;

    $response = $sdk->sdk->listLaunches($request);

    if ($response->listLaunchesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProjects

Returns configuration details about all the projects in the current Region in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProjectsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProjectsRequest();
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'sunt';
    $request->maxResults = 779051;
    $request->nextToken = 'illum';

    $response = $sdk->sdk->listProjects($request);

    if ($response->listProjectsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSegmentReferences

Use this operation to find which experiments or launches are using a specified segment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSegmentReferencesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSegmentReferencesTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSegmentReferencesRequest();
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->maxResults = 69167;
    $request->nextToken = 'maiores';
    $request->segment = 'quidem';
    $request->type = ListSegmentReferencesTypeEnum::EXPERIMENT;

    $response = $sdk->sdk->listSegmentReferences($request);

    if ($response->listSegmentReferencesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSegments

Returns a list of audience segments that you have created in your account in this Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSegmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSegmentsRequest();
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'autem';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->maxResults = 16627;
    $request->nextToken = 'fugiat';

    $response = $sdk->sdk->listSegments($request);

    if ($response->listSegmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Displays the tags associated with an Evidently resource.

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
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'nobis';
    $request->resourceArn = 'dolores';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putProjectEvents

Sends performance events to Evidently. These events can be used to evaluate a launch or an experiment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutProjectEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutProjectEventsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Event;
use \OpenAPI\OpenAPI\Models\Shared\EventTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutProjectEventsRequest();
    $request->requestBody = new PutProjectEventsRequestBody();
    $request->requestBody->events = [
        new Event(),
        new Event(),
    ];
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'nesciunt';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->project = 'dolores';

    $response = $sdk->sdk->putProjectEvents($request);

    if ($response->putProjectEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startExperiment

Starts an existing experiment. To create an experiment, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateExperiment.html">CreateExperiment</a>.

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
    $request->requestBody->analysisCompleteTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-11T12:30:29.509Z');
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'facilis';
    $request->experiment = 'perspiciatis';
    $request->project = 'voluptatem';

    $response = $sdk->sdk->startExperiment($request);

    if ($response->startExperimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startLaunch

Starts an existing launch. To create a launch, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateLaunch.html">CreateLaunch</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartLaunchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartLaunchRequest();
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'rerum';
    $request->launch = 'adipisci';
    $request->project = 'asperiores';

    $response = $sdk->sdk->startLaunch($request);

    if ($response->startLaunchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopExperiment

Stops an experiment that is currently running. If you stop an experiment, you can't resume it or restart it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopExperimentRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopExperimentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StopExperimentRequestBodyDesiredStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopExperimentRequest();
    $request->requestBody = new StopExperimentRequestBody();
    $request->requestBody->desiredState = StopExperimentRequestBodyDesiredStateEnum::CANCELLED;
    $request->requestBody->reason = 'modi';
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'libero';
    $request->experiment = 'delectus';
    $request->project = 'quaerat';

    $response = $sdk->sdk->stopExperiment($request);

    if ($response->stopExperimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopLaunch

Stops a launch that is currently running. After you stop a launch, you will not be able to resume it or restart it. Also, it will not be evaluated as a rule for traffic allocation, and the traffic that was allocated to the launch will instead be available to the feature's experiment, if there is one. Otherwise, all traffic will be served the default variation after the launch is stopped.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopLaunchRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopLaunchRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StopLaunchRequestBodyDesiredStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopLaunchRequest();
    $request->requestBody = new StopLaunchRequestBody();
    $request->requestBody->desiredState = StopLaunchRequestBodyDesiredStateEnum::CANCELLED;
    $request->requestBody->reason = 'aliquid';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->launch = 'cum';
    $request->project = 'voluptate';

    $response = $sdk->sdk->stopLaunch($request);

    if ($response->stopLaunchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Assigns one or more tags (key-value pairs) to the specified CloudWatch Evidently resource. Projects, features, launches, and experiments can be tagged.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>

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
        'reiciendis' => 'amet',
        'dolorum' => 'numquam',
    ];
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->resourceArn = 'quidem';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testSegmentPattern

Use this operation to test a rules pattern that you plan to use to create an audience segment. For more information about segments, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateSegment.html">CreateSegment</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TestSegmentPatternRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestSegmentPatternRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestSegmentPatternRequest();
    $request->requestBody = new TestSegmentPatternRequestBody();
    $request->requestBody->pattern = 'voluptatibus';
    $request->requestBody->payload = 'voluptas';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'soluta';

    $response = $sdk->sdk->testSegmentPattern($request);

    if ($response->testSegmentPatternResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tags from the specified resource.

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
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->resourceArn = 'distinctio';
    $request->tagKeys = [
        'nihil',
        'ipsum',
        'voluptate',
        'id',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateExperiment

<p>Updates an Evidently experiment. </p> <p>Don't use this operation to update an experiment's tag. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateExperimentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateExperimentRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\MetricGoalConfig;
use \OpenAPI\OpenAPI\Models\Shared\ChangeDirectionEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricDefinitionConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateExperimentRequestBodyOnlineAbConfig;
use \OpenAPI\OpenAPI\Models\Shared\TreatmentConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateExperimentRequest();
    $request->requestBody = new UpdateExperimentRequestBody();
    $request->requestBody->description = 'saepe';
    $request->requestBody->metricGoals = [
        new MetricGoalConfig(),
        new MetricGoalConfig(),
    ];
    $request->requestBody->onlineAbConfig = new UpdateExperimentRequestBodyOnlineAbConfig();
    $request->requestBody->onlineAbConfig->controlTreatmentName = 'aspernatur';
    $request->requestBody->onlineAbConfig->treatmentWeights = [
        'amet' => 758379,
    ];
    $request->requestBody->randomizationSalt = 'accusamus';
    $request->requestBody->removeSegment = false;
    $request->requestBody->samplingRate = 320017;
    $request->requestBody->segment = 'saepe';
    $request->requestBody->treatments = [
        new TreatmentConfig(),
        new TreatmentConfig(),
    ];
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'alias';
    $request->experiment = 'at';
    $request->project = 'quaerat';

    $response = $sdk->sdk->updateExperiment($request);

    if ($response->updateExperimentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFeature

<p>Updates an existing feature.</p> <p>You can't use this operation to update the tags of an existing feature. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFeatureRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFeatureRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\VariationConfig;
use \OpenAPI\OpenAPI\Models\Shared\VariableValue;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFeatureRequestBodyEvaluationStrategyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFeatureRequest();
    $request->requestBody = new UpdateFeatureRequestBody();
    $request->requestBody->addOrUpdateVariations = [
        new VariationConfig(),
        new VariationConfig(),
    ];
    $request->requestBody->defaultVariation = 'vel';
    $request->requestBody->description = 'quod';
    $request->requestBody->entityOverrides = [
        'qui' => 'dolorum',
        'a' => 'esse',
        'harum' => 'iusto',
        'ipsum' => 'quisquam',
    ];
    $request->requestBody->evaluationStrategy = UpdateFeatureRequestBodyEvaluationStrategyEnum::DEFAULT_VARIATION;
    $request->requestBody->removeVariations = [
        'tempore',
    ];
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'nihil';
    $request->feature = 'sit';
    $request->project = 'expedita';

    $response = $sdk->sdk->updateFeature($request);

    if ($response->updateFeatureResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLaunch

<p>Updates a launch of a given feature. </p> <p>Don't use this operation to update the tags of an existing launch. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\LaunchGroupConfig;
use \OpenAPI\OpenAPI\Models\Shared\MetricMonitorConfig;
use \OpenAPI\OpenAPI\Models\Shared\MetricDefinitionConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchRequestBodyScheduledSplitsConfig;
use \OpenAPI\OpenAPI\Models\Shared\ScheduledSplitConfig;
use \OpenAPI\OpenAPI\Models\Shared\SegmentOverride;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLaunchRequest();
    $request->requestBody = new UpdateLaunchRequestBody();
    $request->requestBody->description = 'neque';
    $request->requestBody->groups = [
        new LaunchGroupConfig(),
    ];
    $request->requestBody->metricMonitors = [
        new MetricMonitorConfig(),
        new MetricMonitorConfig(),
    ];
    $request->requestBody->randomizationSalt = 'libero';
    $request->requestBody->scheduledSplitsConfig = new UpdateLaunchRequestBodyScheduledSplitsConfig();
    $request->requestBody->scheduledSplitsConfig->steps = [
        new ScheduledSplitConfig(),
        new ScheduledSplitConfig(),
    ];
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'maxime';
    $request->launch = 'pariatur';
    $request->project = 'soluta';

    $response = $sdk->sdk->updateLaunch($request);

    if ($response->updateLaunchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProject

<p>Updates the description of an existing project.</p> <p>To create a new project, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateProject.html">CreateProject</a>.</p> <p>Don't use this operation to update the data storage options of a project. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateProjectDataDelivery.html">UpdateProjectDataDelivery</a>. </p> <p>Don't use this operation to update the tags of a project. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectRequestBodyAppConfigResource;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectRequest();
    $request->requestBody = new UpdateProjectRequestBody();
    $request->requestBody->appConfigResource = new UpdateProjectRequestBodyAppConfigResource();
    $request->requestBody->appConfigResource->applicationId = 'dicta';
    $request->requestBody->appConfigResource->environmentId = 'laborum';
    $request->requestBody->description = 'totam';
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'quam';
    $request->project = 'molestias';

    $response = $sdk->sdk->updateProject($request);

    if ($response->updateProjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProjectDataDelivery

<p>Updates the data storage options for this project. If you store evaluation events, you an keep them and analyze them on your own. If you choose not to store evaluation events, Evidently deletes them after using them to produce metrics and other experiment results that you can view.</p> <p>You can't specify both <code>cloudWatchLogs</code> and <code>s3Destination</code> in the same operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectDataDeliveryRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectDataDeliveryRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectDataDeliveryRequestBodyCloudWatchLogs;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectDataDeliveryRequestBodyS3Destination;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectDataDeliveryRequest();
    $request->requestBody = new UpdateProjectDataDeliveryRequestBody();
    $request->requestBody->cloudWatchLogs = new UpdateProjectDataDeliveryRequestBodyCloudWatchLogs();
    $request->requestBody->cloudWatchLogs->logGroup = 'temporibus';
    $request->requestBody->s3Destination = new UpdateProjectDataDeliveryRequestBodyS3Destination();
    $request->requestBody->s3Destination->bucket = 'qui';
    $request->requestBody->s3Destination->prefix = 'neque';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'sunt';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'hic';
    $request->project = 'voluptatem';

    $response = $sdk->sdk->updateProjectDataDelivery($request);

    if ($response->updateProjectDataDeliveryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
