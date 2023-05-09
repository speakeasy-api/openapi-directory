# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/flat.io/2.13.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetAuthenticatedUser(ctx, operations.GetAuthenticatedUserRequest{
        OnlyID: sdk.Bool(false),
    }, operations.GetAuthenticatedUserSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserDetails != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Account](docs/account/README.md)

* [GetAuthenticatedUser](docs/account/README.md#getauthenticateduser) - Get current user profile

### [Class](docs/class/README.md)

* [ActivateClass](docs/class/README.md#activateclass) - Activate the class
* [AddClassUser](docs/class/README.md#addclassuser) - Add a user to the class
* [ArchiveAssignment](docs/class/README.md#archiveassignment) - Archive the assignment
* [ArchiveClass](docs/class/README.md#archiveclass) - Archive the class
* [CopyAssignment](docs/class/README.md#copyassignment) - Copy an assignment
* [CreateAssignment](docs/class/README.md#createassignment) - Assignment creation
* [CreateClass](docs/class/README.md#createclass) - Create a new class
* [CreateSubmission](docs/class/README.md#createsubmission) - Create or edit a submission
* [DeleteClassUser](docs/class/README.md#deleteclassuser) - Remove a user from the class
* [DeleteSubmission](docs/class/README.md#deletesubmission) - Delete a submission
* [DeleteSubmissionComment](docs/class/README.md#deletesubmissioncomment) - Delete a feedback comment to a submission
* [EditSubmission](docs/class/README.md#editsubmission) - Edit a submission
* [EnrollClass](docs/class/README.md#enrollclass) - Join a class
* [ExportSubmissionsReviewsAsCsv](docs/class/README.md#exportsubmissionsreviewsascsv) - CSV Grades exports
* [ExportSubmissionsReviewsAsExcel](docs/class/README.md#exportsubmissionsreviewsasexcel) - Excel Grades exports
* [ForkScore](docs/class/README.md#forkscore) - Fork a score
* [GetClass](docs/class/README.md#getclass) - Get the details of a single class
* [GetScoreSubmissions](docs/class/README.md#getscoresubmissions) - List submissions related to the score
* [GetSubmission](docs/class/README.md#getsubmission) - Get a student submission
* [GetSubmissionComments](docs/class/README.md#getsubmissioncomments) - List the feedback comments of a submission
* [GetSubmissionHistory](docs/class/README.md#getsubmissionhistory) - Get the history of the submission
* [GetSubmissions](docs/class/README.md#getsubmissions) - List the students' submissions
* [ListAssignments](docs/class/README.md#listassignments) - Assignments listing
* [ListClassStudentSubmissions](docs/class/README.md#listclassstudentsubmissions) - List the submissions for a student
* [ListClasses](docs/class/README.md#listclasses) - List the classes available for the current user
* [PostSubmissionComment](docs/class/README.md#postsubmissioncomment) - Add a feedback comment to a submission
* [UnarchiveAssignment](docs/class/README.md#unarchiveassignment) - Unarchive the assignment.
* [UnarchiveClass](docs/class/README.md#unarchiveclass) - Unarchive the class
* [UpdateClass](docs/class/README.md#updateclass) - Update the class
* [UpdateSubmissionComment](docs/class/README.md#updatesubmissioncomment) - Update a feedback comment to a submission

### [Collection](docs/collection/README.md)

* [AddScoreToCollection](docs/collection/README.md#addscoretocollection) - Add a score to the collection
* [CreateCollection](docs/collection/README.md#createcollection) - Create a new collection
* [DeleteCollection](docs/collection/README.md#deletecollection) - Delete the collection
* [DeleteScoreFromCollection](docs/collection/README.md#deletescorefromcollection) - Delete a score from the collection
* [EditCollection](docs/collection/README.md#editcollection) - Update a collection's metadata
* [GetCollection](docs/collection/README.md#getcollection) - Get collection details
* [ListCollectionScores](docs/collection/README.md#listcollectionscores) - List the scores contained in a collection
* [ListCollections](docs/collection/README.md#listcollections) - List the collections
* [UntrashCollection](docs/collection/README.md#untrashcollection) - Untrash a collection

### [Group](docs/group/README.md)

* [GetGroupDetails](docs/group/README.md#getgroupdetails) - Get group information
* [GetGroupScores](docs/group/README.md#getgroupscores) - List group's scores
* [ListGroupUsers](docs/group/README.md#listgroupusers) - List group's users

### [Organization](docs/organization/README.md)

* [CountOrgaUsers](docs/organization/README.md#countorgausers) - Count the organization users using the provided filters
* [CreateLtiCredentials](docs/organization/README.md#createlticredentials) - Create a new couple of LTI 1.x credentials
* [CreateOrganizationInvitation](docs/organization/README.md#createorganizationinvitation) - Create a new invitation to join the organization
* [CreateOrganizationUser](docs/organization/README.md#createorganizationuser) - Create a new user account
* [ListLtiCredentials](docs/organization/README.md#listlticredentials) - List LTI 1.x credentials
* [ListOrganizationInvitations](docs/organization/README.md#listorganizationinvitations) - List the organization invitations
* [ListOrganizationUsers](docs/organization/README.md#listorganizationusers) - List the organization users
* [RemoveOrganizationInvitation](docs/organization/README.md#removeorganizationinvitation) - Remove an organization invitation
* [RemoveOrganizationUser](docs/organization/README.md#removeorganizationuser) - Remove an account from Flat
* [RevokeLtiCredentials](docs/organization/README.md#revokelticredentials) - Revoke LTI 1.x credentials
* [UpdateOrganizationUser](docs/organization/README.md#updateorganizationuser) - Update account information

### [Score](docs/score/README.md)

* [AddScoreCollaborator](docs/score/README.md#addscorecollaborator) - Add a new collaborator
* [AddScoreTrack](docs/score/README.md#addscoretrack) - Add a new video or audio track to the score
* [CreateScore](docs/score/README.md#createscore) - Create a new score
* [CreateScoreRevision](docs/score/README.md#createscorerevision) - Create a new revision
* [DeleteScore](docs/score/README.md#deletescore) - Delete a score
* [DeleteScoreComment](docs/score/README.md#deletescorecomment) - Delete a comment
* [DeleteScoreTrack](docs/score/README.md#deletescoretrack) - Remove an audio or video track linked to the score
* [EditScore](docs/score/README.md#editscore) - Edit a score's metadata
* [ForkScore](docs/score/README.md#forkscore) - Fork a score
* [GerUserLikes](docs/score/README.md#geruserlikes) - List liked scores
* [GetGroupScores](docs/score/README.md#getgroupscores) - List group's scores
* [GetScore](docs/score/README.md#getscore) - Get a score's metadata
* [GetScoreCollaborator](docs/score/README.md#getscorecollaborator) - Get a collaborator
* [GetScoreCollaborators](docs/score/README.md#getscorecollaborators) - List the collaborators
* [GetScoreComments](docs/score/README.md#getscorecomments) - List comments
* [GetScoreRevision](docs/score/README.md#getscorerevision) - Get a score revision
* [GetScoreRevisionData](docs/score/README.md#getscorerevisiondata) - Get a score revision data
* [GetScoreRevisions](docs/score/README.md#getscorerevisions) - List the revisions
* [GetScoreSubmissions](docs/score/README.md#getscoresubmissions) - List submissions related to the score
* [GetScoreTrack](docs/score/README.md#getscoretrack) - Retrieve the details of an audio or video track linked to a score
* [GetUserScores](docs/score/README.md#getuserscores) - List user's scores
* [ListScoreTracks](docs/score/README.md#listscoretracks) - List the audio or video tracks linked to a score
* [MarkScoreCommentResolved](docs/score/README.md#markscorecommentresolved) - Mark the comment as resolved
* [MarkScoreCommentUnresolved](docs/score/README.md#markscorecommentunresolved) - Mark the comment as unresolved
* [PostScoreComment](docs/score/README.md#postscorecomment) - Post a new comment
* [RemoveScoreCollaborator](docs/score/README.md#removescorecollaborator) - Delete a collaborator
* [UntrashScore](docs/score/README.md#untrashscore) - Untrash a score
* [UpdateScoreComment](docs/score/README.md#updatescorecomment) - Update an existing comment
* [UpdateScoreTrack](docs/score/README.md#updatescoretrack) - Update an audio or video track linked to a score

### [User](docs/user/README.md)

* [GerUserLikes](docs/user/README.md#geruserlikes) - List liked scores
* [GetUser](docs/user/README.md#getuser) - Get a public user profile
* [GetUserScores](docs/user/README.md#getuserscores) - List user's scores
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
