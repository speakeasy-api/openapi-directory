# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetAuthenticatedUserRequest(
    security=operations.GetAuthenticatedUserSecurity(
        o_auth2=shared.SchemeOAuth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.GetAuthenticatedUserQueryParams(
        only_id=False,
    ),
)
    
res = s.account.get_authenticated_user(req)

if res.user_details is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Account

* `get_authenticated_user` - Get current user profile

### Class

* `activate_class` - Activate the class
* `add_class_user` - Add a user to the class
* `archive_assignment` - Archive the assignment
* `archive_class` - Archive the class
* `copy_assignment` - Copy an assignment
* `create_assignment` - Assignment creation
* `create_class` - Create a new class
* `create_submission` - Create or edit a submission
* `delete_class_user` - Remove a user from the class
* `delete_submission` - Delete a submission
* `delete_submission_comment` - Delete a feedback comment to a submission
* `edit_submission` - Edit a submission
* `enroll_class` - Join a class
* `export_submissions_reviews_as_csv` - CSV Grades exports
* `export_submissions_reviews_as_excel` - Excel Grades exports
* `fork_score` - Fork a score
* `get_class` - Get the details of a single class
* `get_score_submissions` - List submissions related to the score
* `get_submission` - Get a student submission
* `get_submission_comments` - List the feedback comments of a submission
* `get_submission_history` - Get the history of the submission
* `get_submissions` - List the students' submissions
* `list_assignments` - Assignments listing
* `list_class_student_submissions` - List the submissions for a student
* `list_classes` - List the classes available for the current user
* `post_submission_comment` - Add a feedback comment to a submission
* `unarchive_assignment` - Unarchive the assignment.
* `unarchive_class` - Unarchive the class
* `update_class` - Update the class
* `update_submission_comment` - Update a feedback comment to a submission

### Collection

* `add_score_to_collection` - Add a score to the collection
* `create_collection` - Create a new collection
* `delete_collection` - Delete the collection
* `delete_score_from_collection` - Delete a score from the collection
* `edit_collection` - Update a collection's metadata
* `get_collection` - Get collection details
* `list_collection_scores` - List the scores contained in a collection
* `list_collections` - List the collections
* `untrash_collection` - Untrash a collection

### Group

* `get_group_details` - Get group information
* `get_group_scores` - List group's scores
* `list_group_users` - List group's users

### Organization

* `count_orga_users` - Count the organization users using the provided filters
* `create_lti_credentials` - Create a new couple of LTI 1.x credentials
* `create_organization_invitation` - Create a new invitation to join the organization
* `create_organization_user` - Create a new user account
* `list_lti_credentials` - List LTI 1.x credentials
* `list_organization_invitations` - List the organization invitations
* `list_organization_users` - List the organization users
* `remove_organization_invitation` - Remove an organization invitation
* `remove_organization_user` - Remove an account from Flat
* `revoke_lti_credentials` - Revoke LTI 1.x credentials
* `update_organization_user` - Update account information

### Score

* `add_score_collaborator` - Add a new collaborator
* `add_score_track` - Add a new video or audio track to the score
* `create_score` - Create a new score
* `create_score_revision` - Create a new revision
* `delete_score` - Delete a score
* `delete_score_comment` - Delete a comment
* `delete_score_track` - Remove an audio or video track linked to the score
* `edit_score` - Edit a score's metadata
* `fork_score` - Fork a score
* `ger_user_likes` - List liked scores
* `get_group_scores` - List group's scores
* `get_score` - Get a score's metadata
* `get_score_collaborator` - Get a collaborator
* `get_score_collaborators` - List the collaborators
* `get_score_comments` - List comments
* `get_score_revision` - Get a score revision
* `get_score_revision_data` - Get a score revision data
* `get_score_revisions` - List the revisions
* `get_score_submissions` - List submissions related to the score
* `get_score_track` - Retrieve the details of an audio or video track linked to a score
* `get_user_scores` - List user's scores
* `list_score_tracks` - List the audio or video tracks linked to a score
* `mark_score_comment_resolved` - Mark the comment as resolved
* `mark_score_comment_unresolved` - Mark the comment as unresolved
* `post_score_comment` - Post a new comment
* `remove_score_collaborator` - Delete a collaborator
* `untrash_score` - Untrash a score
* `update_score_comment` - Update an existing comment
* `update_score_track` - Update an audio or video track linked to a score

### User

* `ger_user_likes` - List liked scores
* `get_user` - Get a public user profile
* `get_user_scores` - List user's scores

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
