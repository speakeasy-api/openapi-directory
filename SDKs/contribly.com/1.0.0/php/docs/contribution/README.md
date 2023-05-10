# contribution

## Overview

Submit, moderate and retrieve user contributions

### Available Operations

* [deleteContributionsId](#deletecontributionsid) - Delete this contribution
* [getContributionRefinementTypes](#getcontributionrefinementtypes) - List valid contribution refinement types
* [getContributionRefinements](#getcontributionrefinements) - List contribution refinement options
* [getContributions](#getcontributions) - List contributions
* [getContributionsId](#getcontributionsid) - Get a single contribution by id
* [getContributionsIdLikes](#getcontributionsidlikes) - List users who have liked this contributions
* [getExportsId](#getexportsid) - Get a single export job; poll to follow export progress.
* [postContributions](#postcontributions) - Create a new contribution
* [postContributionsIdFlag](#postcontributionsidflag) - Raise a flag against this contribution
* [postContributionsIdLike](#postcontributionsidlike) - Allows a user to mark a contribution as liked
* [postContributionsIdModerate](#postcontributionsidmoderate) - Perform a moderation action on this contribution
* [postExport](#postexport) - Export contributions.
* [postExportSummary](#postexportsummary) - Export contributions preflight summary.

## deleteContributionsId

Delete this contribution

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContributionsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteContributionsIdRequest();
    $request->id = '66ae395e-fb9b-4a88-b3a6-6997074ba446';

    $response = $sdk->contribution->deleteContributionsId($request);

    if ($response->contribution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContributionRefinementTypes

List valid contribution refinement types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->contribution->getContributionRefinementTypes();

    if ($response->getContributionRefinementTypes200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContributionRefinements

Given a contribution list query determine the available filter options. Can be used to generate the UI to refinement a filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContributionRefinementsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContributionRefinementsRequest();
    $request->assignment = 'natus';
    $request->country = 'Saint Helena';
    $request->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-14T08:45:31.579Z');
    $request->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-24T10:55:00.183Z');
    $request->geohash = 'magnam';
    $request->hasLocation = false;
    $request->latLong = 'et';
    $request->mediaType = 'excepturi';
    $request->ownedBy = 'ullam';
    $request->q = 'provident';
    $request->radius = 5518.16;
    $request->refinementSize = 5743.25;
    $request->refinements = 'accusantium';
    $request->urlWords = 'mollitia';
    $request->user = 'reiciendis';

    $response = $sdk->contribution->getContributionRefinements($request);

    if ($response->getContributionRefinements200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContributions

Retrieve contributions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContributionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContributionsRequest();
    $request->assignment = 'mollitia';
    $request->country = 'Germany';
    $request->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-12T05:44:19.260Z');
    $request->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-30T07:35:03.817Z');
    $request->createdDay = DateTime::createFromFormat('Y-m-d', '2022-11-26');
    $request->createdMonth = 'iure';
    $request->format = 'doloribus';
    $request->geohash = 'debitis';
    $request->hasLocation = false;
    $request->ids = 'eius';
    $request->latLong = 'maxime';
    $request->mediaType = 'deleniti';
    $request->ownedBy = 'facilis';
    $request->q = 'in';
    $request->radius = 1002.26;
    $request->urlWords = 'architecto';
    $request->user = 'repudiandae';

    $response = $sdk->contribution->getContributions($request);

    if ($response->contributions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContributionsId

Get a single contribution by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContributionsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContributionsIdRequest();
    $request->id = '5b7fd2ed-0289-421c-9dc6-92601fb576b0';

    $response = $sdk->contribution->getContributionsId($request);

    if ($response->contribution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContributionsIdLikes

Returns a list of user ids of users who have liked this conribution

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContributionsIdLikesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContributionsIdLikesRequest();
    $request->id = 'd5f0d30c-5fbb-4258-b053-202c73d5fe9b';

    $response = $sdk->contribution->getContributionsIdLikes($request);

    if ($response->getContributionsIdLikes200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExportsId

Get a single export job; poll to follow export progress.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetExportsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExportsIdRequest();
    $request->id = '90c28909-b3fe-449a-8d9c-bf48633323f9';

    $response = $sdk->contribution->getExportsId($request);

    if ($response->export !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postContributions

Create a new contribution

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Contribution;
use \OpenAPI\OpenAPI\Models\Shared\Assignment;
use \OpenAPI\OpenAPI\Models\Shared\MediaUsage;
use \OpenAPI\OpenAPI\Models\Shared\Artifact;
use \OpenAPI\OpenAPI\Models\Shared\Media;
use \OpenAPI\OpenAPI\Models\Shared\Place;
use \OpenAPI\OpenAPI\Models\Shared\LatLong;
use \OpenAPI\OpenAPI\Models\Shared\OsmId;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TagSet;
use \OpenAPI\OpenAPI\Models\Shared\ModerationHistoryItem;
use \OpenAPI\OpenAPI\Models\Shared\ModerationAction;
use \OpenAPI\OpenAPI\Models\Shared\ModerationState;
use \OpenAPI\OpenAPI\Models\Shared\Via;
use \OpenAPI\OpenAPI\Models\Shared\Authority;
use \OpenAPI\OpenAPI\Models\Shared\Client;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Operations\PostContributionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Contribution();
    $request->assignment = new Assignment();
    $request->assignment->allowsAnonymousContributions = false;
    $request->assignment->callToAction = 'cum';
    $request->assignment->cover = new MediaUsage();
    $request->assignment->cover->artifacts = [
        new Artifact(),
        new Artifact(),
    ];
    $request->assignment->cover->id = '7f3a4100-674e-4bf6-9280-d1ba77a89ebf';
    $request->assignment->cover->media = new Media();
    $request->assignment->cover->media->duration = 4694.97;
    $request->assignment->cover->media->id = '37ae4203-ce5e-46a9-9d8a-0d446ce2af7a';
    $request->assignment->cover->media->place = new Place();
    $request->assignment->cover->media->place->country = 'Lao People's Democratic Republic';
    $request->assignment->cover->media->place->geohash = 'ipsum';
    $request->assignment->cover->media->place->google = 'quisquam';
    $request->assignment->cover->media->place->latLong = new LatLong();
    $request->assignment->cover->media->place->latLong->latitude = 9473.71;
    $request->assignment->cover->media->place->latLong->longitude = 2294.42;
    $request->assignment->cover->media->place->name = 'Tomas Funk';
    $request->assignment->cover->media->place->osm = new OsmId();
    $request->assignment->cover->media->place->osm->osmId = 9574.51;
    $request->assignment->cover->media->place->osm->osmType = 'totam';
    $request->assignment->cover->media->type = 'nihil';
    $request->assignment->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-16T06:31:32.314Z');
    $request->assignment->description = 'neque';
    $request->assignment->embargo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-29T23:45:18.595Z');
    $request->assignment->ends = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-02T20:32:30.487Z');
    $request->assignment->featured = false;
    $request->assignment->id = 'a73429cd-b1a8-4422-bb67-9d2322715bf0';
    $request->assignment->mediaRequired = false;
    $request->assignment->moderator = 'cumque';
    $request->assignment->name = 'Robin Bosco';
    $request->assignment->open = false;
    $request->assignment->receiptMessage = 'veritatis';
    $request->assignment->starts = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-23T21:35:15.992Z');
    $request->assignment->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->assignment->urlWords = 'cupiditate';
    $request->assignment->webUrl = 'aperiam';
    $request->attribution = 'delectus';
    $request->body = 'dolorem';
    $request->created = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-18T06:37:26.413Z');
    $request->headline = 'adipisci';
    $request->id = 'a1108e0a-dcf4-4b92-9879-fce953f73ef7';
    $request->mediaUsages = [
        new MediaUsage(),
        new MediaUsage(),
        new MediaUsage(),
        new MediaUsage(),
    ];
    $request->moderationHistory = [
        new ModerationHistoryItem(),
        new ModerationHistoryItem(),
        new ModerationHistoryItem(),
    ];
    $request->place = new Place();
    $request->place->country = 'Sierra Leone';
    $request->place->geohash = 'odio';
    $request->place->google = 'similique';
    $request->place->latLong = new LatLong();
    $request->place->latLong->latitude = 7085.48;
    $request->place->latLong->longitude = 8742.88;
    $request->place->name = 'Joanne Sporer';
    $request->place->osm = new OsmId();
    $request->place->osm->osmId = 6178.77;
    $request->place->osm->osmType = 'impedit';
    $request->urlWords = 'aut';
    $request->via = new Via();
    $request->via->authority = new Authority();
    $request->via->authority->client = new Client();
    $request->via->authority->client->id = 'f5d2cff7-c70a-4456-a6d4-36813f16d9f5';
    $request->via->authority->client->name = 'Devin Ullrich';
    $request->via->authority->id = '556146c3-e250-4fb0-88c4-2e141aac366c';
    $request->via->authority->user = new User();
    $request->via->authority->user->bio = 'quas';
    $request->via->authority->user->displayName = 'assumenda';
    $request->via->authority->user->id = 'd6b14429-0747-4477-8a7b-d466d28c10ab';
    $request->via->authority->user->registered = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-22T18:37:41.743Z');
    $request->via->authority->user->username = 'Rosemarie.Sanford17';
    $request->via->ipAddress = 'voluptas';
    $request->via->ipAddressPlace = new Place();
    $request->via->ipAddressPlace->country = 'Bangladesh';
    $request->via->ipAddressPlace->geohash = 'cupiditate';
    $request->via->ipAddressPlace->google = 'consequatur';
    $request->via->ipAddressPlace->latLong = new LatLong();
    $request->via->ipAddressPlace->latLong->latitude = 2728.22;
    $request->via->ipAddressPlace->latLong->longitude = 8920.5;
    $request->via->ipAddressPlace->name = 'Kelly Donnelly';
    $request->via->ipAddressPlace->osm = new OsmId();
    $request->via->ipAddressPlace->osm->osmId = 9251.64;
    $request->via->ipAddressPlace->osm->osmType = 'aperiam';

    $requestSecurity = new PostContributionsSecurity();
    $requestSecurity->oauth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->contribution->postContributions($request, $requestSecurity);

    if ($response->contribution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postContributionsIdFlag

Allows end users to bring potential issues with publicly visible content to the attention of moderators.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostContributionsIdFlagRequest;
use \OpenAPI\OpenAPI\Models\Shared\Flag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostContributionsIdFlagRequest();
    $request->flag = new Flag();
    $request->flag->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-27T03:34:33.852Z');
    $request->flag->email = 'Arely_Kovacek@yahoo.com';
    $request->flag->id = '4796f2a7-0c68-4828-aaa4-82562f222e98';
    $request->flag->notes = 'et';
    $request->flag->type = 'esse';
    $request->id = 'ee17cbe6-1e6b-47b9-9bc0-ab3c20c4f378';

    $response = $sdk->contribution->postContributionsIdFlag($request);

    if ($response->flag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postContributionsIdLike

Allows a user to mark a contribution as liked

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostContributionsIdLikeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostContributionsIdLikeRequest();
    $request->id = '9fd871f9-9dd2-4efd-921a-a6f1e674bdb0';

    $response = $sdk->contribution->postContributionsIdLike($request);

    if ($response->postContributionsIdLike200ApplicationJSONNumber !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postContributionsIdModerate

Allows the contribution to approved of rejected.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostContributionsIdModerateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModerationHistoryItemSubmission;
use \OpenAPI\OpenAPI\Models\Shared\ModerationAction;
use \OpenAPI\OpenAPI\Models\Shared\ModerationState;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostContributionsIdModerateRequest();
    $request->moderationHistoryItemSubmission = new ModerationHistoryItemSubmission();
    $request->moderationHistoryItemSubmission->action = new ModerationAction();
    $request->moderationHistoryItemSubmission->action->id = '4f157560-82d6-48ea-99f1-d17051339d08';
    $request->moderationHistoryItemSubmission->action->label = 'aut';
    $request->moderationHistoryItemSubmission->action->resultingState = new ModerationState();
    $request->moderationHistoryItemSubmission->action->resultingState->id = '86a18403-94c2-4607-9f93-f5f0642dac7a';
    $request->moderationHistoryItemSubmission->action->resultingState->label = 'asperiores';
    $request->moderationHistoryItemSubmission->action->resultingState->public = false;
    $request->moderationHistoryItemSubmission->notes = 'nemo';
    $request->id = '15cc413a-a63a-4ae8-9678-64dbb675fd5e';

    $response = $sdk->contribution->postContributionsIdModerate($request);

    if ($response->postContributionsIdModerate200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postExport

Begin an export job. Returns a export job which can be polled to follow the progress of an export.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostExportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostExportRequest();
    $request->assignment = 'aliquid';
    $request->combined = false;
    $request->country = 'Aruba';
    $request->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-15T04:22:29.679Z');
    $request->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-26T18:58:12.703Z');
    $request->format = 'earum';
    $request->geohash = 'facere';
    $request->hasLocation = false;
    $request->individual = false;
    $request->json = false;
    $request->latLong = 'numquam';
    $request->mediaType = 'doloribus';
    $request->ownedBy = 'suscipit';
    $request->q = 'reiciendis';
    $request->radius = 6971.42;
    $request->tagged = false;
    $request->urlWords = 'saepe';
    $request->user = 'necessitatibus';

    $response = $sdk->contribution->postExport($request);

    if ($response->export !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postExportSummary

Provide a preflight summary of an export request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostExportSummaryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostExportSummaryRequest();
    $request->assignment = 'dolore';
    $request->country = 'Brazil';
    $request->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-11T12:10:44.801Z');
    $request->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-09T16:24:37.905Z');
    $request->geohash = 'beatae';
    $request->hasLocation = false;
    $request->latLong = 'dignissimos';
    $request->mediaType = 'a';
    $request->ownedBy = 'debitis';
    $request->q = 'consectetur';
    $request->radius = 3581.07;
    $request->urlWords = 'harum';
    $request->user = 'laboriosam';

    $response = $sdk->contribution->postExportSummary($request);

    if ($response->exportSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
