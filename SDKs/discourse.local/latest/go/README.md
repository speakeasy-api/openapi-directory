# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/discourse.local/latest/go
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
    res, err := s.Admin.AdminGetUser(ctx, operations.AdminGetUserRequest{
        ID: 548814,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminGetUser200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Admin](docs/admin/README.md)

* [AdminGetUser](docs/admin/README.md#admingetuser) - Get a user by id
* [AdminListUsers](docs/admin/README.md#adminlistusers) - Get a list of users
* [AnonymizeUser](docs/admin/README.md#anonymizeuser) - Anonymize a user
* [DeleteUser](docs/admin/README.md#deleteuser) - Delete a user
* [LogOutUser](docs/admin/README.md#logoutuser) - Log a user out
* [RefreshGravatar](docs/admin/README.md#refreshgravatar) - Refresh gravatar
* [SilenceUser](docs/admin/README.md#silenceuser) - Silence a user
* [SuspendUser](docs/admin/README.md#suspenduser) - Suspend a user

### [Backups](docs/backups/README.md)

* [CreateBackup](docs/backups/README.md#createbackup) - Create backup
* [DownloadBackup](docs/backups/README.md#downloadbackup) - Download backup
* [GetBackups](docs/backups/README.md#getbackups) - List backups
* [SendDownloadBackupEmail](docs/backups/README.md#senddownloadbackupemail) - Send download backup email

### [Badges](docs/badges/README.md)

* [AdminListBadges](docs/badges/README.md#adminlistbadges) - List badges
* [CreateBadge](docs/badges/README.md#createbadge) - Create badge
* [DeleteBadge](docs/badges/README.md#deletebadge) - Delete badge
* [ListUserBadges](docs/badges/README.md#listuserbadges) - List badges for a user
* [UpdateBadge](docs/badges/README.md#updatebadge) - Update badge

### [Categories](docs/categories/README.md)

* [CreateCategory](docs/categories/README.md#createcategory) - Creates a category
* [GetCategory](docs/categories/README.md#getcategory) - Show category
* [GetSite](docs/categories/README.md#getsite) - Get site info
* [ListCategories](docs/categories/README.md#listcategories) - Retrieves a list of categories
* [ListCategoryTopics](docs/categories/README.md#listcategorytopics) - List topics
* [UpdateCategory](docs/categories/README.md#updatecategory) - Updates a category

### [Groups](docs/groups/README.md)

* [AddGroupMembers](docs/groups/README.md#addgroupmembers) - Add group members
* [CreateGroup](docs/groups/README.md#creategroup) - Create a group
* [DeleteGroup](docs/groups/README.md#deletegroup) - Delete a group
* [GetGroup](docs/groups/README.md#getgroup) - Get a group
* [ListGroupMembers](docs/groups/README.md#listgroupmembers) - List group members
* [ListGroups](docs/groups/README.md#listgroups) - List groups
* [RemoveGroupMembers](docs/groups/README.md#removegroupmembers) - Remove group members
* [UpdateGroup](docs/groups/README.md#updategroup) - Update a group

### [Invites](docs/invites/README.md)

* [CreateInvite](docs/invites/README.md#createinvite) - Create an invite
* [InviteToTopic](docs/invites/README.md#invitetotopic) - Invite to topic

### [Notifications](docs/notifications/README.md)

* [GetNotifications](docs/notifications/README.md#getnotifications) - Get the notifications that belong to the current user
* [MarkNotificationsAsRead](docs/notifications/README.md#marknotificationsasread) - Mark notifications as read

### [Posts](docs/posts/README.md)

* [CreateTopicPostPM](docs/posts/README.md#createtopicpostpm) - Creates a new topic, a new post, or a private message
* [DeletePost](docs/posts/README.md#deletepost) - delete a single post
* [GetPost](docs/posts/README.md#getpost) - Retrieve a single post
* [ListPosts](docs/posts/README.md#listposts) - List latest posts across topics
* [LockPost](docs/posts/README.md#lockpost) - Lock a post from being edited
* [PerformPostAction](docs/posts/README.md#performpostaction) - Like a post and other actions
* [PostReplies](docs/posts/README.md#postreplies) - List replies to a post
* [UpdatePost](docs/posts/README.md#updatepost) - Update a single post

### [PrivateMessages](docs/privatemessages/README.md)

* [CreateTopicPostPM](docs/privatemessages/README.md#createtopicpostpm) - Creates a new topic, a new post, or a private message
* [GetUserSentPrivateMessages](docs/privatemessages/README.md#getusersentprivatemessages) - Get a list of private messages sent for a user
* [ListUserPrivateMessages](docs/privatemessages/README.md#listuserprivatemessages) - Get a list of private messages for a user

### [Search](docs/search/README.md)

* [Search](docs/search/README.md#search) - Search for a term

### [Site](docs/site/README.md)

* [GetSite](docs/site/README.md#getsite) - Get site info

### [Tags](docs/tags/README.md)

* [CreateTagGroup](docs/tags/README.md#createtaggroup) - Creates a tag group
* [GetTag](docs/tags/README.md#gettag) - Get a specific tag
* [GetTagGroup](docs/tags/README.md#gettaggroup) - Get a single tag group
* [ListTagGroups](docs/tags/README.md#listtaggroups) - Get a list of tag groups
* [ListTags](docs/tags/README.md#listtags) - Get a list of tags
* [UpdateTagGroup](docs/tags/README.md#updatetaggroup) - Update tag group

### [Topics](docs/topics/README.md)

* [BookmarkTopic](docs/topics/README.md#bookmarktopic) - Bookmark topic
* [CreateTopicPostPM](docs/topics/README.md#createtopicpostpm) - Creates a new topic, a new post, or a private message
* [CreateTopicTimer](docs/topics/README.md#createtopictimer) - Create topic timer
* [GetSpecificPostsFromTopic](docs/topics/README.md#getspecificpostsfromtopic) - Get specific posts from a topic
* [GetTopic](docs/topics/README.md#gettopic) - Get a single topic
* [GetTopicByExternalID](docs/topics/README.md#gettopicbyexternalid) - Get topic by external_id
* [InviteToTopic](docs/topics/README.md#invitetotopic) - Invite to topic
* [ListLatestTopics](docs/topics/README.md#listlatesttopics) - Get the latest topics
* [ListTopTopics](docs/topics/README.md#listtoptopics) - Get the top topics filtered by period
* [RemoveTopic](docs/topics/README.md#removetopic) - Remove a topic
* [SetNotificationLevel](docs/topics/README.md#setnotificationlevel) - Set notification level
* [UpdateTopic](docs/topics/README.md#updatetopic) - Update a topic
* [UpdateTopicStatus](docs/topics/README.md#updatetopicstatus) - Update the status of a topic
* [UpdateTopicTimestamp](docs/topics/README.md#updatetopictimestamp) - Update topic timestamp

### [Uploads](docs/uploads/README.md)

* [AbortMultipart](docs/uploads/README.md#abortmultipart) - Abort multipart upload
* [BatchPresignMultipartParts](docs/uploads/README.md#batchpresignmultipartparts) - Generates batches of presigned URLs for multipart parts
* [CompleteExternalUpload](docs/uploads/README.md#completeexternalupload) - Completes a direct external upload
* [CompleteMultipart](docs/uploads/README.md#completemultipart) - Complete multipart upload
* [CreateMultipartUpload](docs/uploads/README.md#createmultipartupload) - Creates a multipart external upload
* [CreateUpload](docs/uploads/README.md#createupload) - Creates an upload
* [GeneratePresignedPut](docs/uploads/README.md#generatepresignedput) - Initiates a direct external upload

### [Users](docs/users/README.md)

* [AdminGetUser](docs/users/README.md#admingetuser) - Get a user by id
* [AdminListUsers](docs/users/README.md#adminlistusers) - Get a list of users
* [AnonymizeUser](docs/users/README.md#anonymizeuser) - Anonymize a user
* [ChangePassword](docs/users/README.md#changepassword) - Change password
* [CreateUser](docs/users/README.md#createuser) - Creates a user
* [DeleteUser](docs/users/README.md#deleteuser) - Delete a user
* [GetUser](docs/users/README.md#getuser) - Get a single user by username
* [GetUserEmails](docs/users/README.md#getuseremails) - Get email addresses belonging to a user
* [GetUserExternalID](docs/users/README.md#getuserexternalid) - Get a user by external_id
* [GetUserIdentiyProviderExternalID](docs/users/README.md#getuseridentiyproviderexternalid) - Get a user by identity provider external ID
* [ListUserActions](docs/users/README.md#listuseractions) - Get a list of user actions
* [ListUserBadges](docs/users/README.md#listuserbadges) - List badges for a user
* [ListUsersPublic](docs/users/README.md#listuserspublic) - Get a public list of users
* [LogOutUser](docs/users/README.md#logoutuser) - Log a user out
* [RefreshGravatar](docs/users/README.md#refreshgravatar) - Refresh gravatar
* [SendPasswordResetEmail](docs/users/README.md#sendpasswordresetemail) - Send password reset email
* [SilenceUser](docs/users/README.md#silenceuser) - Silence a user
* [SuspendUser](docs/users/README.md#suspenduser) - Suspend a user
* [UpdateAvatar](docs/users/README.md#updateavatar) - Update avatar
* [UpdateEmail](docs/users/README.md#updateemail) - Update email
* [UpdateUser](docs/users/README.md#updateuser) - Update a user
* [UpdateUsername](docs/users/README.md#updateusername) - Update username
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
