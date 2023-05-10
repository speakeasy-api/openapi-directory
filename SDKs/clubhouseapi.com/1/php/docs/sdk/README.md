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
    $request->isTestflight = 592845;

    $response = $sdk->sdk->getCheckForUpdate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetActionableNotifications

get actionable notifications (the bell again)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getGetActionableNotifications();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetAllTopics

gets all topics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getGetAllTopics();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetChannels

get all channels

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getGetChannels();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetEvents

the Upcoming for You page

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetEventsRequest();
    $request->isFiltered = false;
    $request->page = 715190;
    $request->pageSize = 844266;

    $response = $sdk->sdk->getGetEvents($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetNotifications

get notifications (the bell icon)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetNotificationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetNotificationsRequest();
    $request->page = 602763;
    $request->pageSize = 857946;

    $response = $sdk->sdk->getGetNotifications($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetSettings

get notification settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getGetSettings();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetSuggestedFollowsAll

gets suggested follows during signup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetSuggestedFollowsAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetSuggestedFollowsAllRequest();
    $request->inOnboarding = false;
    $request->page = 544883;
    $request->pageSize = 847252;

    $response = $sdk->sdk->getGetSuggestedFollowsAll($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetUsersForTopic

looks up users by topic.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGetUsersForTopicRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGetUsersForTopicRequest();
    $request->page = 423655;
    $request->pageSize = 623564;
    $request->topicId = 645894;

    $response = $sdk->sdk->getGetUsersForTopic($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGetWelcomeChannel

called during signup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getGetWelcomeChannel();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCallPhoneNumberAuth

Call phone number auth.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ]

    $response = $sdk->sdk->postCallPhoneNumberAuth($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCheckWaitlistStatus

checks waitlist status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->postCheckWaitlistStatus();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCompletePhoneNumberAuth

Call phone number auth.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'tempora' => 'suscipit',
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
        'iusto' => 'excepturi',
    ]

    $response = $sdk->sdk->postCompletePhoneNumberAuth($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateChannel

creates a channel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'recusandae' => 'temporibus',
        'ab' => 'quis',
    ]

    $response = $sdk->sdk->postCreateChannel($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFollow

follows a user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'deserunt' => 'perferendis',
    ]

    $response = $sdk->sdk->postFollow($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetClub

gets club by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'repellendus' => 'sapiente',
        'quo' => 'odit',
    ]

    $response = $sdk->sdk->postGetClub($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetClubsForTopic

looks up clubs by topic.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'at' => 'maiores',
        'molestiae' => 'quod',
        'quod' => 'esse',
        'totam' => 'porro',
    ]

    $response = $sdk->sdk->postGetClubsForTopic($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetCreateChannelTargets

is fetched when you tap Create Room

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'dicta' => 'nam',
        'officia' => 'occaecati',
        'fugit' => 'deleniti',
    ]

    $response = $sdk->sdk->postGetCreateChannelTargets($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetFollowing

get a list of the users and clubs that this user is following. Returned users have bios truncated to ~80 characters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'optio' => 'totam',
        'beatae' => 'commodi',
        'molestiae' => 'modi',
        'qui' => 'impedit',
    ]

    $response = $sdk->sdk->postGetFollowing($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetOnlineFriends

gets online friends on the app homepage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'esse' => 'ipsum',
        'excepturi' => 'aspernatur',
        'perferendis' => 'ad',
    ]

    $response = $sdk->sdk->postGetOnlineFriends($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetProfile

looks up user profile by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'sed' => 'iste',
        'dolor' => 'natus',
        'laboriosam' => 'hic',
    ]

    $response = $sdk->sdk->postGetProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetReleaseNotes

gets release notes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->postGetReleaseNotes();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetSuggestedClubInvites

find users to invite to clubs based on phone number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'fuga' => 'in',
        'corporis' => 'iste',
        'iure' => 'saepe',
        'quidem' => 'architecto',
    ]

    $response = $sdk->sdk->postGetSuggestedClubInvites($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetSuggestedFollowsFriendsOnly

find people to follow by uploading contacts during signup

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'reiciendis' => 'est',
    ]

    $response = $sdk->sdk->postGetSuggestedFollowsFriendsOnly($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetSuggestedFollowsSimilar

find similar users. (The Sparkles button on Clubhouse's profile page)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'laborum' => 'dolores',
        'dolorem' => 'corporis',
        'explicabo' => 'nobis',
    ]

    $response = $sdk->sdk->postGetSuggestedFollowsSimilar($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetSuggestedInvites

(also see https://zerforschung.org/posts/clubhouse-telefonnummern-en/ for @zerforschung's analysis of the privacy implications of this API)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'omnis' => 'nemo',
        'minima' => 'excepturi',
    ]

    $response = $sdk->sdk->postGetSuggestedInvites($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetSuggestedSpeakers

gets suggested users when you start a private room

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'iure' => 'culpa',
    ]

    $response = $sdk->sdk->postGetSuggestedSpeakers($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetTopic

looks up topic by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'sapiente' => 'architecto',
        'mollitia' => 'dolorem',
        'culpa' => 'consequuntur',
        'repellat' => 'mollitia',
    ]

    $response = $sdk->sdk->postGetTopic($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postInviteFromWaitlist

wave to another user on the waitlist to give them access

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'numquam' => 'commodi',
        'quam' => 'molestiae',
        'velit' => 'error',
    ]

    $response = $sdk->sdk->postInviteFromWaitlist($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postInviteToApp

invite a user to the app, using one of your invites

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'quis' => 'vitae',
    ]

    $response = $sdk->sdk->postInviteToApp($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postJoinChannel

join a channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'animi' => 'enim',
        'odit' => 'quo',
        'sequi' => 'tenetur',
    ]

    $response = $sdk->sdk->postJoinChannel($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLeaveChannel

leave a channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'id' => 'possimus',
        'aut' => 'quasi',
    ]

    $response = $sdk->sdk->postLeaveChannel($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMe

gets user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'temporibus' => 'laborum',
        'quasi' => 'reiciendis',
        'voluptatibus' => 'vero',
    ]

    $response = $sdk->sdk->postMe($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRecordActionTrails

analytics

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'praesentium' => 'voluptatibus',
        'ipsa' => 'omnis',
    ]

    $response = $sdk->sdk->postRecordActionTrails($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRefreshToken

gets an access_token from a refresh_token.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'cum' => 'perferendis',
        'doloremque' => 'reprehenderit',
    ]

    $response = $sdk->sdk->postRefreshToken($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postResendPhoneNumberAuth

Resend phone number auth.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'maiores' => 'dicta',
        'corporis' => 'dolore',
    ]

    $response = $sdk->sdk->postResendPhoneNumberAuth($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSearchClubs

search clubs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'dicta' => 'harum',
        'enim' => 'accusamus',
    ]

    $response = $sdk->sdk->postSearchClubs($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSearchUsers

search for users

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'repudiandae' => 'quae',
        'ipsum' => 'quidem',
    ]

    $response = $sdk->sdk->postSearchUsers($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postStartPhoneNumberAuth

Starts phone number auth.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'excepturi' => 'pariatur',
        'modi' => 'praesentium',
        'rem' => 'voluptates',
    ]

    $response = $sdk->sdk->postStartPhoneNumberAuth($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateNotifications

updates notification during signup.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'repudiandae' => 'sint',
    ]

    $response = $sdk->sdk->postUpdateNotifications($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postUpdateUsername

edits username.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'itaque' => 'incidunt',
    ]

    $response = $sdk->sdk->postUpdateUsername($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
