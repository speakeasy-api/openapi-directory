# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateLensesRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateLensesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateLensesRequest();
    $request->requestBody = new AssociateLensesRequestBody();
    $request->requestBody->lensAliases = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->workloadId = 'unde';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->associateLenses($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [associateLenses](docs/sdk/README.md#associatelenses) - <p>Associate a lens to a workload.</p> <p>Up to 10 lenses can be associated with a workload in a single API operation. A maximum of 20 lenses can be associated with a workload.</p> <note> <p> <b>Disclaimer</b> </p> <p>By accessing and/or applying custom lenses created by another Amazon Web Services user or account, you acknowledge that custom lenses created by other users and shared with you are Third Party Content as defined in the Amazon Web Services Customer Agreement. </p> </note>
* [createLensShare](docs/sdk/README.md#createlensshare) - <p>Create a lens share.</p> <p>The owner of a lens can share it with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be shared.</p> <p> Shared access to a lens is not removed until the lens invitation is deleted.</p> <p>If you share a lens with an organization or OU, all accounts in the organization or OU are granted access to the lens.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-sharing.html">Sharing a custom lens</a> in the <i>Well-Architected Tool User Guide</i>.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
* [createLensVersion](docs/sdk/README.md#createlensversion) - <p>Create a new lens version.</p> <p>A lens can have up to 100 versions.</p> <p>Use this operation to publish a new lens version after you have imported a lens. The <code>LensAlias</code> is used to identify the lens to be published. The owner of a lens can share the lens with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Only the owner of a lens can delete it. </p>
* [createMilestone](docs/sdk/README.md#createmilestone) - Create a milestone for an existing workload.
* [createWorkload](docs/sdk/README.md#createworkload) - <p>Create a new workload.</p> <p>The owner of a workload can share the workload with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Only the owner of a workload can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html">Defining a Workload</a> in the <i>Well-Architected Tool User Guide</i>.</p> <important> <p>Either <code>AwsRegions</code>, <code>NonAwsRegions</code>, or both must be specified when creating a workload.</p> <p>You also must specify <code>ReviewOwner</code>, even though the parameter is listed as not being required in the following section. </p> </important>
* [createWorkloadShare](docs/sdk/README.md#createworkloadshare) - <p>Create a workload share.</p> <p>The owner of a workload can share it with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Shared access to a workload is not removed until the workload invitation is deleted.</p> <p>If you share a workload with an organization or OU, all accounts in the organization or OU are granted access to the workload.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html">Sharing a workload</a> in the <i>Well-Architected Tool User Guide</i>.</p>
* [deleteLens](docs/sdk/README.md#deletelens) - <p>Delete an existing lens.</p> <p>Only the owner of a lens can delete it. After the lens is deleted, Amazon Web Services accounts and users that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads. </p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
* [deleteLensShare](docs/sdk/README.md#deletelensshare) - <p>Delete a lens share.</p> <p>After the lens share is deleted, Amazon Web Services accounts, users, organizations, and organizational units (OUs) that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
* [deleteWorkload](docs/sdk/README.md#deleteworkload) - Delete an existing workload.
* [deleteWorkloadShare](docs/sdk/README.md#deleteworkloadshare) - Delete a workload share.
* [disassociateLenses](docs/sdk/README.md#disassociatelenses) - <p>Disassociate a lens from a workload.</p> <p>Up to 10 lenses can be disassociated from a workload in a single API operation.</p> <note> <p>The Amazon Web Services Well-Architected Framework lens (<code>wellarchitected</code>) cannot be removed from a workload.</p> </note>
* [exportLens](docs/sdk/README.md#exportlens) - <p>Export an existing lens.</p> <p>Only the owner of a lens can export it. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be exported.</p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>.</p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>
* [getAnswer](docs/sdk/README.md#getanswer) - Get the answer to a specific question in a workload review.
* [getConsolidatedReport](docs/sdk/README.md#getconsolidatedreport) - <p>Get a consolidated report of your workloads.</p> <p>You can optionally choose to include workloads that have been shared with you.</p>
* [getLens](docs/sdk/README.md#getlens) - Get an existing lens.
* [getLensReview](docs/sdk/README.md#getlensreview) - Get lens review.
* [getLensReviewReport](docs/sdk/README.md#getlensreviewreport) - Get lens review report.
* [getLensVersionDifference](docs/sdk/README.md#getlensversiondifference) - Get lens version differences.
* [getMilestone](docs/sdk/README.md#getmilestone) - Get a milestone for an existing workload.
* [getWorkload](docs/sdk/README.md#getworkload) - Get an existing workload.
* [importLens](docs/sdk/README.md#importlens) - <p>Import a new custom lens or update an existing custom lens.</p> <p>To update an existing custom lens, specify its ARN as the <code>LensAlias</code>. If no ARN is specified, a new custom lens is created.</p> <p>The new or updated lens will have a status of <code>DRAFT</code>. The lens cannot be applied to workloads or shared with other Amazon Web Services accounts until it's published with <a>CreateLensVersion</a>.</p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>.</p> <p>A custom lens cannot exceed 500 KB in size.</p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>
* [listAnswers](docs/sdk/README.md#listanswers) - List of answers for a particular workload and lens.
* [listCheckDetails](docs/sdk/README.md#listcheckdetails) - List of Trusted Advisor check details by account related to the workload.
* [listCheckSummaries](docs/sdk/README.md#listchecksummaries) - List of Trusted Advisor checks summarized for all accounts related to the workload.
* [listLensReviewImprovements](docs/sdk/README.md#listlensreviewimprovements) - List lens review improvements.
* [listLensReviews](docs/sdk/README.md#listlensreviews) - List lens reviews for a particular workload.
* [listLensShares](docs/sdk/README.md#listlensshares) - List the lens shares associated with the lens.
* [listLenses](docs/sdk/README.md#listlenses) - List the available lenses.
* [listMilestones](docs/sdk/README.md#listmilestones) - List all milestones for an existing workload.
* [listNotifications](docs/sdk/README.md#listnotifications) - List lens notifications.
* [listShareInvitations](docs/sdk/README.md#listshareinvitations) - List the workload invitations.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - <p>List the tags for a resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note>
* [listWorkloadShares](docs/sdk/README.md#listworkloadshares) - List the workload shares associated with the workload.
* [listWorkloads](docs/sdk/README.md#listworkloads) - Paginated list of workloads.
* [tagResource](docs/sdk/README.md#tagresource) - <p>Adds one or more tags to the specified resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note>
* [untagResource](docs/sdk/README.md#untagresource) - <p>Deletes specified tags from a resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note> <p>To specify multiple tags, use separate <b>tagKeys</b> parameters, for example:</p> <p> <code>DELETE /tags/WorkloadArn?tagKeys=key1&amp;tagKeys=key2</code> </p>
* [updateAnswer](docs/sdk/README.md#updateanswer) - Update the answer to a specific question in a workload review.
* [updateGlobalSettings](docs/sdk/README.md#updateglobalsettings) - Updates whether the Amazon Web Services account is opted into organization sharing features.
* [updateLensReview](docs/sdk/README.md#updatelensreview) - Update lens review for a particular workload.
* [updateShareInvitation](docs/sdk/README.md#updateshareinvitation) - <p>Update a workload or custom lens share invitation.</p> <note> <p>This API operation can be called independently of any resource. Previous documentation implied that a workload ARN must be specified.</p> </note>
* [updateWorkload](docs/sdk/README.md#updateworkload) - Update an existing workload.
* [updateWorkloadShare](docs/sdk/README.md#updateworkloadshare) - Update a workload share.
* [upgradeLensReview](docs/sdk/README.md#upgradelensreview) - Upgrade lens review for a particular workload.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
