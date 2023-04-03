# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/bbci.co.uk/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GetProgrammesAtoZSearchRequest{
        Availability: "available",
        InitialChildCount: 592845,
        Letter: "distinctio",
        Page: 844266,
        PerPage: 602763,
        Rights: "web",
        Sort: "title",
        SortDirection: "desc",
    }

    ctx := context.Background()
    res, err := s.AToZ.GetProgrammesAtoZSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Ibl != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### AToZ

* `GetProgrammesAtoZSearch` - Programmes by initial title character

### Categories

* `GetCategories` - Get categories
* `GetSubCategories` - Get sub-categories

### Channels

* `GetChannels` - List all the channels.
* `GetHighlightsByChannel` - List the highlights for a channel.
* `GetScheduleByChannel` - Get schedule by channel

### Episodes

* `GetClips` - Get Clips
* `GetEpisodesByCategory` - List all the episodes for a category.
* `GetEpisodesByGroup` - Get episodes by group, brand or series
* `GetEpisodesByParentPID` - Child episodes for a given programme pid.
* `GetOnwardJourney` - Get Onward Journey
* `GetProgrammeByPID` - Episode for a given pid.
* `GetProgrammeRecommendations` - Get programme recommendations
* `GetProgrammesPopular` - Get programmes popular
* `GetTrailersPreRolls` - Get Trailers (pre-rolls)
* `GetPostRolls` - Get Follow-ups (post-rolls)

### Metadata

* `GetSchema` - Get schema
* `GetStatus` - Get status

### ProgrammesTLEOs

* `GetBroadcastsByChannel` - Get broadcasts by channel
* `GetHighlightsByCategory` - List the highlights for a category.
* `GetProgrammeHighlights` - Get programme highlights
* `GetProgrammesByCategory` - List all the programmes for a category.
* `GetProgrammesByChannel` - Get programmes by channel
* `GetProgrammesByParentPID` - Programme for a given pid.

### Regions

* `GetRegions` - List all regions

### Search

* `SearchSuggest` - Search-suggest
* `Search` - Search

### User

* `GetUserStorePurchases` - Get user store purchases
* `GetUserStoreRecommendations` - Get user store recommendations
* `GetUserWatching` - Get user watching
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
