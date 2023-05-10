# assignment

## Overview

Create and list assignments

### Available Operations

* [deleteAssignmentsId](#deleteassignmentsid) - Delete this assignment and all of it's contributions
* [getAssignments](#getassignments) - List assignments
* [getAssignmentsId](#getassignmentsid) - Get a single assigment by id
* [postAssignments](#postassignments) - Create a new assignment

## deleteAssignmentsId

Delete this assignment and all of it's contributions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAssignmentsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAssignmentsIdRequest();
    $request->id = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';

    $response = $sdk->assignment->deleteAssignmentsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssignments

List assignments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssignmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssignmentsRequest();
    $request->alwaysOpen = false;
    $request->name = 'Jonathon Klocko';
    $request->open = false;
    $request->ownedBy = 'aspernatur';
    $request->page = 18789;
    $request->pageSize = 324141;
    $request->q = 'natus';
    $request->tag = 'sed';
    $request->urlWords = 'iste';

    $response = $sdk->assignment->getAssignments($request);

    if ($response->assignments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAssignmentsId

Get a single assigment by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssignmentsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssignmentsIdRequest();
    $request->id = '396fea75-96eb-410f-aaa2-352c5955907a';

    $response = $sdk->assignment->getAssignmentsId($request);

    if ($response->assignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAssignments

Create a new assignment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AssignmentSubmission;
use \OpenAPI\OpenAPI\Models\Shared\MediaUsage;
use \OpenAPI\OpenAPI\Models\Shared\Artifact;
use \OpenAPI\OpenAPI\Models\Shared\Media;
use \OpenAPI\OpenAPI\Models\Shared\Place;
use \OpenAPI\OpenAPI\Models\Shared\LatLong;
use \OpenAPI\OpenAPI\Models\Shared\OsmId;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TagSet;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssignmentSubmission();
    $request->allowsAnonymousContributions = false;
    $request->cover = new MediaUsage();
    $request->cover->artifacts = [
        new Artifact(),
        new Artifact(),
        new Artifact(),
        new Artifact(),
    ];
    $request->cover->id = 'f1a3a2fa-9467-4739-a51a-a52c3f5ad019';
    $request->cover->media = new Media();
    $request->cover->media->duration = 8379.45;
    $request->cover->media->id = 'a1ffe78f-097b-4007-8f15-471b5e6e13b9';
    $request->cover->media->place = new Place();
    $request->cover->media->place->country = 'Mayotte';
    $request->cover->media->place->geohash = 'pariatur';
    $request->cover->media->place->google = 'modi';
    $request->cover->media->place->latLong = new LatLong();
    $request->cover->media->place->latLong->latitude = 5089.69;
    $request->cover->media->place->latLong->longitude = 5232.48;
    $request->cover->media->place->name = 'Carl Waelchi DVM';
    $request->cover->media->place->osm = new OsmId();
    $request->cover->media->place->osm->osmId = 2777.18;
    $request->cover->media->place->osm->osmType = 'enim';
    $request->cover->media->type = 'consequatur';
    $request->description = 'est';
    $request->embargo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-09T16:21:07.003Z');
    $request->ends = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-27T01:56:50.693Z');
    $request->featured = false;
    $request->id = 'd4426980-2d50-42a9-8bb4-f63c969e9a3e';
    $request->mediaRequired = false;
    $request->moderator = 'a';
    $request->name = 'Arnold Kirlin';
    $request->receiptMessage = 'rerum';
    $request->starts = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-14T10:27:07.590Z');
    $request->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->urlWords = 'facere';

    $response = $sdk->assignment->postAssignments($request);

    if ($response->assignment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
