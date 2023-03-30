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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AdminGetUserRequest{
        PathParams: operations.AdminGetUserPathParams{
            ID: 548814,
        },
    }

    ctx := context.Background()
    res, err := s.Admin.AdminGetUser(ctx, req)
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
## SDK Available Operations


### Admin

* `AdminGetUser` - Get a user by id
* `AdminListUsers` - Get a list of users
* `AnonymizeUser` - Anonymize a user
* `DeleteUser` - Delete a user
* `LogOutUser` - Log a user out
* `RefreshGravatar` - Refresh gravatar
* `SilenceUser` - Silence a user
* `SuspendUser` - Suspend a user

### Backups

* `CreateBackup` - Create backup
* `DownloadBackup` - Download backup
* `GetBackups` - List backups
* `SendDownloadBackupEmail` - Send download backup email

### Badges

* `AdminListBadges` - List badges
* `CreateBadge` - Create badge
* `DeleteBadge` - Delete badge
* `ListUserBadges` - List badges for a user
* `UpdateBadge` - Update badge

### Categories

* `CreateCategory` - Creates a category
* `GetCategory` - Show category
* `GetSite` - Get site info
* `ListCategories` - Retrieves a list of categories
* `ListCategoryTopics` - List topics
* `UpdateCategory` - Updates a category

### Groups

* `AddGroupMembers` - Add group members
* `CreateGroup` - Create a group
* `DeleteGroup` - Delete a group
* `GetGroup` - Get a group
* `ListGroupMembers` - List group members
* `ListGroups` - List groups
* `RemoveGroupMembers` - Remove group members
* `UpdateGroup` - Update a group

### Invites

* `CreateInvite` - Create an invite
* `InviteToTopic` - Invite to topic

### Notifications

* `GetNotifications` - Get the notifications that belong to the current user
* `MarkNotificationsAsRead` - Mark notifications as read

### Posts

* `CreateTopicPostPM` - Creates a new topic, a new post, or a private message
* `DeletePost` - delete a single post
* `GetPost` - Retrieve a single post
* `ListPosts` - List latest posts across topics
* `LockPost` - Lock a post from being edited
* `PerformPostAction` - Like a post and other actions
* `PostReplies` - List replies to a post
* `UpdatePost` - Update a single post

### PrivateMessages

* `CreateTopicPostPM` - Creates a new topic, a new post, or a private message
* `GetUserSentPrivateMessages` - Get a list of private messages sent for a user
* `ListUserPrivateMessages` - Get a list of private messages for a user

### Search

* `Search` - Search for a term

### Site

* `GetSite` - Get site info

### Tags

* `CreateTagGroup` - Creates a tag group
* `GetTag` - Get a specific tag
* `GetTagGroup` - Get a single tag group
* `ListTagGroups` - Get a list of tag groups
* `ListTags` - Get a list of tags
* `UpdateTagGroup` - Update tag group

### Topics

* `BookmarkTopic` - Bookmark topic
* `CreateTopicPostPM` - Creates a new topic, a new post, or a private message
* `CreateTopicTimer` - Create topic timer
* `GetSpecificPostsFromTopic` - Get specific posts from a topic
* `GetTopic` - Get a single topic
* `GetTopicByExternalID` - Get topic by external_id
* `InviteToTopic` - Invite to topic
* `ListLatestTopics` - Get the latest topics
* `ListTopTopics` - Get the top topics filtered by period
* `RemoveTopic` - Remove a topic
* `SetNotificationLevel` - Set notification level
* `UpdateTopic` - Update a topic
* `UpdateTopicStatus` - Update the status of a topic
* `UpdateTopicTimestamp` - Update topic timestamp

### Uploads

* `AbortMultipart` - Abort multipart upload
* `BatchPresignMultipartParts` - Generates batches of presigned URLs for multipart parts
* `CompleteExternalUpload` - Completes a direct external upload
* `CompleteMultipart` - Complete multipart upload
* `CreateMultipartUpload` - Creates a multipart external upload
* `CreateUpload` - Creates an upload
* `GeneratePresignedPut` - Initiates a direct external upload

### Users

* `AdminGetUser` - Get a user by id
* `AdminListUsers` - Get a list of users
* `AnonymizeUser` - Anonymize a user
* `ChangePassword` - Change password
* `CreateUser` - Creates a user
* `DeleteUser` - Delete a user
* `GetUser` - Get a single user by username
* `GetUserEmails` - Get email addresses belonging to a user
* `GetUserExternalID` - Get a user by external_id
* `GetUserIdentiyProviderExternalID` - Get a user by identity provider external ID
* `ListUserActions` - Get a list of user actions
* `ListUserBadges` - List badges for a user
* `ListUsersPublic` - Get a public list of users
* `LogOutUser` - Log a user out
* `RefreshGravatar` - Refresh gravatar
* `SendPasswordResetEmail` - Send password reset email
* `SilenceUser` - Silence a user
* `SuspendUser` - Suspend a user
* `UpdateAvatar` - Update avatar
* `UpdateEmail` - Update email
* `UpdateUser` - Update a user
* `UpdateUsername` - Update username
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
