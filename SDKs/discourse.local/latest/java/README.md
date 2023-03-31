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

import org.openapis.openapi.models.operations.AdminGetUserPathParams;
import org.openapis.openapi.models.operations.AdminGetUserRequest;
import org.openapis.openapi.models.operations.AdminGetUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdminGetUserRequest req = new AdminGetUserRequest() {{
                pathParams = new AdminGetUserPathParams() {{
                    id = 548814;
                }};
            }};            

            AdminGetUserResponse res = sdk.admin.adminGetUser(req);

            if (res.adminGetUser200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### admin

* `adminGetUser` - Get a user by id
* `adminListUsers` - Get a list of users
* `anonymizeUser` - Anonymize a user
* `deleteUser` - Delete a user
* `logOutUser` - Log a user out
* `refreshGravatar` - Refresh gravatar
* `silenceUser` - Silence a user
* `suspendUser` - Suspend a user

### backups

* `createBackup` - Create backup
* `downloadBackup` - Download backup
* `getBackups` - List backups
* `sendDownloadBackupEmail` - Send download backup email

### badges

* `adminListBadges` - List badges
* `createBadge` - Create badge
* `deleteBadge` - Delete badge
* `listUserBadges` - List badges for a user
* `updateBadge` - Update badge

### categories

* `createCategory` - Creates a category
* `getCategory` - Show category
* `getSite` - Get site info
* `listCategories` - Retrieves a list of categories
* `listCategoryTopics` - List topics
* `updateCategory` - Updates a category

### groups

* `addGroupMembers` - Add group members
* `createGroup` - Create a group
* `deleteGroup` - Delete a group
* `getGroup` - Get a group
* `listGroupMembers` - List group members
* `listGroups` - List groups
* `removeGroupMembers` - Remove group members
* `updateGroup` - Update a group

### invites

* `createInvite` - Create an invite
* `inviteToTopic` - Invite to topic

### notifications

* `getNotifications` - Get the notifications that belong to the current user
* `markNotificationsAsRead` - Mark notifications as read

### posts

* `createTopicPostPM` - Creates a new topic, a new post, or a private message
* `deletePost` - delete a single post
* `getPost` - Retrieve a single post
* `listPosts` - List latest posts across topics
* `lockPost` - Lock a post from being edited
* `performPostAction` - Like a post and other actions
* `postReplies` - List replies to a post
* `updatePost` - Update a single post

### privateMessages

* `createTopicPostPM` - Creates a new topic, a new post, or a private message
* `getUserSentPrivateMessages` - Get a list of private messages sent for a user
* `listUserPrivateMessages` - Get a list of private messages for a user

### search

* `search` - Search for a term

### site

* `getSite` - Get site info

### tags

* `createTagGroup` - Creates a tag group
* `getTag` - Get a specific tag
* `getTagGroup` - Get a single tag group
* `listTagGroups` - Get a list of tag groups
* `listTags` - Get a list of tags
* `updateTagGroup` - Update tag group

### topics

* `bookmarkTopic` - Bookmark topic
* `createTopicPostPM` - Creates a new topic, a new post, or a private message
* `createTopicTimer` - Create topic timer
* `getSpecificPostsFromTopic` - Get specific posts from a topic
* `getTopic` - Get a single topic
* `getTopicByExternalId` - Get topic by external_id
* `inviteToTopic` - Invite to topic
* `listLatestTopics` - Get the latest topics
* `listTopTopics` - Get the top topics filtered by period
* `removeTopic` - Remove a topic
* `setNotificationLevel` - Set notification level
* `updateTopic` - Update a topic
* `updateTopicStatus` - Update the status of a topic
* `updateTopicTimestamp` - Update topic timestamp

### uploads

* `abortMultipart` - Abort multipart upload
* `batchPresignMultipartParts` - Generates batches of presigned URLs for multipart parts
* `completeExternalUpload` - Completes a direct external upload
* `completeMultipart` - Complete multipart upload
* `createMultipartUpload` - Creates a multipart external upload
* `createUpload` - Creates an upload
* `generatePresignedPut` - Initiates a direct external upload

### users

* `adminGetUser` - Get a user by id
* `adminListUsers` - Get a list of users
* `anonymizeUser` - Anonymize a user
* `changePassword` - Change password
* `createUser` - Creates a user
* `deleteUser` - Delete a user
* `getUser` - Get a single user by username
* `getUserEmails` - Get email addresses belonging to a user
* `getUserExternalId` - Get a user by external_id
* `getUserIdentiyProviderExternalId` - Get a user by identity provider external ID
* `listUserActions` - Get a list of user actions
* `listUserBadges` - List badges for a user
* `listUsersPublic` - Get a public list of users
* `logOutUser` - Log a user out
* `refreshGravatar` - Refresh gravatar
* `sendPasswordResetEmail` - Send password reset email
* `silenceUser` - Silence a user
* `suspendUser` - Suspend a user
* `updateAvatar` - Update avatar
* `updateEmail` - Update email
* `updateUser` - Update a user
* `updateUsername` - Update username
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
