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
    
req = operations.CreateExperimentTemplateRequest(
    headers=operations.CreateExperimentTemplateHeaders(
        x_amz_algorithm="rem",
        x_amz_content_sha256="perspiciatis",
        x_amz_credential="molestias",
        x_amz_date="repellendus",
        x_amz_security_token="doloremque",
        x_amz_signature="doloremque",
        x_amz_signed_headers="consectetur",
    ),
    request=operations.CreateExperimentTemplateRequestBody(
        actions={
            "et": shared.CreateExperimentTemplateActionInput(
                action_id="ut",
                description="eaque",
                parameters={
                    "dolorem": "nulla",
                    "nam": "velit",
                },
                start_after=[
                    "culpa",
                ],
                targets={
                    "qui": "impedit",
                    "culpa": "voluptatibus",
                    "consequuntur": "sapiente",
                },
            ),
            "sint": shared.CreateExperimentTemplateActionInput(
                action_id="et",
                description="fuga",
                parameters={
                    "quidem": "reiciendis",
                },
                start_after=[
                    "quas",
                    "pariatur",
                    "omnis",
                ],
                targets={
                    "soluta": "qui",
                    "aut": "et",
                },
            ),
        },
        client_token="omnis",
        description="et",
        role_arn="architecto",
        stop_conditions=[
            shared.CreateExperimentTemplateStopConditionInput(
                source="dolorem",
                value="recusandae",
            ),
        ],
        tags={
            "ut": "ab",
        },
        targets={
            "ut": shared.CreateExperimentTemplateTargetInput(
                filters=[
                    shared.ExperimentTemplateTargetInputFilter(
                        path="molestiae",
                        values=[
                            "aut",
                            "sequi",
                            "eum",
                        ],
                    ),
                    shared.ExperimentTemplateTargetInputFilter(
                        path="iusto",
                        values=[
                            "sunt",
                            "ea",
                            "et",
                        ],
                    ),
                    shared.ExperimentTemplateTargetInputFilter(
                        path="officiis",
                        values=[
                            "delectus",
                        ],
                    ),
                ],
                resource_arns=[
                    "esse",
                    "ut",
                ],
                resource_tags={
                    "deserunt": "ut",
                    "in": "maiores",
                },
                resource_type="iure",
                selection_mode="qui",
            ),
        },
    ),
)
    
res = s.create_experiment_template(req)

if res.create_experiment_template_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_experiment_template` - <p>Creates an experiment template. </p> <p>To create a template, specify the following information: </p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your AWS environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see the <a href="https://docs.aws.amazon.com/fis/latest/userguide/">AWS Fault Injection Simulator User Guide</a>.</p>
* `delete_experiment_template` - Deletes the specified experiment template.
* `get_action` - Gets information about the specified AWS FIS action.
* `get_experiment` - Gets information about the specified experiment.
* `get_experiment_template` - Gets information about the specified experiment template.
* `list_actions` - Lists the available AWS FIS actions.
* `list_experiment_templates` - Lists your experiment templates.
* `list_experiments` - Lists your experiments.
* `list_tags_for_resource` - Lists the tags for the specified resource.
* `start_experiment` - Starts running an experiment from the specified experiment template.
* `stop_experiment` - Stops the specified experiment.
* `tag_resource` - Applies the specified tags to the specified resource.
* `untag_resource` - Removes the specified tags from the specified resource.
* `update_experiment_template` - Updates the specified experiment template.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
