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
use \OpenAPI\OpenAPI\Models\Operations\GetNhArtRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNhArtRequest();
    $request->acceptVersion = 'corrupti';
    $request->xApiKey = '9bd9d8d6-9a67-44e0-b467-cc8796ed151a';
    $request->excludedetails = 'perferendis';
    $request->hasfake = 'ipsam';
    $request->thumbsize = 832620;

    $response = $sdk->getNhArt($request);

    if ($response->nhArtworks !== null) {
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

* [getNhArt](docs/sdk/README.md#getnhart) - All New Horizons artwork
* [getNhArtArtwork](docs/sdk/README.md#getnhartartwork) - Single New Horizons artwork
* [getNhBugs](docs/sdk/README.md#getnhbugs) - All New Horizons bugs
* [getNhBugsBug](docs/sdk/README.md#getnhbugsbug) - Single New Horizons bug
* [getNhClothing](docs/sdk/README.md#getnhclothing) - All New Horizons clothing
* [getNhClothingClothing](docs/sdk/README.md#getnhclothingclothing) - Single New Horizons clothing
* [getNhEvents](docs/sdk/README.md#getnhevents) - All New Horizons events
* [getNhFish](docs/sdk/README.md#getnhfish) - All New Horizons fish
* [getNhFishFish](docs/sdk/README.md#getnhfishfish) - Single New Horizons fish
* [getNhFossilsAll](docs/sdk/README.md#getnhfossilsall) - All New Horizons fossil groups or individual fossil
* [getNhFossilsAllFossil](docs/sdk/README.md#getnhfossilsallfossil) - Single New Horizons fossil group with individual fossils
* [getNhFossilsGroups](docs/sdk/README.md#getnhfossilsgroups) - All New Horizons fossil groups
* [getNhFossilsGroupsFossilGroup](docs/sdk/README.md#getnhfossilsgroupsfossilgroup) - Single New Horizons fossil group
* [getNhFossilsIndividuals](docs/sdk/README.md#getnhfossilsindividuals) - All New Horizons fossils
* [getNhFossilsIndividualsFossil](docs/sdk/README.md#getnhfossilsindividualsfossil) - Single New Horizons fossil
* [getNhFurniture](docs/sdk/README.md#getnhfurniture) - All New Horizons furniture
* [getNhFurnitureFurniture](docs/sdk/README.md#getnhfurniturefurniture) - Single New Horizons furniture
* [getNhInterior](docs/sdk/README.md#getnhinterior) - All New Horizons interior items
* [getNhInteriorItem](docs/sdk/README.md#getnhinterioritem) - Single New Horizons interior item
* [getNhItems](docs/sdk/README.md#getnhitems) - Miscellaneous New Horizons items
* [getNhItemsItem](docs/sdk/README.md#getnhitemsitem) - Single New Horizons miscellaneous item
* [getNhPhotos](docs/sdk/README.md#getnhphotos) - All New Horizons photos and posters
* [getNhPhotosItem](docs/sdk/README.md#getnhphotositem) - Single New Horizons photo or poster
* [getNhRecipes](docs/sdk/README.md#getnhrecipes) - All New Horizons recipes
* [getNhRecipesItem](docs/sdk/README.md#getnhrecipesitem) - Single New Horizons recipe
* [getNhSea](docs/sdk/README.md#getnhsea) - All New Horizons sea creatures
* [getNhSeaSeaCreature](docs/sdk/README.md#getnhseaseacreature) - Single New Horizons sea creature
* [getNhTools](docs/sdk/README.md#getnhtools) - All New Horizons tools
* [getNhToolsTool](docs/sdk/README.md#getnhtoolstool) - Single New Horizons tool
* [getVillagers](docs/sdk/README.md#getvillagers) - Villagers
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
