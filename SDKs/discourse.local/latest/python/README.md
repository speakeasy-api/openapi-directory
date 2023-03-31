# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/discourse.local/latest/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AdminGetUserRequest(
    id=548814,
)
    
res = s.admin.admin_get_user(req)

if res.admin_get_user_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### admin

* `admin_get_user` - Get a user by id
* `admin_list_users` - Get a list of users
* `anonymize_user` - Anonymize a user
* `delete_user` - Delete a user
* `log_out_user` - Log a user out
* `refresh_gravatar` - Refresh gravatar
* `silence_user` - Silence a user
* `suspend_user` - Suspend a user

### backups

* `create_backup` - Create backup
* `download_backup` - Download backup
* `get_backups` - List backups
* `send_download_backup_email` - Send download backup email

### badges

* `admin_list_badges` - List badges
* `create_badge` - Create badge
* `delete_badge` - Delete badge
* `list_user_badges` - List badges for a user
* `update_badge` - Update badge

### categories

* `create_category` - Creates a category
* `get_category` - Show category
* `get_site` - Get site info
* `list_categories` - Retrieves a list of categories
* `list_category_topics` - List topics
* `update_category` - Updates a category

### groups

* `add_group_members` - Add group members
* `create_group` - Create a group
* `delete_group` - Delete a group
* `get_group` - Get a group
* `list_group_members` - List group members
* `list_groups` - List groups
* `remove_group_members` - Remove group members
* `update_group` - Update a group

### invites

* `create_invite` - Create an invite
* `invite_to_topic` - Invite to topic

### notifications

* `get_notifications` - Get the notifications that belong to the current user
* `mark_notifications_as_read` - Mark notifications as read

### posts

* `create_topic_post_pm` - Creates a new topic, a new post, or a private message
* `delete_post` - delete a single post
* `get_post` - Retrieve a single post
* `list_posts` - List latest posts across topics
* `lock_post` - Lock a post from being edited
* `perform_post_action` - Like a post and other actions
* `post_replies` - List replies to a post
* `update_post` - Update a single post

### private_messages

* `create_topic_post_pm` - Creates a new topic, a new post, or a private message
* `get_user_sent_private_messages` - Get a list of private messages sent for a user
* `list_user_private_messages` - Get a list of private messages for a user

### search

* `search` - Search for a term

### site

* `get_site` - Get site info

### tags

* `create_tag_group` - Creates a tag group
* `get_tag` - Get a specific tag
* `get_tag_group` - Get a single tag group
* `list_tag_groups` - Get a list of tag groups
* `list_tags` - Get a list of tags
* `update_tag_group` - Update tag group

### topics

* `bookmark_topic` - Bookmark topic
* `create_topic_post_pm` - Creates a new topic, a new post, or a private message
* `create_topic_timer` - Create topic timer
* `get_specific_posts_from_topic` - Get specific posts from a topic
* `get_topic` - Get a single topic
* `get_topic_by_external_id` - Get topic by external_id
* `invite_to_topic` - Invite to topic
* `list_latest_topics` - Get the latest topics
* `list_top_topics` - Get the top topics filtered by period
* `remove_topic` - Remove a topic
* `set_notification_level` - Set notification level
* `update_topic` - Update a topic
* `update_topic_status` - Update the status of a topic
* `update_topic_timestamp` - Update topic timestamp

### uploads

* `abort_multipart` - Abort multipart upload
* `batch_presign_multipart_parts` - Generates batches of presigned URLs for multipart parts
* `complete_external_upload` - Completes a direct external upload
* `complete_multipart` - Complete multipart upload
* `create_multipart_upload` - Creates a multipart external upload
* `create_upload` - Creates an upload
* `generate_presigned_put` - Initiates a direct external upload

### users

* `admin_get_user` - Get a user by id
* `admin_list_users` - Get a list of users
* `anonymize_user` - Anonymize a user
* `change_password` - Change password
* `create_user` - Creates a user
* `delete_user` - Delete a user
* `get_user` - Get a single user by username
* `get_user_emails` - Get email addresses belonging to a user
* `get_user_external_id` - Get a user by external_id
* `get_user_identiy_provider_external_id` - Get a user by identity provider external ID
* `list_user_actions` - Get a list of user actions
* `list_user_badges` - List badges for a user
* `list_users_public` - Get a public list of users
* `log_out_user` - Log a user out
* `refresh_gravatar` - Refresh gravatar
* `send_password_reset_email` - Send password reset email
* `silence_user` - Silence a user
* `suspend_user` - Suspend a user
* `update_avatar` - Update avatar
* `update_email` - Update email
* `update_user` - Update a user
* `update_username` - Update username
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
