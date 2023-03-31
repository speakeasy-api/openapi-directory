# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/fis/2020-12-01/python
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


req = operations.CreateExperimentTemplateRequest(
    request_body=operations.CreateExperimentTemplateRequestBody(
        actions={
            "provident": shared.CreateExperimentTemplateActionInput(
                action_id="distinctio",
                description="quibusdam",
                parameters={
                    "nulla": "corrupti",
                    "illum": "vel",
                    "error": "deserunt",
                },
                start_after=[
                    "iure",
                    "magnam",
                ],
                targets={
                    "ipsa": "delectus",
                    "tempora": "suscipit",
                    "molestiae": "minus",
                    "placeat": "voluptatum",
                },
            ),
            "iusto": shared.CreateExperimentTemplateActionInput(
                action_id="excepturi",
                description="nisi",
                parameters={
                    "temporibus": "ab",
                    "quis": "veritatis",
                    "deserunt": "perferendis",
                    "ipsam": "repellendus",
                },
                start_after=[
                    "quo",
                    "odit",
                    "at",
                    "at",
                ],
                targets={
                    "molestiae": "quod",
                    "quod": "esse",
                    "totam": "porro",
                    "dolorum": "dicta",
                },
            ),
            "nam": shared.CreateExperimentTemplateActionInput(
                action_id="officia",
                description="occaecati",
                parameters={
                    "deleniti": "hic",
                },
                start_after=[
                    "totam",
                    "beatae",
                    "commodi",
                    "molestiae",
                ],
                targets={
                    "qui": "impedit",
                    "cum": "esse",
                },
            ),
        },
        client_token="ipsum",
        description="excepturi",
        log_configuration=operations.CreateExperimentTemplateRequestBodyLogConfiguration(
            cloud_watch_logs_configuration=shared.ExperimentTemplateCloudWatchLogsLogConfigurationInput(
                log_group_arn="aspernatur",
            ),
            log_schema_version=18789,
            s3_configuration=shared.ExperimentTemplateS3LogConfigurationInput(
                bucket_name="ad",
                prefix="natus",
            ),
        ),
        role_arn="sed",
        stop_conditions=[
            shared.CreateExperimentTemplateStopConditionInput(
                source="dolor",
                value="natus",
            ),
            shared.CreateExperimentTemplateStopConditionInput(
                source="laboriosam",
                value="hic",
            ),
            shared.CreateExperimentTemplateStopConditionInput(
                source="saepe",
                value="fuga",
            ),
        ],
        tags={
            "corporis": "iste",
            "iure": "saepe",
        },
        targets={
            "architecto": shared.CreateExperimentTemplateTargetInput(
                filters=[
                    shared.ExperimentTemplateTargetInputFilter(
                        path="reiciendis",
                        values=[
                            "mollitia",
                            "laborum",
                            "dolores",
                        ],
                    ),
                ],
                parameters={
                    "corporis": "explicabo",
                },
                resource_arns=[
                    "enim",
                    "omnis",
                    "nemo",
                    "minima",
                ],
                resource_tags={
                    "accusantium": "iure",
                    "culpa": "doloribus",
                    "sapiente": "architecto",
                },
                resource_type="mollitia",
                selection_mode="dolorem",
            ),
            "culpa": shared.CreateExperimentTemplateTargetInput(
                filters=[
                    shared.ExperimentTemplateTargetInputFilter(
                        path="repellat",
                        values=[
                            "occaecati",
                            "numquam",
                            "commodi",
                        ],
                    ),
                ],
                parameters={
                    "molestiae": "velit",
                    "error": "quia",
                },
                resource_arns=[
                    "vitae",
                    "laborum",
                ],
                resource_tags={
                    "enim": "odit",
                    "quo": "sequi",
                    "tenetur": "ipsam",
                },
                resource_type="id",
                selection_mode="possimus",
            ),
            "aut": shared.CreateExperimentTemplateTargetInput(
                filters=[
                    shared.ExperimentTemplateTargetInputFilter(
                        path="error",
                        values=[
                            "laborum",
                            "quasi",
                            "reiciendis",
                            "voluptatibus",
                        ],
                    ),
                ],
                parameters={
                    "nihil": "praesentium",
                    "voluptatibus": "ipsa",
                    "omnis": "voluptate",
                    "cum": "perferendis",
                },
                resource_arns=[
                    "reprehenderit",
                ],
                resource_tags={
                    "maiores": "dicta",
                    "corporis": "dolore",
                },
                resource_type="iusto",
                selection_mode="dicta",
            ),
        },
    ),
    x_amz_algorithm="harum",
    x_amz_content_sha256="enim",
    x_amz_credential="accusamus",
    x_amz_date="commodi",
    x_amz_security_token="repudiandae",
    x_amz_signature="quae",
    x_amz_signed_headers="ipsum",
)
    
res = s.create_experiment_template(req)

if res.create_experiment_template_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_experiment_template` - <p>Creates an experiment template. </p> <p>An experiment template includes the following components:</p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your Amazon Web Services environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html">Experiment templates</a> in the <i>Fault Injection Simulator User Guide</i>.</p>
* `delete_experiment_template` - Deletes the specified experiment template.
* `get_action` - Gets information about the specified FIS action.
* `get_experiment` - Gets information about the specified experiment.
* `get_experiment_template` - Gets information about the specified experiment template.
* `get_target_resource_type` - Gets information about the specified resource type.
* `list_actions` - Lists the available FIS actions.
* `list_experiment_templates` - Lists your experiment templates.
* `list_experiments` - Lists your experiments.
* `list_tags_for_resource` - Lists the tags for the specified resource.
* `list_target_resource_types` - Lists the target resource types.
* `start_experiment` - Starts running an experiment from the specified experiment template.
* `stop_experiment` - Stops the specified experiment.
* `tag_resource` - Applies the specified tags to the specified resource.
* `untag_resource` - Removes the specified tags from the specified resource.
* `update_experiment_template` - Updates the specified experiment template.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
