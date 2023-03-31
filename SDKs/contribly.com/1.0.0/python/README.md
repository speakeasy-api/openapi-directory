# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/contribly.com/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteAssignmentsIDRequest(
    id="corrupti",
)
    
res = s.assignment.delete_assignments_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### assignment

* `delete_assignments_id_` - Delete this assignment and all of it's contributions
* `get_assignments` - List assignments
* `get_assignments_id_` - Get a single assigment by id
* `post_assignments` - Create a new assignment

### auth

* `get_credentials` - List the credentials associated with the authenticated user.
* `get_scopes` - Scopes
* `post_verify` - Verify token and return details of the owning user

### contribution

* `delete_contributions_id_` - Delete this contribution
* `get_contribution_refinement_types` - List valid contribution refinement types
* `get_contribution_refinements` - List contribution refinement options
* `get_contributions` - List contributions
* `get_contributions_id_` - Get a single contribution by id
* `get_contributions_id_likes` - List users who have liked this contributions
* `get_exports_id_` - Get a single export job; poll to follow export progress.
* `post_contributions` - Create a new contribution
* `post_contributions_id_flag` - Raise a flag against this contribution
* `post_contributions_id_like` - Allows a user to mark a contribution as liked
* `post_contributions_id_moderate` - Perform a moderation action on this contribution
* `post_export` - Export contributions.
* `post_export_summary` - Export contributions preflight summary.

### form

* `delete_forms_id_` - Delete this form and all of it's responses.
* `get_form_responses` - List form responses
* `get_form_responses_id_` - Get a single form response by id
* `get_forms` - List forms
* `get_forms_id_` - Get a single form by id
* `post_form_responses` - Submit a response to a form
* `post_forms` - Create a form

### info

* `get_artifact_formats` - Artifact formats
* `get_change_log` - Recent changes
* `get_event_types` - Event types

### media

* `post_media` - Submit a new media file

### notifications

* `get_notifications_contributions_id_preview`

### subscriptions

* `delete_subscriptions_id_` - Delete a subscription.
* `get_subscription_types` - Subscription types
* `get_subscriptions` - List subscriptions for the authorised user.

### tag

* `get_tags` - List tags
* `get_tags_id_` - Retrieve a single tag by id
* `get_tagsets` - List tag sets
* `get_tagsets_id_` - Retrieve a single tag set by id
* `post_tags` - Create a new tag
* `post_tagsets` - Create a new tag set

### user

* `get_users` - List users
* `get_users_id_` - Retrieve a single user by id
* `get_users_id_linked_type_` - Retrieve a users linked profile by type
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
