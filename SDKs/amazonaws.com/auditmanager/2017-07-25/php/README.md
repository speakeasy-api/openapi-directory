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
use \OpenAPI\OpenAPI\Models\Operations\AssociateAssessmentReportEvidenceFolderRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateAssessmentReportEvidenceFolderRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateAssessmentReportEvidenceFolderRequest();
    $request->requestBody = new AssociateAssessmentReportEvidenceFolderRequestBody();
    $request->requestBody->evidenceFolderId = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->assessmentId = 'vel';

    $response = $sdk->associateAssessmentReportEvidenceFolder($request);

    if ($response->associateAssessmentReportEvidenceFolderResponse !== null) {
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

* [associateAssessmentReportEvidenceFolder](docs/sdk/README.md#associateassessmentreportevidencefolder) -  Associates an evidence folder to an assessment report in an Audit Manager assessment. 
* [batchAssociateAssessmentReportEvidence](docs/sdk/README.md#batchassociateassessmentreportevidence) -  Associates a list of evidence to an assessment report in an Audit Manager assessment. 
* [batchCreateDelegationByAssessment](docs/sdk/README.md#batchcreatedelegationbyassessment) -  Creates a batch of delegations for an assessment in Audit Manager. 
* [batchDeleteDelegationByAssessment](docs/sdk/README.md#batchdeletedelegationbyassessment) -  Deletes a batch of delegations for an assessment in Audit Manager. 
* [batchDisassociateAssessmentReportEvidence](docs/sdk/README.md#batchdisassociateassessmentreportevidence) -  Disassociates a list of evidence from an assessment report in Audit Manager. 
* [batchImportEvidenceToAssessmentControl](docs/sdk/README.md#batchimportevidencetoassessmentcontrol) - <p>Uploads one or more pieces of evidence to a control in an Audit Manager assessment. You can upload manual evidence from any Amazon Simple Storage Service (Amazon S3) bucket by specifying the S3 URI of the evidence. </p> <p>You must upload manual evidence to your S3 bucket before you can upload it to your assessment. For instructions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> in the <i>Amazon Simple Storage Service API Reference.</i> </p> <p>The following restrictions apply to this action:</p> <ul> <li> <p>Maximum size of an individual evidence file: 100 MB</p> </li> <li> <p>Number of daily manual evidence uploads per control: 100</p> </li> <li> <p>Supported file formats: See <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#supported-manual-evidence-files">Supported file types for manual evidence</a> in the <i>Audit Manager User Guide</i> </p> </li> </ul> <p>For more information about Audit Manager service restrictions, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/service-quotas.html">Quotas and restrictions for Audit Manager</a>.</p>
* [createAssessment](docs/sdk/README.md#createassessment) -  Creates an assessment in Audit Manager. 
* [createAssessmentFramework](docs/sdk/README.md#createassessmentframework) -  Creates a custom framework in Audit Manager. 
* [createAssessmentReport](docs/sdk/README.md#createassessmentreport) -  Creates an assessment report for the specified assessment. 
* [createControl](docs/sdk/README.md#createcontrol) -  Creates a new custom control in Audit Manager. 
* [deleteAssessment](docs/sdk/README.md#deleteassessment) -  Deletes an assessment in Audit Manager. 
* [deleteAssessmentFramework](docs/sdk/README.md#deleteassessmentframework) -  Deletes a custom framework in Audit Manager. 
* [deleteAssessmentFrameworkShare](docs/sdk/README.md#deleteassessmentframeworkshare) -  Deletes a share request for a custom framework in Audit Manager. 
* [deleteAssessmentReport](docs/sdk/README.md#deleteassessmentreport) - <p>Deletes an assessment report in Audit Manager. </p> <p>When you run the <code>DeleteAssessmentReport</code> operation, Audit Manager attempts to delete the following data:</p> <ol> <li> <p>The specified assessment report that’s stored in your S3 bucket</p> </li> <li> <p>The associated metadata that’s stored in Audit Manager</p> </li> </ol> <p>If Audit Manager can’t access the assessment report in your S3 bucket, the report isn’t deleted. In this event, the <code>DeleteAssessmentReport</code> operation doesn’t fail. Instead, it proceeds to delete the associated metadata only. You must then delete the assessment report from the S3 bucket yourself. </p> <p>This scenario happens when Audit Manager receives a <code>403 (Forbidden)</code> or <code>404 (Not Found)</code> error from Amazon S3. To avoid this, make sure that your S3 bucket is available, and that you configured the correct permissions for Audit Manager to delete resources in your S3 bucket. For an example permissions policy that you can use, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/security_iam_id-based-policy-examples.html#full-administrator-access-assessment-report-destination">Assessment report destination permissions</a> in the <i>Audit Manager User Guide</i>. For information about the issues that could cause a <code>403 (Forbidden)</code> or <code>404 (Not Found</code>) error from Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a> in the <i>Amazon Simple Storage Service API Reference</i>. </p>
* [deleteControl](docs/sdk/README.md#deletecontrol) -  Deletes a custom control in Audit Manager. 
* [deregisterAccount](docs/sdk/README.md#deregisteraccount) - <p> Deregisters an account in Audit Manager. </p> <note> <p>Before you deregister, you can use the <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateSettings.html">UpdateSettings</a> API operation to set your preferred data retention policy. By default, Audit Manager retains your data. If you want to delete your data, you can use the <code>DeregistrationPolicy</code> attribute to request the deletion of your data. </p> <p>For more information about data retention, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/data-protection.html">Data Protection</a> in the <i>Audit Manager User Guide</i>. </p> </note>
* [deregisterOrganizationAdminAccount](docs/sdk/README.md#deregisterorganizationadminaccount) - <p>Removes the specified Amazon Web Services account as a delegated administrator for Audit Manager. </p> <p>When you remove a delegated administrator from your Audit Manager settings, you continue to have access to the evidence that you previously collected under that account. This is also the case when you deregister a delegated administrator from Organizations. However, Audit Manager stops collecting and attaching evidence to that delegated administrator account moving forward.</p> <important> <p>Keep in mind the following cleanup task if you use evidence finder:</p> <p>Before you use your management account to remove a delegated administrator, make sure that the current delegated administrator account signs in to Audit Manager and disables evidence finder first. Disabling evidence finder automatically deletes the event data store that was created in their account when they enabled evidence finder. If this task isn’t completed, the event data store remains in their account. In this case, we recommend that the original delegated administrator goes to CloudTrail Lake and manually <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-eds-disable-termination.html">deletes the event data store</a>.</p> <p>This cleanup task is necessary to ensure that you don't end up with multiple event data stores. Audit Manager ignores an unused event data store after you remove or change a delegated administrator account. However, the unused event data store continues to incur storage costs from CloudTrail Lake if you don't delete it.</p> </important> <p>When you deregister a delegated administrator account for Audit Manager, the data for that account isn’t deleted. If you want to delete resource data for a delegated administrator account, you must perform that task separately before you deregister the account. Either, you can do this in the Audit Manager console. Or, you can use one of the delete API operations that are provided by Audit Manager. </p> <p>To delete your Audit Manager resource data, see the following instructions: </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessment.html">DeleteAssessment</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-assessment.html">Deleting an assessment</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFramework.html">DeleteAssessmentFramework</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-custom-framework.html">Deleting a custom framework</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFrameworkShare.html">DeleteAssessmentFrameworkShare</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/deleting-shared-framework-requests.html">Deleting a share request</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentReport.html">DeleteAssessmentReport</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/generate-assessment-report.html#delete-assessment-report-steps">Deleting an assessment report</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteControl.html">DeleteControl</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-controls.html">Deleting a custom control</a> in the <i>Audit Manager User Guide</i>)</p> </li> </ul> <p>At this time, Audit Manager doesn't provide an option to delete evidence for a specific delegated administrator. Instead, when your management account deregisters Audit Manager, we perform a cleanup for the current delegated administrator account at the time of deregistration.</p>
* [disassociateAssessmentReportEvidenceFolder](docs/sdk/README.md#disassociateassessmentreportevidencefolder) -  Disassociates an evidence folder from the specified assessment report in Audit Manager. 
* [getAccountStatus](docs/sdk/README.md#getaccountstatus) -  Returns the registration status of an account in Audit Manager. 
* [getAssessment](docs/sdk/README.md#getassessment) - Returns an assessment from Audit Manager. 
* [getAssessmentFramework](docs/sdk/README.md#getassessmentframework) - Returns a framework from Audit Manager. 
* [getAssessmentReportUrl](docs/sdk/README.md#getassessmentreporturl) -  Returns the URL of an assessment report in Audit Manager. 
* [getChangeLogs](docs/sdk/README.md#getchangelogs) -  Returns a list of changelogs from Audit Manager. 
* [getControl](docs/sdk/README.md#getcontrol) -  Returns a control from Audit Manager. 
* [getDelegations](docs/sdk/README.md#getdelegations) -  Returns a list of delegations from an audit owner to a delegate. 
* [getEvidence](docs/sdk/README.md#getevidence) -  Returns evidence from Audit Manager. 
* [getEvidenceByEvidenceFolder](docs/sdk/README.md#getevidencebyevidencefolder) -  Returns all evidence from a specified evidence folder in Audit Manager. 
* [getEvidenceFolder](docs/sdk/README.md#getevidencefolder) -  Returns an evidence folder from the specified assessment in Audit Manager. 
* [getEvidenceFoldersByAssessment](docs/sdk/README.md#getevidencefoldersbyassessment) -  Returns the evidence folders from a specified assessment in Audit Manager. 
* [getEvidenceFoldersByAssessmentControl](docs/sdk/README.md#getevidencefoldersbyassessmentcontrol) -  Returns a list of evidence folders that are associated with a specified control in an Audit Manager assessment. 
* [getInsights](docs/sdk/README.md#getinsights) - Gets the latest analytics data for all your current active assessments. 
* [getInsightsByAssessment](docs/sdk/README.md#getinsightsbyassessment) - Gets the latest analytics data for a specific active assessment. 
* [getOrganizationAdminAccount](docs/sdk/README.md#getorganizationadminaccount) -  Returns the name of the delegated Amazon Web Services administrator account for the organization. 
* [getServicesInScope](docs/sdk/README.md#getservicesinscope) - Returns a list of all of the Amazon Web Services that you can choose to include in your assessment. When you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateAssessment.html">create an assessment</a>, specify which of these services you want to include to narrow the assessment's <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Scope.html">scope</a>.
* [getSettings](docs/sdk/README.md#getsettings) -  Returns the settings for the specified Amazon Web Services account. 
* [listAssessmentControlInsightsByControlDomain](docs/sdk/README.md#listassessmentcontrolinsightsbycontroldomain) - <p>Lists the latest analytics data for controls within a specific control domain and a specific active assessment.</p> <note> <p>Control insights are listed only if the control belongs to the control domain and assessment that was specified. Moreover, the control must have collected evidence on the <code>lastUpdated</code> date of <code>controlInsightsByAssessment</code>. If neither of these conditions are met, no data is listed for that control. </p> </note>
* [listAssessmentFrameworkShareRequests](docs/sdk/README.md#listassessmentframeworksharerequests) -  Returns a list of sent or received share requests for custom frameworks in Audit Manager. 
* [listAssessmentFrameworks](docs/sdk/README.md#listassessmentframeworks) -  Returns a list of the frameworks that are available in the Audit Manager framework library. 
* [listAssessmentReports](docs/sdk/README.md#listassessmentreports) -  Returns a list of assessment reports created in Audit Manager. 
* [listAssessments](docs/sdk/README.md#listassessments) -  Returns a list of current and past assessments from Audit Manager. 
* [listControlDomainInsights](docs/sdk/README.md#listcontroldomaininsights) - <p>Lists the latest analytics data for control domains across all of your active assessments. </p> <note> <p>A control domain is listed only if at least one of the controls within that domain collected evidence on the <code>lastUpdated</code> date of <code>controlDomainInsights</code>. If this condition isn’t met, no data is listed for that control domain.</p> </note>
* [listControlDomainInsightsByAssessment](docs/sdk/README.md#listcontroldomaininsightsbyassessment) - <p>Lists analytics data for control domains within a specified active assessment.</p> <note> <p>A control domain is listed only if at least one of the controls within that domain collected evidence on the <code>lastUpdated</code> date of <code>controlDomainInsights</code>. If this condition isn’t met, no data is listed for that domain.</p> </note>
* [listControlInsightsByControlDomain](docs/sdk/README.md#listcontrolinsightsbycontroldomain) - <p>Lists the latest analytics data for controls within a specific control domain across all active assessments.</p> <note> <p>Control insights are listed only if the control belongs to the control domain that was specified and the control collected evidence on the <code>lastUpdated</code> date of <code>controlInsightsMetadata</code>. If neither of these conditions are met, no data is listed for that control. </p> </note>
* [listControls](docs/sdk/README.md#listcontrols) -  Returns a list of controls from Audit Manager. 
* [listKeywordsForDataSource](docs/sdk/README.md#listkeywordsfordatasource) -  Returns a list of keywords that are pre-mapped to the specified control data source. 
* [listNotifications](docs/sdk/README.md#listnotifications) -  Returns a list of all Audit Manager notifications. 
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) -  Returns a list of tags for the specified resource in Audit Manager. 
* [registerAccount](docs/sdk/README.md#registeraccount) -  Enables Audit Manager for the specified Amazon Web Services account. 
* [registerOrganizationAdminAccount](docs/sdk/README.md#registerorganizationadminaccount) -  Enables an Amazon Web Services account within the organization as the delegated administrator for Audit Manager. 
* [startAssessmentFrameworkShare](docs/sdk/README.md#startassessmentframeworkshare) - <p> Creates a share request for a custom framework in Audit Manager. </p> <p>The share request specifies a recipient and notifies them that a custom framework is available. Recipients have 120 days to accept or decline the request. If no action is taken, the share request expires.</p> <p>When you create a share request, Audit Manager stores a snapshot of your custom framework in the US East (N. Virginia) Amazon Web Services Region. Audit Manager also stores a backup of the same snapshot in the US West (Oregon) Amazon Web Services Region.</p> <p>Audit Manager deletes the snapshot and the backup snapshot when one of the following events occurs:</p> <ul> <li> <p>The sender revokes the share request.</p> </li> <li> <p>The recipient declines the share request.</p> </li> <li> <p>The recipient encounters an error and doesn't successfully accept the share request.</p> </li> <li> <p>The share request expires before the recipient responds to the request.</p> </li> </ul> <p>When a sender <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/framework-sharing.html#framework-sharing-resend">resends a share request</a>, the snapshot is replaced with an updated version that corresponds with the latest version of the custom framework. </p> <p>When a recipient accepts a share request, the snapshot is replicated into their Amazon Web Services account under the Amazon Web Services Region that was specified in the share request. </p> <important> <p>When you invoke the <code>StartAssessmentFrameworkShare</code> API, you are about to share a custom framework with another Amazon Web Services account. You may not share a custom framework that is derived from a standard framework if the standard framework is designated as not eligible for sharing by Amazon Web Services, unless you have obtained permission to do so from the owner of the standard framework. To learn more about which standard frameworks are eligible for sharing, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/share-custom-framework-concepts-and-terminology.html#eligibility">Framework sharing eligibility</a> in the <i>Audit Manager User Guide</i>.</p> </important>
* [tagResource](docs/sdk/README.md#tagresource) -  Tags the specified resource in Audit Manager. 
* [untagResource](docs/sdk/README.md#untagresource) -  Removes a tag from a resource in Audit Manager. 
* [updateAssessment](docs/sdk/README.md#updateassessment) -  Edits an Audit Manager assessment. 
* [updateAssessmentControl](docs/sdk/README.md#updateassessmentcontrol) -  Updates a control within an assessment in Audit Manager. 
* [updateAssessmentControlSetStatus](docs/sdk/README.md#updateassessmentcontrolsetstatus) -  Updates the status of a control set in an Audit Manager assessment. 
* [updateAssessmentFramework](docs/sdk/README.md#updateassessmentframework) -  Updates a custom framework in Audit Manager. 
* [updateAssessmentFrameworkShare](docs/sdk/README.md#updateassessmentframeworkshare) -  Updates a share request for a custom framework in Audit Manager. 
* [updateAssessmentStatus](docs/sdk/README.md#updateassessmentstatus) -  Updates the status of an assessment in Audit Manager. 
* [updateControl](docs/sdk/README.md#updatecontrol) -  Updates a custom control in Audit Manager. 
* [updateSettings](docs/sdk/README.md#updatesettings) -  Updates Audit Manager settings for the current account. 
* [validateAssessmentReportIntegrity](docs/sdk/README.md#validateassessmentreportintegrity) -  Validates the integrity of an assessment report in Audit Manager. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
