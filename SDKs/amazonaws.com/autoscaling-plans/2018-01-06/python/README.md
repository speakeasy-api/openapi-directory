# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/autoscaling-plans/2018-01-06/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateScalingPlanRequest(
    create_scaling_plan_request=shared.CreateScalingPlanRequest(
        application_source=shared.ApplicationSource(
            cloud_formation_stack_arn="corrupti",
            tag_filters=[
                shared.TagFilter(
                    key="distinctio",
                    values=[
                        "unde",
                        "nulla",
                        "corrupti",
                        "illum",
                    ],
                ),
                shared.TagFilter(
                    key="vel",
                    values=[
                        "deserunt",
                        "suscipit",
                        "iure",
                    ],
                ),
                shared.TagFilter(
                    key="magnam",
                    values=[
                        "ipsa",
                        "delectus",
                        "tempora",
                        "suscipit",
                    ],
                ),
            ],
        ),
        scaling_instructions=[
            shared.ScalingInstruction(
                customized_load_metric_specification=shared.CustomizedLoadMetricSpecification(
                    dimensions=[
                        shared.MetricDimension(
                            name="placeat",
                            value="voluptatum",
                        ),
                        shared.MetricDimension(
                            name="iusto",
                            value="excepturi",
                        ),
                        shared.MetricDimension(
                            name="nisi",
                            value="recusandae",
                        ),
                        shared.MetricDimension(
                            name="temporibus",
                            value="ab",
                        ),
                    ],
                    metric_name="quis",
                    namespace="veritatis",
                    statistic="SampleCount",
                    unit="perferendis",
                ),
                disable_dynamic_scaling=False,
                max_capacity=368241,
                min_capacity=832620,
                predefined_load_metric_specification=shared.PredefinedLoadMetricSpecification(
                    predefined_load_metric_type="ALBTargetGroupRequestCount",
                    resource_label="quo",
                ),
                predictive_scaling_max_capacity_behavior="SetForecastCapacityToMaxCapacity",
                predictive_scaling_max_capacity_buffer=870013,
                predictive_scaling_mode="ForecastOnly",
                resource_id="maiores",
                scalable_dimension="rds:cluster:ReadReplicaCount",
                scaling_policy_update_behavior="ReplaceExternalPolicies",
                scheduled_action_buffer_time=800911,
                service_namespace="ec2",
                target_tracking_configurations=[
                    shared.TargetTrackingConfiguration(
                        customized_scaling_metric_specification=shared.CustomizedScalingMetricSpecification(
                            dimensions=[
                                shared.MetricDimension(
                                    name="dolorum",
                                    value="dicta",
                                ),
                                shared.MetricDimension(
                                    name="nam",
                                    value="officia",
                                ),
                                shared.MetricDimension(
                                    name="occaecati",
                                    value="fugit",
                                ),
                                shared.MetricDimension(
                                    name="deleniti",
                                    value="hic",
                                ),
                            ],
                            metric_name="optio",
                            namespace="totam",
                            statistic="Average",
                            unit="commodi",
                        ),
                        disable_scale_in=False,
                        estimated_instance_warmup=473600,
                        predefined_scaling_metric_specification=shared.PredefinedScalingMetricSpecification(
                            predefined_scaling_metric_type="DynamoDBReadCapacityUtilization",
                            resource_label="qui",
                        ),
                        scale_in_cooldown=774234,
                        scale_out_cooldown=736918,
                        target_value=4561.5,
                    ),
                    shared.TargetTrackingConfiguration(
                        customized_scaling_metric_specification=shared.CustomizedScalingMetricSpecification(
                            dimensions=[
                                shared.MetricDimension(
                                    name="excepturi",
                                    value="aspernatur",
                                ),
                            ],
                            metric_name="perferendis",
                            namespace="ad",
                            statistic="SampleCount",
                            unit="sed",
                        ),
                        disable_scale_in=False,
                        estimated_instance_warmup=612096,
                        predefined_scaling_metric_specification=shared.PredefinedScalingMetricSpecification(
                            predefined_scaling_metric_type="ASGAverageNetworkOut",
                            resource_label="natus",
                        ),
                        scale_in_cooldown=386489,
                        scale_out_cooldown=943749,
                        target_value=9025.99,
                    ),
                    shared.TargetTrackingConfiguration(
                        customized_scaling_metric_specification=shared.CustomizedScalingMetricSpecification(
                            dimensions=[
                                shared.MetricDimension(
                                    name="in",
                                    value="corporis",
                                ),
                                shared.MetricDimension(
                                    name="iste",
                                    value="iure",
                                ),
                                shared.MetricDimension(
                                    name="saepe",
                                    value="quidem",
                                ),
                            ],
                            metric_name="architecto",
                            namespace="ipsa",
                            statistic="Sum",
                            unit="est",
                        ),
                        disable_scale_in=False,
                        estimated_instance_warmup=653140,
                        predefined_scaling_metric_specification=shared.PredefinedScalingMetricSpecification(
                            predefined_scaling_metric_type="RDSReaderAverageCPUUtilization",
                            resource_label="dolores",
                        ),
                        scale_in_cooldown=210382,
                        scale_out_cooldown=358152,
                        target_value=1289.26,
                    ),
                ],
            ),
            shared.ScalingInstruction(
                customized_load_metric_specification=shared.CustomizedLoadMetricSpecification(
                    dimensions=[
                        shared.MetricDimension(
                            name="enim",
                            value="omnis",
                        ),
                        shared.MetricDimension(
                            name="nemo",
                            value="minima",
                        ),
                        shared.MetricDimension(
                            name="excepturi",
                            value="accusantium",
                        ),
                        shared.MetricDimension(
                            name="iure",
                            value="culpa",
                        ),
                    ],
                    metric_name="doloribus",
                    namespace="sapiente",
                    statistic="Average",
                    unit="mollitia",
                ),
                disable_dynamic_scaling=False,
                max_capacity=208876,
                min_capacity=635059,
                predefined_load_metric_specification=shared.PredefinedLoadMetricSpecification(
                    predefined_load_metric_type="ASGTotalCPUUtilization",
                    resource_label="repellat",
                ),
                predictive_scaling_max_capacity_behavior="SetMaxCapacityToForecastCapacity",
                predictive_scaling_max_capacity_buffer=581850,
                predictive_scaling_mode="ForecastAndScale",
                resource_id="commodi",
                scalable_dimension="rds:cluster:ReadReplicaCount",
                scaling_policy_update_behavior="KeepExternalPolicies",
                scheduled_action_buffer_time=244425,
                service_namespace="rds",
                target_tracking_configurations=[
                    shared.TargetTrackingConfiguration(
                        customized_scaling_metric_specification=shared.CustomizedScalingMetricSpecification(
                            dimensions=[
                                shared.MetricDimension(
                                    name="vitae",
                                    value="laborum",
                                ),
                                shared.MetricDimension(
                                    name="animi",
                                    value="enim",
                                ),
                            ],
                            metric_name="odit",
                            namespace="quo",
                            statistic="Average",
                            unit="tenetur",
                        ),
                        disable_scale_in=False,
                        estimated_instance_warmup=368725,
                        predefined_scaling_metric_specification=shared.PredefinedScalingMetricSpecification(
                            predefined_scaling_metric_type="RDSReaderAverageCPUUtilization",
                            resource_label="possimus",
                        ),
                        scale_in_cooldown=13571,
                        scale_out_cooldown=97101,
                        target_value=6228.46,
                    ),
                ],
            ),
        ],
        scaling_plan_name="temporibus",
    ),
    x_amz_algorithm="laborum",
    x_amz_content_sha256="quasi",
    x_amz_credential="reiciendis",
    x_amz_date="voluptatibus",
    x_amz_security_token="vero",
    x_amz_signature="nihil",
    x_amz_signed_headers="praesentium",
    x_amz_target="AnyScaleScalingPlannerFrontendService.CreateScalingPlan",
)
    
res = s.create_scaling_plan(req)

if res.create_scaling_plan_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_scaling_plan` - Creates a scaling plan. 
* `delete_scaling_plan` - <p>Deletes the specified scaling plan.</p> <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for all of the scalable resources that are covered by the plan.</p> <p>If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</p>
* `describe_scaling_plan_resources` - Describes the scalable resources in the specified scaling plan.
* `describe_scaling_plans` - Describes one or more of your scaling plans.
* `get_scaling_plan_resource_forecast_data` - <p>Retrieves the forecast data for a scalable resource.</p> <p>Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days. </p>
* `update_scaling_plan` - <p>Updates the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
