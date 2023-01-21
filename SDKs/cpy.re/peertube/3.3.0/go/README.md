# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.DeleteAbusesAbuseIDRequest{
        Security: operations.DeleteAbusesAbuseIDSecurity{
            OAuth2: shared.SchemeOAuth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DeleteAbusesAbuseIDPathParams{
            AbuseID: 8717895732742165505,
        },
    }
    
    res, err := s.Abuses.DeleteAbusesAbuseID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Abuses

* `DeleteAbusesAbuseID` - Delete an abuse
* `DeleteAbusesAbuseIDMessagesAbuseMessageID` - Delete an abuse message
* `GetAbuses` - List abuses
* `GetMyAbuses` - List my abuses
* `GetAbusesAbuseIDMessages` - List messages of an abuse
* `PostAbuses` - Report an abuse
* `PostAbusesAbuseIDMessages` - Add message to an abuse
* `PutAbusesAbuseID` - Update an abuse

### Account

* `GetSyndicatedSubscriptionVideos` - List videos of subscriptions tied to a token

### Account Blocks

* `DeleteServerBlocklistAccountsAccountName` - Unblock an account by its handle
* `GetServerBlocklistAccounts` - List account blocks
* `PostServerBlocklistAccounts` - Block an account

### Accounts

* `GetAccount` - Get an account
* `GetAccountVideos` - List videos of an account
* `GetAccounts` - List accounts
* `GetAccountsNameRatings` - List ratings of an account
* `GetAccountsNameVideoChannels` - List video channels of an account

### Config

* `DelCustomConfig` - Delete instance runtime configuration
* `GetAbout` - Get instance "About" information
* `GetConfig` - Get instance public configuration
* `GetCustomConfig` - Get instance runtime configuration
* `PutCustomConfig` - Set instance runtime configuration

### Feeds

* `GetSyndicatedComments` - List comments on videos
* `GetSyndicatedSubscriptionVideos` - List videos of subscriptions tied to a token
* `GetSyndicatedVideos` - List videos

### Homepage

* `GetCustomPagesHomepageInstance` - Get instance custom homepage
* `PutCustomPagesHomepageInstance` - Set instance custom homepage

### Instance Follows

* `DeleteServerFollowersNameWithHost` - Remove or reject a follower to your server
* `DeleteServerFollowingHostOrHandle` - Unfollow an actor (PeerTube instance, channel or account)
* `GetServerFollowers` - List instances following the server
* `GetServerFollowing` - List instances followed by the server
* `PostServerFollowersNameWithHostAccept` - Accept a pending follower to your server
* `PostServerFollowersNameWithHostReject` - Reject a pending follower to your server
* `PostServerFollowing` - Follow a list of actors (PeerTube instance, channel or account)

### Instance Redundancy

* `PutServerRedundancyHost` - Update a server redundancy policy

### Job

* `GetJobs` - List instance jobs

### Live Videos

* `GetLiveID` - Get information about a live
* `UpdateLiveID` - Update information about a live

### My History

* `GetUsersMeHistoryVideos` - List watched videos history
* `PostUsersMeHistoryVideosRemove` - Clear video history

### My Notifications

* `GetUsersMeNotifications` - List my notifications
* `PostUsersMeNotificationsRead` - Mark notifications as read by their id
* `PostUsersMeNotificationsReadAll` - Mark all my notification as read
* `PutUsersMeNotificationSettings` - Update my notification settings

### My Subscriptions

* `DeleteUsersMeSubscriptionsSubscriptionHandle` - Delete subscription of my user
* `GetUsersMeSubscriptions` - Get my user subscriptions
* `GetUsersMeSubscriptionsExist` - Get if subscriptions exist for my user
* `GetUsersMeSubscriptionsVideos` - List videos of subscriptions of my user
* `GetUsersMeSubscriptionsSubscriptionHandle` - Get subscription of my user
* `PostUsersMeSubscriptions` - Add subscription to my user

### My User

* `DeleteUsersMeAvatar` - Delete my avatar
* `GetMyAbuses` - List my abuses
* `GetUserInfo` - Get my user information
* `GetUsersMeVideoQuotaUsed` - Get my user used quota
* `GetUsersMeVideos` - Get videos of my user
* `GetUsersMeVideosImports` - Get video imports of my user
* `GetUsersMeVideosVideoIDRating` - Get rate of my user for a video
* `PutUserInfo` - Update my user information

### Plugins

* `AddPlugin` - Install a plugin
* `GetAvailablePlugins` - List available plugins
* `GetPlugin` - Get a plugin
* `GetPlugins` - List plugins
* `GetPluginsNpmNamePublicSettings` - Get a plugin's public settings
* `GetPluginsNpmNameRegisteredSettings` - Get a plugin's registered settings
* `PutPluginsNpmNameSettings` - Set a plugin's settings
* `UninstallPlugin` - Uninstall a plugin
* `UpdatePlugin` - Update a plugin

### Register

* `RegisterUser` - Register a user
* `ResendEmailToVerifyUser` - Resend user verification link
* `VerifyUser` - Verify a user

### Search

* `SearchChannels` - Search channels
* `SearchPlaylists` - Search playlists
* `SearchVideos` - Search videos

### Server Blocks

* `DeleteServerBlocklistServersHost` - Unblock a server by its domain
* `GetServerBlocklistServers` - List server blocks
* `PostServerBlocklistServers` - Block a server

### Session

* `GetOAuthClient` - Login prerequisite
* `GetOAuthToken` - Login
* `RevokeOAuthToken` - Logout

### Users

* `AddUser` - Create a user
* `DelUser` - Delete a user
* `GetUser` - Get a user
* `GetUsers` - List users
* `PutUser` - Update a user
* `RegisterUser` - Register a user
* `ResendEmailToVerifyUser` - Resend user verification link
* `VerifyUser` - Verify a user

### Video

* `AddView` - Add a view to a video
* `DelVideo` - Delete a video
* `GetAccountVideos` - List videos of an account
* `GetCategories` - List available video categories
* `GetLanguages` - List available video languages
* `GetLicences` - List available video licences
* `GetLiveID` - Get information about a live
* `GetPrivacyPolicies` - List available video privacy policies
* `GetVideo` - Get a video
* `GetVideoChannelVideos` - List videos of a video channel
* `GetVideoDesc` - Get complete video description
* `GetVideos` - List videos
* `SetProgress` - Set watching progress of a video
* `UpdateLiveID` - Update information about a live
* `UploadResumable` - Send chunk for the resumable upload of a video
* `UploadResumableCancel` - Cancel the resumable upload of a video, deleting any data uploaded so far
* `UploadResumableInit` - Initialize the resumable upload of a video

### Video Blocks

* `AddVideoBlock` - Block a video
* `DelVideoBlock` - Unblock a video by its id
* `GetVideoBlocks` - List video blocks

### Video Captions

* `DelVideoCaption` - Delete a video caption
* `GetVideoCaptions` - List captions of a video

### Video Channels

* `AddVideoChannel` - Create a video channel
* `DelVideoChannel` - Delete a video channel
* `DeleteVideoChannelsChannelHandleAvatar` - Delete channel avatar
* `DeleteVideoChannelsChannelHandleBanner` - Delete channel banner
* `GetVideoChannel` - Get a video channel
* `GetVideoChannelVideos` - List videos of a video channel
* `GetVideoChannels` - List video channels
* `GetAccountsNameVideoChannels` - List video channels of an account
* `PutVideoChannel` - Update a video channel

### Video Comments

* `DeleteVideosIDCommentsCommentID` - Delete a comment or a reply
* `GetVideosIDCommentThreads` - List threads of a video
* `GetVideosIDCommentThreadsThreadID` - Get a thread
* `PostVideosIDCommentThreads` - Create a thread
* `PostVideosIDCommentsCommentID` - Reply to a thread of a video

### Video Mirroring

* `DelMirroredVideo` - Delete a mirror done on a video
* `GetMirroredVideos` - List videos being mirrored
* `PutMirroredVideo` - Mirror a video

### Video Ownership Change

* `GetVideosOwnership` - List video ownership changes
* `PostVideosOwnershipIDAccept` - Accept ownership change request
* `PostVideosOwnershipIDRefuse` - Refuse ownership change request
* `PostVideosIDGiveOwnership` - Request ownership change

### Video Playlists

* `AddVideoPlaylistVideo` - Add a video in a playlist
* `DelVideoPlaylistVideo` - Delete an element from a playlist
* `DeleteVideoPlaylistsPlaylistID` - Delete a video playlist
* `GetPlaylistPrivacyPolicies` - List available playlist privacy policies
* `GetPlaylists` - List video playlists
* `GetVideoPlaylistVideos` - List videos of a playlist
* `GetUsersMeVideoPlaylistsVideosExist` - Check video exists in my playlists
* `GetVideoPlaylistsPlaylistID` - Get a video playlist
* `PutVideoPlaylistVideo` - Update a playlist element
* `ReorderVideoPlaylist` - Reorder a playlist

### Video Rates

* `GetUsersMeVideosVideoIDRating` - Get rate of my user for a video
* `PutVideosIDRate` - Like/dislike a video

### Video Upload

* `UploadResumable` - Send chunk for the resumable upload of a video
* `UploadResumableCancel` - Cancel the resumable upload of a video, deleting any data uploaded so far
* `UploadResumableInit` - Initialize the resumable upload of a video

### Videos

* `AddVideoPlaylistVideo` - Add a video in a playlist
* `GetVideoPlaylistVideos` - List videos of a playlist
* `GetUsersMeSubscriptionsVideos` - List videos of subscriptions of my user
* `GetUsersMeVideos` - Get videos of my user
* `GetUsersMeVideosImports` - Get video imports of my user

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
