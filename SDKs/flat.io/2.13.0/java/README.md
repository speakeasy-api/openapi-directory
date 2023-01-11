# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetAuthenticatedUserRequest req = new GetAuthenticatedUserRequest() {{
                security = new GetAuthenticatedUserSecurity() {{
                    oAuth2 = new SchemeOAuth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new GetAuthenticatedUserQueryParams() {{
                    onlyId = false;
                }};
            }};

            GetAuthenticatedUserResponse res = sdk.account.getAuthenticatedUser(req);

            if (res.userDetails.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Account

* `getAuthenticatedUser` - Get current user profile

### Class

* `activateClass` - Activate the class
* `addClassUser` - Add a user to the class
* `archiveAssignment` - Archive the assignment
* `archiveClass` - Archive the class
* `copyAssignment` - Copy an assignment
* `createAssignment` - Assignment creation
* `createClass` - Create a new class
* `createSubmission` - Create or edit a submission
* `deleteClassUser` - Remove a user from the class
* `deleteSubmission` - Delete a submission
* `deleteSubmissionComment` - Delete a feedback comment to a submission
* `editSubmission` - Edit a submission
* `enrollClass` - Join a class
* `exportSubmissionsReviewsAsCsv` - CSV Grades exports
* `exportSubmissionsReviewsAsExcel` - Excel Grades exports
* `forkScore` - Fork a score
* `getClass` - Get the details of a single class
* `getScoreSubmissions` - List submissions related to the score
* `getSubmission` - Get a student submission
* `getSubmissionComments` - List the feedback comments of a submission
* `getSubmissionHistory` - Get the history of the submission
* `getSubmissions` - List the students' submissions
* `listAssignments` - Assignments listing
* `listClassStudentSubmissions` - List the submissions for a student
* `listClasses` - List the classes available for the current user
* `postSubmissionComment` - Add a feedback comment to a submission
* `unarchiveAssignment` - Unarchive the assignment.
* `unarchiveClass` - Unarchive the class
* `updateClass` - Update the class
* `updateSubmissionComment` - Update a feedback comment to a submission

### Collection

* `addScoreToCollection` - Add a score to the collection
* `createCollection` - Create a new collection
* `deleteCollection` - Delete the collection
* `deleteScoreFromCollection` - Delete a score from the collection
* `editCollection` - Update a collection's metadata
* `getCollection` - Get collection details
* `listCollectionScores` - List the scores contained in a collection
* `listCollections` - List the collections
* `untrashCollection` - Untrash a collection

### Group

* `getGroupDetails` - Get group information
* `getGroupScores` - List group's scores
* `listGroupUsers` - List group's users

### Organization

* `countOrgaUsers` - Count the organization users using the provided filters
* `createLtiCredentials` - Create a new couple of LTI 1.x credentials
* `createOrganizationInvitation` - Create a new invitation to join the organization
* `createOrganizationUser` - Create a new user account
* `listLtiCredentials` - List LTI 1.x credentials
* `listOrganizationInvitations` - List the organization invitations
* `listOrganizationUsers` - List the organization users
* `removeOrganizationInvitation` - Remove an organization invitation
* `removeOrganizationUser` - Remove an account from Flat
* `revokeLtiCredentials` - Revoke LTI 1.x credentials
* `updateOrganizationUser` - Update account information

### Score

* `addScoreCollaborator` - Add a new collaborator
* `addScoreTrack` - Add a new video or audio track to the score
* `createScore` - Create a new score
* `createScoreRevision` - Create a new revision
* `deleteScore` - Delete a score
* `deleteScoreComment` - Delete a comment
* `deleteScoreTrack` - Remove an audio or video track linked to the score
* `editScore` - Edit a score's metadata
* `forkScore` - Fork a score
* `gerUserLikes` - List liked scores
* `getGroupScores` - List group's scores
* `getScore` - Get a score's metadata
* `getScoreCollaborator` - Get a collaborator
* `getScoreCollaborators` - List the collaborators
* `getScoreComments` - List comments
* `getScoreRevision` - Get a score revision
* `getScoreRevisionData` - Get a score revision data
* `getScoreRevisions` - List the revisions
* `getScoreSubmissions` - List submissions related to the score
* `getScoreTrack` - Retrieve the details of an audio or video track linked to a score
* `getUserScores` - List user's scores
* `listScoreTracks` - List the audio or video tracks linked to a score
* `markScoreCommentResolved` - Mark the comment as resolved
* `markScoreCommentUnresolved` - Mark the comment as unresolved
* `postScoreComment` - Post a new comment
* `removeScoreCollaborator` - Delete a collaborator
* `untrashScore` - Untrash a score
* `updateScoreComment` - Update an existing comment
* `updateScoreTrack` - Update an audio or video track linked to a score

### User

* `gerUserLikes` - List liked scores
* `getUser` - Get a public user profile
* `getUserScores` - List user's scores

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
