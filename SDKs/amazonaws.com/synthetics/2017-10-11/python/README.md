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
    
req = operations.CreateCanaryRequest(
    headers=operations.CreateCanaryHeaders(
        x_amz_algorithm="dolore",
        x_amz_content_sha256="animi",
        x_amz_credential="odio",
        x_amz_date="officia",
        x_amz_security_token="odio",
        x_amz_signature="est",
        x_amz_signed_headers="sunt",
    ),
    request=operations.CreateCanaryRequestBody(
        artifact_s3_location="corrupti",
        code=operations.CreateCanaryRequestBodyCode(
            handler="perspiciatis",
            s3_bucket="accusamus",
            s3_key="iusto",
            s3_version="aut",
            zip_file="illo",
        ),
        execution_role_arn="molestiae",
        failure_retention_period_in_days=8359892027431733351,
        name="aliquid",
        run_config=operations.CreateCanaryRequestBodyRunConfig(
            active_tracing=True,
            environment_variables={
                "non": "dicta",
            },
            memory_in_mb=2347781137780074665,
            timeout_in_seconds=5418904646391934224,
        ),
        runtime_version="inventore",
        schedule=operations.CreateCanaryRequestBodySchedule(
            duration_in_seconds=6457110019065774024,
            expression="voluptatibus",
        ),
        success_retention_period_in_days=6642582187036167272,
        tags={
            "perferendis": "impedit",
        },
        vpc_config=operations.CreateCanaryRequestBodyVpcConfig(
            security_group_ids=[
                "sunt",
                "in",
            ],
            subnet_ids=[
                "laudantium",
                "reiciendis",
            ],
        ),
    ),
)
    
res = s.create_canary(req)

if res.create_canary_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_canary` - <p>Creates a canary. Canaries are scripts that monitor your endpoints and APIs from the outside-in. Canaries help you check the availability and latency of your web services and troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and metrics. You can set up a canary to run continuously or just once. </p> <p>Do not use <code>CreateCanary</code> to modify an existing canary. Use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UpdateCanary.html">UpdateCanary</a> instead.</p> <p>To create canaries, you must have the <code>CloudWatchSyntheticsFullAccess</code> policy. If you are creating a new IAM role for the canary, you also need the the <code>iam:CreateRole</code>, <code>iam:CreatePolicy</code> and <code>iam:AttachRolePolicy</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Roles">Necessary Roles and Permissions</a>.</p> <p>Do not include secrets or proprietary information in your canary names. The canary name makes up part of the Amazon Resource Name (ARN) for the canary, and the ARN is included in outbound calls over the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security Considerations for Synthetics Canaries</a>.</p>
* `delete_canary` - <p>Permanently deletes the specified canary.</p> <p>When you delete a canary, resources used and created by the canary are not automatically deleted. After you delete a canary that you do not intend to use again, you should also delete the following:</p> <ul> <li> <p>The Lambda functions and layers used by this canary. These have the prefix <code>cwsyn-<i>MyCanaryName</i> </code>.</p> </li> <li> <p>The CloudWatch alarms created for this canary. These alarms have a name of <code>Synthetics-SharpDrop-Alarm-<i>MyCanaryName</i> </code>.</p> </li> <li> <p>Amazon S3 objects and buckets, such as the canary's artifact location.</p> </li> <li> <p>IAM roles created for the canary. If they were created in the console, these roles have the name <code> role/service-role/CloudWatchSyntheticsRole-<i>MyCanaryName</i> </code>.</p> </li> <li> <p>CloudWatch Logs log groups created for the canary. These logs groups have the name <code>/aws/lambda/cwsyn-<i>MyCanaryName</i> </code>. </p> </li> </ul> <p>Before you delete a canary, you might want to use <code>GetCanary</code> to display the information about this canary. Make note of the information returned by this operation so that you can delete these resources after you delete the canary.</p>
* `describe_canaries` - <p>This operation returns a list of the canaries in your account, along with full details about each canary.</p> <p>This operation does not have resource-level authorization, so if a user is able to use <code>DescribeCanaries</code>, the user can see all of the canaries in the account. A deny policy can only be used to restrict access to all canaries. It cannot be used on specific resources. </p>
* `describe_canaries_last_run` - Use this operation to see information from the most recent run of each canary that you have created.
* `describe_runtime_versions` - Returns a list of Synthetics canary runtime versions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html"> Canary Runtime Versions</a>.
* `get_canary` - Retrieves complete information about one canary. You must specify the name of the canary that you want. To get a list of canaries and their names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.
* `get_canary_runs` - Retrieves a list of runs for a specified canary.
* `list_tags_for_resource` - Displays the tags associated with a canary.
* `start_canary` - Use this operation to run a canary that has already been created. The frequency of the canary runs is determined by the value of the canary's <code>Schedule</code>. To see a canary's schedule, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanary.html">GetCanary</a>.
* `stop_canary` - <p>Stops the canary to prevent all future runs. If the canary is currently running, Synthetics stops waiting for the current run of the specified canary to complete. The run that is in progress completes on its own, publishes metrics, and uploads artifacts, but it is not recorded in Synthetics as a completed run.</p> <p>You can use <code>StartCanary</code> to start it running again with the canary’s current schedule at any point in the future. </p>
* `tag_resource` - <p>Assigns one or more tags (key-value pairs) to the specified canary. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a canary that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a canary.</p>
* `untag_resource` - Removes one or more tags from the specified canary.
* `update_canary` - <p>Use this operation to change the settings of a canary that has already been created.</p> <p>You can't use this operation to update the tags of an existing canary. To change the tags of an existing canary, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_TagResource.html">TagResource</a>.</p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
