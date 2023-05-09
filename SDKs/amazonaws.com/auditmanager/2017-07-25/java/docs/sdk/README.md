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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateAssessmentReportEvidenceFolderRequest;
import org.openapis.openapi.models.operations.AssociateAssessmentReportEvidenceFolderRequestBody;
import org.openapis.openapi.models.operations.AssociateAssessmentReportEvidenceFolderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateAssessmentReportEvidenceFolderRequest req = new AssociateAssessmentReportEvidenceFolderRequest(                new AssociateAssessmentReportEvidenceFolderRequestBody("suscipit");, "iure") {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            AssociateAssessmentReportEvidenceFolderResponse res = sdk.sdk.associateAssessmentReportEvidenceFolder(req);

            if (res.associateAssessmentReportEvidenceFolderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchAssociateAssessmentReportEvidence

 Associates a list of evidence to an assessment report in an Audit Manager assessment. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchAssociateAssessmentReportEvidenceRequest;
import org.openapis.openapi.models.operations.BatchAssociateAssessmentReportEvidenceRequestBody;
import org.openapis.openapi.models.operations.BatchAssociateAssessmentReportEvidenceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchAssociateAssessmentReportEvidenceRequest req = new BatchAssociateAssessmentReportEvidenceRequest(                new BatchAssociateAssessmentReportEvidenceRequestBody("placeat",                 new String[]{{
                                                add("iusto"),
                                                add("excepturi"),
                                                add("nisi"),
                                            }});, "recusandae") {{
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "ab";
                xAmzCredential = "quis";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "ipsam";
            }};            

            BatchAssociateAssessmentReportEvidenceResponse res = sdk.sdk.batchAssociateAssessmentReportEvidence(req);

            if (res.batchAssociateAssessmentReportEvidenceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchCreateDelegationByAssessment

 Creates a batch of delegations for an assessment in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchCreateDelegationByAssessmentRequest;
import org.openapis.openapi.models.operations.BatchCreateDelegationByAssessmentRequestBody;
import org.openapis.openapi.models.operations.BatchCreateDelegationByAssessmentResponse;
import org.openapis.openapi.models.shared.CreateDelegationRequest;
import org.openapis.openapi.models.shared.RoleTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchCreateDelegationByAssessmentRequest req = new BatchCreateDelegationByAssessmentRequest(                new BatchCreateDelegationByAssessmentRequestBody(                new org.openapis.openapi.models.shared.CreateDelegationRequest[]{{
                                                add(new CreateDelegationRequest() {{
                                                    comment = "quo";
                                                    controlSetId = "odit";
                                                    roleArn = "at";
                                                    roleType = RoleTypeEnum.RESOURCE_OWNER;
                                                }}),
                                                add(new CreateDelegationRequest() {{
                                                    comment = "maiores";
                                                    controlSetId = "molestiae";
                                                    roleArn = "quod";
                                                    roleType = RoleTypeEnum.RESOURCE_OWNER;
                                                }}),
                                                add(new CreateDelegationRequest() {{
                                                    comment = "esse";
                                                    controlSetId = "totam";
                                                    roleArn = "porro";
                                                    roleType = RoleTypeEnum.RESOURCE_OWNER;
                                                }}),
                                                add(new CreateDelegationRequest() {{
                                                    comment = "dicta";
                                                    controlSetId = "nam";
                                                    roleArn = "officia";
                                                    roleType = RoleTypeEnum.RESOURCE_OWNER;
                                                }}),
                                            }});, "fugit") {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "hic";
                xAmzCredential = "optio";
                xAmzDate = "totam";
                xAmzSecurityToken = "beatae";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "molestiae";
            }};            

            BatchCreateDelegationByAssessmentResponse res = sdk.sdk.batchCreateDelegationByAssessment(req);

            if (res.batchCreateDelegationByAssessmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDeleteDelegationByAssessment

 Deletes a batch of delegations for an assessment in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDeleteDelegationByAssessmentRequest;
import org.openapis.openapi.models.operations.BatchDeleteDelegationByAssessmentRequestBody;
import org.openapis.openapi.models.operations.BatchDeleteDelegationByAssessmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDeleteDelegationByAssessmentRequest req = new BatchDeleteDelegationByAssessmentRequest(                new BatchDeleteDelegationByAssessmentRequestBody(                new String[]{{
                                                add("impedit"),
                                            }});, "cum") {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "excepturi";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "natus";
            }};            

            BatchDeleteDelegationByAssessmentResponse res = sdk.sdk.batchDeleteDelegationByAssessment(req);

            if (res.batchDeleteDelegationByAssessmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDisassociateAssessmentReportEvidence

 Disassociates a list of evidence from an assessment report in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDisassociateAssessmentReportEvidenceRequest;
import org.openapis.openapi.models.operations.BatchDisassociateAssessmentReportEvidenceRequestBody;
import org.openapis.openapi.models.operations.BatchDisassociateAssessmentReportEvidenceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDisassociateAssessmentReportEvidenceRequest req = new BatchDisassociateAssessmentReportEvidenceRequest(                new BatchDisassociateAssessmentReportEvidenceRequestBody("iste",                 new String[]{{
                                                add("natus"),
                                            }});, "laboriosam") {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "fuga";
                xAmzDate = "in";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "iure";
            }};            

            BatchDisassociateAssessmentReportEvidenceResponse res = sdk.sdk.batchDisassociateAssessmentReportEvidence(req);

            if (res.batchDisassociateAssessmentReportEvidenceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchImportEvidenceToAssessmentControl

<p>Uploads one or more pieces of evidence to a control in an Audit Manager assessment. You can upload manual evidence from any Amazon Simple Storage Service (Amazon S3) bucket by specifying the S3 URI of the evidence. </p> <p>You must upload manual evidence to your S3 bucket before you can upload it to your assessment. For instructions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> in the <i>Amazon Simple Storage Service API Reference.</i> </p> <p>The following restrictions apply to this action:</p> <ul> <li> <p>Maximum size of an individual evidence file: 100 MB</p> </li> <li> <p>Number of daily manual evidence uploads per control: 100</p> </li> <li> <p>Supported file formats: See <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#supported-manual-evidence-files">Supported file types for manual evidence</a> in the <i>Audit Manager User Guide</i> </p> </li> </ul> <p>For more information about Audit Manager service restrictions, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/service-quotas.html">Quotas and restrictions for Audit Manager</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchImportEvidenceToAssessmentControlRequest;
import org.openapis.openapi.models.operations.BatchImportEvidenceToAssessmentControlRequestBody;
import org.openapis.openapi.models.operations.BatchImportEvidenceToAssessmentControlResponse;
import org.openapis.openapi.models.shared.ManualEvidence;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchImportEvidenceToAssessmentControlRequest req = new BatchImportEvidenceToAssessmentControlRequest(                new BatchImportEvidenceToAssessmentControlRequestBody(                new org.openapis.openapi.models.shared.ManualEvidence[]{{
                                                add(new ManualEvidence() {{
                                                    s3ResourcePath = "architecto";
                                                }}),
                                                add(new ManualEvidence() {{
                                                    s3ResourcePath = "ipsa";
                                                }}),
                                                add(new ManualEvidence() {{
                                                    s3ResourcePath = "reiciendis";
                                                }}),
                                            }});, "est", "mollitia", "laborum") {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "corporis";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "omnis";
            }};            

            BatchImportEvidenceToAssessmentControlResponse res = sdk.sdk.batchImportEvidenceToAssessmentControl(req);

            if (res.batchImportEvidenceToAssessmentControlResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAssessment

 Creates an assessment in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAssessmentRequest;
import org.openapis.openapi.models.operations.CreateAssessmentRequestBody;
import org.openapis.openapi.models.operations.CreateAssessmentRequestBodyAssessmentReportsDestination;
import org.openapis.openapi.models.operations.CreateAssessmentRequestBodyScope;
import org.openapis.openapi.models.operations.CreateAssessmentResponse;
import org.openapis.openapi.models.shared.AWSAccount;
import org.openapis.openapi.models.shared.AWSService;
import org.openapis.openapi.models.shared.AssessmentReportDestinationTypeEnum;
import org.openapis.openapi.models.shared.Role;
import org.openapis.openapi.models.shared.RoleTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAssessmentRequest req = new CreateAssessmentRequest(                new CreateAssessmentRequestBody(                new CreateAssessmentRequestBodyAssessmentReportsDestination() {{
                                                destination = "minima";
                                                destinationType = AssessmentReportDestinationTypeEnum.S3;
                                            }};, "excepturi", "accusantium",                 new org.openapis.openapi.models.shared.Role[]{{
                                                add(new Role("sapiente", RoleTypeEnum.PROCESS_OWNER) {{
                                                    roleArn = "culpa";
                                                    roleType = RoleTypeEnum.RESOURCE_OWNER;
                                                }}),
                                                add(new Role("culpa", RoleTypeEnum.PROCESS_OWNER) {{
                                                    roleArn = "mollitia";
                                                    roleType = RoleTypeEnum.PROCESS_OWNER;
                                                }}),
                                            }},                 new CreateAssessmentRequestBodyScope() {{
                                                awsAccounts = new org.openapis.openapi.models.shared.AWSAccount[]{{
                                                    add(new AWSAccount() {{
                                                        emailAddress = "mollitia";
                                                        id = "94677392-51aa-452c-bf5a-d019da1ffe78";
                                                        name = "Jose Moen";
                                                    }}),
                                                    add(new AWSAccount() {{
                                                        emailAddress = "perferendis";
                                                        id = "074f1547-1b5e-46e1-bb99-d488e1e91e45";
                                                        name = "Monique Spinka";
                                                    }}),
                                                    add(new AWSAccount() {{
                                                        emailAddress = "distinctio";
                                                        id = "d4426980-2d50-42a9-8bb4-f63c969e9a3e";
                                                        name = "Wilbur King";
                                                    }}),
                                                    add(new AWSAccount() {{
                                                        emailAddress = "maiores";
                                                        id = "b14cd66a-e395-4efb-9ba8-8f3a66997074";
                                                        name = "Alfonso Green";
                                                    }}),
                                                }};
                                                awsServices = new org.openapis.openapi.models.shared.AWSService[]{{
                                                    add(new AWSService() {{
                                                        serviceName = "nobis";
                                                    }}),
                                                    add(new AWSService() {{
                                                        serviceName = "eum";
                                                    }}),
                                                    add(new AWSService() {{
                                                        serviceName = "vero";
                                                    }}),
                                                }};
                                            }};) {{
                                description = "aspernatur";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("magnam", "et");
                                }};
                            }};) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "provident";
                xAmzDate = "quos";
                xAmzSecurityToken = "sint";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "mollitia";
            }};            

            CreateAssessmentResponse res = sdk.sdk.createAssessment(req);

            if (res.createAssessmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAssessmentFramework

 Creates a custom framework in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAssessmentFrameworkRequest;
import org.openapis.openapi.models.operations.CreateAssessmentFrameworkRequestBody;
import org.openapis.openapi.models.operations.CreateAssessmentFrameworkResponse;
import org.openapis.openapi.models.shared.CreateAssessmentFrameworkControl;
import org.openapis.openapi.models.shared.CreateAssessmentFrameworkControlSet;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAssessmentFrameworkRequest req = new CreateAssessmentFrameworkRequest(                new CreateAssessmentFrameworkRequestBody(                new org.openapis.openapi.models.shared.CreateAssessmentFrameworkControlSet[]{{
                                                add(new CreateAssessmentFrameworkControlSet("minus") {{
                                                    controls = new org.openapis.openapi.models.shared.CreateAssessmentFrameworkControl[]{{
                                                        add(new CreateAssessmentFrameworkControl("quo") {{
                                                            id = "63e2516f-e4c8-4b71-9e5b-7fd2ed028921";
                                                        }}),
                                                        add(new CreateAssessmentFrameworkControl("dignissimos") {{
                                                            id = "ddc69260-1fb5-476b-8d5f-0d30c5fbb258";
                                                        }}),
                                                    }};
                                                    name = "Beatrice Dooley Sr.";
                                                }}),
                                                add(new CreateAssessmentFrameworkControlSet("distinctio") {{
                                                    controls = new org.openapis.openapi.models.shared.CreateAssessmentFrameworkControl[]{{
                                                        add(new CreateAssessmentFrameworkControl("dolorem") {{
                                                            id = "3d5fe9b9-0c28-4909-b3fe-49a8d9cbf486";
                                                        }}),
                                                        add(new CreateAssessmentFrameworkControl("iusto") {{
                                                            id = "3323f9b7-7f3a-4410-8674-ebf69280d1ba";
                                                        }}),
                                                    }};
                                                    name = "Sonya Leuschke";
                                                }}),
                                                add(new CreateAssessmentFrameworkControlSet("quod") {{
                                                    controls = new org.openapis.openapi.models.shared.CreateAssessmentFrameworkControl[]{{
                                                        add(new CreateAssessmentFrameworkControl("harum") {{
                                                            id = "737ae420-3ce5-4e6a-95d8-a0d446ce2af7";
                                                        }}),
                                                        add(new CreateAssessmentFrameworkControl("totam") {{
                                                            id = "73cf3be4-53f8-470b-b26b-5a73429cdb1a";
                                                        }}),
                                                        add(new CreateAssessmentFrameworkControl("delectus") {{
                                                            id = "422bb679-d232-4271-9bf0-cbb1e31b8b90";
                                                        }}),
                                                        add(new CreateAssessmentFrameworkControl("consectetur") {{
                                                            id = "3443a110-8e0a-4dcf-8b92-1879fce953f7";
                                                        }}),
                                                    }};
                                                    name = "Roman Kulas";
                                                }}),
                                            }}, "odio") {{
                                complianceType = "similique";
                                description = "facilis";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("ducimus", "dolore");
                                    put("quibusdam", "illum");
                                    put("sequi", "natus");
                                    put("impedit", "aut");
                                }};
                            }};) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "nulla";
                xAmzDate = "fugit";
                xAmzSecurityToken = "porro";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "doloribus";
            }};            

            CreateAssessmentFrameworkResponse res = sdk.sdk.createAssessmentFramework(req);

            if (res.createAssessmentFrameworkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAssessmentReport

 Creates an assessment report for the specified assessment. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAssessmentReportRequest;
import org.openapis.openapi.models.operations.CreateAssessmentReportRequestBody;
import org.openapis.openapi.models.operations.CreateAssessmentReportResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAssessmentReportRequest req = new CreateAssessmentReportRequest(                new CreateAssessmentReportRequestBody("eligendi") {{
                                description = "ducimus";
                                queryStatement = "alias";
                            }};, "officia") {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "ea";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "vel";
                xAmzSignature = "possimus";
                xAmzSignedHeaders = "magnam";
            }};            

            CreateAssessmentReportResponse res = sdk.sdk.createAssessmentReport(req);

            if (res.createAssessmentReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createControl

 Creates a new custom control in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateControlRequest;
import org.openapis.openapi.models.operations.CreateControlRequestBody;
import org.openapis.openapi.models.operations.CreateControlResponse;
import org.openapis.openapi.models.shared.CreateControlMappingSource;
import org.openapis.openapi.models.shared.KeywordInputTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceFrequencyEnum;
import org.openapis.openapi.models.shared.SourceKeyword;
import org.openapis.openapi.models.shared.SourceSetUpOptionEnum;
import org.openapis.openapi.models.shared.SourceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateControlRequest req = new CreateControlRequest(                new CreateControlRequestBody(                new org.openapis.openapi.models.shared.CreateControlMappingSource[]{{
                                                add(new CreateControlMappingSource() {{
                                                    sourceDescription = "laudantium";
                                                    sourceFrequency = SourceFrequencyEnum.DAILY;
                                                    sourceKeyword = new SourceKeyword() {{
                                                        keywordInputType = KeywordInputTypeEnum.SELECT_FROM_LIST;
                                                        keywordValue = "dolor";
                                                    }};
                                                    sourceName = "maiores";
                                                    sourceSetUpOption = SourceSetUpOptionEnum.SYSTEM_CONTROLS_MAPPING;
                                                    sourceType = SourceTypeEnum.AWS_SECURITY_HUB;
                                                    troubleshootingText = "nulla";
                                                }}),
                                                add(new CreateControlMappingSource() {{
                                                    sourceDescription = "excepturi";
                                                    sourceFrequency = SourceFrequencyEnum.MONTHLY;
                                                    sourceKeyword = new SourceKeyword() {{
                                                        keywordInputType = KeywordInputTypeEnum.SELECT_FROM_LIST;
                                                        keywordValue = "nostrum";
                                                    }};
                                                    sourceName = "sapiente";
                                                    sourceSetUpOption = SourceSetUpOptionEnum.PROCEDURAL_CONTROLS_MAPPING;
                                                    sourceType = SourceTypeEnum.MANUAL;
                                                    troubleshootingText = "ea";
                                                }}),
                                            }}, "impedit") {{
                                actionPlanInstructions = "corporis";
                                actionPlanTitle = "veniam";
                                description = "aliquid";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("magnam", "ea");
                                }};
                                testingInformation = "quo";
                            }};) {{
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "aspernatur";
                xAmzDate = "minima";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "a";
                xAmzSignedHeaders = "libero";
            }};            

            CreateControlResponse res = sdk.sdk.createControl(req);

            if (res.createControlResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAssessment

 Deletes an assessment in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAssessmentRequest;
import org.openapis.openapi.models.operations.DeleteAssessmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAssessmentRequest req = new DeleteAssessmentRequest("aut") {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "aliquam";
                xAmzDate = "fugit";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "non";
            }};            

            DeleteAssessmentResponse res = sdk.sdk.deleteAssessment(req);

            if (res.deleteAssessmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAssessmentFramework

 Deletes a custom framework in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAssessmentFrameworkRequest;
import org.openapis.openapi.models.operations.DeleteAssessmentFrameworkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAssessmentFrameworkRequest req = new DeleteAssessmentFrameworkRequest("dolorum") {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "velit";
                xAmzDate = "eum";
                xAmzSecurityToken = "autem";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "quas";
            }};            

            DeleteAssessmentFrameworkResponse res = sdk.sdk.deleteAssessmentFramework(req);

            if (res.deleteAssessmentFrameworkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAssessmentFrameworkShare

 Deletes a share request for a custom framework in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAssessmentFrameworkShareRequest;
import org.openapis.openapi.models.operations.DeleteAssessmentFrameworkShareRequestTypeEnum;
import org.openapis.openapi.models.operations.DeleteAssessmentFrameworkShareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAssessmentFrameworkShareRequest req = new DeleteAssessmentFrameworkShareRequest("nulla", DeleteAssessmentFrameworkShareRequestTypeEnum.SENT) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "tempora";
                xAmzDate = "numquam";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "ipsa";
            }};            

            DeleteAssessmentFrameworkShareResponse res = sdk.sdk.deleteAssessmentFrameworkShare(req);

            if (res.deleteAssessmentFrameworkShareResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAssessmentReport

<p>Deletes an assessment report in Audit Manager. </p> <p>When you run the <code>DeleteAssessmentReport</code> operation, Audit Manager attempts to delete the following data:</p> <ol> <li> <p>The specified assessment report that’s stored in your S3 bucket</p> </li> <li> <p>The associated metadata that’s stored in Audit Manager</p> </li> </ol> <p>If Audit Manager can’t access the assessment report in your S3 bucket, the report isn’t deleted. In this event, the <code>DeleteAssessmentReport</code> operation doesn’t fail. Instead, it proceeds to delete the associated metadata only. You must then delete the assessment report from the S3 bucket yourself. </p> <p>This scenario happens when Audit Manager receives a <code>403 (Forbidden)</code> or <code>404 (Not Found)</code> error from Amazon S3. To avoid this, make sure that your S3 bucket is available, and that you configured the correct permissions for Audit Manager to delete resources in your S3 bucket. For an example permissions policy that you can use, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/security_iam_id-based-policy-examples.html#full-administrator-access-assessment-report-destination">Assessment report destination permissions</a> in the <i>Audit Manager User Guide</i>. For information about the issues that could cause a <code>403 (Forbidden)</code> or <code>404 (Not Found</code>) error from Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a> in the <i>Amazon Simple Storage Service API Reference</i>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAssessmentReportRequest;
import org.openapis.openapi.models.operations.DeleteAssessmentReportResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAssessmentReportRequest req = new DeleteAssessmentReportRequest("magnam", "odio") {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "esse";
                xAmzCredential = "esse";
                xAmzDate = "rem";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "quidem";
            }};            

            DeleteAssessmentReportResponse res = sdk.sdk.deleteAssessmentReport(req);

            if (res.deleteAssessmentReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteControl

 Deletes a custom control in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteControlRequest;
import org.openapis.openapi.models.operations.DeleteControlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteControlRequest req = new DeleteControlRequest("ut") {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "assumenda";
                xAmzDate = "eos";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "veritatis";
            }};            

            DeleteControlResponse res = sdk.sdk.deleteControl(req);

            if (res.deleteControlResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterAccount

<p> Deregisters an account in Audit Manager. </p> <note> <p>Before you deregister, you can use the <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateSettings.html">UpdateSettings</a> API operation to set your preferred data retention policy. By default, Audit Manager retains your data. If you want to delete your data, you can use the <code>DeregistrationPolicy</code> attribute to request the deletion of your data. </p> <p>For more information about data retention, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/data-protection.html">Data Protection</a> in the <i>Audit Manager User Guide</i>. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterAccountRequest;
import org.openapis.openapi.models.operations.DeregisterAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterAccountRequest req = new DeregisterAccountRequest() {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "neque";
                xAmzDate = "quo";
                xAmzSecurityToken = "illum";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "fuga";
            }};            

            DeregisterAccountResponse res = sdk.sdk.deregisterAccount(req);

            if (res.deregisterAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterOrganizationAdminAccount

<p>Removes the specified Amazon Web Services account as a delegated administrator for Audit Manager. </p> <p>When you remove a delegated administrator from your Audit Manager settings, you continue to have access to the evidence that you previously collected under that account. This is also the case when you deregister a delegated administrator from Organizations. However, Audit Manager stops collecting and attaching evidence to that delegated administrator account moving forward.</p> <important> <p>Keep in mind the following cleanup task if you use evidence finder:</p> <p>Before you use your management account to remove a delegated administrator, make sure that the current delegated administrator account signs in to Audit Manager and disables evidence finder first. Disabling evidence finder automatically deletes the event data store that was created in their account when they enabled evidence finder. If this task isn’t completed, the event data store remains in their account. In this case, we recommend that the original delegated administrator goes to CloudTrail Lake and manually <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-eds-disable-termination.html">deletes the event data store</a>.</p> <p>This cleanup task is necessary to ensure that you don't end up with multiple event data stores. Audit Manager ignores an unused event data store after you remove or change a delegated administrator account. However, the unused event data store continues to incur storage costs from CloudTrail Lake if you don't delete it.</p> </important> <p>When you deregister a delegated administrator account for Audit Manager, the data for that account isn’t deleted. If you want to delete resource data for a delegated administrator account, you must perform that task separately before you deregister the account. Either, you can do this in the Audit Manager console. Or, you can use one of the delete API operations that are provided by Audit Manager. </p> <p>To delete your Audit Manager resource data, see the following instructions: </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessment.html">DeleteAssessment</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-assessment.html">Deleting an assessment</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFramework.html">DeleteAssessmentFramework</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-custom-framework.html">Deleting a custom framework</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFrameworkShare.html">DeleteAssessmentFrameworkShare</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/deleting-shared-framework-requests.html">Deleting a share request</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentReport.html">DeleteAssessmentReport</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/generate-assessment-report.html#delete-assessment-report-steps">Deleting an assessment report</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteControl.html">DeleteControl</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-controls.html">Deleting a custom control</a> in the <i>Audit Manager User Guide</i>)</p> </li> </ul> <p>At this time, Audit Manager doesn't provide an option to delete evidence for a specific delegated administrator. Instead, when your management account deregisters Audit Manager, we perform a cleanup for the current delegated administrator account at the time of deregistration.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterOrganizationAdminAccountRequest;
import org.openapis.openapi.models.operations.DeregisterOrganizationAdminAccountRequestBody;
import org.openapis.openapi.models.operations.DeregisterOrganizationAdminAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterOrganizationAdminAccountRequest req = new DeregisterOrganizationAdminAccountRequest(                new DeregisterOrganizationAdminAccountRequestBody() {{
                                adminAccountId = "eos";
                            }};) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "ab";
                xAmzCredential = "cupiditate";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "ipsam";
            }};            

            DeregisterOrganizationAdminAccountResponse res = sdk.sdk.deregisterOrganizationAdminAccount(req);

            if (res.deregisterOrganizationAdminAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateAssessmentReportEvidenceFolder

 Disassociates an evidence folder from the specified assessment report in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateAssessmentReportEvidenceFolderRequest;
import org.openapis.openapi.models.operations.DisassociateAssessmentReportEvidenceFolderRequestBody;
import org.openapis.openapi.models.operations.DisassociateAssessmentReportEvidenceFolderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateAssessmentReportEvidenceFolderRequest req = new DisassociateAssessmentReportEvidenceFolderRequest(                new DisassociateAssessmentReportEvidenceFolderRequestBody("sequi");, "quo") {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "aperiam";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "quod";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "inventore";
            }};            

            DisassociateAssessmentReportEvidenceFolderResponse res = sdk.sdk.disassociateAssessmentReportEvidenceFolder(req);

            if (res.disassociateAssessmentReportEvidenceFolderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountStatus

 Returns the registration status of an account in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountStatusRequest;
import org.openapis.openapi.models.operations.GetAccountStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccountStatusRequest req = new GetAccountStatusRequest() {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "aliquam";
                xAmzDate = "odio";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "sapiente";
            }};            

            GetAccountStatusResponse res = sdk.sdk.getAccountStatus(req);

            if (res.getAccountStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssessment

Returns an assessment from Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssessmentRequest;
import org.openapis.openapi.models.operations.GetAssessmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAssessmentRequest req = new GetAssessmentRequest("deserunt") {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "porro";
                xAmzDate = "eum";
                xAmzSecurityToken = "quas";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "consequuntur";
            }};            

            GetAssessmentResponse res = sdk.sdk.getAssessment(req);

            if (res.getAssessmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssessmentFramework

Returns a framework from Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssessmentFrameworkRequest;
import org.openapis.openapi.models.operations.GetAssessmentFrameworkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAssessmentFrameworkRequest req = new GetAssessmentFrameworkRequest("fugit") {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "incidunt";
                xAmzDate = "atque";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "nisi";
            }};            

            GetAssessmentFrameworkResponse res = sdk.sdk.getAssessmentFramework(req);

            if (res.getAssessmentFrameworkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssessmentReportUrl

 Returns the URL of an assessment report in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssessmentReportUrlRequest;
import org.openapis.openapi.models.operations.GetAssessmentReportUrlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAssessmentReportUrlRequest req = new GetAssessmentReportUrlRequest("sapiente", "consequuntur") {{
                xAmzAlgorithm = "ratione";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "saepe";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "atque";
                xAmzSignature = "et";
                xAmzSignedHeaders = "esse";
            }};            

            GetAssessmentReportUrlResponse res = sdk.sdk.getAssessmentReportUrl(req);

            if (res.getAssessmentReportUrlResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChangeLogs

 Returns a list of changelogs from Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChangeLogsRequest;
import org.openapis.openapi.models.operations.GetChangeLogsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetChangeLogsRequest req = new GetChangeLogsRequest("accusamus") {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "esse";
                xAmzCredential = "quod";
                xAmzDate = "nam";
                xAmzSecurityToken = "vero";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "quasi";
                controlId = "saepe";
                controlSetId = "vel";
                maxResults = 690025L;
                nextToken = "molestiae";
            }};            

            GetChangeLogsResponse res = sdk.sdk.getChangeLogs(req);

            if (res.getChangeLogsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getControl

 Returns a control from Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetControlRequest;
import org.openapis.openapi.models.operations.GetControlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetControlRequest req = new GetControlRequest("occaecati") {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "eligendi";
                xAmzDate = "sit";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "adipisci";
            }};            

            GetControlResponse res = sdk.sdk.getControl(req);

            if (res.getControlResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDelegations

 Returns a list of delegations from an audit owner to a delegate. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDelegationsRequest;
import org.openapis.openapi.models.operations.GetDelegationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDelegationsRequest req = new GetDelegationsRequest() {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "minus";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "esse";
                maxResults = 503427L;
                nextToken = "provident";
            }};            

            GetDelegationsResponse res = sdk.sdk.getDelegations(req);

            if (res.getDelegationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEvidence

 Returns evidence from Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEvidenceRequest;
import org.openapis.openapi.models.operations.GetEvidenceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEvidenceRequest req = new GetEvidenceRequest("nulla", "quas", "esse", "quasi") {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "error";
                xAmzCredential = "sint";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "quia";
                xAmzSignedHeaders = "eveniet";
            }};            

            GetEvidenceResponse res = sdk.sdk.getEvidence(req);

            if (res.getEvidenceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEvidenceByEvidenceFolder

 Returns all evidence from a specified evidence folder in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEvidenceByEvidenceFolderRequest;
import org.openapis.openapi.models.operations.GetEvidenceByEvidenceFolderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEvidenceByEvidenceFolderRequest req = new GetEvidenceByEvidenceFolderRequest("facere", "veritatis", "consequuntur") {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "similique";
                xAmzCredential = "culpa";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "earum";
                maxResults = 424032L;
                nextToken = "in";
            }};            

            GetEvidenceByEvidenceFolderResponse res = sdk.sdk.getEvidenceByEvidenceFolder(req);

            if (res.getEvidenceByEvidenceFolderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEvidenceFolder

 Returns an evidence folder from the specified assessment in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEvidenceFolderRequest;
import org.openapis.openapi.models.operations.GetEvidenceFolderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEvidenceFolderRequest req = new GetEvidenceFolderRequest("libero", "illum", "soluta") {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "aliquam";
                xAmzCredential = "sapiente";
                xAmzDate = "dicta";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "ullam";
            }};            

            GetEvidenceFolderResponse res = sdk.sdk.getEvidenceFolder(req);

            if (res.getEvidenceFolderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEvidenceFoldersByAssessment

 Returns the evidence folders from a specified assessment in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEvidenceFoldersByAssessmentRequest;
import org.openapis.openapi.models.operations.GetEvidenceFoldersByAssessmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEvidenceFoldersByAssessmentRequest req = new GetEvidenceFoldersByAssessmentRequest("aut") {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "qui";
                xAmzCredential = "quibusdam";
                xAmzDate = "ex";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "dolorum";
                maxResults = 99615L;
                nextToken = "omnis";
            }};            

            GetEvidenceFoldersByAssessmentResponse res = sdk.sdk.getEvidenceFoldersByAssessment(req);

            if (res.getEvidenceFoldersByAssessmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEvidenceFoldersByAssessmentControl

 Returns a list of evidence folders that are associated with a specified control in an Audit Manager assessment. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEvidenceFoldersByAssessmentControlRequest;
import org.openapis.openapi.models.operations.GetEvidenceFoldersByAssessmentControlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEvidenceFoldersByAssessmentControlRequest req = new GetEvidenceFoldersByAssessmentControlRequest("quasi", "at", "et") {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "minima";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "iste";
                maxResults = 839513L;
                nextToken = "accusantium";
            }};            

            GetEvidenceFoldersByAssessmentControlResponse res = sdk.sdk.getEvidenceFoldersByAssessmentControl(req);

            if (res.getEvidenceFoldersByAssessmentControlResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInsights

Gets the latest analytics data for all your current active assessments. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInsightsRequest;
import org.openapis.openapi.models.operations.GetInsightsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInsightsRequest req = new GetInsightsRequest() {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "eum";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "ab";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "non";
            }};            

            GetInsightsResponse res = sdk.sdk.getInsights(req);

            if (res.getInsightsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInsightsByAssessment

Gets the latest analytics data for a specific active assessment. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInsightsByAssessmentRequest;
import org.openapis.openapi.models.operations.GetInsightsByAssessmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInsightsByAssessmentRequest req = new GetInsightsByAssessmentRequest("dolor") {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "impedit";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "dignissimos";
            }};            

            GetInsightsByAssessmentResponse res = sdk.sdk.getInsightsByAssessment(req);

            if (res.getInsightsByAssessmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationAdminAccount

 Returns the name of the delegated Amazon Web Services administrator account for the organization. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationAdminAccountRequest;
import org.openapis.openapi.models.operations.GetOrganizationAdminAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationAdminAccountRequest req = new GetOrganizationAdminAccountRequest() {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "natus";
                xAmzCredential = "velit";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "aperiam";
            }};            

            GetOrganizationAdminAccountResponse res = sdk.sdk.getOrganizationAdminAccount(req);

            if (res.getOrganizationAdminAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getServicesInScope

Returns a list of all of the Amazon Web Services that you can choose to include in your assessment. When you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateAssessment.html">create an assessment</a>, specify which of these services you want to include to narrow the assessment's <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Scope.html">scope</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetServicesInScopeRequest;
import org.openapis.openapi.models.operations.GetServicesInScopeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetServicesInScopeRequest req = new GetServicesInScopeRequest() {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "repellendus";
                xAmzDate = "officia";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "officia";
            }};            

            GetServicesInScopeResponse res = sdk.sdk.getServicesInScope(req);

            if (res.getServicesInScopeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSettings

 Returns the settings for the specified Amazon Web Services account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSettingsAttributeEnum;
import org.openapis.openapi.models.operations.GetSettingsRequest;
import org.openapis.openapi.models.operations.GetSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSettingsRequest req = new GetSettingsRequest(GetSettingsAttributeEnum.SNS_TOPIC) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "porro";
                xAmzDate = "quod";
                xAmzSecurityToken = "labore";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "adipisci";
            }};            

            GetSettingsResponse res = sdk.sdk.getSettings(req);

            if (res.getSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssessmentControlInsightsByControlDomain

<p>Lists the latest analytics data for controls within a specific control domain and a specific active assessment.</p> <note> <p>Control insights are listed only if the control belongs to the control domain and assessment that was specified. Moreover, the control must have collected evidence on the <code>lastUpdated</code> date of <code>controlInsightsByAssessment</code>. If neither of these conditions are met, no data is listed for that control. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssessmentControlInsightsByControlDomainRequest;
import org.openapis.openapi.models.operations.ListAssessmentControlInsightsByControlDomainResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAssessmentControlInsightsByControlDomainRequest req = new ListAssessmentControlInsightsByControlDomainRequest("id", "suscipit") {{
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "est";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "totam";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "vel";
                maxResults = 497678L;
                nextToken = "quos";
            }};            

            ListAssessmentControlInsightsByControlDomainResponse res = sdk.sdk.listAssessmentControlInsightsByControlDomain(req);

            if (res.listAssessmentControlInsightsByControlDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssessmentFrameworkShareRequests

 Returns a list of sent or received share requests for custom frameworks in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssessmentFrameworkShareRequestsRequest;
import org.openapis.openapi.models.operations.ListAssessmentFrameworkShareRequestsRequestTypeEnum;
import org.openapis.openapi.models.operations.ListAssessmentFrameworkShareRequestsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAssessmentFrameworkShareRequestsRequest req = new ListAssessmentFrameworkShareRequestsRequest(ListAssessmentFrameworkShareRequestsRequestTypeEnum.SENT) {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "cum";
                xAmzDate = "commodi";
                xAmzSecurityToken = "in";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "reiciendis";
                maxResults = 828657L;
                nextToken = "nemo";
            }};            

            ListAssessmentFrameworkShareRequestsResponse res = sdk.sdk.listAssessmentFrameworkShareRequests(req);

            if (res.listAssessmentFrameworkShareRequestsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssessmentFrameworks

 Returns a list of the frameworks that are available in the Audit Manager framework library. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssessmentFrameworksFrameworkTypeEnum;
import org.openapis.openapi.models.operations.ListAssessmentFrameworksRequest;
import org.openapis.openapi.models.operations.ListAssessmentFrameworksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAssessmentFrameworksRequest req = new ListAssessmentFrameworksRequest(ListAssessmentFrameworksFrameworkTypeEnum.STANDARD) {{
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "cum";
                xAmzCredential = "consectetur";
                xAmzDate = "in";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "facere";
                maxResults = 257233L;
                nextToken = "doloribus";
            }};            

            ListAssessmentFrameworksResponse res = sdk.sdk.listAssessmentFrameworks(req);

            if (res.listAssessmentFrameworksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssessmentReports

 Returns a list of assessment reports created in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssessmentReportsRequest;
import org.openapis.openapi.models.operations.ListAssessmentReportsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAssessmentReportsRequest req = new ListAssessmentReportsRequest() {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "saepe";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "sunt";
                xAmzSignedHeaders = "asperiores";
                maxResults = 241545L;
                nextToken = "non";
            }};            

            ListAssessmentReportsResponse res = sdk.sdk.listAssessmentReports(req);

            if (res.listAssessmentReportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssessments

 Returns a list of current and past assessments from Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssessmentsRequest;
import org.openapis.openapi.models.operations.ListAssessmentsResponse;
import org.openapis.openapi.models.operations.ListAssessmentsStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAssessmentsRequest req = new ListAssessmentsRequest() {{
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "a";
                xAmzDate = "debitis";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "harum";
                maxResults = 385237L;
                nextToken = "ipsa";
                status = ListAssessmentsStatusEnum.INACTIVE;
            }};            

            ListAssessmentsResponse res = sdk.sdk.listAssessments(req);

            if (res.listAssessmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listControlDomainInsights

<p>Lists the latest analytics data for control domains across all of your active assessments. </p> <note> <p>A control domain is listed only if at least one of the controls within that domain collected evidence on the <code>lastUpdated</code> date of <code>controlDomainInsights</code>. If this condition isn’t met, no data is listed for that control domain.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListControlDomainInsightsRequest;
import org.openapis.openapi.models.operations.ListControlDomainInsightsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListControlDomainInsightsRequest req = new ListControlDomainInsightsRequest() {{
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "similique";
                xAmzDate = "tempora";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "voluptas";
                maxResults = 374296L;
                nextToken = "minima";
            }};            

            ListControlDomainInsightsResponse res = sdk.sdk.listControlDomainInsights(req);

            if (res.listControlDomainInsightsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listControlDomainInsightsByAssessment

<p>Lists analytics data for control domains within a specified active assessment.</p> <note> <p>A control domain is listed only if at least one of the controls within that domain collected evidence on the <code>lastUpdated</code> date of <code>controlDomainInsights</code>. If this condition isn’t met, no data is listed for that domain.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListControlDomainInsightsByAssessmentRequest;
import org.openapis.openapi.models.operations.ListControlDomainInsightsByAssessmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListControlDomainInsightsByAssessmentRequest req = new ListControlDomainInsightsByAssessmentRequest("dolorum") {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "minus";
                xAmzCredential = "dolores";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "in";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "aliquam";
                maxResults = 885963L;
                nextToken = "temporibus";
            }};            

            ListControlDomainInsightsByAssessmentResponse res = sdk.sdk.listControlDomainInsightsByAssessment(req);

            if (res.listControlDomainInsightsByAssessmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listControlInsightsByControlDomain

<p>Lists the latest analytics data for controls within a specific control domain across all active assessments.</p> <note> <p>Control insights are listed only if the control belongs to the control domain that was specified and the control collected evidence on the <code>lastUpdated</code> date of <code>controlInsightsMetadata</code>. If neither of these conditions are met, no data is listed for that control. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListControlInsightsByControlDomainRequest;
import org.openapis.openapi.models.operations.ListControlInsightsByControlDomainResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListControlInsightsByControlDomainRequest req = new ListControlInsightsByControlDomainRequest("adipisci") {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "quas";
                xAmzDate = "hic";
                xAmzSecurityToken = "nesciunt";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "corrupti";
                maxResults = 867290L;
                nextToken = "totam";
            }};            

            ListControlInsightsByControlDomainResponse res = sdk.sdk.listControlInsightsByControlDomain(req);

            if (res.listControlInsightsByControlDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listControls

 Returns a list of controls from Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListControlsControlTypeEnum;
import org.openapis.openapi.models.operations.ListControlsRequest;
import org.openapis.openapi.models.operations.ListControlsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListControlsRequest req = new ListControlsRequest(ListControlsControlTypeEnum.STANDARD) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "sit";
                xAmzCredential = "rerum";
                xAmzDate = "sed";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "asperiores";
                maxResults = 707918L;
                nextToken = "voluptate";
            }};            

            ListControlsResponse res = sdk.sdk.listControls(req);

            if (res.listControlsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listKeywordsForDataSource

 Returns a list of keywords that are pre-mapped to the specified control data source. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListKeywordsForDataSourceRequest;
import org.openapis.openapi.models.operations.ListKeywordsForDataSourceResponse;
import org.openapis.openapi.models.operations.ListKeywordsForDataSourceSourceEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListKeywordsForDataSourceRequest req = new ListKeywordsForDataSourceRequest(ListKeywordsForDataSourceSourceEnum.AWS_CLOUDTRAIL) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "laborum";
                xAmzDate = "sed";
                xAmzSecurityToken = "in";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "quidem";
                maxResults = 131289L;
                nextToken = "voluptas";
            }};            

            ListKeywordsForDataSourceResponse res = sdk.sdk.listKeywordsForDataSource(req);

            if (res.listKeywordsForDataSourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listNotifications

 Returns a list of all Audit Manager notifications. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListNotificationsRequest;
import org.openapis.openapi.models.operations.ListNotificationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListNotificationsRequest req = new ListNotificationsRequest() {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "sapiente";
                xAmzDate = "debitis";
                xAmzSecurityToken = "illo";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "perferendis";
                maxResults = 546885L;
                nextToken = "maiores";
            }};            

            ListNotificationsResponse res = sdk.sdk.listNotifications(req);

            if (res.listNotificationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

 Returns a list of tags for the specified resource in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("sed") {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "eius";
                xAmzCredential = "necessitatibus";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "ea";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "quos";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerAccount

 Enables Audit Manager for the specified Amazon Web Services account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterAccountRequest;
import org.openapis.openapi.models.operations.RegisterAccountRequestBody;
import org.openapis.openapi.models.operations.RegisterAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterAccountRequest req = new RegisterAccountRequest(                new RegisterAccountRequestBody() {{
                                delegatedAdminAccount = "tempora";
                                kmsKey = "tempora";
                            }};) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "ex";
                xAmzDate = "sit";
                xAmzSecurityToken = "non";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "praesentium";
            }};            

            RegisterAccountResponse res = sdk.sdk.registerAccount(req);

            if (res.registerAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerOrganizationAdminAccount

 Enables an Amazon Web Services account within the organization as the delegated administrator for Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterOrganizationAdminAccountRequest;
import org.openapis.openapi.models.operations.RegisterOrganizationAdminAccountRequestBody;
import org.openapis.openapi.models.operations.RegisterOrganizationAdminAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterOrganizationAdminAccountRequest req = new RegisterOrganizationAdminAccountRequest(                new RegisterOrganizationAdminAccountRequestBody("quaerat");) {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "debitis";
                xAmzDate = "rem";
                xAmzSecurityToken = "sit";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "error";
            }};            

            RegisterOrganizationAdminAccountResponse res = sdk.sdk.registerOrganizationAdminAccount(req);

            if (res.registerOrganizationAdminAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startAssessmentFrameworkShare

<p> Creates a share request for a custom framework in Audit Manager. </p> <p>The share request specifies a recipient and notifies them that a custom framework is available. Recipients have 120 days to accept or decline the request. If no action is taken, the share request expires.</p> <p>When you create a share request, Audit Manager stores a snapshot of your custom framework in the US East (N. Virginia) Amazon Web Services Region. Audit Manager also stores a backup of the same snapshot in the US West (Oregon) Amazon Web Services Region.</p> <p>Audit Manager deletes the snapshot and the backup snapshot when one of the following events occurs:</p> <ul> <li> <p>The sender revokes the share request.</p> </li> <li> <p>The recipient declines the share request.</p> </li> <li> <p>The recipient encounters an error and doesn't successfully accept the share request.</p> </li> <li> <p>The share request expires before the recipient responds to the request.</p> </li> </ul> <p>When a sender <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/framework-sharing.html#framework-sharing-resend">resends a share request</a>, the snapshot is replaced with an updated version that corresponds with the latest version of the custom framework. </p> <p>When a recipient accepts a share request, the snapshot is replicated into their Amazon Web Services account under the Amazon Web Services Region that was specified in the share request. </p> <important> <p>When you invoke the <code>StartAssessmentFrameworkShare</code> API, you are about to share a custom framework with another Amazon Web Services account. You may not share a custom framework that is derived from a standard framework if the standard framework is designated as not eligible for sharing by Amazon Web Services, unless you have obtained permission to do so from the owner of the standard framework. To learn more about which standard frameworks are eligible for sharing, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/share-custom-framework-concepts-and-terminology.html#eligibility">Framework sharing eligibility</a> in the <i>Audit Manager User Guide</i>.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartAssessmentFrameworkShareRequest;
import org.openapis.openapi.models.operations.StartAssessmentFrameworkShareRequestBody;
import org.openapis.openapi.models.operations.StartAssessmentFrameworkShareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartAssessmentFrameworkShareRequest req = new StartAssessmentFrameworkShareRequest(                new StartAssessmentFrameworkShareRequestBody("minima", "recusandae") {{
                                comment = "reiciendis";
                            }};, "nulla") {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "saepe";
                xAmzDate = "numquam";
                xAmzSecurityToken = "veniam";
                xAmzSignature = "in";
                xAmzSignedHeaders = "officiis";
            }};            

            StartAssessmentFrameworkShareResponse res = sdk.sdk.startAssessmentFrameworkShare(req);

            if (res.startAssessmentFrameworkShareResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

 Tags the specified resource in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("exercitationem", "praesentium");
                                                put("cum", "laboriosam");
                                                put("dolorum", "voluptatum");
                                            }});, "error") {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "debitis";
                xAmzDate = "neque";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "officia";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

 Removes a tag from a resource in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("corrupti",                 new String[]{{
                                add("tempora"),
                                add("atque"),
                                add("fugit"),
                                add("ut"),
                            }}) {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "culpa";
                xAmzDate = "expedita";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "esse";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAssessment

 Edits an Audit Manager assessment. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAssessmentRequest;
import org.openapis.openapi.models.operations.UpdateAssessmentRequestBody;
import org.openapis.openapi.models.operations.UpdateAssessmentRequestBodyAssessmentReportsDestination;
import org.openapis.openapi.models.operations.UpdateAssessmentRequestBodyScope;
import org.openapis.openapi.models.operations.UpdateAssessmentResponse;
import org.openapis.openapi.models.shared.AWSAccount;
import org.openapis.openapi.models.shared.AWSService;
import org.openapis.openapi.models.shared.AssessmentReportDestinationTypeEnum;
import org.openapis.openapi.models.shared.Role;
import org.openapis.openapi.models.shared.RoleTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAssessmentRequest req = new UpdateAssessmentRequest(                new UpdateAssessmentRequestBody(                new UpdateAssessmentRequestBodyScope() {{
                                                awsAccounts = new org.openapis.openapi.models.shared.AWSAccount[]{{
                                                    add(new AWSAccount() {{
                                                        emailAddress = "voluptatum";
                                                        id = "8e518620-65e9-404f-bb11-94b8abf603a7";
                                                        name = "Boyd McKenzie";
                                                    }}),
                                                }};
                                                awsServices = new org.openapis.openapi.models.shared.AWSService[]{{
                                                    add(new AWSService() {{
                                                        serviceName = "perferendis";
                                                    }}),
                                                    add(new AWSService() {{
                                                        serviceName = "est";
                                                    }}),
                                                    add(new AWSService() {{
                                                        serviceName = "quidem";
                                                    }}),
                                                    add(new AWSService() {{
                                                        serviceName = "reprehenderit";
                                                    }}),
                                                }};
                                            }};) {{
                                assessmentDescription = "facere";
                                assessmentName = "fuga";
                                assessmentReportsDestination = new UpdateAssessmentRequestBodyAssessmentReportsDestination() {{
                                    destination = "praesentium";
                                    destinationType = AssessmentReportDestinationTypeEnum.S3;
                                }};;
                                roles = new org.openapis.openapi.models.shared.Role[]{{
                                    add(new Role("quisquam", RoleTypeEnum.RESOURCE_OWNER) {{
                                        roleArn = "veniam";
                                        roleType = RoleTypeEnum.PROCESS_OWNER;
                                    }}),
                                    add(new Role("reprehenderit", RoleTypeEnum.RESOURCE_OWNER) {{
                                        roleArn = "quasi";
                                        roleType = RoleTypeEnum.RESOURCE_OWNER;
                                    }}),
                                    add(new Role("quidem", RoleTypeEnum.RESOURCE_OWNER) {{
                                        roleArn = "totam";
                                        roleType = RoleTypeEnum.PROCESS_OWNER;
                                    }}),
                                }};
                            }};, "et") {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "amet";
                xAmzCredential = "assumenda";
                xAmzDate = "ea";
                xAmzSecurityToken = "atque";
                xAmzSignature = "error";
                xAmzSignedHeaders = "officiis";
            }};            

            UpdateAssessmentResponse res = sdk.sdk.updateAssessment(req);

            if (res.updateAssessmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAssessmentControl

 Updates a control within an assessment in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAssessmentControlRequest;
import org.openapis.openapi.models.operations.UpdateAssessmentControlRequestBody;
import org.openapis.openapi.models.operations.UpdateAssessmentControlRequestBodyControlStatusEnum;
import org.openapis.openapi.models.operations.UpdateAssessmentControlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAssessmentControlRequest req = new UpdateAssessmentControlRequest(                new UpdateAssessmentControlRequestBody() {{
                                commentBody = "accusamus";
                                controlStatus = UpdateAssessmentControlRequestBodyControlStatusEnum.REVIEWED;
                            }};, "minima", "aspernatur", "ex") {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "at";
                xAmzDate = "error";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "repudiandae";
            }};            

            UpdateAssessmentControlResponse res = sdk.sdk.updateAssessmentControl(req);

            if (res.updateAssessmentControlResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAssessmentControlSetStatus

 Updates the status of a control set in an Audit Manager assessment. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAssessmentControlSetStatusRequest;
import org.openapis.openapi.models.operations.UpdateAssessmentControlSetStatusRequestBody;
import org.openapis.openapi.models.operations.UpdateAssessmentControlSetStatusRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.UpdateAssessmentControlSetStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAssessmentControlSetStatusRequest req = new UpdateAssessmentControlSetStatusRequest(                new UpdateAssessmentControlSetStatusRequestBody("atque", UpdateAssessmentControlSetStatusRequestBodyStatusEnum.ACTIVE);, "recusandae", "dolorum") {{
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "labore";
                xAmzCredential = "reiciendis";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "accusantium";
            }};            

            UpdateAssessmentControlSetStatusResponse res = sdk.sdk.updateAssessmentControlSetStatus(req);

            if (res.updateAssessmentControlSetStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAssessmentFramework

 Updates a custom framework in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAssessmentFrameworkRequest;
import org.openapis.openapi.models.operations.UpdateAssessmentFrameworkRequestBody;
import org.openapis.openapi.models.operations.UpdateAssessmentFrameworkResponse;
import org.openapis.openapi.models.shared.CreateAssessmentFrameworkControl;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateAssessmentFrameworkControlSet;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAssessmentFrameworkRequest req = new UpdateAssessmentFrameworkRequest(                new UpdateAssessmentFrameworkRequestBody(                new org.openapis.openapi.models.shared.UpdateAssessmentFrameworkControlSet[]{{
                                                add(new UpdateAssessmentFrameworkControlSet(                new org.openapis.openapi.models.shared.CreateAssessmentFrameworkControl[]{{
                                                                    add(new CreateAssessmentFrameworkControl("soluta") {{
                                                                        id = "4f9efc1b-4512-4c10-b264-8dc2f615199e";
                                                                    }}),
                                                                    add(new CreateAssessmentFrameworkControl("ipsa") {{
                                                                        id = "fd0e9fe6-c632-4ca3-aed0-117996312fde";
                                                                    }}),
                                                                    add(new CreateAssessmentFrameworkControl("eum") {{
                                                                        id = "4771778f-f61d-4017-8763-60a15db6a660";
                                                                    }}),
                                                                    add(new CreateAssessmentFrameworkControl("culpa") {{
                                                                        id = "59a1adea-ab58-451d-ac64-5b08b61891ba";
                                                                    }}),
                                                                }}, "voluptatem") {{
                                                    controls = new org.openapis.openapi.models.shared.CreateAssessmentFrameworkControl[]{{
                                                        add(new CreateAssessmentFrameworkControl("molestiae") {{
                                                            id = "63f94e29-e973-4e92-aa57-a15be3e06080";
                                                        }}),
                                                        add(new CreateAssessmentFrameworkControl("quaerat") {{
                                                            id = "e2b6e3ab-8845-4f05-97a6-0ff2a54a31e9";
                                                        }}),
                                                    }};
                                                    id = "764a3e86-5e79-456f-9251-a5a9da660ff5";
                                                    name = "Antoinette Wehner";
                                                }}),
                                            }}, "sapiente") {{
                                complianceType = "officiis";
                                description = "architecto";
                            }};, "fuga") {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "voluptatem";
                xAmzDate = "alias";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "ex";
            }};            

            UpdateAssessmentFrameworkResponse res = sdk.sdk.updateAssessmentFramework(req);

            if (res.updateAssessmentFrameworkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAssessmentFrameworkShare

 Updates a share request for a custom framework in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAssessmentFrameworkShareRequest;
import org.openapis.openapi.models.operations.UpdateAssessmentFrameworkShareRequestBody;
import org.openapis.openapi.models.operations.UpdateAssessmentFrameworkShareRequestBodyActionEnum;
import org.openapis.openapi.models.operations.UpdateAssessmentFrameworkShareRequestBodyRequestTypeEnum;
import org.openapis.openapi.models.operations.UpdateAssessmentFrameworkShareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAssessmentFrameworkShareRequest req = new UpdateAssessmentFrameworkShareRequest(                new UpdateAssessmentFrameworkShareRequestBody(UpdateAssessmentFrameworkShareRequestBodyActionEnum.DECLINE, UpdateAssessmentFrameworkShareRequestBodyRequestTypeEnum.RECEIVED);, "nemo") {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "ratione";
                xAmzCredential = "ullam";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "illum";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "impedit";
            }};            

            UpdateAssessmentFrameworkShareResponse res = sdk.sdk.updateAssessmentFrameworkShare(req);

            if (res.updateAssessmentFrameworkShareResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAssessmentStatus

 Updates the status of an assessment in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAssessmentStatusRequest;
import org.openapis.openapi.models.operations.UpdateAssessmentStatusRequestBody;
import org.openapis.openapi.models.operations.UpdateAssessmentStatusRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.UpdateAssessmentStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAssessmentStatusRequest req = new UpdateAssessmentStatusRequest(                new UpdateAssessmentStatusRequestBody(UpdateAssessmentStatusRequestBodyStatusEnum.INACTIVE);, "ipsam") {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "aliquam";
                xAmzDate = "inventore";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "tempora";
            }};            

            UpdateAssessmentStatusResponse res = sdk.sdk.updateAssessmentStatus(req);

            if (res.updateAssessmentStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateControl

 Updates a custom control in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateControlRequest;
import org.openapis.openapi.models.operations.UpdateControlRequestBody;
import org.openapis.openapi.models.operations.UpdateControlResponse;
import org.openapis.openapi.models.shared.ControlMappingSource;
import org.openapis.openapi.models.shared.KeywordInputTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceFrequencyEnum;
import org.openapis.openapi.models.shared.SourceKeyword;
import org.openapis.openapi.models.shared.SourceSetUpOptionEnum;
import org.openapis.openapi.models.shared.SourceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateControlRequest req = new UpdateControlRequest(                new UpdateControlRequestBody(                new org.openapis.openapi.models.shared.ControlMappingSource[]{{
                                                add(new ControlMappingSource() {{
                                                    sourceDescription = "architecto";
                                                    sourceFrequency = SourceFrequencyEnum.DAILY;
                                                    sourceId = "modi";
                                                    sourceKeyword = new SourceKeyword() {{
                                                        keywordInputType = KeywordInputTypeEnum.SELECT_FROM_LIST;
                                                        keywordValue = "fugit";
                                                    }};
                                                    sourceName = "ab";
                                                    sourceSetUpOption = SourceSetUpOptionEnum.PROCEDURAL_CONTROLS_MAPPING;
                                                    sourceType = SourceTypeEnum.AWS_CLOUDTRAIL;
                                                    troubleshootingText = "dolor";
                                                }}),
                                            }}, "fugiat") {{
                                actionPlanInstructions = "ipsam";
                                actionPlanTitle = "consequuntur";
                                description = "ipsa";
                                testingInformation = "quas";
                            }};, "eveniet") {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "esse";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "sed";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "nesciunt";
            }};            

            UpdateControlResponse res = sdk.sdk.updateControl(req);

            if (res.updateControlResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSettings

 Updates Audit Manager settings for the current account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSettingsRequest;
import org.openapis.openapi.models.operations.UpdateSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateSettingsRequestBodyDefaultAssessmentReportsDestination;
import org.openapis.openapi.models.operations.UpdateSettingsRequestBodyDeregistrationPolicy;
import org.openapis.openapi.models.operations.UpdateSettingsResponse;
import org.openapis.openapi.models.shared.AssessmentReportDestinationTypeEnum;
import org.openapis.openapi.models.shared.DeleteResourcesEnum;
import org.openapis.openapi.models.shared.Role;
import org.openapis.openapi.models.shared.RoleTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSettingsRequest req = new UpdateSettingsRequest(                new UpdateSettingsRequestBody() {{
                                defaultAssessmentReportsDestination = new UpdateSettingsRequestBodyDefaultAssessmentReportsDestination() {{
                                    destination = "eum";
                                    destinationType = AssessmentReportDestinationTypeEnum.S3;
                                }};;
                                defaultProcessOwners = new org.openapis.openapi.models.shared.Role[]{{
                                    add(new Role("exercitationem", RoleTypeEnum.PROCESS_OWNER) {{
                                        roleArn = "voluptatum";
                                        roleType = RoleTypeEnum.PROCESS_OWNER;
                                    }}),
                                    add(new Role("nobis", RoleTypeEnum.PROCESS_OWNER) {{
                                        roleArn = "porro";
                                        roleType = RoleTypeEnum.PROCESS_OWNER;
                                    }}),
                                }};
                                deregistrationPolicy = new UpdateSettingsRequestBodyDeregistrationPolicy() {{
                                    deleteResources = DeleteResourcesEnum.DEFAULT_;
                                }};;
                                evidenceFinderEnabled = false;
                                kmsKey = "consequuntur";
                                snsTopic = "voluptatem";
                            }};) {{
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "quasi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "at";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "est";
            }};            

            UpdateSettingsResponse res = sdk.sdk.updateSettings(req);

            if (res.updateSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## validateAssessmentReportIntegrity

 Validates the integrity of an assessment report in Audit Manager. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ValidateAssessmentReportIntegrityRequest;
import org.openapis.openapi.models.operations.ValidateAssessmentReportIntegrityRequestBody;
import org.openapis.openapi.models.operations.ValidateAssessmentReportIntegrityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ValidateAssessmentReportIntegrityRequest req = new ValidateAssessmentReportIntegrityRequest(                new ValidateAssessmentReportIntegrityRequestBody("sequi");) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "optio";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "blanditiis";
            }};            

            ValidateAssessmentReportIntegrityResponse res = sdk.sdk.validateAssessmentReportIntegrity(req);

            if (res.validateAssessmentReportIntegrityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
