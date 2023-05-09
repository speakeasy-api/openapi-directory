# SDK

## Overview

<p>You can use Amazon CloudWatch Evidently to safely validate new features by serving them to a specified percentage of your users while you roll out the feature. You can monitor the performance of the new feature to help you decide when to ramp up traffic to your users. This helps you reduce risk and identify unintended consequences before you fully launch the feature.</p> <p>You can also conduct A/B experiments to make feature design decisions based on evidence and data. An experiment can test as many as five variations at once. Evidently collects experiment data and analyzes it using statistical methods. It also provides clear recommendations about which variations perform better. You can test both user-facing features and backend features.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/evidently/>
### Available Operations

* [BatchEvaluateFeature](#batchevaluatefeature) - <p>This operation assigns feature variation to user sessions. For each user session, you pass in an <code>entityID</code> that represents the user. Evidently then checks the evaluation rules and assigns the variation.</p> <p>The first rules that are evaluated are the override rules. If the user's <code>entityID</code> matches an override rule, the user is served the variation specified by that rule.</p> <p>Next, if there is a launch of the feature, the user might be assigned to a variation in the launch. The chance of this depends on the percentage of users that are allocated to that launch. If the user is enrolled in the launch, the variation they are served depends on the allocation of the various feature variations used for the launch.</p> <p>If the user is not assigned to a launch, and there is an ongoing experiment for this feature, the user might be assigned to a variation in the experiment. The chance of this depends on the percentage of users that are allocated to that experiment. If the user is enrolled in the experiment, the variation they are served depends on the allocation of the various feature variations used for the experiment. </p> <p>If the user is not assigned to a launch or experiment, they are served the default variation.</p>
* [CreateExperiment](#createexperiment) - <p>Creates an Evidently <i>experiment</i>. Before you create an experiment, you must create the feature to use for the experiment.</p> <p>An experiment helps you make feature design decisions based on evidence and data. An experiment can test as many as five variations at once. Evidently collects experiment data and analyzes it by statistical methods, and provides clear recommendations about which variations perform better.</p> <p>You can optionally specify a <code>segment</code> to have the experiment consider only certain audience types in the experiment, such as using only user sessions from a certain location or who use a certain internet browser.</p> <p>Don't use this operation to update an existing experiment. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateExperiment.html">UpdateExperiment</a>. </p>
* [CreateFeature](#createfeature) - <p>Creates an Evidently <i>feature</i> that you want to launch or test. You can define up to five variations of a feature, and use these variations in your launches and experiments. A feature must be created in a project. For information about creating a project, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateProject.html">CreateProject</a>.</p> <p>Don't use this operation to update an existing feature. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateFeature.html">UpdateFeature</a>. </p>
* [CreateLaunch](#createlaunch) - <p>Creates a <i>launch</i> of a given feature. Before you create a launch, you must create the feature to use for the launch.</p> <p>You can use a launch to safely validate new features by serving them to a specified percentage of your users while you roll out the feature. You can monitor the performance of the new feature to help you decide when to ramp up traffic to more users. This helps you reduce risk and identify unintended consequences before you fully launch the feature.</p> <p>Don't use this operation to update an existing launch. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateLaunch.html">UpdateLaunch</a>. </p>
* [CreateProject](#createproject) - <p>Creates a project, which is the logical object in Evidently that can contain features, launches, and experiments. Use projects to group similar features together.</p> <p>To update an existing project, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateProject.html">UpdateProject</a>.</p>
* [CreateSegment](#createsegment) - <p>Use this operation to define a <i>segment</i> of your audience. A segment is a portion of your audience that share one or more characteristics. Examples could be Chrome browser users, users in Europe, or Firefox browser users in Europe who also fit other criteria that your application collects, such as age.</p> <p>Using a segment in an experiment limits that experiment to evaluate only the users who match the segment criteria. Using one or more segments in a launch allows you to define different traffic splits for the different audience segments.</p> <p>For more information about segment pattern syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html#CloudWatch-Evidently-segments-syntax.html"> Segment rule pattern syntax</a>.</p> <p>The pattern that you define for a segment is matched against the value of <code>evaluationContext</code>, which is passed into Evidently in the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation, when Evidently assigns a feature variation to a user.</p>
* [DeleteExperiment](#deleteexperiment) - <p>Deletes an Evidently experiment. The feature used for the experiment is not deleted.</p> <p>To stop an experiment without deleting it, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StopExperiment.html">StopExperiment</a>. </p>
* [DeleteFeature](#deletefeature) - Deletes an Evidently feature.
* [DeleteLaunch](#deletelaunch) - <p>Deletes an Evidently launch. The feature used for the launch is not deleted.</p> <p>To stop a launch without deleting it, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StopLaunch.html">StopLaunch</a>. </p>
* [DeleteProject](#deleteproject) - Deletes an Evidently project. Before you can delete a project, you must delete all the features that the project contains. To delete a feature, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_DeleteFeature.html">DeleteFeature</a>.
* [DeleteSegment](#deletesegment) - Deletes a segment. You can't delete a segment that is being used in a launch or experiment, even if that launch or experiment is not currently running.
* [EvaluateFeature](#evaluatefeature) - <p>This operation assigns a feature variation to one given user session. You pass in an <code>entityID</code> that represents the user. Evidently then checks the evaluation rules and assigns the variation.</p> <p>The first rules that are evaluated are the override rules. If the user's <code>entityID</code> matches an override rule, the user is served the variation specified by that rule.</p> <p>If there is a current launch with this feature that uses segment overrides, and if the user session's <code>evaluationContext</code> matches a segment rule defined in a segment override, the configuration in the segment overrides is used. For more information about segments, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateSegment.html">CreateSegment</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html">Use segments to focus your audience</a>.</p> <p>If there is a launch with no segment overrides, the user might be assigned to a variation in the launch. The chance of this depends on the percentage of users that are allocated to that launch. If the user is enrolled in the launch, the variation they are served depends on the allocation of the various feature variations used for the launch.</p> <p>If the user is not assigned to a launch, and there is an ongoing experiment for this feature, the user might be assigned to a variation in the experiment. The chance of this depends on the percentage of users that are allocated to that experiment.</p> <p>If the experiment uses a segment, then only user sessions with <code>evaluationContext</code> values that match the segment rule are used in the experiment.</p> <p>If the user is enrolled in the experiment, the variation they are served depends on the allocation of the various feature variations used for the experiment. </p> <p>If the user is not assigned to a launch or experiment, they are served the default variation.</p>
* [GetExperiment](#getexperiment) - Returns the details about one experiment. You must already know the experiment name. To retrieve a list of experiments in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListExperiments.html">ListExperiments</a>.
* [GetExperimentResults](#getexperimentresults) - <p>Retrieves the results of a running or completed experiment. No results are available until there have been 100 events for each variation and at least 10 minutes have passed since the start of the experiment. To increase the statistical power, Evidently performs an additional offline p-value analysis at the end of the experiment. Offline p-value analysis can detect statistical significance in some cases where the anytime p-values used during the experiment do not find statistical significance.</p> <p>Experiment results are available up to 63 days after the start of the experiment. They are not available after that because of CloudWatch data retention policies.</p>
* [GetFeature](#getfeature) - Returns the details about one feature. You must already know the feature name. To retrieve a list of features in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListFeatures.html">ListFeatures</a>.
* [GetLaunch](#getlaunch) - Returns the details about one launch. You must already know the launch name. To retrieve a list of launches in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListLaunches.html">ListLaunches</a>.
* [GetProject](#getproject) - Returns the details about one launch. You must already know the project name. To retrieve a list of projects in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListProjects.html">ListProjects</a>.
* [GetSegment](#getsegment) - Returns information about the specified segment. Specify the segment you want to view by specifying its ARN.
* [ListExperiments](#listexperiments) - Returns configuration details about all the experiments in the specified project.
* [ListFeatures](#listfeatures) - Returns configuration details about all the features in the specified project.
* [ListLaunches](#listlaunches) - Returns configuration details about all the launches in the specified project.
* [ListProjects](#listprojects) - Returns configuration details about all the projects in the current Region in your account.
* [ListSegmentReferences](#listsegmentreferences) - Use this operation to find which experiments or launches are using a specified segment.
* [ListSegments](#listsegments) - Returns a list of audience segments that you have created in your account in this Region.
* [ListTagsForResource](#listtagsforresource) - Displays the tags associated with an Evidently resource.
* [PutProjectEvents](#putprojectevents) - Sends performance events to Evidently. These events can be used to evaluate a launch or an experiment.
* [StartExperiment](#startexperiment) - Starts an existing experiment. To create an experiment, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateExperiment.html">CreateExperiment</a>.
* [StartLaunch](#startlaunch) - Starts an existing launch. To create a launch, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateLaunch.html">CreateLaunch</a>.
* [StopExperiment](#stopexperiment) - Stops an experiment that is currently running. If you stop an experiment, you can't resume it or restart it.
* [StopLaunch](#stoplaunch) - Stops a launch that is currently running. After you stop a launch, you will not be able to resume it or restart it. Also, it will not be evaluated as a rule for traffic allocation, and the traffic that was allocated to the launch will instead be available to the feature's experiment, if there is one. Otherwise, all traffic will be served the default variation after the launch is stopped.
* [TagResource](#tagresource) - <p>Assigns one or more tags (key-value pairs) to the specified CloudWatch Evidently resource. Projects, features, launches, and experiments can be tagged.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
* [TestSegmentPattern](#testsegmentpattern) - Use this operation to test a rules pattern that you plan to use to create an audience segment. For more information about segments, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateSegment.html">CreateSegment</a>.
* [UntagResource](#untagresource) - Removes one or more tags from the specified resource.
* [UpdateExperiment](#updateexperiment) - <p>Updates an Evidently experiment. </p> <p>Don't use this operation to update an experiment's tag. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
* [UpdateFeature](#updatefeature) - <p>Updates an existing feature.</p> <p>You can't use this operation to update the tags of an existing feature. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
* [UpdateLaunch](#updatelaunch) - <p>Updates a launch of a given feature. </p> <p>Don't use this operation to update the tags of an existing launch. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
* [UpdateProject](#updateproject) - <p>Updates the description of an existing project.</p> <p>To create a new project, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateProject.html">CreateProject</a>.</p> <p>Don't use this operation to update the data storage options of a project. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateProjectDataDelivery.html">UpdateProjectDataDelivery</a>. </p> <p>Don't use this operation to update the tags of a project. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
* [UpdateProjectDataDelivery](#updateprojectdatadelivery) - <p>Updates the data storage options for this project. If you store evaluation events, you an keep them and analyze them on your own. If you choose not to store evaluation events, Evidently deletes them after using them to produce metrics and other experiment results that you can view.</p> <p>You can't specify both <code>cloudWatchLogs</code> and <code>s3Destination</code> in the same operation.</p>

## BatchEvaluateFeature

<p>This operation assigns feature variation to user sessions. For each user session, you pass in an <code>entityID</code> that represents the user. Evidently then checks the evaluation rules and assigns the variation.</p> <p>The first rules that are evaluated are the override rules. If the user's <code>entityID</code> matches an override rule, the user is served the variation specified by that rule.</p> <p>Next, if there is a launch of the feature, the user might be assigned to a variation in the launch. The chance of this depends on the percentage of users that are allocated to that launch. If the user is enrolled in the launch, the variation they are served depends on the allocation of the various feature variations used for the launch.</p> <p>If the user is not assigned to a launch, and there is an ongoing experiment for this feature, the user might be assigned to a variation in the experiment. The chance of this depends on the percentage of users that are allocated to that experiment. If the user is enrolled in the experiment, the variation they are served depends on the allocation of the various feature variations used for the experiment. </p> <p>If the user is not assigned to a launch or experiment, they are served the default variation.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchEvaluateFeature(ctx, operations.BatchEvaluateFeatureRequest{
        RequestBody: operations.BatchEvaluateFeatureRequestBody{
            Requests: []shared.EvaluationRequest{
                shared.EvaluationRequest{
                    EntityID: "molestiae",
                    EvaluationContext: sdk.String("minus"),
                    Feature: "placeat",
                },
                shared.EvaluationRequest{
                    EntityID: "voluptatum",
                    EvaluationContext: sdk.String("iusto"),
                    Feature: "excepturi",
                },
            },
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        Project: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchEvaluateFeatureResponse != nil {
        // handle response
    }
}
```

## CreateExperiment

<p>Creates an Evidently <i>experiment</i>. Before you create an experiment, you must create the feature to use for the experiment.</p> <p>An experiment helps you make feature design decisions based on evidence and data. An experiment can test as many as five variations at once. Evidently collects experiment data and analyzes it by statistical methods, and provides clear recommendations about which variations perform better.</p> <p>You can optionally specify a <code>segment</code> to have the experiment consider only certain audience types in the experiment, such as using only user sessions from a certain location or who use a certain internet browser.</p> <p>Don't use this operation to update an existing experiment. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateExperiment.html">UpdateExperiment</a>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateExperiment(ctx, operations.CreateExperimentRequest{
        RequestBody: operations.CreateExperimentRequestBody{
            Description: sdk.String("ipsam"),
            MetricGoals: []shared.MetricGoalConfig{
                shared.MetricGoalConfig{
                    DesiredChange: shared.ChangeDirectionEnumEnumDecrease.ToPointer(),
                    MetricDefinition: shared.MetricDefinitionConfig{
                        EntityIDKey: "quo",
                        EventPattern: sdk.String("odit"),
                        Name: "Wilfred Wolff",
                        UnitLabel: sdk.String("quod"),
                        ValueKey: "esse",
                    },
                },
                shared.MetricGoalConfig{
                    DesiredChange: shared.ChangeDirectionEnumEnumDecrease.ToPointer(),
                    MetricDefinition: shared.MetricDefinitionConfig{
                        EntityIDKey: "porro",
                        EventPattern: sdk.String("dolorum"),
                        Name: "Antoinette Nikolaus",
                        UnitLabel: sdk.String("deleniti"),
                        ValueKey: "hic",
                    },
                },
                shared.MetricGoalConfig{
                    DesiredChange: shared.ChangeDirectionEnumEnumDecrease.ToPointer(),
                    MetricDefinition: shared.MetricDefinitionConfig{
                        EntityIDKey: "totam",
                        EventPattern: sdk.String("beatae"),
                        Name: "Tanya Gleason",
                        UnitLabel: sdk.String("cum"),
                        ValueKey: "esse",
                    },
                },
                shared.MetricGoalConfig{
                    DesiredChange: shared.ChangeDirectionEnumEnumIncrease.ToPointer(),
                    MetricDefinition: shared.MetricDefinitionConfig{
                        EntityIDKey: "excepturi",
                        EventPattern: sdk.String("aspernatur"),
                        Name: "Cathy Mosciski",
                        UnitLabel: sdk.String("dolor"),
                        ValueKey: "natus",
                    },
                },
            },
            Name: "May Turcotte",
            OnlineAbConfig: &operations.CreateExperimentRequestBodyOnlineAbConfig{
                ControlTreatmentName: sdk.String("corporis"),
                TreatmentWeights: map[string]int64{
                    "iure": 902349,
                    "quidem": 99280,
                    "ipsa": 969810,
                },
            },
            RandomizationSalt: sdk.String("est"),
            SamplingRate: sdk.Int64(653140),
            Segment: sdk.String("laborum"),
            Tags: map[string]string{
                "dolorem": "corporis",
            },
            Treatments: []shared.TreatmentConfig{
                shared.TreatmentConfig{
                    Description: sdk.String("nobis"),
                    Feature: "enim",
                    Name: "Corey Hane III",
                    Variation: "culpa",
                },
            },
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        Project: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateExperimentResponse != nil {
        // handle response
    }
}
```

## CreateFeature

<p>Creates an Evidently <i>feature</i> that you want to launch or test. You can define up to five variations of a feature, and use these variations in your launches and experiments. A feature must be created in a project. For information about creating a project, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateProject.html">CreateProject</a>.</p> <p>Don't use this operation to update an existing feature. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateFeature.html">UpdateFeature</a>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateFeature(ctx, operations.CreateFeatureRequest{
        RequestBody: operations.CreateFeatureRequestBody{
            DefaultVariation: sdk.String("mollitia"),
            Description: sdk.String("occaecati"),
            EntityOverrides: map[string]string{
                "commodi": "quam",
                "molestiae": "velit",
            },
            EvaluationStrategy: operations.CreateFeatureRequestBodyEvaluationStrategyEnumDefaultVariation.ToPointer(),
            Name: "Beatrice Brown",
            Tags: map[string]string{
                "odit": "quo",
                "sequi": "tenetur",
            },
            Variations: []shared.VariationConfig{
                shared.VariationConfig{
                    Name: "Miss Rufus Ankunding",
                    Value: shared.VariableValue{
                        BoolValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(6736.6),
                        LongValue: sdk.Int64(96098),
                        StringValue: sdk.String("reiciendis"),
                    },
                },
                shared.VariationConfig{
                    Name: "Caleb Koss",
                    Value: shared.VariableValue{
                        BoolValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(557.14),
                        LongValue: sdk.Int64(604846),
                        StringValue: sdk.String("voluptate"),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("doloremque"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("dicta"),
        Project: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFeatureResponse != nil {
        // handle response
    }
}
```

## CreateLaunch

<p>Creates a <i>launch</i> of a given feature. Before you create a launch, you must create the feature to use for the launch.</p> <p>You can use a launch to safely validate new features by serving them to a specified percentage of your users while you roll out the feature. You can monitor the performance of the new feature to help you decide when to ramp up traffic to more users. This helps you reduce risk and identify unintended consequences before you fully launch the feature.</p> <p>Don't use this operation to update an existing launch. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateLaunch.html">UpdateLaunch</a>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateLaunch(ctx, operations.CreateLaunchRequest{
        RequestBody: operations.CreateLaunchRequestBody{
            Description: sdk.String("dolore"),
            Groups: []shared.LaunchGroupConfig{
                shared.LaunchGroupConfig{
                    Description: sdk.String("dicta"),
                    Feature: "harum",
                    Name: "Sophia Jerde I",
                    Variation: "quidem",
                },
                shared.LaunchGroupConfig{
                    Description: sdk.String("molestias"),
                    Feature: "excepturi",
                    Name: "Joel Lang",
                    Variation: "quasi",
                },
            },
            MetricMonitors: []shared.MetricMonitorConfig{
                shared.MetricMonitorConfig{
                    MetricDefinition: shared.MetricDefinitionConfig{
                        EntityIDKey: "sint",
                        EventPattern: sdk.String("veritatis"),
                        Name: "Miss Randall Hamill",
                        UnitLabel: sdk.String("explicabo"),
                        ValueKey: "deserunt",
                    },
                },
                shared.MetricMonitorConfig{
                    MetricDefinition: shared.MetricDefinitionConfig{
                        EntityIDKey: "distinctio",
                        EventPattern: sdk.String("quibusdam"),
                        Name: "Pauline Deckow",
                        UnitLabel: sdk.String("quos"),
                        ValueKey: "perferendis",
                    },
                },
                shared.MetricMonitorConfig{
                    MetricDefinition: shared.MetricDefinitionConfig{
                        EntityIDKey: "magni",
                        EventPattern: sdk.String("assumenda"),
                        Name: "Linda Corkery",
                        UnitLabel: sdk.String("tempora"),
                        ValueKey: "facilis",
                    },
                },
                shared.MetricMonitorConfig{
                    MetricDefinition: shared.MetricDefinitionConfig{
                        EntityIDKey: "tempore",
                        EventPattern: sdk.String("labore"),
                        Name: "Andre Franey",
                        UnitLabel: sdk.String("aliquid"),
                        ValueKey: "provident",
                    },
                },
            },
            Name: "Perry Nikolaus",
            RandomizationSalt: sdk.String("a"),
            ScheduledSplitsConfig: &operations.CreateLaunchRequestBodyScheduledSplitsConfig{
                Steps: []shared.ScheduledSplitConfig{
                    shared.ScheduledSplitConfig{
                        GroupWeights: map[string]int64{
                            "in": 846409,
                            "maiores": 699479,
                        },
                        SegmentOverrides: []shared.SegmentOverride{
                            shared.SegmentOverride{
                                EvaluationOrder: 297437,
                                Segment: "cumque",
                                Weights: map[string]int64{
                                    "ea": 396506,
                                    "laborum": 881104,
                                    "non": 581273,
                                    "enim": 881736,
                                },
                            },
                        },
                        StartTime: types.MustTimeFromString("2020-12-03T16:16:10.882Z"),
                    },
                    shared.ScheduledSplitConfig{
                        GroupWeights: map[string]int64{
                            "nam": 659669,
                            "blanditiis": 533206,
                            "sapiente": 230533,
                        },
                        SegmentOverrides: []shared.SegmentOverride{
                            shared.SegmentOverride{
                                EvaluationOrder: 394869,
                                Segment: "vel",
                                Weights: map[string]int64{
                                    "omnis": 474867,
                                    "perferendis": 470132,
                                    "magnam": 716075,
                                },
                            },
                            shared.SegmentOverride{
                                EvaluationOrder: 660174,
                                Segment: "labore",
                                Weights: map[string]int64{
                                    "suscipit": 618016,
                                    "nobis": 428769,
                                },
                            },
                            shared.SegmentOverride{
                                EvaluationOrder: 878453,
                                Segment: "aspernatur",
                                Weights: map[string]int64{
                                    "magnam": 92373,
                                },
                            },
                        },
                        StartTime: types.MustTimeFromString("2022-04-17T13:06:08.135Z"),
                    },
                    shared.ScheduledSplitConfig{
                        GroupWeights: map[string]int64{
                            "quos": 574325,
                            "accusantium": 653201,
                            "reiciendis": 652103,
                        },
                        SegmentOverrides: []shared.SegmentOverride{
                            shared.SegmentOverride{
                                EvaluationOrder: 431418,
                                Segment: "dolor",
                                Weights: map[string]int64{
                                    "odit": 367562,
                                    "quasi": 435865,
                                    "doloribus": 891924,
                                    "eius": 806194,
                                },
                            },
                            shared.SegmentOverride{
                                EvaluationOrder: 537023,
                                Segment: "facilis",
                                Weights: map[string]int64{
                                    "architecto": 99569,
                                    "repudiandae": 352312,
                                },
                            },
                        },
                        StartTime: types.MustTimeFromString("2022-01-23T10:45:15.714Z"),
                    },
                },
            },
            Tags: map[string]string{
                "quibusdam": "sed",
                "saepe": "pariatur",
                "accusantium": "consequuntur",
                "praesentium": "natus",
            },
        },
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("ea"),
        Project: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLaunchResponse != nil {
        // handle response
    }
}
```

## CreateProject

<p>Creates a project, which is the logical object in Evidently that can contain features, launches, and experiments. Use projects to group similar features together.</p> <p>To update an existing project, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateProject.html">UpdateProject</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateProject(ctx, operations.CreateProjectRequest{
        RequestBody: operations.CreateProjectRequestBody{
            AppConfigResource: &operations.CreateProjectRequestBodyAppConfigResource{
                ApplicationID: sdk.String("odit"),
                EnvironmentID: sdk.String("ea"),
            },
            DataDelivery: &operations.CreateProjectRequestBodyDataDelivery{
                CloudWatchLogs: &shared.CloudWatchLogsDestinationConfig{
                    LogGroup: sdk.String("accusantium"),
                },
                S3Destination: &shared.S3DestinationConfig{
                    Bucket: sdk.String("ab"),
                    Prefix: sdk.String("maiores"),
                },
            },
            Description: sdk.String("quidem"),
            Name: "Colleen Johnston PhD",
            Tags: map[string]string{
                "voluptatibus": "perferendis",
                "fugiat": "amet",
            },
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("dolores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProjectResponse != nil {
        // handle response
    }
}
```

## CreateSegment

<p>Use this operation to define a <i>segment</i> of your audience. A segment is a portion of your audience that share one or more characteristics. Examples could be Chrome browser users, users in Europe, or Firefox browser users in Europe who also fit other criteria that your application collects, such as age.</p> <p>Using a segment in an experiment limits that experiment to evaluate only the users who match the segment criteria. Using one or more segments in a launch allows you to define different traffic splits for the different audience segments.</p> <p>For more information about segment pattern syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html#CloudWatch-Evidently-segments-syntax.html"> Segment rule pattern syntax</a>.</p> <p>The pattern that you define for a segment is matched against the value of <code>evaluationContext</code>, which is passed into Evidently in the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation, when Evidently assigns a feature variation to a user.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateSegment(ctx, operations.CreateSegmentRequest{
        RequestBody: operations.CreateSegmentRequestBody{
            Description: sdk.String("quis"),
            Name: "Lance Becker",
            Pattern: "eos",
            Tags: map[string]string{
                "dolores": "minus",
            },
        },
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSegmentResponse != nil {
        // handle response
    }
}
```

## DeleteExperiment

<p>Deletes an Evidently experiment. The feature used for the experiment is not deleted.</p> <p>To stop an experiment without deleting it, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StopExperiment.html">StopExperiment</a>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteExperiment(ctx, operations.DeleteExperimentRequest{
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("perspiciatis"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("error"),
        Experiment: "eaque",
        Project: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteExperimentResponse != nil {
        // handle response
    }
}
```

## DeleteFeature

Deletes an Evidently feature.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteFeature(ctx, operations.DeleteFeatureRequest{
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        Feature: "deleniti",
        Project: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFeatureResponse != nil {
        // handle response
    }
}
```

## DeleteLaunch

<p>Deletes an Evidently launch. The feature used for the launch is not deleted.</p> <p>To stop a launch without deleting it, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StopLaunch.html">StopLaunch</a>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteLaunch(ctx, operations.DeleteLaunchRequest{
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        Launch: "dolorem",
        Project: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteLaunchResponse != nil {
        // handle response
    }
}
```

## DeleteProject

Deletes an Evidently project. Before you can delete a project, you must delete all the features that the project contains. To delete a feature, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_DeleteFeature.html">DeleteFeature</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteProject(ctx, operations.DeleteProjectRequest{
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        Project: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProjectResponse != nil {
        // handle response
    }
}
```

## DeleteSegment

Deletes a segment. You can't delete a segment that is being used in a launch or experiment, even if that launch or experiment is not currently running.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSegment(ctx, operations.DeleteSegmentRequest{
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        Segment: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSegmentResponse != nil {
        // handle response
    }
}
```

## EvaluateFeature

<p>This operation assigns a feature variation to one given user session. You pass in an <code>entityID</code> that represents the user. Evidently then checks the evaluation rules and assigns the variation.</p> <p>The first rules that are evaluated are the override rules. If the user's <code>entityID</code> matches an override rule, the user is served the variation specified by that rule.</p> <p>If there is a current launch with this feature that uses segment overrides, and if the user session's <code>evaluationContext</code> matches a segment rule defined in a segment override, the configuration in the segment overrides is used. For more information about segments, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateSegment.html">CreateSegment</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html">Use segments to focus your audience</a>.</p> <p>If there is a launch with no segment overrides, the user might be assigned to a variation in the launch. The chance of this depends on the percentage of users that are allocated to that launch. If the user is enrolled in the launch, the variation they are served depends on the allocation of the various feature variations used for the launch.</p> <p>If the user is not assigned to a launch, and there is an ongoing experiment for this feature, the user might be assigned to a variation in the experiment. The chance of this depends on the percentage of users that are allocated to that experiment.</p> <p>If the experiment uses a segment, then only user sessions with <code>evaluationContext</code> values that match the segment rule are used in the experiment.</p> <p>If the user is enrolled in the experiment, the variation they are served depends on the allocation of the various feature variations used for the experiment. </p> <p>If the user is not assigned to a launch or experiment, they are served the default variation.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.EvaluateFeature(ctx, operations.EvaluateFeatureRequest{
        RequestBody: operations.EvaluateFeatureRequestBody{
            EntityID: "odio",
            EvaluationContext: sdk.String("quaerat"),
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("atque"),
        Feature: "sit",
        Project: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EvaluateFeatureResponse != nil {
        // handle response
    }
}
```

## GetExperiment

Returns the details about one experiment. You must already know the experiment name. To retrieve a list of experiments in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListExperiments.html">ListExperiments</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetExperiment(ctx, operations.GetExperimentRequest{
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        Experiment: "omnis",
        Project: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetExperimentResponse != nil {
        // handle response
    }
}
```

## GetExperimentResults

<p>Retrieves the results of a running or completed experiment. No results are available until there have been 100 events for each variation and at least 10 minutes have passed since the start of the experiment. To increase the statistical power, Evidently performs an additional offline p-value analysis at the end of the experiment. Offline p-value analysis can detect statistical significance in some cases where the anytime p-values used during the experiment do not find statistical significance.</p> <p>Experiment results are available up to 63 days after the start of the experiment. They are not available after that because of CloudWatch data retention policies.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetExperimentResults(ctx, operations.GetExperimentResultsRequest{
        RequestBody: operations.GetExperimentResultsRequestBody{
            BaseStat: operations.GetExperimentResultsRequestBodyBaseStatEnumMean.ToPointer(),
            EndTime: types.MustTimeFromString("2021-01-08T01:15:41.988Z"),
            MetricNames: []string{
                "ipsum",
                "voluptate",
            },
            Period: sdk.Int64(663078),
            ReportNames: []shared.ExperimentReportNameEnum{
                shared.ExperimentReportNameEnumBayesianInference,
                shared.ExperimentReportNameEnumBayesianInference,
                shared.ExperimentReportNameEnumBayesianInference,
                shared.ExperimentReportNameEnumBayesianInference,
            },
            ResultStats: []shared.ExperimentResultRequestTypeEnum{
                shared.ExperimentResultRequestTypeEnumBaseStat,
                shared.ExperimentResultRequestTypeEnumBaseStat,
            },
            StartTime: types.MustTimeFromString("2022-03-30T04:36:10.591Z"),
            TreatmentNames: []string{
                "ad",
                "saepe",
                "suscipit",
                "deserunt",
            },
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("at"),
        Experiment: "quaerat",
        Project: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetExperimentResultsResponse != nil {
        // handle response
    }
}
```

## GetFeature

Returns the details about one feature. You must already know the feature name. To retrieve a list of features in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListFeatures.html">ListFeatures</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetFeature(ctx, operations.GetFeatureRequest{
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("esse"),
        Feature: "harum",
        Project: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFeatureResponse != nil {
        // handle response
    }
}
```

## GetLaunch

Returns the details about one launch. You must already know the launch name. To retrieve a list of launches in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListLaunches.html">ListLaunches</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetLaunch(ctx, operations.GetLaunchRequest{
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("numquam"),
        Launch: "enim",
        Project: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLaunchResponse != nil {
        // handle response
    }
}
```

## GetProject

Returns the details about one launch. You must already know the project name. To retrieve a list of projects in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListProjects.html">ListProjects</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetProject(ctx, operations.GetProjectRequest{
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("sed"),
        Project: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProjectResponse != nil {
        // handle response
    }
}
```

## GetSegment

Returns information about the specified segment. Specify the segment you want to view by specifying its ARN.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSegment(ctx, operations.GetSegmentRequest{
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("qui"),
        Segment: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSegmentResponse != nil {
        // handle response
    }
}
```

## ListExperiments

Returns configuration details about all the experiments in the specified project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListExperiments(ctx, operations.ListExperimentsRequest{
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        MaxResults: sdk.Int64(132068),
        NextToken: sdk.String("dolores"),
        Project: "distinctio",
        Status: operations.ListExperimentsStatusEnumCompleted.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExperimentsResponse != nil {
        // handle response
    }
}
```

## ListFeatures

Returns configuration details about all the features in the specified project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListFeatures(ctx, operations.ListFeaturesRequest{
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("fugit"),
        MaxResults: sdk.Int64(164959),
        NextToken: sdk.String("odio"),
        Project: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFeaturesResponse != nil {
        // handle response
    }
}
```

## ListLaunches

Returns configuration details about all the launches in the specified project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListLaunches(ctx, operations.ListLaunchesRequest{
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("nobis"),
        MaxResults: sdk.Int64(92596),
        NextToken: sdk.String("saepe"),
        Project: "ipsum",
        Status: operations.ListLaunchesStatusEnumCreated.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLaunchesResponse != nil {
        // handle response
    }
}
```

## ListProjects

Returns configuration details about all the projects in the current Region in your account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListProjects(ctx, operations.ListProjectsRequest{
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        MaxResults: sdk.Int64(292147),
        NextToken: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProjectsResponse != nil {
        // handle response
    }
}
```

## ListSegmentReferences

Use this operation to find which experiments or launches are using a specified segment.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListSegmentReferences(ctx, operations.ListSegmentReferencesRequest{
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("itaque"),
        MaxResults: sdk.Int64(9240),
        NextToken: sdk.String("est"),
        Segment: "repellendus",
        Type: operations.ListSegmentReferencesTypeEnumLaunch,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSegmentReferencesResponse != nil {
        // handle response
    }
}
```

## ListSegments

Returns a list of audience segments that you have created in your account in this Region.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListSegments(ctx, operations.ListSegmentsRequest{
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("laudantium"),
        MaxResults: sdk.Int64(485628),
        NextToken: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSegmentsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Displays the tags associated with an Evidently resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("delectus"),
        ResourceArn: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## PutProjectEvents

Sends performance events to Evidently. These events can be used to evaluate a launch or an experiment.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutProjectEvents(ctx, operations.PutProjectEventsRequest{
        RequestBody: operations.PutProjectEventsRequestBody{
            Events: []shared.Event{
                shared.Event{
                    Data: "vero",
                    Timestamp: types.MustTimeFromString("2021-07-10T23:11:25.857Z"),
                    Type: shared.EventTypeEnumAwsEvidentlyCustom,
                },
            },
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("ducimus"),
        Project: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutProjectEventsResponse != nil {
        // handle response
    }
}
```

## StartExperiment

Starts an existing experiment. To create an experiment, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateExperiment.html">CreateExperiment</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartExperiment(ctx, operations.StartExperimentRequest{
        RequestBody: operations.StartExperimentRequestBody{
            AnalysisCompleteTime: types.MustTimeFromString("2020-06-15T09:45:48.083Z"),
        },
        XAmzAlgorithm: sdk.String("sequi"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("exercitationem"),
        XAmzSignedHeaders: sdk.String("nulla"),
        Experiment: "fugit",
        Project: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartExperimentResponse != nil {
        // handle response
    }
}
```

## StartLaunch

Starts an existing launch. To create a launch, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateLaunch.html">CreateLaunch</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartLaunch(ctx, operations.StartLaunchRequest{
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("eligendi"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("officia"),
        Launch: "tempora",
        Project: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartLaunchResponse != nil {
        // handle response
    }
}
```

## StopExperiment

Stops an experiment that is currently running. If you stop an experiment, you can't resume it or restart it.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StopExperiment(ctx, operations.StopExperimentRequest{
        RequestBody: operations.StopExperimentRequestBody{
            DesiredState: operations.StopExperimentRequestBodyDesiredStateEnumCompleted.ToPointer(),
            Reason: sdk.String("aspernatur"),
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("ratione"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("dicta"),
        Experiment: "dolor",
        Project: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopExperimentResponse != nil {
        // handle response
    }
}
```

## StopLaunch

Stops a launch that is currently running. After you stop a launch, you will not be able to resume it or restart it. Also, it will not be evaluated as a rule for traffic allocation, and the traffic that was allocated to the launch will instead be available to the feature's experiment, if there is one. Otherwise, all traffic will be served the default variation after the launch is stopped.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StopLaunch(ctx, operations.StopLaunchRequest{
        RequestBody: operations.StopLaunchRequestBody{
            DesiredState: operations.StopLaunchRequestBodyDesiredStateEnumCompleted.ToPointer(),
            Reason: sdk.String("ex"),
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("saepe"),
        Launch: "ea",
        Project: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopLaunchResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>Assigns one or more tags (key-value pairs) to the specified CloudWatch Evidently resource. Projects, features, launches, and experiments can be tagged.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "veniam": "aliquid",
                "inventore": "magnam",
            },
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("eaque"),
        ResourceArn: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## TestSegmentPattern

Use this operation to test a rules pattern that you plan to use to create an audience segment. For more information about segments, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateSegment.html">CreateSegment</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TestSegmentPattern(ctx, operations.TestSegmentPatternRequest{
        RequestBody: operations.TestSegmentPatternRequestBody{
            Pattern: "libero",
            Payload: "aut",
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("inventore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestSegmentPatternResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes one or more tags from the specified resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("eum"),
        ResourceArn: "autem",
        TagKeys: []string{
            "quas",
            "assumenda",
            "nulla",
            "voluptas",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateExperiment

<p>Updates an Evidently experiment. </p> <p>Don't use this operation to update an experiment's tag. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateExperiment(ctx, operations.UpdateExperimentRequest{
        RequestBody: operations.UpdateExperimentRequestBody{
            Description: sdk.String("libero"),
            MetricGoals: []shared.MetricGoalConfig{
                shared.MetricGoalConfig{
                    DesiredChange: shared.ChangeDirectionEnumEnumIncrease.ToPointer(),
                    MetricDefinition: shared.MetricDefinitionConfig{
                        EntityIDKey: "numquam",
                        EventPattern: sdk.String("explicabo"),
                        Name: "Jose Kreiger",
                        UnitLabel: sdk.String("eius"),
                        ValueKey: "esse",
                    },
                },
            },
            OnlineAbConfig: &operations.UpdateExperimentRequestBodyOnlineAbConfig{
                ControlTreatmentName: sdk.String("esse"),
                TreatmentWeights: map[string]int64{
                    "fuga": 442015,
                    "quidem": 852635,
                    "ut": 433439,
                },
            },
            RandomizationSalt: sdk.String("suscipit"),
            RemoveSegment: sdk.Bool(false),
            SamplingRate: sdk.Int64(826871),
            Segment: sdk.String("eos"),
            Treatments: []shared.TreatmentConfig{
                shared.TreatmentConfig{
                    Description: sdk.String("quisquam"),
                    Feature: "veritatis",
                    Name: "Amelia Predovic",
                    Variation: "illum",
                },
                shared.TreatmentConfig{
                    Description: sdk.String("quo"),
                    Feature: "fuga",
                    Name: "Ms. Ruby Hintz II",
                    Variation: "debitis",
                },
                shared.TreatmentConfig{
                    Description: sdk.String("ipsam"),
                    Feature: "aspernatur",
                    Name: "Angelica Koelpin MD",
                    Variation: "quod",
                },
            },
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("odio"),
        Experiment: "occaecati",
        Project: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateExperimentResponse != nil {
        // handle response
    }
}
```

## UpdateFeature

<p>Updates an existing feature.</p> <p>You can't use this operation to update the tags of an existing feature. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateFeature(ctx, operations.UpdateFeatureRequest{
        RequestBody: operations.UpdateFeatureRequestBody{
            AddOrUpdateVariations: []shared.VariationConfig{
                shared.VariationConfig{
                    Name: "Miss Rosie Krajcik",
                    Value: shared.VariableValue{
                        BoolValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(5564.29),
                        LongValue: sdk.Int64(510017),
                        StringValue: sdk.String("consequuntur"),
                    },
                },
                shared.VariationConfig{
                    Name: "Wayne Parker",
                    Value: shared.VariableValue{
                        BoolValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(5392.24),
                        LongValue: sdk.Int64(128860),
                        StringValue: sdk.String("minima"),
                    },
                },
                shared.VariationConfig{
                    Name: "Denise Will",
                    Value: shared.VariableValue{
                        BoolValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(1294.12),
                        LongValue: sdk.Int64(903984),
                        StringValue: sdk.String("occaecati"),
                    },
                },
                shared.VariationConfig{
                    Name: "Carl Koch",
                    Value: shared.VariableValue{
                        BoolValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(829.71),
                        LongValue: sdk.Int64(458604),
                        StringValue: sdk.String("quod"),
                    },
                },
            },
            DefaultVariation: sdk.String("nam"),
            Description: sdk.String("vero"),
            EntityOverrides: map[string]string{
                "quasi": "saepe",
                "vel": "harum",
            },
            EvaluationStrategy: operations.UpdateFeatureRequestBodyEvaluationStrategyEnumAllRules.ToPointer(),
            RemoveVariations: []string{
                "occaecati",
                "minima",
                "distinctio",
            },
        },
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        Feature: "consequatur",
        Project: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFeatureResponse != nil {
        // handle response
    }
}
```

## UpdateLaunch

<p>Updates a launch of a given feature. </p> <p>Don't use this operation to update the tags of an existing launch. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateLaunch(ctx, operations.UpdateLaunchRequest{
        RequestBody: operations.UpdateLaunchRequestBody{
            Description: sdk.String("quaerat"),
            Groups: []shared.LaunchGroupConfig{
                shared.LaunchGroupConfig{
                    Description: sdk.String("consectetur"),
                    Feature: "esse",
                    Name: "Eduardo Wilkinson",
                    Variation: "esse",
                },
                shared.LaunchGroupConfig{
                    Description: sdk.String("quasi"),
                    Feature: "a",
                    Name: "Kirk Stracke",
                    Variation: "eveniet",
                },
                shared.LaunchGroupConfig{
                    Description: sdk.String("asperiores"),
                    Feature: "facere",
                    Name: "Marilyn Botsford",
                    Variation: "aliquid",
                },
                shared.LaunchGroupConfig{
                    Description: sdk.String("tenetur"),
                    Feature: "quae",
                    Name: "Chester King",
                    Variation: "illum",
                },
            },
            MetricMonitors: []shared.MetricMonitorConfig{
                shared.MetricMonitorConfig{
                    MetricDefinition: shared.MetricDefinitionConfig{
                        EntityIDKey: "accusantium",
                        EventPattern: sdk.String("aliquam"),
                        Name: "Samuel Hermiston",
                        UnitLabel: sdk.String("nisi"),
                        ValueKey: "aut",
                    },
                },
                shared.MetricMonitorConfig{
                    MetricDefinition: shared.MetricDefinitionConfig{
                        EntityIDKey: "voluptatum",
                        EventPattern: sdk.String("qui"),
                        Name: "Marc Leuschke",
                        UnitLabel: sdk.String("architecto"),
                        ValueKey: "omnis",
                    },
                },
                shared.MetricMonitorConfig{
                    MetricDefinition: shared.MetricDefinitionConfig{
                        EntityIDKey: "tenetur",
                        EventPattern: sdk.String("quasi"),
                        Name: "Mrs. Carl Kling I",
                        UnitLabel: sdk.String("adipisci"),
                        ValueKey: "iste",
                    },
                },
            },
            RandomizationSalt: sdk.String("temporibus"),
            ScheduledSplitsConfig: &operations.UpdateLaunchRequestBodyScheduledSplitsConfig{
                Steps: []shared.ScheduledSplitConfig{
                    shared.ScheduledSplitConfig{
                        GroupWeights: map[string]int64{
                            "aut": 513075,
                            "eum": 649832,
                            "ab": 544591,
                        },
                        SegmentOverrides: []shared.SegmentOverride{
                            shared.SegmentOverride{
                                EvaluationOrder: 32465,
                                Segment: "dolor",
                                Weights: map[string]int64{
                                    "numquam": 771089,
                                    "explicabo": 376226,
                                    "aut": 491025,
                                },
                            },
                            shared.SegmentOverride{
                                EvaluationOrder: 115484,
                                Segment: "maiores",
                                Weights: map[string]int64{
                                    "velit": 974257,
                                    "voluptas": 990345,
                                    "aperiam": 409054,
                                },
                            },
                        },
                        StartTime: types.MustTimeFromString("2022-11-02T12:31:08.461Z"),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("nemo"),
        Launch: "quae",
        Project: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLaunchResponse != nil {
        // handle response
    }
}
```

## UpdateProject

<p>Updates the description of an existing project.</p> <p>To create a new project, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateProject.html">CreateProject</a>.</p> <p>Don't use this operation to update the data storage options of a project. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateProjectDataDelivery.html">UpdateProjectDataDelivery</a>. </p> <p>Don't use this operation to update the tags of a project. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateProject(ctx, operations.UpdateProjectRequest{
        RequestBody: operations.UpdateProjectRequestBody{
            AppConfigResource: &operations.UpdateProjectRequestBodyAppConfigResource{
                ApplicationID: sdk.String("porro"),
                EnvironmentID: sdk.String("quod"),
            },
            Description: sdk.String("labore"),
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("culpa"),
        Project: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateProjectResponse != nil {
        // handle response
    }
}
```

## UpdateProjectDataDelivery

<p>Updates the data storage options for this project. If you store evaluation events, you an keep them and analyze them on your own. If you choose not to store evaluation events, Evidently deletes them after using them to produce metrics and other experiment results that you can view.</p> <p>You can't specify both <code>cloudWatchLogs</code> and <code>s3Destination</code> in the same operation.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateProjectDataDelivery(ctx, operations.UpdateProjectDataDeliveryRequest{
        RequestBody: operations.UpdateProjectDataDeliveryRequestBody{
            CloudWatchLogs: &operations.UpdateProjectDataDeliveryRequestBodyCloudWatchLogs{
                LogGroup: sdk.String("recusandae"),
            },
            S3Destination: &operations.UpdateProjectDataDeliveryRequestBodyS3Destination{
                Bucket: sdk.String("totam"),
                Prefix: sdk.String("fugiat"),
            },
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("quos"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("facilis"),
        Project: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateProjectDataDeliveryResponse != nil {
        // handle response
    }
}
```
