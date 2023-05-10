# score

## Overview

Sheet music is the main API object type available for all Flat account.
Here is a typical lifecycle for a music score document on Flat:
  - An end user can **create a music score** or **import a document** using our [web interface](https://flat.io) or a third-party website/app (e.g. Google Drive) using this API (see [`POST /v2/scores`](#operation/createScore). The creation and import of music scores can be done with this single API endpoint. This one currently supports the [MusicXML](http://www.musicxml.com/) (compressed or not) and [MIDI](https://www.midi.org/specifications).
  - **List scores**:
    - The **owned scores** can be listed using the [collections API methods](#tag/Collection), especially [`GET /collections/{collection}/scores`](#operation/listCollectionScores).
    - The scores from a public account can be listed with [`GET /users/{user}/scores`](#operation/getUserScores).
    - Scores shared with a specific group can be listed with [`GET /groups/{group}/scores`](#operation/getGroupScores).
  - The metadata of a single score can be retrieved with [`GET /scores/{score}`](#operation/getScore).
  - Scores on Flat have **one or multiple revisions**: creating a new score will create a first revision. These **revisions can be listed** using [`GET /scores/{score}/revisions`](#operation/getScoreRevisions) and a specific **revision data can be downloaded** with [`GET /scores/{score}/revisions/{revision}/{format}`](#operation/getScoreRevisionData). New revisions can be created using our [sheet music editor](https://flat.io) or using [`POST /scores/{score}/revisions`](#operation/createScoreRevision) (this endpoint has similar parameters than during the score creation). The last revision of a document may not directly reflect the really last version of a music score: recent modifications can be made offline or not yet consolidated into a new revision. In average, a new revision is created every 100 modifications made with our editor.
  - Scores can be **shared publicly** by changing the privacy option with [`POST /scores/{score}`](#operation/editScore), or **individually shared** using the different collaborators API endpoints (see [`POST /scores/{score}/collaborators`](#operation/addScoreCollaborator)).


### Available Operations

* [addScoreCollaborator](#addscorecollaborator) - Add a new collaborator
* [addScoreTrack](#addscoretrack) - Add a new video or audio track to the score
* [createScore](#createscore) - Create a new score
* [createScoreRevision](#createscorerevision) - Create a new revision
* [deleteScore](#deletescore) - Delete a score
* [deleteScoreComment](#deletescorecomment) - Delete a comment
* [deleteScoreTrack](#deletescoretrack) - Remove an audio or video track linked to the score
* [editScore](#editscore) - Edit a score's metadata
* [forkScore](#forkscore) - Fork a score
* [gerUserLikes](#geruserlikes) - List liked scores
* [getGroupScores](#getgroupscores) - List group's scores
* [getScore](#getscore) - Get a score's metadata
* [getScoreCollaborator](#getscorecollaborator) - Get a collaborator
* [getScoreCollaborators](#getscorecollaborators) - List the collaborators
* [getScoreComments](#getscorecomments) - List comments
* [getScoreRevision](#getscorerevision) - Get a score revision
* [getScoreRevisionData](#getscorerevisiondata) - Get a score revision data
* [getScoreRevisions](#getscorerevisions) - List the revisions
* [getScoreSubmissions](#getscoresubmissions) - List submissions related to the score
* [getScoreTrack](#getscoretrack) - Retrieve the details of an audio or video track linked to a score
* [getUserScores](#getuserscores) - List user's scores
* [listScoreTracks](#listscoretracks) - List the audio or video tracks linked to a score
* [markScoreCommentResolved](#markscorecommentresolved) - Mark the comment as resolved
* [markScoreCommentUnresolved](#markscorecommentunresolved) - Mark the comment as unresolved
* [postScoreComment](#postscorecomment) - Post a new comment
* [removeScoreCollaborator](#removescorecollaborator) - Delete a collaborator
* [untrashScore](#untrashscore) - Untrash a score
* [updateScoreComment](#updatescorecomment) - Update an existing comment
* [updateScoreTrack](#updatescoretrack) - Update an audio or video track linked to a score

## addScoreCollaborator

Share a score with a single user or a group. This API call allows to add, invite and update the collaborators of a resource.
- To add an existing Flat user to the resource, specify its unique identifier in the `user` property.
- To invite an external user to the resource, specify its email in the `userEmail` property.
- To add a Flat group to the resource, specify its unique identifier in the `group` property.
- To update an existing collaborator, process the same request with different rights.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddScoreCollaboratorRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceCollaboratorCreation;
use \OpenAPI\OpenAPI\Models\Operations\AddScoreCollaboratorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddScoreCollaboratorRequest();
    $request->resourceCollaboratorCreation = new ResourceCollaboratorCreation();
    $request->resourceCollaboratorCreation->aclAdmin = false;
    $request->resourceCollaboratorCreation->aclRead = false;
    $request->resourceCollaboratorCreation->aclWrite = false;
    $request->resourceCollaboratorCreation->group = 'debitis';
    $request->resourceCollaboratorCreation->user = 'a';
    $request->resourceCollaboratorCreation->userEmail = 'dolorum';
    $request->resourceCollaboratorCreation->userToken = 'in';
    $request->score = 'in';

    $requestSecurity = new AddScoreCollaboratorSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->addScoreCollaborator($request, $requestSecurity);

    if ($response->resourceCollaborator !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addScoreTrack

Use this method to add new track to the score. This track can then be played on flat.io or in an embedded score.
This API method support medias hosted on SoundCloud, YouTube and Vimeo.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddScoreTrackRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScoreTrackCreation;
use \OpenAPI\OpenAPI\Models\Shared\ScoreTrackStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScoreTrackPoint;
use \OpenAPI\OpenAPI\Models\Shared\ScoreTrackPointTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AddScoreTrackSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddScoreTrackRequest();
    $request->scoreTrackCreation = new ScoreTrackCreation();
    $request->scoreTrackCreation->default = false;
    $request->scoreTrackCreation->state = ScoreTrackStateEnum::DELETED;
    $request->scoreTrackCreation->synchronizationPoints = [
        new ScoreTrackPoint(),
        new ScoreTrackPoint(),
        new ScoreTrackPoint(),
        new ScoreTrackPoint(),
    ];
    $request->scoreTrackCreation->title = 'Miss';
    $request->scoreTrackCreation->url = 'dicta';
    $request->score = 'magnam';

    $requestSecurity = new AddScoreTrackSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->addScoreTrack($request, $requestSecurity);

    if ($response->scoreTrack !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createScore

Use this API method to **create a new music score in the current User account**. You will need a MusicXML 3 (`vnd.recordare.musicxml` or `vnd.recordare.musicxml+xml`), a MIDI (`audio/midi`), Guitar Pro (GP3, GP4, GP5, GPX, GP), PowerTab, TuxGuitar, or MuseScore file to create the new Flat document.

This API call will automatically create the first revision of the document, the score can be modified by the using our web application or by uploading a new revision of this file (`POST /v2/scores/{score}/revisions/{revision}`).

The currently authenticated user will be granted owner of the file and will be able to add other collaborators (users and groups).

If no `collection` is specified, the API will create the score in the most appropriate collection. This can be the `root` collection or a different collection based on the user's settings or API authentication method.
If a `collection` is specified and this one has more public privacy settings than the score (e.g. `public` vs `private` for the score), the privacy settings of the created score will be adjusted to the collection ones.
You can check the adjusted privacy settings in the returned score `privacy`, and optionally adjust these settings if needed using `PUT /scores/{score}`.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ScoreCreation;
use \OpenAPI\OpenAPI\Models\Shared\ScoreCreationDataEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScorePrivacyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScoreSource;
use \OpenAPI\OpenAPI\Models\Operations\CreateScoreSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScoreCreation();
    $request->collection = 'cumque';
    $request->data = '<score-partwise version="3.0"></score-partwise>';
    $request->dataEncoding = ScoreCreationDataEncodingEnum::BASE64;
    $request->filename = 'facere';
    $request->googleDriveFolder = 'ea';
    $request->privacy = ScorePrivacyEnum::PRIVATE;
    $request->source = new ScoreSource();
    $request->source->googleDrive = 'laborum';
    $request->title = 'Dr.';

    $requestSecurity = new CreateScoreSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->createScore($request, $requestSecurity);

    if ($response->scoreDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createScoreRevision

Update a score by uploading a new revision for this one.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateScoreRevisionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScoreRevisionCreation;
use \OpenAPI\OpenAPI\Models\Shared\ScoreRevisionCreationDataEncodingEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateScoreRevisionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateScoreRevisionRequest();
    $request->scoreRevisionCreation = new ScoreRevisionCreation();
    $request->scoreRevisionCreation->autosave = false;
    $request->scoreRevisionCreation->data = '<score-partwise version="3.0"></score-partwise>';
    $request->scoreRevisionCreation->dataEncoding = ScoreRevisionCreationDataEncodingEnum::BASE64;
    $request->scoreRevisionCreation->description = 'non';
    $request->score = 'occaecati';

    $requestSecurity = new CreateScoreRevisionSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->createScoreRevision($request, $requestSecurity);

    if ($response->scoreRevision !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteScore

This method can be used by the owner/admin (`aclAdmin` rights) of a score as well as regular collaborators.

When called by an owner/admin, it will schedule the deletion of the score, its revisions, and complete history.
The score won't be accessible anymore after calling this method and the user's quota will directly be updated.

When called by a regular collaborator (`aclRead` / `aclWrite`), the score will be unshared (i.e. removed from the account & own collections).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScoreSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteScoreRequest();
    $request->now = false;
    $request->score = 'enim';

    $requestSecurity = new DeleteScoreSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->deleteScore($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteScoreComment

Delete a comment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScoreCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScoreCommentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteScoreCommentRequest();
    $request->comment = 'accusamus';
    $request->score = 'delectus';
    $request->sharingKey = 'quidem';

    $requestSecurity = new DeleteScoreCommentSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->deleteScoreComment($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteScoreTrack

Remove an audio or video track linked to the score

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScoreTrackRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScoreTrackSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteScoreTrackRequest();
    $request->score = 'provident';
    $request->track = 'nam';

    $requestSecurity = new DeleteScoreTrackSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->deleteScoreTrack($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## editScore

This API method allows you to change the metadata of a score document (e.g. its `title` or `privacy`), all the properties are optional.

To edit the file itself, create a new revision using the appropriate method (`POST /v2/scores/{score}/revisions/{revision}`).

When editing the `title`, `subtitle`, `composer`, `lyricist`, `arranger` or `licenseText`, the metadatas will be instantly be updated, and a real-time action will be pushed to update the document lazily.
This pending document modification will be automatically be saved as a new version by either a connected client or our internal versioning service.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EditScoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScoreModification;
use \OpenAPI\OpenAPI\Models\Shared\ScoreCreationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScoreLicenseEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScorePrivacyEnum;
use \OpenAPI\OpenAPI\Models\Operations\EditScoreSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EditScoreRequest();
    $request->scoreModification = new ScoreModification();
    $request->scoreModification->arranger = 'id';
    $request->scoreModification->composer = 'blanditiis';
    $request->scoreModification->creationType = ScoreCreationTypeEnum::ARRANGEMENT;
    $request->scoreModification->description = 'sapiente';
    $request->scoreModification->license = ScoreLicenseEnum::CC0;
    $request->scoreModification->licenseText = 'deserunt';
    $request->scoreModification->lyricist = 'nisi';
    $request->scoreModification->privacy = ScorePrivacyEnum::PRIVATE;
    $request->scoreModification->sharingKey = 'natus';
    $request->scoreModification->subtitle = 'omnis';
    $request->scoreModification->tags = [
        'perferendis',
        'nihil',
    ];
    $request->scoreModification->title = 'Mrs.';
    $request->score = 'distinctio';

    $requestSecurity = new EditScoreSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->editScore($request, $requestSecurity);

    if ($response->scoreDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## forkScore

This API call will make a copy of the last revision of the specified score and create a new score. The copy of the score will have a privacy set to `private`.

When using a [Flat for Education](https://flat.io/edu) account, the inline and contextualized comments will be accessible in the child document.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ForkScoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScoreFork;
use \OpenAPI\OpenAPI\Models\Operations\ForkScoreSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ForkScoreRequest();
    $request->scoreFork = new ScoreFork();
    $request->scoreFork->collection = 'id';
    $request->score = 'labore';
    $request->sharingKey = 'labore';

    $requestSecurity = new ForkScoreSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->forkScore($request, $requestSecurity);

    if ($response->scoreDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gerUserLikes

List liked scores

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GerUserLikesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GerUserLikesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GerUserLikesRequest();
    $request->ids = false;
    $request->user = 'suscipit';

    $requestSecurity = new GerUserLikesSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->gerUserLikes($request, $requestSecurity);

    if ($response->scoreDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGroupScores

Get the list of scores shared with a group.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupScoresRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupScoresSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupScoresRequest();
    $request->group = 'natus';
    $request->parent = 'nobis';

    $requestSecurity = new GetGroupScoresSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->getGroupScores($request, $requestSecurity);

    if ($response->scoreDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScore

Get the details of a score identified by the `score` parameter in the URL.
The currently authenticated user must have at least a read access to the document to use this API call.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScoreRequest();
    $request->score = 'eum';
    $request->sharingKey = 'vero';

    $requestSecurity = new GetScoreSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->getScore($request, $requestSecurity);

    if ($response->scoreDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScoreCollaborator

Get the information about a collaborator (User or Group).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreCollaboratorRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreCollaboratorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScoreCollaboratorRequest();
    $request->collaborator = 'aspernatur';
    $request->score = 'architecto';
    $request->sharingKey = 'magnam';

    $requestSecurity = new GetScoreCollaboratorSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->getScoreCollaborator($request, $requestSecurity);

    if ($response->resourceCollaborator !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScoreCollaborators

This API call will list the different collaborators of a score and their rights on the document. The returned list will at least contain the owner of the document.

Collaborators can be a single user (the object `user` will be populated) or a group (the object `group` will be populated).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreCollaboratorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreCollaboratorsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScoreCollaboratorsRequest();
    $request->score = 'et';
    $request->sharingKey = 'excepturi';

    $requestSecurity = new GetScoreCollaboratorsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->getScoreCollaborators($request, $requestSecurity);

    if ($response->resourceCollaborators !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScoreComments

This method lists the different comments added on a music score (documents and inline) sorted by their post dates.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreCommentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreCommentsDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreCommentsSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreCommentsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreCommentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScoreCommentsRequest();
    $request->direction = GetScoreCommentsDirectionEnum::ASC;
    $request->score = 'provident';
    $request->sharingKey = 'quos';
    $request->sort = GetScoreCommentsSortEnum::DATE;
    $request->type = GetScoreCommentsTypeEnum::INLINE;

    $requestSecurity = new GetScoreCommentsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->getScoreComments($request, $requestSecurity);

    if ($response->scoreComments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScoreRevision

When creating a score or saving a new version of a score, a revision is created in our storage. This method allows you to get a specific
revision metadata.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreRevisionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreRevisionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScoreRevisionRequest();
    $request->revision = 'accusantium';
    $request->score = 'mollitia';
    $request->sharingKey = 'reiciendis';

    $requestSecurity = new GetScoreRevisionSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->getScoreRevision($request, $requestSecurity);

    if ($response->scoreRevision !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScoreRevisionData

Retrieve the file corresponding to a score revision (the following formats are available): Flat JSON/Adagio JSON `json`, MusicXML
`mxl`/`xml`, MP3 `mp3`, WAV `wav`, MIDI `midi`, a tumbnail of the first page `thumbnail.png` or auto sync points `synchronizationPoints`.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreRevisionDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreRevisionDataFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreRevisionDataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScoreRevisionDataRequest();
    $request->format = GetScoreRevisionDataFormatEnum::MIDI;
    $request->onlyCached = false;
    $request->parts = 'ad';
    $request->revision = 'eum';
    $request->score = 'dolor';
    $request->sharingKey = 'necessitatibus';
    $request->url = false;

    $requestSecurity = new GetScoreRevisionDataSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->getScoreRevisionData($request, $requestSecurity);

    if ($response->getScoreRevisionData200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScoreRevisions

When creating a score or saving a new version of a score, a revision is created in our storage. This method allows you to list all of them, sorted by last modification.

Depending the plan of the account, this list can be trunked to the few last revisions.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreRevisionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreRevisionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScoreRevisionsRequest();
    $request->score = 'odit';
    $request->sharingKey = 'nemo';

    $requestSecurity = new GetScoreRevisionsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->getScoreRevisions($request, $requestSecurity);

    if ($response->scoreRevisions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScoreSubmissions

This API call will list the different assignments submissions where the score is attached. This method can be used by anyone that are part of the organization and have at least read access to the document.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreSubmissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreSubmissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScoreSubmissionsRequest();
    $request->score = 'quasi';

    $requestSecurity = new GetScoreSubmissionsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->getScoreSubmissions($request, $requestSecurity);

    if ($response->assignmentSubmissions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScoreTrack

Retrieve the details of an audio or video track linked to a score

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreTrackRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetScoreTrackSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScoreTrackRequest();
    $request->score = 'iure';
    $request->sharingKey = 'doloribus';
    $request->track = 'debitis';

    $requestSecurity = new GetScoreTrackSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->getScoreTrack($request, $requestSecurity);

    if ($response->scoreTrack !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserScores

Get the list of public scores owned by a User.

**DEPRECATED**: Please note that the current behavior will be deprecrated on **2019-01-01**.
This method will no longer list private and shared scores, but only public scores of a Flat account.
If you want to access to private scores, please use the [Collections API](#tag/Collection) instead.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUserScoresRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserScoresSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserScoresRequest();
    $request->parent = 'eius';
    $request->user = 'maxime';

    $requestSecurity = new GetUserScoresSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->getUserScores($request, $requestSecurity);

    if ($response->scoreDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listScoreTracks

List the audio or video tracks linked to a score

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListScoreTracksRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListScoreTracksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListScoreTracksRequest();
    $request->assignment = 'deleniti';
    $request->listAutoTrack = false;
    $request->score = 'facilis';
    $request->sharingKey = 'in';

    $requestSecurity = new ListScoreTracksSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->listScoreTracks($request, $requestSecurity);

    if ($response->scoreTracks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## markScoreCommentResolved

Mark the comment as resolved

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MarkScoreCommentResolvedRequest;
use \OpenAPI\OpenAPI\Models\Operations\MarkScoreCommentResolvedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MarkScoreCommentResolvedRequest();
    $request->comment = 'architecto';
    $request->score = 'architecto';
    $request->sharingKey = 'repudiandae';

    $requestSecurity = new MarkScoreCommentResolvedSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->markScoreCommentResolved($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## markScoreCommentUnresolved

Mark the comment as unresolved

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MarkScoreCommentUnresolvedRequest;
use \OpenAPI\OpenAPI\Models\Operations\MarkScoreCommentUnresolvedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MarkScoreCommentUnresolvedRequest();
    $request->comment = 'ullam';
    $request->score = 'expedita';
    $request->sharingKey = 'nihil';

    $requestSecurity = new MarkScoreCommentUnresolvedSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->markScoreCommentUnresolved($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postScoreComment

Post a document or a contextualized comment on a document.

Please note that this method includes an anti-spam system for public scores. We don't guarantee that your comments will be accepted and displayed to end-user. Comments are be blocked by returning a `403` HTTP error and hidden from other users when the `spam` property is `true`.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostScoreCommentRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScoreCommentCreation;
use \OpenAPI\OpenAPI\Models\Shared\ScoreCommentContext;
use \OpenAPI\OpenAPI\Models\Operations\PostScoreCommentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostScoreCommentRequest();
    $request->scoreCommentCreation = new ScoreCommentCreation();
    $request->scoreCommentCreation->comment = 'repellat';
    $request->scoreCommentCreation->context = new ScoreCommentContext();
    $request->scoreCommentCreation->context->measureUuids = [
        'sed',
        'saepe',
        'pariatur',
        'accusantium',
    ];
    $request->scoreCommentCreation->context->partUuid = 'consequuntur';
    $request->scoreCommentCreation->context->staffIdx = 5083.15;
    $request->scoreCommentCreation->context->staffUuid = 'natus';
    $request->scoreCommentCreation->context->startDpq = 1668.47;
    $request->scoreCommentCreation->context->startTimePos = 1238.2;
    $request->scoreCommentCreation->context->stopDpq = 7790.51;
    $request->scoreCommentCreation->context->stopTimePos = 8480.09;
    $request->scoreCommentCreation->mentions = [
        'maxime',
        'ea',
        'excepturi',
        'odit',
    ];
    $request->scoreCommentCreation->rawComment = 'ea';
    $request->scoreCommentCreation->replyTo = 'accusantium';
    $request->scoreCommentCreation->revision = 'ab';
    $request->score = 'maiores';
    $request->sharingKey = 'quidem';

    $requestSecurity = new PostScoreCommentSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->postScoreComment($request, $requestSecurity);

    if ($response->scoreComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeScoreCollaborator

Remove the specified collaborator from the score


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemoveScoreCollaboratorRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveScoreCollaboratorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveScoreCollaboratorRequest();
    $request->collaborator = 'ipsam';
    $request->score = 'voluptate';

    $requestSecurity = new RemoveScoreCollaboratorSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->removeScoreCollaborator($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untrashScore

This method will remove the score from the `trash` collection and from the deletion queue, and add it back to the original collections.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UntrashScoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntrashScoreSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntrashScoreRequest();
    $request->score = 'autem';

    $requestSecurity = new UntrashScoreSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->untrashScore($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateScoreComment

Update an existing comment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateScoreCommentRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScoreCommentUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ScoreCommentContext;
use \OpenAPI\OpenAPI\Models\Operations\UpdateScoreCommentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateScoreCommentRequest();
    $request->scoreCommentUpdate = new ScoreCommentUpdate();
    $request->scoreCommentUpdate->comment = 'nam';
    $request->scoreCommentUpdate->context = new ScoreCommentContext();
    $request->scoreCommentUpdate->context->measureUuids = [
        'pariatur',
    ];
    $request->scoreCommentUpdate->context->partUuid = 'nemo';
    $request->scoreCommentUpdate->context->staffIdx = 9755.22;
    $request->scoreCommentUpdate->context->staffUuid = 'perferendis';
    $request->scoreCommentUpdate->context->startDpq = 8558.04;
    $request->scoreCommentUpdate->context->startTimePos = 2307.42;
    $request->scoreCommentUpdate->context->stopDpq = 117.14;
    $request->scoreCommentUpdate->context->stopTimePos = 7649.12;
    $request->scoreCommentUpdate->rawComment = 'corporis';
    $request->scoreCommentUpdate->revision = 'hic';
    $request->comment = 'libero';
    $request->score = 'nobis';
    $request->sharingKey = 'dolores';

    $requestSecurity = new UpdateScoreCommentSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->updateScoreComment($request, $requestSecurity);

    if ($response->scoreComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateScoreTrack

Update an audio or video track linked to a score

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateScoreTrackRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScoreTrackUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ScoreTrackStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScoreTrackPoint;
use \OpenAPI\OpenAPI\Models\Shared\ScoreTrackPointTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateScoreTrackSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateScoreTrackRequest();
    $request->scoreTrackUpdate = new ScoreTrackUpdate();
    $request->scoreTrackUpdate->default = false;
    $request->scoreTrackUpdate->state = ScoreTrackStateEnum::COMPLETED;
    $request->scoreTrackUpdate->synchronizationPoints = [
        new ScoreTrackPoint(),
        new ScoreTrackPoint(),
        new ScoreTrackPoint(),
    ];
    $request->scoreTrackUpdate->title = 'Ms.';
    $request->score = 'eaque';
    $request->track = 'quis';

    $requestSecurity = new UpdateScoreTrackSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->score->updateScoreTrack($request, $requestSecurity);

    if ($response->scoreTrack !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
