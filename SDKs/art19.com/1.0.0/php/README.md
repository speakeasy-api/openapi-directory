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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationsSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClassificationsRequest();
    $request->ids = [
        '9bd9d8d6-9a67-44e0-b467-cc8796ed151a',
        '05dfc2dd-f7cc-478c-a1ba-928fc816742c',
        'b7392059-2939-46fe-a759-6eb10faaa235',
    ];
    $request->isCountry = 'explicabo';
    $request->pageNumber = 750686;
    $request->pageSize = 315428;
    $request->q = 'omnis';
    $request->sort = [
        GetClassificationsSortEnum::CREATED_AT,
        GetClassificationsSortEnum::UPDATED_AT,
    ];
    $request->type = GetClassificationsTypeEnum::ALTERNATE_FEED_TYPE;

    $requestSecurity = new GetClassificationsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->classification->getClassifications($request, $requestSecurity);

    if ($response->getClassifications200ApplicationVndApiPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [classification](docs/classification/README.md)

* [getClassifications](docs/classification/README.md#getclassifications) - Get a list of classifications
* [getClassificationsId](docs/classification/README.md#getclassificationsid) - Get a specific classification

### [classificationInclusion](docs/classificationinclusion/README.md)

* [getClassificationInclusions](docs/classificationinclusion/README.md#getclassificationinclusions) - Get ClassificationInclusion records
* [getClassificationInclusionsId](docs/classificationinclusion/README.md#getclassificationinclusionsid) - Get a specific classification inclusion

### [credit](docs/credit/README.md)

* [getCredits](docs/credit/README.md#getcredits) - Get a list of credits
* [getCreditsId](docs/credit/README.md#getcreditsid) - Get a specific credit

### [episode](docs/episode/README.md)

* [getEpisodes](docs/episode/README.md#getepisodes) - Get a list of episodes
* [getEpisodesId](docs/episode/README.md#getepisodesid) - Get a specific episode
* [getEpisodesIdNextSibling](docs/episode/README.md#getepisodesidnextsibling) - Get the episode released right after the specified one
* [getEpisodesIdPreviousSibling](docs/episode/README.md#getepisodesidprevioussibling) - Get the episode released right before the specified one

### [image](docs/image/README.md)

* [getImages](docs/image/README.md#getimages) - Get a list of images
* [getImagesId](docs/image/README.md#getimagesid) - Get a specific image

### [mediaAsset](docs/mediaasset/README.md)

* [getMediaAssets](docs/mediaasset/README.md#getmediaassets) - Get a list of media assets
* [getMediaAssetsId](docs/mediaasset/README.md#getmediaassetsid) - Get a specific media asset

### [network](docs/network/README.md)

* [getNetworks](docs/network/README.md#getnetworks) - Get a list of networks
* [getNetworksId](docs/network/README.md#getnetworksid) - Get a specific network

### [person](docs/person/README.md)

* [getPeople](docs/person/README.md#getpeople) - Get a list of people
* [getPeopleId](docs/person/README.md#getpeopleid) - Get a specific person

### [season](docs/season/README.md)

* [getSeasons](docs/season/README.md#getseasons) - Get a list of seasons
* [getSeasonsId](docs/season/README.md#getseasonsid) - Get a specific season

### [series](docs/series/README.md)

* [getSeries](docs/series/README.md#getseries) - Get a list of series
* [getSeriesId](docs/series/README.md#getseriesid) - Get a specific series
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
