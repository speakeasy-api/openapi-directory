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


### aToZ

* `getProgrammesAtoZSearch` - Programmes by initial title character

### categories

* `getCategories` - Get categories
* `getSubCategories` - Get sub-categories

### channels

* `getChannels` - List all the channels.
* `getHighlightsByChannel` - List the highlights for a channel.
* `getScheduleByChannel` - Get schedule by channel

### episodes

* `getClips` - Get Clips
* `getEpisodesByCategory` - List all the episodes for a category.
* `getEpisodesByGroup` - Get episodes by group, brand or series
* `getEpisodesByParentPID` - Child episodes for a given programme pid.
* `getOnwardJourney` - Get Onward Journey
* `getProgrammeByPID` - Episode for a given pid.
* `getProgrammeRecommendations` - Get programme recommendations
* `getProgrammesPopular` - Get programmes popular
* `getTrailersPreRolls` - Get Trailers (pre-rolls)
* `getPostRolls` - Get Follow-ups (post-rolls)

### metadata

* `getSchema` - Get schema
* `getStatus` - Get status

### programmesTLEOs

* `getBroadcastsByChannel` - Get broadcasts by channel
* `getHighlightsByCategory` - List the highlights for a category.
* `getProgrammeHighlights` - Get programme highlights
* `getProgrammesByCategory` - List all the programmes for a category.
* `getProgrammesByChannel` - Get programmes by channel
* `getProgrammesByParentPID` - Programme for a given pid.

### regions

* `getRegions` - List all regions

### search

* `searchSuggest` - Search-suggest
* `search` - Search

### user

* `getUserStorePurchases` - Get user store purchases
* `getUserStoreRecommendations` - Get user store recommendations
* `getUserWatching` - Get user watching
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
