# collection

## Overview

Collections let you organize your content in a Flat account. They work like a regular _folder_ with some specificities:
  - Our design goal here is to create a system similar to a _book_ or a _playlist of songs_.
  - Collections can't have children collections (except the `trash` and `sharedWithMe` that are special collections).
  - Any score can be added to one or multiple collections. For example, you can have a single private score in two or more collections, or add any public or shared scores to one of your collections.

All the collections don't have the same capabilities. Capabilities depend on the `type` of collection and the `rights` you have on a collection. They are available when [listing the collection](#operation/listCollections) or [retrieving the collection details](#operation/getCollection).

At this time, only `private` privacy mode is widely available. Privacy modes `public`, `organizationPublic` and `privateLink`, and 1:1 sharing will be available in an upcoming update later this year.


### Available Operations

* [addScoreToCollection](#addscoretocollection) - Add a score to the collection
* [createCollection](#createcollection) - Create a new collection
* [deleteCollection](#deletecollection) - Delete the collection
* [deleteScoreFromCollection](#deletescorefromcollection) - Delete a score from the collection
* [editCollection](#editcollection) - Update a collection's metadata
* [getCollection](#getcollection) - Get collection details
* [listCollectionScores](#listcollectionscores) - List the scores contained in a collection
* [listCollections](#listcollections) - List the collections
* [untrashCollection](#untrashcollection) - Untrash a collection

## addScoreToCollection

This operation will add a score to a collection. The default behavior will make the score available across multiple collections.
You must have the capability `canAddScores` on the provided `collection` to perform the action.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddScoreToCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddScoreToCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddScoreToCollectionRequest();
    $request->collection = 'repellat';
    $request->score = 'mollitia';
    $request->sharingKey = 'occaecati';

    $requestSecurity = new AddScoreToCollectionSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collection->addScoreToCollection($request, $requestSecurity);

    if ($response->scoreDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCollection

This method will create a new collection and add it to your `root` collection.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CollectionCreation;
use \OpenAPI\OpenAPI\Models\Shared\CollectionPrivacyEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionCreation();
    $request->privacy = CollectionPrivacyEnum::PRIVATE;
    $request->title = 'Mrs.';

    $requestSecurity = new CreateCollectionSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collection->createCollection($request, $requestSecurity);

    if ($response->collection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCollection

This method will schedule the deletion of the collection. Until deleted, the collection will be available in the `trash`.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCollectionRequest();
    $request->collection = 'commodi';

    $requestSecurity = new DeleteCollectionSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collection->deleteCollection($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteScoreFromCollection

This method will delete a score from the collection. Unlike [`DELETE /scores/{score}`](#operation/deleteScore), this score will not remove the score from your account, but only from the collection.
This can be used to *move* a score from one collection to another, or simply remove a score from one collection when this one is contained in multiple collections.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScoreFromCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteScoreFromCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteScoreFromCollectionRequest();
    $request->collection = 'quam';
    $request->score = 'molestiae';
    $request->sharingKey = 'velit';

    $requestSecurity = new DeleteScoreFromCollectionSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collection->deleteScoreFromCollection($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## editCollection

Update a collection's metadata

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EditCollectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectionModification;
use \OpenAPI\OpenAPI\Models\Shared\CollectionPrivacyEnum;
use \OpenAPI\OpenAPI\Models\Operations\EditCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EditCollectionRequest();
    $request->collectionModification = new CollectionModification();
    $request->collectionModification->privacy = CollectionPrivacyEnum::PRIVATE;
    $request->collectionModification->title = 'Miss';
    $request->collection = 'quia';

    $requestSecurity = new EditCollectionSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collection->editCollection($request, $requestSecurity);

    if ($response->collection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCollection

Get collection details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCollectionRequest();
    $request->collection = 'quis';
    $request->sharingKey = 'vitae';

    $requestSecurity = new GetCollectionSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collection->getCollection($request, $requestSecurity);

    if ($response->collection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCollectionScores

Use this method to list the scores contained in a collection.
If no sort option is provided, the scores are sorted by `modificationDate` `desc`.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCollectionScoresRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCollectionScoresDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCollectionScoresSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCollectionScoresSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCollectionScoresRequest();
    $request->collection = 'laborum';
    $request->direction = ListCollectionScoresDirectionEnum::DESC;
    $request->limit = 317202;
    $request->next = 'odit';
    $request->previous = 'quo';
    $request->sharingKey = 'sequi';
    $request->sort = ListCollectionScoresSortEnum::TITLE;

    $requestSecurity = new ListCollectionScoresSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collection->listCollectionScores($request, $requestSecurity);

    if ($response->scoreDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCollections

Use this method to list the user's collections contained in `parent` (by default in the `root` collection).
If no sort option is provided, the collections are sorted by `creationDate` `desc`.

Note that this method will not include the `parent` collection in the listing.
For example, if you need the details of the `root` collection, you can use `GET /v2/collections/root`.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCollectionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCollectionsDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCollectionsSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCollectionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCollectionsRequest();
    $request->direction = ListCollectionsDirectionEnum::ASC;
    $request->limit = 662527;
    $request->next = 'possimus';
    $request->parent = 'aut';
    $request->previous = 'quasi';
    $request->sort = ListCollectionsSortEnum::TITLE;

    $requestSecurity = new ListCollectionsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collection->listCollections($request, $requestSecurity);

    if ($response->collections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untrashCollection

This method will restore the collection by removing it from the `trash` and add it back to the `root` collection.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UntrashCollectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntrashCollectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntrashCollectionRequest();
    $request->collection = 'temporibus';

    $requestSecurity = new UntrashCollectionSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->collection->untrashCollection($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
