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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### classification

* `getClassifications` - Get a list of classifications
* `getClassificationsId` - Get a specific classification

### classificationInclusion

* `getClassificationInclusions` - Get ClassificationInclusion records
* `getClassificationInclusionsId` - Get a specific classification inclusion

### credit

* `getCredits` - Get a list of credits
* `getCreditsId` - Get a specific credit

### episode

* `getEpisodes` - Get a list of episodes
* `getEpisodesId` - Get a specific episode
* `getEpisodesIdNextSibling` - Get the episode released right after the specified one
* `getEpisodesIdPreviousSibling` - Get the episode released right before the specified one

### image

* `getImages` - Get a list of images
* `getImagesId` - Get a specific image

### mediaAsset

* `getMediaAssets` - Get a list of media assets
* `getMediaAssetsId` - Get a specific media asset

### network

* `getNetworks` - Get a list of networks
* `getNetworksId` - Get a specific network

### person

* `getPeople` - Get a list of people
* `getPeopleId` - Get a specific person

### season

* `getSeasons` - Get a list of seasons
* `getSeasonsId` - Get a specific season

### series

* `getSeries` - Get a list of series
* `getSeriesId` - Get a specific series
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
