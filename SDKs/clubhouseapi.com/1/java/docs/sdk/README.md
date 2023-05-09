# SDK

## Overview

Clubhouse API

### Available Operations

* [getCheckForUpdate](#getcheckforupdate) - Clubhouse uses this to check for updates when app is not installed from App Store (eg TestFlight)
* [getGetActionableNotifications](#getgetactionablenotifications) - get actionable notifications (the bell again)
* [getGetAllTopics](#getgetalltopics) - gets all topics.
* [getGetChannels](#getgetchannels) - get all channels
* [getGetEvents](#getgetevents) - the Upcoming for You page
* [getGetNotifications](#getgetnotifications) - get notifications (the bell icon)
* [getGetSettings](#getgetsettings) - get notification settings
* [getGetSuggestedFollowsAll](#getgetsuggestedfollowsall) - gets suggested follows during signup
* [getGetUsersForTopic](#getgetusersfortopic) - looks up users by topic.
* [getGetWelcomeChannel](#getgetwelcomechannel) - called during signup
* [postCallPhoneNumberAuth](#postcallphonenumberauth) - Call phone number auth.
* [postCheckWaitlistStatus](#postcheckwaitliststatus) - checks waitlist status.
* [postCompletePhoneNumberAuth](#postcompletephonenumberauth) - Call phone number auth.
* [postCreateChannel](#postcreatechannel) - creates a channel
* [postFollow](#postfollow) - follows a user
* [postGetClub](#postgetclub) - gets club by id
* [postGetClubsForTopic](#postgetclubsfortopic) - looks up clubs by topic.
* [postGetCreateChannelTargets](#postgetcreatechanneltargets) - is fetched when you tap Create Room
* [postGetFollowing](#postgetfollowing) - get a list of the users and clubs that this user is following. Returned users have bios truncated to ~80 characters.
* [postGetOnlineFriends](#postgetonlinefriends) - gets online friends on the app homepage.
* [postGetProfile](#postgetprofile) - looks up user profile by ID.
* [postGetReleaseNotes](#postgetreleasenotes) - gets release notes.
* [postGetSuggestedClubInvites](#postgetsuggestedclubinvites) - find users to invite to clubs based on phone number
* [postGetSuggestedFollowsFriendsOnly](#postgetsuggestedfollowsfriendsonly) - find people to follow by uploading contacts during signup
* [postGetSuggestedFollowsSimilar](#postgetsuggestedfollowssimilar) - find similar users. (The Sparkles button on Clubhouse's profile page)
* [postGetSuggestedInvites](#postgetsuggestedinvites) - find users to invite based on phone number.
* [postGetSuggestedSpeakers](#postgetsuggestedspeakers) - gets suggested users when you start a private room
* [postGetTopic](#postgettopic) - looks up topic by ID.
* [postInviteFromWaitlist](#postinvitefromwaitlist) - wave to another user on the waitlist to give them access
* [postInviteToApp](#postinvitetoapp) - invite a user to the app, using one of your invites
* [postJoinChannel](#postjoinchannel) - join a channel.
* [postLeaveChannel](#postleavechannel) - leave a channel.
* [postMe](#postme) - gets user
* [postRecordActionTrails](#postrecordactiontrails) - analytics
* [postRefreshToken](#postrefreshtoken) - gets an access_token from a refresh_token.
* [postResendPhoneNumberAuth](#postresendphonenumberauth) - Resend phone number auth.
* [postSearchClubs](#postsearchclubs) - search clubs.
* [postSearchUsers](#postsearchusers) - search for users
* [postStartPhoneNumberAuth](#poststartphonenumberauth) - Starts phone number auth.
* [postUpdateNotifications](#postupdatenotifications) - updates notification during signup.
* [postUpdateUsername](#postupdateusername) - edits username.

## getCheckForUpdate

Clubhouse uses this to check for updates when app is not installed from App Store (eg TestFlight)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCheckForUpdateRequest;
import org.openapis.openapi.models.operations.GetCheckForUpdateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCheckForUpdateRequest req = new GetCheckForUpdateRequest() {{
                isTestflight = 592845L;
            }};            

            GetCheckForUpdateResponse res = sdk.sdk.getCheckForUpdate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGetActionableNotifications

get actionable notifications (the bell again)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGetActionableNotificationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGetActionableNotificationsResponse res = sdk.sdk.getGetActionableNotifications();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGetAllTopics

gets all topics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGetAllTopicsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGetAllTopicsResponse res = sdk.sdk.getGetAllTopics();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGetChannels

get all channels

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGetChannelsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGetChannelsResponse res = sdk.sdk.getGetChannels();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGetEvents

the Upcoming for You page

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGetEventsRequest;
import org.openapis.openapi.models.operations.GetGetEventsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGetEventsRequest req = new GetGetEventsRequest() {{
                isFiltered = false;
                page = 715190L;
                pageSize = 844266L;
            }};            

            GetGetEventsResponse res = sdk.sdk.getGetEvents(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGetNotifications

get notifications (the bell icon)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGetNotificationsRequest;
import org.openapis.openapi.models.operations.GetGetNotificationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGetNotificationsRequest req = new GetGetNotificationsRequest() {{
                page = 602763L;
                pageSize = 857946L;
            }};            

            GetGetNotificationsResponse res = sdk.sdk.getGetNotifications(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGetSettings

get notification settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGetSettingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGetSettingsResponse res = sdk.sdk.getGetSettings();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGetSuggestedFollowsAll

gets suggested follows during signup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGetSuggestedFollowsAllRequest;
import org.openapis.openapi.models.operations.GetGetSuggestedFollowsAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGetSuggestedFollowsAllRequest req = new GetGetSuggestedFollowsAllRequest() {{
                inOnboarding = false;
                page = 544883L;
                pageSize = 847252L;
            }};            

            GetGetSuggestedFollowsAllResponse res = sdk.sdk.getGetSuggestedFollowsAll(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGetUsersForTopic

looks up users by topic.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGetUsersForTopicRequest;
import org.openapis.openapi.models.operations.GetGetUsersForTopicResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGetUsersForTopicRequest req = new GetGetUsersForTopicRequest() {{
                page = 423655L;
                pageSize = 623564L;
                topicId = 645894L;
            }};            

            GetGetUsersForTopicResponse res = sdk.sdk.getGetUsersForTopic(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGetWelcomeChannel

called during signup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGetWelcomeChannelResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGetWelcomeChannelResponse res = sdk.sdk.getGetWelcomeChannel();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCallPhoneNumberAuth

Call phone number auth.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCallPhoneNumberAuthResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("iure", "magnam");
                put("debitis", "ipsa");
            }}            

            PostCallPhoneNumberAuthResponse res = sdk.sdk.postCallPhoneNumberAuth(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCheckWaitlistStatus

checks waitlist status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCheckWaitlistStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCheckWaitlistStatusResponse res = sdk.sdk.postCheckWaitlistStatus();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCompletePhoneNumberAuth

Call phone number auth.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCompletePhoneNumberAuthResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("tempora", "suscipit");
                put("molestiae", "minus");
                put("placeat", "voluptatum");
                put("iusto", "excepturi");
            }}            

            PostCompletePhoneNumberAuthResponse res = sdk.sdk.postCompletePhoneNumberAuth(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateChannel

creates a channel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCreateChannelResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("recusandae", "temporibus");
                put("ab", "quis");
            }}            

            PostCreateChannelResponse res = sdk.sdk.postCreateChannel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFollow

follows a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostFollowResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("deserunt", "perferendis");
            }}            

            PostFollowResponse res = sdk.sdk.postFollow(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetClub

gets club by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGetClubResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("repellendus", "sapiente");
                put("quo", "odit");
            }}            

            PostGetClubResponse res = sdk.sdk.postGetClub(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetClubsForTopic

looks up clubs by topic.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGetClubsForTopicResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("at", "maiores");
                put("molestiae", "quod");
                put("quod", "esse");
                put("totam", "porro");
            }}            

            PostGetClubsForTopicResponse res = sdk.sdk.postGetClubsForTopic(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetCreateChannelTargets

is fetched when you tap Create Room

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGetCreateChannelTargetsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("dicta", "nam");
                put("officia", "occaecati");
                put("fugit", "deleniti");
            }}            

            PostGetCreateChannelTargetsResponse res = sdk.sdk.postGetCreateChannelTargets(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetFollowing

get a list of the users and clubs that this user is following. Returned users have bios truncated to ~80 characters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGetFollowingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("optio", "totam");
                put("beatae", "commodi");
                put("molestiae", "modi");
                put("qui", "impedit");
            }}            

            PostGetFollowingResponse res = sdk.sdk.postGetFollowing(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetOnlineFriends

gets online friends on the app homepage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGetOnlineFriendsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("esse", "ipsum");
                put("excepturi", "aspernatur");
                put("perferendis", "ad");
            }}            

            PostGetOnlineFriendsResponse res = sdk.sdk.postGetOnlineFriends(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetProfile

looks up user profile by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGetProfileResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("sed", "iste");
                put("dolor", "natus");
                put("laboriosam", "hic");
            }}            

            PostGetProfileResponse res = sdk.sdk.postGetProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetReleaseNotes

gets release notes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGetReleaseNotesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostGetReleaseNotesResponse res = sdk.sdk.postGetReleaseNotes();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetSuggestedClubInvites

find users to invite to clubs based on phone number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGetSuggestedClubInvitesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("fuga", "in");
                put("corporis", "iste");
                put("iure", "saepe");
                put("quidem", "architecto");
            }}            

            PostGetSuggestedClubInvitesResponse res = sdk.sdk.postGetSuggestedClubInvites(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetSuggestedFollowsFriendsOnly

find people to follow by uploading contacts during signup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGetSuggestedFollowsFriendsOnlyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("reiciendis", "est");
            }}            

            PostGetSuggestedFollowsFriendsOnlyResponse res = sdk.sdk.postGetSuggestedFollowsFriendsOnly(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetSuggestedFollowsSimilar

find similar users. (The Sparkles button on Clubhouse's profile page)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGetSuggestedFollowsSimilarResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("laborum", "dolores");
                put("dolorem", "corporis");
                put("explicabo", "nobis");
            }}            

            PostGetSuggestedFollowsSimilarResponse res = sdk.sdk.postGetSuggestedFollowsSimilar(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetSuggestedInvites

(also see https://zerforschung.org/posts/clubhouse-telefonnummern-en/ for @zerforschung's analysis of the privacy implications of this API)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGetSuggestedInvitesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("omnis", "nemo");
                put("minima", "excepturi");
            }}            

            PostGetSuggestedInvitesResponse res = sdk.sdk.postGetSuggestedInvites(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetSuggestedSpeakers

gets suggested users when you start a private room

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGetSuggestedSpeakersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("iure", "culpa");
            }}            

            PostGetSuggestedSpeakersResponse res = sdk.sdk.postGetSuggestedSpeakers(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetTopic

looks up topic by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGetTopicResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("sapiente", "architecto");
                put("mollitia", "dolorem");
                put("culpa", "consequuntur");
                put("repellat", "mollitia");
            }}            

            PostGetTopicResponse res = sdk.sdk.postGetTopic(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postInviteFromWaitlist

wave to another user on the waitlist to give them access

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostInviteFromWaitlistResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("numquam", "commodi");
                put("quam", "molestiae");
                put("velit", "error");
            }}            

            PostInviteFromWaitlistResponse res = sdk.sdk.postInviteFromWaitlist(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postInviteToApp

invite a user to the app, using one of your invites

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostInviteToAppResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("quis", "vitae");
            }}            

            PostInviteToAppResponse res = sdk.sdk.postInviteToApp(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postJoinChannel

join a channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostJoinChannelResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("animi", "enim");
                put("odit", "quo");
                put("sequi", "tenetur");
            }}            

            PostJoinChannelResponse res = sdk.sdk.postJoinChannel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postLeaveChannel

leave a channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLeaveChannelResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("id", "possimus");
                put("aut", "quasi");
            }}            

            PostLeaveChannelResponse res = sdk.sdk.postLeaveChannel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMe

gets user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("temporibus", "laborum");
                put("quasi", "reiciendis");
                put("voluptatibus", "vero");
            }}            

            PostMeResponse res = sdk.sdk.postMe(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRecordActionTrails

analytics

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRecordActionTrailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("praesentium", "voluptatibus");
                put("ipsa", "omnis");
            }}            

            PostRecordActionTrailsResponse res = sdk.sdk.postRecordActionTrails(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRefreshToken

gets an access_token from a refresh_token.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRefreshTokenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("cum", "perferendis");
                put("doloremque", "reprehenderit");
            }}            

            PostRefreshTokenResponse res = sdk.sdk.postRefreshToken(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postResendPhoneNumberAuth

Resend phone number auth.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostResendPhoneNumberAuthResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("maiores", "dicta");
                put("corporis", "dolore");
            }}            

            PostResendPhoneNumberAuthResponse res = sdk.sdk.postResendPhoneNumberAuth(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSearchClubs

search clubs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSearchClubsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("dicta", "harum");
                put("enim", "accusamus");
            }}            

            PostSearchClubsResponse res = sdk.sdk.postSearchClubs(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSearchUsers

search for users

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSearchUsersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("repudiandae", "quae");
                put("ipsum", "quidem");
            }}            

            PostSearchUsersResponse res = sdk.sdk.postSearchUsers(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postStartPhoneNumberAuth

Starts phone number auth.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostStartPhoneNumberAuthResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("excepturi", "pariatur");
                put("modi", "praesentium");
                put("rem", "voluptates");
            }}            

            PostStartPhoneNumberAuthResponse res = sdk.sdk.postStartPhoneNumberAuth(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateNotifications

updates notification during signup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUpdateNotificationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("repudiandae", "sint");
            }}            

            PostUpdateNotificationsResponse res = sdk.sdk.postUpdateNotifications(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUpdateUsername

edits username.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUpdateUsernameResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("itaque", "incidunt");
            }}            

            PostUpdateUsernameResponse res = sdk.sdk.postUpdateUsername(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
