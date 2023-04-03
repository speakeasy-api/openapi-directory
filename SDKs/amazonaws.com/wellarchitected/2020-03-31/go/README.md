# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/wellarchitected/2020-03-31/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AssociateLensesRequest{
        RequestBody: operations.AssociateLensesRequestBody{
            LensAliases: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
        },
        WorkloadID: "unde",
        XAmzAlgorithm: "nulla",
        XAmzContentSha256: "corrupti",
        XAmzCredential: "illum",
        XAmzDate: "vel",
        XAmzSecurityToken: "error",
        XAmzSignature: "deserunt",
        XAmzSignedHeaders: "suscipit",
    }

    ctx := context.Background()
    res, err := s.AssociateLenses(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `AssociateLenses` - <p>Associate a lens to a workload.</p> <p>Up to 10 lenses can be associated with a workload in a single API operation. A maximum of 20 lenses can be associated with a workload.</p> <note> <p> <b>Disclaimer</b> </p> <p>By accessing and/or applying custom lenses created by another Amazon Web Services user or account, you acknowledge that custom lenses created by other users and shared with you are Third Party Content as defined in the Amazon Web Services Customer Agreement. </p> </note>
* `CreateLensShare` - <p>Create a lens share.</p> <p>The owner of a lens can share it with other Amazon Web Services accounts, IAM users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Shared access to a lens is not removed until the lens invitation is deleted.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
* `CreateLensVersion` - <p>Create a new lens version.</p> <p>A lens can have up to 100 versions.</p> <p>After a lens has been imported, create a new lens version to publish it. The owner of a lens can share the lens with other Amazon Web Services accounts and IAM users in the same Amazon Web Services Region. Only the owner of a lens can delete it. </p>
* `CreateMilestone` - Create a milestone for an existing workload.
* `CreateWorkload` - <p>Create a new workload.</p> <p>The owner of a workload can share the workload with other Amazon Web Services accounts, IAM users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Only the owner of a workload can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html">Defining a Workload</a> in the <i>Well-Architected Tool User Guide</i>.</p>
* `CreateWorkloadShare` - <p>Create a workload share.</p> <p>The owner of a workload can share it with other Amazon Web Services accounts and IAM users in the same Amazon Web Services Region. Shared access to a workload is not removed until the workload invitation is deleted.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html">Sharing a Workload</a> in the <i>Well-Architected Tool User Guide</i>.</p>
* `DeleteLens` - <p>Delete an existing lens.</p> <p>Only the owner of a lens can delete it. After the lens is deleted, Amazon Web Services accounts and IAM users that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads. </p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
* `DeleteLensShare` - <p>Delete a lens share.</p> <p>After the lens share is deleted, Amazon Web Services accounts, IAM users, organizations, and organizational units (OUs) that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
* `DeleteWorkload` - Delete an existing workload.
* `DeleteWorkloadShare` - Delete a workload share.
* `DisassociateLenses` - <p>Disassociate a lens from a workload.</p> <p>Up to 10 lenses can be disassociated from a workload in a single API operation.</p> <note> <p>The Amazon Web Services Well-Architected Framework lens (<code>wellarchitected</code>) cannot be removed from a workload.</p> </note>
* `ExportLens` - <p>Export an existing lens.</p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>. Only the owner of a lens can export it. </p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>
* `GetAnswer` - Get the answer to a specific question in a workload review.
* `GetLens` - Get an existing lens.
* `GetLensReview` - Get lens review.
* `GetLensReviewReport` - Get lens review report.
* `GetLensVersionDifference` - Get lens version differences.
* `GetMilestone` - Get a milestone for an existing workload.
* `GetWorkload` - Get an existing workload.
* `ImportLens` - <p>Import a new lens.</p> <p>The lens cannot be applied to workloads or shared with other Amazon Web Services accounts until it's published with <a>CreateLensVersion</a> </p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>.</p> <p>A custom lens cannot exceed 500 KB in size.</p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>
* `ListAnswers` - List of answers.
* `ListCheckDetails` - List of Trusted Advisor check details by account related to the workload.
* `ListCheckSummaries` - List of Trusted Advisor checks summarized for all accounts related to the workload.
* `ListLensReviewImprovements` - List lens review improvements.
* `ListLensReviews` - List lens reviews.
* `ListLensShares` - List the lens shares associated with the lens.
* `ListLenses` - List the available lenses.
* `ListMilestones` - List all milestones for an existing workload.
* `ListNotifications` - List lens notifications.
* `ListShareInvitations` - List the workload invitations.
* `ListTagsForResource` - <p>List the tags for a resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note>
* `ListWorkloadShares` - List the workload shares associated with the workload.
* `ListWorkloads` - List workloads. Paginated.
* `TagResource` - <p>Adds one or more tags to the specified resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note>
* `UntagResource` - <p>Deletes specified tags from a resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note> <p>To specify multiple tags, use separate <b>tagKeys</b> parameters, for example:</p> <p> <code>DELETE /tags/WorkloadArn?tagKeys=key1&amp;tagKeys=key2</code> </p>
* `UpdateAnswer` - Update the answer to a specific question in a workload review.
* `UpdateGlobalSettings` - Updates whether the Amazon Web Services account is opted into organization sharing features.
* `UpdateLensReview` - Update lens review.
* `UpdateShareInvitation` - <p>Update a workload or custom lens share invitation.</p> <note> <p>This API operation can be called independently of any resource. Previous documentation implied that a workload ARN must be specified.</p> </note>
* `UpdateWorkload` - Update an existing workload.
* `UpdateWorkloadShare` - Update a workload share.
* `UpgradeLensReview` - Upgrade lens review.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
