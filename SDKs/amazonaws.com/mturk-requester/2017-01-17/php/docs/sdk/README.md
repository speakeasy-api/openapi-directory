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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptQualificationRequestRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptQualificationRequestRequest;
use \OpenAPI\OpenAPI\Models\Operations\AcceptQualificationRequestXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptQualificationRequestRequest();
    $request->acceptQualificationRequestRequest = new AcceptQualificationRequestRequest();
    $request->acceptQualificationRequestRequest->integerValue = 623564;
    $request->acceptQualificationRequestRequest->qualificationRequestId = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = AcceptQualificationRequestXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_ACCEPT_QUALIFICATION_REQUEST;

    $response = $sdk->sdk->acceptQualificationRequest($request);

    if ($response->acceptQualificationRequestResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## approveAssignment

<p> The <code>ApproveAssignment</code> operation approves the results of a completed assignment. </p> <p> Approving an assignment initiates two payments from the Requester's Amazon.com account </p> <ul> <li> <p> The Worker who submitted the results is paid the reward specified in the HIT. </p> </li> <li> <p> Amazon Mechanical Turk fees are debited. </p> </li> </ul> <p> If the Requester's account does not have adequate funds for these payments, the call to ApproveAssignment returns an exception, and the approval is not processed. You can include an optional feedback message with the approval, which the Worker can see in the Status section of the web site. </p> <p> You can also call this operation for assignments that were previous rejected and approve them by explicitly overriding the previous rejection. This only works on rejected assignments that were submitted within the previous 30 days and only if the assignment's related HIT has not been deleted. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ApproveAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApproveAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ApproveAssignmentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApproveAssignmentRequest();
    $request->approveAssignmentRequest = new ApproveAssignmentRequest();
    $request->approveAssignmentRequest->assignmentId = 'suscipit';
    $request->approveAssignmentRequest->overrideRejection = false;
    $request->approveAssignmentRequest->requesterFeedback = 'molestiae';
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = ApproveAssignmentXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_APPROVE_ASSIGNMENT;

    $response = $sdk->sdk->approveAssignment($request);

    if ($response->approveAssignmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateQualificationWithWorker

<p> The <code>AssociateQualificationWithWorker</code> operation gives a Worker a Qualification. <code>AssociateQualificationWithWorker</code> does not require that the Worker submit a Qualification request. It gives the Qualification directly to the Worker. </p> <p> You can only assign a Qualification of a Qualification type that you created (using the <code>CreateQualificationType</code> operation). </p> <note> <p> Note: <code>AssociateQualificationWithWorker</code> does not affect any pending Qualification requests for the Qualification by the Worker. If you assign a Qualification to a Worker, then later grant a Qualification request made by the Worker, the granting of the request may modify the Qualification score. To resolve a pending Qualification request without affecting the Qualification the Worker already has, reject the request with the <code>RejectQualificationRequest</code> operation. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateQualificationWithWorkerRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateQualificationWithWorkerRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateQualificationWithWorkerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateQualificationWithWorkerRequest();
    $request->associateQualificationWithWorkerRequest = new AssociateQualificationWithWorkerRequest();
    $request->associateQualificationWithWorkerRequest->integerValue = 836079;
    $request->associateQualificationWithWorkerRequest->qualificationTypeId = 'ab';
    $request->associateQualificationWithWorkerRequest->sendNotification = false;
    $request->associateQualificationWithWorkerRequest->workerId = 'quis';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = AssociateQualificationWithWorkerXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_ASSOCIATE_QUALIFICATION_WITH_WORKER;

    $response = $sdk->sdk->associateQualificationWithWorker($request);

    if ($response->associateQualificationWithWorkerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAdditionalAssignmentsForHIT

<p> The <code>CreateAdditionalAssignmentsForHIT</code> operation increases the maximum number of assignments of an existing HIT. </p> <p> To extend the maximum number of assignments, specify the number of additional assignments.</p> <note> <ul> <li> <p>HITs created with fewer than 10 assignments cannot be extended to have 10 or more assignments. Attempting to add assignments in a way that brings the total number of assignments for a HIT from fewer than 10 assignments to 10 or more assignments will result in an <code>AWS.MechanicalTurk.InvalidMaximumAssignmentsIncrease</code> exception.</p> </li> <li> <p>HITs that were created before July 22, 2015 cannot be extended. Attempting to extend HITs that were created before July 22, 2015 will result in an <code>AWS.MechanicalTurk.HITTooOldForExtension</code> exception. </p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAdditionalAssignmentsForHITRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAdditionalAssignmentsForHITRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAdditionalAssignmentsForHITXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAdditionalAssignmentsForHITRequest();
    $request->createAdditionalAssignmentsForHITRequest = new CreateAdditionalAssignmentsForHITRequest();
    $request->createAdditionalAssignmentsForHITRequest->hitId = 'odit';
    $request->createAdditionalAssignmentsForHITRequest->numberOfAdditionalAssignments = 870013;
    $request->createAdditionalAssignmentsForHITRequest->uniqueRequestToken = 'at';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'porro';
    $request->xAmzTarget = CreateAdditionalAssignmentsForHITXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_CREATE_ADDITIONAL_ASSIGNMENTS_FOR_HIT;

    $response = $sdk->sdk->createAdditionalAssignmentsForHIT($request);

    if ($response->createAdditionalAssignmentsForHITResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createHIT

<p>The <code>CreateHIT</code> operation creates a new Human Intelligence Task (HIT). The new HIT is made available for Workers to find and accept on the Amazon Mechanical Turk website. </p> <p> This operation allows you to specify a new HIT by passing in values for the properties of the HIT, such as its title, reward amount and number of assignments. When you pass these values to <code>CreateHIT</code>, a new HIT is created for you, with a new <code>HITTypeID</code>. The HITTypeID can be used to create additional HITs in the future without needing to specify common parameters such as the title, description and reward amount each time.</p> <p> An alternative way to create HITs is to first generate a HITTypeID using the <code>CreateHITType</code> operation and then call the <code>CreateHITWithHITType</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. </p> <p>CreateHIT also supports several ways to provide question data: by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>. </p> <note> <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateHITRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateHITRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReviewPolicy;
use \OpenAPI\OpenAPI\Models\Shared\PolicyParameter;
use \OpenAPI\OpenAPI\Models\Shared\ParameterMapEntry;
use \OpenAPI\OpenAPI\Models\Shared\HITLayoutParameter;
use \OpenAPI\OpenAPI\Models\Shared\QualificationRequirement;
use \OpenAPI\OpenAPI\Models\Shared\HITAccessActionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComparatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\Locale;
use \OpenAPI\OpenAPI\Models\Operations\CreateHITXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateHITRequest();
    $request->createHITRequest = new CreateHITRequest();
    $request->createHITRequest->assignmentDurationInSeconds = 678880;
    $request->createHITRequest->assignmentReviewPolicy = new ReviewPolicy();
    $request->createHITRequest->assignmentReviewPolicy->parameters = [
        new PolicyParameter(),
    ];
    $request->createHITRequest->assignmentReviewPolicy->policyName = 'nam';
    $request->createHITRequest->autoApprovalDelayInSeconds = 639921;
    $request->createHITRequest->description = 'occaecati';
    $request->createHITRequest->hitLayoutId = 'fugit';
    $request->createHITRequest->hitLayoutParameters = [
        new HITLayoutParameter(),
        new HITLayoutParameter(),
        new HITLayoutParameter(),
    ];
    $request->createHITRequest->hitReviewPolicy = new ReviewPolicy();
    $request->createHITRequest->hitReviewPolicy->parameters = [
        new PolicyParameter(),
        new PolicyParameter(),
        new PolicyParameter(),
        new PolicyParameter(),
    ];
    $request->createHITRequest->hitReviewPolicy->policyName = 'optio';
    $request->createHITRequest->keywords = 'totam';
    $request->createHITRequest->lifetimeInSeconds = 105907;
    $request->createHITRequest->maxAssignments = 414662;
    $request->createHITRequest->qualificationRequirements = [
        new QualificationRequirement(),
        new QualificationRequirement(),
    ];
    $request->createHITRequest->question = 'modi';
    $request->createHITRequest->requesterAnnotation = 'qui';
    $request->createHITRequest->reward = 'impedit';
    $request->createHITRequest->title = 'Miss';
    $request->createHITRequest->uniqueRequestToken = 'esse';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = CreateHITXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_CREATE_HIT;

    $response = $sdk->sdk->createHIT($request);

    if ($response->createHITResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createHITType

 The <code>CreateHITType</code> operation creates a new HIT type. This operation allows you to define a standard set of HIT properties to use when creating HITs. If you register a HIT type with values that match an existing HIT type, the HIT type ID of the existing type will be returned. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateHITTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateHITTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\QualificationRequirement;
use \OpenAPI\OpenAPI\Models\Shared\HITAccessActionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComparatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\Locale;
use \OpenAPI\OpenAPI\Models\Operations\CreateHITTypeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateHITTypeRequest();
    $request->createHITTypeRequest = new CreateHITTypeRequest();
    $request->createHITTypeRequest->assignmentDurationInSeconds = 612096;
    $request->createHITTypeRequest->autoApprovalDelayInSeconds = 222321;
    $request->createHITTypeRequest->description = 'natus';
    $request->createHITTypeRequest->keywords = 'laboriosam';
    $request->createHITTypeRequest->qualificationRequirements = [
        new QualificationRequirement(),
        new QualificationRequirement(),
        new QualificationRequirement(),
        new QualificationRequirement(),
    ];
    $request->createHITTypeRequest->reward = 'saepe';
    $request->createHITTypeRequest->title = 'Miss';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = CreateHITTypeXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_CREATE_HIT_TYPE;

    $response = $sdk->sdk->createHITType($request);

    if ($response->createHITTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createHITWithHITType

<p> The <code>CreateHITWithHITType</code> operation creates a new Human Intelligence Task (HIT) using an existing HITTypeID generated by the <code>CreateHITType</code> operation. </p> <p> This is an alternative way to create HITs from the <code>CreateHIT</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. </p> <p>CreateHITWithHITType also supports several ways to provide question data: by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>. </p> <note> <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateHITWithHITTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateHITWithHITTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReviewPolicy;
use \OpenAPI\OpenAPI\Models\Shared\PolicyParameter;
use \OpenAPI\OpenAPI\Models\Shared\ParameterMapEntry;
use \OpenAPI\OpenAPI\Models\Shared\HITLayoutParameter;
use \OpenAPI\OpenAPI\Models\Operations\CreateHITWithHITTypeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateHITWithHITTypeRequest();
    $request->createHITWithHITTypeRequest = new CreateHITWithHITTypeRequest();
    $request->createHITWithHITTypeRequest->assignmentReviewPolicy = new ReviewPolicy();
    $request->createHITWithHITTypeRequest->assignmentReviewPolicy->parameters = [
        new PolicyParameter(),
    ];
    $request->createHITWithHITTypeRequest->assignmentReviewPolicy->policyName = 'reiciendis';
    $request->createHITWithHITTypeRequest->hitLayoutId = 'est';
    $request->createHITWithHITTypeRequest->hitLayoutParameters = [
        new HITLayoutParameter(),
        new HITLayoutParameter(),
        new HITLayoutParameter(),
    ];
    $request->createHITWithHITTypeRequest->hitReviewPolicy = new ReviewPolicy();
    $request->createHITWithHITTypeRequest->hitReviewPolicy->parameters = [
        new PolicyParameter(),
        new PolicyParameter(),
        new PolicyParameter(),
    ];
    $request->createHITWithHITTypeRequest->hitReviewPolicy->policyName = 'dolores';
    $request->createHITWithHITTypeRequest->hitTypeId = 'dolorem';
    $request->createHITWithHITTypeRequest->lifetimeInSeconds = 358152;
    $request->createHITWithHITTypeRequest->maxAssignments = 128926;
    $request->createHITWithHITTypeRequest->question = 'nobis';
    $request->createHITWithHITTypeRequest->requesterAnnotation = 'enim';
    $request->createHITWithHITTypeRequest->uniqueRequestToken = 'omnis';
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzTarget = CreateHITWithHITTypeXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_CREATE_HIT_WITH_HIT_TYPE;

    $response = $sdk->sdk->createHITWithHITType($request);

    if ($response->createHITWithHITTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createQualificationType

 The <code>CreateQualificationType</code> operation creates a new Qualification type, which is represented by a <code>QualificationType</code> data structure. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateQualificationTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateQualificationTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\QualificationTypeStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateQualificationTypeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateQualificationTypeRequest();
    $request->createQualificationTypeRequest = new CreateQualificationTypeRequest();
    $request->createQualificationTypeRequest->answerKey = 'sapiente';
    $request->createQualificationTypeRequest->autoGranted = false;
    $request->createQualificationTypeRequest->autoGrantedValue = 102044;
    $request->createQualificationTypeRequest->description = 'mollitia';
    $request->createQualificationTypeRequest->keywords = 'dolorem';
    $request->createQualificationTypeRequest->name = 'Carlos Ziemann';
    $request->createQualificationTypeRequest->qualificationTypeStatus = QualificationTypeStatusEnum::ACTIVE;
    $request->createQualificationTypeRequest->retryDelayInSeconds = 414369;
    $request->createQualificationTypeRequest->test = 'quam';
    $request->createQualificationTypeRequest->testDurationInSeconds = 474697;
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'quia';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'vitae';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'animi';
    $request->xAmzTarget = CreateQualificationTypeXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_CREATE_QUALIFICATION_TYPE;

    $response = $sdk->sdk->createQualificationType($request);

    if ($response->createQualificationTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorkerBlock

The <code>CreateWorkerBlock</code> operation allows you to prevent a Worker from working on your HITs. For example, you can block a Worker who is producing poor quality work. You can block up to 100,000 Workers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkerBlockRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateWorkerBlockRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkerBlockXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkerBlockRequest();
    $request->createWorkerBlockRequest = new CreateWorkerBlockRequest();
    $request->createWorkerBlockRequest->reason = 'enim';
    $request->createWorkerBlockRequest->workerId = 'odit';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'aut';
    $request->xAmzTarget = CreateWorkerBlockXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_CREATE_WORKER_BLOCK;

    $response = $sdk->sdk->createWorkerBlock($request);

    if ($response->createWorkerBlockResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteHIT

<p> The <code>DeleteHIT</code> operation is used to delete HIT that is no longer needed. Only the Requester who created the HIT can delete it. </p> <p> You can only dispose of HITs that are in the <code>Reviewable</code> state, with all of their submitted assignments already either approved or rejected. If you call the DeleteHIT operation on a HIT that is not in the <code>Reviewable</code> state (for example, that has not expired, or still has active assignments), or on a HIT that is Reviewable but without all of its submitted assignments already approved or rejected, the service will return an error. </p> <note> <ul> <li> <p> HITs are automatically disposed of after 120 days. </p> </li> <li> <p> After you dispose of a HIT, you can no longer approve the HIT's rejected assignments. </p> </li> <li> <p> Disposed HITs are not returned in results for the ListHITs operation. </p> </li> <li> <p> Disposing HITs can improve the performance of operations such as ListReviewableHITs and ListHITs. </p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHITRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteHITRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHITXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteHITRequest();
    $request->deleteHITRequest = new DeleteHITRequest();
    $request->deleteHITRequest->hitId = 'quasi';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = DeleteHITXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_DELETE_HIT;

    $response = $sdk->sdk->deleteHIT($request);

    if ($response->deleteHITResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteQualificationType

<p> The <code>DeleteQualificationType</code> deletes a Qualification type and deletes any HIT types that are associated with the Qualification type. </p> <p>This operation does not revoke Qualifications already assigned to Workers because the Qualifications might be needed for active HITs. If there are any pending requests for the Qualification type, Amazon Mechanical Turk rejects those requests. After you delete a Qualification type, you can no longer use it to create HITs or HIT types.</p> <note> <p>DeleteQualificationType must wait for all the HITs that use the deleted Qualification type to be deleted before completing. It may take up to 48 hours before DeleteQualificationType completes and the unique name of the Qualification type is available for reuse with CreateQualificationType.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteQualificationTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteQualificationTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteQualificationTypeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteQualificationTypeRequest();
    $request->deleteQualificationTypeRequest = new DeleteQualificationTypeRequest();
    $request->deleteQualificationTypeRequest->qualificationTypeId = 'nihil';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = DeleteQualificationTypeXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_DELETE_QUALIFICATION_TYPE;

    $response = $sdk->sdk->deleteQualificationType($request);

    if ($response->deleteQualificationTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkerBlock

The <code>DeleteWorkerBlock</code> operation allows you to reinstate a blocked Worker to work on your HITs. This operation reverses the effects of the CreateWorkerBlock operation. You need the Worker ID to use this operation. If the Worker ID is missing or invalid, this operation fails and returns the message “WorkerId is invalid.” If the specified Worker is not blocked, this operation returns successfully.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkerBlockRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteWorkerBlockRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkerBlockXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkerBlockRequest();
    $request->deleteWorkerBlockRequest = new DeleteWorkerBlockRequest();
    $request->deleteWorkerBlockRequest->reason = 'doloremque';
    $request->deleteWorkerBlockRequest->workerId = 'reprehenderit';
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = DeleteWorkerBlockXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_DELETE_WORKER_BLOCK;

    $response = $sdk->sdk->deleteWorkerBlock($request);

    if ($response->deleteWorkerBlockResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateQualificationFromWorker

<p> The <code>DisassociateQualificationFromWorker</code> revokes a previously granted Qualification from a user. </p> <p> You can provide a text message explaining why the Qualification was revoked. The user who had the Qualification can see this message. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateQualificationFromWorkerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateQualificationFromWorkerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateQualificationFromWorkerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateQualificationFromWorkerRequest();
    $request->disassociateQualificationFromWorkerRequest = new DisassociateQualificationFromWorkerRequest();
    $request->disassociateQualificationFromWorkerRequest->qualificationTypeId = 'harum';
    $request->disassociateQualificationFromWorkerRequest->reason = 'enim';
    $request->disassociateQualificationFromWorkerRequest->workerId = 'accusamus';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'molestias';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = DisassociateQualificationFromWorkerXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_DISASSOCIATE_QUALIFICATION_FROM_WORKER;

    $response = $sdk->sdk->disassociateQualificationFromWorker($request);

    if ($response->disassociateQualificationFromWorkerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountBalance

The <code>GetAccountBalance</code> operation retrieves the Prepaid HITs balance in your Amazon Mechanical Turk account if you are a Prepaid Requester. Alternatively, this operation will retrieve the remaining available AWS Billing usage if you have enabled AWS Billing. Note: If you have enabled AWS Billing and still have a remaining Prepaid HITs balance, this balance can be viewed on the My Account page in the Requester console.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountBalanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountBalanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountBalanceRequest();
    $request->requestBody = [
        'modi' => 'praesentium',
        'rem' => 'voluptates',
        'quasi' => 'repudiandae',
        'sint' => 'veritatis',
    ];
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzTarget = GetAccountBalanceXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_GET_ACCOUNT_BALANCE;

    $response = $sdk->sdk->getAccountBalance($request);

    if ($response->getAccountBalanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssignment

 The <code>GetAssignment</code> operation retrieves the details of the specified Assignment. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAssignmentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssignmentRequest();
    $request->getAssignmentRequest = new GetAssignmentRequest();
    $request->getAssignmentRequest->assignmentId = 'deserunt';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->xAmzTarget = GetAssignmentXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_GET_ASSIGNMENT;

    $response = $sdk->sdk->getAssignment($request);

    if ($response->getAssignmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFileUploadURL

 The <code>GetFileUploadURL</code> operation generates and returns a temporary URL. You use the temporary URL to retrieve a file uploaded by a Worker as an answer to a FileUploadAnswer question for a HIT. The temporary URL is generated the instant the GetFileUploadURL operation is called, and is valid for 60 seconds. You can get a temporary file upload URL any time until the HIT is disposed. After the HIT is disposed, any uploaded files are deleted, and cannot be retrieved. Pending Deprecation on December 12, 2017. The Answer Specification structure will no longer support the <code>FileUploadAnswer</code> element to be used for the QuestionForm data structure. Instead, we recommend that Requesters who want to create HITs asking Workers to upload files to use Amazon S3. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFileUploadURLRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetFileUploadURLRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFileUploadURLXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFileUploadURLRequest();
    $request->getFileUploadURLRequest = new GetFileUploadURLRequest();
    $request->getFileUploadURLRequest->assignmentId = 'quos';
    $request->getFileUploadURLRequest->questionIdentifier = 'perferendis';
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = GetFileUploadURLXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_GET_FILE_UPLOAD_URL;

    $response = $sdk->sdk->getFileUploadURL($request);

    if ($response->getFileUploadURLResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getHIT

 The <code>GetHIT</code> operation retrieves the details of the specified HIT. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetHITRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetHITRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetHITXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetHITRequest();
    $request->getHITRequest = new GetHITRequest();
    $request->getHITRequest->hitId = 'tempora';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'eligendi';
    $request->xAmzTarget = GetHITXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_GET_HIT;

    $response = $sdk->sdk->getHIT($request);

    if ($response->getHITResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQualificationScore

<p> The <code>GetQualificationScore</code> operation returns the value of a Worker's Qualification for a given Qualification type. </p> <p> To get a Worker's Qualification, you must know the Worker's ID. The Worker's ID is included in the assignment data returned by the <code>ListAssignmentsForHIT</code> operation. </p> <p>Only the owner of a Qualification type can query the value of a Worker's Qualification of that type.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetQualificationScoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetQualificationScoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQualificationScoreXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQualificationScoreRequest();
    $request->getQualificationScoreRequest = new GetQualificationScoreRequest();
    $request->getQualificationScoreRequest->qualificationTypeId = 'sint';
    $request->getQualificationScoreRequest->workerId = 'aliquid';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'a';
    $request->xAmzTarget = GetQualificationScoreXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_GET_QUALIFICATION_SCORE;

    $response = $sdk->sdk->getQualificationScore($request);

    if ($response->getQualificationScoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQualificationType

 The <code>GetQualificationType</code>operation retrieves information about a Qualification type using its ID. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetQualificationTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetQualificationTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQualificationTypeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQualificationTypeRequest();
    $request->getQualificationTypeRequest = new GetQualificationTypeRequest();
    $request->getQualificationTypeRequest->qualificationTypeId = 'dolorum';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = GetQualificationTypeXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_GET_QUALIFICATION_TYPE;

    $response = $sdk->sdk->getQualificationType($request);

    if ($response->getQualificationTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssignmentsForHIT

<p> The <code>ListAssignmentsForHIT</code> operation retrieves completed assignments for a HIT. You can use this operation to retrieve the results for a HIT. </p> <p> You can get assignments for a HIT at any time, even if the HIT is not yet Reviewable. If a HIT requested multiple assignments, and has received some results but has not yet become Reviewable, you can still retrieve the partial results with this operation. </p> <p> Use the AssignmentStatus parameter to control which set of assignments for a HIT are returned. The ListAssignmentsForHIT operation can return submitted assignments awaiting approval, or it can return assignments that have already been approved or rejected. You can set AssignmentStatus=Approved,Rejected to get assignments that have already been approved and rejected together in one result set. </p> <p> Only the Requester who created the HIT can retrieve the assignments for that HIT. </p> <p> Results are sorted and divided into numbered pages and the operation returns a single page of results. You can use the parameters of the operation to control sorting and pagination. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAssignmentsForHITRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAssignmentsForHITRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssignmentStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAssignmentsForHITXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssignmentsForHITRequest();
    $request->listAssignmentsForHITRequest = new ListAssignmentsForHITRequest();
    $request->listAssignmentsForHITRequest->assignmentStatuses = [
        AssignmentStatusEnum::REJECTED,
        AssignmentStatusEnum::APPROVED,
        AssignmentStatusEnum::APPROVED,
        AssignmentStatusEnum::REJECTED,
    ];
    $request->listAssignmentsForHITRequest->hitId = 'accusamus';
    $request->listAssignmentsForHITRequest->maxResults = 249796;
    $request->listAssignmentsForHITRequest->nextToken = 'occaecati';
    $request->maxResults = 'enim';
    $request->nextToken = 'accusamus';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = ListAssignmentsForHITXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_LIST_ASSIGNMENTS_FOR_HIT;

    $response = $sdk->sdk->listAssignmentsForHIT($request);

    if ($response->listAssignmentsForHITResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBonusPayments

 The <code>ListBonusPayments</code> operation retrieves the amounts of bonuses you have paid to Workers for a given HIT or assignment. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBonusPaymentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListBonusPaymentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListBonusPaymentsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBonusPaymentsRequest();
    $request->listBonusPaymentsRequest = new ListBonusPaymentsRequest();
    $request->listBonusPaymentsRequest->assignmentId = 'sapiente';
    $request->listBonusPaymentsRequest->hitId = 'amet';
    $request->listBonusPaymentsRequest->maxResults = 643990;
    $request->listBonusPaymentsRequest->nextToken = 'nisi';
    $request->maxResults = 'vel';
    $request->nextToken = 'natus';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = ListBonusPaymentsXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_LIST_BONUS_PAYMENTS;

    $response = $sdk->sdk->listBonusPayments($request);

    if ($response->listBonusPaymentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listHITs

 The <code>ListHITs</code> operation returns all of a Requester's HITs. The operation returns HITs of any status, except for HITs that have been deleted of with the DeleteHIT operation or that have been auto-deleted. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListHITsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListHITsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListHITsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListHITsRequest();
    $request->listHITsRequest = new ListHITsRequest();
    $request->listHITsRequest->maxResults = 287991;
    $request->listHITsRequest->nextToken = 'labore';
    $request->maxResults = 'suscipit';
    $request->nextToken = 'natus';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmzTarget = ListHITsXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_LIST_HI_TS;

    $response = $sdk->sdk->listHITs($request);

    if ($response->listHITsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listHITsForQualificationType

 The <code>ListHITsForQualificationType</code> operation returns the HITs that use the given Qualification type for a Qualification requirement. The operation returns HITs of any status, except for HITs that have been deleted with the <code>DeleteHIT</code> operation or that have been auto-deleted. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListHITsForQualificationTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListHITsForQualificationTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListHITsForQualificationTypeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListHITsForQualificationTypeRequest();
    $request->listHITsForQualificationTypeRequest = new ListHITsForQualificationTypeRequest();
    $request->listHITsForQualificationTypeRequest->maxResults = 569965;
    $request->listHITsForQualificationTypeRequest->nextToken = 'ullam';
    $request->listHITsForQualificationTypeRequest->qualificationTypeId = 'provident';
    $request->maxResults = 'quos';
    $request->nextToken = 'sint';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = ListHITsForQualificationTypeXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_LIST_HI_TS_FOR_QUALIFICATION_TYPE;

    $response = $sdk->sdk->listHITsForQualificationType($request);

    if ($response->listHITsForQualificationTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listQualificationRequests

 The <code>ListQualificationRequests</code> operation retrieves requests for Qualifications of a particular Qualification type. The owner of the Qualification type calls this operation to poll for pending requests, and accepts them using the AcceptQualification operation. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListQualificationRequestsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListQualificationRequestsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListQualificationRequestsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListQualificationRequestsRequest();
    $request->listQualificationRequestsRequest = new ListQualificationRequestsRequest();
    $request->listQualificationRequestsRequest->maxResults = 896547;
    $request->listQualificationRequestsRequest->nextToken = 'odit';
    $request->listQualificationRequestsRequest->qualificationTypeId = 'nemo';
    $request->maxResults = 'quasi';
    $request->nextToken = 'iure';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = ListQualificationRequestsXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_LIST_QUALIFICATION_REQUESTS;

    $response = $sdk->sdk->listQualificationRequests($request);

    if ($response->listQualificationRequestsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listQualificationTypes

 The <code>ListQualificationTypes</code> operation returns a list of Qualification types, filtered by an optional search term. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListQualificationTypesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListQualificationTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListQualificationTypesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListQualificationTypesRequest();
    $request->listQualificationTypesRequest = new ListQualificationTypesRequest();
    $request->listQualificationTypesRequest->maxResults = 100226;
    $request->listQualificationTypesRequest->mustBeOwnedByCaller = false;
    $request->listQualificationTypesRequest->mustBeRequestable = false;
    $request->listQualificationTypesRequest->nextToken = 'architecto';
    $request->listQualificationTypesRequest->query = 'repudiandae';
    $request->maxResults = 'ullam';
    $request->nextToken = 'expedita';
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = ListQualificationTypesXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_LIST_QUALIFICATION_TYPES;

    $response = $sdk->sdk->listQualificationTypes($request);

    if ($response->listQualificationTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listReviewPolicyResultsForHIT

 The <code>ListReviewPolicyResultsForHIT</code> operation retrieves the computed results and the actions taken in the course of executing your Review Policies for a given HIT. For information about how to specify Review Policies when you call CreateHIT, see Review Policies. The ListReviewPolicyResultsForHIT operation can return results for both Assignment-level and HIT-level review results. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListReviewPolicyResultsForHITRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListReviewPolicyResultsForHITRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReviewPolicyLevelEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListReviewPolicyResultsForHITXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListReviewPolicyResultsForHITRequest();
    $request->listReviewPolicyResultsForHITRequest = new ListReviewPolicyResultsForHITRequest();
    $request->listReviewPolicyResultsForHITRequest->hitId = 'consequuntur';
    $request->listReviewPolicyResultsForHITRequest->maxResults = 508315;
    $request->listReviewPolicyResultsForHITRequest->nextToken = 'natus';
    $request->listReviewPolicyResultsForHITRequest->policyLevels = [
        ReviewPolicyLevelEnum::ASSIGNMENT,
    ];
    $request->listReviewPolicyResultsForHITRequest->retrieveActions = false;
    $request->listReviewPolicyResultsForHITRequest->retrieveResults = false;
    $request->maxResults = 'quo';
    $request->nextToken = 'illum';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = ListReviewPolicyResultsForHITXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_LIST_REVIEW_POLICY_RESULTS_FOR_HIT;

    $response = $sdk->sdk->listReviewPolicyResultsForHIT($request);

    if ($response->listReviewPolicyResultsForHITResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listReviewableHITs

 The <code>ListReviewableHITs</code> operation retrieves the HITs with Status equal to Reviewable or Status equal to Reviewing that belong to the Requester calling the operation. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListReviewableHITsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListReviewableHITsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReviewableHITStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListReviewableHITsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListReviewableHITsRequest();
    $request->listReviewableHITsRequest = new ListReviewableHITsRequest();
    $request->listReviewableHITsRequest->hitTypeId = 'ab';
    $request->listReviewableHITsRequest->maxResults = 982575;
    $request->listReviewableHITsRequest->nextToken = 'quidem';
    $request->listReviewableHITsRequest->status = ReviewableHITStatusEnum::REVIEWABLE;
    $request->maxResults = 'voluptate';
    $request->nextToken = 'autem';
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'fugiat';
    $request->xAmzTarget = ListReviewableHITsXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_LIST_REVIEWABLE_HI_TS;

    $response = $sdk->sdk->listReviewableHITs($request);

    if ($response->listReviewableHITsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkerBlocks

The <code>ListWorkersBlocks</code> operation retrieves a list of Workers who are blocked from working on your HITs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkerBlocksRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListWorkerBlocksRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkerBlocksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkerBlocksRequest();
    $request->listWorkerBlocksRequest = new ListWorkerBlocksRequest();
    $request->listWorkerBlocksRequest->maxResults = 230742;
    $request->listWorkerBlocksRequest->nextToken = 'aut';
    $request->maxResults = 'cumque';
    $request->nextToken = 'corporis';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->xAmzTarget = ListWorkerBlocksXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_LIST_WORKER_BLOCKS;

    $response = $sdk->sdk->listWorkerBlocks($request);

    if ($response->listWorkerBlocksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkersWithQualificationType

 The <code>ListWorkersWithQualificationType</code> operation returns all of the Workers that have been associated with a given Qualification type. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkersWithQualificationTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListWorkersWithQualificationTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\QualificationStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkersWithQualificationTypeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkersWithQualificationTypeRequest();
    $request->listWorkersWithQualificationTypeRequest = new ListWorkersWithQualificationTypeRequest();
    $request->listWorkersWithQualificationTypeRequest->maxResults = 54338;
    $request->listWorkersWithQualificationTypeRequest->nextToken = 'quis';
    $request->listWorkersWithQualificationTypeRequest->qualificationTypeId = 'nesciunt';
    $request->listWorkersWithQualificationTypeRequest->status = QualificationStatusEnum::GRANTED;
    $request->maxResults = 'perferendis';
    $request->nextToken = 'dolores';
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = ListWorkersWithQualificationTypeXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_LIST_WORKERS_WITH_QUALIFICATION_TYPE;

    $response = $sdk->sdk->listWorkersWithQualificationType($request);

    if ($response->listWorkersWithQualificationTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notifyWorkers

 The <code>NotifyWorkers</code> operation sends an email to one or more Workers that you specify with the Worker ID. You can specify up to 100 Worker IDs to send the same message with a single call to the NotifyWorkers operation. The NotifyWorkers operation will send a notification email to a Worker only if you have previously approved or rejected work from the Worker. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\NotifyWorkersRequest;
use \OpenAPI\OpenAPI\Models\Shared\NotifyWorkersRequest;
use \OpenAPI\OpenAPI\Models\Operations\NotifyWorkersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotifyWorkersRequest();
    $request->notifyWorkersRequest = new NotifyWorkersRequest();
    $request->notifyWorkersRequest->messageText = 'omnis';
    $request->notifyWorkersRequest->subject = 'facilis';
    $request->notifyWorkersRequest->workerIds = [
        'voluptatem',
        'porro',
        'consequuntur',
    ];
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->xAmzTarget = NotifyWorkersXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_NOTIFY_WORKERS;

    $response = $sdk->sdk->notifyWorkers($request);

    if ($response->notifyWorkersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rejectAssignment

<p> The <code>RejectAssignment</code> operation rejects the results of a completed assignment. </p> <p> You can include an optional feedback message with the rejection, which the Worker can see in the Status section of the web site. When you include a feedback message with the rejection, it helps the Worker understand why the assignment was rejected, and can improve the quality of the results the Worker submits in the future. </p> <p> Only the Requester who created the HIT can reject an assignment for the HIT. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RejectAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\RejectAssignmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\RejectAssignmentXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RejectAssignmentRequest();
    $request->rejectAssignmentRequest = new RejectAssignmentRequest();
    $request->rejectAssignmentRequest->assignmentId = 'earum';
    $request->rejectAssignmentRequest->requesterFeedback = 'modi';
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = RejectAssignmentXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_REJECT_ASSIGNMENT;

    $response = $sdk->sdk->rejectAssignment($request);

    if ($response->rejectAssignmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rejectQualificationRequest

<p> The <code>RejectQualificationRequest</code> operation rejects a user's request for a Qualification. </p> <p> You can provide a text message explaining why the request was rejected. The Worker who made the request can see this message.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RejectQualificationRequestRequest;
use \OpenAPI\OpenAPI\Models\Shared\RejectQualificationRequestRequest;
use \OpenAPI\OpenAPI\Models\Operations\RejectQualificationRequestXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RejectQualificationRequestRequest();
    $request->rejectQualificationRequestRequest = new RejectQualificationRequestRequest();
    $request->rejectQualificationRequestRequest->qualificationRequestId = 'delectus';
    $request->rejectQualificationRequestRequest->reason = 'quaerat';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = RejectQualificationRequestXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_REJECT_QUALIFICATION_REQUEST;

    $response = $sdk->sdk->rejectQualificationRequest($request);

    if ($response->rejectQualificationRequestResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendBonus

 The <code>SendBonus</code> operation issues a payment of money from your account to a Worker. This payment happens separately from the reward you pay to the Worker when you approve the Worker's assignment. The SendBonus operation requires the Worker's ID and the assignment ID as parameters to initiate payment of the bonus. You must include a message that explains the reason for the bonus payment, as the Worker may not be expecting the payment. Amazon Mechanical Turk collects a fee for bonus payments, similar to the HIT listing fee. This operation fails if your account does not have enough funds to pay for both the bonus and the fees. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendBonusRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendBonusRequest;
use \OpenAPI\OpenAPI\Models\Operations\SendBonusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendBonusRequest();
    $request->sendBonusRequest = new SendBonusRequest();
    $request->sendBonusRequest->assignmentId = 'hic';
    $request->sendBonusRequest->bonusAmount = 'excepturi';
    $request->sendBonusRequest->reason = 'cum';
    $request->sendBonusRequest->uniqueRequestToken = 'voluptate';
    $request->sendBonusRequest->workerId = 'dignissimos';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = SendBonusXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_SEND_BONUS;

    $response = $sdk->sdk->sendBonus($request);

    if ($response->sendBonusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendTestEventNotification

 The <code>SendTestEventNotification</code> operation causes Amazon Mechanical Turk to send a notification message as if a HIT event occurred, according to the provided notification specification. This allows you to test notifications without setting up notifications for a real HIT type and trying to trigger them using the website. When you call this operation, the service attempts to send the test notification immediately. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendTestEventNotificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendTestEventNotificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\NotificationSpecification;
use \OpenAPI\OpenAPI\Models\Shared\EventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationTransportEnum;
use \OpenAPI\OpenAPI\Models\Operations\SendTestEventNotificationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendTestEventNotificationRequest();
    $request->sendTestEventNotificationRequest = new SendTestEventNotificationRequest();
    $request->sendTestEventNotificationRequest->notification = new NotificationSpecification();
    $request->sendTestEventNotificationRequest->notification->destination = 'iure';
    $request->sendTestEventNotificationRequest->notification->eventTypes = [
        EventTypeEnum::ASSIGNMENT_SUBMITTED,
        EventTypeEnum::HIT_DISPOSED,
    ];
    $request->sendTestEventNotificationRequest->notification->transport = NotificationTransportEnum::SNS;
    $request->sendTestEventNotificationRequest->notification->version = 'voluptatibus';
    $request->sendTestEventNotificationRequest->testEventType = EventTypeEnum::ASSIGNMENT_REJECTED;
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'soluta';
    $request->xAmzTarget = SendTestEventNotificationXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_SEND_TEST_EVENT_NOTIFICATION;

    $response = $sdk->sdk->sendTestEventNotification($request);

    if ($response->sendTestEventNotificationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateExpirationForHIT

 The <code>UpdateExpirationForHIT</code> operation allows you update the expiration time of a HIT. If you update it to a time in the past, the HIT will be immediately expired. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateExpirationForHITRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateExpirationForHITRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateExpirationForHITXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateExpirationForHITRequest();
    $request->updateExpirationForHITRequest = new UpdateExpirationForHITRequest();
    $request->updateExpirationForHITRequest->expireAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-16T14:59:31.978Z');
    $request->updateExpirationForHITRequest->hitId = 'voluptate';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = UpdateExpirationForHITXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_UPDATE_EXPIRATION_FOR_HIT;

    $response = $sdk->sdk->updateExpirationForHIT($request);

    if ($response->updateExpirationForHITResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateHITReviewStatus

 The <code>UpdateHITReviewStatus</code> operation updates the status of a HIT. If the status is Reviewable, this operation can update the status to Reviewing, or it can revert a Reviewing HIT back to the Reviewable status. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHITReviewStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateHITReviewStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHITReviewStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateHITReviewStatusRequest();
    $request->updateHITReviewStatusRequest = new UpdateHITReviewStatusRequest();
    $request->updateHITReviewStatusRequest->hitId = 'ipsum';
    $request->updateHITReviewStatusRequest->revert = false;
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = UpdateHITReviewStatusXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_UPDATE_HIT_REVIEW_STATUS;

    $response = $sdk->sdk->updateHITReviewStatus($request);

    if ($response->updateHITReviewStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateHITTypeOfHIT

 The <code>UpdateHITTypeOfHIT</code> operation allows you to change the HITType properties of a HIT. This operation disassociates the HIT from its old HITType properties and associates it with the new HITType properties. The HIT takes on the properties of the new HITType in place of the old ones. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHITTypeOfHITRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateHITTypeOfHITRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHITTypeOfHITXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateHITTypeOfHITRequest();
    $request->updateHITTypeOfHITRequest = new UpdateHITTypeOfHITRequest();
    $request->updateHITTypeOfHITRequest->hitId = 'optio';
    $request->updateHITTypeOfHITRequest->hitTypeId = 'accusamus';
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'repellendus';
    $request->xAmzTarget = UpdateHITTypeOfHITXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_UPDATE_HIT_TYPE_OF_HIT;

    $response = $sdk->sdk->updateHITTypeOfHIT($request);

    if ($response->updateHITTypeOfHITResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNotificationSettings

 The <code>UpdateNotificationSettings</code> operation creates, updates, disables or re-enables notifications for a HIT type. If you call the UpdateNotificationSettings operation for a HIT type that already has a notification specification, the operation replaces the old specification with a new one. You can call the UpdateNotificationSettings operation to enable or disable notifications for the HIT type, without having to modify the notification specification itself by providing updates to the Active status without specifying a new notification specification. To change the Active status of a HIT type's notifications, the HIT type must already have a notification specification, or one must be provided in the same call to <code>UpdateNotificationSettings</code>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNotificationSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateNotificationSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\NotificationSpecification;
use \OpenAPI\OpenAPI\Models\Shared\EventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationTransportEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNotificationSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNotificationSettingsRequest();
    $request->updateNotificationSettingsRequest = new UpdateNotificationSettingsRequest();
    $request->updateNotificationSettingsRequest->active = false;
    $request->updateNotificationSettingsRequest->hitTypeId = 'totam';
    $request->updateNotificationSettingsRequest->notification = new NotificationSpecification();
    $request->updateNotificationSettingsRequest->notification->destination = 'similique';
    $request->updateNotificationSettingsRequest->notification->eventTypes = [
        EventTypeEnum::HIT_DISPOSED,
    ];
    $request->updateNotificationSettingsRequest->notification->transport = NotificationTransportEnum::EMAIL;
    $request->updateNotificationSettingsRequest->notification->version = 'tempora';
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = UpdateNotificationSettingsXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_UPDATE_NOTIFICATION_SETTINGS;

    $response = $sdk->sdk->updateNotificationSettings($request);

    if ($response->updateNotificationSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateQualificationType

<p> The <code>UpdateQualificationType</code> operation modifies the attributes of an existing Qualification type, which is represented by a QualificationType data structure. Only the owner of a Qualification type can modify its attributes. </p> <p> Most attributes of a Qualification type can be changed after the type has been created. However, the Name and Keywords fields cannot be modified. The RetryDelayInSeconds parameter can be modified or added to change the delay or to enable retries, but RetryDelayInSeconds cannot be used to disable retries. </p> <p> You can use this operation to update the test for a Qualification type. The test is updated based on the values specified for the Test, TestDurationInSeconds and AnswerKey parameters. All three parameters specify the updated test. If you are updating the test for a type, you must specify the Test and TestDurationInSeconds parameters. The AnswerKey parameter is optional; omitting it specifies that the updated test does not have an answer key. </p> <p> If you omit the Test parameter, the test for the Qualification type is unchanged. There is no way to remove a test from a Qualification type that has one. If the type already has a test, you cannot update it to be AutoGranted. If the Qualification type does not have a test and one is provided by an update, the type will henceforth have a test. </p> <p> If you want to update the test duration or answer key for an existing test without changing the questions, you must specify a Test parameter with the original questions, along with the updated values. </p> <p> If you provide an updated Test but no AnswerKey, the new test will not have an answer key. Requests for such Qualifications must be granted manually. </p> <p> You can also update the AutoGranted and AutoGrantedValue attributes of the Qualification type.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateQualificationTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateQualificationTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\QualificationTypeStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateQualificationTypeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateQualificationTypeRequest();
    $request->updateQualificationTypeRequest = new UpdateQualificationTypeRequest();
    $request->updateQualificationTypeRequest->answerKey = 'harum';
    $request->updateQualificationTypeRequest->autoGranted = false;
    $request->updateQualificationTypeRequest->autoGrantedValue = 483409;
    $request->updateQualificationTypeRequest->description = 'ipsum';
    $request->updateQualificationTypeRequest->qualificationTypeId = 'quisquam';
    $request->updateQualificationTypeRequest->qualificationTypeStatus = QualificationTypeStatusEnum::INACTIVE;
    $request->updateQualificationTypeRequest->retryDelayInSeconds = 229442;
    $request->updateQualificationTypeRequest->test = 'tempore';
    $request->updateQualificationTypeRequest->testDurationInSeconds = 880298;
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'sit';
    $request->xAmzTarget = UpdateQualificationTypeXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_UPDATE_QUALIFICATION_TYPE;

    $response = $sdk->sdk->updateQualificationType($request);

    if ($response->updateQualificationTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
