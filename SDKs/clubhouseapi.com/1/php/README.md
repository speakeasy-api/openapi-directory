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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCheckForUpdateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCheckForUpdateRequest();
    $request->isTestflight = 548814;

    $response = $sdk->getCheckForUpdate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [getCheckForUpdate](docs/sdk/README.md#getcheckforupdate) - Clubhouse uses this to check for updates when app is not installed from App Store (eg TestFlight)
* [getGetActionableNotifications](docs/sdk/README.md#getgetactionablenotifications) - get actionable notifications (the bell again)
* [getGetAllTopics](docs/sdk/README.md#getgetalltopics) - gets all topics.
* [getGetChannels](docs/sdk/README.md#getgetchannels) - get all channels
* [getGetEvents](docs/sdk/README.md#getgetevents) - the Upcoming for You page
* [getGetNotifications](docs/sdk/README.md#getgetnotifications) - get notifications (the bell icon)
* [getGetSettings](docs/sdk/README.md#getgetsettings) - get notification settings
* [getGetSuggestedFollowsAll](docs/sdk/README.md#getgetsuggestedfollowsall) - gets suggested follows during signup
* [getGetUsersForTopic](docs/sdk/README.md#getgetusersfortopic) - looks up users by topic.
* [getGetWelcomeChannel](docs/sdk/README.md#getgetwelcomechannel) - called during signup
* [postCallPhoneNumberAuth](docs/sdk/README.md#postcallphonenumberauth) - Call phone number auth.
* [postCheckWaitlistStatus](docs/sdk/README.md#postcheckwaitliststatus) - checks waitlist status.
* [postCompletePhoneNumberAuth](docs/sdk/README.md#postcompletephonenumberauth) - Call phone number auth.
* [postCreateChannel](docs/sdk/README.md#postcreatechannel) - creates a channel
* [postFollow](docs/sdk/README.md#postfollow) - follows a user
* [postGetClub](docs/sdk/README.md#postgetclub) - gets club by id
* [postGetClubsForTopic](docs/sdk/README.md#postgetclubsfortopic) - looks up clubs by topic.
* [postGetCreateChannelTargets](docs/sdk/README.md#postgetcreatechanneltargets) - is fetched when you tap Create Room
* [postGetFollowing](docs/sdk/README.md#postgetfollowing) - get a list of the users and clubs that this user is following. Returned users have bios truncated to ~80 characters.
* [postGetOnlineFriends](docs/sdk/README.md#postgetonlinefriends) - gets online friends on the app homepage.
* [postGetProfile](docs/sdk/README.md#postgetprofile) - looks up user profile by ID.
* [postGetReleaseNotes](docs/sdk/README.md#postgetreleasenotes) - gets release notes.
* [postGetSuggestedClubInvites](docs/sdk/README.md#postgetsuggestedclubinvites) - find users to invite to clubs based on phone number
* [postGetSuggestedFollowsFriendsOnly](docs/sdk/README.md#postgetsuggestedfollowsfriendsonly) - find people to follow by uploading contacts during signup
* [postGetSuggestedFollowsSimilar](docs/sdk/README.md#postgetsuggestedfollowssimilar) - find similar users. (The Sparkles button on Clubhouse's profile page)
* [postGetSuggestedInvites](docs/sdk/README.md#postgetsuggestedinvites) - find users to invite based on phone number.
* [postGetSuggestedSpeakers](docs/sdk/README.md#postgetsuggestedspeakers) - gets suggested users when you start a private room
* [postGetTopic](docs/sdk/README.md#postgettopic) - looks up topic by ID.
* [postInviteFromWaitlist](docs/sdk/README.md#postinvitefromwaitlist) - wave to another user on the waitlist to give them access
* [postInviteToApp](docs/sdk/README.md#postinvitetoapp) - invite a user to the app, using one of your invites
* [postJoinChannel](docs/sdk/README.md#postjoinchannel) - join a channel.
* [postLeaveChannel](docs/sdk/README.md#postleavechannel) - leave a channel.
* [postMe](docs/sdk/README.md#postme) - gets user
* [postRecordActionTrails](docs/sdk/README.md#postrecordactiontrails) - analytics
* [postRefreshToken](docs/sdk/README.md#postrefreshtoken) - gets an access_token from a refresh_token.
* [postResendPhoneNumberAuth](docs/sdk/README.md#postresendphonenumberauth) - Resend phone number auth.
* [postSearchClubs](docs/sdk/README.md#postsearchclubs) - search clubs.
* [postSearchUsers](docs/sdk/README.md#postsearchusers) - search for users
* [postStartPhoneNumberAuth](docs/sdk/README.md#poststartphonenumberauth) - Starts phone number auth.
* [postUpdateNotifications](docs/sdk/README.md#postupdatenotifications) - updates notification during signup.
* [postUpdateUsername](docs/sdk/README.md#postupdateusername) - edits username.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
