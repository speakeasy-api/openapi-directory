# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.GetAuthenticatedUserResponse;
import org.openapis.openapi.models.operations.GetAuthenticatedUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAuthenticatedUserRequest req = new GetAuthenticatedUserRequest() {{
                onlyId = false;
            }};            

            GetAuthenticatedUserResponse res = sdk.account.getAuthenticatedUser(req, new GetAuthenticatedUserSecurity("corrupti") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [account](docs/account/README.md)

* [getAuthenticatedUser](docs/account/README.md#getauthenticateduser) - Get current user profile

### [class_](docs/class/README.md)

* [activateClass](docs/class/README.md#activateclass) - Activate the class
* [addClassUser](docs/class/README.md#addclassuser) - Add a user to the class
* [archiveAssignment](docs/class/README.md#archiveassignment) - Archive the assignment
* [archiveClass](docs/class/README.md#archiveclass) - Archive the class
* [copyAssignment](docs/class/README.md#copyassignment) - Copy an assignment
* [createAssignment](docs/class/README.md#createassignment) - Assignment creation
* [createClass](docs/class/README.md#createclass) - Create a new class
* [createSubmission](docs/class/README.md#createsubmission) - Create or edit a submission
* [deleteClassUser](docs/class/README.md#deleteclassuser) - Remove a user from the class
* [deleteSubmission](docs/class/README.md#deletesubmission) - Delete a submission
* [deleteSubmissionComment](docs/class/README.md#deletesubmissioncomment) - Delete a feedback comment to a submission
* [editSubmission](docs/class/README.md#editsubmission) - Edit a submission
* [enrollClass](docs/class/README.md#enrollclass) - Join a class
* [exportSubmissionsReviewsAsCsv](docs/class/README.md#exportsubmissionsreviewsascsv) - CSV Grades exports
* [exportSubmissionsReviewsAsExcel](docs/class/README.md#exportsubmissionsreviewsasexcel) - Excel Grades exports
* [forkScore](docs/class/README.md#forkscore) - Fork a score
* [getClass](docs/class/README.md#getclass) - Get the details of a single class
* [getScoreSubmissions](docs/class/README.md#getscoresubmissions) - List submissions related to the score
* [getSubmission](docs/class/README.md#getsubmission) - Get a student submission
* [getSubmissionComments](docs/class/README.md#getsubmissioncomments) - List the feedback comments of a submission
* [getSubmissionHistory](docs/class/README.md#getsubmissionhistory) - Get the history of the submission
* [getSubmissions](docs/class/README.md#getsubmissions) - List the students' submissions
* [listAssignments](docs/class/README.md#listassignments) - Assignments listing
* [listClassStudentSubmissions](docs/class/README.md#listclassstudentsubmissions) - List the submissions for a student
* [listClasses](docs/class/README.md#listclasses) - List the classes available for the current user
* [postSubmissionComment](docs/class/README.md#postsubmissioncomment) - Add a feedback comment to a submission
* [unarchiveAssignment](docs/class/README.md#unarchiveassignment) - Unarchive the assignment.
* [unarchiveClass](docs/class/README.md#unarchiveclass) - Unarchive the class
* [updateClass](docs/class/README.md#updateclass) - Update the class
* [updateSubmissionComment](docs/class/README.md#updatesubmissioncomment) - Update a feedback comment to a submission

### [collection](docs/collection/README.md)

* [addScoreToCollection](docs/collection/README.md#addscoretocollection) - Add a score to the collection
* [createCollection](docs/collection/README.md#createcollection) - Create a new collection
* [deleteCollection](docs/collection/README.md#deletecollection) - Delete the collection
* [deleteScoreFromCollection](docs/collection/README.md#deletescorefromcollection) - Delete a score from the collection
* [editCollection](docs/collection/README.md#editcollection) - Update a collection's metadata
* [getCollection](docs/collection/README.md#getcollection) - Get collection details
* [listCollectionScores](docs/collection/README.md#listcollectionscores) - List the scores contained in a collection
* [listCollections](docs/collection/README.md#listcollections) - List the collections
* [untrashCollection](docs/collection/README.md#untrashcollection) - Untrash a collection

### [group](docs/group/README.md)

* [getGroupDetails](docs/group/README.md#getgroupdetails) - Get group information
* [getGroupScores](docs/group/README.md#getgroupscores) - List group's scores
* [listGroupUsers](docs/group/README.md#listgroupusers) - List group's users

### [organization](docs/organization/README.md)

* [countOrgaUsers](docs/organization/README.md#countorgausers) - Count the organization users using the provided filters
* [createLtiCredentials](docs/organization/README.md#createlticredentials) - Create a new couple of LTI 1.x credentials
* [createOrganizationInvitation](docs/organization/README.md#createorganizationinvitation) - Create a new invitation to join the organization
* [createOrganizationUser](docs/organization/README.md#createorganizationuser) - Create a new user account
* [listLtiCredentials](docs/organization/README.md#listlticredentials) - List LTI 1.x credentials
* [listOrganizationInvitations](docs/organization/README.md#listorganizationinvitations) - List the organization invitations
* [listOrganizationUsers](docs/organization/README.md#listorganizationusers) - List the organization users
* [removeOrganizationInvitation](docs/organization/README.md#removeorganizationinvitation) - Remove an organization invitation
* [removeOrganizationUser](docs/organization/README.md#removeorganizationuser) - Remove an account from Flat
* [revokeLtiCredentials](docs/organization/README.md#revokelticredentials) - Revoke LTI 1.x credentials
* [updateOrganizationUser](docs/organization/README.md#updateorganizationuser) - Update account information

### [score](docs/score/README.md)

* [addScoreCollaborator](docs/score/README.md#addscorecollaborator) - Add a new collaborator
* [addScoreTrack](docs/score/README.md#addscoretrack) - Add a new video or audio track to the score
* [createScore](docs/score/README.md#createscore) - Create a new score
* [createScoreRevision](docs/score/README.md#createscorerevision) - Create a new revision
* [deleteScore](docs/score/README.md#deletescore) - Delete a score
* [deleteScoreComment](docs/score/README.md#deletescorecomment) - Delete a comment
* [deleteScoreTrack](docs/score/README.md#deletescoretrack) - Remove an audio or video track linked to the score
* [editScore](docs/score/README.md#editscore) - Edit a score's metadata
* [forkScore](docs/score/README.md#forkscore) - Fork a score
* [gerUserLikes](docs/score/README.md#geruserlikes) - List liked scores
* [getGroupScores](docs/score/README.md#getgroupscores) - List group's scores
* [getScore](docs/score/README.md#getscore) - Get a score's metadata
* [getScoreCollaborator](docs/score/README.md#getscorecollaborator) - Get a collaborator
* [getScoreCollaborators](docs/score/README.md#getscorecollaborators) - List the collaborators
* [getScoreComments](docs/score/README.md#getscorecomments) - List comments
* [getScoreRevision](docs/score/README.md#getscorerevision) - Get a score revision
* [getScoreRevisionData](docs/score/README.md#getscorerevisiondata) - Get a score revision data
* [getScoreRevisions](docs/score/README.md#getscorerevisions) - List the revisions
* [getScoreSubmissions](docs/score/README.md#getscoresubmissions) - List submissions related to the score
* [getScoreTrack](docs/score/README.md#getscoretrack) - Retrieve the details of an audio or video track linked to a score
* [getUserScores](docs/score/README.md#getuserscores) - List user's scores
* [listScoreTracks](docs/score/README.md#listscoretracks) - List the audio or video tracks linked to a score
* [markScoreCommentResolved](docs/score/README.md#markscorecommentresolved) - Mark the comment as resolved
* [markScoreCommentUnresolved](docs/score/README.md#markscorecommentunresolved) - Mark the comment as unresolved
* [postScoreComment](docs/score/README.md#postscorecomment) - Post a new comment
* [removeScoreCollaborator](docs/score/README.md#removescorecollaborator) - Delete a collaborator
* [untrashScore](docs/score/README.md#untrashscore) - Untrash a score
* [updateScoreComment](docs/score/README.md#updatescorecomment) - Update an existing comment
* [updateScoreTrack](docs/score/README.md#updatescoretrack) - Update an audio or video track linked to a score

### [user](docs/user/README.md)

* [gerUserLikes](docs/user/README.md#geruserlikes) - List liked scores
* [getUser](docs/user/README.md#getuser) - Get a public user profile
* [getUserScores](docs/user/README.md#getuserscores) - List user's scores
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
