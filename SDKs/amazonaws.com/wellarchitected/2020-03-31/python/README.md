# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/wellarchitected/2020-03-31/python
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


req = operations.AssociateLensesRequest(
    request_body=operations.AssociateLensesRequestBody(
        lens_aliases=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
    ),
    workload_id="unde",
    x_amz_algorithm="nulla",
    x_amz_content_sha256="corrupti",
    x_amz_credential="illum",
    x_amz_date="vel",
    x_amz_security_token="error",
    x_amz_signature="deserunt",
    x_amz_signed_headers="suscipit",
)
    
res = s.associate_lenses(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `associate_lenses` - <p>Associate a lens to a workload.</p> <p>Up to 10 lenses can be associated with a workload in a single API operation. A maximum of 20 lenses can be associated with a workload.</p> <note> <p> <b>Disclaimer</b> </p> <p>By accessing and/or applying custom lenses created by another Amazon Web Services user or account, you acknowledge that custom lenses created by other users and shared with you are Third Party Content as defined in the Amazon Web Services Customer Agreement. </p> </note>
* `create_lens_share` - <p>Create a lens share.</p> <p>The owner of a lens can share it with other Amazon Web Services accounts, IAM users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Shared access to a lens is not removed until the lens invitation is deleted.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
* `create_lens_version` - <p>Create a new lens version.</p> <p>A lens can have up to 100 versions.</p> <p>After a lens has been imported, create a new lens version to publish it. The owner of a lens can share the lens with other Amazon Web Services accounts and IAM users in the same Amazon Web Services Region. Only the owner of a lens can delete it. </p>
* `create_milestone` - Create a milestone for an existing workload.
* `create_workload` - <p>Create a new workload.</p> <p>The owner of a workload can share the workload with other Amazon Web Services accounts, IAM users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Only the owner of a workload can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html">Defining a Workload</a> in the <i>Well-Architected Tool User Guide</i>.</p>
* `create_workload_share` - <p>Create a workload share.</p> <p>The owner of a workload can share it with other Amazon Web Services accounts and IAM users in the same Amazon Web Services Region. Shared access to a workload is not removed until the workload invitation is deleted.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html">Sharing a Workload</a> in the <i>Well-Architected Tool User Guide</i>.</p>
* `delete_lens` - <p>Delete an existing lens.</p> <p>Only the owner of a lens can delete it. After the lens is deleted, Amazon Web Services accounts and IAM users that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads. </p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
* `delete_lens_share` - <p>Delete a lens share.</p> <p>After the lens share is deleted, Amazon Web Services accounts, IAM users, organizations, and organizational units (OUs) that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
* `delete_workload` - Delete an existing workload.
* `delete_workload_share` - Delete a workload share.
* `disassociate_lenses` - <p>Disassociate a lens from a workload.</p> <p>Up to 10 lenses can be disassociated from a workload in a single API operation.</p> <note> <p>The Amazon Web Services Well-Architected Framework lens (<code>wellarchitected</code>) cannot be removed from a workload.</p> </note>
* `export_lens` - <p>Export an existing lens.</p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>. Only the owner of a lens can export it. </p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>
* `get_answer` - Get the answer to a specific question in a workload review.
* `get_lens` - Get an existing lens.
* `get_lens_review` - Get lens review.
* `get_lens_review_report` - Get lens review report.
* `get_lens_version_difference` - Get lens version differences.
* `get_milestone` - Get a milestone for an existing workload.
* `get_workload` - Get an existing workload.
* `import_lens` - <p>Import a new lens.</p> <p>The lens cannot be applied to workloads or shared with other Amazon Web Services accounts until it's published with <a>CreateLensVersion</a> </p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>.</p> <p>A custom lens cannot exceed 500 KB in size.</p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>
* `list_answers` - List of answers.
* `list_check_details` - List of Trusted Advisor check details by account related to the workload.
* `list_check_summaries` - List of Trusted Advisor checks summarized for all accounts related to the workload.
* `list_lens_review_improvements` - List lens review improvements.
* `list_lens_reviews` - List lens reviews.
* `list_lens_shares` - List the lens shares associated with the lens.
* `list_lenses` - List the available lenses.
* `list_milestones` - List all milestones for an existing workload.
* `list_notifications` - List lens notifications.
* `list_share_invitations` - List the workload invitations.
* `list_tags_for_resource` - <p>List the tags for a resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note>
* `list_workload_shares` - List the workload shares associated with the workload.
* `list_workloads` - List workloads. Paginated.
* `tag_resource` - <p>Adds one or more tags to the specified resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note>
* `untag_resource` - <p>Deletes specified tags from a resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note> <p>To specify multiple tags, use separate <b>tagKeys</b> parameters, for example:</p> <p> <code>DELETE /tags/WorkloadArn?tagKeys=key1&amp;tagKeys=key2</code> </p>
* `update_answer` - Update the answer to a specific question in a workload review.
* `update_global_settings` - Updates whether the Amazon Web Services account is opted into organization sharing features.
* `update_lens_review` - Update lens review.
* `update_share_invitation` - <p>Update a workload or custom lens share invitation.</p> <note> <p>This API operation can be called independently of any resource. Previous documentation implied that a workload ARN must be specified.</p> </note>
* `update_workload` - Update an existing workload.
* `update_workload_share` - Update a workload share.
* `upgrade_lens_review` - Upgrade lens review.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
