# SDK

## Overview

<fullname>Amazon Mechanical Turk API Reference</fullname>

Amazon Web Services documentation
<https://docs.aws.amazon.com/mturk-requester/>
### Available Operations

* [AcceptQualificationRequest](#acceptqualificationrequest) - <p> The <code>AcceptQualificationRequest</code> operation approves a Worker's request for a Qualification. </p> <p> Only the owner of the Qualification type can grant a Qualification request for that type. </p> <p> A successful request for the <code>AcceptQualificationRequest</code> operation returns with no errors and an empty body. </p>
* [ApproveAssignment](#approveassignment) - <p> The <code>ApproveAssignment</code> operation approves the results of a completed assignment. </p> <p> Approving an assignment initiates two payments from the Requester's Amazon.com account </p> <ul> <li> <p> The Worker who submitted the results is paid the reward specified in the HIT. </p> </li> <li> <p> Amazon Mechanical Turk fees are debited. </p> </li> </ul> <p> If the Requester's account does not have adequate funds for these payments, the call to ApproveAssignment returns an exception, and the approval is not processed. You can include an optional feedback message with the approval, which the Worker can see in the Status section of the web site. </p> <p> You can also call this operation for assignments that were previous rejected and approve them by explicitly overriding the previous rejection. This only works on rejected assignments that were submitted within the previous 30 days and only if the assignment's related HIT has not been deleted. </p>
* [AssociateQualificationWithWorker](#associatequalificationwithworker) - <p> The <code>AssociateQualificationWithWorker</code> operation gives a Worker a Qualification. <code>AssociateQualificationWithWorker</code> does not require that the Worker submit a Qualification request. It gives the Qualification directly to the Worker. </p> <p> You can only assign a Qualification of a Qualification type that you created (using the <code>CreateQualificationType</code> operation). </p> <note> <p> Note: <code>AssociateQualificationWithWorker</code> does not affect any pending Qualification requests for the Qualification by the Worker. If you assign a Qualification to a Worker, then later grant a Qualification request made by the Worker, the granting of the request may modify the Qualification score. To resolve a pending Qualification request without affecting the Qualification the Worker already has, reject the request with the <code>RejectQualificationRequest</code> operation. </p> </note>
* [CreateAdditionalAssignmentsForHIT](#createadditionalassignmentsforhit) - <p> The <code>CreateAdditionalAssignmentsForHIT</code> operation increases the maximum number of assignments of an existing HIT. </p> <p> To extend the maximum number of assignments, specify the number of additional assignments.</p> <note> <ul> <li> <p>HITs created with fewer than 10 assignments cannot be extended to have 10 or more assignments. Attempting to add assignments in a way that brings the total number of assignments for a HIT from fewer than 10 assignments to 10 or more assignments will result in an <code>AWS.MechanicalTurk.InvalidMaximumAssignmentsIncrease</code> exception.</p> </li> <li> <p>HITs that were created before July 22, 2015 cannot be extended. Attempting to extend HITs that were created before July 22, 2015 will result in an <code>AWS.MechanicalTurk.HITTooOldForExtension</code> exception. </p> </li> </ul> </note>
* [CreateHIT](#createhit) - <p>The <code>CreateHIT</code> operation creates a new Human Intelligence Task (HIT). The new HIT is made available for Workers to find and accept on the Amazon Mechanical Turk website. </p> <p> This operation allows you to specify a new HIT by passing in values for the properties of the HIT, such as its title, reward amount and number of assignments. When you pass these values to <code>CreateHIT</code>, a new HIT is created for you, with a new <code>HITTypeID</code>. The HITTypeID can be used to create additional HITs in the future without needing to specify common parameters such as the title, description and reward amount each time.</p> <p> An alternative way to create HITs is to first generate a HITTypeID using the <code>CreateHITType</code> operation and then call the <code>CreateHITWithHITType</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. </p> <p>CreateHIT also supports several ways to provide question data: by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>. </p> <note> <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>.</p> </note>
* [CreateHITType](#createhittype) -  The <code>CreateHITType</code> operation creates a new HIT type. This operation allows you to define a standard set of HIT properties to use when creating HITs. If you register a HIT type with values that match an existing HIT type, the HIT type ID of the existing type will be returned. 
* [CreateHITWithHITType](#createhitwithhittype) - <p> The <code>CreateHITWithHITType</code> operation creates a new Human Intelligence Task (HIT) using an existing HITTypeID generated by the <code>CreateHITType</code> operation. </p> <p> This is an alternative way to create HITs from the <code>CreateHIT</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. </p> <p>CreateHITWithHITType also supports several ways to provide question data: by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>. </p> <note> <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>. </p> </note>
* [CreateQualificationType](#createqualificationtype) -  The <code>CreateQualificationType</code> operation creates a new Qualification type, which is represented by a <code>QualificationType</code> data structure. 
* [CreateWorkerBlock](#createworkerblock) - The <code>CreateWorkerBlock</code> operation allows you to prevent a Worker from working on your HITs. For example, you can block a Worker who is producing poor quality work. You can block up to 100,000 Workers.
* [DeleteHIT](#deletehit) - <p> The <code>DeleteHIT</code> operation is used to delete HIT that is no longer needed. Only the Requester who created the HIT can delete it. </p> <p> You can only dispose of HITs that are in the <code>Reviewable</code> state, with all of their submitted assignments already either approved or rejected. If you call the DeleteHIT operation on a HIT that is not in the <code>Reviewable</code> state (for example, that has not expired, or still has active assignments), or on a HIT that is Reviewable but without all of its submitted assignments already approved or rejected, the service will return an error. </p> <note> <ul> <li> <p> HITs are automatically disposed of after 120 days. </p> </li> <li> <p> After you dispose of a HIT, you can no longer approve the HIT's rejected assignments. </p> </li> <li> <p> Disposed HITs are not returned in results for the ListHITs operation. </p> </li> <li> <p> Disposing HITs can improve the performance of operations such as ListReviewableHITs and ListHITs. </p> </li> </ul> </note>
* [DeleteQualificationType](#deletequalificationtype) - <p> The <code>DeleteQualificationType</code> deletes a Qualification type and deletes any HIT types that are associated with the Qualification type. </p> <p>This operation does not revoke Qualifications already assigned to Workers because the Qualifications might be needed for active HITs. If there are any pending requests for the Qualification type, Amazon Mechanical Turk rejects those requests. After you delete a Qualification type, you can no longer use it to create HITs or HIT types.</p> <note> <p>DeleteQualificationType must wait for all the HITs that use the deleted Qualification type to be deleted before completing. It may take up to 48 hours before DeleteQualificationType completes and the unique name of the Qualification type is available for reuse with CreateQualificationType.</p> </note>
* [DeleteWorkerBlock](#deleteworkerblock) - The <code>DeleteWorkerBlock</code> operation allows you to reinstate a blocked Worker to work on your HITs. This operation reverses the effects of the CreateWorkerBlock operation. You need the Worker ID to use this operation. If the Worker ID is missing or invalid, this operation fails and returns the message “WorkerId is invalid.” If the specified Worker is not blocked, this operation returns successfully.
* [DisassociateQualificationFromWorker](#disassociatequalificationfromworker) - <p> The <code>DisassociateQualificationFromWorker</code> revokes a previously granted Qualification from a user. </p> <p> You can provide a text message explaining why the Qualification was revoked. The user who had the Qualification can see this message. </p>
* [GetAccountBalance](#getaccountbalance) - The <code>GetAccountBalance</code> operation retrieves the Prepaid HITs balance in your Amazon Mechanical Turk account if you are a Prepaid Requester. Alternatively, this operation will retrieve the remaining available AWS Billing usage if you have enabled AWS Billing. Note: If you have enabled AWS Billing and still have a remaining Prepaid HITs balance, this balance can be viewed on the My Account page in the Requester console.
* [GetAssignment](#getassignment) -  The <code>GetAssignment</code> operation retrieves the details of the specified Assignment. 
* [GetFileUploadURL](#getfileuploadurl) -  The <code>GetFileUploadURL</code> operation generates and returns a temporary URL. You use the temporary URL to retrieve a file uploaded by a Worker as an answer to a FileUploadAnswer question for a HIT. The temporary URL is generated the instant the GetFileUploadURL operation is called, and is valid for 60 seconds. You can get a temporary file upload URL any time until the HIT is disposed. After the HIT is disposed, any uploaded files are deleted, and cannot be retrieved. Pending Deprecation on December 12, 2017. The Answer Specification structure will no longer support the <code>FileUploadAnswer</code> element to be used for the QuestionForm data structure. Instead, we recommend that Requesters who want to create HITs asking Workers to upload files to use Amazon S3. 
* [GetHIT](#gethit) -  The <code>GetHIT</code> operation retrieves the details of the specified HIT. 
* [GetQualificationScore](#getqualificationscore) - <p> The <code>GetQualificationScore</code> operation returns the value of a Worker's Qualification for a given Qualification type. </p> <p> To get a Worker's Qualification, you must know the Worker's ID. The Worker's ID is included in the assignment data returned by the <code>ListAssignmentsForHIT</code> operation. </p> <p>Only the owner of a Qualification type can query the value of a Worker's Qualification of that type.</p>
* [GetQualificationType](#getqualificationtype) -  The <code>GetQualificationType</code>operation retrieves information about a Qualification type using its ID. 
* [ListAssignmentsForHIT](#listassignmentsforhit) - <p> The <code>ListAssignmentsForHIT</code> operation retrieves completed assignments for a HIT. You can use this operation to retrieve the results for a HIT. </p> <p> You can get assignments for a HIT at any time, even if the HIT is not yet Reviewable. If a HIT requested multiple assignments, and has received some results but has not yet become Reviewable, you can still retrieve the partial results with this operation. </p> <p> Use the AssignmentStatus parameter to control which set of assignments for a HIT are returned. The ListAssignmentsForHIT operation can return submitted assignments awaiting approval, or it can return assignments that have already been approved or rejected. You can set AssignmentStatus=Approved,Rejected to get assignments that have already been approved and rejected together in one result set. </p> <p> Only the Requester who created the HIT can retrieve the assignments for that HIT. </p> <p> Results are sorted and divided into numbered pages and the operation returns a single page of results. You can use the parameters of the operation to control sorting and pagination. </p>
* [ListBonusPayments](#listbonuspayments) -  The <code>ListBonusPayments</code> operation retrieves the amounts of bonuses you have paid to Workers for a given HIT or assignment. 
* [ListHITs](#listhits) -  The <code>ListHITs</code> operation returns all of a Requester's HITs. The operation returns HITs of any status, except for HITs that have been deleted of with the DeleteHIT operation or that have been auto-deleted. 
* [ListHITsForQualificationType](#listhitsforqualificationtype) -  The <code>ListHITsForQualificationType</code> operation returns the HITs that use the given Qualification type for a Qualification requirement. The operation returns HITs of any status, except for HITs that have been deleted with the <code>DeleteHIT</code> operation or that have been auto-deleted. 
* [ListQualificationRequests](#listqualificationrequests) -  The <code>ListQualificationRequests</code> operation retrieves requests for Qualifications of a particular Qualification type. The owner of the Qualification type calls this operation to poll for pending requests, and accepts them using the AcceptQualification operation. 
* [ListQualificationTypes](#listqualificationtypes) -  The <code>ListQualificationTypes</code> operation returns a list of Qualification types, filtered by an optional search term. 
* [ListReviewPolicyResultsForHIT](#listreviewpolicyresultsforhit) -  The <code>ListReviewPolicyResultsForHIT</code> operation retrieves the computed results and the actions taken in the course of executing your Review Policies for a given HIT. For information about how to specify Review Policies when you call CreateHIT, see Review Policies. The ListReviewPolicyResultsForHIT operation can return results for both Assignment-level and HIT-level review results. 
* [ListReviewableHITs](#listreviewablehits) -  The <code>ListReviewableHITs</code> operation retrieves the HITs with Status equal to Reviewable or Status equal to Reviewing that belong to the Requester calling the operation. 
* [ListWorkerBlocks](#listworkerblocks) - The <code>ListWorkersBlocks</code> operation retrieves a list of Workers who are blocked from working on your HITs.
* [ListWorkersWithQualificationType](#listworkerswithqualificationtype) -  The <code>ListWorkersWithQualificationType</code> operation returns all of the Workers that have been associated with a given Qualification type. 
* [NotifyWorkers](#notifyworkers) -  The <code>NotifyWorkers</code> operation sends an email to one or more Workers that you specify with the Worker ID. You can specify up to 100 Worker IDs to send the same message with a single call to the NotifyWorkers operation. The NotifyWorkers operation will send a notification email to a Worker only if you have previously approved or rejected work from the Worker. 
* [RejectAssignment](#rejectassignment) - <p> The <code>RejectAssignment</code> operation rejects the results of a completed assignment. </p> <p> You can include an optional feedback message with the rejection, which the Worker can see in the Status section of the web site. When you include a feedback message with the rejection, it helps the Worker understand why the assignment was rejected, and can improve the quality of the results the Worker submits in the future. </p> <p> Only the Requester who created the HIT can reject an assignment for the HIT. </p>
* [RejectQualificationRequest](#rejectqualificationrequest) - <p> The <code>RejectQualificationRequest</code> operation rejects a user's request for a Qualification. </p> <p> You can provide a text message explaining why the request was rejected. The Worker who made the request can see this message.</p>
* [SendBonus](#sendbonus) -  The <code>SendBonus</code> operation issues a payment of money from your account to a Worker. This payment happens separately from the reward you pay to the Worker when you approve the Worker's assignment. The SendBonus operation requires the Worker's ID and the assignment ID as parameters to initiate payment of the bonus. You must include a message that explains the reason for the bonus payment, as the Worker may not be expecting the payment. Amazon Mechanical Turk collects a fee for bonus payments, similar to the HIT listing fee. This operation fails if your account does not have enough funds to pay for both the bonus and the fees. 
* [SendTestEventNotification](#sendtesteventnotification) -  The <code>SendTestEventNotification</code> operation causes Amazon Mechanical Turk to send a notification message as if a HIT event occurred, according to the provided notification specification. This allows you to test notifications without setting up notifications for a real HIT type and trying to trigger them using the website. When you call this operation, the service attempts to send the test notification immediately. 
* [UpdateExpirationForHIT](#updateexpirationforhit) -  The <code>UpdateExpirationForHIT</code> operation allows you update the expiration time of a HIT. If you update it to a time in the past, the HIT will be immediately expired. 
* [UpdateHITReviewStatus](#updatehitreviewstatus) -  The <code>UpdateHITReviewStatus</code> operation updates the status of a HIT. If the status is Reviewable, this operation can update the status to Reviewing, or it can revert a Reviewing HIT back to the Reviewable status. 
* [UpdateHITTypeOfHIT](#updatehittypeofhit) -  The <code>UpdateHITTypeOfHIT</code> operation allows you to change the HITType properties of a HIT. This operation disassociates the HIT from its old HITType properties and associates it with the new HITType properties. The HIT takes on the properties of the new HITType in place of the old ones. 
* [UpdateNotificationSettings](#updatenotificationsettings) -  The <code>UpdateNotificationSettings</code> operation creates, updates, disables or re-enables notifications for a HIT type. If you call the UpdateNotificationSettings operation for a HIT type that already has a notification specification, the operation replaces the old specification with a new one. You can call the UpdateNotificationSettings operation to enable or disable notifications for the HIT type, without having to modify the notification specification itself by providing updates to the Active status without specifying a new notification specification. To change the Active status of a HIT type's notifications, the HIT type must already have a notification specification, or one must be provided in the same call to <code>UpdateNotificationSettings</code>. 
* [UpdateQualificationType](#updatequalificationtype) - <p> The <code>UpdateQualificationType</code> operation modifies the attributes of an existing Qualification type, which is represented by a QualificationType data structure. Only the owner of a Qualification type can modify its attributes. </p> <p> Most attributes of a Qualification type can be changed after the type has been created. However, the Name and Keywords fields cannot be modified. The RetryDelayInSeconds parameter can be modified or added to change the delay or to enable retries, but RetryDelayInSeconds cannot be used to disable retries. </p> <p> You can use this operation to update the test for a Qualification type. The test is updated based on the values specified for the Test, TestDurationInSeconds and AnswerKey parameters. All three parameters specify the updated test. If you are updating the test for a type, you must specify the Test and TestDurationInSeconds parameters. The AnswerKey parameter is optional; omitting it specifies that the updated test does not have an answer key. </p> <p> If you omit the Test parameter, the test for the Qualification type is unchanged. There is no way to remove a test from a Qualification type that has one. If the type already has a test, you cannot update it to be AutoGranted. If the Qualification type does not have a test and one is provided by an update, the type will henceforth have a test. </p> <p> If you want to update the test duration or answer key for an existing test without changing the questions, you must specify a Test parameter with the original questions, along with the updated values. </p> <p> If you provide an updated Test but no AnswerKey, the new test will not have an answer key. Requests for such Qualifications must be granted manually. </p> <p> You can also update the AutoGranted and AutoGrantedValue attributes of the Qualification type.</p>

## AcceptQualificationRequest

<p> The <code>AcceptQualificationRequest</code> operation approves a Worker's request for a Qualification. </p> <p> Only the owner of the Qualification type can grant a Qualification request for that type. </p> <p> A successful request for the <code>AcceptQualificationRequest</code> operation returns with no errors and an empty body. </p>

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
    res, err := s.SDK.AcceptQualificationRequest(ctx, operations.AcceptQualificationRequestRequest{
        AcceptQualificationRequestRequest: shared.AcceptQualificationRequestRequest{
            IntegerValue: sdk.Int64(623564),
            QualificationRequestID: "deserunt",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.AcceptQualificationRequestXAmzTargetEnumMTurkRequesterServiceV20170117AcceptQualificationRequest,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptQualificationRequestResponse != nil {
        // handle response
    }
}
```

## ApproveAssignment

<p> The <code>ApproveAssignment</code> operation approves the results of a completed assignment. </p> <p> Approving an assignment initiates two payments from the Requester's Amazon.com account </p> <ul> <li> <p> The Worker who submitted the results is paid the reward specified in the HIT. </p> </li> <li> <p> Amazon Mechanical Turk fees are debited. </p> </li> </ul> <p> If the Requester's account does not have adequate funds for these payments, the call to ApproveAssignment returns an exception, and the approval is not processed. You can include an optional feedback message with the approval, which the Worker can see in the Status section of the web site. </p> <p> You can also call this operation for assignments that were previous rejected and approve them by explicitly overriding the previous rejection. This only works on rejected assignments that were submitted within the previous 30 days and only if the assignment's related HIT has not been deleted. </p>

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
    res, err := s.SDK.ApproveAssignment(ctx, operations.ApproveAssignmentRequest{
        ApproveAssignmentRequest: shared.ApproveAssignmentRequest{
            AssignmentID: "suscipit",
            OverrideRejection: sdk.Bool(false),
            RequesterFeedback: sdk.String("molestiae"),
        },
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.ApproveAssignmentXAmzTargetEnumMTurkRequesterServiceV20170117ApproveAssignment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApproveAssignmentResponse != nil {
        // handle response
    }
}
```

## AssociateQualificationWithWorker

<p> The <code>AssociateQualificationWithWorker</code> operation gives a Worker a Qualification. <code>AssociateQualificationWithWorker</code> does not require that the Worker submit a Qualification request. It gives the Qualification directly to the Worker. </p> <p> You can only assign a Qualification of a Qualification type that you created (using the <code>CreateQualificationType</code> operation). </p> <note> <p> Note: <code>AssociateQualificationWithWorker</code> does not affect any pending Qualification requests for the Qualification by the Worker. If you assign a Qualification to a Worker, then later grant a Qualification request made by the Worker, the granting of the request may modify the Qualification score. To resolve a pending Qualification request without affecting the Qualification the Worker already has, reject the request with the <code>RejectQualificationRequest</code> operation. </p> </note>

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
    res, err := s.SDK.AssociateQualificationWithWorker(ctx, operations.AssociateQualificationWithWorkerRequest{
        AssociateQualificationWithWorkerRequest: shared.AssociateQualificationWithWorkerRequest{
            IntegerValue: sdk.Int64(836079),
            QualificationTypeID: "ab",
            SendNotification: sdk.Bool(false),
            WorkerID: "quis",
        },
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.AssociateQualificationWithWorkerXAmzTargetEnumMTurkRequesterServiceV20170117AssociateQualificationWithWorker,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateQualificationWithWorkerResponse != nil {
        // handle response
    }
}
```

## CreateAdditionalAssignmentsForHIT

<p> The <code>CreateAdditionalAssignmentsForHIT</code> operation increases the maximum number of assignments of an existing HIT. </p> <p> To extend the maximum number of assignments, specify the number of additional assignments.</p> <note> <ul> <li> <p>HITs created with fewer than 10 assignments cannot be extended to have 10 or more assignments. Attempting to add assignments in a way that brings the total number of assignments for a HIT from fewer than 10 assignments to 10 or more assignments will result in an <code>AWS.MechanicalTurk.InvalidMaximumAssignmentsIncrease</code> exception.</p> </li> <li> <p>HITs that were created before July 22, 2015 cannot be extended. Attempting to extend HITs that were created before July 22, 2015 will result in an <code>AWS.MechanicalTurk.HITTooOldForExtension</code> exception. </p> </li> </ul> </note>

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
    res, err := s.SDK.CreateAdditionalAssignmentsForHIT(ctx, operations.CreateAdditionalAssignmentsForHITRequest{
        CreateAdditionalAssignmentsForHITRequest: shared.CreateAdditionalAssignmentsForHITRequest{
            HITID: "odit",
            NumberOfAdditionalAssignments: 870013,
            UniqueRequestToken: sdk.String("at"),
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.CreateAdditionalAssignmentsForHITXAmzTargetEnumMTurkRequesterServiceV20170117CreateAdditionalAssignmentsForHit,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAdditionalAssignmentsForHITResponse != nil {
        // handle response
    }
}
```

## CreateHIT

<p>The <code>CreateHIT</code> operation creates a new Human Intelligence Task (HIT). The new HIT is made available for Workers to find and accept on the Amazon Mechanical Turk website. </p> <p> This operation allows you to specify a new HIT by passing in values for the properties of the HIT, such as its title, reward amount and number of assignments. When you pass these values to <code>CreateHIT</code>, a new HIT is created for you, with a new <code>HITTypeID</code>. The HITTypeID can be used to create additional HITs in the future without needing to specify common parameters such as the title, description and reward amount each time.</p> <p> An alternative way to create HITs is to first generate a HITTypeID using the <code>CreateHITType</code> operation and then call the <code>CreateHITWithHITType</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. </p> <p>CreateHIT also supports several ways to provide question data: by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>. </p> <note> <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>.</p> </note>

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
    res, err := s.SDK.CreateHIT(ctx, operations.CreateHITRequest{
        CreateHITRequest: shared.CreateHITRequest{
            AssignmentDurationInSeconds: 678880,
            AssignmentReviewPolicy: &shared.ReviewPolicy{
                Parameters: []shared.PolicyParameter{
                    shared.PolicyParameter{
                        Key: sdk.String("nam"),
                        MapEntries: []shared.ParameterMapEntry{
                            shared.ParameterMapEntry{
                                Key: sdk.String("occaecati"),
                                Values: []string{
                                    "deleniti",
                                },
                            },
                            shared.ParameterMapEntry{
                                Key: sdk.String("hic"),
                                Values: []string{
                                    "totam",
                                    "beatae",
                                    "commodi",
                                    "molestiae",
                                },
                            },
                            shared.ParameterMapEntry{
                                Key: sdk.String("modi"),
                                Values: []string{
                                    "impedit",
                                },
                            },
                        },
                        Values: []string{
                            "esse",
                            "ipsum",
                            "excepturi",
                        },
                    },
                },
                PolicyName: "aspernatur",
            },
            AutoApprovalDelayInSeconds: sdk.Int64(18789),
            Description: "ad",
            HITLayoutID: sdk.String("natus"),
            HITLayoutParameters: []shared.HITLayoutParameter{
                shared.HITLayoutParameter{
                    Name: "Curtis Morissette",
                    Value: "saepe",
                },
            },
            HITReviewPolicy: &shared.ReviewPolicy{
                Parameters: []shared.PolicyParameter{
                    shared.PolicyParameter{
                        Key: sdk.String("in"),
                        MapEntries: []shared.ParameterMapEntry{
                            shared.ParameterMapEntry{
                                Key: sdk.String("iste"),
                                Values: []string{
                                    "saepe",
                                    "quidem",
                                },
                            },
                            shared.ParameterMapEntry{
                                Key: sdk.String("architecto"),
                                Values: []string{
                                    "reiciendis",
                                },
                            },
                        },
                        Values: []string{
                            "mollitia",
                            "laborum",
                            "dolores",
                        },
                    },
                    shared.PolicyParameter{
                        Key: sdk.String("dolorem"),
                        MapEntries: []shared.ParameterMapEntry{
                            shared.ParameterMapEntry{
                                Key: sdk.String("explicabo"),
                                Values: []string{
                                    "enim",
                                    "omnis",
                                    "nemo",
                                    "minima",
                                },
                            },
                            shared.ParameterMapEntry{
                                Key: sdk.String("excepturi"),
                                Values: []string{
                                    "iure",
                                },
                            },
                        },
                        Values: []string{
                            "doloribus",
                            "sapiente",
                            "architecto",
                        },
                    },
                    shared.PolicyParameter{
                        Key: sdk.String("mollitia"),
                        MapEntries: []shared.ParameterMapEntry{
                            shared.ParameterMapEntry{
                                Key: sdk.String("culpa"),
                                Values: []string{
                                    "repellat",
                                },
                            },
                        },
                        Values: []string{
                            "occaecati",
                            "numquam",
                            "commodi",
                        },
                    },
                },
                PolicyName: "quam",
            },
            Keywords: sdk.String("molestiae"),
            LifetimeInSeconds: 244425,
            MaxAssignments: sdk.Int64(623510),
            QualificationRequirements: []shared.QualificationRequirement{
                shared.QualificationRequirement{
                    ActionsGuarded: shared.HITAccessActionsEnumPreviewAndAccept.ToPointer(),
                    Comparator: shared.ComparatorEnumLessThanOrEqualTo,
                    IntegerValues: []int64{
                        656330,
                        317202,
                        138183,
                    },
                    LocaleValues: []shared.Locale{
                        shared.Locale{
                            Country: "Comoros",
                            Subdivision: sdk.String("tenetur"),
                        },
                        shared.Locale{
                            Country: "Guinea-Bissau",
                            Subdivision: sdk.String("id"),
                        },
                        shared.Locale{
                            Country: "Somalia",
                            Subdivision: sdk.String("aut"),
                        },
                        shared.Locale{
                            Country: "Bermuda",
                            Subdivision: sdk.String("error"),
                        },
                    },
                    QualificationTypeID: "temporibus",
                    RequiredToPreview: sdk.Bool(false),
                },
            },
            Question: sdk.String("laborum"),
            RequesterAnnotation: sdk.String("quasi"),
            Reward: "reiciendis",
            Title: "Dr.",
            UniqueRequestToken: sdk.String("vero"),
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.CreateHITXAmzTargetEnumMTurkRequesterServiceV20170117CreateHit,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateHITResponse != nil {
        // handle response
    }
}
```

## CreateHITType

 The <code>CreateHITType</code> operation creates a new HIT type. This operation allows you to define a standard set of HIT properties to use when creating HITs. If you register a HIT type with values that match an existing HIT type, the HIT type ID of the existing type will be returned. 

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
    res, err := s.SDK.CreateHITType(ctx, operations.CreateHITTypeRequest{
        CreateHITTypeRequest: shared.CreateHITTypeRequest{
            AssignmentDurationInSeconds: 19987,
            AutoApprovalDelayInSeconds: sdk.Int64(39187),
            Description: "reprehenderit",
            Keywords: sdk.String("ut"),
            QualificationRequirements: []shared.QualificationRequirement{
                shared.QualificationRequirement{
                    ActionsGuarded: shared.HITAccessActionsEnumAccept.ToPointer(),
                    Comparator: shared.ComparatorEnumGreaterThanOrEqualTo,
                    IntegerValues: []int64{
                        480894,
                        118727,
                    },
                    LocaleValues: []shared.Locale{
                        shared.Locale{
                            Country: "Georgia",
                            Subdivision: sdk.String("accusamus"),
                        },
                        shared.Locale{
                            Country: "Iraq",
                            Subdivision: sdk.String("repudiandae"),
                        },
                        shared.Locale{
                            Country: "Bahamas",
                            Subdivision: sdk.String("ipsum"),
                        },
                    },
                    QualificationTypeID: "quidem",
                    RequiredToPreview: sdk.Bool(false),
                },
                shared.QualificationRequirement{
                    ActionsGuarded: shared.HITAccessActionsEnumPreviewAndAccept.ToPointer(),
                    Comparator: shared.ComparatorEnumNotEqualTo,
                    IntegerValues: []int64{
                        265389,
                        508969,
                        523248,
                        916723,
                    },
                    LocaleValues: []shared.Locale{
                        shared.Locale{
                            Country: "Turks and Caicos Islands",
                            Subdivision: sdk.String("sint"),
                        },
                    },
                    QualificationTypeID: "veritatis",
                    RequiredToPreview: sdk.Bool(false),
                },
                shared.QualificationRequirement{
                    ActionsGuarded: shared.HITAccessActionsEnumDiscoverPreviewAndAccept.ToPointer(),
                    Comparator: shared.ComparatorEnumGreaterThan,
                    IntegerValues: []int64{
                        9356,
                        667411,
                    },
                    LocaleValues: []shared.Locale{
                        shared.Locale{
                            Country: "Bulgaria",
                            Subdivision: sdk.String("deserunt"),
                        },
                        shared.Locale{
                            Country: "Portugal",
                            Subdivision: sdk.String("quibusdam"),
                        },
                        shared.Locale{
                            Country: "Finland",
                            Subdivision: sdk.String("modi"),
                        },
                        shared.Locale{
                            Country: "Christmas Island",
                            Subdivision: sdk.String("aliquid"),
                        },
                    },
                    QualificationTypeID: "cupiditate",
                    RequiredToPreview: sdk.Bool(false),
                },
                shared.QualificationRequirement{
                    ActionsGuarded: shared.HITAccessActionsEnumPreviewAndAccept.ToPointer(),
                    Comparator: shared.ComparatorEnumLessThan,
                    IntegerValues: []int64{
                        828940,
                    },
                    LocaleValues: []shared.Locale{
                        shared.Locale{
                            Country: "Albania",
                            Subdivision: sdk.String("fugit"),
                        },
                        shared.Locale{
                            Country: "Palau",
                            Subdivision: sdk.String("excepturi"),
                        },
                    },
                    QualificationTypeID: "tempora",
                    RequiredToPreview: sdk.Bool(false),
                },
            },
            Reward: "facilis",
            Title: "Miss",
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.CreateHITTypeXAmzTargetEnumMTurkRequesterServiceV20170117CreateHitType,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateHITTypeResponse != nil {
        // handle response
    }
}
```

## CreateHITWithHITType

<p> The <code>CreateHITWithHITType</code> operation creates a new Human Intelligence Task (HIT) using an existing HITTypeID generated by the <code>CreateHITType</code> operation. </p> <p> This is an alternative way to create HITs from the <code>CreateHIT</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. </p> <p>CreateHITWithHITType also supports several ways to provide question data: by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>. </p> <note> <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>. </p> </note>

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
    res, err := s.SDK.CreateHITWithHITType(ctx, operations.CreateHITWithHITTypeRequest{
        CreateHITWithHITTypeRequest: shared.CreateHITWithHITTypeRequest{
            AssignmentReviewPolicy: &shared.ReviewPolicy{
                Parameters: []shared.PolicyParameter{
                    shared.PolicyParameter{
                        Key: sdk.String("necessitatibus"),
                        MapEntries: []shared.ParameterMapEntry{
                            shared.ParameterMapEntry{
                                Key: sdk.String("officia"),
                                Values: []string{
                                    "debitis",
                                },
                            },
                            shared.ParameterMapEntry{
                                Key: sdk.String("a"),
                                Values: []string{
                                    "in",
                                    "in",
                                    "illum",
                                },
                            },
                            shared.ParameterMapEntry{
                                Key: sdk.String("maiores"),
                                Values: []string{
                                    "dicta",
                                    "magnam",
                                    "cumque",
                                },
                            },
                        },
                        Values: []string{
                            "ea",
                            "aliquid",
                            "laborum",
                            "accusamus",
                        },
                    },
                    shared.PolicyParameter{
                        Key: sdk.String("non"),
                        MapEntries: []shared.ParameterMapEntry{
                            shared.ParameterMapEntry{
                                Key: sdk.String("enim"),
                                Values: []string{
                                    "delectus",
                                    "quidem",
                                    "provident",
                                    "nam",
                                },
                            },
                            shared.ParameterMapEntry{
                                Key: sdk.String("id"),
                                Values: []string{
                                    "deleniti",
                                    "sapiente",
                                    "amet",
                                },
                            },
                            shared.ParameterMapEntry{
                                Key: sdk.String("deserunt"),
                                Values: []string{
                                    "vel",
                                    "natus",
                                },
                            },
                        },
                        Values: []string{
                            "molestiae",
                            "perferendis",
                            "nihil",
                        },
                    },
                    shared.PolicyParameter{
                        Key: sdk.String("magnam"),
                        MapEntries: []shared.ParameterMapEntry{
                            shared.ParameterMapEntry{
                                Key: sdk.String("id"),
                                Values: []string{
                                    "labore",
                                    "suscipit",
                                },
                            },
                            shared.ParameterMapEntry{
                                Key: sdk.String("natus"),
                                Values: []string{
                                    "eum",
                                    "vero",
                                    "aspernatur",
                                },
                            },
                            shared.ParameterMapEntry{
                                Key: sdk.String("architecto"),
                                Values: []string{
                                    "et",
                                    "excepturi",
                                },
                            },
                        },
                        Values: []string{
                            "provident",
                            "quos",
                        },
                    },
                },
                PolicyName: "sint",
            },
            HITLayoutID: sdk.String("accusantium"),
            HITLayoutParameters: []shared.HITLayoutParameter{
                shared.HITLayoutParameter{
                    Name: "Shaun Hammes",
                    Value: "necessitatibus",
                },
                shared.HITLayoutParameter{
                    Name: "Vivian Boyle",
                    Value: "debitis",
                },
                shared.HITLayoutParameter{
                    Name: "Jasmine Lind",
                    Value: "architecto",
                },
            },
            HITReviewPolicy: &shared.ReviewPolicy{
                Parameters: []shared.PolicyParameter{
                    shared.PolicyParameter{
                        Key: sdk.String("repudiandae"),
                        MapEntries: []shared.ParameterMapEntry{
                            shared.ParameterMapEntry{
                                Key: sdk.String("expedita"),
                                Values: []string{
                                    "repellat",
                                    "quibusdam",
                                },
                            },
                            shared.ParameterMapEntry{
                                Key: sdk.String("sed"),
                                Values: []string{
                                    "pariatur",
                                    "accusantium",
                                    "consequuntur",
                                    "praesentium",
                                },
                            },
                        },
                        Values: []string{
                            "magni",
                            "sunt",
                            "quo",
                        },
                    },
                },
                PolicyName: "illum",
            },
            HITTypeID: "pariatur",
            LifetimeInSeconds: 807319,
            MaxAssignments: sdk.Int64(411397),
            Question: sdk.String("excepturi"),
            RequesterAnnotation: sdk.String("odit"),
            UniqueRequestToken: sdk.String("ea"),
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("autem"),
        XAmzTarget: operations.CreateHITWithHITTypeXAmzTargetEnumMTurkRequesterServiceV20170117CreateHitWithHitType,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateHITWithHITTypeResponse != nil {
        // handle response
    }
}
```

## CreateQualificationType

 The <code>CreateQualificationType</code> operation creates a new Qualification type, which is represented by a <code>QualificationType</code> data structure. 

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
    res, err := s.SDK.CreateQualificationType(ctx, operations.CreateQualificationTypeRequest{
        CreateQualificationTypeRequest: shared.CreateQualificationTypeRequest{
            AnswerKey: sdk.String("nam"),
            AutoGranted: sdk.Bool(false),
            AutoGrantedValue: sdk.Int64(50588),
            Description: "pariatur",
            Keywords: sdk.String("nemo"),
            Name: "Joseph Steuber DDS",
            QualificationTypeStatus: shared.QualificationTypeStatusEnumActive,
            RetryDelayInSeconds: sdk.Int64(944124),
            Test: sdk.String("libero"),
            TestDurationInSeconds: sdk.Int64(749999),
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
        XAmzTarget: operations.CreateQualificationTypeXAmzTargetEnumMTurkRequesterServiceV20170117CreateQualificationType,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateQualificationTypeResponse != nil {
        // handle response
    }
}
```

## CreateWorkerBlock

The <code>CreateWorkerBlock</code> operation allows you to prevent a Worker from working on your HITs. For example, you can block a Worker who is producing poor quality work. You can block up to 100,000 Workers.

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
    res, err := s.SDK.CreateWorkerBlock(ctx, operations.CreateWorkerBlockRequest{
        CreateWorkerBlockRequest: shared.CreateWorkerBlockRequest{
            Reason: "eos",
            WorkerID: "perferendis",
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.CreateWorkerBlockXAmzTargetEnumMTurkRequesterServiceV20170117CreateWorkerBlock,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorkerBlockResponse != nil {
        // handle response
    }
}
```

## DeleteHIT

<p> The <code>DeleteHIT</code> operation is used to delete HIT that is no longer needed. Only the Requester who created the HIT can delete it. </p> <p> You can only dispose of HITs that are in the <code>Reviewable</code> state, with all of their submitted assignments already either approved or rejected. If you call the DeleteHIT operation on a HIT that is not in the <code>Reviewable</code> state (for example, that has not expired, or still has active assignments), or on a HIT that is Reviewable but without all of its submitted assignments already approved or rejected, the service will return an error. </p> <note> <ul> <li> <p> HITs are automatically disposed of after 120 days. </p> </li> <li> <p> After you dispose of a HIT, you can no longer approve the HIT's rejected assignments. </p> </li> <li> <p> Disposed HITs are not returned in results for the ListHITs operation. </p> </li> <li> <p> Disposing HITs can improve the performance of operations such as ListReviewableHITs and ListHITs. </p> </li> </ul> </note>

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
    res, err := s.SDK.DeleteHIT(ctx, operations.DeleteHITRequest{
        DeleteHITRequest: shared.DeleteHITRequest{
            HITID: "recusandae",
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("perspiciatis"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
        XAmzTarget: operations.DeleteHITXAmzTargetEnumMTurkRequesterServiceV20170117DeleteHit,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteHITResponse != nil {
        // handle response
    }
}
```

## DeleteQualificationType

<p> The <code>DeleteQualificationType</code> deletes a Qualification type and deletes any HIT types that are associated with the Qualification type. </p> <p>This operation does not revoke Qualifications already assigned to Workers because the Qualifications might be needed for active HITs. If there are any pending requests for the Qualification type, Amazon Mechanical Turk rejects those requests. After you delete a Qualification type, you can no longer use it to create HITs or HIT types.</p> <note> <p>DeleteQualificationType must wait for all the HITs that use the deleted Qualification type to be deleted before completing. It may take up to 48 hours before DeleteQualificationType completes and the unique name of the Qualification type is available for reuse with CreateQualificationType.</p> </note>

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
    res, err := s.SDK.DeleteQualificationType(ctx, operations.DeleteQualificationTypeRequest{
        DeleteQualificationTypeRequest: shared.DeleteQualificationTypeRequest{
            QualificationTypeID: "error",
        },
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("modi"),
        XAmzTarget: operations.DeleteQualificationTypeXAmzTargetEnumMTurkRequesterServiceV20170117DeleteQualificationType,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteQualificationTypeResponse != nil {
        // handle response
    }
}
```

## DeleteWorkerBlock

The <code>DeleteWorkerBlock</code> operation allows you to reinstate a blocked Worker to work on your HITs. This operation reverses the effects of the CreateWorkerBlock operation. You need the Worker ID to use this operation. If the Worker ID is missing or invalid, this operation fails and returns the message “WorkerId is invalid.” If the specified Worker is not blocked, this operation returns successfully.

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
    res, err := s.SDK.DeleteWorkerBlock(ctx, operations.DeleteWorkerBlockRequest{
        DeleteWorkerBlockRequest: shared.DeleteWorkerBlockRequest{
            Reason: sdk.String("iste"),
            WorkerID: "dolorum",
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.DeleteWorkerBlockXAmzTargetEnumMTurkRequesterServiceV20170117DeleteWorkerBlock,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteWorkerBlockResponse != nil {
        // handle response
    }
}
```

## DisassociateQualificationFromWorker

<p> The <code>DisassociateQualificationFromWorker</code> revokes a previously granted Qualification from a user. </p> <p> You can provide a text message explaining why the Qualification was revoked. The user who had the Qualification can see this message. </p>

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
    res, err := s.SDK.DisassociateQualificationFromWorker(ctx, operations.DisassociateQualificationFromWorkerRequest{
        DisassociateQualificationFromWorkerRequest: shared.DisassociateQualificationFromWorkerRequest{
            QualificationTypeID: "quos",
            Reason: sdk.String("aliquid"),
            WorkerID: "dolorem",
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.DisassociateQualificationFromWorkerXAmzTargetEnumMTurkRequesterServiceV20170117DisassociateQualificationFromWorker,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateQualificationFromWorkerResponse != nil {
        // handle response
    }
}
```

## GetAccountBalance

The <code>GetAccountBalance</code> operation retrieves the Prepaid HITs balance in your Amazon Mechanical Turk account if you are a Prepaid Requester. Alternatively, this operation will retrieve the remaining available AWS Billing usage if you have enabled AWS Billing. Note: If you have enabled AWS Billing and still have a remaining Prepaid HITs balance, this balance can be viewed on the My Account page in the Requester console.

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
    res, err := s.SDK.GetAccountBalance(ctx, operations.GetAccountBalanceRequest{
        RequestBody: map[string]interface{}{
            "dignissimos": "reiciendis",
            "amet": "dolorum",
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.GetAccountBalanceXAmzTargetEnumMTurkRequesterServiceV20170117GetAccountBalance,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccountBalanceResponse != nil {
        // handle response
    }
}
```

## GetAssignment

 The <code>GetAssignment</code> operation retrieves the details of the specified Assignment. 

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
    res, err := s.SDK.GetAssignment(ctx, operations.GetAssignmentRequest{
        GetAssignmentRequest: shared.GetAssignmentRequest{
            AssignmentID: "accusamus",
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("sit"),
        XAmzTarget: operations.GetAssignmentXAmzTargetEnumMTurkRequesterServiceV20170117GetAssignment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAssignmentResponse != nil {
        // handle response
    }
}
```

## GetFileUploadURL

 The <code>GetFileUploadURL</code> operation generates and returns a temporary URL. You use the temporary URL to retrieve a file uploaded by a Worker as an answer to a FileUploadAnswer question for a HIT. The temporary URL is generated the instant the GetFileUploadURL operation is called, and is valid for 60 seconds. You can get a temporary file upload URL any time until the HIT is disposed. After the HIT is disposed, any uploaded files are deleted, and cannot be retrieved. Pending Deprecation on December 12, 2017. The Answer Specification structure will no longer support the <code>FileUploadAnswer</code> element to be used for the QuestionForm data structure. Instead, we recommend that Requesters who want to create HITs asking Workers to upload files to use Amazon S3. 

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
    res, err := s.SDK.GetFileUploadURL(ctx, operations.GetFileUploadURLRequest{
        GetFileUploadURLRequest: shared.GetFileUploadURLRequest{
            AssignmentID: "fugiat",
            QuestionIdentifier: "ab",
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.GetFileUploadURLXAmzTargetEnumMTurkRequesterServiceV20170117GetFileUploadURL,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFileUploadURLResponse != nil {
        // handle response
    }
}
```

## GetHIT

 The <code>GetHIT</code> operation retrieves the details of the specified HIT. 

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
    res, err := s.SDK.GetHIT(ctx, operations.GetHITRequest{
        GetHITRequest: shared.GetHITRequest{
            HITID: "necessitatibus",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.GetHITXAmzTargetEnumMTurkRequesterServiceV20170117GetHit,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetHITResponse != nil {
        // handle response
    }
}
```

## GetQualificationScore

<p> The <code>GetQualificationScore</code> operation returns the value of a Worker's Qualification for a given Qualification type. </p> <p> To get a Worker's Qualification, you must know the Worker's ID. The Worker's ID is included in the assignment data returned by the <code>ListAssignmentsForHIT</code> operation. </p> <p>Only the owner of a Qualification type can query the value of a Worker's Qualification of that type.</p>

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
    res, err := s.SDK.GetQualificationScore(ctx, operations.GetQualificationScoreRequest{
        GetQualificationScoreRequest: shared.GetQualificationScoreRequest{
            QualificationTypeID: "eius",
            WorkerID: "aspernatur",
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.GetQualificationScoreXAmzTargetEnumMTurkRequesterServiceV20170117GetQualificationScore,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetQualificationScoreResponse != nil {
        // handle response
    }
}
```

## GetQualificationType

 The <code>GetQualificationType</code>operation retrieves information about a Qualification type using its ID. 

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
    res, err := s.SDK.GetQualificationType(ctx, operations.GetQualificationTypeRequest{
        GetQualificationTypeRequest: shared.GetQualificationTypeRequest{
            QualificationTypeID: "deserunt",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("at"),
        XAmzTarget: operations.GetQualificationTypeXAmzTargetEnumMTurkRequesterServiceV20170117GetQualificationType,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetQualificationTypeResponse != nil {
        // handle response
    }
}
```

## ListAssignmentsForHIT

<p> The <code>ListAssignmentsForHIT</code> operation retrieves completed assignments for a HIT. You can use this operation to retrieve the results for a HIT. </p> <p> You can get assignments for a HIT at any time, even if the HIT is not yet Reviewable. If a HIT requested multiple assignments, and has received some results but has not yet become Reviewable, you can still retrieve the partial results with this operation. </p> <p> Use the AssignmentStatus parameter to control which set of assignments for a HIT are returned. The ListAssignmentsForHIT operation can return submitted assignments awaiting approval, or it can return assignments that have already been approved or rejected. You can set AssignmentStatus=Approved,Rejected to get assignments that have already been approved and rejected together in one result set. </p> <p> Only the Requester who created the HIT can retrieve the assignments for that HIT. </p> <p> Results are sorted and divided into numbered pages and the operation returns a single page of results. You can use the parameters of the operation to control sorting and pagination. </p>

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
    res, err := s.SDK.ListAssignmentsForHIT(ctx, operations.ListAssignmentsForHITRequest{
        ListAssignmentsForHITRequest: shared.ListAssignmentsForHITRequest{
            AssignmentStatuses: []shared.AssignmentStatusEnum{
                shared.AssignmentStatusEnumSubmitted,
                shared.AssignmentStatusEnumApproved,
            },
            HITID: "quod",
            MaxResults: sdk.Int64(885338),
            NextToken: sdk.String("qui"),
        },
        MaxResults: sdk.String("dolorum"),
        NextToken: sdk.String("a"),
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.ListAssignmentsForHITXAmzTargetEnumMTurkRequesterServiceV20170117ListAssignmentsForHit,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssignmentsForHITResponse != nil {
        // handle response
    }
}
```

## ListBonusPayments

 The <code>ListBonusPayments</code> operation retrieves the amounts of bonuses you have paid to Workers for a given HIT or assignment. 

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
    res, err := s.SDK.ListBonusPayments(ctx, operations.ListBonusPaymentsRequest{
        ListBonusPaymentsRequest: shared.ListBonusPaymentsRequest{
            AssignmentID: sdk.String("tempore"),
            HITID: sdk.String("accusamus"),
            MaxResults: sdk.Int64(253941),
            NextToken: sdk.String("enim"),
        },
        MaxResults: sdk.String("dolorem"),
        NextToken: sdk.String("sapiente"),
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.ListBonusPaymentsXAmzTargetEnumMTurkRequesterServiceV20170117ListBonusPayments,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBonusPaymentsResponse != nil {
        // handle response
    }
}
```

## ListHITs

 The <code>ListHITs</code> operation returns all of a Requester's HITs. The operation returns HITs of any status, except for HITs that have been deleted of with the DeleteHIT operation or that have been auto-deleted. 

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
    res, err := s.SDK.ListHITs(ctx, operations.ListHITsRequest{
        ListHITsRequest: shared.ListHITsRequest{
            MaxResults: sdk.Int64(730442),
            NextToken: sdk.String("voluptas"),
        },
        MaxResults: sdk.String("deserunt"),
        NextToken: sdk.String("quam"),
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("soluta"),
        XAmzTarget: operations.ListHITsXAmzTargetEnumMTurkRequesterServiceV20170117ListHiTs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHITsResponse != nil {
        // handle response
    }
}
```

## ListHITsForQualificationType

 The <code>ListHITsForQualificationType</code> operation returns the HITs that use the given Qualification type for a Qualification requirement. The operation returns HITs of any status, except for HITs that have been deleted with the <code>DeleteHIT</code> operation or that have been auto-deleted. 

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
    res, err := s.SDK.ListHITsForQualificationType(ctx, operations.ListHITsForQualificationTypeRequest{
        ListHITsForQualificationTypeRequest: shared.ListHITsForQualificationTypeRequest{
            MaxResults: sdk.Int64(117531),
            NextToken: sdk.String("laborum"),
            QualificationTypeID: "totam",
        },
        MaxResults: sdk.String("incidunt"),
        NextToken: sdk.String("aspernatur"),
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("quam"),
        XAmzSignature: sdk.String("molestias"),
        XAmzSignedHeaders: sdk.String("temporibus"),
        XAmzTarget: operations.ListHITsForQualificationTypeXAmzTargetEnumMTurkRequesterServiceV20170117ListHiTsForQualificationType,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHITsForQualificationTypeResponse != nil {
        // handle response
    }
}
```

## ListQualificationRequests

 The <code>ListQualificationRequests</code> operation retrieves requests for Qualifications of a particular Qualification type. The owner of the Qualification type calls this operation to poll for pending requests, and accepts them using the AcceptQualification operation. 

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
    res, err := s.SDK.ListQualificationRequests(ctx, operations.ListQualificationRequestsRequest{
        ListQualificationRequestsRequest: shared.ListQualificationRequestsRequest{
            MaxResults: sdk.Int64(183280),
            NextToken: sdk.String("neque"),
            QualificationTypeID: sdk.String("fugit"),
        },
        MaxResults: sdk.String("magni"),
        NextToken: sdk.String("odio"),
        XAmzAlgorithm: sdk.String("sunt"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("soluta"),
        XAmzTarget: operations.ListQualificationRequestsXAmzTargetEnumMTurkRequesterServiceV20170117ListQualificationRequests,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListQualificationRequestsResponse != nil {
        // handle response
    }
}
```

## ListQualificationTypes

 The <code>ListQualificationTypes</code> operation returns a list of Qualification types, filtered by an optional search term. 

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
    res, err := s.SDK.ListQualificationTypes(ctx, operations.ListQualificationTypesRequest{
        ListQualificationTypesRequest: shared.ListQualificationTypesRequest{
            MaxResults: sdk.Int64(748664),
            MustBeOwnedByCaller: sdk.Bool(false),
            MustBeRequestable: false,
            NextToken: sdk.String("et"),
            Query: sdk.String("saepe"),
        },
        MaxResults: sdk.String("ipsum"),
        NextToken: sdk.String("veritatis"),
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.ListQualificationTypesXAmzTargetEnumMTurkRequesterServiceV20170117ListQualificationTypes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListQualificationTypesResponse != nil {
        // handle response
    }
}
```

## ListReviewPolicyResultsForHIT

 The <code>ListReviewPolicyResultsForHIT</code> operation retrieves the computed results and the actions taken in the course of executing your Review Policies for a given HIT. For information about how to specify Review Policies when you call CreateHIT, see Review Policies. The ListReviewPolicyResultsForHIT operation can return results for both Assignment-level and HIT-level review results. 

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
    res, err := s.SDK.ListReviewPolicyResultsForHIT(ctx, operations.ListReviewPolicyResultsForHITRequest{
        ListReviewPolicyResultsForHITRequest: shared.ListReviewPolicyResultsForHITRequest{
            HITID: "dolore",
            MaxResults: sdk.Int64(286915),
            NextToken: sdk.String("adipisci"),
            PolicyLevels: []shared.ReviewPolicyLevelEnum{
                shared.ReviewPolicyLevelEnumAssignment,
                shared.ReviewPolicyLevelEnumAssignment,
                shared.ReviewPolicyLevelEnumAssignment,
            },
            RetrieveActions: sdk.Bool(false),
            RetrieveResults: sdk.Bool(false),
        },
        MaxResults: sdk.String("quas"),
        NextToken: sdk.String("itaque"),
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.ListReviewPolicyResultsForHITXAmzTargetEnumMTurkRequesterServiceV20170117ListReviewPolicyResultsForHit,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReviewPolicyResultsForHITResponse != nil {
        // handle response
    }
}
```

## ListReviewableHITs

 The <code>ListReviewableHITs</code> operation retrieves the HITs with Status equal to Reviewable or Status equal to Reviewing that belong to the Requester calling the operation. 

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
    res, err := s.SDK.ListReviewableHITs(ctx, operations.ListReviewableHITsRequest{
        ListReviewableHITsRequest: shared.ListReviewableHITsRequest{
            HITTypeID: sdk.String("cupiditate"),
            MaxResults: sdk.Int64(181631),
            NextToken: sdk.String("quae"),
            Status: shared.ReviewableHITStatusEnumReviewing.ToPointer(),
        },
        MaxResults: sdk.String("odio"),
        NextToken: sdk.String("occaecati"),
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.ListReviewableHITsXAmzTargetEnumMTurkRequesterServiceV20170117ListReviewableHiTs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReviewableHITsResponse != nil {
        // handle response
    }
}
```

## ListWorkerBlocks

The <code>ListWorkersBlocks</code> operation retrieves a list of Workers who are blocked from working on your HITs.

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
    res, err := s.SDK.ListWorkerBlocks(ctx, operations.ListWorkerBlocksRequest{
        ListWorkerBlocksRequest: shared.ListWorkerBlocksRequest{
            MaxResults: sdk.Int64(455169),
            NextToken: sdk.String("consectetur"),
        },
        MaxResults: sdk.String("vero"),
        NextToken: sdk.String("tenetur"),
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.ListWorkerBlocksXAmzTargetEnumMTurkRequesterServiceV20170117ListWorkerBlocks,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkerBlocksResponse != nil {
        // handle response
    }
}
```

## ListWorkersWithQualificationType

 The <code>ListWorkersWithQualificationType</code> operation returns all of the Workers that have been associated with a given Qualification type. 

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
    res, err := s.SDK.ListWorkersWithQualificationType(ctx, operations.ListWorkersWithQualificationTypeRequest{
        ListWorkersWithQualificationTypeRequest: shared.ListWorkersWithQualificationTypeRequest{
            MaxResults: sdk.Int64(874288),
            NextToken: sdk.String("ducimus"),
            QualificationTypeID: "dolore",
            Status: shared.QualificationStatusEnumRevoked.ToPointer(),
        },
        MaxResults: sdk.String("illum"),
        NextToken: sdk.String("sequi"),
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.ListWorkersWithQualificationTypeXAmzTargetEnumMTurkRequesterServiceV20170117ListWorkersWithQualificationType,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkersWithQualificationTypeResponse != nil {
        // handle response
    }
}
```

## NotifyWorkers

 The <code>NotifyWorkers</code> operation sends an email to one or more Workers that you specify with the Worker ID. You can specify up to 100 Worker IDs to send the same message with a single call to the NotifyWorkers operation. The NotifyWorkers operation will send a notification email to a Worker only if you have previously approved or rejected work from the Worker. 

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
    res, err := s.SDK.NotifyWorkers(ctx, operations.NotifyWorkersRequest{
        NotifyWorkersRequest: shared.NotifyWorkersRequest{
            MessageText: "porro",
            Subject: "maiores",
            WorkerIds: []string{
                "iusto",
                "eligendi",
                "ducimus",
                "alias",
            },
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("possimus"),
        XAmzTarget: operations.NotifyWorkersXAmzTargetEnumMTurkRequesterServiceV20170117NotifyWorkers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyWorkersResponse != nil {
        // handle response
    }
}
```

## RejectAssignment

<p> The <code>RejectAssignment</code> operation rejects the results of a completed assignment. </p> <p> You can include an optional feedback message with the rejection, which the Worker can see in the Status section of the web site. When you include a feedback message with the rejection, it helps the Worker understand why the assignment was rejected, and can improve the quality of the results the Worker submits in the future. </p> <p> Only the Requester who created the HIT can reject an assignment for the HIT. </p>

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
    res, err := s.SDK.RejectAssignment(ctx, operations.RejectAssignmentRequest{
        RejectAssignmentRequest: shared.RejectAssignmentRequest{
            AssignmentID: "magnam",
            RequesterFeedback: "ratione",
        },
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("ex"),
        XAmzTarget: operations.RejectAssignmentXAmzTargetEnumMTurkRequesterServiceV20170117RejectAssignment,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RejectAssignmentResponse != nil {
        // handle response
    }
}
```

## RejectQualificationRequest

<p> The <code>RejectQualificationRequest</code> operation rejects a user's request for a Qualification. </p> <p> You can provide a text message explaining why the request was rejected. The Worker who made the request can see this message.</p>

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
    res, err := s.SDK.RejectQualificationRequest(ctx, operations.RejectQualificationRequestRequest{
        RejectQualificationRequestRequest: shared.RejectQualificationRequestRequest{
            QualificationRequestID: "nulla",
            Reason: sdk.String("excepturi"),
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.RejectQualificationRequestXAmzTargetEnumMTurkRequesterServiceV20170117RejectQualificationRequest,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RejectQualificationRequestResponse != nil {
        // handle response
    }
}
```

## SendBonus

 The <code>SendBonus</code> operation issues a payment of money from your account to a Worker. This payment happens separately from the reward you pay to the Worker when you approve the Worker's assignment. The SendBonus operation requires the Worker's ID and the assignment ID as parameters to initiate payment of the bonus. You must include a message that explains the reason for the bonus payment, as the Worker may not be expecting the payment. Amazon Mechanical Turk collects a fee for bonus payments, similar to the HIT listing fee. This operation fails if your account does not have enough funds to pay for both the bonus and the fees. 

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
    res, err := s.SDK.SendBonus(ctx, operations.SendBonusRequest{
        SendBonusRequest: shared.SendBonusRequest{
            AssignmentID: "corporis",
            BonusAmount: "veniam",
            Reason: "aliquid",
            UniqueRequestToken: sdk.String("inventore"),
            WorkerID: "magnam",
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("eaque"),
        XAmzTarget: operations.SendBonusXAmzTargetEnumMTurkRequesterServiceV20170117SendBonus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendBonusResponse != nil {
        // handle response
    }
}
```

## SendTestEventNotification

 The <code>SendTestEventNotification</code> operation causes Amazon Mechanical Turk to send a notification message as if a HIT event occurred, according to the provided notification specification. This allows you to test notifications without setting up notifications for a real HIT type and trying to trigger them using the website. When you call this operation, the service attempts to send the test notification immediately. 

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
    res, err := s.SDK.SendTestEventNotification(ctx, operations.SendTestEventNotificationRequest{
        SendTestEventNotificationRequest: shared.SendTestEventNotificationRequest{
            Notification: shared.NotificationSpecification{
                Destination: "a",
                EventTypes: []shared.EventTypeEnum{
                    shared.EventTypeEnumAssignmentAccepted,
                    shared.EventTypeEnumAssignmentAccepted,
                    shared.EventTypeEnumHitCreated,
                },
                Transport: shared.NotificationTransportEnumSns,
                Version: "aliquam",
            },
            TestEventType: shared.EventTypeEnumAssignmentAbandoned,
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("placeat"),
        XAmzTarget: operations.SendTestEventNotificationXAmzTargetEnumMTurkRequesterServiceV20170117SendTestEventNotification,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendTestEventNotificationResponse != nil {
        // handle response
    }
}
```

## UpdateExpirationForHIT

 The <code>UpdateExpirationForHIT</code> operation allows you update the expiration time of a HIT. If you update it to a time in the past, the HIT will be immediately expired. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateExpirationForHIT(ctx, operations.UpdateExpirationForHITRequest{
        UpdateExpirationForHITRequest: shared.UpdateExpirationForHITRequest{
            ExpireAt: types.MustTimeFromString("2022-07-27T06:22:58.599Z"),
            HITID: "autem",
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.UpdateExpirationForHITXAmzTargetEnumMTurkRequesterServiceV20170117UpdateExpirationForHit,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateExpirationForHITResponse != nil {
        // handle response
    }
}
```

## UpdateHITReviewStatus

 The <code>UpdateHITReviewStatus</code> operation updates the status of a HIT. If the status is Reviewable, this operation can update the status to Reviewing, or it can revert a Reviewing HIT back to the Reviewable status. 

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
    res, err := s.SDK.UpdateHITReviewStatus(ctx, operations.UpdateHITReviewStatusRequest{
        UpdateHITReviewStatusRequest: shared.UpdateHITReviewStatusRequest{
            HITID: "tempora",
            Revert: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("odio"),
        XAmzTarget: operations.UpdateHITReviewStatusXAmzTargetEnumMTurkRequesterServiceV20170117UpdateHitReviewStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateHITReviewStatusResponse != nil {
        // handle response
    }
}
```

## UpdateHITTypeOfHIT

 The <code>UpdateHITTypeOfHIT</code> operation allows you to change the HITType properties of a HIT. This operation disassociates the HIT from its old HITType properties and associates it with the new HITType properties. The HIT takes on the properties of the new HITType in place of the old ones. 

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
    res, err := s.SDK.UpdateHITTypeOfHIT(ctx, operations.UpdateHITTypeOfHITRequest{
        UpdateHITTypeOfHITRequest: shared.UpdateHITTypeOfHITRequest{
            HITID: "eius",
            HITTypeID: "esse",
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("ut"),
        XAmzTarget: operations.UpdateHITTypeOfHITXAmzTargetEnumMTurkRequesterServiceV20170117UpdateHitTypeOfHit,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateHITTypeOfHITResponse != nil {
        // handle response
    }
}
```

## UpdateNotificationSettings

 The <code>UpdateNotificationSettings</code> operation creates, updates, disables or re-enables notifications for a HIT type. If you call the UpdateNotificationSettings operation for a HIT type that already has a notification specification, the operation replaces the old specification with a new one. You can call the UpdateNotificationSettings operation to enable or disable notifications for the HIT type, without having to modify the notification specification itself by providing updates to the Active status without specifying a new notification specification. To change the Active status of a HIT type's notifications, the HIT type must already have a notification specification, or one must be provided in the same call to <code>UpdateNotificationSettings</code>. 

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
    res, err := s.SDK.UpdateNotificationSettings(ctx, operations.UpdateNotificationSettingsRequest{
        UpdateNotificationSettingsRequest: shared.UpdateNotificationSettingsRequest{
            Active: sdk.Bool(false),
            HITTypeID: "eum",
            Notification: &shared.NotificationSpecification{
                Destination: "suscipit",
                EventTypes: []shared.EventTypeEnum{
                    shared.EventTypeEnumAssignmentReturned,
                    shared.EventTypeEnumHitCreated,
                    shared.EventTypeEnumHitExtended,
                    shared.EventTypeEnumAssignmentAbandoned,
                },
                Transport: shared.NotificationTransportEnumEmail,
                Version: "id",
            },
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("eius"),
        XAmzTarget: operations.UpdateNotificationSettingsXAmzTargetEnumMTurkRequesterServiceV20170117UpdateNotificationSettings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNotificationSettingsResponse != nil {
        // handle response
    }
}
```

## UpdateQualificationType

<p> The <code>UpdateQualificationType</code> operation modifies the attributes of an existing Qualification type, which is represented by a QualificationType data structure. Only the owner of a Qualification type can modify its attributes. </p> <p> Most attributes of a Qualification type can be changed after the type has been created. However, the Name and Keywords fields cannot be modified. The RetryDelayInSeconds parameter can be modified or added to change the delay or to enable retries, but RetryDelayInSeconds cannot be used to disable retries. </p> <p> You can use this operation to update the test for a Qualification type. The test is updated based on the values specified for the Test, TestDurationInSeconds and AnswerKey parameters. All three parameters specify the updated test. If you are updating the test for a type, you must specify the Test and TestDurationInSeconds parameters. The AnswerKey parameter is optional; omitting it specifies that the updated test does not have an answer key. </p> <p> If you omit the Test parameter, the test for the Qualification type is unchanged. There is no way to remove a test from a Qualification type that has one. If the type already has a test, you cannot update it to be AutoGranted. If the Qualification type does not have a test and one is provided by an update, the type will henceforth have a test. </p> <p> If you want to update the test duration or answer key for an existing test without changing the questions, you must specify a Test parameter with the original questions, along with the updated values. </p> <p> If you provide an updated Test but no AnswerKey, the new test will not have an answer key. Requests for such Qualifications must be granted manually. </p> <p> You can also update the AutoGranted and AutoGrantedValue attributes of the Qualification type.</p>

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
    res, err := s.SDK.UpdateQualificationType(ctx, operations.UpdateQualificationTypeRequest{
        UpdateQualificationTypeRequest: shared.UpdateQualificationTypeRequest{
            AnswerKey: sdk.String("eos"),
            AutoGranted: sdk.Bool(false),
            AutoGrantedValue: sdk.Int64(373813),
            Description: sdk.String("ab"),
            QualificationTypeID: "cupiditate",
            QualificationTypeStatus: shared.QualificationTypeStatusEnumActive.ToPointer(),
            RetryDelayInSeconds: sdk.Int64(272822),
            Test: sdk.String("debitis"),
            TestDurationInSeconds: sdk.Int64(370853),
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("sequi"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.UpdateQualificationTypeXAmzTargetEnumMTurkRequesterServiceV20170117UpdateQualificationType,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateQualificationTypeResponse != nil {
        // handle response
    }
}
```
