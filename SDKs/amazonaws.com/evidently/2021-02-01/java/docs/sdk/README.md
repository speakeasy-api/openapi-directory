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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchEvaluateFeatureRequest;
import org.openapis.openapi.models.operations.BatchEvaluateFeatureRequestBody;
import org.openapis.openapi.models.operations.BatchEvaluateFeatureResponse;
import org.openapis.openapi.models.shared.EvaluationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchEvaluateFeatureRequest req = new BatchEvaluateFeatureRequest(                new BatchEvaluateFeatureRequestBody(                new org.openapis.openapi.models.shared.EvaluationRequest[]{{
                                                add(new EvaluationRequest("veritatis", "deserunt") {{
                                                    entityId = "temporibus";
                                                    evaluationContext = "ab";
                                                    feature = "quis";
                                                }}),
                                                add(new EvaluationRequest("sapiente", "quo") {{
                                                    entityId = "perferendis";
                                                    evaluationContext = "ipsam";
                                                    feature = "repellendus";
                                                }}),
                                                add(new EvaluationRequest("maiores", "molestiae") {{
                                                    entityId = "odit";
                                                    evaluationContext = "at";
                                                    feature = "at";
                                                }}),
                                                add(new EvaluationRequest("totam", "porro") {{
                                                    entityId = "quod";
                                                    evaluationContext = "quod";
                                                    feature = "esse";
                                                }}),
                                            }});, "dolorum") {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "nam";
                xAmzCredential = "officia";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "hic";
            }};            

            BatchEvaluateFeatureResponse res = sdk.sdk.batchEvaluateFeature(req);

            if (res.batchEvaluateFeatureResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createExperiment

<p>Creates an Evidently <i>experiment</i>. Before you create an experiment, you must create the feature to use for the experiment.</p> <p>An experiment helps you make feature design decisions based on evidence and data. An experiment can test as many as five variations at once. Evidently collects experiment data and analyzes it by statistical methods, and provides clear recommendations about which variations perform better.</p> <p>You can optionally specify a <code>segment</code> to have the experiment consider only certain audience types in the experiment, such as using only user sessions from a certain location or who use a certain internet browser.</p> <p>Don't use this operation to update an existing experiment. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateExperiment.html">UpdateExperiment</a>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateExperimentRequest;
import org.openapis.openapi.models.operations.CreateExperimentRequestBody;
import org.openapis.openapi.models.operations.CreateExperimentRequestBodyOnlineAbConfig;
import org.openapis.openapi.models.operations.CreateExperimentResponse;
import org.openapis.openapi.models.shared.ChangeDirectionEnumEnum;
import org.openapis.openapi.models.shared.MetricDefinitionConfig;
import org.openapis.openapi.models.shared.MetricGoalConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TreatmentConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateExperimentRequest req = new CreateExperimentRequest(                new CreateExperimentRequestBody(                new org.openapis.openapi.models.shared.MetricGoalConfig[]{{
                                                add(new MetricGoalConfig(                new MetricDefinitionConfig("natus", "sed", "iste") {{
                                                                    eventPattern = "dolor";
                                                                    unitLabel = "natus";
                                                                }};) {{
                                                    desiredChange = ChangeDirectionEnumEnum.INCREASE;
                                                    metricDefinition = new MetricDefinitionConfig("aspernatur", "perferendis", "ad") {{
                                                        entityIdKey = "commodi";
                                                        eventPattern = "molestiae";
                                                        name = "Norma Ryan";
                                                        unitLabel = "ipsum";
                                                        valueKey = "excepturi";
                                                    }};
                                                }}),
                                                add(new MetricGoalConfig(                new MetricDefinitionConfig("est", "mollitia", "laborum") {{
                                                                    eventPattern = "dolores";
                                                                    unitLabel = "dolorem";
                                                                }};) {{
                                                    desiredChange = ChangeDirectionEnumEnum.INCREASE;
                                                    metricDefinition = new MetricDefinitionConfig("architecto", "ipsa", "reiciendis") {{
                                                        entityIdKey = "hic";
                                                        eventPattern = "saepe";
                                                        name = "Harvey Hessel";
                                                        unitLabel = "saepe";
                                                        valueKey = "quidem";
                                                    }};
                                                }}),
                                                add(new MetricGoalConfig(                new MetricDefinitionConfig("architecto", "mollitia", "dolorem") {{
                                                                    eventPattern = "culpa";
                                                                    unitLabel = "consequuntur";
                                                                }};) {{
                                                    desiredChange = ChangeDirectionEnumEnum.INCREASE;
                                                    metricDefinition = new MetricDefinitionConfig("culpa", "doloribus", "sapiente") {{
                                                        entityIdKey = "explicabo";
                                                        eventPattern = "nobis";
                                                        name = "Guadalupe Hickle";
                                                        unitLabel = "accusantium";
                                                        valueKey = "iure";
                                                    }};
                                                }}),
                                            }}, "repellat",                 new org.openapis.openapi.models.shared.TreatmentConfig[]{{
                                                add(new TreatmentConfig("quis", "vitae", "laborum") {{
                                                    description = "occaecati";
                                                    feature = "numquam";
                                                    name = "Claudia Krajcik";
                                                    variation = "quia";
                                                }}),
                                                add(new TreatmentConfig("possimus", "aut", "quasi") {{
                                                    description = "animi";
                                                    feature = "enim";
                                                    name = "Angelica Dietrich";
                                                    variation = "id";
                                                }}),
                                                add(new TreatmentConfig("praesentium", "voluptatibus", "ipsa") {{
                                                    description = "error";
                                                    feature = "temporibus";
                                                    name = "Ryan Witting";
                                                    variation = "nihil";
                                                }}),
                                            }}) {{
                                description = "omnis";
                                onlineAbConfig = new CreateExperimentRequestBodyOnlineAbConfig() {{
                                    controlTreatmentName = "voluptate";
                                    treatmentWeights = new java.util.HashMap<String, Long>() {{
                                        put("perferendis", 39187L);
                                        put("reprehenderit", 282807L);
                                        put("maiores", 120196L);
                                    }};
                                }};;
                                randomizationSalt = "corporis";
                                samplingRate = 296140L;
                                segment = "iusto";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("harum", "enim");
                                }};
                            }};, "accusamus") {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "quae";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "excepturi";
            }};            

            CreateExperimentResponse res = sdk.sdk.createExperiment(req);

            if (res.createExperimentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFeature

<p>Creates an Evidently <i>feature</i> that you want to launch or test. You can define up to five variations of a feature, and use these variations in your launches and experiments. A feature must be created in a project. For information about creating a project, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateProject.html">CreateProject</a>.</p> <p>Don't use this operation to update an existing feature. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateFeature.html">UpdateFeature</a>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFeatureRequest;
import org.openapis.openapi.models.operations.CreateFeatureRequestBody;
import org.openapis.openapi.models.operations.CreateFeatureRequestBodyEvaluationStrategyEnum;
import org.openapis.openapi.models.operations.CreateFeatureResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VariableValue;
import org.openapis.openapi.models.shared.VariationConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFeatureRequest req = new CreateFeatureRequest(                new CreateFeatureRequestBody("modi",                 new org.openapis.openapi.models.shared.VariationConfig[]{{
                                                add(new VariationConfig("enim",                 new VariableValue() {{
                                                                    boolValue = false;
                                                                    doubleValue = 93.56;
                                                                    longValue = 667411L;
                                                                    stringValue = "quibusdam";
                                                                }};) {{
                                                    name = "Grady Botsford";
                                                    value = new VariableValue() {{
                                                        boolValue = false;
                                                        doubleValue = 831.12;
                                                        longValue = 929297L;
                                                        stringValue = "incidunt";
                                                    }};
                                                }}),
                                                add(new VariationConfig("cupiditate",                 new VariableValue() {{
                                                                    boolValue = false;
                                                                    doubleValue = 5528.22;
                                                                    longValue = 20107L;
                                                                    stringValue = "magni";
                                                                }};) {{
                                                    name = "Joanna Rau";
                                                    value = new VariableValue() {{
                                                        boolValue = false;
                                                        doubleValue = 2647.3;
                                                        longValue = 183191L;
                                                        stringValue = "aliquid";
                                                    }};
                                                }}),
                                                add(new VariationConfig("tempore",                 new VariableValue() {{
                                                                    boolValue = false;
                                                                    doubleValue = 2884.76;
                                                                    longValue = 962189L;
                                                                    stringValue = "eum";
                                                                }};) {{
                                                    name = "Vernon Abshire";
                                                    value = new VariableValue() {{
                                                        boolValue = false;
                                                        doubleValue = 5696.18;
                                                        longValue = 270008L;
                                                        stringValue = "facilis";
                                                    }};
                                                }}),
                                            }}) {{
                                defaultVariation = "non";
                                description = "eligendi";
                                entityOverrides = new java.util.HashMap<String, String>() {{
                                    put("aliquid", "provident");
                                    put("necessitatibus", "sint");
                                    put("officia", "dolor");
                                }};
                                evaluationStrategy = CreateFeatureRequestBodyEvaluationStrategyEnum.DEFAULT_VARIATION;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("dolorum", "in");
                                    put("in", "illum");
                                    put("maiores", "rerum");
                                    put("dicta", "magnam");
                                }};
                            }};, "cumque") {{
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "ea";
                xAmzCredential = "aliquid";
                xAmzDate = "laborum";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "non";
                xAmzSignedHeaders = "occaecati";
            }};            

            CreateFeatureResponse res = sdk.sdk.createFeature(req);

            if (res.createFeatureResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLaunch

<p>Creates a <i>launch</i> of a given feature. Before you create a launch, you must create the feature to use for the launch.</p> <p>You can use a launch to safely validate new features by serving them to a specified percentage of your users while you roll out the feature. You can monitor the performance of the new feature to help you decide when to ramp up traffic to more users. This helps you reduce risk and identify unintended consequences before you fully launch the feature.</p> <p>Don't use this operation to update an existing launch. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateLaunch.html">UpdateLaunch</a>. </p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLaunchRequest;
import org.openapis.openapi.models.operations.CreateLaunchRequestBody;
import org.openapis.openapi.models.operations.CreateLaunchRequestBodyScheduledSplitsConfig;
import org.openapis.openapi.models.operations.CreateLaunchResponse;
import org.openapis.openapi.models.shared.LaunchGroupConfig;
import org.openapis.openapi.models.shared.MetricDefinitionConfig;
import org.openapis.openapi.models.shared.MetricMonitorConfig;
import org.openapis.openapi.models.shared.ScheduledSplitConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SegmentOverride;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLaunchRequest req = new CreateLaunchRequest(                new CreateLaunchRequestBody(                new org.openapis.openapi.models.shared.LaunchGroupConfig[]{{
                                                add(new LaunchGroupConfig("amet", "deserunt", "nisi") {{
                                                    description = "delectus";
                                                    feature = "quidem";
                                                    name = "Marco Olson";
                                                    variation = "sapiente";
                                                }}),
                                                add(new LaunchGroupConfig("id", "labore", "labore") {{
                                                    description = "vel";
                                                    feature = "natus";
                                                    name = "Fernando Aufderhar";
                                                    variation = "distinctio";
                                                }}),
                                                add(new LaunchGroupConfig("excepturi", "ullam", "provident") {{
                                                    description = "suscipit";
                                                    feature = "natus";
                                                    name = "Duane Thiel II";
                                                    variation = "et";
                                                }}),
                                                add(new LaunchGroupConfig("dolor", "necessitatibus", "odit") {{
                                                    description = "quos";
                                                    feature = "sint";
                                                    name = "Angie Wisozk";
                                                    variation = "eum";
                                                }}),
                                            }}, "nemo") {{
                                description = "quasi";
                                metricMonitors = new org.openapis.openapi.models.shared.MetricMonitorConfig[]{{
                                    add(new MetricMonitorConfig(                new MetricDefinitionConfig("nihil", "repellat", "quibusdam") {{
                                                        eventPattern = "sed";
                                                        unitLabel = "saepe";
                                                    }};) {{
                                        metricDefinition = new MetricDefinitionConfig("repudiandae", "ullam", "expedita") {{
                                            entityIdKey = "doloribus";
                                            eventPattern = "debitis";
                                            name = "Jasmine Lind";
                                            unitLabel = "architecto";
                                            valueKey = "architecto";
                                        }};
                                    }}),
                                    add(new MetricMonitorConfig(                new MetricDefinitionConfig("odit", "ea", "accusantium") {{
                                                        eventPattern = "ab";
                                                        unitLabel = "maiores";
                                                    }};) {{
                                        metricDefinition = new MetricDefinitionConfig("maxime", "ea", "excepturi") {{
                                            entityIdKey = "pariatur";
                                            eventPattern = "accusantium";
                                            name = "Irma Morissette DDS";
                                            unitLabel = "illum";
                                            valueKey = "pariatur";
                                        }};
                                    }}),
                                }};
                                randomizationSalt = "quidem";
                                scheduledSplitsConfig = new CreateLaunchRequestBodyScheduledSplitsConfig() {{
                                    steps = new org.openapis.openapi.models.shared.ScheduledSplitConfig[]{{
                                        add(new ScheduledSplitConfig(                new java.util.HashMap<String, Long>() {{
                                                            put("dolorum", 535633L);
                                                            put("pariatur", 589910L);
                                                            put("nobis", 730122L);
                                                        }}, OffsetDateTime.parse("2022-01-24T10:05:07.174Z")) {{
                                            groupWeights = new java.util.HashMap<String, Long>() {{
                                                put("autem", 722056L);
                                                put("eaque", 866383L);
                                            }};
                                            segmentOverrides = new org.openapis.openapi.models.shared.SegmentOverride[]{{
                                                add(new SegmentOverride(339404L, "totam",                 new java.util.HashMap<String, Long>() {{
                                                                    put("eaque", 338985L);
                                                                    put("nesciunt", 179490L);
                                                                }}) {{
                                                    evaluationOrder = 975522L;
                                                    segment = "perferendis";
                                                    weights = new java.util.HashMap<String, Long>() {{
                                                        put("amet", 11714L);
                                                        put("cumque", 359978L);
                                                        put("hic", 729991L);
                                                        put("nobis", 171629L);
                                                    }};
                                                }}),
                                                add(new SegmentOverride(596656L, "voluptatem",                 new java.util.HashMap<String, Long>() {{
                                                                    put("consequuntur", 500026L);
                                                                    put("error", 50370L);
                                                                    put("occaecati", 699098L);
                                                                    put("adipisci", 992397L);
                                                                }}) {{
                                                    evaluationOrder = 18521L;
                                                    segment = "dolores";
                                                    weights = new java.util.HashMap<String, Long>() {{
                                                        put("quam", 223924L);
                                                        put("vero", 345352L);
                                                        put("hic", 928082L);
                                                        put("omnis", 704415L);
                                                    }};
                                                }}),
                                            }};
                                            startTime = OffsetDateTime.parse("2022-03-14T08:20:25.450Z");
                                        }}),
                                        add(new ScheduledSplitConfig(                new java.util.HashMap<String, Long>() {{
                                                            put("harum", 483409L);
                                                            put("ipsum", 788740L);
                                                        }}, OffsetDateTime.parse("2022-04-24T18:16:06.669Z")) {{
                                            groupWeights = new java.util.HashMap<String, Long>() {{
                                                put("aliquid", 212390L);
                                                put("dolorem", 222443L);
                                                put("qui", 218749L);
                                            }};
                                            segmentOverrides = new org.openapis.openapi.models.shared.SegmentOverride[]{{
                                                add(new SegmentOverride(254356L, "veritatis",                 new java.util.HashMap<String, Long>() {{
                                                                    put("ipsa", 434417L);
                                                                }}) {{
                                                    evaluationOrder = 569574L;
                                                    segment = "cum";
                                                    weights = new java.util.HashMap<String, Long>() {{
                                                        put("dignissimos", 970237L);
                                                        put("amet", 680545L);
                                                    }};
                                                }}),
                                                add(new SegmentOverride(67249L, "soluta",                 new java.util.HashMap<String, Long>() {{
                                                                    put("iusto", 453697L);
                                                                    put("dolorum", 536579L);
                                                                    put("omnis", 896672L);
                                                                }}) {{
                                                    evaluationOrder = 487838L;
                                                    segment = "quaerat";
                                                    weights = new java.util.HashMap<String, Long>() {{
                                                        put("quidem", 976405L);
                                                        put("voluptas", 617658L);
                                                        put("eos", 542499L);
                                                        put("sit", 854614L);
                                                    }};
                                                }}),
                                                add(new SegmentOverride(263322L, "aspernatur",                 new java.util.HashMap<String, Long>() {{
                                                                    put("amet", 758379L);
                                                                }}) {{
                                                    evaluationOrder = 714697L;
                                                    segment = "asperiores";
                                                    weights = new java.util.HashMap<String, Long>() {{
                                                        put("ipsum", 456015L);
                                                        put("id", 906418L);
                                                    }};
                                                }}),
                                                add(new SegmentOverride(872651L, "quaerat",                 new java.util.HashMap<String, Long>() {{
                                                                    put("vel", 798047L);
                                                                    put("officiis", 185636L);
                                                                }}) {{
                                                    evaluationOrder = 881586L;
                                                    segment = "ad";
                                                    weights = new java.util.HashMap<String, Long>() {{
                                                        put("suscipit", 645785L);
                                                        put("provident", 324683L);
                                                        put("repellendus", 519711L);
                                                        put("similique", 55L);
                                                    }};
                                                }}),
                                            }};
                                            startTime = OffsetDateTime.parse("2021-02-04T11:05:24.484Z");
                                        }}),
                                    }};
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("accusamus", "numquam");
                                    put("enim", "dolorem");
                                    put("sapiente", "totam");
                                }};
                            }};, "nihil") {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "neque";
                xAmzDate = "sed";
                xAmzSecurityToken = "vel";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "voluptas";
            }};            

            CreateLaunchResponse res = sdk.sdk.createLaunch(req);

            if (res.createLaunchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createProject

<p>Creates a project, which is the logical object in Evidently that can contain features, launches, and experiments. Use projects to group similar features together.</p> <p>To update an existing project, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateProject.html">UpdateProject</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProjectRequest;
import org.openapis.openapi.models.operations.CreateProjectRequestBody;
import org.openapis.openapi.models.operations.CreateProjectRequestBodyAppConfigResource;
import org.openapis.openapi.models.operations.CreateProjectRequestBodyDataDelivery;
import org.openapis.openapi.models.operations.CreateProjectResponse;
import org.openapis.openapi.models.shared.CloudWatchLogsDestinationConfig;
import org.openapis.openapi.models.shared.S3DestinationConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateProjectRequest req = new CreateProjectRequest(                new CreateProjectRequestBody("quam") {{
                                appConfigResource = new CreateProjectRequestBodyAppConfigResource() {{
                                    applicationId = "ipsum";
                                    environmentId = "incidunt";
                                }};;
                                dataDelivery = new CreateProjectRequestBodyDataDelivery() {{
                                    cloudWatchLogs = new CloudWatchLogsDestinationConfig() {{
                                        logGroup = "qui";
                                    }};;
                                    s3Destination = new S3DestinationConfig() {{
                                        bucket = "cupiditate";
                                        prefix = "maxime";
                                    }};;
                                }};;
                                description = "pariatur";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("dicta", "laborum");
                                    put("totam", "incidunt");
                                    put("aspernatur", "dolores");
                                }};
                            }};) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "aliquid";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestias";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "qui";
            }};            

            CreateProjectResponse res = sdk.sdk.createProject(req);

            if (res.createProjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSegment

<p>Use this operation to define a <i>segment</i> of your audience. A segment is a portion of your audience that share one or more characteristics. Examples could be Chrome browser users, users in Europe, or Firefox browser users in Europe who also fit other criteria that your application collects, such as age.</p> <p>Using a segment in an experiment limits that experiment to evaluate only the users who match the segment criteria. Using one or more segments in a launch allows you to define different traffic splits for the different audience segments.</p> <p>For more information about segment pattern syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html#CloudWatch-Evidently-segments-syntax.html"> Segment rule pattern syntax</a>.</p> <p>The pattern that you define for a segment is matched against the value of <code>evaluationContext</code>, which is passed into Evidently in the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation, when Evidently assigns a feature variation to a user.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSegmentRequest;
import org.openapis.openapi.models.operations.CreateSegmentRequestBody;
import org.openapis.openapi.models.operations.CreateSegmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSegmentRequest req = new CreateSegmentRequest(                new CreateSegmentRequestBody("fugit", "magni") {{
                                description = "odio";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("ullam", "nam");
                                }};
                            }};) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "cumque";
                xAmzDate = "soluta";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "et";
                xAmzSignedHeaders = "saepe";
            }};            

            CreateSegmentResponse res = sdk.sdk.createSegment(req);

            if (res.createSegmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteExperiment

<p>Deletes an Evidently experiment. The feature used for the experiment is not deleted.</p> <p>To stop an experiment without deleting it, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StopExperiment.html">StopExperiment</a>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteExperimentRequest;
import org.openapis.openapi.models.operations.DeleteExperimentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteExperimentRequest req = new DeleteExperimentRequest("veritatis", "nobis") {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "cupiditate";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolore";
            }};            

            DeleteExperimentResponse res = sdk.sdk.deleteExperiment(req);

            if (res.deleteExperimentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFeature

Deletes an Evidently feature.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFeatureRequest;
import org.openapis.openapi.models.operations.DeleteFeatureResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFeatureRequest req = new DeleteFeatureRequest("adipisci", "dolorum") {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "quae";
                xAmzCredential = "aut";
                xAmzDate = "quas";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "est";
            }};            

            DeleteFeatureResponse res = sdk.sdk.deleteFeature(req);

            if (res.deleteFeatureResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLaunch

<p>Deletes an Evidently launch. The feature used for the launch is not deleted.</p> <p>To stop a launch without deleting it, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StopLaunch.html">StopLaunch</a>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLaunchRequest;
import org.openapis.openapi.models.operations.DeleteLaunchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLaunchRequest req = new DeleteLaunchRequest("porro", "doloribus") {{
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "cupiditate";
                xAmzDate = "qui";
                xAmzSecurityToken = "quae";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "odio";
            }};            

            DeleteLaunchResponse res = sdk.sdk.deleteLaunch(req);

            if (res.deleteLaunchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProject

Deletes an Evidently project. Before you can delete a project, you must delete all the features that the project contains. To delete a feature, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_DeleteFeature.html">DeleteFeature</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProjectRequest;
import org.openapis.openapi.models.operations.DeleteProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProjectRequest req = new DeleteProjectRequest("voluptatibus") {{
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "vero";
                xAmzCredential = "omnis";
                xAmzDate = "quis";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "voluptate";
            }};            

            DeleteProjectResponse res = sdk.sdk.deleteProject(req);

            if (res.deleteProjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSegment

Deletes a segment. You can't delete a segment that is being used in a launch or experiment, even if that launch or experiment is not currently running.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSegmentRequest;
import org.openapis.openapi.models.operations.DeleteSegmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSegmentRequest req = new DeleteSegmentRequest("vero") {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "hic";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "quod";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "similique";
            }};            

            DeleteSegmentResponse res = sdk.sdk.deleteSegment(req);

            if (res.deleteSegmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## evaluateFeature

<p>This operation assigns a feature variation to one given user session. You pass in an <code>entityID</code> that represents the user. Evidently then checks the evaluation rules and assigns the variation.</p> <p>The first rules that are evaluated are the override rules. If the user's <code>entityID</code> matches an override rule, the user is served the variation specified by that rule.</p> <p>If there is a current launch with this feature that uses segment overrides, and if the user session's <code>evaluationContext</code> matches a segment rule defined in a segment override, the configuration in the segment overrides is used. For more information about segments, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateSegment.html">CreateSegment</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html">Use segments to focus your audience</a>.</p> <p>If there is a launch with no segment overrides, the user might be assigned to a variation in the launch. The chance of this depends on the percentage of users that are allocated to that launch. If the user is enrolled in the launch, the variation they are served depends on the allocation of the various feature variations used for the launch.</p> <p>If the user is not assigned to a launch, and there is an ongoing experiment for this feature, the user might be assigned to a variation in the experiment. The chance of this depends on the percentage of users that are allocated to that experiment.</p> <p>If the experiment uses a segment, then only user sessions with <code>evaluationContext</code> values that match the segment rule are used in the experiment.</p> <p>If the user is enrolled in the experiment, the variation they are served depends on the allocation of the various feature variations used for the experiment. </p> <p>If the user is not assigned to a launch or experiment, they are served the default variation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EvaluateFeatureRequest;
import org.openapis.openapi.models.operations.EvaluateFeatureRequestBody;
import org.openapis.openapi.models.operations.EvaluateFeatureResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EvaluateFeatureRequest req = new EvaluateFeatureRequest(                new EvaluateFeatureRequestBody("vero") {{
                                evaluationContext = "ducimus";
                            }};, "dolore", "quibusdam") {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "natus";
                xAmzDate = "impedit";
                xAmzSecurityToken = "aut";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "exercitationem";
            }};            

            EvaluateFeatureResponse res = sdk.sdk.evaluateFeature(req);

            if (res.evaluateFeatureResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExperiment

Returns the details about one experiment. You must already know the experiment name. To retrieve a list of experiments in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListExperiments.html">ListExperiments</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExperimentRequest;
import org.openapis.openapi.models.operations.GetExperimentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetExperimentRequest req = new GetExperimentRequest("fugit", "porro") {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "iusto";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "officia";
            }};            

            GetExperimentResponse res = sdk.sdk.getExperiment(req);

            if (res.getExperimentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExperimentResults

<p>Retrieves the results of a running or completed experiment. No results are available until there have been 100 events for each variation and at least 10 minutes have passed since the start of the experiment. To increase the statistical power, Evidently performs an additional offline p-value analysis at the end of the experiment. Offline p-value analysis can detect statistical significance in some cases where the anytime p-values used during the experiment do not find statistical significance.</p> <p>Experiment results are available up to 63 days after the start of the experiment. They are not available after that because of CloudWatch data retention policies.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExperimentResultsRequest;
import org.openapis.openapi.models.operations.GetExperimentResultsRequestBody;
import org.openapis.openapi.models.operations.GetExperimentResultsRequestBodyBaseStatEnum;
import org.openapis.openapi.models.operations.GetExperimentResultsResponse;
import org.openapis.openapi.models.shared.ExperimentReportNameEnum;
import org.openapis.openapi.models.shared.ExperimentResultRequestTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetExperimentResultsRequest req = new GetExperimentResultsRequest(                new GetExperimentResultsRequestBody(                new String[]{{
                                                add("ea"),
                                                add("aspernatur"),
                                            }},                 new String[]{{
                                                add("possimus"),
                                                add("magnam"),
                                            }}) {{
                                baseStat = GetExperimentResultsRequestBodyBaseStatEnum.MEAN;
                                endTime = OffsetDateTime.parse("2022-08-07T14:04:49.880Z");
                                period = 511319L;
                                reportNames = new org.openapis.openapi.models.shared.ExperimentReportNameEnum[]{{
                                    add(ExperimentReportNameEnum.BAYESIAN_INFERENCE),
                                }};
                                resultStats = new org.openapis.openapi.models.shared.ExperimentResultRequestTypeEnum[]{{
                                    add(ExperimentResultRequestTypeEnum.P_VALUE),
                                }};
                                startTime = OffsetDateTime.parse("2022-08-05T18:23:03.713Z");
                            }};, "nulla", "excepturi") {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "sapiente";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "impedit";
            }};            

            GetExperimentResultsResponse res = sdk.sdk.getExperimentResults(req);

            if (res.getExperimentResultsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFeature

Returns the details about one feature. You must already know the feature name. To retrieve a list of features in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListFeatures.html">ListFeatures</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFeatureRequest;
import org.openapis.openapi.models.operations.GetFeatureResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFeatureRequest req = new GetFeatureRequest("veniam", "aliquid") {{
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "ea";
                xAmzDate = "quo";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "aspernatur";
            }};            

            GetFeatureResponse res = sdk.sdk.getFeature(req);

            if (res.getFeatureResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLaunch

Returns the details about one launch. You must already know the launch name. To retrieve a list of launches in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListLaunches.html">ListLaunches</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLaunchRequest;
import org.openapis.openapi.models.operations.GetLaunchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLaunchRequest req = new GetLaunchRequest("eaque", "a") {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "aut";
                xAmzCredential = "aut";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "fugit";
            }};            

            GetLaunchResponse res = sdk.sdk.getLaunch(req);

            if (res.getLaunchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProject

Returns the details about one launch. You must already know the project name. To retrieve a list of projects in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListProjects.html">ListProjects</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectRequest;
import org.openapis.openapi.models.operations.GetProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProjectRequest req = new GetProjectRequest("inventore") {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "et";
                xAmzCredential = "dolorum";
                xAmzDate = "laborum";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "eum";
            }};            

            GetProjectResponse res = sdk.sdk.getProject(req);

            if (res.getProjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSegment

Returns information about the specified segment. Specify the segment you want to view by specifying its ARN.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSegmentRequest;
import org.openapis.openapi.models.operations.GetSegmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSegmentRequest req = new GetSegmentRequest("nobis") {{
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "nulla";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "libero";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "tempora";
            }};            

            GetSegmentResponse res = sdk.sdk.getSegment(req);

            if (res.getSegmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listExperiments

Returns configuration details about all the experiments in the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListExperimentsRequest;
import org.openapis.openapi.models.operations.ListExperimentsResponse;
import org.openapis.openapi.models.operations.ListExperimentsStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListExperimentsRequest req = new ListExperimentsRequest("explicabo") {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "molestiae";
                xAmzDate = "magnam";
                xAmzSecurityToken = "odio";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "esse";
                maxResults = 456141L;
                nextToken = "rem";
                status = ListExperimentsStatusEnum.COMPLETED;
            }};            

            ListExperimentsResponse res = sdk.sdk.listExperiments(req);

            if (res.listExperimentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFeatures

Returns configuration details about all the features in the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFeaturesRequest;
import org.openapis.openapi.models.operations.ListFeaturesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFeaturesRequest req = new ListFeaturesRequest("quidem") {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "ut";
                xAmzCredential = "eum";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "praesentium";
                maxResults = 788546L;
                nextToken = "veritatis";
            }};            

            ListFeaturesResponse res = sdk.sdk.listFeatures(req);

            if (res.listFeaturesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLaunches

Returns configuration details about all the launches in the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLaunchesRequest;
import org.openapis.openapi.models.operations.ListLaunchesResponse;
import org.openapis.openapi.models.operations.ListLaunchesStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLaunchesRequest req = new ListLaunchesRequest("id") {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "neque";
                xAmzCredential = "quo";
                xAmzDate = "illum";
                xAmzSecurityToken = "quo";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "eius";
                maxResults = 178367L;
                nextToken = "voluptas";
                status = ListLaunchesStatusEnum.CREATED;
            }};            

            ListLaunchesResponse res = sdk.sdk.listLaunches(req);

            if (res.listLaunchesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProjects

Returns configuration details about all the projects in the current Region in your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProjectsRequest;
import org.openapis.openapi.models.operations.ListProjectsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProjectsRequest req = new ListProjectsRequest() {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "debitis";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "quo";
                maxResults = 459856L;
                nextToken = "recusandae";
            }};            

            ListProjectsResponse res = sdk.sdk.listProjects(req);

            if (res.listProjectsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSegmentReferences

Use this operation to find which experiments or launches are using a specified segment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSegmentReferencesRequest;
import org.openapis.openapi.models.operations.ListSegmentReferencesResponse;
import org.openapis.openapi.models.operations.ListSegmentReferencesTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSegmentReferencesRequest req = new ListSegmentReferencesRequest("distinctio", ListSegmentReferencesTypeEnum.LAUNCH) {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "inventore";
                xAmzCredential = "nihil";
                xAmzDate = "totam";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "odio";
                maxResults = 577543L;
                nextToken = "commodi";
            }};            

            ListSegmentReferencesResponse res = sdk.sdk.listSegmentReferences(req);

            if (res.listSegmentReferencesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSegments

Returns a list of audience segments that you have created in your account in this Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSegmentsRequest;
import org.openapis.openapi.models.operations.ListSegmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSegmentsRequest req = new ListSegmentsRequest() {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "molestiae";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "porro";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "quas";
                maxResults = 510017L;
                nextToken = "consequuntur";
            }};            

            ListSegmentsResponse res = sdk.sdk.listSegments(req);

            if (res.listSegmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Displays the tags associated with an Evidently resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("fugit") {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "incidunt";
                xAmzDate = "atque";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "nisi";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putProjectEvents

Sends performance events to Evidently. These events can be used to evaluate a launch or an experiment.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutProjectEventsRequest;
import org.openapis.openapi.models.operations.PutProjectEventsRequestBody;
import org.openapis.openapi.models.operations.PutProjectEventsResponse;
import org.openapis.openapi.models.shared.Event;
import org.openapis.openapi.models.shared.EventTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutProjectEventsRequest req = new PutProjectEventsRequest(                new PutProjectEventsRequestBody(                new org.openapis.openapi.models.shared.Event[]{{
                                                add(new Event("occaecati", OffsetDateTime.parse("2022-10-25T15:36:05.649Z"), EventTypeEnum.AWS_EVIDENTLY_EVALUATION) {{
                                                    data = "consequuntur";
                                                    timestamp = OffsetDateTime.parse("2022-11-14T18:20:51.649Z");
                                                    type = EventTypeEnum.AWS_EVIDENTLY_CUSTOM;
                                                }}),
                                                add(new Event("quod", OffsetDateTime.parse("2021-03-31T16:39:55.446Z"), EventTypeEnum.AWS_EVIDENTLY_EVALUATION) {{
                                                    data = "eveniet";
                                                    timestamp = OffsetDateTime.parse("2022-10-02T03:30:08.260Z");
                                                    type = EventTypeEnum.AWS_EVIDENTLY_EVALUATION;
                                                }}),
                                                add(new Event("molestiae", OffsetDateTime.parse("2021-11-03T10:56:47.600Z"), EventTypeEnum.AWS_EVIDENTLY_EVALUATION) {{
                                                    data = "quasi";
                                                    timestamp = OffsetDateTime.parse("2021-09-21T04:40:52.923Z");
                                                    type = EventTypeEnum.AWS_EVIDENTLY_CUSTOM;
                                                }}),
                                                add(new Event("tempore", OffsetDateTime.parse("2022-03-27T01:23:58.638Z"), EventTypeEnum.AWS_EVIDENTLY_EVALUATION) {{
                                                    data = "distinctio";
                                                    timestamp = OffsetDateTime.parse("2022-12-02T08:37:36.325Z");
                                                    type = EventTypeEnum.AWS_EVIDENTLY_CUSTOM;
                                                }}),
                                            }});, "consequatur") {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "sapiente";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "esse";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "provident";
            }};            

            PutProjectEventsResponse res = sdk.sdk.putProjectEvents(req);

            if (res.putProjectEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startExperiment

Starts an existing experiment. To create an experiment, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateExperiment.html">CreateExperiment</a>.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartExperimentRequest;
import org.openapis.openapi.models.operations.StartExperimentRequestBody;
import org.openapis.openapi.models.operations.StartExperimentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartExperimentRequest req = new StartExperimentRequest(                new StartExperimentRequestBody(OffsetDateTime.parse("2021-04-30T04:43:08.128Z"));, "esse", "quasi") {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "error";
                xAmzCredential = "sint";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "quia";
                xAmzSignedHeaders = "eveniet";
            }};            

            StartExperimentResponse res = sdk.sdk.startExperiment(req);

            if (res.startExperimentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startLaunch

Starts an existing launch. To create a launch, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateLaunch.html">CreateLaunch</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartLaunchRequest;
import org.openapis.openapi.models.operations.StartLaunchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartLaunchRequest req = new StartLaunchRequest("facere", "veritatis") {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "similique";
                xAmzDate = "culpa";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "quae";
            }};            

            StartLaunchResponse res = sdk.sdk.startLaunch(req);

            if (res.startLaunchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopExperiment

Stops an experiment that is currently running. If you stop an experiment, you can't resume it or restart it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopExperimentRequest;
import org.openapis.openapi.models.operations.StopExperimentRequestBody;
import org.openapis.openapi.models.operations.StopExperimentRequestBodyDesiredStateEnum;
import org.openapis.openapi.models.operations.StopExperimentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopExperimentRequest req = new StopExperimentRequest(                new StopExperimentRequestBody() {{
                                desiredState = StopExperimentRequestBodyDesiredStateEnum.COMPLETED;
                                reason = "in";
                            }};, "eius", "libero") {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "accusantium";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "ullam";
            }};            

            StopExperimentResponse res = sdk.sdk.stopExperiment(req);

            if (res.stopExperimentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopLaunch

Stops a launch that is currently running. After you stop a launch, you will not be able to resume it or restart it. Also, it will not be evaluated as a rule for traffic allocation, and the traffic that was allocated to the launch will instead be available to the feature's experiment, if there is one. Otherwise, all traffic will be served the default variation after the launch is stopped.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopLaunchRequest;
import org.openapis.openapi.models.operations.StopLaunchRequestBody;
import org.openapis.openapi.models.operations.StopLaunchRequestBodyDesiredStateEnum;
import org.openapis.openapi.models.operations.StopLaunchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopLaunchRequest req = new StopLaunchRequest(                new StopLaunchRequestBody() {{
                                desiredState = StopLaunchRequestBodyDesiredStateEnum.COMPLETED;
                                reason = "nisi";
                            }};, "aut", "voluptatum") {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "ex";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "architecto";
            }};            

            StopLaunchResponse res = sdk.sdk.stopLaunch(req);

            if (res.stopLaunchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Assigns one or more tags (key-value pairs) to the specified CloudWatch Evidently resource. Projects, features, launches, and experiments can be tagged.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("quasi", "at");
                                                put("et", "voluptate");
                                                put("ipsa", "minima");
                                                put("veritatis", "consectetur");
                                            }});, "adipisci") {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "accusantium";
                xAmzDate = "rem";
                xAmzSecurityToken = "aut";
                xAmzSignature = "laudantium";
                xAmzSignedHeaders = "eum";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testSegmentPattern

Use this operation to test a rules pattern that you plan to use to create an audience segment. For more information about segments, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateSegment.html">CreateSegment</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestSegmentPatternRequest;
import org.openapis.openapi.models.operations.TestSegmentPatternRequestBody;
import org.openapis.openapi.models.operations.TestSegmentPatternResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TestSegmentPatternRequest req = new TestSegmentPatternRequest(                new TestSegmentPatternRequestBody("ab", "corrupti");) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "dolor";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "explicabo";
            }};            

            TestSegmentPatternResponse res = sdk.sdk.testSegmentPattern(req);

            if (res.testSegmentPatternResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes one or more tags from the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("aut",                 new String[]{{
                                add("dicta"),
                                add("maiores"),
                            }}) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "velit";
                xAmzCredential = "voluptatibus";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "ea";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateExperiment

<p>Updates an Evidently experiment. </p> <p>Don't use this operation to update an experiment's tag. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateExperimentRequest;
import org.openapis.openapi.models.operations.UpdateExperimentRequestBody;
import org.openapis.openapi.models.operations.UpdateExperimentRequestBodyOnlineAbConfig;
import org.openapis.openapi.models.operations.UpdateExperimentResponse;
import org.openapis.openapi.models.shared.ChangeDirectionEnumEnum;
import org.openapis.openapi.models.shared.MetricDefinitionConfig;
import org.openapis.openapi.models.shared.MetricGoalConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TreatmentConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateExperimentRequest req = new UpdateExperimentRequest(                new UpdateExperimentRequestBody() {{
                                description = "consequuntur";
                                metricGoals = new org.openapis.openapi.models.shared.MetricGoalConfig[]{{
                                    add(new MetricGoalConfig(                new MetricDefinitionConfig("id", "suscipit", "velit") {{
                                                        eventPattern = "culpa";
                                                        unitLabel = "est";
                                                    }};) {{
                                        desiredChange = ChangeDirectionEnumEnum.DECREASE;
                                        metricDefinition = new MetricDefinitionConfig("ab", "adipisci", "fuga") {{
                                            entityIdKey = "maxime";
                                            eventPattern = "dignissimos";
                                            name = "Mrs. Aubrey Hills";
                                            unitLabel = "quod";
                                            valueKey = "labore";
                                        }};
                                    }}),
                                    add(new MetricGoalConfig(                new MetricDefinitionConfig("corporis", "reiciendis", "assumenda") {{
                                                        eventPattern = "nemo";
                                                        unitLabel = "recusandae";
                                                    }};) {{
                                        desiredChange = ChangeDirectionEnumEnum.DECREASE;
                                        metricDefinition = new MetricDefinitionConfig("cum", "commodi", "in") {{
                                            entityIdKey = "totam";
                                            eventPattern = "fugiat";
                                            name = "Dora Luettgen";
                                            unitLabel = "possimus";
                                            valueKey = "facilis";
                                        }};
                                    }}),
                                    add(new MetricGoalConfig(                new MetricDefinitionConfig("saepe", "necessitatibus", "dolore") {{
                                                        eventPattern = "sunt";
                                                        unitLabel = "asperiores";
                                                    }};) {{
                                        desiredChange = ChangeDirectionEnumEnum.INCREASE;
                                        metricDefinition = new MetricDefinitionConfig("suscipit", "reiciendis", "quidem") {{
                                            entityIdKey = "aperiam";
                                            eventPattern = "cum";
                                            name = "Arlene Heidenreich";
                                            unitLabel = "numquam";
                                            valueKey = "doloribus";
                                        }};
                                    }}),
                                    add(new MetricGoalConfig(                new MetricDefinitionConfig("libero", "vitae", "accusamus") {{
                                                        eventPattern = "similique";
                                                        unitLabel = "tempora";
                                                    }};) {{
                                        desiredChange = ChangeDirectionEnumEnum.INCREASE;
                                        metricDefinition = new MetricDefinitionConfig("laboriosam", "ipsa", "voluptates") {{
                                            entityIdKey = "non";
                                            eventPattern = "amet";
                                            name = "Courtney Wiegand";
                                            unitLabel = "corporis";
                                            valueKey = "harum";
                                        }};
                                    }}),
                                }};
                                onlineAbConfig = new UpdateExperimentRequestBodyOnlineAbConfig() {{
                                    controlTreatmentName = "aspernatur";
                                    treatmentWeights = new java.util.HashMap<String, Long>() {{
                                        put("voluptas", 374296L);
                                        put("minima", 748789L);
                                    }};
                                }};;
                                randomizationSalt = "dolorum";
                                removeSegment = false;
                                samplingRate = 237807L;
                                segment = "minus";
                                treatments = new org.openapis.openapi.models.shared.TreatmentConfig[]{{
                                    add(new TreatmentConfig("cum", "blanditiis", "quas") {{
                                        description = "blanditiis";
                                        feature = "in";
                                        name = "Suzanne Torphy";
                                        variation = "adipisci";
                                    }}),
                                }};
                            }};, "hic", "nesciunt") {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "pariatur";
                xAmzDate = "totam";
                xAmzSecurityToken = "hic";
                xAmzSignature = "exercitationem";
                xAmzSignedHeaders = "nobis";
            }};            

            UpdateExperimentResponse res = sdk.sdk.updateExperiment(req);

            if (res.updateExperimentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFeature

<p>Updates an existing feature.</p> <p>You can't use this operation to update the tags of an existing feature. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFeatureRequest;
import org.openapis.openapi.models.operations.UpdateFeatureRequestBody;
import org.openapis.openapi.models.operations.UpdateFeatureRequestBodyEvaluationStrategyEnum;
import org.openapis.openapi.models.operations.UpdateFeatureResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VariableValue;
import org.openapis.openapi.models.shared.VariationConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFeatureRequest req = new UpdateFeatureRequest(                new UpdateFeatureRequestBody() {{
                                addOrUpdateVariations = new org.openapis.openapi.models.shared.VariationConfig[]{{
                                    add(new VariationConfig("iste",                 new VariableValue() {{
                                                        boolValue = false;
                                                        doubleValue = 2927.94;
                                                        longValue = 671907L;
                                                        stringValue = "sed";
                                                    }};) {{
                                        name = "Faith Cole";
                                        value = new VariableValue() {{
                                            boolValue = false;
                                            doubleValue = 4518.22;
                                            longValue = 709072L;
                                            stringValue = "ab";
                                        }};
                                    }}),
                                    add(new VariationConfig("sapiente",                 new VariableValue() {{
                                                        boolValue = false;
                                                        doubleValue = 8953.86;
                                                        longValue = 72434L;
                                                        stringValue = "reiciendis";
                                                    }};) {{
                                        name = "Tonya Predovic";
                                        value = new VariableValue() {{
                                            boolValue = false;
                                            doubleValue = 6041.18;
                                            longValue = 100032L;
                                            stringValue = "suscipit";
                                        }};
                                    }}),
                                    add(new VariationConfig("ipsum",                 new VariableValue() {{
                                                        boolValue = false;
                                                        doubleValue = 4067.33;
                                                        longValue = 579912L;
                                                        stringValue = "quos";
                                                    }};) {{
                                        name = "Naomi Wuckert";
                                        value = new VariableValue() {{
                                            boolValue = false;
                                            doubleValue = 5922.31;
                                            longValue = 258702L;
                                            stringValue = "necessitatibus";
                                        }};
                                    }}),
                                }};
                                defaultVariation = "voluptatibus";
                                description = "tempora";
                                entityOverrides = new java.util.HashMap<String, String>() {{
                                    put("voluptate", "reiciendis");
                                    put("ex", "sit");
                                }};
                                evaluationStrategy = UpdateFeatureRequestBodyEvaluationStrategyEnum.ALL_RULES;
                                removeVariations = new String[]{{
                                    add("praesentium"),
                                    add("facilis"),
                                    add("quaerat"),
                                    add("incidunt"),
                                }};
                            }};, "ipsam", "debitis") {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "sit";
                xAmzCredential = "nobis";
                xAmzDate = "error";
                xAmzSecurityToken = "veniam";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "recusandae";
            }};            

            UpdateFeatureResponse res = sdk.sdk.updateFeature(req);

            if (res.updateFeatureResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLaunch

<p>Updates a launch of a given feature. </p> <p>Don't use this operation to update the tags of an existing launch. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLaunchRequest;
import org.openapis.openapi.models.operations.UpdateLaunchRequestBody;
import org.openapis.openapi.models.operations.UpdateLaunchRequestBodyScheduledSplitsConfig;
import org.openapis.openapi.models.operations.UpdateLaunchResponse;
import org.openapis.openapi.models.shared.LaunchGroupConfig;
import org.openapis.openapi.models.shared.MetricDefinitionConfig;
import org.openapis.openapi.models.shared.MetricMonitorConfig;
import org.openapis.openapi.models.shared.ScheduledSplitConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SegmentOverride;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLaunchRequest req = new UpdateLaunchRequest(                new UpdateLaunchRequestBody() {{
                                description = "nulla";
                                groups = new org.openapis.openapi.models.shared.LaunchGroupConfig[]{{
                                    add(new LaunchGroupConfig("praesentium", "cum", "laboriosam") {{
                                        description = "aperiam";
                                        feature = "saepe";
                                        name = "Lorraine King IV";
                                        variation = "exercitationem";
                                    }}),
                                }};
                                metricMonitors = new org.openapis.openapi.models.shared.MetricMonitorConfig[]{{
                                    add(new MetricMonitorConfig(                new MetricDefinitionConfig("tempora", "atque", "fugit") {{
                                                        eventPattern = "ut";
                                                        unitLabel = "fugiat";
                                                    }};) {{
                                        metricDefinition = new MetricDefinitionConfig("dolorum", "corrupti", "accusamus") {{
                                            entityIdKey = "voluptatum";
                                            eventPattern = "error";
                                            name = "Rudolph Trantow";
                                            unitLabel = "nostrum";
                                            valueKey = "officia";
                                        }};
                                    }}),
                                    add(new MetricMonitorConfig(                new MetricDefinitionConfig("et", "blanditiis", "ex") {{
                                                        eventPattern = "sed";
                                                        unitLabel = "sit";
                                                    }};) {{
                                        metricDefinition = new MetricDefinitionConfig("quas", "repudiandae", "corporis") {{
                                            entityIdKey = "voluptatem";
                                            eventPattern = "culpa";
                                            name = "Miguel Adams";
                                            unitLabel = "sit";
                                            valueKey = "voluptatum";
                                        }};
                                    }}),
                                    add(new MetricMonitorConfig(                new MetricDefinitionConfig("labore", "quidem", "atque") {{
                                                        eventPattern = "laborum";
                                                        unitLabel = "nam";
                                                    }};) {{
                                        metricDefinition = new MetricDefinitionConfig("dicta", "architecto", "occaecati") {{
                                            entityIdKey = "vel";
                                            eventPattern = "nostrum";
                                            name = "Evan Altenwerth";
                                            unitLabel = "dolorem";
                                            valueKey = "harum";
                                        }};
                                    }}),
                                }};
                                randomizationSalt = "tenetur";
                                scheduledSplitsConfig = new UpdateLaunchRequestBodyScheduledSplitsConfig() {{
                                    steps = new org.openapis.openapi.models.shared.ScheduledSplitConfig[]{{
                                        add(new ScheduledSplitConfig(                new java.util.HashMap<String, Long>() {{
                                                            put("accusamus", 618826L);
                                                            put("minima", 133461L);
                                                            put("ex", 980581L);
                                                            put("corrupti", 871786L);
                                                        }}, OffsetDateTime.parse("2021-12-30T00:19:55.496Z")) {{
                                            groupWeights = new java.util.HashMap<String, Long>() {{
                                                put("amet", 647197L);
                                            }};
                                            segmentOverrides = new org.openapis.openapi.models.shared.SegmentOverride[]{{
                                                add(new SegmentOverride(440666L, "facere",                 new java.util.HashMap<String, Long>() {{
                                                                    put("praesentium", 648598L);
                                                                    put("veniam", 29100L);
                                                                    put("quisquam", 919532L);
                                                                }}) {{
                                                    evaluationOrder = 600392L;
                                                    segment = "reiciendis";
                                                    weights = new java.util.HashMap<String, Long>() {{
                                                        put("repellendus", 962771L);
                                                        put("voluptates", 16871L);
                                                        put("est", 696483L);
                                                    }};
                                                }}),
                                                add(new SegmentOverride(806670L, "et",                 new java.util.HashMap<String, Long>() {{
                                                                    put("amet", 826825L);
                                                                    put("ea", 539118L);
                                                                }}) {{
                                                    evaluationOrder = 97243L;
                                                    segment = "atque";
                                                    weights = new java.util.HashMap<String, Long>() {{
                                                        put("asperiores", 519952L);
                                                        put("suscipit", 693957L);
                                                    }};
                                                }}),
                                            }};
                                            startTime = OffsetDateTime.parse("2021-03-24T07:07:12.173Z");
                                        }}),
                                        add(new ScheduledSplitConfig(                new java.util.HashMap<String, Long>() {{
                                                            put("dolorum", 200364L);
                                                            put("quae", 925703L);
                                                        }}, OffsetDateTime.parse("2022-05-20T05:55:02.076Z")) {{
                                            groupWeights = new java.util.HashMap<String, Long>() {{
                                                put("repudiandae", 542129L);
                                                put("atque", 120919L);
                                            }};
                                            segmentOverrides = new org.openapis.openapi.models.shared.SegmentOverride[]{{
                                                add(new SegmentOverride(36033L, "beatae",                 new java.util.HashMap<String, Long>() {{
                                                                    put("enim", 389135L);
                                                                }}) {{
                                                    evaluationOrder = 680697L;
                                                    segment = "repellendus";
                                                    weights = new java.util.HashMap<String, Long>() {{
                                                        put("reiciendis", 42976L);
                                                        put("repudiandae", 116098L);
                                                    }};
                                                }}),
                                                add(new SegmentOverride(446394L, "adipisci",                 new java.util.HashMap<String, Long>() {{
                                                                    put("occaecati", 160230L);
                                                                    put("fugit", 661118L);
                                                                    put("quis", 440264L);
                                                                    put("error", 76486L);
                                                                }}) {{
                                                    evaluationOrder = 246535L;
                                                    segment = "a";
                                                    weights = new java.util.HashMap<String, Long>() {{
                                                        put("magnam", 906355L);
                                                        put("consequuntur", 580107L);
                                                        put("officiis", 597937L);
                                                    }};
                                                }}),
                                                add(new SegmentOverride(907733L, "qui",                 new java.util.HashMap<String, Long>() {{
                                                                    put("iure", 898063L);
                                                                    put("ratione", 672582L);
                                                                    put("distinctio", 528940L);
                                                                }}) {{
                                                    evaluationOrder = 361306L;
                                                    segment = "quidem";
                                                    weights = new java.util.HashMap<String, Long>() {{
                                                        put("non", 878493L);
                                                        put("doloremque", 434156L);
                                                        put("ipsa", 517612L);
                                                        put("quae", 474668L);
                                                    }};
                                                }}),
                                                add(new SegmentOverride(470649L, "mollitia",                 new java.util.HashMap<String, Long>() {{
                                                                    put("alias", 979527L);
                                                                    put("reiciendis", 174658L);
                                                                }}) {{
                                                    evaluationOrder = 523006L;
                                                    segment = "aliquam";
                                                    weights = new java.util.HashMap<String, Long>() {{
                                                        put("repellat", 3099L);
                                                        put("corporis", 597303L);
                                                    }};
                                                }}),
                                            }};
                                            startTime = OffsetDateTime.parse("2022-05-06T13:39:00.258Z");
                                        }}),
                                    }};
                                }};;
                            }};, "molestiae", "ex") {{
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "adipisci";
                xAmzDate = "debitis";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "nemo";
            }};            

            UpdateLaunchResponse res = sdk.sdk.updateLaunch(req);

            if (res.updateLaunchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProject

<p>Updates the description of an existing project.</p> <p>To create a new project, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateProject.html">CreateProject</a>.</p> <p>Don't use this operation to update the data storage options of a project. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateProjectDataDelivery.html">UpdateProjectDataDelivery</a>. </p> <p>Don't use this operation to update the tags of a project. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProjectRequest;
import org.openapis.openapi.models.operations.UpdateProjectRequestBody;
import org.openapis.openapi.models.operations.UpdateProjectRequestBodyAppConfigResource;
import org.openapis.openapi.models.operations.UpdateProjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateProjectRequest req = new UpdateProjectRequest(                new UpdateProjectRequestBody() {{
                                appConfigResource = new UpdateProjectRequestBodyAppConfigResource() {{
                                    applicationId = "esse";
                                    environmentId = "provident";
                                }};;
                                description = "quis";
                            }};, "eum") {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "provident";
                xAmzCredential = "aspernatur";
                xAmzDate = "ullam";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "animi";
                xAmzSignedHeaders = "nostrum";
            }};            

            UpdateProjectResponse res = sdk.sdk.updateProject(req);

            if (res.updateProjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProjectDataDelivery

<p>Updates the data storage options for this project. If you store evaluation events, you an keep them and analyze them on your own. If you choose not to store evaluation events, Evidently deletes them after using them to produce metrics and other experiment results that you can view.</p> <p>You can't specify both <code>cloudWatchLogs</code> and <code>s3Destination</code> in the same operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProjectDataDeliveryRequest;
import org.openapis.openapi.models.operations.UpdateProjectDataDeliveryRequestBody;
import org.openapis.openapi.models.operations.UpdateProjectDataDeliveryRequestBodyCloudWatchLogs;
import org.openapis.openapi.models.operations.UpdateProjectDataDeliveryRequestBodyS3Destination;
import org.openapis.openapi.models.operations.UpdateProjectDataDeliveryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateProjectDataDeliveryRequest req = new UpdateProjectDataDeliveryRequest(                new UpdateProjectDataDeliveryRequestBody() {{
                                cloudWatchLogs = new UpdateProjectDataDeliveryRequestBodyCloudWatchLogs() {{
                                    logGroup = "provident";
                                }};;
                                s3Destination = new UpdateProjectDataDeliveryRequestBodyS3Destination() {{
                                    bucket = "possimus";
                                    prefix = "animi";
                                }};;
                            }};, "ex") {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "repellat";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "in";
                xAmzSignedHeaders = "nam";
            }};            

            UpdateProjectDataDeliveryResponse res = sdk.sdk.updateProjectDataDelivery(req);

            if (res.updateProjectDataDeliveryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
