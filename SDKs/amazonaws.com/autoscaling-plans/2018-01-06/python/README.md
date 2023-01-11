# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CreateScalingPlanRequest(
    headers=operations.CreateScalingPlanHeaders(
        x_amz_algorithm="doloribus",
        x_amz_content_sha256="necessitatibus",
        x_amz_credential="aliquam",
        x_amz_date="ut",
        x_amz_security_token="sint",
        x_amz_signature="eos",
        x_amz_signed_headers="officia",
        x_amz_target="AnyScaleScalingPlannerFrontendService.CreateScalingPlan",
    ),
    request=shared.CreateScalingPlanRequest(
        application_source=shared.ApplicationSource(
            cloud_formation_stack_arn="sit",
            tag_filters=[
                shared.TagFilter(
                    key="earum",
                    values=[
                        "assumenda",
                    ],
                ),
            ],
        ),
        scaling_instructions=[
            shared.ScalingInstruction(
                customized_load_metric_specification=shared.CustomizedLoadMetricSpecification(
                    dimensions=[
                        shared.MetricDimension(
                            name="in",
                            value="repellendus",
                        ),
                    ],
                    metric_name="repudiandae",
                    namespace="sed",
                    statistic="Average",
                    unit="cum",
                ),
                disable_dynamic_scaling=True,
                max_capacity=2532597011683728087,
                min_capacity=8028815005489571747,
                predefined_load_metric_specification=shared.PredefinedLoadMetricSpecification(
                    predefined_load_metric_type="ASGTotalNetworkIn",
                    resource_label="nisi",
                ),
                predictive_scaling_max_capacity_behavior="SetForecastCapacityToMaxCapacity",
                predictive_scaling_max_capacity_buffer=1940187917623811174,
                predictive_scaling_mode="ForecastOnly",
                resource_id="est",
                scalable_dimension="dynamodb:index:ReadCapacityUnits",
                scaling_policy_update_behavior="KeepExternalPolicies",
                scheduled_action_buffer_time=1713996192319931980,
                service_namespace="autoscaling",
                target_tracking_configurations=[
                    shared.TargetTrackingConfiguration(
                        customized_scaling_metric_specification=shared.CustomizedScalingMetricSpecification(
                            dimensions=[
                                shared.MetricDimension(
                                    name="voluptate",
                                    value="ut",
                                ),
                                shared.MetricDimension(
                                    name="inventore",
                                    value="et",
                                ),
                                shared.MetricDimension(
                                    name="enim",
                                    value="minima",
                                ),
                            ],
                            metric_name="hic",
                            namespace="cumque",
                            statistic="Maximum",
                            unit="quasi",
                        ),
                        disable_scale_in=False,
                        estimated_instance_warmup=2432923324136795944,
                        predefined_scaling_metric_specification=shared.PredefinedScalingMetricSpecification(
                            predefined_scaling_metric_type="EC2SpotFleetRequestAverageCPUUtilization",
                            resource_label="nisi",
                        ),
                        scale_in_cooldown=4972956926970340934,
                        scale_out_cooldown=3723469953046556180,
                        target_value=14.100000,
                    ),
                    shared.TargetTrackingConfiguration(
                        customized_scaling_metric_specification=shared.CustomizedScalingMetricSpecification(
                            dimensions=[
                                shared.MetricDimension(
                                    name="quo",
                                    value="non",
                                ),
                                shared.MetricDimension(
                                    name="a",
                                    value="mollitia",
                                ),
                            ],
                            metric_name="dolorum",
                            namespace="at",
                            statistic="Maximum",
                            unit="aut",
                        ),
                        disable_scale_in=True,
                        estimated_instance_warmup=4531580916635252633,
                        predefined_scaling_metric_specification=shared.PredefinedScalingMetricSpecification(
                            predefined_scaling_metric_type="ASGAverageNetworkIn",
                            resource_label="labore",
                        ),
                        scale_in_cooldown=1535639556352868980,
                        scale_out_cooldown=8955779660177681159,
                        target_value=74.199997,
                    ),
                ],
            ),
            shared.ScalingInstruction(
                customized_load_metric_specification=shared.CustomizedLoadMetricSpecification(
                    dimensions=[
                        shared.MetricDimension(
                            name="ratione",
                            value="voluptatem",
                        ),
                    ],
                    metric_name="sit",
                    namespace="eum",
                    statistic="Average",
                    unit="expedita",
                ),
                disable_dynamic_scaling=False,
                max_capacity=8872633733247291586,
                min_capacity=2223670193668799695,
                predefined_load_metric_specification=shared.PredefinedLoadMetricSpecification(
                    predefined_load_metric_type="ASGTotalCPUUtilization",
                    resource_label="nulla",
                ),
                predictive_scaling_max_capacity_behavior="SetForecastCapacityToMaxCapacity",
                predictive_scaling_max_capacity_buffer=8229745102967699455,
                predictive_scaling_mode="ForecastOnly",
                resource_id="dolor",
                scalable_dimension="rds:cluster:ReadReplicaCount",
                scaling_policy_update_behavior="ReplaceExternalPolicies",
                scheduled_action_buffer_time=4935670796153673020,
                service_namespace="autoscaling",
                target_tracking_configurations=[
                    shared.TargetTrackingConfiguration(
                        customized_scaling_metric_specification=shared.CustomizedScalingMetricSpecification(
                            dimensions=[
                                shared.MetricDimension(
                                    name="dolores",
                                    value="quaerat",
                                ),
                            ],
                            metric_name="iste",
                            namespace="harum",
                            statistic="Maximum",
                            unit="natus",
                        ),
                        disable_scale_in=True,
                        estimated_instance_warmup=4101734553074821155,
                        predefined_scaling_metric_specification=shared.PredefinedScalingMetricSpecification(
                            predefined_scaling_metric_type="EC2SpotFleetRequestAverageNetworkOut",
                            resource_label="expedita",
                        ),
                        scale_in_cooldown=2935226858963760426,
                        scale_out_cooldown=3585591606309161877,
                        target_value=27.100000,
                    ),
                    shared.TargetTrackingConfiguration(
                        customized_scaling_metric_specification=shared.CustomizedScalingMetricSpecification(
                            dimensions=[
                                shared.MetricDimension(
                                    name="commodi",
                                    value="tenetur",
                                ),
                                shared.MetricDimension(
                                    name="et",
                                    value="sed",
                                ),
                            ],
                            metric_name="saepe",
                            namespace="sit",
                            statistic="Average",
                            unit="voluptate",
                        ),
                        disable_scale_in=True,
                        estimated_instance_warmup=4433816511744504618,
                        predefined_scaling_metric_specification=shared.PredefinedScalingMetricSpecification(
                            predefined_scaling_metric_type="ALBRequestCountPerTarget",
                            resource_label="facere",
                        ),
                        scale_in_cooldown=1958515401632262794,
                        scale_out_cooldown=1608782168285273117,
                        target_value=16.100000,
                    ),
                ],
            ),
            shared.ScalingInstruction(
                customized_load_metric_specification=shared.CustomizedLoadMetricSpecification(
                    dimensions=[
                        shared.MetricDimension(
                            name="nostrum",
                            value="et",
                        ),
                        shared.MetricDimension(
                            name="eum",
                            value="aut",
                        ),
                    ],
                    metric_name="beatae",
                    namespace="incidunt",
                    statistic="Average",
                    unit="a",
                ),
                disable_dynamic_scaling=False,
                max_capacity=2840221116841027537,
                min_capacity=1450424072144671877,
                predefined_load_metric_specification=shared.PredefinedLoadMetricSpecification(
                    predefined_load_metric_type="ASGTotalNetworkIn",
                    resource_label="sunt",
                ),
                predictive_scaling_max_capacity_behavior="SetForecastCapacityToMaxCapacity",
                predictive_scaling_max_capacity_buffer=6039161625972230315,
                predictive_scaling_mode="ForecastAndScale",
                resource_id="non",
                scalable_dimension="ec2:spot-fleet-request:TargetCapacity",
                scaling_policy_update_behavior="KeepExternalPolicies",
                scheduled_action_buffer_time=2363619035225420429,
                service_namespace="autoscaling",
                target_tracking_configurations=[
                    shared.TargetTrackingConfiguration(
                        customized_scaling_metric_specification=shared.CustomizedScalingMetricSpecification(
                            dimensions=[
                                shared.MetricDimension(
                                    name="temporibus",
                                    value="voluptas",
                                ),
                            ],
                            metric_name="tempora",
                            namespace="voluptatem",
                            statistic="Minimum",
                            unit="eum",
                        ),
                        disable_scale_in=False,
                        estimated_instance_warmup=6050441218909099379,
                        predefined_scaling_metric_specification=shared.PredefinedScalingMetricSpecification(
                            predefined_scaling_metric_type="DynamoDBWriteCapacityUtilization",
                            resource_label="ab",
                        ),
                        scale_in_cooldown=279650548062880195,
                        scale_out_cooldown=1031912478290035631,
                        target_value=93.199997,
                    ),
                    shared.TargetTrackingConfiguration(
                        customized_scaling_metric_specification=shared.CustomizedScalingMetricSpecification(
                            dimensions=[
                                shared.MetricDimension(
                                    name="sit",
                                    value="quibusdam",
                                ),
                                shared.MetricDimension(
                                    name="dolore",
                                    value="ut",
                                ),
                                shared.MetricDimension(
                                    name="deserunt",
                                    value="est",
                                ),
                            ],
                            metric_name="cupiditate",
                            namespace="culpa",
                            statistic="Minimum",
                            unit="veniam",
                        ),
                        disable_scale_in=False,
                        estimated_instance_warmup=692921154198776483,
                        predefined_scaling_metric_specification=shared.PredefinedScalingMetricSpecification(
                            predefined_scaling_metric_type="ECSServiceAverageMemoryUtilization",
                            resource_label="minus",
                        ),
                        scale_in_cooldown=1868821202122697832,
                        scale_out_cooldown=5484631603520417470,
                        target_value=95.099998,
                    ),
                    shared.TargetTrackingConfiguration(
                        customized_scaling_metric_specification=shared.CustomizedScalingMetricSpecification(
                            dimensions=[
                                shared.MetricDimension(
                                    name="dolor",
                                    value="nihil",
                                ),
                            ],
                            metric_name="error",
                            namespace="sunt",
                            statistic="SampleCount",
                            unit="sed",
                        ),
                        disable_scale_in=True,
                        estimated_instance_warmup=834755006764273154,
                        predefined_scaling_metric_specification=shared.PredefinedScalingMetricSpecification(
                            predefined_scaling_metric_type="ASGAverageCPUUtilization",
                            resource_label="eaque",
                        ),
                        scale_in_cooldown=404459533781805632,
                        scale_out_cooldown=8133641788294793621,
                        target_value=99.099998,
                    ),
                ],
            ),
        ],
        scaling_plan_name="voluptate",
    ),
)
    
res = s.create_scaling_plan(req)

if res.create_scaling_plan_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_scaling_plan` - Creates a scaling plan. 
* `delete_scaling_plan` - <p>Deletes the specified scaling plan.</p> <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for all of the scalable resources that are covered by the plan.</p> <p>If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</p>
* `describe_scaling_plan_resources` - Describes the scalable resources in the specified scaling plan.
* `describe_scaling_plans` - Describes one or more of your scaling plans.
* `get_scaling_plan_resource_forecast_data` - <p>Retrieves the forecast data for a scalable resource.</p> <p>Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days. </p>
* `update_scaling_plan` - <p>Updates the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
