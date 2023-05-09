# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/clubhouseapi.com/1/go
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
    res, err := s.GetCheckForUpdate(ctx, operations.GetCheckForUpdateRequest{
        IsTestflight: sdk.Int64(548814),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [GetCheckForUpdate](docs/sdk/README.md#getcheckforupdate) - Clubhouse uses this to check for updates when app is not installed from App Store (eg TestFlight)
* [GetGetActionableNotifications](docs/sdk/README.md#getgetactionablenotifications) - get actionable notifications (the bell again)
* [GetGetAllTopics](docs/sdk/README.md#getgetalltopics) - gets all topics.
* [GetGetChannels](docs/sdk/README.md#getgetchannels) - get all channels
* [GetGetEvents](docs/sdk/README.md#getgetevents) - the Upcoming for You page
* [GetGetNotifications](docs/sdk/README.md#getgetnotifications) - get notifications (the bell icon)
* [GetGetSettings](docs/sdk/README.md#getgetsettings) - get notification settings
* [GetGetSuggestedFollowsAll](docs/sdk/README.md#getgetsuggestedfollowsall) - gets suggested follows during signup
* [GetGetUsersForTopic](docs/sdk/README.md#getgetusersfortopic) - looks up users by topic.
* [GetGetWelcomeChannel](docs/sdk/README.md#getgetwelcomechannel) - called during signup
* [PostCallPhoneNumberAuth](docs/sdk/README.md#postcallphonenumberauth) - Call phone number auth.
* [PostCheckWaitlistStatus](docs/sdk/README.md#postcheckwaitliststatus) - checks waitlist status.
* [PostCompletePhoneNumberAuth](docs/sdk/README.md#postcompletephonenumberauth) - Call phone number auth.
* [PostCreateChannel](docs/sdk/README.md#postcreatechannel) - creates a channel
* [PostFollow](docs/sdk/README.md#postfollow) - follows a user
* [PostGetClub](docs/sdk/README.md#postgetclub) - gets club by id
* [PostGetClubsForTopic](docs/sdk/README.md#postgetclubsfortopic) - looks up clubs by topic.
* [PostGetCreateChannelTargets](docs/sdk/README.md#postgetcreatechanneltargets) - is fetched when you tap Create Room
* [PostGetFollowing](docs/sdk/README.md#postgetfollowing) - get a list of the users and clubs that this user is following. Returned users have bios truncated to ~80 characters.
* [PostGetOnlineFriends](docs/sdk/README.md#postgetonlinefriends) - gets online friends on the app homepage.
* [PostGetProfile](docs/sdk/README.md#postgetprofile) - looks up user profile by ID.
* [PostGetReleaseNotes](docs/sdk/README.md#postgetreleasenotes) - gets release notes.
* [PostGetSuggestedClubInvites](docs/sdk/README.md#postgetsuggestedclubinvites) - find users to invite to clubs based on phone number
* [PostGetSuggestedFollowsFriendsOnly](docs/sdk/README.md#postgetsuggestedfollowsfriendsonly) - find people to follow by uploading contacts during signup
* [PostGetSuggestedFollowsSimilar](docs/sdk/README.md#postgetsuggestedfollowssimilar) - find similar users. (The Sparkles button on Clubhouse's profile page)
* [PostGetSuggestedInvites](docs/sdk/README.md#postgetsuggestedinvites) - find users to invite based on phone number.
* [PostGetSuggestedSpeakers](docs/sdk/README.md#postgetsuggestedspeakers) - gets suggested users when you start a private room
* [PostGetTopic](docs/sdk/README.md#postgettopic) - looks up topic by ID.
* [PostInviteFromWaitlist](docs/sdk/README.md#postinvitefromwaitlist) - wave to another user on the waitlist to give them access
* [PostInviteToApp](docs/sdk/README.md#postinvitetoapp) - invite a user to the app, using one of your invites
* [PostJoinChannel](docs/sdk/README.md#postjoinchannel) - join a channel.
* [PostLeaveChannel](docs/sdk/README.md#postleavechannel) - leave a channel.
* [PostMe](docs/sdk/README.md#postme) - gets user
* [PostRecordActionTrails](docs/sdk/README.md#postrecordactiontrails) - analytics
* [PostRefreshToken](docs/sdk/README.md#postrefreshtoken) - gets an access_token from a refresh_token.
* [PostResendPhoneNumberAuth](docs/sdk/README.md#postresendphonenumberauth) - Resend phone number auth.
* [PostSearchClubs](docs/sdk/README.md#postsearchclubs) - search clubs.
* [PostSearchUsers](docs/sdk/README.md#postsearchusers) - search for users
* [PostStartPhoneNumberAuth](docs/sdk/README.md#poststartphonenumberauth) - Starts phone number auth.
* [PostUpdateNotifications](docs/sdk/README.md#postupdatenotifications) - updates notification during signup.
* [PostUpdateUsername](docs/sdk/README.md#postupdateusername) - edits username.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
