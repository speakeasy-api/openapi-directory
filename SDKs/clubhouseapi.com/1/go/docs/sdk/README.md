# SDK

## Overview

Clubhouse API

### Available Operations

* [GetCheckForUpdate](#getcheckforupdate) - Clubhouse uses this to check for updates when app is not installed from App Store (eg TestFlight)
* [GetGetActionableNotifications](#getgetactionablenotifications) - get actionable notifications (the bell again)
* [GetGetAllTopics](#getgetalltopics) - gets all topics.
* [GetGetChannels](#getgetchannels) - get all channels
* [GetGetEvents](#getgetevents) - the Upcoming for You page
* [GetGetNotifications](#getgetnotifications) - get notifications (the bell icon)
* [GetGetSettings](#getgetsettings) - get notification settings
* [GetGetSuggestedFollowsAll](#getgetsuggestedfollowsall) - gets suggested follows during signup
* [GetGetUsersForTopic](#getgetusersfortopic) - looks up users by topic.
* [GetGetWelcomeChannel](#getgetwelcomechannel) - called during signup
* [PostCallPhoneNumberAuth](#postcallphonenumberauth) - Call phone number auth.
* [PostCheckWaitlistStatus](#postcheckwaitliststatus) - checks waitlist status.
* [PostCompletePhoneNumberAuth](#postcompletephonenumberauth) - Call phone number auth.
* [PostCreateChannel](#postcreatechannel) - creates a channel
* [PostFollow](#postfollow) - follows a user
* [PostGetClub](#postgetclub) - gets club by id
* [PostGetClubsForTopic](#postgetclubsfortopic) - looks up clubs by topic.
* [PostGetCreateChannelTargets](#postgetcreatechanneltargets) - is fetched when you tap Create Room
* [PostGetFollowing](#postgetfollowing) - get a list of the users and clubs that this user is following. Returned users have bios truncated to ~80 characters.
* [PostGetOnlineFriends](#postgetonlinefriends) - gets online friends on the app homepage.
* [PostGetProfile](#postgetprofile) - looks up user profile by ID.
* [PostGetReleaseNotes](#postgetreleasenotes) - gets release notes.
* [PostGetSuggestedClubInvites](#postgetsuggestedclubinvites) - find users to invite to clubs based on phone number
* [PostGetSuggestedFollowsFriendsOnly](#postgetsuggestedfollowsfriendsonly) - find people to follow by uploading contacts during signup
* [PostGetSuggestedFollowsSimilar](#postgetsuggestedfollowssimilar) - find similar users. (The Sparkles button on Clubhouse's profile page)
* [PostGetSuggestedInvites](#postgetsuggestedinvites) - find users to invite based on phone number.
* [PostGetSuggestedSpeakers](#postgetsuggestedspeakers) - gets suggested users when you start a private room
* [PostGetTopic](#postgettopic) - looks up topic by ID.
* [PostInviteFromWaitlist](#postinvitefromwaitlist) - wave to another user on the waitlist to give them access
* [PostInviteToApp](#postinvitetoapp) - invite a user to the app, using one of your invites
* [PostJoinChannel](#postjoinchannel) - join a channel.
* [PostLeaveChannel](#postleavechannel) - leave a channel.
* [PostMe](#postme) - gets user
* [PostRecordActionTrails](#postrecordactiontrails) - analytics
* [PostRefreshToken](#postrefreshtoken) - gets an access_token from a refresh_token.
* [PostResendPhoneNumberAuth](#postresendphonenumberauth) - Resend phone number auth.
* [PostSearchClubs](#postsearchclubs) - search clubs.
* [PostSearchUsers](#postsearchusers) - search for users
* [PostStartPhoneNumberAuth](#poststartphonenumberauth) - Starts phone number auth.
* [PostUpdateNotifications](#postupdatenotifications) - updates notification during signup.
* [PostUpdateUsername](#postupdateusername) - edits username.

## GetCheckForUpdate

Clubhouse uses this to check for updates when app is not installed from App Store (eg TestFlight)

### Example Usage

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
    res, err := s.SDK.GetCheckForUpdate(ctx, operations.GetCheckForUpdateRequest{
        IsTestflight: sdk.Int64(592845),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGetActionableNotifications

get actionable notifications (the bell again)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetGetActionableNotifications(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGetAllTopics

gets all topics.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetGetAllTopics(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGetChannels

get all channels

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetGetChannels(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGetEvents

the Upcoming for You page

### Example Usage

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
    res, err := s.SDK.GetGetEvents(ctx, operations.GetGetEventsRequest{
        IsFiltered: sdk.Bool(false),
        Page: sdk.Int64(715190),
        PageSize: sdk.Int64(844266),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGetNotifications

get notifications (the bell icon)

### Example Usage

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
    res, err := s.SDK.GetGetNotifications(ctx, operations.GetGetNotificationsRequest{
        Page: sdk.Int64(602763),
        PageSize: sdk.Int64(857946),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGetSettings

get notification settings

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetGetSettings(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGetSuggestedFollowsAll

gets suggested follows during signup

### Example Usage

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
    res, err := s.SDK.GetGetSuggestedFollowsAll(ctx, operations.GetGetSuggestedFollowsAllRequest{
        InOnboarding: sdk.Bool(false),
        Page: sdk.Int64(544883),
        PageSize: sdk.Int64(847252),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGetUsersForTopic

looks up users by topic.

### Example Usage

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
    res, err := s.SDK.GetGetUsersForTopic(ctx, operations.GetGetUsersForTopicRequest{
        Page: sdk.Int64(423655),
        PageSize: sdk.Int64(623564),
        TopicID: sdk.Int64(645894),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGetWelcomeChannel

called during signup

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetGetWelcomeChannel(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostCallPhoneNumberAuth

Call phone number auth.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostCallPhoneNumberAuth(ctx, map[string]interface{}{
        "iure": "magnam",
        "debitis": "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostCheckWaitlistStatus

checks waitlist status.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostCheckWaitlistStatus(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostCompletePhoneNumberAuth

Call phone number auth.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostCompletePhoneNumberAuth(ctx, map[string]interface{}{
        "tempora": "suscipit",
        "molestiae": "minus",
        "placeat": "voluptatum",
        "iusto": "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostCreateChannel

creates a channel

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostCreateChannel(ctx, map[string]interface{}{
        "recusandae": "temporibus",
        "ab": "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostFollow

follows a user

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostFollow(ctx, map[string]interface{}{
        "deserunt": "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostGetClub

gets club by id

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostGetClub(ctx, map[string]interface{}{
        "repellendus": "sapiente",
        "quo": "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostGetClubsForTopic

looks up clubs by topic.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostGetClubsForTopic(ctx, map[string]interface{}{
        "at": "maiores",
        "molestiae": "quod",
        "quod": "esse",
        "totam": "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostGetCreateChannelTargets

is fetched when you tap Create Room

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostGetCreateChannelTargets(ctx, map[string]interface{}{
        "dicta": "nam",
        "officia": "occaecati",
        "fugit": "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostGetFollowing

get a list of the users and clubs that this user is following. Returned users have bios truncated to ~80 characters.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostGetFollowing(ctx, map[string]interface{}{
        "optio": "totam",
        "beatae": "commodi",
        "molestiae": "modi",
        "qui": "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostGetOnlineFriends

gets online friends on the app homepage.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostGetOnlineFriends(ctx, map[string]interface{}{
        "esse": "ipsum",
        "excepturi": "aspernatur",
        "perferendis": "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostGetProfile

looks up user profile by ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostGetProfile(ctx, map[string]interface{}{
        "sed": "iste",
        "dolor": "natus",
        "laboriosam": "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostGetReleaseNotes

gets release notes.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostGetReleaseNotes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostGetSuggestedClubInvites

find users to invite to clubs based on phone number

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostGetSuggestedClubInvites(ctx, map[string]interface{}{
        "fuga": "in",
        "corporis": "iste",
        "iure": "saepe",
        "quidem": "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostGetSuggestedFollowsFriendsOnly

find people to follow by uploading contacts during signup

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostGetSuggestedFollowsFriendsOnly(ctx, map[string]interface{}{
        "reiciendis": "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostGetSuggestedFollowsSimilar

find similar users. (The Sparkles button on Clubhouse's profile page)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostGetSuggestedFollowsSimilar(ctx, map[string]interface{}{
        "laborum": "dolores",
        "dolorem": "corporis",
        "explicabo": "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostGetSuggestedInvites

(also see https://zerforschung.org/posts/clubhouse-telefonnummern-en/ for @zerforschung's analysis of the privacy implications of this API)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostGetSuggestedInvites(ctx, map[string]interface{}{
        "omnis": "nemo",
        "minima": "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostGetSuggestedSpeakers

gets suggested users when you start a private room

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostGetSuggestedSpeakers(ctx, map[string]interface{}{
        "iure": "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostGetTopic

looks up topic by ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostGetTopic(ctx, map[string]interface{}{
        "sapiente": "architecto",
        "mollitia": "dolorem",
        "culpa": "consequuntur",
        "repellat": "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostInviteFromWaitlist

wave to another user on the waitlist to give them access

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostInviteFromWaitlist(ctx, map[string]interface{}{
        "numquam": "commodi",
        "quam": "molestiae",
        "velit": "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostInviteToApp

invite a user to the app, using one of your invites

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostInviteToApp(ctx, map[string]interface{}{
        "quis": "vitae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostJoinChannel

join a channel.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostJoinChannel(ctx, map[string]interface{}{
        "animi": "enim",
        "odit": "quo",
        "sequi": "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostLeaveChannel

leave a channel.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostLeaveChannel(ctx, map[string]interface{}{
        "id": "possimus",
        "aut": "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostMe

gets user

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostMe(ctx, map[string]interface{}{
        "temporibus": "laborum",
        "quasi": "reiciendis",
        "voluptatibus": "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostRecordActionTrails

analytics

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostRecordActionTrails(ctx, map[string]interface{}{
        "praesentium": "voluptatibus",
        "ipsa": "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostRefreshToken

gets an access_token from a refresh_token.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostRefreshToken(ctx, map[string]interface{}{
        "cum": "perferendis",
        "doloremque": "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostResendPhoneNumberAuth

Resend phone number auth.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostResendPhoneNumberAuth(ctx, map[string]interface{}{
        "maiores": "dicta",
        "corporis": "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostSearchClubs

search clubs.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostSearchClubs(ctx, map[string]interface{}{
        "dicta": "harum",
        "enim": "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostSearchUsers

search for users

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostSearchUsers(ctx, map[string]interface{}{
        "repudiandae": "quae",
        "ipsum": "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostStartPhoneNumberAuth

Starts phone number auth.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostStartPhoneNumberAuth(ctx, map[string]interface{}{
        "excepturi": "pariatur",
        "modi": "praesentium",
        "rem": "voluptates",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostUpdateNotifications

updates notification during signup.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostUpdateNotifications(ctx, map[string]interface{}{
        "repudiandae": "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostUpdateUsername

edits username.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostUpdateUsername(ctx, map[string]interface{}{
        "itaque": "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
