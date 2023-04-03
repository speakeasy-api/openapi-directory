# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### account

* `getAuthenticatedUser` - Get current user profile

### class

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

### collection

* `addScoreToCollection` - Add a score to the collection
* `createCollection` - Create a new collection
* `deleteCollection` - Delete the collection
* `deleteScoreFromCollection` - Delete a score from the collection
* `editCollection` - Update a collection's metadata
* `getCollection` - Get collection details
* `listCollectionScores` - List the scores contained in a collection
* `listCollections` - List the collections
* `untrashCollection` - Untrash a collection

### group

* `getGroupDetails` - Get group information
* `getGroupScores` - List group's scores
* `listGroupUsers` - List group's users

### organization

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

### score

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

### user

* `gerUserLikes` - List liked scores
* `getUser` - Get a public user profile
* `getUserScores` - List user's scores
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
