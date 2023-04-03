# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/dodo.ac/1.5.0/go
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
    s := sdk.New()

    req := operations.GetNhArtRequest{
        AcceptVersion: "corrupti",
        XAPIKey: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
        Excludedetails: "perferendis",
        Hasfake: "ipsam",
        Thumbsize: 832620,
    }

    ctx := context.Background()
    res, err := s.GetNhArt(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.NHArtworks != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `GetNhArt` - All New Horizons artwork
* `GetNhArtArtwork` - Single New Horizons artwork
* `GetNhBugs` - All New Horizons bugs
* `GetNhBugsBug` - Single New Horizons bug
* `GetNhClothing` - All New Horizons clothing
* `GetNhClothingClothing` - Single New Horizons clothing
* `GetNhEvents` - All New Horizons events
* `GetNhFish` - All New Horizons fish
* `GetNhFishFish` - Single New Horizons fish
* `GetNhFossilsAll` - All New Horizons fossil groups or individual fossil
* `GetNhFossilsAllFossil` - Single New Horizons fossil group with individual fossils
* `GetNhFossilsGroups` - All New Horizons fossil groups
* `GetNhFossilsGroupsFossilGroup` - Single New Horizons fossil group
* `GetNhFossilsIndividuals` - All New Horizons fossils
* `GetNhFossilsIndividualsFossil` - Single New Horizons fossil
* `GetNhFurniture` - All New Horizons furniture
* `GetNhFurnitureFurniture` - Single New Horizons furniture
* `GetNhInterior` - All New Horizons interior items
* `GetNhInteriorItem` - Single New Horizons interior item
* `GetNhItems` - Miscellaneous New Horizons items
* `GetNhItemsItem` - Single New Horizons miscellaneous item
* `GetNhPhotos` - All New Horizons photos and posters
* `GetNhPhotosItem` - Single New Horizons photo or poster
* `GetNhRecipes` - All New Horizons recipes
* `GetNhRecipesItem` - Single New Horizons recipe
* `GetNhSea` - All New Horizons sea creatures
* `GetNhSeaSeaCreature` - Single New Horizons sea creature
* `GetNhTools` - All New Horizons tools
* `GetNhToolsTool` - Single New Horizons tool
* `GetVillagers` - Villagers
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
