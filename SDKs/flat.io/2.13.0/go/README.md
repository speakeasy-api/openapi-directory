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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetAuthenticatedUserRequest{
        OnlyID: false,
    }

    ctx := context.Background()
    res, err := s.Account.GetAuthenticatedUser(ctx, req, operations.GetAuthenticatedUserSecurity{
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


### Account

* `GetAuthenticatedUser` - Get current user profile

### Class

* `ActivateClass` - Activate the class
* `AddClassUser` - Add a user to the class
* `ArchiveAssignment` - Archive the assignment
* `ArchiveClass` - Archive the class
* `CopyAssignment` - Copy an assignment
* `CreateAssignment` - Assignment creation
* `CreateClass` - Create a new class
* `CreateSubmission` - Create or edit a submission
* `DeleteClassUser` - Remove a user from the class
* `DeleteSubmission` - Delete a submission
* `DeleteSubmissionComment` - Delete a feedback comment to a submission
* `EditSubmission` - Edit a submission
* `EnrollClass` - Join a class
* `ExportSubmissionsReviewsAsCsv` - CSV Grades exports
* `ExportSubmissionsReviewsAsExcel` - Excel Grades exports
* `ForkScore` - Fork a score
* `GetClass` - Get the details of a single class
* `GetScoreSubmissions` - List submissions related to the score
* `GetSubmission` - Get a student submission
* `GetSubmissionComments` - List the feedback comments of a submission
* `GetSubmissionHistory` - Get the history of the submission
* `GetSubmissions` - List the students' submissions
* `ListAssignments` - Assignments listing
* `ListClassStudentSubmissions` - List the submissions for a student
* `ListClasses` - List the classes available for the current user
* `PostSubmissionComment` - Add a feedback comment to a submission
* `UnarchiveAssignment` - Unarchive the assignment.
* `UnarchiveClass` - Unarchive the class
* `UpdateClass` - Update the class
* `UpdateSubmissionComment` - Update a feedback comment to a submission

### Collection

* `AddScoreToCollection` - Add a score to the collection
* `CreateCollection` - Create a new collection
* `DeleteCollection` - Delete the collection
* `DeleteScoreFromCollection` - Delete a score from the collection
* `EditCollection` - Update a collection's metadata
* `GetCollection` - Get collection details
* `ListCollectionScores` - List the scores contained in a collection
* `ListCollections` - List the collections
* `UntrashCollection` - Untrash a collection

### Group

* `GetGroupDetails` - Get group information
* `GetGroupScores` - List group's scores
* `ListGroupUsers` - List group's users

### Organization

* `CountOrgaUsers` - Count the organization users using the provided filters
* `CreateLtiCredentials` - Create a new couple of LTI 1.x credentials
* `CreateOrganizationInvitation` - Create a new invitation to join the organization
* `CreateOrganizationUser` - Create a new user account
* `ListLtiCredentials` - List LTI 1.x credentials
* `ListOrganizationInvitations` - List the organization invitations
* `ListOrganizationUsers` - List the organization users
* `RemoveOrganizationInvitation` - Remove an organization invitation
* `RemoveOrganizationUser` - Remove an account from Flat
* `RevokeLtiCredentials` - Revoke LTI 1.x credentials
* `UpdateOrganizationUser` - Update account information

### Score

* `AddScoreCollaborator` - Add a new collaborator
* `AddScoreTrack` - Add a new video or audio track to the score
* `CreateScore` - Create a new score
* `CreateScoreRevision` - Create a new revision
* `DeleteScore` - Delete a score
* `DeleteScoreComment` - Delete a comment
* `DeleteScoreTrack` - Remove an audio or video track linked to the score
* `EditScore` - Edit a score's metadata
* `ForkScore` - Fork a score
* `GerUserLikes` - List liked scores
* `GetGroupScores` - List group's scores
* `GetScore` - Get a score's metadata
* `GetScoreCollaborator` - Get a collaborator
* `GetScoreCollaborators` - List the collaborators
* `GetScoreComments` - List comments
* `GetScoreRevision` - Get a score revision
* `GetScoreRevisionData` - Get a score revision data
* `GetScoreRevisions` - List the revisions
* `GetScoreSubmissions` - List submissions related to the score
* `GetScoreTrack` - Retrieve the details of an audio or video track linked to a score
* `GetUserScores` - List user's scores
* `ListScoreTracks` - List the audio or video tracks linked to a score
* `MarkScoreCommentResolved` - Mark the comment as resolved
* `MarkScoreCommentUnresolved` - Mark the comment as unresolved
* `PostScoreComment` - Post a new comment
* `RemoveScoreCollaborator` - Delete a collaborator
* `UntrashScore` - Untrash a score
* `UpdateScoreComment` - Update an existing comment
* `UpdateScoreTrack` - Update an audio or video track linked to a score

### User

* `GerUserLikes` - List liked scores
* `GetUser` - Get a public user profile
* `GetUserScores` - List user's scores
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
