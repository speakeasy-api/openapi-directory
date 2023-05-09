# SDK

## Overview

<fullname>Amazon Mechanical Turk API Reference</fullname>

Amazon Web Services documentation
<https://docs.aws.amazon.com/mturk-requester/>
### Available Operations

* [acceptQualificationRequest](#acceptqualificationrequest) - <p> The <code>AcceptQualificationRequest</code> operation approves a Worker's request for a Qualification. </p> <p> Only the owner of the Qualification type can grant a Qualification request for that type. </p> <p> A successful request for the <code>AcceptQualificationRequest</code> operation returns with no errors and an empty body. </p>
* [approveAssignment](#approveassignment) - <p> The <code>ApproveAssignment</code> operation approves the results of a completed assignment. </p> <p> Approving an assignment initiates two payments from the Requester's Amazon.com account </p> <ul> <li> <p> The Worker who submitted the results is paid the reward specified in the HIT. </p> </li> <li> <p> Amazon Mechanical Turk fees are debited. </p> </li> </ul> <p> If the Requester's account does not have adequate funds for these payments, the call to ApproveAssignment returns an exception, and the approval is not processed. You can include an optional feedback message with the approval, which the Worker can see in the Status section of the web site. </p> <p> You can also call this operation for assignments that were previous rejected and approve them by explicitly overriding the previous rejection. This only works on rejected assignments that were submitted within the previous 30 days and only if the assignment's related HIT has not been deleted. </p>
* [associateQualificationWithWorker](#associatequalificationwithworker) - <p> The <code>AssociateQualificationWithWorker</code> operation gives a Worker a Qualification. <code>AssociateQualificationWithWorker</code> does not require that the Worker submit a Qualification request. It gives the Qualification directly to the Worker. </p> <p> You can only assign a Qualification of a Qualification type that you created (using the <code>CreateQualificationType</code> operation). </p> <note> <p> Note: <code>AssociateQualificationWithWorker</code> does not affect any pending Qualification requests for the Qualification by the Worker. If you assign a Qualification to a Worker, then later grant a Qualification request made by the Worker, the granting of the request may modify the Qualification score. To resolve a pending Qualification request without affecting the Qualification the Worker already has, reject the request with the <code>RejectQualificationRequest</code> operation. </p> </note>
* [createAdditionalAssignmentsForHIT](#createadditionalassignmentsforhit) - <p> The <code>CreateAdditionalAssignmentsForHIT</code> operation increases the maximum number of assignments of an existing HIT. </p> <p> To extend the maximum number of assignments, specify the number of additional assignments.</p> <note> <ul> <li> <p>HITs created with fewer than 10 assignments cannot be extended to have 10 or more assignments. Attempting to add assignments in a way that brings the total number of assignments for a HIT from fewer than 10 assignments to 10 or more assignments will result in an <code>AWS.MechanicalTurk.InvalidMaximumAssignmentsIncrease</code> exception.</p> </li> <li> <p>HITs that were created before July 22, 2015 cannot be extended. Attempting to extend HITs that were created before July 22, 2015 will result in an <code>AWS.MechanicalTurk.HITTooOldForExtension</code> exception. </p> </li> </ul> </note>
* [createHIT](#createhit) - <p>The <code>CreateHIT</code> operation creates a new Human Intelligence Task (HIT). The new HIT is made available for Workers to find and accept on the Amazon Mechanical Turk website. </p> <p> This operation allows you to specify a new HIT by passing in values for the properties of the HIT, such as its title, reward amount and number of assignments. When you pass these values to <code>CreateHIT</code>, a new HIT is created for you, with a new <code>HITTypeID</code>. The HITTypeID can be used to create additional HITs in the future without needing to specify common parameters such as the title, description and reward amount each time.</p> <p> An alternative way to create HITs is to first generate a HITTypeID using the <code>CreateHITType</code> operation and then call the <code>CreateHITWithHITType</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. </p> <p>CreateHIT also supports several ways to provide question data: by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>. </p> <note> <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>.</p> </note>
* [createHITType](#createhittype) -  The <code>CreateHITType</code> operation creates a new HIT type. This operation allows you to define a standard set of HIT properties to use when creating HITs. If you register a HIT type with values that match an existing HIT type, the HIT type ID of the existing type will be returned. 
* [createHITWithHITType](#createhitwithhittype) - <p> The <code>CreateHITWithHITType</code> operation creates a new Human Intelligence Task (HIT) using an existing HITTypeID generated by the <code>CreateHITType</code> operation. </p> <p> This is an alternative way to create HITs from the <code>CreateHIT</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. </p> <p>CreateHITWithHITType also supports several ways to provide question data: by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>. </p> <note> <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>. </p> </note>
* [createQualificationType](#createqualificationtype) -  The <code>CreateQualificationType</code> operation creates a new Qualification type, which is represented by a <code>QualificationType</code> data structure. 
* [createWorkerBlock](#createworkerblock) - The <code>CreateWorkerBlock</code> operation allows you to prevent a Worker from working on your HITs. For example, you can block a Worker who is producing poor quality work. You can block up to 100,000 Workers.
* [deleteHIT](#deletehit) - <p> The <code>DeleteHIT</code> operation is used to delete HIT that is no longer needed. Only the Requester who created the HIT can delete it. </p> <p> You can only dispose of HITs that are in the <code>Reviewable</code> state, with all of their submitted assignments already either approved or rejected. If you call the DeleteHIT operation on a HIT that is not in the <code>Reviewable</code> state (for example, that has not expired, or still has active assignments), or on a HIT that is Reviewable but without all of its submitted assignments already approved or rejected, the service will return an error. </p> <note> <ul> <li> <p> HITs are automatically disposed of after 120 days. </p> </li> <li> <p> After you dispose of a HIT, you can no longer approve the HIT's rejected assignments. </p> </li> <li> <p> Disposed HITs are not returned in results for the ListHITs operation. </p> </li> <li> <p> Disposing HITs can improve the performance of operations such as ListReviewableHITs and ListHITs. </p> </li> </ul> </note>
* [deleteQualificationType](#deletequalificationtype) - <p> The <code>DeleteQualificationType</code> deletes a Qualification type and deletes any HIT types that are associated with the Qualification type. </p> <p>This operation does not revoke Qualifications already assigned to Workers because the Qualifications might be needed for active HITs. If there are any pending requests for the Qualification type, Amazon Mechanical Turk rejects those requests. After you delete a Qualification type, you can no longer use it to create HITs or HIT types.</p> <note> <p>DeleteQualificationType must wait for all the HITs that use the deleted Qualification type to be deleted before completing. It may take up to 48 hours before DeleteQualificationType completes and the unique name of the Qualification type is available for reuse with CreateQualificationType.</p> </note>
* [deleteWorkerBlock](#deleteworkerblock) - The <code>DeleteWorkerBlock</code> operation allows you to reinstate a blocked Worker to work on your HITs. This operation reverses the effects of the CreateWorkerBlock operation. You need the Worker ID to use this operation. If the Worker ID is missing or invalid, this operation fails and returns the message “WorkerId is invalid.” If the specified Worker is not blocked, this operation returns successfully.
* [disassociateQualificationFromWorker](#disassociatequalificationfromworker) - <p> The <code>DisassociateQualificationFromWorker</code> revokes a previously granted Qualification from a user. </p> <p> You can provide a text message explaining why the Qualification was revoked. The user who had the Qualification can see this message. </p>
* [getAccountBalance](#getaccountbalance) - The <code>GetAccountBalance</code> operation retrieves the Prepaid HITs balance in your Amazon Mechanical Turk account if you are a Prepaid Requester. Alternatively, this operation will retrieve the remaining available AWS Billing usage if you have enabled AWS Billing. Note: If you have enabled AWS Billing and still have a remaining Prepaid HITs balance, this balance can be viewed on the My Account page in the Requester console.
* [getAssignment](#getassignment) -  The <code>GetAssignment</code> operation retrieves the details of the specified Assignment. 
* [getFileUploadURL](#getfileuploadurl) -  The <code>GetFileUploadURL</code> operation generates and returns a temporary URL. You use the temporary URL to retrieve a file uploaded by a Worker as an answer to a FileUploadAnswer question for a HIT. The temporary URL is generated the instant the GetFileUploadURL operation is called, and is valid for 60 seconds. You can get a temporary file upload URL any time until the HIT is disposed. After the HIT is disposed, any uploaded files are deleted, and cannot be retrieved. Pending Deprecation on December 12, 2017. The Answer Specification structure will no longer support the <code>FileUploadAnswer</code> element to be used for the QuestionForm data structure. Instead, we recommend that Requesters who want to create HITs asking Workers to upload files to use Amazon S3. 
* [getHIT](#gethit) -  The <code>GetHIT</code> operation retrieves the details of the specified HIT. 
* [getQualificationScore](#getqualificationscore) - <p> The <code>GetQualificationScore</code> operation returns the value of a Worker's Qualification for a given Qualification type. </p> <p> To get a Worker's Qualification, you must know the Worker's ID. The Worker's ID is included in the assignment data returned by the <code>ListAssignmentsForHIT</code> operation. </p> <p>Only the owner of a Qualification type can query the value of a Worker's Qualification of that type.</p>
* [getQualificationType](#getqualificationtype) -  The <code>GetQualificationType</code>operation retrieves information about a Qualification type using its ID. 
* [listAssignmentsForHIT](#listassignmentsforhit) - <p> The <code>ListAssignmentsForHIT</code> operation retrieves completed assignments for a HIT. You can use this operation to retrieve the results for a HIT. </p> <p> You can get assignments for a HIT at any time, even if the HIT is not yet Reviewable. If a HIT requested multiple assignments, and has received some results but has not yet become Reviewable, you can still retrieve the partial results with this operation. </p> <p> Use the AssignmentStatus parameter to control which set of assignments for a HIT are returned. The ListAssignmentsForHIT operation can return submitted assignments awaiting approval, or it can return assignments that have already been approved or rejected. You can set AssignmentStatus=Approved,Rejected to get assignments that have already been approved and rejected together in one result set. </p> <p> Only the Requester who created the HIT can retrieve the assignments for that HIT. </p> <p> Results are sorted and divided into numbered pages and the operation returns a single page of results. You can use the parameters of the operation to control sorting and pagination. </p>
* [listBonusPayments](#listbonuspayments) -  The <code>ListBonusPayments</code> operation retrieves the amounts of bonuses you have paid to Workers for a given HIT or assignment. 
* [listHITs](#listhits) -  The <code>ListHITs</code> operation returns all of a Requester's HITs. The operation returns HITs of any status, except for HITs that have been deleted of with the DeleteHIT operation or that have been auto-deleted. 
* [listHITsForQualificationType](#listhitsforqualificationtype) -  The <code>ListHITsForQualificationType</code> operation returns the HITs that use the given Qualification type for a Qualification requirement. The operation returns HITs of any status, except for HITs that have been deleted with the <code>DeleteHIT</code> operation or that have been auto-deleted. 
* [listQualificationRequests](#listqualificationrequests) -  The <code>ListQualificationRequests</code> operation retrieves requests for Qualifications of a particular Qualification type. The owner of the Qualification type calls this operation to poll for pending requests, and accepts them using the AcceptQualification operation. 
* [listQualificationTypes](#listqualificationtypes) -  The <code>ListQualificationTypes</code> operation returns a list of Qualification types, filtered by an optional search term. 
* [listReviewPolicyResultsForHIT](#listreviewpolicyresultsforhit) -  The <code>ListReviewPolicyResultsForHIT</code> operation retrieves the computed results and the actions taken in the course of executing your Review Policies for a given HIT. For information about how to specify Review Policies when you call CreateHIT, see Review Policies. The ListReviewPolicyResultsForHIT operation can return results for both Assignment-level and HIT-level review results. 
* [listReviewableHITs](#listreviewablehits) -  The <code>ListReviewableHITs</code> operation retrieves the HITs with Status equal to Reviewable or Status equal to Reviewing that belong to the Requester calling the operation. 
* [listWorkerBlocks](#listworkerblocks) - The <code>ListWorkersBlocks</code> operation retrieves a list of Workers who are blocked from working on your HITs.
* [listWorkersWithQualificationType](#listworkerswithqualificationtype) -  The <code>ListWorkersWithQualificationType</code> operation returns all of the Workers that have been associated with a given Qualification type. 
* [notifyWorkers](#notifyworkers) -  The <code>NotifyWorkers</code> operation sends an email to one or more Workers that you specify with the Worker ID. You can specify up to 100 Worker IDs to send the same message with a single call to the NotifyWorkers operation. The NotifyWorkers operation will send a notification email to a Worker only if you have previously approved or rejected work from the Worker. 
* [rejectAssignment](#rejectassignment) - <p> The <code>RejectAssignment</code> operation rejects the results of a completed assignment. </p> <p> You can include an optional feedback message with the rejection, which the Worker can see in the Status section of the web site. When you include a feedback message with the rejection, it helps the Worker understand why the assignment was rejected, and can improve the quality of the results the Worker submits in the future. </p> <p> Only the Requester who created the HIT can reject an assignment for the HIT. </p>
* [rejectQualificationRequest](#rejectqualificationrequest) - <p> The <code>RejectQualificationRequest</code> operation rejects a user's request for a Qualification. </p> <p> You can provide a text message explaining why the request was rejected. The Worker who made the request can see this message.</p>
* [sendBonus](#sendbonus) -  The <code>SendBonus</code> operation issues a payment of money from your account to a Worker. This payment happens separately from the reward you pay to the Worker when you approve the Worker's assignment. The SendBonus operation requires the Worker's ID and the assignment ID as parameters to initiate payment of the bonus. You must include a message that explains the reason for the bonus payment, as the Worker may not be expecting the payment. Amazon Mechanical Turk collects a fee for bonus payments, similar to the HIT listing fee. This operation fails if your account does not have enough funds to pay for both the bonus and the fees. 
* [sendTestEventNotification](#sendtesteventnotification) -  The <code>SendTestEventNotification</code> operation causes Amazon Mechanical Turk to send a notification message as if a HIT event occurred, according to the provided notification specification. This allows you to test notifications without setting up notifications for a real HIT type and trying to trigger them using the website. When you call this operation, the service attempts to send the test notification immediately. 
* [updateExpirationForHIT](#updateexpirationforhit) -  The <code>UpdateExpirationForHIT</code> operation allows you update the expiration time of a HIT. If you update it to a time in the past, the HIT will be immediately expired. 
* [updateHITReviewStatus](#updatehitreviewstatus) -  The <code>UpdateHITReviewStatus</code> operation updates the status of a HIT. If the status is Reviewable, this operation can update the status to Reviewing, or it can revert a Reviewing HIT back to the Reviewable status. 
* [updateHITTypeOfHIT](#updatehittypeofhit) -  The <code>UpdateHITTypeOfHIT</code> operation allows you to change the HITType properties of a HIT. This operation disassociates the HIT from its old HITType properties and associates it with the new HITType properties. The HIT takes on the properties of the new HITType in place of the old ones. 
* [updateNotificationSettings](#updatenotificationsettings) -  The <code>UpdateNotificationSettings</code> operation creates, updates, disables or re-enables notifications for a HIT type. If you call the UpdateNotificationSettings operation for a HIT type that already has a notification specification, the operation replaces the old specification with a new one. You can call the UpdateNotificationSettings operation to enable or disable notifications for the HIT type, without having to modify the notification specification itself by providing updates to the Active status without specifying a new notification specification. To change the Active status of a HIT type's notifications, the HIT type must already have a notification specification, or one must be provided in the same call to <code>UpdateNotificationSettings</code>. 
* [updateQualificationType](#updatequalificationtype) - <p> The <code>UpdateQualificationType</code> operation modifies the attributes of an existing Qualification type, which is represented by a QualificationType data structure. Only the owner of a Qualification type can modify its attributes. </p> <p> Most attributes of a Qualification type can be changed after the type has been created. However, the Name and Keywords fields cannot be modified. The RetryDelayInSeconds parameter can be modified or added to change the delay or to enable retries, but RetryDelayInSeconds cannot be used to disable retries. </p> <p> You can use this operation to update the test for a Qualification type. The test is updated based on the values specified for the Test, TestDurationInSeconds and AnswerKey parameters. All three parameters specify the updated test. If you are updating the test for a type, you must specify the Test and TestDurationInSeconds parameters. The AnswerKey parameter is optional; omitting it specifies that the updated test does not have an answer key. </p> <p> If you omit the Test parameter, the test for the Qualification type is unchanged. There is no way to remove a test from a Qualification type that has one. If the type already has a test, you cannot update it to be AutoGranted. If the Qualification type does not have a test and one is provided by an update, the type will henceforth have a test. </p> <p> If you want to update the test duration or answer key for an existing test without changing the questions, you must specify a Test parameter with the original questions, along with the updated values. </p> <p> If you provide an updated Test but no AnswerKey, the new test will not have an answer key. Requests for such Qualifications must be granted manually. </p> <p> You can also update the AutoGranted and AutoGrantedValue attributes of the Qualification type.</p>

## acceptQualificationRequest

<p> The <code>AcceptQualificationRequest</code> operation approves a Worker's request for a Qualification. </p> <p> Only the owner of the Qualification type can grant a Qualification request for that type. </p> <p> A successful request for the <code>AcceptQualificationRequest</code> operation returns with no errors and an empty body. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptQualificationRequestRequest;
import org.openapis.openapi.models.operations.AcceptQualificationRequestResponse;
import org.openapis.openapi.models.operations.AcceptQualificationRequestXAmzTargetEnum;
import org.openapis.openapi.models.shared.AcceptQualificationRequestRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptQualificationRequestRequest req = new AcceptQualificationRequestRequest(                new AcceptQualificationRequestRequest("suscipit") {{
                                integerValue = 437587L;
                            }};, AcceptQualificationRequestXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_ACCEPT_QUALIFICATION_REQUEST) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            AcceptQualificationRequestResponse res = sdk.sdk.acceptQualificationRequest(req);

            if (res.acceptQualificationRequestResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## approveAssignment

<p> The <code>ApproveAssignment</code> operation approves the results of a completed assignment. </p> <p> Approving an assignment initiates two payments from the Requester's Amazon.com account </p> <ul> <li> <p> The Worker who submitted the results is paid the reward specified in the HIT. </p> </li> <li> <p> Amazon Mechanical Turk fees are debited. </p> </li> </ul> <p> If the Requester's account does not have adequate funds for these payments, the call to ApproveAssignment returns an exception, and the approval is not processed. You can include an optional feedback message with the approval, which the Worker can see in the Status section of the web site. </p> <p> You can also call this operation for assignments that were previous rejected and approve them by explicitly overriding the previous rejection. This only works on rejected assignments that were submitted within the previous 30 days and only if the assignment's related HIT has not been deleted. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApproveAssignmentRequest;
import org.openapis.openapi.models.operations.ApproveAssignmentResponse;
import org.openapis.openapi.models.operations.ApproveAssignmentXAmzTargetEnum;
import org.openapis.openapi.models.shared.ApproveAssignmentRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ApproveAssignmentRequest req = new ApproveAssignmentRequest(                new ApproveAssignmentRequest("placeat") {{
                                overrideRejection = false;
                                requesterFeedback = "voluptatum";
                            }};, ApproveAssignmentXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_APPROVE_ASSIGNMENT) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "nisi";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "quis";
            }};            

            ApproveAssignmentResponse res = sdk.sdk.approveAssignment(req);

            if (res.approveAssignmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateQualificationWithWorker

<p> The <code>AssociateQualificationWithWorker</code> operation gives a Worker a Qualification. <code>AssociateQualificationWithWorker</code> does not require that the Worker submit a Qualification request. It gives the Qualification directly to the Worker. </p> <p> You can only assign a Qualification of a Qualification type that you created (using the <code>CreateQualificationType</code> operation). </p> <note> <p> Note: <code>AssociateQualificationWithWorker</code> does not affect any pending Qualification requests for the Qualification by the Worker. If you assign a Qualification to a Worker, then later grant a Qualification request made by the Worker, the granting of the request may modify the Qualification score. To resolve a pending Qualification request without affecting the Qualification the Worker already has, reject the request with the <code>RejectQualificationRequest</code> operation. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateQualificationWithWorkerRequest;
import org.openapis.openapi.models.operations.AssociateQualificationWithWorkerResponse;
import org.openapis.openapi.models.operations.AssociateQualificationWithWorkerXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateQualificationWithWorkerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateQualificationWithWorkerRequest req = new AssociateQualificationWithWorkerRequest(                new AssociateQualificationWithWorkerRequest("deserunt", "perferendis") {{
                                integerValue = 368241L;
                                sendNotification = false;
                            }};, AssociateQualificationWithWorkerXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_ASSOCIATE_QUALIFICATION_WITH_WORKER) {{
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "quo";
                xAmzDate = "odit";
                xAmzSecurityToken = "at";
                xAmzSignature = "at";
                xAmzSignedHeaders = "maiores";
            }};            

            AssociateQualificationWithWorkerResponse res = sdk.sdk.associateQualificationWithWorker(req);

            if (res.associateQualificationWithWorkerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAdditionalAssignmentsForHIT

<p> The <code>CreateAdditionalAssignmentsForHIT</code> operation increases the maximum number of assignments of an existing HIT. </p> <p> To extend the maximum number of assignments, specify the number of additional assignments.</p> <note> <ul> <li> <p>HITs created with fewer than 10 assignments cannot be extended to have 10 or more assignments. Attempting to add assignments in a way that brings the total number of assignments for a HIT from fewer than 10 assignments to 10 or more assignments will result in an <code>AWS.MechanicalTurk.InvalidMaximumAssignmentsIncrease</code> exception.</p> </li> <li> <p>HITs that were created before July 22, 2015 cannot be extended. Attempting to extend HITs that were created before July 22, 2015 will result in an <code>AWS.MechanicalTurk.HITTooOldForExtension</code> exception. </p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAdditionalAssignmentsForHITRequest;
import org.openapis.openapi.models.operations.CreateAdditionalAssignmentsForHITResponse;
import org.openapis.openapi.models.operations.CreateAdditionalAssignmentsForHITXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateAdditionalAssignmentsForHITRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAdditionalAssignmentsForHITRequest req = new CreateAdditionalAssignmentsForHITRequest(                new CreateAdditionalAssignmentsForHITRequest("quod", 800911L) {{
                                uniqueRequestToken = "esse";
                            }};, CreateAdditionalAssignmentsForHITXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_CREATE_ADDITIONAL_ASSIGNMENTS_FOR_HIT) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "porro";
                xAmzCredential = "dolorum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "nam";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "occaecati";
            }};            

            CreateAdditionalAssignmentsForHITResponse res = sdk.sdk.createAdditionalAssignmentsForHIT(req);

            if (res.createAdditionalAssignmentsForHITResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createHIT

<p>The <code>CreateHIT</code> operation creates a new Human Intelligence Task (HIT). The new HIT is made available for Workers to find and accept on the Amazon Mechanical Turk website. </p> <p> This operation allows you to specify a new HIT by passing in values for the properties of the HIT, such as its title, reward amount and number of assignments. When you pass these values to <code>CreateHIT</code>, a new HIT is created for you, with a new <code>HITTypeID</code>. The HITTypeID can be used to create additional HITs in the future without needing to specify common parameters such as the title, description and reward amount each time.</p> <p> An alternative way to create HITs is to first generate a HITTypeID using the <code>CreateHITType</code> operation and then call the <code>CreateHITWithHITType</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. </p> <p>CreateHIT also supports several ways to provide question data: by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>. </p> <note> <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateHITRequest;
import org.openapis.openapi.models.operations.CreateHITResponse;
import org.openapis.openapi.models.operations.CreateHITXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComparatorEnum;
import org.openapis.openapi.models.shared.CreateHITRequest;
import org.openapis.openapi.models.shared.HITAccessActionsEnum;
import org.openapis.openapi.models.shared.HITLayoutParameter;
import org.openapis.openapi.models.shared.Locale;
import org.openapis.openapi.models.shared.ParameterMapEntry;
import org.openapis.openapi.models.shared.PolicyParameter;
import org.openapis.openapi.models.shared.QualificationRequirement;
import org.openapis.openapi.models.shared.ReviewPolicy;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateHITRequest req = new CreateHITRequest(                new CreateHITRequest(537373L, "hic", 758616L, "totam", "beatae") {{
                                assignmentReviewPolicy = new ReviewPolicy("commodi") {{
                                    parameters = new org.openapis.openapi.models.shared.PolicyParameter[]{{
                                        add(new PolicyParameter() {{
                                            key = "modi";
                                            mapEntries = new org.openapis.openapi.models.shared.ParameterMapEntry[]{{
                                                add(new ParameterMapEntry() {{
                                                    key = "impedit";
                                                    values = new String[]{{
                                                        add("esse"),
                                                        add("ipsum"),
                                                        add("excepturi"),
                                                    }};
                                                }}),
                                            }};
                                            values = new String[]{{
                                                add("perferendis"),
                                            }};
                                        }}),
                                        add(new PolicyParameter() {{
                                            key = "ad";
                                            mapEntries = new org.openapis.openapi.models.shared.ParameterMapEntry[]{{
                                                add(new ParameterMapEntry() {{
                                                    key = "sed";
                                                    values = new String[]{{
                                                        add("dolor"),
                                                        add("natus"),
                                                        add("laboriosam"),
                                                    }};
                                                }}),
                                                add(new ParameterMapEntry() {{
                                                    key = "hic";
                                                    values = new String[]{{
                                                        add("fuga"),
                                                        add("in"),
                                                        add("corporis"),
                                                        add("iste"),
                                                    }};
                                                }}),
                                                add(new ParameterMapEntry() {{
                                                    key = "iure";
                                                    values = new String[]{{
                                                        add("quidem"),
                                                        add("architecto"),
                                                        add("ipsa"),
                                                        add("reiciendis"),
                                                    }};
                                                }}),
                                            }};
                                            values = new String[]{{
                                                add("mollitia"),
                                                add("laborum"),
                                                add("dolores"),
                                            }};
                                        }}),
                                    }};
                                }};;
                                autoApprovalDelayInSeconds = 210382L;
                                hitLayoutId = "corporis";
                                hitLayoutParameters = new org.openapis.openapi.models.shared.HITLayoutParameter[]{{
                                    add(new HITLayoutParameter("accusantium", "iure") {{
                                        name = "Ronnie Mohr";
                                        value = "excepturi";
                                    }}),
                                }};
                                hitReviewPolicy = new ReviewPolicy("culpa") {{
                                    parameters = new org.openapis.openapi.models.shared.PolicyParameter[]{{
                                        add(new PolicyParameter() {{
                                            key = "sapiente";
                                            mapEntries = new org.openapis.openapi.models.shared.ParameterMapEntry[]{{
                                                add(new ParameterMapEntry() {{
                                                    key = "mollitia";
                                                    values = new String[]{{
                                                        add("culpa"),
                                                    }};
                                                }}),
                                            }};
                                            values = new String[]{{
                                                add("repellat"),
                                            }};
                                        }}),
                                        add(new PolicyParameter() {{
                                            key = "mollitia";
                                            mapEntries = new org.openapis.openapi.models.shared.ParameterMapEntry[]{{
                                                add(new ParameterMapEntry() {{
                                                    key = "numquam";
                                                    values = new String[]{{
                                                        add("quam"),
                                                        add("molestiae"),
                                                    }};
                                                }}),
                                                add(new ParameterMapEntry() {{
                                                    key = "velit";
                                                    values = new String[]{{
                                                        add("quia"),
                                                        add("quis"),
                                                        add("vitae"),
                                                    }};
                                                }}),
                                                add(new ParameterMapEntry() {{
                                                    key = "laborum";
                                                    values = new String[]{{
                                                        add("enim"),
                                                        add("odit"),
                                                        add("quo"),
                                                    }};
                                                }}),
                                            }};
                                            values = new String[]{{
                                                add("tenetur"),
                                            }};
                                        }}),
                                        add(new PolicyParameter() {{
                                            key = "ipsam";
                                            mapEntries = new org.openapis.openapi.models.shared.ParameterMapEntry[]{{
                                                add(new ParameterMapEntry() {{
                                                    key = "possimus";
                                                    values = new String[]{{
                                                        add("quasi"),
                                                    }};
                                                }}),
                                                add(new ParameterMapEntry() {{
                                                    key = "error";
                                                    values = new String[]{{
                                                        add("laborum"),
                                                        add("quasi"),
                                                        add("reiciendis"),
                                                        add("voluptatibus"),
                                                    }};
                                                }}),
                                                add(new ParameterMapEntry() {{
                                                    key = "vero";
                                                    values = new String[]{{
                                                        add("praesentium"),
                                                        add("voluptatibus"),
                                                    }};
                                                }}),
                                            }};
                                            values = new String[]{{
                                                add("omnis"),
                                            }};
                                        }}),
                                        add(new PolicyParameter() {{
                                            key = "voluptate";
                                            mapEntries = new org.openapis.openapi.models.shared.ParameterMapEntry[]{{
                                                add(new ParameterMapEntry() {{
                                                    key = "perferendis";
                                                    values = new String[]{{
                                                        add("reprehenderit"),
                                                    }};
                                                }}),
                                                add(new ParameterMapEntry() {{
                                                    key = "ut";
                                                    values = new String[]{{
                                                        add("dicta"),
                                                        add("corporis"),
                                                        add("dolore"),
                                                        add("iusto"),
                                                    }};
                                                }}),
                                                add(new ParameterMapEntry() {{
                                                    key = "dicta";
                                                    values = new String[]{{
                                                        add("enim"),
                                                        add("accusamus"),
                                                        add("commodi"),
                                                    }};
                                                }}),
                                            }};
                                            values = new String[]{{
                                                add("quae"),
                                                add("ipsum"),
                                                add("quidem"),
                                                add("molestias"),
                                            }};
                                        }}),
                                    }};
                                }};;
                                keywords = "excepturi";
                                maxAssignments = 865103L;
                                qualificationRequirements = new org.openapis.openapi.models.shared.QualificationRequirement[]{{
                                    add(new QualificationRequirement(ComparatorEnum.NOT_EQUAL_TO, "quos") {{
                                        actionsGuarded = HITAccessActionsEnum.PREVIEW_AND_ACCEPT;
                                        comparator = ComparatorEnum.NOT_EQUAL_TO;
                                        integerValues = new Long[]{{
                                            add(93940L),
                                            add(921158L),
                                            add(575947L),
                                            add(83112L),
                                        }};
                                        localeValues = new org.openapis.openapi.models.shared.Locale[]{{
                                            add(new Locale("consequatur") {{
                                                country = "Faroe Islands";
                                                subdivision = "enim";
                                            }}),
                                            add(new Locale("explicabo") {{
                                                country = "Norway";
                                                subdivision = "quibusdam";
                                            }}),
                                            add(new Locale("quibusdam") {{
                                                country = "Niger";
                                                subdivision = "distinctio";
                                            }}),
                                            add(new Locale("qui") {{
                                                country = "Finland";
                                                subdivision = "modi";
                                            }}),
                                        }};
                                        qualificationTypeId = "aliquid";
                                        requiredToPreview = false;
                                    }}),
                                    add(new QualificationRequirement(ComparatorEnum.NOT_EQUAL_TO, "necessitatibus") {{
                                        actionsGuarded = HITAccessActionsEnum.ACCEPT;
                                        comparator = ComparatorEnum.LESS_THAN_OR_EQUAL_TO;
                                        integerValues = new Long[]{{
                                            add(369808L),
                                            add(4695L),
                                            add(146441L),
                                            add(677817L),
                                        }};
                                        localeValues = new org.openapis.openapi.models.shared.Locale[]{{
                                            add(new Locale("tempore") {{
                                                country = "Estonia";
                                                subdivision = "facilis";
                                            }}),
                                            add(new Locale("eum") {{
                                                country = "Finland";
                                                subdivision = "delectus";
                                            }}),
                                            add(new Locale("sint") {{
                                                country = "Ecuador";
                                                subdivision = "eligendi";
                                            }}),
                                        }};
                                        qualificationTypeId = "aliquid";
                                        requiredToPreview = false;
                                    }}),
                                }};
                                question = "sint";
                                requesterAnnotation = "officia";
                                uniqueRequestToken = "dolor";
                            }};, CreateHITXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_CREATE_HIT) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "a";
                xAmzCredential = "dolorum";
                xAmzDate = "in";
                xAmzSecurityToken = "in";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "maiores";
            }};            

            CreateHITResponse res = sdk.sdk.createHIT(req);

            if (res.createHITResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createHITType

 The <code>CreateHITType</code> operation creates a new HIT type. This operation allows you to define a standard set of HIT properties to use when creating HITs. If you register a HIT type with values that match an existing HIT type, the HIT type ID of the existing type will be returned. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateHITTypeRequest;
import org.openapis.openapi.models.operations.CreateHITTypeResponse;
import org.openapis.openapi.models.operations.CreateHITTypeXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComparatorEnum;
import org.openapis.openapi.models.shared.CreateHITTypeRequest;
import org.openapis.openapi.models.shared.HITAccessActionsEnum;
import org.openapis.openapi.models.shared.Locale;
import org.openapis.openapi.models.shared.QualificationRequirement;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateHITTypeRequest req = new CreateHITTypeRequest(                new CreateHITTypeRequest(116202L, "magnam", "cumque", "facere") {{
                                autoApprovalDelayInSeconds = 411820L;
                                keywords = "aliquid";
                                qualificationRequirements = new org.openapis.openapi.models.shared.QualificationRequirement[]{{
                                    add(new QualificationRequirement(ComparatorEnum.EXISTS, "omnis") {{
                                        actionsGuarded = HITAccessActionsEnum.DISCOVER_PREVIEW_AND_ACCEPT;
                                        comparator = ComparatorEnum.GREATER_THAN;
                                        integerValues = new Long[]{{
                                            add(313218L),
                                            add(881736L),
                                            add(965417L),
                                        }};
                                        localeValues = new org.openapis.openapi.models.shared.Locale[]{{
                                            add(new Locale("id") {{
                                                country = "Mongolia";
                                                subdivision = "nam";
                                            }}),
                                            add(new Locale("sapiente") {{
                                                country = "Libyan Arab Jamahiriya";
                                                subdivision = "deleniti";
                                            }}),
                                            add(new Locale("nisi") {{
                                                country = "Denmark";
                                                subdivision = "deserunt";
                                            }}),
                                        }};
                                        qualificationTypeId = "vel";
                                        requiredToPreview = false;
                                    }}),
                                    add(new QualificationRequirement(ComparatorEnum.LESS_THAN, "excepturi") {{
                                        actionsGuarded = HITAccessActionsEnum.PREVIEW_AND_ACCEPT;
                                        comparator = ComparatorEnum.LESS_THAN;
                                        integerValues = new Long[]{{
                                            add(301575L),
                                            add(716075L),
                                        }};
                                        localeValues = new org.openapis.openapi.models.shared.Locale[]{{
                                            add(new Locale("suscipit") {{
                                                country = "Finland";
                                                subdivision = "labore";
                                            }}),
                                            add(new Locale("eum") {{
                                                country = "Nauru";
                                                subdivision = "nobis";
                                            }}),
                                            add(new Locale("architecto") {{
                                                country = "Tanzania";
                                                subdivision = "aspernatur";
                                            }}),
                                        }};
                                        qualificationTypeId = "magnam";
                                        requiredToPreview = false;
                                    }}),
                                    add(new QualificationRequirement(ComparatorEnum.NOT_EQUAL_TO, "facilis") {{
                                        actionsGuarded = HITAccessActionsEnum.PREVIEW_AND_ACCEPT;
                                        comparator = ComparatorEnum.NOT_EQUAL_TO;
                                        integerValues = new Long[]{{
                                            add(574325L),
                                            add(33625L),
                                            add(653201L),
                                        }};
                                        localeValues = new org.openapis.openapi.models.shared.Locale[]{{
                                            add(new Locale("eum") {{
                                                country = "Niue";
                                                subdivision = "ad";
                                            }}),
                                            add(new Locale("odit") {{
                                                country = "Cuba";
                                                subdivision = "necessitatibus";
                                            }}),
                                            add(new Locale("iure") {{
                                                country = "Guinea-Bissau";
                                                subdivision = "quasi";
                                            }}),
                                            add(new Locale("eius") {{
                                                country = "Western Sahara";
                                                subdivision = "debitis";
                                            }}),
                                        }};
                                        qualificationTypeId = "maxime";
                                        requiredToPreview = false;
                                    }}),
                                }};
                            }};, CreateHITTypeXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_CREATE_HIT_TYPE) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "architecto";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "nihil";
            }};            

            CreateHITTypeResponse res = sdk.sdk.createHITType(req);

            if (res.createHITTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createHITWithHITType

<p> The <code>CreateHITWithHITType</code> operation creates a new Human Intelligence Task (HIT) using an existing HITTypeID generated by the <code>CreateHITType</code> operation. </p> <p> This is an alternative way to create HITs from the <code>CreateHIT</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. </p> <p>CreateHITWithHITType also supports several ways to provide question data: by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>. </p> <note> <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateHITWithHITTypeRequest;
import org.openapis.openapi.models.operations.CreateHITWithHITTypeResponse;
import org.openapis.openapi.models.operations.CreateHITWithHITTypeXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateHITWithHITTypeRequest;
import org.openapis.openapi.models.shared.HITLayoutParameter;
import org.openapis.openapi.models.shared.ParameterMapEntry;
import org.openapis.openapi.models.shared.PolicyParameter;
import org.openapis.openapi.models.shared.ReviewPolicy;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateHITWithHITTypeRequest req = new CreateHITWithHITTypeRequest(                new CreateHITWithHITTypeRequest("quibusdam", 149448L) {{
                                assignmentReviewPolicy = new ReviewPolicy("saepe") {{
                                    parameters = new org.openapis.openapi.models.shared.PolicyParameter[]{{
                                        add(new PolicyParameter() {{
                                            key = "accusantium";
                                            mapEntries = new org.openapis.openapi.models.shared.ParameterMapEntry[]{{
                                                add(new ParameterMapEntry() {{
                                                    key = "praesentium";
                                                    values = new String[]{{
                                                        add("magni"),
                                                        add("sunt"),
                                                        add("quo"),
                                                    }};
                                                }}),
                                            }};
                                            values = new String[]{{
                                                add("pariatur"),
                                                add("maxime"),
                                                add("ea"),
                                                add("excepturi"),
                                            }};
                                        }}),
                                        add(new PolicyParameter() {{
                                            key = "odit";
                                            mapEntries = new org.openapis.openapi.models.shared.ParameterMapEntry[]{{
                                                add(new ParameterMapEntry() {{
                                                    key = "accusantium";
                                                    values = new String[]{{
                                                        add("maiores"),
                                                    }};
                                                }}),
                                                add(new ParameterMapEntry() {{
                                                    key = "quidem";
                                                    values = new String[]{{
                                                        add("voluptate"),
                                                        add("autem"),
                                                    }};
                                                }}),
                                            }};
                                            values = new String[]{{
                                                add("eaque"),
                                                add("pariatur"),
                                                add("nemo"),
                                            }};
                                        }}),
                                        add(new PolicyParameter() {{
                                            key = "voluptatibus";
                                            mapEntries = new org.openapis.openapi.models.shared.ParameterMapEntry[]{{
                                                add(new ParameterMapEntry() {{
                                                    key = "fugiat";
                                                    values = new String[]{{
                                                        add("aut"),
                                                    }};
                                                }}),
                                            }};
                                            values = new String[]{{
                                                add("corporis"),
                                                add("hic"),
                                                add("libero"),
                                                add("nobis"),
                                            }};
                                        }}),
                                        add(new PolicyParameter() {{
                                            key = "dolores";
                                            mapEntries = new org.openapis.openapi.models.shared.ParameterMapEntry[]{{
                                                add(new ParameterMapEntry() {{
                                                    key = "totam";
                                                    values = new String[]{{
                                                        add("eaque"),
                                                        add("quis"),
                                                    }};
                                                }}),
                                                add(new ParameterMapEntry() {{
                                                    key = "nesciunt";
                                                    values = new String[]{{
                                                        add("perferendis"),
                                                    }};
                                                }}),
                                            }};
                                            values = new String[]{{
                                                add("minus"),
                                            }};
                                        }}),
                                    }};
                                }};;
                                hitLayoutId = "quam";
                                hitLayoutParameters = new org.openapis.openapi.models.shared.HITLayoutParameter[]{{
                                    add(new HITLayoutParameter("perspiciatis", "voluptatem") {{
                                        name = "Dean Welch";
                                        value = "facilis";
                                    }}),
                                }};
                                hitReviewPolicy = new ReviewPolicy("porro") {{
                                    parameters = new org.openapis.openapi.models.shared.PolicyParameter[]{{
                                        add(new PolicyParameter() {{
                                            key = "blanditiis";
                                            mapEntries = new org.openapis.openapi.models.shared.ParameterMapEntry[]{{
                                                add(new ParameterMapEntry() {{
                                                    key = "eaque";
                                                    values = new String[]{{
                                                        add("rerum"),
                                                        add("adipisci"),
                                                        add("asperiores"),
                                                    }};
                                                }}),
                                                add(new ParameterMapEntry() {{
                                                    key = "earum";
                                                    values = new String[]{{
                                                        add("iste"),
                                                        add("dolorum"),
                                                    }};
                                                }}),
                                                add(new ParameterMapEntry() {{
                                                    key = "deleniti";
                                                    values = new String[]{{
                                                        add("provident"),
                                                        add("nobis"),
                                                        add("libero"),
                                                        add("delectus"),
                                                    }};
                                                }}),
                                            }};
                                            values = new String[]{{
                                                add("quos"),
                                                add("aliquid"),
                                            }};
                                        }}),
                                    }};
                                }};;
                                maxAssignments = 212390L;
                                question = "dolorem";
                                requesterAnnotation = "dolor";
                                uniqueRequestToken = "qui";
                            }};, CreateHITWithHITTypeXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_CREATE_HIT_WITH_HIT_TYPE) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "hic";
                xAmzCredential = "excepturi";
                xAmzDate = "cum";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "reiciendis";
            }};            

            CreateHITWithHITTypeResponse res = sdk.sdk.createHITWithHITType(req);

            if (res.createHITWithHITTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createQualificationType

 The <code>CreateQualificationType</code> operation creates a new Qualification type, which is represented by a <code>QualificationType</code> data structure. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateQualificationTypeRequest;
import org.openapis.openapi.models.operations.CreateQualificationTypeResponse;
import org.openapis.openapi.models.operations.CreateQualificationTypeXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateQualificationTypeRequest;
import org.openapis.openapi.models.shared.QualificationTypeStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateQualificationTypeRequest req = new CreateQualificationTypeRequest(                new CreateQualificationTypeRequest("dolorum", "numquam", QualificationTypeStatusEnum.ACTIVE) {{
                                answerKey = "ipsa";
                                autoGranted = false;
                                autoGrantedValue = 56418L;
                                keywords = "iure";
                                retryDelayInSeconds = 487838L;
                                test = "quaerat";
                                testDurationInSeconds = 881005L;
                            }};, CreateQualificationTypeXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_CREATE_QUALIFICATION_TYPE) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "voluptas";
                xAmzDate = "natus";
                xAmzSecurityToken = "eos";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "sit";
            }};            

            CreateQualificationTypeResponse res = sdk.sdk.createQualificationType(req);

            if (res.createQualificationTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorkerBlock

The <code>CreateWorkerBlock</code> operation allows you to prevent a Worker from working on your HITs. For example, you can block a Worker who is producing poor quality work. You can block up to 100,000 Workers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorkerBlockRequest;
import org.openapis.openapi.models.operations.CreateWorkerBlockResponse;
import org.openapis.openapi.models.operations.CreateWorkerBlockXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateWorkerBlockRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorkerBlockRequest req = new CreateWorkerBlockRequest(                new CreateWorkerBlockRequest("ab", "soluta");, CreateWorkerBlockXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_CREATE_WORKER_BLOCK) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "voluptate";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            CreateWorkerBlockResponse res = sdk.sdk.createWorkerBlock(req);

            if (res.createWorkerBlockResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteHIT

<p> The <code>DeleteHIT</code> operation is used to delete HIT that is no longer needed. Only the Requester who created the HIT can delete it. </p> <p> You can only dispose of HITs that are in the <code>Reviewable</code> state, with all of their submitted assignments already either approved or rejected. If you call the DeleteHIT operation on a HIT that is not in the <code>Reviewable</code> state (for example, that has not expired, or still has active assignments), or on a HIT that is Reviewable but without all of its submitted assignments already approved or rejected, the service will return an error. </p> <note> <ul> <li> <p> HITs are automatically disposed of after 120 days. </p> </li> <li> <p> After you dispose of a HIT, you can no longer approve the HIT's rejected assignments. </p> </li> <li> <p> Disposed HITs are not returned in results for the ListHITs operation. </p> </li> <li> <p> Disposing HITs can improve the performance of operations such as ListReviewableHITs and ListHITs. </p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteHITRequest;
import org.openapis.openapi.models.operations.DeleteHITResponse;
import org.openapis.openapi.models.operations.DeleteHITXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteHITRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteHITRequest req = new DeleteHITRequest(                new DeleteHITRequest("asperiores");, DeleteHITXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_DELETE_HIT) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "voluptate";
                xAmzDate = "id";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "aspernatur";
            }};            

            DeleteHITResponse res = sdk.sdk.deleteHIT(req);

            if (res.deleteHITResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteQualificationType

<p> The <code>DeleteQualificationType</code> deletes a Qualification type and deletes any HIT types that are associated with the Qualification type. </p> <p>This operation does not revoke Qualifications already assigned to Workers because the Qualifications might be needed for active HITs. If there are any pending requests for the Qualification type, Amazon Mechanical Turk rejects those requests. After you delete a Qualification type, you can no longer use it to create HITs or HIT types.</p> <note> <p>DeleteQualificationType must wait for all the HITs that use the deleted Qualification type to be deleted before completing. It may take up to 48 hours before DeleteQualificationType completes and the unique name of the Qualification type is available for reuse with CreateQualificationType.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteQualificationTypeRequest;
import org.openapis.openapi.models.operations.DeleteQualificationTypeResponse;
import org.openapis.openapi.models.operations.DeleteQualificationTypeXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteQualificationTypeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteQualificationTypeRequest req = new DeleteQualificationTypeRequest(                new DeleteQualificationTypeRequest("amet");, DeleteQualificationTypeXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_DELETE_QUALIFICATION_TYPE) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "ad";
                xAmzDate = "saepe";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "provident";
            }};            

            DeleteQualificationTypeResponse res = sdk.sdk.deleteQualificationType(req);

            if (res.deleteQualificationTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWorkerBlock

The <code>DeleteWorkerBlock</code> operation allows you to reinstate a blocked Worker to work on your HITs. This operation reverses the effects of the CreateWorkerBlock operation. You need the Worker ID to use this operation. If the Worker ID is missing or invalid, this operation fails and returns the message “WorkerId is invalid.” If the specified Worker is not blocked, this operation returns successfully.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkerBlockRequest;
import org.openapis.openapi.models.operations.DeleteWorkerBlockResponse;
import org.openapis.openapi.models.operations.DeleteWorkerBlockXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteWorkerBlockRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWorkerBlockRequest req = new DeleteWorkerBlockRequest(                new DeleteWorkerBlockRequest("repellendus") {{
                                reason = "totam";
                            }};, DeleteWorkerBlockXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_DELETE_WORKER_BLOCK) {{
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "alias";
                xAmzCredential = "at";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "quod";
            }};            

            DeleteWorkerBlockResponse res = sdk.sdk.deleteWorkerBlock(req);

            if (res.deleteWorkerBlockResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateQualificationFromWorker

<p> The <code>DisassociateQualificationFromWorker</code> revokes a previously granted Qualification from a user. </p> <p> You can provide a text message explaining why the Qualification was revoked. The user who had the Qualification can see this message. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateQualificationFromWorkerRequest;
import org.openapis.openapi.models.operations.DisassociateQualificationFromWorkerResponse;
import org.openapis.openapi.models.operations.DisassociateQualificationFromWorkerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateQualificationFromWorkerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateQualificationFromWorkerRequest req = new DisassociateQualificationFromWorkerRequest(                new DisassociateQualificationFromWorkerRequest("qui", "dolorum") {{
                                reason = "a";
                            }};, DisassociateQualificationFromWorkerXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_DISASSOCIATE_QUALIFICATION_FROM_WORKER) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "harum";
                xAmzCredential = "iusto";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "amet";
            }};            

            DisassociateQualificationFromWorkerResponse res = sdk.sdk.disassociateQualificationFromWorker(req);

            if (res.disassociateQualificationFromWorkerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountBalance

The <code>GetAccountBalance</code> operation retrieves the Prepaid HITs balance in your Amazon Mechanical Turk account if you are a Prepaid Requester. Alternatively, this operation will retrieve the remaining available AWS Billing usage if you have enabled AWS Billing. Note: If you have enabled AWS Billing and still have a remaining Prepaid HITs balance, this balance can be viewed on the My Account page in the Requester console.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountBalanceRequest;
import org.openapis.openapi.models.operations.GetAccountBalanceResponse;
import org.openapis.openapi.models.operations.GetAccountBalanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccountBalanceRequest req = new GetAccountBalanceRequest(                new java.util.HashMap<String, Object>() {{
                                put("numquam", "enim");
                                put("dolorem", "sapiente");
                                put("totam", "nihil");
                                put("sit", "expedita");
                            }}, GetAccountBalanceXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_GET_ACCOUNT_BALANCE) {{
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "sed";
                xAmzCredential = "vel";
                xAmzDate = "libero";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "quam";
            }};            

            GetAccountBalanceResponse res = sdk.sdk.getAccountBalance(req);

            if (res.getAccountBalanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssignment

 The <code>GetAssignment</code> operation retrieves the details of the specified Assignment. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssignmentRequest;
import org.openapis.openapi.models.operations.GetAssignmentResponse;
import org.openapis.openapi.models.operations.GetAssignmentXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetAssignmentRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAssignmentRequest req = new GetAssignmentRequest(                new GetAssignmentRequest("incidunt");, GetAssignmentXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_GET_ASSIGNMENT) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "maxime";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "laborum";
            }};            

            GetAssignmentResponse res = sdk.sdk.getAssignment(req);

            if (res.getAssignmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFileUploadURL

 The <code>GetFileUploadURL</code> operation generates and returns a temporary URL. You use the temporary URL to retrieve a file uploaded by a Worker as an answer to a FileUploadAnswer question for a HIT. The temporary URL is generated the instant the GetFileUploadURL operation is called, and is valid for 60 seconds. You can get a temporary file upload URL any time until the HIT is disposed. After the HIT is disposed, any uploaded files are deleted, and cannot be retrieved. Pending Deprecation on December 12, 2017. The Answer Specification structure will no longer support the <code>FileUploadAnswer</code> element to be used for the QuestionForm data structure. Instead, we recommend that Requesters who want to create HITs asking Workers to upload files to use Amazon S3. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFileUploadURLRequest;
import org.openapis.openapi.models.operations.GetFileUploadURLResponse;
import org.openapis.openapi.models.operations.GetFileUploadURLXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetFileUploadURLRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFileUploadURLRequest req = new GetFileUploadURLRequest(                new GetFileUploadURLRequest("incidunt", "aspernatur");, GetFileUploadURLXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_GET_FILE_UPLOAD_URL) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "facilis";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "quam";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "temporibus";
            }};            

            GetFileUploadURLResponse res = sdk.sdk.getFileUploadURL(req);

            if (res.getFileUploadURLResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHIT

 The <code>GetHIT</code> operation retrieves the details of the specified HIT. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHITRequest;
import org.openapis.openapi.models.operations.GetHITResponse;
import org.openapis.openapi.models.operations.GetHITXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetHITRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetHITRequest req = new GetHITRequest(                new GetHITRequest("neque");, GetHITXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_GET_HIT) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "magni";
                xAmzCredential = "odio";
                xAmzDate = "sunt";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "hic";
            }};            

            GetHITResponse res = sdk.sdk.getHIT(req);

            if (res.getHITResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQualificationScore

<p> The <code>GetQualificationScore</code> operation returns the value of a Worker's Qualification for a given Qualification type. </p> <p> To get a Worker's Qualification, you must know the Worker's ID. The Worker's ID is included in the assignment data returned by the <code>ListAssignmentsForHIT</code> operation. </p> <p>Only the owner of a Qualification type can query the value of a Worker's Qualification of that type.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQualificationScoreRequest;
import org.openapis.openapi.models.operations.GetQualificationScoreResponse;
import org.openapis.openapi.models.operations.GetQualificationScoreXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetQualificationScoreRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetQualificationScoreRequest req = new GetQualificationScoreRequest(                new GetQualificationScoreRequest("cumque", "soluta");, GetQualificationScoreXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_GET_QUALIFICATION_SCORE) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "et";
                xAmzCredential = "saepe";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "quos";
            }};            

            GetQualificationScoreResponse res = sdk.sdk.getQualificationScore(req);

            if (res.getQualificationScoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQualificationType

 The <code>GetQualificationType</code>operation retrieves information about a Qualification type using its ID. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQualificationTypeRequest;
import org.openapis.openapi.models.operations.GetQualificationTypeResponse;
import org.openapis.openapi.models.operations.GetQualificationTypeXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetQualificationTypeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetQualificationTypeRequest req = new GetQualificationTypeRequest(                new GetQualificationTypeRequest("cupiditate");, GetQualificationTypeXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_GET_QUALIFICATION_TYPE) {{
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "dolorem";
                xAmzDate = "dolore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "dolorum";
            }};            

            GetQualificationTypeResponse res = sdk.sdk.getQualificationType(req);

            if (res.getQualificationTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssignmentsForHIT

<p> The <code>ListAssignmentsForHIT</code> operation retrieves completed assignments for a HIT. You can use this operation to retrieve the results for a HIT. </p> <p> You can get assignments for a HIT at any time, even if the HIT is not yet Reviewable. If a HIT requested multiple assignments, and has received some results but has not yet become Reviewable, you can still retrieve the partial results with this operation. </p> <p> Use the AssignmentStatus parameter to control which set of assignments for a HIT are returned. The ListAssignmentsForHIT operation can return submitted assignments awaiting approval, or it can return assignments that have already been approved or rejected. You can set AssignmentStatus=Approved,Rejected to get assignments that have already been approved and rejected together in one result set. </p> <p> Only the Requester who created the HIT can retrieve the assignments for that HIT. </p> <p> Results are sorted and divided into numbered pages and the operation returns a single page of results. You can use the parameters of the operation to control sorting and pagination. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssignmentsForHITRequest;
import org.openapis.openapi.models.operations.ListAssignmentsForHITResponse;
import org.openapis.openapi.models.operations.ListAssignmentsForHITXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssignmentStatusEnum;
import org.openapis.openapi.models.shared.ListAssignmentsForHITRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAssignmentsForHITRequest req = new ListAssignmentsForHITRequest(                new ListAssignmentsForHITRequest("quae") {{
                                assignmentStatuses = new org.openapis.openapi.models.shared.AssignmentStatusEnum[]{{
                                    add(AssignmentStatusEnum.APPROVED),
                                }};
                                maxResults = 929530L;
                                nextToken = "consequatur";
                            }};, ListAssignmentsForHITXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_LIST_ASSIGNMENTS_FOR_HIT) {{
                maxResults = "est";
                nextToken = "repellendus";
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "ut";
                xAmzDate = "facilis";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "quae";
            }};            

            ListAssignmentsForHITResponse res = sdk.sdk.listAssignmentsForHIT(req);

            if (res.listAssignmentsForHITResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBonusPayments

 The <code>ListBonusPayments</code> operation retrieves the amounts of bonuses you have paid to Workers for a given HIT or assignment. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBonusPaymentsRequest;
import org.openapis.openapi.models.operations.ListBonusPaymentsResponse;
import org.openapis.openapi.models.operations.ListBonusPaymentsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListBonusPaymentsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBonusPaymentsRequest req = new ListBonusPaymentsRequest(                new ListBonusPaymentsRequest() {{
                                assignmentId = "odio";
                                hitId = "occaecati";
                                maxResults = 977496L;
                                nextToken = "quisquam";
                            }};, ListBonusPaymentsXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_LIST_BONUS_PAYMENTS) {{
                maxResults = "vero";
                nextToken = "omnis";
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "delectus";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "tenetur";
            }};            

            ListBonusPaymentsResponse res = sdk.sdk.listBonusPayments(req);

            if (res.listBonusPaymentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listHITs

 The <code>ListHITs</code> operation returns all of a Requester's HITs. The operation returns HITs of any status, except for HITs that have been deleted of with the DeleteHIT operation or that have been auto-deleted. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListHITsRequest;
import org.openapis.openapi.models.operations.ListHITsResponse;
import org.openapis.openapi.models.operations.ListHITsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListHITsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListHITsRequest req = new ListHITsRequest(                new ListHITsRequest() {{
                                maxResults = 941378L;
                                nextToken = "distinctio";
                            }};, ListHITsXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_LIST_HI_TS) {{
                maxResults = "quod";
                nextToken = "odio";
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "vero";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "illum";
            }};            

            ListHITsResponse res = sdk.sdk.listHITs(req);

            if (res.listHITsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listHITsForQualificationType

 The <code>ListHITsForQualificationType</code> operation returns the HITs that use the given Qualification type for a Qualification requirement. The operation returns HITs of any status, except for HITs that have been deleted with the <code>DeleteHIT</code> operation or that have been auto-deleted. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListHITsForQualificationTypeRequest;
import org.openapis.openapi.models.operations.ListHITsForQualificationTypeResponse;
import org.openapis.openapi.models.operations.ListHITsForQualificationTypeXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListHITsForQualificationTypeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListHITsForQualificationTypeRequest req = new ListHITsForQualificationTypeRequest(                new ListHITsForQualificationTypeRequest("natus") {{
                                maxResults = 773326L;
                                nextToken = "aut";
                            }};, ListHITsForQualificationTypeXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_LIST_HI_TS_FOR_QUALIFICATION_TYPE) {{
                maxResults = "voluptatibus";
                nextToken = "exercitationem";
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "porro";
                xAmzDate = "maiores";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "eligendi";
            }};            

            ListHITsForQualificationTypeResponse res = sdk.sdk.listHITsForQualificationType(req);

            if (res.listHITsForQualificationTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listQualificationRequests

 The <code>ListQualificationRequests</code> operation retrieves requests for Qualifications of a particular Qualification type. The owner of the Qualification type calls this operation to poll for pending requests, and accepts them using the AcceptQualification operation. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListQualificationRequestsRequest;
import org.openapis.openapi.models.operations.ListQualificationRequestsResponse;
import org.openapis.openapi.models.operations.ListQualificationRequestsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListQualificationRequestsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListQualificationRequestsRequest req = new ListQualificationRequestsRequest(                new ListQualificationRequestsRequest() {{
                                maxResults = 4048L;
                                nextToken = "officia";
                                qualificationTypeId = "tempora";
                            }};, ListQualificationRequestsXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_LIST_QUALIFICATION_REQUESTS) {{
                maxResults = "ipsam";
                nextToken = "ea";
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "vel";
                xAmzCredential = "possimus";
                xAmzDate = "magnam";
                xAmzSecurityToken = "ratione";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "laudantium";
            }};            

            ListQualificationRequestsResponse res = sdk.sdk.listQualificationRequests(req);

            if (res.listQualificationRequestsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listQualificationTypes

 The <code>ListQualificationTypes</code> operation returns a list of Qualification types, filtered by an optional search term. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListQualificationTypesRequest;
import org.openapis.openapi.models.operations.ListQualificationTypesResponse;
import org.openapis.openapi.models.operations.ListQualificationTypesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListQualificationTypesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListQualificationTypesRequest req = new ListQualificationTypesRequest(                new ListQualificationTypesRequest(false) {{
                                maxResults = 224317L;
                                mustBeOwnedByCaller = false;
                                nextToken = "maiores";
                                query = "quasi";
                            }};, ListQualificationTypesXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_LIST_QUALIFICATION_TYPES) {{
                maxResults = "ex";
                nextToken = "nulla";
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "nostrum";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "ea";
            }};            

            ListQualificationTypesResponse res = sdk.sdk.listQualificationTypes(req);

            if (res.listQualificationTypesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listReviewPolicyResultsForHIT

 The <code>ListReviewPolicyResultsForHIT</code> operation retrieves the computed results and the actions taken in the course of executing your Review Policies for a given HIT. For information about how to specify Review Policies when you call CreateHIT, see Review Policies. The ListReviewPolicyResultsForHIT operation can return results for both Assignment-level and HIT-level review results. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListReviewPolicyResultsForHITRequest;
import org.openapis.openapi.models.operations.ListReviewPolicyResultsForHITResponse;
import org.openapis.openapi.models.operations.ListReviewPolicyResultsForHITXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListReviewPolicyResultsForHITRequest;
import org.openapis.openapi.models.shared.ReviewPolicyLevelEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListReviewPolicyResultsForHITRequest req = new ListReviewPolicyResultsForHITRequest(                new ListReviewPolicyResultsForHITRequest("corporis") {{
                                maxResults = 333145L;
                                nextToken = "aliquid";
                                policyLevels = new org.openapis.openapi.models.shared.ReviewPolicyLevelEnum[]{{
                                    add(ReviewPolicyLevelEnum.ASSIGNMENT),
                                }};
                                retrieveActions = false;
                                retrieveResults = false;
                            }};, ListReviewPolicyResultsForHITXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_LIST_REVIEW_POLICY_RESULTS_FOR_HIT) {{
                maxResults = "ea";
                nextToken = "quo";
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "aspernatur";
                xAmzDate = "minima";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "a";
                xAmzSignedHeaders = "libero";
            }};            

            ListReviewPolicyResultsForHITResponse res = sdk.sdk.listReviewPolicyResultsForHIT(req);

            if (res.listReviewPolicyResultsForHITResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listReviewableHITs

 The <code>ListReviewableHITs</code> operation retrieves the HITs with Status equal to Reviewable or Status equal to Reviewing that belong to the Requester calling the operation. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListReviewableHITsRequest;
import org.openapis.openapi.models.operations.ListReviewableHITsResponse;
import org.openapis.openapi.models.operations.ListReviewableHITsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListReviewableHITsRequest;
import org.openapis.openapi.models.shared.ReviewableHITStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListReviewableHITsRequest req = new ListReviewableHITsRequest(                new ListReviewableHITsRequest() {{
                                hitTypeId = "aut";
                                maxResults = 533466L;
                                nextToken = "impedit";
                                status = ReviewableHITStatusEnum.REVIEWABLE;
                            }};, ListReviewableHITsXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_LIST_REVIEWABLE_HI_TS) {{
                maxResults = "fugit";
                nextToken = "accusamus";
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "non";
                xAmzCredential = "et";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "velit";
            }};            

            ListReviewableHITsResponse res = sdk.sdk.listReviewableHITs(req);

            if (res.listReviewableHITsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkerBlocks

The <code>ListWorkersBlocks</code> operation retrieves a list of Workers who are blocked from working on your HITs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkerBlocksRequest;
import org.openapis.openapi.models.operations.ListWorkerBlocksResponse;
import org.openapis.openapi.models.operations.ListWorkerBlocksXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListWorkerBlocksRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorkerBlocksRequest req = new ListWorkerBlocksRequest(                new ListWorkerBlocksRequest() {{
                                maxResults = 420539L;
                                nextToken = "nobis";
                            }};, ListWorkerBlocksXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_LIST_WORKER_BLOCKS) {{
                maxResults = "quas";
                nextToken = "assumenda";
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "libero";
                xAmzDate = "quasi";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "explicabo";
            }};            

            ListWorkerBlocksResponse res = sdk.sdk.listWorkerBlocks(req);

            if (res.listWorkerBlocksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkersWithQualificationType

 The <code>ListWorkersWithQualificationType</code> operation returns all of the Workers that have been associated with a given Qualification type. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkersWithQualificationTypeRequest;
import org.openapis.openapi.models.operations.ListWorkersWithQualificationTypeResponse;
import org.openapis.openapi.models.operations.ListWorkersWithQualificationTypeXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListWorkersWithQualificationTypeRequest;
import org.openapis.openapi.models.shared.QualificationStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorkersWithQualificationTypeRequest req = new ListWorkersWithQualificationTypeRequest(                new ListWorkersWithQualificationTypeRequest("ipsa") {{
                                maxResults = 476477L;
                                nextToken = "magnam";
                                status = QualificationStatusEnum.GRANTED;
                            }};, ListWorkersWithQualificationTypeXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_LIST_WORKERS_WITH_QUALIFICATION_TYPE) {{
                maxResults = "eius";
                nextToken = "esse";
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "rem";
                xAmzCredential = "fuga";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "ut";
            }};            

            ListWorkersWithQualificationTypeResponse res = sdk.sdk.listWorkersWithQualificationType(req);

            if (res.listWorkersWithQualificationTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## notifyWorkers

 The <code>NotifyWorkers</code> operation sends an email to one or more Workers that you specify with the Worker ID. You can specify up to 100 Worker IDs to send the same message with a single call to the NotifyWorkers operation. The NotifyWorkers operation will send a notification email to a Worker only if you have previously approved or rejected work from the Worker. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NotifyWorkersRequest;
import org.openapis.openapi.models.operations.NotifyWorkersResponse;
import org.openapis.openapi.models.operations.NotifyWorkersXAmzTargetEnum;
import org.openapis.openapi.models.shared.NotifyWorkersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            NotifyWorkersRequest req = new NotifyWorkersRequest(                new NotifyWorkersRequest("suscipit", "assumenda",                 new String[]{{
                                                add("praesentium"),
                                            }});, NotifyWorkersXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_NOTIFY_WORKERS) {{
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "ipsa";
                xAmzDate = "id";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "quo";
            }};            

            NotifyWorkersResponse res = sdk.sdk.notifyWorkers(req);

            if (res.notifyWorkersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rejectAssignment

<p> The <code>RejectAssignment</code> operation rejects the results of a completed assignment. </p> <p> You can include an optional feedback message with the rejection, which the Worker can see in the Status section of the web site. When you include a feedback message with the rejection, it helps the Worker understand why the assignment was rejected, and can improve the quality of the results the Worker submits in the future. </p> <p> Only the Requester who created the HIT can reject an assignment for the HIT. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RejectAssignmentRequest;
import org.openapis.openapi.models.operations.RejectAssignmentResponse;
import org.openapis.openapi.models.operations.RejectAssignmentXAmzTargetEnum;
import org.openapis.openapi.models.shared.RejectAssignmentRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RejectAssignmentRequest req = new RejectAssignmentRequest(                new RejectAssignmentRequest("quo", "fuga");, RejectAssignmentXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_REJECT_ASSIGNMENT) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "eos";
                xAmzCredential = "voluptas";
                xAmzDate = "ab";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "tempora";
            }};            

            RejectAssignmentResponse res = sdk.sdk.rejectAssignment(req);

            if (res.rejectAssignmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rejectQualificationRequest

<p> The <code>RejectQualificationRequest</code> operation rejects a user's request for a Qualification. </p> <p> You can provide a text message explaining why the request was rejected. The Worker who made the request can see this message.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RejectQualificationRequestRequest;
import org.openapis.openapi.models.operations.RejectQualificationRequestResponse;
import org.openapis.openapi.models.operations.RejectQualificationRequestXAmzTargetEnum;
import org.openapis.openapi.models.shared.RejectQualificationRequestRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RejectQualificationRequestRequest req = new RejectQualificationRequestRequest(                new RejectQualificationRequestRequest("ipsam") {{
                                reason = "aspernatur";
                            }};, RejectQualificationRequestXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_REJECT_QUALIFICATION_REQUEST) {{
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "quo";
                xAmzCredential = "esse";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quod";
            }};            

            RejectQualificationRequestResponse res = sdk.sdk.rejectQualificationRequest(req);

            if (res.rejectQualificationRequestResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendBonus

 The <code>SendBonus</code> operation issues a payment of money from your account to a Worker. This payment happens separately from the reward you pay to the Worker when you approve the Worker's assignment. The SendBonus operation requires the Worker's ID and the assignment ID as parameters to initiate payment of the bonus. You must include a message that explains the reason for the bonus payment, as the Worker may not be expecting the payment. Amazon Mechanical Turk collects a fee for bonus payments, similar to the HIT listing fee. This operation fails if your account does not have enough funds to pay for both the bonus and the fees. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendBonusRequest;
import org.openapis.openapi.models.operations.SendBonusResponse;
import org.openapis.openapi.models.operations.SendBonusXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendBonusRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendBonusRequest req = new SendBonusRequest(                new SendBonusRequest("inventore", "nihil", "totam", "accusamus") {{
                                uniqueRequestToken = "aliquam";
                            }};, SendBonusXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_SEND_BONUS) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "commodi";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "molestiae";
            }};            

            SendBonusResponse res = sdk.sdk.sendBonus(req);

            if (res.sendBonusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendTestEventNotification

 The <code>SendTestEventNotification</code> operation causes Amazon Mechanical Turk to send a notification message as if a HIT event occurred, according to the provided notification specification. This allows you to test notifications without setting up notifications for a real HIT type and trying to trigger them using the website. When you call this operation, the service attempts to send the test notification immediately. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendTestEventNotificationRequest;
import org.openapis.openapi.models.operations.SendTestEventNotificationResponse;
import org.openapis.openapi.models.operations.SendTestEventNotificationXAmzTargetEnum;
import org.openapis.openapi.models.shared.EventTypeEnum;
import org.openapis.openapi.models.shared.NotificationSpecification;
import org.openapis.openapi.models.shared.NotificationTransportEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendTestEventNotificationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendTestEventNotificationRequest req = new SendTestEventNotificationRequest(                new SendTestEventNotificationRequest(                new NotificationSpecification("porro",                 new org.openapis.openapi.models.shared.EventTypeEnum[]{{
                                                                add(EventTypeEnum.HIT_CREATED),
                                                                add(EventTypeEnum.HIT_CREATED),
                                                            }}, NotificationTransportEnum.EMAIL, "deleniti");, EventTypeEnum.ASSIGNMENT_ABANDONED);, SendTestEventNotificationXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_SEND_TEST_EVENT_NOTIFICATION) {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "incidunt";
                xAmzDate = "atque";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "nisi";
            }};            

            SendTestEventNotificationResponse res = sdk.sdk.sendTestEventNotification(req);

            if (res.sendTestEventNotificationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateExpirationForHIT

 The <code>UpdateExpirationForHIT</code> operation allows you update the expiration time of a HIT. If you update it to a time in the past, the HIT will be immediately expired. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateExpirationForHITRequest;
import org.openapis.openapi.models.operations.UpdateExpirationForHITResponse;
import org.openapis.openapi.models.operations.UpdateExpirationForHITXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateExpirationForHITRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateExpirationForHITRequest req = new UpdateExpirationForHITRequest(                new UpdateExpirationForHITRequest(OffsetDateTime.parse("2022-07-09T22:36:51.892Z"), "ratione");, UpdateExpirationForHITXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_UPDATE_EXPIRATION_FOR_HIT) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "occaecati";
                xAmzDate = "atque";
                xAmzSecurityToken = "et";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "eveniet";
            }};            

            UpdateExpirationForHITResponse res = sdk.sdk.updateExpirationForHIT(req);

            if (res.updateExpirationForHITResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateHITReviewStatus

 The <code>UpdateHITReviewStatus</code> operation updates the status of a HIT. If the status is Reviewable, this operation can update the status to Reviewing, or it can revert a Reviewing HIT back to the Reviewable status. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateHITReviewStatusRequest;
import org.openapis.openapi.models.operations.UpdateHITReviewStatusResponse;
import org.openapis.openapi.models.operations.UpdateHITReviewStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateHITReviewStatusRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateHITReviewStatusRequest req = new UpdateHITReviewStatusRequest(                new UpdateHITReviewStatusRequest("veritatis") {{
                                revert = false;
                            }};, UpdateHITReviewStatusXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_UPDATE_HIT_REVIEW_STATUS) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "quod";
                xAmzCredential = "nam";
                xAmzDate = "vero";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "saepe";
            }};            

            UpdateHITReviewStatusResponse res = sdk.sdk.updateHITReviewStatus(req);

            if (res.updateHITReviewStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateHITTypeOfHIT

 The <code>UpdateHITTypeOfHIT</code> operation allows you to change the HITType properties of a HIT. This operation disassociates the HIT from its old HITType properties and associates it with the new HITType properties. The HIT takes on the properties of the new HITType in place of the old ones. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateHITTypeOfHITRequest;
import org.openapis.openapi.models.operations.UpdateHITTypeOfHITResponse;
import org.openapis.openapi.models.operations.UpdateHITTypeOfHITXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateHITTypeOfHITRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateHITTypeOfHITRequest req = new UpdateHITTypeOfHITRequest(                new UpdateHITTypeOfHITRequest("harum", "molestiae");, UpdateHITTypeOfHITXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_UPDATE_HIT_TYPE_OF_HIT) {{
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "minima";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "culpa";
            }};            

            UpdateHITTypeOfHITResponse res = sdk.sdk.updateHITTypeOfHIT(req);

            if (res.updateHITTypeOfHITResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNotificationSettings

 The <code>UpdateNotificationSettings</code> operation creates, updates, disables or re-enables notifications for a HIT type. If you call the UpdateNotificationSettings operation for a HIT type that already has a notification specification, the operation replaces the old specification with a new one. You can call the UpdateNotificationSettings operation to enable or disable notifications for the HIT type, without having to modify the notification specification itself by providing updates to the Active status without specifying a new notification specification. To change the Active status of a HIT type's notifications, the HIT type must already have a notification specification, or one must be provided in the same call to <code>UpdateNotificationSettings</code>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNotificationSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNotificationSettingsResponse;
import org.openapis.openapi.models.operations.UpdateNotificationSettingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.EventTypeEnum;
import org.openapis.openapi.models.shared.NotificationSpecification;
import org.openapis.openapi.models.shared.NotificationTransportEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateNotificationSettingsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNotificationSettingsRequest req = new UpdateNotificationSettingsRequest(                new UpdateNotificationSettingsRequest("adipisci") {{
                                active = false;
                                notification = new NotificationSpecification("cumque",                 new org.openapis.openapi.models.shared.EventTypeEnum[]{{
                                                    add(EventTypeEnum.ASSIGNMENT_ACCEPTED),
                                                }}, NotificationTransportEnum.SNS, "quaerat");;
                            }};, UpdateNotificationSettingsXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_UPDATE_NOTIFICATION_SETTINGS) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "esse";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "provident";
                xAmzSignature = "a";
                xAmzSignedHeaders = "nulla";
            }};            

            UpdateNotificationSettingsResponse res = sdk.sdk.updateNotificationSettings(req);

            if (res.updateNotificationSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateQualificationType

<p> The <code>UpdateQualificationType</code> operation modifies the attributes of an existing Qualification type, which is represented by a QualificationType data structure. Only the owner of a Qualification type can modify its attributes. </p> <p> Most attributes of a Qualification type can be changed after the type has been created. However, the Name and Keywords fields cannot be modified. The RetryDelayInSeconds parameter can be modified or added to change the delay or to enable retries, but RetryDelayInSeconds cannot be used to disable retries. </p> <p> You can use this operation to update the test for a Qualification type. The test is updated based on the values specified for the Test, TestDurationInSeconds and AnswerKey parameters. All three parameters specify the updated test. If you are updating the test for a type, you must specify the Test and TestDurationInSeconds parameters. The AnswerKey parameter is optional; omitting it specifies that the updated test does not have an answer key. </p> <p> If you omit the Test parameter, the test for the Qualification type is unchanged. There is no way to remove a test from a Qualification type that has one. If the type already has a test, you cannot update it to be AutoGranted. If the Qualification type does not have a test and one is provided by an update, the type will henceforth have a test. </p> <p> If you want to update the test duration or answer key for an existing test without changing the questions, you must specify a Test parameter with the original questions, along with the updated values. </p> <p> If you provide an updated Test but no AnswerKey, the new test will not have an answer key. Requests for such Qualifications must be granted manually. </p> <p> You can also update the AutoGranted and AutoGrantedValue attributes of the Qualification type.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateQualificationTypeRequest;
import org.openapis.openapi.models.operations.UpdateQualificationTypeResponse;
import org.openapis.openapi.models.operations.UpdateQualificationTypeXAmzTargetEnum;
import org.openapis.openapi.models.shared.QualificationTypeStatusEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateQualificationTypeRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateQualificationTypeRequest req = new UpdateQualificationTypeRequest(                new UpdateQualificationTypeRequest("esse") {{
                                answerKey = "quasi";
                                autoGranted = false;
                                autoGrantedValue = 951875L;
                                description = "error";
                                qualificationTypeStatus = QualificationTypeStatusEnum.INACTIVE;
                                retryDelayInSeconds = 863023L;
                                test = "possimus";
                                testDurationInSeconds = 157632L;
                            }};, UpdateQualificationTypeXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_UPDATE_QUALIFICATION_TYPE) {{
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "facere";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "similique";
            }};            

            UpdateQualificationTypeResponse res = sdk.sdk.updateQualificationType(req);

            if (res.updateQualificationTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
