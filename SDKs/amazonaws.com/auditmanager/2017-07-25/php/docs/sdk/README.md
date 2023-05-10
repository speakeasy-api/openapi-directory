# SDK

## Overview

<p>Welcome to the Audit Manager API reference. This guide is for developers who need detailed information about the Audit Manager API operations, data types, and errors. </p> <p>Audit Manager is a service that provides automated evidence collection so that you can continually audit your Amazon Web Services usage. You can use it to assess the effectiveness of your controls, manage risk, and simplify compliance.</p> <p>Audit Manager provides prebuilt frameworks that structure and automate assessments for a given compliance standard. Frameworks include a prebuilt collection of controls with descriptions and testing procedures. These controls are grouped according to the requirements of the specified compliance standard or regulation. You can also customize frameworks and controls to support internal audits with specific requirements. </p> <p>Use the following links to get started with the Audit Manager API:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Operations.html">Actions</a>: An alphabetical list of all Audit Manager API operations.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Types.html">Data types</a>: An alphabetical list of all Audit Manager data types.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/CommonParameters.html">Common parameters</a>: Parameters that all operations can use.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/CommonErrors.html">Common errors</a>: Client and server errors that all operations can return.</p> </li> </ul> <p>If you're new to Audit Manager, we recommend that you review the <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/what-is.html"> Audit Manager User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/auditmanager/>
### Available Operations

* [associateAssessmentReportEvidenceFolder](#associateassessmentreportevidencefolder) -  Associates an evidence folder to an assessment report in an Audit Manager assessment. 
* [batchAssociateAssessmentReportEvidence](#batchassociateassessmentreportevidence) -  Associates a list of evidence to an assessment report in an Audit Manager assessment. 
* [batchCreateDelegationByAssessment](#batchcreatedelegationbyassessment) -  Creates a batch of delegations for an assessment in Audit Manager. 
* [batchDeleteDelegationByAssessment](#batchdeletedelegationbyassessment) -  Deletes a batch of delegations for an assessment in Audit Manager. 
* [batchDisassociateAssessmentReportEvidence](#batchdisassociateassessmentreportevidence) -  Disassociates a list of evidence from an assessment report in Audit Manager. 
* [batchImportEvidenceToAssessmentControl](#batchimportevidencetoassessmentcontrol) - <p>Uploads one or more pieces of evidence to a control in an Audit Manager assessment. You can upload manual evidence from any Amazon Simple Storage Service (Amazon S3) bucket by specifying the S3 URI of the evidence. </p> <p>You must upload manual evidence to your S3 bucket before you can upload it to your assessment. For instructions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> in the <i>Amazon Simple Storage Service API Reference.</i> </p> <p>The following restrictions apply to this action:</p> <ul> <li> <p>Maximum size of an individual evidence file: 100 MB</p> </li> <li> <p>Number of daily manual evidence uploads per control: 100</p> </li> <li> <p>Supported file formats: See <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#supported-manual-evidence-files">Supported file types for manual evidence</a> in the <i>Audit Manager User Guide</i> </p> </li> </ul> <p>For more information about Audit Manager service restrictions, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/service-quotas.html">Quotas and restrictions for Audit Manager</a>.</p>
* [createAssessment](#createassessment) -  Creates an assessment in Audit Manager. 
* [createAssessmentFramework](#createassessmentframework) -  Creates a custom framework in Audit Manager. 
* [createAssessmentReport](#createassessmentreport) -  Creates an assessment report for the specified assessment. 
* [createControl](#createcontrol) -  Creates a new custom control in Audit Manager. 
* [deleteAssessment](#deleteassessment) -  Deletes an assessment in Audit Manager. 
* [deleteAssessmentFramework](#deleteassessmentframework) -  Deletes a custom framework in Audit Manager. 
* [deleteAssessmentFrameworkShare](#deleteassessmentframeworkshare) -  Deletes a share request for a custom framework in Audit Manager. 
* [deleteAssessmentReport](#deleteassessmentreport) - <p>Deletes an assessment report in Audit Manager. </p> <p>When you run the <code>DeleteAssessmentReport</code> operation, Audit Manager attempts to delete the following data:</p> <ol> <li> <p>The specified assessment report that’s stored in your S3 bucket</p> </li> <li> <p>The associated metadata that’s stored in Audit Manager</p> </li> </ol> <p>If Audit Manager can’t access the assessment report in your S3 bucket, the report isn’t deleted. In this event, the <code>DeleteAssessmentReport</code> operation doesn’t fail. Instead, it proceeds to delete the associated metadata only. You must then delete the assessment report from the S3 bucket yourself. </p> <p>This scenario happens when Audit Manager receives a <code>403 (Forbidden)</code> or <code>404 (Not Found)</code> error from Amazon S3. To avoid this, make sure that your S3 bucket is available, and that you configured the correct permissions for Audit Manager to delete resources in your S3 bucket. For an example permissions policy that you can use, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/security_iam_id-based-policy-examples.html#full-administrator-access-assessment-report-destination">Assessment report destination permissions</a> in the <i>Audit Manager User Guide</i>. For information about the issues that could cause a <code>403 (Forbidden)</code> or <code>404 (Not Found</code>) error from Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a> in the <i>Amazon Simple Storage Service API Reference</i>. </p>
* [deleteControl](#deletecontrol) -  Deletes a custom control in Audit Manager. 
* [deregisterAccount](#deregisteraccount) - <p> Deregisters an account in Audit Manager. </p> <note> <p>Before you deregister, you can use the <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateSettings.html">UpdateSettings</a> API operation to set your preferred data retention policy. By default, Audit Manager retains your data. If you want to delete your data, you can use the <code>DeregistrationPolicy</code> attribute to request the deletion of your data. </p> <p>For more information about data retention, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/data-protection.html">Data Protection</a> in the <i>Audit Manager User Guide</i>. </p> </note>
* [deregisterOrganizationAdminAccount](#deregisterorganizationadminaccount) - <p>Removes the specified Amazon Web Services account as a delegated administrator for Audit Manager. </p> <p>When you remove a delegated administrator from your Audit Manager settings, you continue to have access to the evidence that you previously collected under that account. This is also the case when you deregister a delegated administrator from Organizations. However, Audit Manager stops collecting and attaching evidence to that delegated administrator account moving forward.</p> <important> <p>Keep in mind the following cleanup task if you use evidence finder:</p> <p>Before you use your management account to remove a delegated administrator, make sure that the current delegated administrator account signs in to Audit Manager and disables evidence finder first. Disabling evidence finder automatically deletes the event data store that was created in their account when they enabled evidence finder. If this task isn’t completed, the event data store remains in their account. In this case, we recommend that the original delegated administrator goes to CloudTrail Lake and manually <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-eds-disable-termination.html">deletes the event data store</a>.</p> <p>This cleanup task is necessary to ensure that you don't end up with multiple event data stores. Audit Manager ignores an unused event data store after you remove or change a delegated administrator account. However, the unused event data store continues to incur storage costs from CloudTrail Lake if you don't delete it.</p> </important> <p>When you deregister a delegated administrator account for Audit Manager, the data for that account isn’t deleted. If you want to delete resource data for a delegated administrator account, you must perform that task separately before you deregister the account. Either, you can do this in the Audit Manager console. Or, you can use one of the delete API operations that are provided by Audit Manager. </p> <p>To delete your Audit Manager resource data, see the following instructions: </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessment.html">DeleteAssessment</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-assessment.html">Deleting an assessment</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFramework.html">DeleteAssessmentFramework</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-custom-framework.html">Deleting a custom framework</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFrameworkShare.html">DeleteAssessmentFrameworkShare</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/deleting-shared-framework-requests.html">Deleting a share request</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentReport.html">DeleteAssessmentReport</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/generate-assessment-report.html#delete-assessment-report-steps">Deleting an assessment report</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteControl.html">DeleteControl</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-controls.html">Deleting a custom control</a> in the <i>Audit Manager User Guide</i>)</p> </li> </ul> <p>At this time, Audit Manager doesn't provide an option to delete evidence for a specific delegated administrator. Instead, when your management account deregisters Audit Manager, we perform a cleanup for the current delegated administrator account at the time of deregistration.</p>
* [disassociateAssessmentReportEvidenceFolder](#disassociateassessmentreportevidencefolder) -  Disassociates an evidence folder from the specified assessment report in Audit Manager. 
* [getAccountStatus](#getaccountstatus) -  Returns the registration status of an account in Audit Manager. 
* [getAssessment](#getassessment) - Returns an assessment from Audit Manager. 
* [getAssessmentFramework](#getassessmentframework) - Returns a framework from Audit Manager. 
* [getAssessmentReportUrl](#getassessmentreporturl) -  Returns the URL of an assessment report in Audit Manager. 
* [getChangeLogs](#getchangelogs) -  Returns a list of changelogs from Audit Manager. 
* [getControl](#getcontrol) -  Returns a control from Audit Manager. 
* [getDelegations](#getdelegations) -  Returns a list of delegations from an audit owner to a delegate. 
* [getEvidence](#getevidence) -  Returns evidence from Audit Manager. 
* [getEvidenceByEvidenceFolder](#getevidencebyevidencefolder) -  Returns all evidence from a specified evidence folder in Audit Manager. 
* [getEvidenceFolder](#getevidencefolder) -  Returns an evidence folder from the specified assessment in Audit Manager. 
* [getEvidenceFoldersByAssessment](#getevidencefoldersbyassessment) -  Returns the evidence folders from a specified assessment in Audit Manager. 
* [getEvidenceFoldersByAssessmentControl](#getevidencefoldersbyassessmentcontrol) -  Returns a list of evidence folders that are associated with a specified control in an Audit Manager assessment. 
* [getInsights](#getinsights) - Gets the latest analytics data for all your current active assessments. 
* [getInsightsByAssessment](#getinsightsbyassessment) - Gets the latest analytics data for a specific active assessment. 
* [getOrganizationAdminAccount](#getorganizationadminaccount) -  Returns the name of the delegated Amazon Web Services administrator account for the organization. 
* [getServicesInScope](#getservicesinscope) - Returns a list of all of the Amazon Web Services that you can choose to include in your assessment. When you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateAssessment.html">create an assessment</a>, specify which of these services you want to include to narrow the assessment's <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Scope.html">scope</a>.
* [getSettings](#getsettings) -  Returns the settings for the specified Amazon Web Services account. 
* [listAssessmentControlInsightsByControlDomain](#listassessmentcontrolinsightsbycontroldomain) - <p>Lists the latest analytics data for controls within a specific control domain and a specific active assessment.</p> <note> <p>Control insights are listed only if the control belongs to the control domain and assessment that was specified. Moreover, the control must have collected evidence on the <code>lastUpdated</code> date of <code>controlInsightsByAssessment</code>. If neither of these conditions are met, no data is listed for that control. </p> </note>
* [listAssessmentFrameworkShareRequests](#listassessmentframeworksharerequests) -  Returns a list of sent or received share requests for custom frameworks in Audit Manager. 
* [listAssessmentFrameworks](#listassessmentframeworks) -  Returns a list of the frameworks that are available in the Audit Manager framework library. 
* [listAssessmentReports](#listassessmentreports) -  Returns a list of assessment reports created in Audit Manager. 
* [listAssessments](#listassessments) -  Returns a list of current and past assessments from Audit Manager. 
* [listControlDomainInsights](#listcontroldomaininsights) - <p>Lists the latest analytics data for control domains across all of your active assessments. </p> <note> <p>A control domain is listed only if at least one of the controls within that domain collected evidence on the <code>lastUpdated</code> date of <code>controlDomainInsights</code>. If this condition isn’t met, no data is listed for that control domain.</p> </note>
* [listControlDomainInsightsByAssessment](#listcontroldomaininsightsbyassessment) - <p>Lists analytics data for control domains within a specified active assessment.</p> <note> <p>A control domain is listed only if at least one of the controls within that domain collected evidence on the <code>lastUpdated</code> date of <code>controlDomainInsights</code>. If this condition isn’t met, no data is listed for that domain.</p> </note>
* [listControlInsightsByControlDomain](#listcontrolinsightsbycontroldomain) - <p>Lists the latest analytics data for controls within a specific control domain across all active assessments.</p> <note> <p>Control insights are listed only if the control belongs to the control domain that was specified and the control collected evidence on the <code>lastUpdated</code> date of <code>controlInsightsMetadata</code>. If neither of these conditions are met, no data is listed for that control. </p> </note>
* [listControls](#listcontrols) -  Returns a list of controls from Audit Manager. 
* [listKeywordsForDataSource](#listkeywordsfordatasource) -  Returns a list of keywords that are pre-mapped to the specified control data source. 
* [listNotifications](#listnotifications) -  Returns a list of all Audit Manager notifications. 
* [listTagsForResource](#listtagsforresource) -  Returns a list of tags for the specified resource in Audit Manager. 
* [registerAccount](#registeraccount) -  Enables Audit Manager for the specified Amazon Web Services account. 
* [registerOrganizationAdminAccount](#registerorganizationadminaccount) -  Enables an Amazon Web Services account within the organization as the delegated administrator for Audit Manager. 
* [startAssessmentFrameworkShare](#startassessmentframeworkshare) - <p> Creates a share request for a custom framework in Audit Manager. </p> <p>The share request specifies a recipient and notifies them that a custom framework is available. Recipients have 120 days to accept or decline the request. If no action is taken, the share request expires.</p> <p>When you create a share request, Audit Manager stores a snapshot of your custom framework in the US East (N. Virginia) Amazon Web Services Region. Audit Manager also stores a backup of the same snapshot in the US West (Oregon) Amazon Web Services Region.</p> <p>Audit Manager deletes the snapshot and the backup snapshot when one of the following events occurs:</p> <ul> <li> <p>The sender revokes the share request.</p> </li> <li> <p>The recipient declines the share request.</p> </li> <li> <p>The recipient encounters an error and doesn't successfully accept the share request.</p> </li> <li> <p>The share request expires before the recipient responds to the request.</p> </li> </ul> <p>When a sender <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/framework-sharing.html#framework-sharing-resend">resends a share request</a>, the snapshot is replaced with an updated version that corresponds with the latest version of the custom framework. </p> <p>When a recipient accepts a share request, the snapshot is replicated into their Amazon Web Services account under the Amazon Web Services Region that was specified in the share request. </p> <important> <p>When you invoke the <code>StartAssessmentFrameworkShare</code> API, you are about to share a custom framework with another Amazon Web Services account. You may not share a custom framework that is derived from a standard framework if the standard framework is designated as not eligible for sharing by Amazon Web Services, unless you have obtained permission to do so from the owner of the standard framework. To learn more about which standard frameworks are eligible for sharing, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/share-custom-framework-concepts-and-terminology.html#eligibility">Framework sharing eligibility</a> in the <i>Audit Manager User Guide</i>.</p> </important>
* [tagResource](#tagresource) -  Tags the specified resource in Audit Manager. 
* [untagResource](#untagresource) -  Removes a tag from a resource in Audit Manager. 
* [updateAssessment](#updateassessment) -  Edits an Audit Manager assessment. 
* [updateAssessmentControl](#updateassessmentcontrol) -  Updates a control within an assessment in Audit Manager. 
* [updateAssessmentControlSetStatus](#updateassessmentcontrolsetstatus) -  Updates the status of a control set in an Audit Manager assessment. 
* [updateAssessmentFramework](#updateassessmentframework) -  Updates a custom framework in Audit Manager. 
* [updateAssessmentFrameworkShare](#updateassessmentframeworkshare) -  Updates a share request for a custom framework in Audit Manager. 
* [updateAssessmentStatus](#updateassessmentstatus) -  Updates the status of an assessment in Audit Manager. 
* [updateControl](#updatecontrol) -  Updates a custom control in Audit Manager. 
* [updateSettings](#updatesettings) -  Updates Audit Manager settings for the current account. 
* [validateAssessmentReportIntegrity](#validateassessmentreportintegrity) -  Validates the integrity of an assessment report in Audit Manager. 

## associateAssessmentReportEvidenceFolder

 Associates an evidence folder to an assessment report in an Audit Manager assessment. 

### Example Usage

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
    $request->requestBody->evidenceFolderId = 'error';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'delectus';
    $request->assessmentId = 'tempora';

    $response = $sdk->sdk->associateAssessmentReportEvidenceFolder($request);

    if ($response->associateAssessmentReportEvidenceFolderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchAssociateAssessmentReportEvidence

 Associates a list of evidence to an assessment report in an Audit Manager assessment. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchAssociateAssessmentReportEvidenceRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchAssociateAssessmentReportEvidenceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchAssociateAssessmentReportEvidenceRequest();
    $request->requestBody = new BatchAssociateAssessmentReportEvidenceRequestBody();
    $request->requestBody->evidenceFolderId = 'suscipit';
    $request->requestBody->evidenceIds = [
        'minus',
        'placeat',
    ];
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'ab';
    $request->assessmentId = 'quis';

    $response = $sdk->sdk->batchAssociateAssessmentReportEvidence($request);

    if ($response->batchAssociateAssessmentReportEvidenceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchCreateDelegationByAssessment

 Creates a batch of delegations for an assessment in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchCreateDelegationByAssessmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchCreateDelegationByAssessmentRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\CreateDelegationRequest;
use \OpenAPI\OpenAPI\Models\Shared\RoleTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchCreateDelegationByAssessmentRequest();
    $request->requestBody = new BatchCreateDelegationByAssessmentRequestBody();
    $request->requestBody->createDelegationRequests = [
        new CreateDelegationRequest(),
    ];
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'odit';
    $request->assessmentId = 'at';

    $response = $sdk->sdk->batchCreateDelegationByAssessment($request);

    if ($response->batchCreateDelegationByAssessmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDeleteDelegationByAssessment

 Deletes a batch of delegations for an assessment in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteDelegationByAssessmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteDelegationByAssessmentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDeleteDelegationByAssessmentRequest();
    $request->requestBody = new BatchDeleteDelegationByAssessmentRequestBody();
    $request->requestBody->delegationIds = [
        'maiores',
        'molestiae',
        'quod',
        'quod',
    ];
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'officia';
    $request->assessmentId = 'occaecati';

    $response = $sdk->sdk->batchDeleteDelegationByAssessment($request);

    if ($response->batchDeleteDelegationByAssessmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDisassociateAssessmentReportEvidence

 Disassociates a list of evidence from an assessment report in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDisassociateAssessmentReportEvidenceRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDisassociateAssessmentReportEvidenceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDisassociateAssessmentReportEvidenceRequest();
    $request->requestBody = new BatchDisassociateAssessmentReportEvidenceRequestBody();
    $request->requestBody->evidenceFolderId = 'fugit';
    $request->requestBody->evidenceIds = [
        'hic',
        'optio',
        'totam',
    ];
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'cum';
    $request->assessmentId = 'esse';

    $response = $sdk->sdk->batchDisassociateAssessmentReportEvidence($request);

    if ($response->batchDisassociateAssessmentReportEvidenceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchImportEvidenceToAssessmentControl

<p>Uploads one or more pieces of evidence to a control in an Audit Manager assessment. You can upload manual evidence from any Amazon Simple Storage Service (Amazon S3) bucket by specifying the S3 URI of the evidence. </p> <p>You must upload manual evidence to your S3 bucket before you can upload it to your assessment. For instructions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> in the <i>Amazon Simple Storage Service API Reference.</i> </p> <p>The following restrictions apply to this action:</p> <ul> <li> <p>Maximum size of an individual evidence file: 100 MB</p> </li> <li> <p>Number of daily manual evidence uploads per control: 100</p> </li> <li> <p>Supported file formats: See <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#supported-manual-evidence-files">Supported file types for manual evidence</a> in the <i>Audit Manager User Guide</i> </p> </li> </ul> <p>For more information about Audit Manager service restrictions, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/service-quotas.html">Quotas and restrictions for Audit Manager</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchImportEvidenceToAssessmentControlRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchImportEvidenceToAssessmentControlRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ManualEvidence;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchImportEvidenceToAssessmentControlRequest();
    $request->requestBody = new BatchImportEvidenceToAssessmentControlRequestBody();
    $request->requestBody->manualEvidence = [
        new ManualEvidence(),
    ];
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'iste';
    $request->assessmentId = 'dolor';
    $request->controlId = 'natus';
    $request->controlSetId = 'laboriosam';

    $response = $sdk->sdk->batchImportEvidenceToAssessmentControl($request);

    if ($response->batchImportEvidenceToAssessmentControlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAssessment

 Creates an assessment in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssessmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssessmentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssessmentRequestBodyAssessmentReportsDestination;
use \OpenAPI\OpenAPI\Models\Shared\AssessmentReportDestinationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Role;
use \OpenAPI\OpenAPI\Models\Shared\RoleTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssessmentRequestBodyScope;
use \OpenAPI\OpenAPI\Models\Shared\AWSAccount;
use \OpenAPI\OpenAPI\Models\Shared\AWSService;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAssessmentRequest();
    $request->requestBody = new CreateAssessmentRequestBody();
    $request->requestBody->assessmentReportsDestination = new CreateAssessmentRequestBodyAssessmentReportsDestination();
    $request->requestBody->assessmentReportsDestination->destination = 'hic';
    $request->requestBody->assessmentReportsDestination->destinationType = AssessmentReportDestinationTypeEnum::S3;
    $request->requestBody->description = 'saepe';
    $request->requestBody->frameworkId = 'fuga';
    $request->requestBody->name = 'Stacy Moore';
    $request->requestBody->roles = [
        new Role(),
        new Role(),
        new Role(),
    ];
    $request->requestBody->scope = new CreateAssessmentRequestBodyScope();
    $request->requestBody->scope->awsAccounts = [
        new AWSAccount(),
    ];
    $request->requestBody->scope->awsServices = [
        new AWSService(),
    ];
    $request->requestBody->tags = [
        'est' => 'mollitia',
        'laborum' => 'dolores',
        'dolorem' => 'corporis',
        'explicabo' => 'nobis',
    ];
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->sdk->createAssessment($request);

    if ($response->createAssessmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAssessmentFramework

 Creates a custom framework in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssessmentFrameworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssessmentFrameworkRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\CreateAssessmentFrameworkControlSet;
use \OpenAPI\OpenAPI\Models\Shared\CreateAssessmentFrameworkControl;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAssessmentFrameworkRequest();
    $request->requestBody = new CreateAssessmentFrameworkRequestBody();
    $request->requestBody->complianceType = 'culpa';
    $request->requestBody->controlSets = [
        new CreateAssessmentFrameworkControlSet(),
        new CreateAssessmentFrameworkControlSet(),
        new CreateAssessmentFrameworkControlSet(),
        new CreateAssessmentFrameworkControlSet(),
    ];
    $request->requestBody->description = 'sapiente';
    $request->requestBody->name = 'Angie Durgan';
    $request->requestBody->tags = [
        'mollitia' => 'occaecati',
        'numquam' => 'commodi',
        'quam' => 'molestiae',
        'velit' => 'error',
    ];
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->createAssessmentFramework($request);

    if ($response->createAssessmentFrameworkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAssessmentReport

 Creates an assessment report for the specified assessment. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssessmentReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAssessmentReportRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAssessmentReportRequest();
    $request->requestBody = new CreateAssessmentReportRequestBody();
    $request->requestBody->description = 'quo';
    $request->requestBody->name = 'Mandy Hills';
    $request->requestBody->queryStatement = 'aut';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->assessmentId = 'vero';

    $response = $sdk->sdk->createAssessmentReport($request);

    if ($response->createAssessmentReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createControl

 Creates a new custom control in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateControlRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateControlRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\CreateControlMappingSource;
use \OpenAPI\OpenAPI\Models\Shared\SourceFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceKeyword;
use \OpenAPI\OpenAPI\Models\Shared\KeywordInputTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceSetUpOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateControlRequest();
    $request->requestBody = new CreateControlRequestBody();
    $request->requestBody->actionPlanInstructions = 'nihil';
    $request->requestBody->actionPlanTitle = 'praesentium';
    $request->requestBody->controlMappingSources = [
        new CreateControlMappingSource(),
        new CreateControlMappingSource(),
        new CreateControlMappingSource(),
        new CreateControlMappingSource(),
    ];
    $request->requestBody->description = 'ipsa';
    $request->requestBody->name = 'Mr. Jared Ritchie';
    $request->requestBody->tags = [
        'maiores' => 'dicta',
        'corporis' => 'dolore',
    ];
    $request->requestBody->testingInformation = 'iusto';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->createControl($request);

    if ($response->createControlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAssessment

 Deletes an assessment in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAssessmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAssessmentRequest();
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'molestias';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->assessmentId = 'rem';

    $response = $sdk->sdk->deleteAssessment($request);

    if ($response->deleteAssessmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAssessmentFramework

 Deletes a custom framework in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAssessmentFrameworkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAssessmentFrameworkRequest();
    $request->xAmzAlgorithm = 'voluptates';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->frameworkId = 'enim';

    $response = $sdk->sdk->deleteAssessmentFramework($request);

    if ($response->deleteAssessmentFrameworkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAssessmentFrameworkShare

 Deletes a share request for a custom framework in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAssessmentFrameworkShareRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAssessmentFrameworkShareRequestTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAssessmentFrameworkShareRequest();
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->requestId = 'labore';
    $request->requestType = DeleteAssessmentFrameworkShareRequestTypeEnum::SENT;

    $response = $sdk->sdk->deleteAssessmentFrameworkShare($request);

    if ($response->deleteAssessmentFrameworkShareResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAssessmentReport

<p>Deletes an assessment report in Audit Manager. </p> <p>When you run the <code>DeleteAssessmentReport</code> operation, Audit Manager attempts to delete the following data:</p> <ol> <li> <p>The specified assessment report that’s stored in your S3 bucket</p> </li> <li> <p>The associated metadata that’s stored in Audit Manager</p> </li> </ol> <p>If Audit Manager can’t access the assessment report in your S3 bucket, the report isn’t deleted. In this event, the <code>DeleteAssessmentReport</code> operation doesn’t fail. Instead, it proceeds to delete the associated metadata only. You must then delete the assessment report from the S3 bucket yourself. </p> <p>This scenario happens when Audit Manager receives a <code>403 (Forbidden)</code> or <code>404 (Not Found)</code> error from Amazon S3. To avoid this, make sure that your S3 bucket is available, and that you configured the correct permissions for Audit Manager to delete resources in your S3 bucket. For an example permissions policy that you can use, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/security_iam_id-based-policy-examples.html#full-administrator-access-assessment-report-destination">Assessment report destination permissions</a> in the <i>Audit Manager User Guide</i>. For information about the issues that could cause a <code>403 (Forbidden)</code> or <code>404 (Not Found</code>) error from Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a> in the <i>Amazon Simple Storage Service API Reference</i>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAssessmentReportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAssessmentReportRequest();
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->assessmentId = 'ipsam';
    $request->assessmentReportId = 'alias';

    $response = $sdk->sdk->deleteAssessmentReport($request);

    if ($response->deleteAssessmentReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteControl

 Deletes a custom control in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteControlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteControlRequest();
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'labore';
    $request->controlId = 'delectus';

    $response = $sdk->sdk->deleteControl($request);

    if ($response->deleteControlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterAccount

<p> Deregisters an account in Audit Manager. </p> <note> <p>Before you deregister, you can use the <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateSettings.html">UpdateSettings</a> API operation to set your preferred data retention policy. By default, Audit Manager retains your data. If you want to delete your data, you can use the <code>DeregistrationPolicy</code> attribute to request the deletion of your data. </p> <p>For more information about data retention, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/data-protection.html">Data Protection</a> in the <i>Audit Manager User Guide</i>. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterAccountRequest();
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->deregisterAccount($request);

    if ($response->deregisterAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterOrganizationAdminAccount

<p>Removes the specified Amazon Web Services account as a delegated administrator for Audit Manager. </p> <p>When you remove a delegated administrator from your Audit Manager settings, you continue to have access to the evidence that you previously collected under that account. This is also the case when you deregister a delegated administrator from Organizations. However, Audit Manager stops collecting and attaching evidence to that delegated administrator account moving forward.</p> <important> <p>Keep in mind the following cleanup task if you use evidence finder:</p> <p>Before you use your management account to remove a delegated administrator, make sure that the current delegated administrator account signs in to Audit Manager and disables evidence finder first. Disabling evidence finder automatically deletes the event data store that was created in their account when they enabled evidence finder. If this task isn’t completed, the event data store remains in their account. In this case, we recommend that the original delegated administrator goes to CloudTrail Lake and manually <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-eds-disable-termination.html">deletes the event data store</a>.</p> <p>This cleanup task is necessary to ensure that you don't end up with multiple event data stores. Audit Manager ignores an unused event data store after you remove or change a delegated administrator account. However, the unused event data store continues to incur storage costs from CloudTrail Lake if you don't delete it.</p> </important> <p>When you deregister a delegated administrator account for Audit Manager, the data for that account isn’t deleted. If you want to delete resource data for a delegated administrator account, you must perform that task separately before you deregister the account. Either, you can do this in the Audit Manager console. Or, you can use one of the delete API operations that are provided by Audit Manager. </p> <p>To delete your Audit Manager resource data, see the following instructions: </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessment.html">DeleteAssessment</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-assessment.html">Deleting an assessment</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFramework.html">DeleteAssessmentFramework</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-custom-framework.html">Deleting a custom framework</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFrameworkShare.html">DeleteAssessmentFrameworkShare</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/deleting-shared-framework-requests.html">Deleting a share request</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentReport.html">DeleteAssessmentReport</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/generate-assessment-report.html#delete-assessment-report-steps">Deleting an assessment report</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteControl.html">DeleteControl</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-controls.html">Deleting a custom control</a> in the <i>Audit Manager User Guide</i>)</p> </li> </ul> <p>At this time, Audit Manager doesn't provide an option to delete evidence for a specific delegated administrator. Instead, when your management account deregisters Audit Manager, we perform a cleanup for the current delegated administrator account at the time of deregistration.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterOrganizationAdminAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterOrganizationAdminAccountRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterOrganizationAdminAccountRequest();
    $request->requestBody = new DeregisterOrganizationAdminAccountRequestBody();
    $request->requestBody->adminAccountId = 'sint';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'in';

    $response = $sdk->sdk->deregisterOrganizationAdminAccount($request);

    if ($response->deregisterOrganizationAdminAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateAssessmentReportEvidenceFolder

 Disassociates an evidence folder from the specified assessment report in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateAssessmentReportEvidenceFolderRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateAssessmentReportEvidenceFolderRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateAssessmentReportEvidenceFolderRequest();
    $request->requestBody = new DisassociateAssessmentReportEvidenceFolderRequestBody();
    $request->requestBody->evidenceFolderId = 'illum';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'ea';
    $request->assessmentId = 'aliquid';

    $response = $sdk->sdk->disassociateAssessmentReportEvidenceFolder($request);

    if ($response->disassociateAssessmentReportEvidenceFolderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountStatus

 Returns the registration status of an account in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountStatusRequest();
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->getAccountStatus($request);

    if ($response->getAccountStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssessment

Returns an assessment from Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAssessmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssessmentRequest();
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->assessmentId = 'amet';

    $response = $sdk->sdk->getAssessment($request);

    if ($response->getAssessmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssessmentFramework

Returns a framework from Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAssessmentFrameworkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssessmentFrameworkRequest();
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->frameworkId = 'nihil';

    $response = $sdk->sdk->getAssessmentFramework($request);

    if ($response->getAssessmentFrameworkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssessmentReportUrl

 Returns the URL of an assessment report in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAssessmentReportUrlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssessmentReportUrlRequest();
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'natus';
    $request->assessmentId = 'nobis';
    $request->assessmentReportId = 'eum';

    $response = $sdk->sdk->getAssessmentReportUrl($request);

    if ($response->getAssessmentReportUrlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChangeLogs

 Returns a list of changelogs from Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetChangeLogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChangeLogsRequest();
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'ullam';
    $request->assessmentId = 'provident';
    $request->controlId = 'quos';
    $request->controlSetId = 'sint';
    $request->maxResults = 33625;
    $request->nextToken = 'mollitia';

    $response = $sdk->sdk->getChangeLogs($request);

    if ($response->getChangeLogsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getControl

 Returns a control from Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetControlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetControlRequest();
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'odit';
    $request->controlId = 'nemo';

    $response = $sdk->sdk->getControl($request);

    if ($response->getControlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDelegations

 Returns a list of delegations from an audit owner to a delegate. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDelegationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDelegationsRequest();
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->maxResults = 703889;
    $request->nextToken = 'in';

    $response = $sdk->sdk->getDelegations($request);

    if ($response->getDelegationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEvidence

 Returns evidence from Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEvidenceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEvidenceRequest();
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'repellat';
    $request->assessmentId = 'quibusdam';
    $request->controlSetId = 'sed';
    $request->evidenceFolderId = 'saepe';
    $request->evidenceId = 'pariatur';

    $response = $sdk->sdk->getEvidence($request);

    if ($response->getEvidenceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEvidenceByEvidenceFolder

 Returns all evidence from a specified evidence folder in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEvidenceByEvidenceFolderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEvidenceByEvidenceFolderRequest();
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'quo';
    $request->assessmentId = 'illum';
    $request->controlSetId = 'pariatur';
    $request->evidenceFolderId = 'maxime';
    $request->maxResults = 411397;
    $request->nextToken = 'excepturi';

    $response = $sdk->sdk->getEvidenceByEvidenceFolder($request);

    if ($response->getEvidenceByEvidenceFolderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEvidenceFolder

 Returns an evidence folder from the specified assessment in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEvidenceFolderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEvidenceFolderRequest();
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->assessmentId = 'voluptate';
    $request->controlSetId = 'autem';
    $request->evidenceFolderId = 'nam';

    $response = $sdk->sdk->getEvidenceFolder($request);

    if ($response->getEvidenceFolderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEvidenceFoldersByAssessment

 Returns the evidence folders from a specified assessment in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEvidenceFoldersByAssessmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEvidenceFoldersByAssessmentRequest();
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'amet';
    $request->assessmentId = 'aut';
    $request->maxResults = 764912;
    $request->nextToken = 'corporis';

    $response = $sdk->sdk->getEvidenceFoldersByAssessment($request);

    if ($response->getEvidenceFoldersByAssessmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEvidenceFoldersByAssessmentControl

 Returns a list of evidence folders that are associated with a specified control in an Audit Manager assessment. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEvidenceFoldersByAssessmentControlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEvidenceFoldersByAssessmentControlRequest();
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->assessmentId = 'eaque';
    $request->controlId = 'quis';
    $request->controlSetId = 'nesciunt';
    $request->maxResults = 179490;
    $request->nextToken = 'perferendis';

    $response = $sdk->sdk->getEvidenceFoldersByAssessmentControl($request);

    if ($response->getEvidenceFoldersByAssessmentControlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInsights

Gets the latest analytics data for all your current active assessments. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInsightsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInsightsRequest();
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->getInsights($request);

    if ($response->getInsightsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInsightsByAssessment

Gets the latest analytics data for a specific active assessment. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInsightsByAssessmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInsightsByAssessmentRequest();
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->assessmentId = 'blanditiis';

    $response = $sdk->sdk->getInsightsByAssessment($request);

    if ($response->getInsightsByAssessmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationAdminAccount

 Returns the name of the delegated Amazon Web Services administrator account for the organization. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationAdminAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationAdminAccountRequest();
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'earum';

    $response = $sdk->sdk->getOrganizationAdminAccount($request);

    if ($response->getOrganizationAdminAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServicesInScope

Returns a list of all of the Amazon Web Services that you can choose to include in your assessment. When you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateAssessment.html">create an assessment</a>, specify which of these services you want to include to narrow the assessment's <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Scope.html">scope</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServicesInScopeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServicesInScopeRequest();
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->getServicesInScope($request);

    if ($response->getServicesInScopeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSettings

 Returns the settings for the specified Amazon Web Services account. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSettingsAttributeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSettingsRequest();
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->attribute = GetSettingsAttributeEnum::IS_AWS_ORG_ENABLED;

    $response = $sdk->sdk->getSettings($request);

    if ($response->getSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssessmentControlInsightsByControlDomain

<p>Lists the latest analytics data for controls within a specific control domain and a specific active assessment.</p> <note> <p>Control insights are listed only if the control belongs to the control domain and assessment that was specified. Moreover, the control must have collected evidence on the <code>lastUpdated</code> date of <code>controlInsightsByAssessment</code>. If neither of these conditions are met, no data is listed for that control. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAssessmentControlInsightsByControlDomainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssessmentControlInsightsByControlDomainRequest();
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->assessmentId = 'reiciendis';
    $request->controlDomainId = 'amet';
    $request->maxResults = 680545;
    $request->nextToken = 'numquam';

    $response = $sdk->sdk->listAssessmentControlInsightsByControlDomain($request);

    if ($response->listAssessmentControlInsightsByControlDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssessmentFrameworkShareRequests

 Returns a list of sent or received share requests for custom frameworks in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAssessmentFrameworkShareRequestsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAssessmentFrameworkShareRequestsRequestTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssessmentFrameworkShareRequestsRequest();
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->maxResults = 696344;
    $request->nextToken = 'voluptatibus';
    $request->requestType = ListAssessmentFrameworkShareRequestsRequestTypeEnum::SENT;

    $response = $sdk->sdk->listAssessmentFrameworkShareRequests($request);

    if ($response->listAssessmentFrameworkShareRequestsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssessmentFrameworks

 Returns a list of the frameworks that are available in the Audit Manager framework library. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAssessmentFrameworksRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAssessmentFrameworksFrameworkTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssessmentFrameworksRequest();
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'soluta';
    $request->frameworkType = ListAssessmentFrameworksFrameworkTypeEnum::CUSTOM;
    $request->maxResults = 478596;
    $request->nextToken = 'voluptate';

    $response = $sdk->sdk->listAssessmentFrameworks($request);

    if ($response->listAssessmentFrameworksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssessmentReports

 Returns a list of assessment reports created in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAssessmentReportsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssessmentReportsRequest();
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'nihil';
    $request->maxResults = 216897;
    $request->nextToken = 'voluptate';

    $response = $sdk->sdk->listAssessmentReports($request);

    if ($response->listAssessmentReportsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssessments

 Returns a list of current and past assessments from Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAssessmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAssessmentsStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssessmentsRequest();
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'optio';
    $request->maxResults = 881586;
    $request->nextToken = 'ad';
    $request->status = ListAssessmentsStatusEnum::INACTIVE;

    $response = $sdk->sdk->listAssessments($request);

    if ($response->listAssessmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listControlDomainInsights

<p>Lists the latest analytics data for control domains across all of your active assessments. </p> <note> <p>A control domain is listed only if at least one of the controls within that domain collected evidence on the <code>lastUpdated</code> date of <code>controlDomainInsights</code>. If this condition isn’t met, no data is listed for that control domain.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListControlDomainInsightsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListControlDomainInsightsRequest();
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'similique';
    $request->maxResults = 55;
    $request->nextToken = 'at';

    $response = $sdk->sdk->listControlDomainInsights($request);

    if ($response->listControlDomainInsightsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listControlDomainInsightsByAssessment

<p>Lists analytics data for control domains within a specified active assessment.</p> <note> <p>A control domain is listed only if at least one of the controls within that domain collected evidence on the <code>lastUpdated</code> date of <code>controlDomainInsights</code>. If this condition isn’t met, no data is listed for that domain.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListControlDomainInsightsByAssessmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListControlDomainInsightsByAssessmentRequest();
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->assessmentId = 'a';
    $request->maxResults = 456130;
    $request->nextToken = 'harum';

    $response = $sdk->sdk->listControlDomainInsightsByAssessment($request);

    if ($response->listControlDomainInsightsByAssessmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listControlInsightsByControlDomain

<p>Lists the latest analytics data for controls within a specific control domain across all active assessments.</p> <note> <p>Control insights are listed only if the control belongs to the control domain that was specified and the control collected evidence on the <code>lastUpdated</code> date of <code>controlInsightsMetadata</code>. If neither of these conditions are met, no data is listed for that control. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListControlInsightsByControlDomainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListControlInsightsByControlDomainRequest();
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->controlDomainId = 'numquam';
    $request->maxResults = 313692;
    $request->nextToken = 'dolorem';

    $response = $sdk->sdk->listControlInsightsByControlDomain($request);

    if ($response->listControlInsightsByControlDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listControls

 Returns a list of controls from Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListControlsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListControlsControlTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListControlsRequest();
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'sed';
    $request->controlType = ListControlsControlTypeEnum::STANDARD;
    $request->maxResults = 730442;
    $request->nextToken = 'voluptas';

    $response = $sdk->sdk->listControls($request);

    if ($response->listControlsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listKeywordsForDataSource

 Returns a list of keywords that are pre-mapped to the specified control data source. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListKeywordsForDataSourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListKeywordsForDataSourceSourceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListKeywordsForDataSourceRequest();
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'maxime';
    $request->maxResults = 863856;
    $request->nextToken = 'soluta';
    $request->source = ListKeywordsForDataSourceSourceEnum::AWS_CLOUDTRAIL;

    $response = $sdk->sdk->listKeywordsForDataSource($request);

    if ($response->listKeywordsForDataSourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNotifications

 Returns a list of all Audit Manager notifications. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListNotificationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListNotificationsRequest();
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'facilis';
    $request->maxResults = 396060;
    $request->nextToken = 'quam';

    $response = $sdk->sdk->listNotifications($request);

    if ($response->listNotificationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

 Returns a list of tags for the specified resource in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'odio';
    $request->resourceArn = 'sunt';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerAccount

 Enables Audit Manager for the specified Amazon Web Services account. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterAccountRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterAccountRequest();
    $request->requestBody = new RegisterAccountRequestBody();
    $request->requestBody->delegatedAdminAccount = 'ullam';
    $request->requestBody->kmsKey = 'nam';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->registerAccount($request);

    if ($response->registerAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerOrganizationAdminAccount

 Enables an Amazon Web Services account within the organization as the delegated administrator for Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterOrganizationAdminAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterOrganizationAdminAccountRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterOrganizationAdminAccountRequest();
    $request->requestBody = new RegisterOrganizationAdminAccountRequestBody();
    $request->requestBody->adminAccountId = 'ipsum';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->registerOrganizationAdminAccount($request);

    if ($response->registerOrganizationAdminAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startAssessmentFrameworkShare

<p> Creates a share request for a custom framework in Audit Manager. </p> <p>The share request specifies a recipient and notifies them that a custom framework is available. Recipients have 120 days to accept or decline the request. If no action is taken, the share request expires.</p> <p>When you create a share request, Audit Manager stores a snapshot of your custom framework in the US East (N. Virginia) Amazon Web Services Region. Audit Manager also stores a backup of the same snapshot in the US West (Oregon) Amazon Web Services Region.</p> <p>Audit Manager deletes the snapshot and the backup snapshot when one of the following events occurs:</p> <ul> <li> <p>The sender revokes the share request.</p> </li> <li> <p>The recipient declines the share request.</p> </li> <li> <p>The recipient encounters an error and doesn't successfully accept the share request.</p> </li> <li> <p>The share request expires before the recipient responds to the request.</p> </li> </ul> <p>When a sender <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/framework-sharing.html#framework-sharing-resend">resends a share request</a>, the snapshot is replaced with an updated version that corresponds with the latest version of the custom framework. </p> <p>When a recipient accepts a share request, the snapshot is replicated into their Amazon Web Services account under the Amazon Web Services Region that was specified in the share request. </p> <important> <p>When you invoke the <code>StartAssessmentFrameworkShare</code> API, you are about to share a custom framework with another Amazon Web Services account. You may not share a custom framework that is derived from a standard framework if the standard framework is designated as not eligible for sharing by Amazon Web Services, unless you have obtained permission to do so from the owner of the standard framework. To learn more about which standard frameworks are eligible for sharing, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/share-custom-framework-concepts-and-terminology.html#eligibility">Framework sharing eligibility</a> in the <i>Audit Manager User Guide</i>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartAssessmentFrameworkShareRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartAssessmentFrameworkShareRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartAssessmentFrameworkShareRequest();
    $request->requestBody = new StartAssessmentFrameworkShareRequestBody();
    $request->requestBody->comment = 'dolorem';
    $request->requestBody->destinationAccount = 'dolore';
    $request->requestBody->destinationRegion = 'labore';
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'itaque';
    $request->frameworkId = 'consequatur';

    $response = $sdk->sdk->startAssessmentFrameworkShare($request);

    if ($response->startAssessmentFrameworkShareResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

 Tags the specified resource in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'repellendus' => 'porro',
        'doloribus' => 'ut',
        'facilis' => 'cupiditate',
    ];
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'quisquam';
    $request->resourceArn = 'vero';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

 Removes a tag from a resource in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'vero';
    $request->resourceArn = 'tenetur';
    $request->tagKeys = [
        'hic',
        'distinctio',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAssessment

 Edits an Audit Manager assessment. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssessmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssessmentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssessmentRequestBodyAssessmentReportsDestination;
use \OpenAPI\OpenAPI\Models\Shared\AssessmentReportDestinationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Role;
use \OpenAPI\OpenAPI\Models\Shared\RoleTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssessmentRequestBodyScope;
use \OpenAPI\OpenAPI\Models\Shared\AWSAccount;
use \OpenAPI\OpenAPI\Models\Shared\AWSService;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAssessmentRequest();
    $request->requestBody = new UpdateAssessmentRequestBody();
    $request->requestBody->assessmentDescription = 'quod';
    $request->requestBody->assessmentName = 'odio';
    $request->requestBody->assessmentReportsDestination = new UpdateAssessmentRequestBodyAssessmentReportsDestination();
    $request->requestBody->assessmentReportsDestination->destination = 'similique';
    $request->requestBody->assessmentReportsDestination->destinationType = AssessmentReportDestinationTypeEnum::S3;
    $request->requestBody->roles = [
        new Role(),
        new Role(),
        new Role(),
    ];
    $request->requestBody->scope = new UpdateAssessmentRequestBodyScope();
    $request->requestBody->scope->awsAccounts = [
        new AWSAccount(),
        new AWSAccount(),
        new AWSAccount(),
        new AWSAccount(),
    ];
    $request->requestBody->scope->awsServices = [
        new AWSService(),
        new AWSService(),
    ];
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'aut';
    $request->assessmentId = 'voluptatibus';

    $response = $sdk->sdk->updateAssessment($request);

    if ($response->updateAssessmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAssessmentControl

 Updates a control within an assessment in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssessmentControlRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssessmentControlRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssessmentControlRequestBodyControlStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAssessmentControlRequest();
    $request->requestBody = new UpdateAssessmentControlRequestBody();
    $request->requestBody->commentBody = 'exercitationem';
    $request->requestBody->controlStatus = UpdateAssessmentControlRequestBodyControlStatusEnum::INACTIVE;
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'ducimus';
    $request->assessmentId = 'alias';
    $request->controlId = 'officia';
    $request->controlSetId = 'tempora';

    $response = $sdk->sdk->updateAssessmentControl($request);

    if ($response->updateAssessmentControlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAssessmentControlSetStatus

 Updates the status of a control set in an Audit Manager assessment. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssessmentControlSetStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssessmentControlSetStatusRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssessmentControlSetStatusRequestBodyStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAssessmentControlSetStatusRequest();
    $request->requestBody = new UpdateAssessmentControlSetStatusRequestBody();
    $request->requestBody->comment = 'ipsam';
    $request->requestBody->status = UpdateAssessmentControlSetStatusRequestBodyStatusEnum::UNDER_REVIEW;
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'ratione';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'laudantium';
    $request->assessmentId = 'dicta';
    $request->controlSetId = 'dolor';

    $response = $sdk->sdk->updateAssessmentControlSetStatus($request);

    if ($response->updateAssessmentControlSetStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAssessmentFramework

 Updates a custom framework in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssessmentFrameworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssessmentFrameworkRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAssessmentFrameworkControlSet;
use \OpenAPI\OpenAPI\Models\Shared\CreateAssessmentFrameworkControl;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAssessmentFrameworkRequest();
    $request->requestBody = new UpdateAssessmentFrameworkRequestBody();
    $request->requestBody->complianceType = 'maiores';
    $request->requestBody->controlSets = [
        new UpdateAssessmentFrameworkControlSet(),
    ];
    $request->requestBody->description = 'ex';
    $request->requestBody->name = 'Marshall Wiza';
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'veniam';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->frameworkId = 'inventore';

    $response = $sdk->sdk->updateAssessmentFramework($request);

    if ($response->updateAssessmentFrameworkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAssessmentFrameworkShare

 Updates a share request for a custom framework in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssessmentFrameworkShareRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssessmentFrameworkShareRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssessmentFrameworkShareRequestBodyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssessmentFrameworkShareRequestBodyRequestTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAssessmentFrameworkShareRequest();
    $request->requestBody = new UpdateAssessmentFrameworkShareRequestBody();
    $request->requestBody->action = UpdateAssessmentFrameworkShareRequestBodyActionEnum::ACCEPT;
    $request->requestBody->requestType = UpdateAssessmentFrameworkShareRequestBodyRequestTypeEnum::SENT;
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'a';
    $request->requestId = 'libero';

    $response = $sdk->sdk->updateAssessmentFrameworkShare($request);

    if ($response->updateAssessmentFrameworkShareResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAssessmentStatus

 Updates the status of an assessment in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssessmentStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssessmentStatusRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAssessmentStatusRequestBodyStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAssessmentStatusRequest();
    $request->requestBody = new UpdateAssessmentStatusRequestBody();
    $request->requestBody->status = UpdateAssessmentStatusRequestBodyStatusEnum::ACTIVE;
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'aliquam';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'inventore';
    $request->assessmentId = 'non';

    $response = $sdk->sdk->updateAssessmentStatus($request);

    if ($response->updateAssessmentStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateControl

 Updates a custom control in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateControlRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateControlRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ControlMappingSource;
use \OpenAPI\OpenAPI\Models\Shared\SourceFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceKeyword;
use \OpenAPI\OpenAPI\Models\Shared\KeywordInputTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceSetUpOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateControlRequest();
    $request->requestBody = new UpdateControlRequestBody();
    $request->requestBody->actionPlanInstructions = 'et';
    $request->requestBody->actionPlanTitle = 'dolorum';
    $request->requestBody->controlMappingSources = [
        new ControlMappingSource(),
        new ControlMappingSource(),
        new ControlMappingSource(),
    ];
    $request->requestBody->description = 'placeat';
    $request->requestBody->name = 'Agnes Johnston';
    $request->requestBody->testingInformation = 'assumenda';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->controlId = 'provident';

    $response = $sdk->sdk->updateControl($request);

    if ($response->updateControlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSettings

 Updates Audit Manager settings for the current account. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSettingsRequestBodyDefaultAssessmentReportsDestination;
use \OpenAPI\OpenAPI\Models\Shared\AssessmentReportDestinationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Role;
use \OpenAPI\OpenAPI\Models\Shared\RoleTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSettingsRequestBodyDeregistrationPolicy;
use \OpenAPI\OpenAPI\Models\Shared\DeleteResourcesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSettingsRequest();
    $request->requestBody = new UpdateSettingsRequestBody();
    $request->requestBody->defaultAssessmentReportsDestination = new UpdateSettingsRequestBodyDefaultAssessmentReportsDestination();
    $request->requestBody->defaultAssessmentReportsDestination->destination = 'ipsa';
    $request->requestBody->defaultAssessmentReportsDestination->destinationType = AssessmentReportDestinationTypeEnum::S3;
    $request->requestBody->defaultProcessOwners = [
        new Role(),
        new Role(),
    ];
    $request->requestBody->deregistrationPolicy = new UpdateSettingsRequestBodyDeregistrationPolicy();
    $request->requestBody->deregistrationPolicy->deleteResources = DeleteResourcesEnum::ALL;
    $request->requestBody->evidenceFinderEnabled = false;
    $request->requestBody->kmsKey = 'odio';
    $request->requestBody->snsTopic = 'eius';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'rem';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'fugiat';

    $response = $sdk->sdk->updateSettings($request);

    if ($response->updateSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## validateAssessmentReportIntegrity

 Validates the integrity of an assessment report in Audit Manager. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ValidateAssessmentReportIntegrityRequest;
use \OpenAPI\OpenAPI\Models\Operations\ValidateAssessmentReportIntegrityRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ValidateAssessmentReportIntegrityRequest();
    $request->requestBody = new ValidateAssessmentReportIntegrityRequestBody();
    $request->requestBody->s3RelativePath = 'ut';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'veritatis';

    $response = $sdk->sdk->validateAssessmentReportIntegrity($request);

    if ($response->validateAssessmentReportIntegrityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
