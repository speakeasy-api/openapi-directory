# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/clubhouseapi.com/1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/clubhouseapi.com/1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetCheckForUpdateRequest,
  GetCheckForUpdateResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetCheckForUpdateRequest = {
  isTestflight: 548814,
};

sdk.getCheckForUpdate(req).then((res: GetCheckForUpdateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `getCheckForUpdate` - Clubhouse uses this to check for updates when app is not installed from App Store (eg TestFlight)
* `getGetActionableNotifications` - get actionable notifications (the bell again)
* `getGetAllTopics` - gets all topics.
* `getGetChannels` - get all channels
* `getGetEvents` - the Upcoming for You page
* `getGetNotifications` - get notifications (the bell icon)
* `getGetSettings` - get notification settings
* `getGetSuggestedFollowsAll` - gets suggested follows during signup
* `getGetUsersForTopic` - looks up users by topic.
* `getGetWelcomeChannel` - called during signup
* `postCallPhoneNumberAuth` - Call phone number auth.
* `postCheckWaitlistStatus` - checks waitlist status.
* `postCompletePhoneNumberAuth` - Call phone number auth.
* `postCreateChannel` - creates a channel
* `postFollow` - follows a user
* `postGetClub` - gets club by id
* `postGetClubsForTopic` - looks up clubs by topic.
* `postGetCreateChannelTargets` - is fetched when you tap Create Room
* `postGetFollowing` - get a list of the users and clubs that this user is following. Returned users have bios truncated to ~80 characters.
* `postGetOnlineFriends` - gets online friends on the app homepage.
* `postGetProfile` - looks up user profile by ID.
* `postGetReleaseNotes` - gets release notes.
* `postGetSuggestedClubInvites` - find users to invite to clubs based on phone number
* `postGetSuggestedFollowsFriendsOnly` - find people to follow by uploading contacts during signup
* `postGetSuggestedFollowsSimilar` - find similar users. (The Sparkles button on Clubhouse's profile page)
* `postGetSuggestedInvites` - find users to invite based on phone number.
* `postGetSuggestedSpeakers` - gets suggested users when you start a private room
* `postGetTopic` - looks up topic by ID.
* `postInviteFromWaitlist` - wave to another user on the waitlist to give them access
* `postInviteToApp` - invite a user to the app, using one of your invites
* `postJoinChannel` - join a channel.
* `postLeaveChannel` - leave a channel.
* `postMe` - gets user
* `postRecordActionTrails` - analytics
* `postRefreshToken` - gets an access_token from a refresh_token.
* `postResendPhoneNumberAuth` - Resend phone number auth.
* `postSearchClubs` - search clubs.
* `postSearchUsers` - search for users
* `postStartPhoneNumberAuth` - Starts phone number auth.
* `postUpdateNotifications` - updates notification during signup.
* `postUpdateUsername` - edits username.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

