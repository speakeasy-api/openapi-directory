# SDK

## Overview

<p>Welcome to the Audit Manager API reference. This guide is for developers who need detailed information about the Audit Manager API operations, data types, and errors. </p> <p>Audit Manager is a service that provides automated evidence collection so that you can continually audit your Amazon Web Services usage. You can use it to assess the effectiveness of your controls, manage risk, and simplify compliance.</p> <p>Audit Manager provides prebuilt frameworks that structure and automate assessments for a given compliance standard. Frameworks include a prebuilt collection of controls with descriptions and testing procedures. These controls are grouped according to the requirements of the specified compliance standard or regulation. You can also customize frameworks and controls to support internal audits with specific requirements. </p> <p>Use the following links to get started with the Audit Manager API:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Operations.html">Actions</a>: An alphabetical list of all Audit Manager API operations.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Types.html">Data types</a>: An alphabetical list of all Audit Manager data types.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/CommonParameters.html">Common parameters</a>: Parameters that all operations can use.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/CommonErrors.html">Common errors</a>: Client and server errors that all operations can return.</p> </li> </ul> <p>If you're new to Audit Manager, we recommend that you review the <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/what-is.html"> Audit Manager User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/auditmanager/>
### Available Operations

* [AssociateAssessmentReportEvidenceFolder](#associateassessmentreportevidencefolder) -  Associates an evidence folder to an assessment report in an Audit Manager assessment. 
* [BatchAssociateAssessmentReportEvidence](#batchassociateassessmentreportevidence) -  Associates a list of evidence to an assessment report in an Audit Manager assessment. 
* [BatchCreateDelegationByAssessment](#batchcreatedelegationbyassessment) -  Creates a batch of delegations for an assessment in Audit Manager. 
* [BatchDeleteDelegationByAssessment](#batchdeletedelegationbyassessment) -  Deletes a batch of delegations for an assessment in Audit Manager. 
* [BatchDisassociateAssessmentReportEvidence](#batchdisassociateassessmentreportevidence) -  Disassociates a list of evidence from an assessment report in Audit Manager. 
* [BatchImportEvidenceToAssessmentControl](#batchimportevidencetoassessmentcontrol) - <p>Uploads one or more pieces of evidence to a control in an Audit Manager assessment. You can upload manual evidence from any Amazon Simple Storage Service (Amazon S3) bucket by specifying the S3 URI of the evidence. </p> <p>You must upload manual evidence to your S3 bucket before you can upload it to your assessment. For instructions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> in the <i>Amazon Simple Storage Service API Reference.</i> </p> <p>The following restrictions apply to this action:</p> <ul> <li> <p>Maximum size of an individual evidence file: 100 MB</p> </li> <li> <p>Number of daily manual evidence uploads per control: 100</p> </li> <li> <p>Supported file formats: See <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#supported-manual-evidence-files">Supported file types for manual evidence</a> in the <i>Audit Manager User Guide</i> </p> </li> </ul> <p>For more information about Audit Manager service restrictions, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/service-quotas.html">Quotas and restrictions for Audit Manager</a>.</p>
* [CreateAssessment](#createassessment) -  Creates an assessment in Audit Manager. 
* [CreateAssessmentFramework](#createassessmentframework) -  Creates a custom framework in Audit Manager. 
* [CreateAssessmentReport](#createassessmentreport) -  Creates an assessment report for the specified assessment. 
* [CreateControl](#createcontrol) -  Creates a new custom control in Audit Manager. 
* [DeleteAssessment](#deleteassessment) -  Deletes an assessment in Audit Manager. 
* [DeleteAssessmentFramework](#deleteassessmentframework) -  Deletes a custom framework in Audit Manager. 
* [DeleteAssessmentFrameworkShare](#deleteassessmentframeworkshare) -  Deletes a share request for a custom framework in Audit Manager. 
* [DeleteAssessmentReport](#deleteassessmentreport) - <p>Deletes an assessment report in Audit Manager. </p> <p>When you run the <code>DeleteAssessmentReport</code> operation, Audit Manager attempts to delete the following data:</p> <ol> <li> <p>The specified assessment report that’s stored in your S3 bucket</p> </li> <li> <p>The associated metadata that’s stored in Audit Manager</p> </li> </ol> <p>If Audit Manager can’t access the assessment report in your S3 bucket, the report isn’t deleted. In this event, the <code>DeleteAssessmentReport</code> operation doesn’t fail. Instead, it proceeds to delete the associated metadata only. You must then delete the assessment report from the S3 bucket yourself. </p> <p>This scenario happens when Audit Manager receives a <code>403 (Forbidden)</code> or <code>404 (Not Found)</code> error from Amazon S3. To avoid this, make sure that your S3 bucket is available, and that you configured the correct permissions for Audit Manager to delete resources in your S3 bucket. For an example permissions policy that you can use, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/security_iam_id-based-policy-examples.html#full-administrator-access-assessment-report-destination">Assessment report destination permissions</a> in the <i>Audit Manager User Guide</i>. For information about the issues that could cause a <code>403 (Forbidden)</code> or <code>404 (Not Found</code>) error from Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a> in the <i>Amazon Simple Storage Service API Reference</i>. </p>
* [DeleteControl](#deletecontrol) -  Deletes a custom control in Audit Manager. 
* [DeregisterAccount](#deregisteraccount) - <p> Deregisters an account in Audit Manager. </p> <note> <p>Before you deregister, you can use the <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateSettings.html">UpdateSettings</a> API operation to set your preferred data retention policy. By default, Audit Manager retains your data. If you want to delete your data, you can use the <code>DeregistrationPolicy</code> attribute to request the deletion of your data. </p> <p>For more information about data retention, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/data-protection.html">Data Protection</a> in the <i>Audit Manager User Guide</i>. </p> </note>
* [DeregisterOrganizationAdminAccount](#deregisterorganizationadminaccount) - <p>Removes the specified Amazon Web Services account as a delegated administrator for Audit Manager. </p> <p>When you remove a delegated administrator from your Audit Manager settings, you continue to have access to the evidence that you previously collected under that account. This is also the case when you deregister a delegated administrator from Organizations. However, Audit Manager stops collecting and attaching evidence to that delegated administrator account moving forward.</p> <important> <p>Keep in mind the following cleanup task if you use evidence finder:</p> <p>Before you use your management account to remove a delegated administrator, make sure that the current delegated administrator account signs in to Audit Manager and disables evidence finder first. Disabling evidence finder automatically deletes the event data store that was created in their account when they enabled evidence finder. If this task isn’t completed, the event data store remains in their account. In this case, we recommend that the original delegated administrator goes to CloudTrail Lake and manually <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-eds-disable-termination.html">deletes the event data store</a>.</p> <p>This cleanup task is necessary to ensure that you don't end up with multiple event data stores. Audit Manager ignores an unused event data store after you remove or change a delegated administrator account. However, the unused event data store continues to incur storage costs from CloudTrail Lake if you don't delete it.</p> </important> <p>When you deregister a delegated administrator account for Audit Manager, the data for that account isn’t deleted. If you want to delete resource data for a delegated administrator account, you must perform that task separately before you deregister the account. Either, you can do this in the Audit Manager console. Or, you can use one of the delete API operations that are provided by Audit Manager. </p> <p>To delete your Audit Manager resource data, see the following instructions: </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessment.html">DeleteAssessment</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-assessment.html">Deleting an assessment</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFramework.html">DeleteAssessmentFramework</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-custom-framework.html">Deleting a custom framework</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFrameworkShare.html">DeleteAssessmentFrameworkShare</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/deleting-shared-framework-requests.html">Deleting a share request</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentReport.html">DeleteAssessmentReport</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/generate-assessment-report.html#delete-assessment-report-steps">Deleting an assessment report</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteControl.html">DeleteControl</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-controls.html">Deleting a custom control</a> in the <i>Audit Manager User Guide</i>)</p> </li> </ul> <p>At this time, Audit Manager doesn't provide an option to delete evidence for a specific delegated administrator. Instead, when your management account deregisters Audit Manager, we perform a cleanup for the current delegated administrator account at the time of deregistration.</p>
* [DisassociateAssessmentReportEvidenceFolder](#disassociateassessmentreportevidencefolder) -  Disassociates an evidence folder from the specified assessment report in Audit Manager. 
* [GetAccountStatus](#getaccountstatus) -  Returns the registration status of an account in Audit Manager. 
* [GetAssessment](#getassessment) - Returns an assessment from Audit Manager. 
* [GetAssessmentFramework](#getassessmentframework) - Returns a framework from Audit Manager. 
* [GetAssessmentReportURL](#getassessmentreporturl) -  Returns the URL of an assessment report in Audit Manager. 
* [GetChangeLogs](#getchangelogs) -  Returns a list of changelogs from Audit Manager. 
* [GetControl](#getcontrol) -  Returns a control from Audit Manager. 
* [GetDelegations](#getdelegations) -  Returns a list of delegations from an audit owner to a delegate. 
* [GetEvidence](#getevidence) -  Returns evidence from Audit Manager. 
* [GetEvidenceByEvidenceFolder](#getevidencebyevidencefolder) -  Returns all evidence from a specified evidence folder in Audit Manager. 
* [GetEvidenceFolder](#getevidencefolder) -  Returns an evidence folder from the specified assessment in Audit Manager. 
* [GetEvidenceFoldersByAssessment](#getevidencefoldersbyassessment) -  Returns the evidence folders from a specified assessment in Audit Manager. 
* [GetEvidenceFoldersByAssessmentControl](#getevidencefoldersbyassessmentcontrol) -  Returns a list of evidence folders that are associated with a specified control in an Audit Manager assessment. 
* [GetInsights](#getinsights) - Gets the latest analytics data for all your current active assessments. 
* [GetInsightsByAssessment](#getinsightsbyassessment) - Gets the latest analytics data for a specific active assessment. 
* [GetOrganizationAdminAccount](#getorganizationadminaccount) -  Returns the name of the delegated Amazon Web Services administrator account for the organization. 
* [GetServicesInScope](#getservicesinscope) - Returns a list of all of the Amazon Web Services that you can choose to include in your assessment. When you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateAssessment.html">create an assessment</a>, specify which of these services you want to include to narrow the assessment's <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Scope.html">scope</a>.
* [GetSettings](#getsettings) -  Returns the settings for the specified Amazon Web Services account. 
* [ListAssessmentControlInsightsByControlDomain](#listassessmentcontrolinsightsbycontroldomain) - <p>Lists the latest analytics data for controls within a specific control domain and a specific active assessment.</p> <note> <p>Control insights are listed only if the control belongs to the control domain and assessment that was specified. Moreover, the control must have collected evidence on the <code>lastUpdated</code> date of <code>controlInsightsByAssessment</code>. If neither of these conditions are met, no data is listed for that control. </p> </note>
* [ListAssessmentFrameworkShareRequests](#listassessmentframeworksharerequests) -  Returns a list of sent or received share requests for custom frameworks in Audit Manager. 
* [ListAssessmentFrameworks](#listassessmentframeworks) -  Returns a list of the frameworks that are available in the Audit Manager framework library. 
* [ListAssessmentReports](#listassessmentreports) -  Returns a list of assessment reports created in Audit Manager. 
* [ListAssessments](#listassessments) -  Returns a list of current and past assessments from Audit Manager. 
* [ListControlDomainInsights](#listcontroldomaininsights) - <p>Lists the latest analytics data for control domains across all of your active assessments. </p> <note> <p>A control domain is listed only if at least one of the controls within that domain collected evidence on the <code>lastUpdated</code> date of <code>controlDomainInsights</code>. If this condition isn’t met, no data is listed for that control domain.</p> </note>
* [ListControlDomainInsightsByAssessment](#listcontroldomaininsightsbyassessment) - <p>Lists analytics data for control domains within a specified active assessment.</p> <note> <p>A control domain is listed only if at least one of the controls within that domain collected evidence on the <code>lastUpdated</code> date of <code>controlDomainInsights</code>. If this condition isn’t met, no data is listed for that domain.</p> </note>
* [ListControlInsightsByControlDomain](#listcontrolinsightsbycontroldomain) - <p>Lists the latest analytics data for controls within a specific control domain across all active assessments.</p> <note> <p>Control insights are listed only if the control belongs to the control domain that was specified and the control collected evidence on the <code>lastUpdated</code> date of <code>controlInsightsMetadata</code>. If neither of these conditions are met, no data is listed for that control. </p> </note>
* [ListControls](#listcontrols) -  Returns a list of controls from Audit Manager. 
* [ListKeywordsForDataSource](#listkeywordsfordatasource) -  Returns a list of keywords that are pre-mapped to the specified control data source. 
* [ListNotifications](#listnotifications) -  Returns a list of all Audit Manager notifications. 
* [ListTagsForResource](#listtagsforresource) -  Returns a list of tags for the specified resource in Audit Manager. 
* [RegisterAccount](#registeraccount) -  Enables Audit Manager for the specified Amazon Web Services account. 
* [RegisterOrganizationAdminAccount](#registerorganizationadminaccount) -  Enables an Amazon Web Services account within the organization as the delegated administrator for Audit Manager. 
* [StartAssessmentFrameworkShare](#startassessmentframeworkshare) - <p> Creates a share request for a custom framework in Audit Manager. </p> <p>The share request specifies a recipient and notifies them that a custom framework is available. Recipients have 120 days to accept or decline the request. If no action is taken, the share request expires.</p> <p>When you create a share request, Audit Manager stores a snapshot of your custom framework in the US East (N. Virginia) Amazon Web Services Region. Audit Manager also stores a backup of the same snapshot in the US West (Oregon) Amazon Web Services Region.</p> <p>Audit Manager deletes the snapshot and the backup snapshot when one of the following events occurs:</p> <ul> <li> <p>The sender revokes the share request.</p> </li> <li> <p>The recipient declines the share request.</p> </li> <li> <p>The recipient encounters an error and doesn't successfully accept the share request.</p> </li> <li> <p>The share request expires before the recipient responds to the request.</p> </li> </ul> <p>When a sender <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/framework-sharing.html#framework-sharing-resend">resends a share request</a>, the snapshot is replaced with an updated version that corresponds with the latest version of the custom framework. </p> <p>When a recipient accepts a share request, the snapshot is replicated into their Amazon Web Services account under the Amazon Web Services Region that was specified in the share request. </p> <important> <p>When you invoke the <code>StartAssessmentFrameworkShare</code> API, you are about to share a custom framework with another Amazon Web Services account. You may not share a custom framework that is derived from a standard framework if the standard framework is designated as not eligible for sharing by Amazon Web Services, unless you have obtained permission to do so from the owner of the standard framework. To learn more about which standard frameworks are eligible for sharing, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/share-custom-framework-concepts-and-terminology.html#eligibility">Framework sharing eligibility</a> in the <i>Audit Manager User Guide</i>.</p> </important>
* [TagResource](#tagresource) -  Tags the specified resource in Audit Manager. 
* [UntagResource](#untagresource) -  Removes a tag from a resource in Audit Manager. 
* [UpdateAssessment](#updateassessment) -  Edits an Audit Manager assessment. 
* [UpdateAssessmentControl](#updateassessmentcontrol) -  Updates a control within an assessment in Audit Manager. 
* [UpdateAssessmentControlSetStatus](#updateassessmentcontrolsetstatus) -  Updates the status of a control set in an Audit Manager assessment. 
* [UpdateAssessmentFramework](#updateassessmentframework) -  Updates a custom framework in Audit Manager. 
* [UpdateAssessmentFrameworkShare](#updateassessmentframeworkshare) -  Updates a share request for a custom framework in Audit Manager. 
* [UpdateAssessmentStatus](#updateassessmentstatus) -  Updates the status of an assessment in Audit Manager. 
* [UpdateControl](#updatecontrol) -  Updates a custom control in Audit Manager. 
* [UpdateSettings](#updatesettings) -  Updates Audit Manager settings for the current account. 
* [ValidateAssessmentReportIntegrity](#validateassessmentreportintegrity) -  Validates the integrity of an assessment report in Audit Manager. 

## AssociateAssessmentReportEvidenceFolder

 Associates an evidence folder to an assessment report in an Audit Manager assessment. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateAssessmentReportEvidenceFolder(ctx, operations.AssociateAssessmentReportEvidenceFolderRequest{
        RequestBody: operations.AssociateAssessmentReportEvidenceFolderRequestBody{
            EvidenceFolderID: "error",
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("delectus"),
        AssessmentID: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateAssessmentReportEvidenceFolderResponse != nil {
        // handle response
    }
}
```

## BatchAssociateAssessmentReportEvidence

 Associates a list of evidence to an assessment report in an Audit Manager assessment. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchAssociateAssessmentReportEvidence(ctx, operations.BatchAssociateAssessmentReportEvidenceRequest{
        RequestBody: operations.BatchAssociateAssessmentReportEvidenceRequestBody{
            EvidenceFolderID: "suscipit",
            EvidenceIds: []string{
                "minus",
                "placeat",
            },
        },
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("ab"),
        AssessmentID: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchAssociateAssessmentReportEvidenceResponse != nil {
        // handle response
    }
}
```

## BatchCreateDelegationByAssessment

 Creates a batch of delegations for an assessment in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchCreateDelegationByAssessment(ctx, operations.BatchCreateDelegationByAssessmentRequest{
        RequestBody: operations.BatchCreateDelegationByAssessmentRequestBody{
            CreateDelegationRequests: []shared.CreateDelegationRequest{
                shared.CreateDelegationRequest{
                    Comment: sdk.String("deserunt"),
                    ControlSetID: sdk.String("perferendis"),
                    RoleArn: sdk.String("ipsam"),
                    RoleType: shared.RoleTypeEnumResourceOwner.ToPointer(),
                },
            },
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        AssessmentID: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchCreateDelegationByAssessmentResponse != nil {
        // handle response
    }
}
```

## BatchDeleteDelegationByAssessment

 Deletes a batch of delegations for an assessment in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchDeleteDelegationByAssessment(ctx, operations.BatchDeleteDelegationByAssessmentRequest{
        RequestBody: operations.BatchDeleteDelegationByAssessmentRequestBody{
            DelegationIds: []string{
                "esse",
                "totam",
                "porro",
                "dolorum",
            },
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("hic"),
        AssessmentID: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteDelegationByAssessmentResponse != nil {
        // handle response
    }
}
```

## BatchDisassociateAssessmentReportEvidence

 Disassociates a list of evidence from an assessment report in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchDisassociateAssessmentReportEvidence(ctx, operations.BatchDisassociateAssessmentReportEvidenceRequest{
        RequestBody: operations.BatchDisassociateAssessmentReportEvidenceRequestBody{
            EvidenceFolderID: "totam",
            EvidenceIds: []string{
                "commodi",
            },
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        AssessmentID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDisassociateAssessmentReportEvidenceResponse != nil {
        // handle response
    }
}
```

## BatchImportEvidenceToAssessmentControl

<p>Uploads one or more pieces of evidence to a control in an Audit Manager assessment. You can upload manual evidence from any Amazon Simple Storage Service (Amazon S3) bucket by specifying the S3 URI of the evidence. </p> <p>You must upload manual evidence to your S3 bucket before you can upload it to your assessment. For instructions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> in the <i>Amazon Simple Storage Service API Reference.</i> </p> <p>The following restrictions apply to this action:</p> <ul> <li> <p>Maximum size of an individual evidence file: 100 MB</p> </li> <li> <p>Number of daily manual evidence uploads per control: 100</p> </li> <li> <p>Supported file formats: See <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#supported-manual-evidence-files">Supported file types for manual evidence</a> in the <i>Audit Manager User Guide</i> </p> </li> </ul> <p>For more information about Audit Manager service restrictions, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/service-quotas.html">Quotas and restrictions for Audit Manager</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchImportEvidenceToAssessmentControl(ctx, operations.BatchImportEvidenceToAssessmentControlRequest{
        RequestBody: operations.BatchImportEvidenceToAssessmentControlRequestBody{
            ManualEvidence: []shared.ManualEvidence{
                shared.ManualEvidence{
                    S3ResourcePath: sdk.String("perferendis"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
        AssessmentID: "hic",
        ControlID: "saepe",
        ControlSetID: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchImportEvidenceToAssessmentControlResponse != nil {
        // handle response
    }
}
```

## CreateAssessment

 Creates an assessment in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateAssessment(ctx, operations.CreateAssessmentRequest{
        RequestBody: operations.CreateAssessmentRequestBody{
            AssessmentReportsDestination: operations.CreateAssessmentRequestBodyAssessmentReportsDestination{
                Destination: sdk.String("in"),
                DestinationType: shared.AssessmentReportDestinationTypeEnumS3.ToPointer(),
            },
            Description: sdk.String("corporis"),
            FrameworkID: "iste",
            Name: "Mr. Kerry Predovic",
            Roles: []shared.Role{
                shared.Role{
                    RoleArn: "mollitia",
                    RoleType: shared.RoleTypeEnumResourceOwner,
                },
                shared.Role{
                    RoleArn: "dolores",
                    RoleType: shared.RoleTypeEnumProcessOwner,
                },
                shared.Role{
                    RoleArn: "corporis",
                    RoleType: shared.RoleTypeEnumProcessOwner,
                },
            },
            Scope: operations.CreateAssessmentRequestBodyScope{
                AwsAccounts: []shared.AWSAccount{
                    shared.AWSAccount{
                        EmailAddress: sdk.String("enim"),
                        ID: sdk.String("955907af-f1a3-4a2f-a946-7739251aa52c"),
                        Name: sdk.String("Mandy Hills"),
                    },
                    shared.AWSAccount{
                        EmailAddress: sdk.String("aut"),
                        ID: sdk.String("19da1ffe-78f0-497b-8074-f15471b5e6e1"),
                        Name: sdk.String("Alison Mann"),
                    },
                    shared.AWSAccount{
                        EmailAddress: sdk.String("modi"),
                        ID: sdk.String("88e1e91e-450a-4d2a-bd44-269802d502a9"),
                        Name: sdk.String("Olivia Rice"),
                    },
                    shared.AWSAccount{
                        EmailAddress: sdk.String("eum"),
                        ID: sdk.String("3c969e9a-3efa-477d-bb14-cd66ae395efb"),
                        Name: sdk.String("Marco Olson"),
                    },
                },
                AwsServices: []shared.AWSService{
                    shared.AWSService{
                        ServiceName: sdk.String("amet"),
                    },
                    shared.AWSService{
                        ServiceName: sdk.String("deserunt"),
                    },
                    shared.AWSService{
                        ServiceName: sdk.String("nisi"),
                    },
                    shared.AWSService{
                        ServiceName: sdk.String("vel"),
                    },
                },
            },
            Tags: map[string]string{
                "omnis": "molestiae",
                "perferendis": "nihil",
                "magnam": "distinctio",
            },
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAssessmentResponse != nil {
        // handle response
    }
}
```

## CreateAssessmentFramework

 Creates a custom framework in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateAssessmentFramework(ctx, operations.CreateAssessmentFrameworkRequest{
        RequestBody: operations.CreateAssessmentFrameworkRequestBody{
            ComplianceType: sdk.String("vero"),
            ControlSets: []shared.CreateAssessmentFrameworkControlSet{
                shared.CreateAssessmentFrameworkControlSet{
                    Controls: []shared.CreateAssessmentFrameworkControl{
                        shared.CreateAssessmentFrameworkControl{
                            ID: "41959890-afa5-463e-a516-fe4c8b711e5b",
                        },
                    },
                    Name: "Kristie Spencer",
                },
            },
            Description: sdk.String("pariatur"),
            Name: "Kathryn Lang",
            Tags: map[string]string{
                "quo": "illum",
            },
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAssessmentFrameworkResponse != nil {
        // handle response
    }
}
```

## CreateAssessmentReport

 Creates an assessment report for the specified assessment. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateAssessmentReport(ctx, operations.CreateAssessmentReportRequest{
        RequestBody: operations.CreateAssessmentReportRequestBody{
            Description: sdk.String("ab"),
            Name: "Rickey Hintz",
            QueryStatement: sdk.String("nam"),
        },
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("amet"),
        AssessmentID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAssessmentReportResponse != nil {
        // handle response
    }
}
```

## CreateControl

 Creates a new custom control in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateControl(ctx, operations.CreateControlRequest{
        RequestBody: operations.CreateControlRequestBody{
            ActionPlanInstructions: sdk.String("cumque"),
            ActionPlanTitle: sdk.String("corporis"),
            ControlMappingSources: []shared.CreateControlMappingSource{
                shared.CreateControlMappingSource{
                    SourceDescription: sdk.String("libero"),
                    SourceFrequency: shared.SourceFrequencyEnumMonthly.ToPointer(),
                    SourceKeyword: &shared.SourceKeyword{
                        KeywordInputType: shared.KeywordInputTypeEnumSelectFromList.ToPointer(),
                        KeywordValue: sdk.String("dolores"),
                    },
                    SourceName: sdk.String("quis"),
                    SourceSetUpOption: shared.SourceSetUpOptionEnumProceduralControlsMapping.ToPointer(),
                    SourceType: shared.SourceTypeEnumAwsSecurityHub.ToPointer(),
                    TroubleshootingText: sdk.String("eaque"),
                },
                shared.CreateControlMappingSource{
                    SourceDescription: sdk.String("quis"),
                    SourceFrequency: shared.SourceFrequencyEnumDaily.ToPointer(),
                    SourceKeyword: &shared.SourceKeyword{
                        KeywordInputType: shared.KeywordInputTypeEnumSelectFromList.ToPointer(),
                        KeywordValue: sdk.String("eos"),
                    },
                    SourceName: sdk.String("perferendis"),
                    SourceSetUpOption: shared.SourceSetUpOptionEnumSystemControlsMapping.ToPointer(),
                    SourceType: shared.SourceTypeEnumAwsAPICall.ToPointer(),
                    TroubleshootingText: sdk.String("quam"),
                },
                shared.CreateControlMappingSource{
                    SourceDescription: sdk.String("dolor"),
                    SourceFrequency: shared.SourceFrequencyEnumMonthly.ToPointer(),
                    SourceKeyword: &shared.SourceKeyword{
                        KeywordInputType: shared.KeywordInputTypeEnumSelectFromList.ToPointer(),
                        KeywordValue: sdk.String("nostrum"),
                    },
                    SourceName: sdk.String("hic"),
                    SourceSetUpOption: shared.SourceSetUpOptionEnumProceduralControlsMapping.ToPointer(),
                    SourceType: shared.SourceTypeEnumAwsAPICall.ToPointer(),
                    TroubleshootingText: sdk.String("facilis"),
                },
                shared.CreateControlMappingSource{
                    SourceDescription: sdk.String("perspiciatis"),
                    SourceFrequency: shared.SourceFrequencyEnumDaily.ToPointer(),
                    SourceKeyword: &shared.SourceKeyword{
                        KeywordInputType: shared.KeywordInputTypeEnumSelectFromList.ToPointer(),
                        KeywordValue: sdk.String("porro"),
                    },
                    SourceName: sdk.String("consequuntur"),
                    SourceSetUpOption: shared.SourceSetUpOptionEnumProceduralControlsMapping.ToPointer(),
                    SourceType: shared.SourceTypeEnumAwsAPICall.ToPointer(),
                    TroubleshootingText: sdk.String("eaque"),
                },
            },
            Description: sdk.String("occaecati"),
            Name: "Travis Zemlak",
            Tags: map[string]string{
                "dolorum": "deleniti",
                "pariatur": "provident",
                "nobis": "libero",
            },
            TestingInformation: sdk.String("delectus"),
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateControlResponse != nil {
        // handle response
    }
}
```

## DeleteAssessment

 Deletes an assessment in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteAssessment(ctx, operations.DeleteAssessmentRequest{
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        AssessmentID: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAssessmentResponse != nil {
        // handle response
    }
}
```

## DeleteAssessmentFramework

 Deletes a custom framework in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteAssessmentFramework(ctx, operations.DeleteAssessmentFrameworkRequest{
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("odio"),
        FrameworkID: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAssessmentFrameworkResponse != nil {
        // handle response
    }
}
```

## DeleteAssessmentFrameworkShare

 Deletes a share request for a custom framework in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteAssessmentFrameworkShare(ctx, operations.DeleteAssessmentFrameworkShareRequest{
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("atque"),
        RequestID: "sit",
        RequestType: operations.DeleteAssessmentFrameworkShareRequestTypeEnumReceived,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAssessmentFrameworkShareResponse != nil {
        // handle response
    }
}
```

## DeleteAssessmentReport

<p>Deletes an assessment report in Audit Manager. </p> <p>When you run the <code>DeleteAssessmentReport</code> operation, Audit Manager attempts to delete the following data:</p> <ol> <li> <p>The specified assessment report that’s stored in your S3 bucket</p> </li> <li> <p>The associated metadata that’s stored in Audit Manager</p> </li> </ol> <p>If Audit Manager can’t access the assessment report in your S3 bucket, the report isn’t deleted. In this event, the <code>DeleteAssessmentReport</code> operation doesn’t fail. Instead, it proceeds to delete the associated metadata only. You must then delete the assessment report from the S3 bucket yourself. </p> <p>This scenario happens when Audit Manager receives a <code>403 (Forbidden)</code> or <code>404 (Not Found)</code> error from Amazon S3. To avoid this, make sure that your S3 bucket is available, and that you configured the correct permissions for Audit Manager to delete resources in your S3 bucket. For an example permissions policy that you can use, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/security_iam_id-based-policy-examples.html#full-administrator-access-assessment-report-destination">Assessment report destination permissions</a> in the <i>Audit Manager User Guide</i>. For information about the issues that could cause a <code>403 (Forbidden)</code> or <code>404 (Not Found</code>) error from Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a> in the <i>Amazon Simple Storage Service API Reference</i>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteAssessmentReport(ctx, operations.DeleteAssessmentReportRequest{
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        AssessmentID: "omnis",
        AssessmentReportID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAssessmentReportResponse != nil {
        // handle response
    }
}
```

## DeleteControl

 Deletes a custom control in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteControl(ctx, operations.DeleteControlRequest{
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("saepe"),
        ControlID: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteControlResponse != nil {
        // handle response
    }
}
```

## DeregisterAccount

<p> Deregisters an account in Audit Manager. </p> <note> <p>Before you deregister, you can use the <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateSettings.html">UpdateSettings</a> API operation to set your preferred data retention policy. By default, Audit Manager retains your data. If you want to delete your data, you can use the <code>DeregistrationPolicy</code> attribute to request the deletion of your data. </p> <p>For more information about data retention, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/data-protection.html">Data Protection</a> in the <i>Audit Manager User Guide</i>. </p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeregisterAccount(ctx, operations.DeregisterAccountRequest{
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("optio"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterAccountResponse != nil {
        // handle response
    }
}
```

## DeregisterOrganizationAdminAccount

<p>Removes the specified Amazon Web Services account as a delegated administrator for Audit Manager. </p> <p>When you remove a delegated administrator from your Audit Manager settings, you continue to have access to the evidence that you previously collected under that account. This is also the case when you deregister a delegated administrator from Organizations. However, Audit Manager stops collecting and attaching evidence to that delegated administrator account moving forward.</p> <important> <p>Keep in mind the following cleanup task if you use evidence finder:</p> <p>Before you use your management account to remove a delegated administrator, make sure that the current delegated administrator account signs in to Audit Manager and disables evidence finder first. Disabling evidence finder automatically deletes the event data store that was created in their account when they enabled evidence finder. If this task isn’t completed, the event data store remains in their account. In this case, we recommend that the original delegated administrator goes to CloudTrail Lake and manually <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-eds-disable-termination.html">deletes the event data store</a>.</p> <p>This cleanup task is necessary to ensure that you don't end up with multiple event data stores. Audit Manager ignores an unused event data store after you remove or change a delegated administrator account. However, the unused event data store continues to incur storage costs from CloudTrail Lake if you don't delete it.</p> </important> <p>When you deregister a delegated administrator account for Audit Manager, the data for that account isn’t deleted. If you want to delete resource data for a delegated administrator account, you must perform that task separately before you deregister the account. Either, you can do this in the Audit Manager console. Or, you can use one of the delete API operations that are provided by Audit Manager. </p> <p>To delete your Audit Manager resource data, see the following instructions: </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessment.html">DeleteAssessment</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-assessment.html">Deleting an assessment</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFramework.html">DeleteAssessmentFramework</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-custom-framework.html">Deleting a custom framework</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFrameworkShare.html">DeleteAssessmentFrameworkShare</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/deleting-shared-framework-requests.html">Deleting a share request</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentReport.html">DeleteAssessmentReport</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/generate-assessment-report.html#delete-assessment-report-steps">Deleting an assessment report</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteControl.html">DeleteControl</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-controls.html">Deleting a custom control</a> in the <i>Audit Manager User Guide</i>)</p> </li> </ul> <p>At this time, Audit Manager doesn't provide an option to delete evidence for a specific delegated administrator. Instead, when your management account deregisters Audit Manager, we perform a cleanup for the current delegated administrator account at the time of deregistration.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeregisterOrganizationAdminAccount(ctx, operations.DeregisterOrganizationAdminAccountRequest{
        RequestBody: operations.DeregisterOrganizationAdminAccountRequestBody{
            AdminAccountID: sdk.String("suscipit"),
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterOrganizationAdminAccountResponse != nil {
        // handle response
    }
}
```

## DisassociateAssessmentReportEvidenceFolder

 Disassociates an evidence folder from the specified assessment report in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateAssessmentReportEvidenceFolder(ctx, operations.DisassociateAssessmentReportEvidenceFolderRequest{
        RequestBody: operations.DisassociateAssessmentReportEvidenceFolderRequestBody{
            EvidenceFolderID: "at",
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        AssessmentID: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateAssessmentReportEvidenceFolderResponse != nil {
        // handle response
    }
}
```

## GetAccountStatus

 Returns the registration status of an account in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAccountStatus(ctx, operations.GetAccountStatusRequest{
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccountStatusResponse != nil {
        // handle response
    }
}
```

## GetAssessment

Returns an assessment from Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAssessment(ctx, operations.GetAssessmentRequest{
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("totam"),
        AssessmentID: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAssessmentResponse != nil {
        // handle response
    }
}
```

## GetAssessmentFramework

Returns a framework from Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAssessmentFramework(ctx, operations.GetAssessmentFrameworkRequest{
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("neque"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        FrameworkID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAssessmentFrameworkResponse != nil {
        // handle response
    }
}
```

## GetAssessmentReportURL

 Returns the URL of an assessment report in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetAssessmentReportURL(ctx, operations.GetAssessmentReportURLRequest{
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        AssessmentID: "soluta",
        AssessmentReportID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAssessmentReportURLResponse != nil {
        // handle response
    }
}
```

## GetChangeLogs

 Returns a list of changelogs from Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetChangeLogs(ctx, operations.GetChangeLogsRequest{
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("facilis"),
        AssessmentID: "aliquid",
        ControlID: sdk.String("quam"),
        ControlSetID: sdk.String("molestias"),
        MaxResults: sdk.Int64(840429),
        NextToken: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetChangeLogsResponse != nil {
        // handle response
    }
}
```

## GetControl

 Returns a control from Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetControl(ctx, operations.GetControlRequest{
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("nam"),
        ControlID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetControlResponse != nil {
        // handle response
    }
}
```

## GetDelegations

 Returns a list of delegations from an audit owner to a delegate. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDelegations(ctx, operations.GetDelegationsRequest{
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        MaxResults: sdk.Int64(83422),
        NextToken: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDelegationsResponse != nil {
        // handle response
    }
}
```

## GetEvidence

 Returns evidence from Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetEvidence(ctx, operations.GetEvidenceRequest{
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("tempore"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("dolore"),
        AssessmentID: "labore",
        ControlSetID: "adipisci",
        EvidenceFolderID: "dolorum",
        EvidenceID: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEvidenceResponse != nil {
        // handle response
    }
}
```

## GetEvidenceByEvidenceFolder

 Returns all evidence from a specified evidence folder in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetEvidenceByEvidenceFolder(ctx, operations.GetEvidenceByEvidenceFolderRequest{
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        AssessmentID: "porro",
        ControlSetID: "doloribus",
        EvidenceFolderID: "ut",
        MaxResults: sdk.Int64(703495),
        NextToken: sdk.String("cupiditate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEvidenceByEvidenceFolderResponse != nil {
        // handle response
    }
}
```

## GetEvidenceFolder

 Returns an evidence folder from the specified assessment in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetEvidenceFolder(ctx, operations.GetEvidenceFolderRequest{
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("quisquam"),
        AssessmentID: "vero",
        ControlSetID: "omnis",
        EvidenceFolderID: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEvidenceFolderResponse != nil {
        // handle response
    }
}
```

## GetEvidenceFoldersByAssessment

 Returns the evidence folders from a specified assessment in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetEvidenceFoldersByAssessment(ctx, operations.GetEvidenceFoldersByAssessmentRequest{
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        AssessmentID: "hic",
        MaxResults: sdk.Int64(715561),
        NextToken: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEvidenceFoldersByAssessmentResponse != nil {
        // handle response
    }
}
```

## GetEvidenceFoldersByAssessmentControl

 Returns a list of evidence folders that are associated with a specified control in an Audit Manager assessment. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetEvidenceFoldersByAssessmentControl(ctx, operations.GetEvidenceFoldersByAssessmentControlRequest{
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        AssessmentID: "illum",
        ControlID: "sequi",
        ControlSetID: "natus",
        MaxResults: sdk.Int64(773326),
        NextToken: sdk.String("aut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEvidenceFoldersByAssessmentControlResponse != nil {
        // handle response
    }
}
```

## GetInsights

Gets the latest analytics data for all your current active assessments. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetInsights(ctx, operations.GetInsightsRequest{
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("exercitationem"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("doloribus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInsightsResponse != nil {
        // handle response
    }
}
```

## GetInsightsByAssessment

Gets the latest analytics data for a specific active assessment. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetInsightsByAssessment(ctx, operations.GetInsightsByAssessmentRequest{
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("ducimus"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        AssessmentID: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetInsightsByAssessmentResponse != nil {
        // handle response
    }
}
```

## GetOrganizationAdminAccount

 Returns the name of the delegated Amazon Web Services administrator account for the organization. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetOrganizationAdminAccount(ctx, operations.GetOrganizationAdminAccountRequest{
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("ratione"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("laudantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationAdminAccountResponse != nil {
        // handle response
    }
}
```

## GetServicesInScope

Returns a list of all of the Amazon Web Services that you can choose to include in your assessment. When you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateAssessment.html">create an assessment</a>, specify which of these services you want to include to narrow the assessment's <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Scope.html">scope</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetServicesInScope(ctx, operations.GetServicesInScopeRequest{
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServicesInScopeResponse != nil {
        // handle response
    }
}
```

## GetSettings

 Returns the settings for the specified Amazon Web Services account. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSettings(ctx, operations.GetSettingsRequest{
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("impedit"),
        Attribute: operations.GetSettingsAttributeEnumSnsTopic,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSettingsResponse != nil {
        // handle response
    }
}
```

## ListAssessmentControlInsightsByControlDomain

<p>Lists the latest analytics data for controls within a specific control domain and a specific active assessment.</p> <note> <p>Control insights are listed only if the control belongs to the control domain and assessment that was specified. Moreover, the control must have collected evidence on the <code>lastUpdated</code> date of <code>controlInsightsByAssessment</code>. If neither of these conditions are met, no data is listed for that control. </p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAssessmentControlInsightsByControlDomain(ctx, operations.ListAssessmentControlInsightsByControlDomainRequest{
        XAmzAlgorithm: sdk.String("veniam"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("inventore"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        AssessmentID: "recusandae",
        ControlDomainID: "aspernatur",
        MaxResults: sdk.Int64(325310),
        NextToken: sdk.String("eaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssessmentControlInsightsByControlDomainResponse != nil {
        // handle response
    }
}
```

## ListAssessmentFrameworkShareRequests

 Returns a list of sent or received share requests for custom frameworks in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAssessmentFrameworkShareRequests(ctx, operations.ListAssessmentFrameworkShareRequestsRequest{
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("aliquam"),
        MaxResults: sdk.Int64(146946),
        NextToken: sdk.String("accusamus"),
        RequestType: operations.ListAssessmentFrameworkShareRequestsRequestTypeEnumSent,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssessmentFrameworkShareRequestsResponse != nil {
        // handle response
    }
}
```

## ListAssessmentFrameworks

 Returns a list of the frameworks that are available in the Audit Manager framework library. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAssessmentFrameworks(ctx, operations.ListAssessmentFrameworksRequest{
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("eum"),
        FrameworkType: operations.ListAssessmentFrameworksFrameworkTypeEnumStandard,
        MaxResults: sdk.Int64(752135),
        NextToken: sdk.String("quas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssessmentFrameworksResponse != nil {
        // handle response
    }
}
```

## ListAssessmentReports

 Returns a list of assessment reports created in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAssessmentReports(ctx, operations.ListAssessmentReportsRequest{
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("numquam"),
        MaxResults: sdk.Int64(131482),
        NextToken: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssessmentReportsResponse != nil {
        // handle response
    }
}
```

## ListAssessments

 Returns a list of current and past assessments from Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAssessments(ctx, operations.ListAssessmentsRequest{
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("esse"),
        MaxResults: sdk.Int64(524593),
        NextToken: sdk.String("fuga"),
        Status: operations.ListAssessmentsStatusEnumActive.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssessmentsResponse != nil {
        // handle response
    }
}
```

## ListControlDomainInsights

<p>Lists the latest analytics data for control domains across all of your active assessments. </p> <note> <p>A control domain is listed only if at least one of the controls within that domain collected evidence on the <code>lastUpdated</code> date of <code>controlDomainInsights</code>. If this condition isn’t met, no data is listed for that control domain.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListControlDomainInsights(ctx, operations.ListControlDomainInsightsRequest{
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("eos"),
        MaxResults: sdk.Int64(509342),
        NextToken: sdk.String("quisquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListControlDomainInsightsResponse != nil {
        // handle response
    }
}
```

## ListControlDomainInsightsByAssessment

<p>Lists analytics data for control domains within a specified active assessment.</p> <note> <p>A control domain is listed only if at least one of the controls within that domain collected evidence on the <code>lastUpdated</code> date of <code>controlDomainInsights</code>. If this condition isn’t met, no data is listed for that domain.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListControlDomainInsightsByAssessment(ctx, operations.ListControlDomainInsightsByAssessmentRequest{
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("illum"),
        AssessmentID: "quo",
        MaxResults: sdk.Int64(681359),
        NextToken: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListControlDomainInsightsByAssessmentResponse != nil {
        // handle response
    }
}
```

## ListControlInsightsByControlDomain

<p>Lists the latest analytics data for controls within a specific control domain across all active assessments.</p> <note> <p>Control insights are listed only if the control belongs to the control domain that was specified and the control collected evidence on the <code>lastUpdated</code> date of <code>controlInsightsMetadata</code>. If neither of these conditions are met, no data is listed for that control. </p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListControlInsightsByControlDomain(ctx, operations.ListControlInsightsByControlDomainRequest{
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("debitis"),
        ControlDomainID: "ipsam",
        MaxResults: sdk.Int64(133465),
        NextToken: sdk.String("sequi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListControlInsightsByControlDomainResponse != nil {
        // handle response
    }
}
```

## ListControls

 Returns a list of controls from Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListControls(ctx, operations.ListControlsRequest{
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        ControlType: operations.ListControlsControlTypeEnumStandard,
        MaxResults: sdk.Int64(469498),
        NextToken: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListControlsResponse != nil {
        // handle response
    }
}
```

## ListKeywordsForDataSource

 Returns a list of keywords that are pre-mapped to the specified control data source. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListKeywordsForDataSource(ctx, operations.ListKeywordsForDataSourceRequest{
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("dolores"),
        MaxResults: sdk.Int64(645570),
        NextToken: sdk.String("molestiae"),
        Source: operations.ListKeywordsForDataSourceSourceEnumAwsCloudtrail,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListKeywordsForDataSourceResponse != nil {
        // handle response
    }
}
```

## ListNotifications

 Returns a list of all Audit Manager notifications. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListNotifications(ctx, operations.ListNotificationsRequest{
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("fugit"),
        MaxResults: sdk.Int64(681393),
        NextToken: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNotificationsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

 Returns a list of tags for the specified resource in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        ResourceArn: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## RegisterAccount

 Enables Audit Manager for the specified Amazon Web Services account. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RegisterAccount(ctx, operations.RegisterAccountRequest{
        RequestBody: operations.RegisterAccountRequestBody{
            DelegatedAdminAccount: sdk.String("ratione"),
            KmsKey: sdk.String("explicabo"),
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("eveniet"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterAccountResponse != nil {
        // handle response
    }
}
```

## RegisterOrganizationAdminAccount

 Enables an Amazon Web Services account within the organization as the delegated administrator for Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RegisterOrganizationAdminAccount(ctx, operations.RegisterOrganizationAdminAccountRequest{
        RequestBody: operations.RegisterOrganizationAdminAccountRequestBody{
            AdminAccountID: "veritatis",
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterOrganizationAdminAccountResponse != nil {
        // handle response
    }
}
```

## StartAssessmentFrameworkShare

<p> Creates a share request for a custom framework in Audit Manager. </p> <p>The share request specifies a recipient and notifies them that a custom framework is available. Recipients have 120 days to accept or decline the request. If no action is taken, the share request expires.</p> <p>When you create a share request, Audit Manager stores a snapshot of your custom framework in the US East (N. Virginia) Amazon Web Services Region. Audit Manager also stores a backup of the same snapshot in the US West (Oregon) Amazon Web Services Region.</p> <p>Audit Manager deletes the snapshot and the backup snapshot when one of the following events occurs:</p> <ul> <li> <p>The sender revokes the share request.</p> </li> <li> <p>The recipient declines the share request.</p> </li> <li> <p>The recipient encounters an error and doesn't successfully accept the share request.</p> </li> <li> <p>The share request expires before the recipient responds to the request.</p> </li> </ul> <p>When a sender <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/framework-sharing.html#framework-sharing-resend">resends a share request</a>, the snapshot is replaced with an updated version that corresponds with the latest version of the custom framework. </p> <p>When a recipient accepts a share request, the snapshot is replicated into their Amazon Web Services account under the Amazon Web Services Region that was specified in the share request. </p> <important> <p>When you invoke the <code>StartAssessmentFrameworkShare</code> API, you are about to share a custom framework with another Amazon Web Services account. You may not share a custom framework that is derived from a standard framework if the standard framework is designated as not eligible for sharing by Amazon Web Services, unless you have obtained permission to do so from the owner of the standard framework. To learn more about which standard frameworks are eligible for sharing, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/share-custom-framework-concepts-and-terminology.html#eligibility">Framework sharing eligibility</a> in the <i>Audit Manager User Guide</i>.</p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartAssessmentFrameworkShare(ctx, operations.StartAssessmentFrameworkShareRequest{
        RequestBody: operations.StartAssessmentFrameworkShareRequestBody{
            Comment: sdk.String("vel"),
            DestinationAccount: "harum",
            DestinationRegion: "molestiae",
        },
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("culpa"),
        FrameworkID: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartAssessmentFrameworkShareResponse != nil {
        // handle response
    }
}
```

## TagResource

 Tags the specified resource in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "cumque": "consequuntur",
            },
        },
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
        ResourceArn: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

 Removes a tag from a resource in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("error"),
        ResourceArn: "sint",
        TagKeys: []string{
            "possimus",
            "quia",
            "eveniet",
            "asperiores",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateAssessment

 Edits an Audit Manager assessment. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateAssessment(ctx, operations.UpdateAssessmentRequest{
        RequestBody: operations.UpdateAssessmentRequestBody{
            AssessmentDescription: sdk.String("facere"),
            AssessmentName: sdk.String("veritatis"),
            AssessmentReportsDestination: &operations.UpdateAssessmentRequestBodyAssessmentReportsDestination{
                Destination: sdk.String("consequuntur"),
                DestinationType: shared.AssessmentReportDestinationTypeEnumS3.ToPointer(),
            },
            Roles: []shared.Role{
                shared.Role{
                    RoleArn: "similique",
                    RoleType: shared.RoleTypeEnumResourceOwner,
                },
            },
            Scope: operations.UpdateAssessmentRequestBodyScope{
                AwsAccounts: []shared.AWSAccount{
                    shared.AWSAccount{
                        EmailAddress: sdk.String("tenetur"),
                        ID: sdk.String("1e674bdb-04f1-4575-a082-d68ea19f1d17"),
                        Name: sdk.String("Joann Bogan"),
                    },
                    shared.AWSAccount{
                        EmailAddress: sdk.String("iste"),
                        ID: sdk.String("d08086a1-8403-494c-a607-1f93f5f0642d"),
                        Name: sdk.String("Simon Kuhn"),
                    },
                },
                AwsServices: []shared.AWSService{
                    shared.AWSService{
                        ServiceName: sdk.String("quae"),
                    },
                    shared.AWSService{
                        ServiceName: sdk.String("quaerat"),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("id"),
        AssessmentID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAssessmentResponse != nil {
        // handle response
    }
}
```

## UpdateAssessmentControl

 Updates a control within an assessment in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateAssessmentControl(ctx, operations.UpdateAssessmentControlRequest{
        RequestBody: operations.UpdateAssessmentControlRequestBody{
            CommentBody: sdk.String("velit"),
            ControlStatus: operations.UpdateAssessmentControlRequestBodyControlStatusEnumReviewed.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("ducimus"),
        XAmzSignedHeaders: sdk.String("quos"),
        AssessmentID: "vel",
        ControlID: "labore",
        ControlSetID: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAssessmentControlResponse != nil {
        // handle response
    }
}
```

## UpdateAssessmentControlSetStatus

 Updates the status of a control set in an Audit Manager assessment. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateAssessmentControlSetStatus(ctx, operations.UpdateAssessmentControlSetStatusRequest{
        RequestBody: operations.UpdateAssessmentControlSetStatusRequestBody{
            Comment: "facilis",
            Status: operations.UpdateAssessmentControlSetStatusRequestBodyStatusEnumReviewed,
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        AssessmentID: "aliquid",
        ControlSetID: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAssessmentControlSetStatusResponse != nil {
        // handle response
    }
}
```

## UpdateAssessmentFramework

 Updates a custom framework in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateAssessmentFramework(ctx, operations.UpdateAssessmentFrameworkRequest{
        RequestBody: operations.UpdateAssessmentFrameworkRequestBody{
            ComplianceType: sdk.String("cum"),
            ControlSets: []shared.UpdateAssessmentFrameworkControlSet{
                shared.UpdateAssessmentFrameworkControlSet{
                    Controls: []shared.CreateAssessmentFrameworkControl{
                        shared.CreateAssessmentFrameworkControl{
                            ID: "5ed4f6fb-ee41-4f33-b17f-e35b60eb1ea4",
                        },
                        shared.CreateAssessmentFrameworkControl{
                            ID: "26555ba3-c287-444e-953b-88f3a8d8f5c0",
                        },
                    },
                    ID: sdk.String("b2f2fb7b-194a-4276-b269-16fe1f08f429"),
                    Name: "Jana Emard",
                },
            },
            Description: sdk.String("quos"),
            Name: "Eddie Goodwin",
        },
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        FrameworkID: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAssessmentFrameworkResponse != nil {
        // handle response
    }
}
```

## UpdateAssessmentFrameworkShare

 Updates a share request for a custom framework in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateAssessmentFrameworkShare(ctx, operations.UpdateAssessmentFrameworkShareRequest{
        RequestBody: operations.UpdateAssessmentFrameworkShareRequestBody{
            Action: operations.UpdateAssessmentFrameworkShareRequestBodyActionEnumDecline,
            RequestType: operations.UpdateAssessmentFrameworkShareRequestBodyRequestTypeEnumReceived,
        },
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        RequestID: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAssessmentFrameworkShareResponse != nil {
        // handle response
    }
}
```

## UpdateAssessmentStatus

 Updates the status of an assessment in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateAssessmentStatus(ctx, operations.UpdateAssessmentStatusRequest{
        RequestBody: operations.UpdateAssessmentStatusRequestBody{
            Status: operations.UpdateAssessmentStatusRequestBodyStatusEnumInactive,
        },
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("officiis"),
        AssessmentID: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAssessmentStatusResponse != nil {
        // handle response
    }
}
```

## UpdateControl

 Updates a custom control in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateControl(ctx, operations.UpdateControlRequest{
        RequestBody: operations.UpdateControlRequestBody{
            ActionPlanInstructions: sdk.String("laudantium"),
            ActionPlanTitle: sdk.String("exercitationem"),
            ControlMappingSources: []shared.ControlMappingSource{
                shared.ControlMappingSource{
                    SourceDescription: sdk.String("cum"),
                    SourceFrequency: shared.SourceFrequencyEnumWeekly.ToPointer(),
                    SourceID: sdk.String("dolorum"),
                    SourceKeyword: &shared.SourceKeyword{
                        KeywordInputType: shared.KeywordInputTypeEnumSelectFromList.ToPointer(),
                        KeywordValue: sdk.String("voluptatum"),
                    },
                    SourceName: sdk.String("error"),
                    SourceSetUpOption: shared.SourceSetUpOptionEnumProceduralControlsMapping.ToPointer(),
                    SourceType: shared.SourceTypeEnumAwsAPICall.ToPointer(),
                    TroubleshootingText: sdk.String("debitis"),
                },
                shared.ControlMappingSource{
                    SourceDescription: sdk.String("neque"),
                    SourceFrequency: shared.SourceFrequencyEnumMonthly.ToPointer(),
                    SourceID: sdk.String("nostrum"),
                    SourceKeyword: &shared.SourceKeyword{
                        KeywordInputType: shared.KeywordInputTypeEnumSelectFromList.ToPointer(),
                        KeywordValue: sdk.String("officia"),
                    },
                    SourceName: sdk.String("dolorum"),
                    SourceSetUpOption: shared.SourceSetUpOptionEnumProceduralControlsMapping.ToPointer(),
                    SourceType: shared.SourceTypeEnumManual.ToPointer(),
                    TroubleshootingText: sdk.String("tempora"),
                },
                shared.ControlMappingSource{
                    SourceDescription: sdk.String("atque"),
                    SourceFrequency: shared.SourceFrequencyEnumDaily.ToPointer(),
                    SourceID: sdk.String("ut"),
                    SourceKeyword: &shared.SourceKeyword{
                        KeywordInputType: shared.KeywordInputTypeEnumSelectFromList.ToPointer(),
                        KeywordValue: sdk.String("fugiat"),
                    },
                    SourceName: sdk.String("voluptatem"),
                    SourceSetUpOption: shared.SourceSetUpOptionEnumProceduralControlsMapping.ToPointer(),
                    SourceType: shared.SourceTypeEnumAwsAPICall.ToPointer(),
                    TroubleshootingText: sdk.String("magnam"),
                },
            },
            Description: sdk.String("consequatur"),
            Name: "Brittany Bailey",
            TestingInformation: sdk.String("repudiandae"),
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("vel"),
        ControlID: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateControlResponse != nil {
        // handle response
    }
}
```

## UpdateSettings

 Updates Audit Manager settings for the current account. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateSettings(ctx, operations.UpdateSettingsRequest{
        RequestBody: operations.UpdateSettingsRequestBody{
            DefaultAssessmentReportsDestination: &operations.UpdateSettingsRequestBodyDefaultAssessmentReportsDestination{
                Destination: sdk.String("saepe"),
                DestinationType: shared.AssessmentReportDestinationTypeEnumS3.ToPointer(),
            },
            DefaultProcessOwners: []shared.Role{
                shared.Role{
                    RoleArn: "consequatur",
                    RoleType: shared.RoleTypeEnumProcessOwner,
                },
                shared.Role{
                    RoleArn: "reiciendis",
                    RoleType: shared.RoleTypeEnumProcessOwner,
                },
                shared.Role{
                    RoleArn: "harum",
                    RoleType: shared.RoleTypeEnumProcessOwner,
                },
            },
            DeregistrationPolicy: &operations.UpdateSettingsRequestBodyDeregistrationPolicy{
                DeleteResources: shared.DeleteResourcesEnumAll.ToPointer(),
            },
            EvidenceFinderEnabled: sdk.Bool(false),
            KmsKey: sdk.String("occaecati"),
            SnsTopic: sdk.String("labore"),
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("laboriosam"),
        XAmzSignedHeaders: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSettingsResponse != nil {
        // handle response
    }
}
```

## ValidateAssessmentReportIntegrity

 Validates the integrity of an assessment report in Audit Manager. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ValidateAssessmentReportIntegrity(ctx, operations.ValidateAssessmentReportIntegrityRequest{
        RequestBody: operations.ValidateAssessmentReportIntegrityRequestBody{
            S3RelativePath: "amet",
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ValidateAssessmentReportIntegrityResponse != nil {
        // handle response
    }
}
```
