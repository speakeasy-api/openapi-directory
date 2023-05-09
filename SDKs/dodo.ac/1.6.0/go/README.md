# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/dodo.ac/1.6.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.GetNhArt(ctx, operations.GetNhArtRequest{
        AcceptVersion: "corrupti",
        XAPIKey: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
        Excludedetails: sdk.String("perferendis"),
        Hasfake: sdk.String("ipsam"),
        Thumbsize: sdk.Int64(832620),
    })
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

### [SDK](docs/sdk/README.md)

* [GetNhArt](docs/sdk/README.md#getnhart) - All New Horizons artwork
* [GetNhArtArtwork](docs/sdk/README.md#getnhartartwork) - Single New Horizons artwork
* [GetNhBugs](docs/sdk/README.md#getnhbugs) - All New Horizons bugs
* [GetNhBugsBug](docs/sdk/README.md#getnhbugsbug) - Single New Horizons bug
* [GetNhClothing](docs/sdk/README.md#getnhclothing) - All New Horizons clothing
* [GetNhClothingClothing](docs/sdk/README.md#getnhclothingclothing) - Single New Horizons clothing
* [GetNhEvents](docs/sdk/README.md#getnhevents) - All New Horizons events
* [GetNhFish](docs/sdk/README.md#getnhfish) - All New Horizons fish
* [GetNhFishFish](docs/sdk/README.md#getnhfishfish) - Single New Horizons fish
* [GetNhFossilsAll](docs/sdk/README.md#getnhfossilsall) - All New Horizons fossil groups or individual fossil
* [GetNhFossilsAllFossil](docs/sdk/README.md#getnhfossilsallfossil) - Single New Horizons fossil group with individual fossils
* [GetNhFossilsGroups](docs/sdk/README.md#getnhfossilsgroups) - All New Horizons fossil groups
* [GetNhFossilsGroupsFossilGroup](docs/sdk/README.md#getnhfossilsgroupsfossilgroup) - Single New Horizons fossil group
* [GetNhFossilsIndividuals](docs/sdk/README.md#getnhfossilsindividuals) - All New Horizons fossils
* [GetNhFossilsIndividualsFossil](docs/sdk/README.md#getnhfossilsindividualsfossil) - Single New Horizons fossil
* [GetNhFurniture](docs/sdk/README.md#getnhfurniture) - All New Horizons furniture
* [GetNhFurnitureFurniture](docs/sdk/README.md#getnhfurniturefurniture) - Single New Horizons furniture
* [GetNhInterior](docs/sdk/README.md#getnhinterior) - All New Horizons interior items
* [GetNhInteriorItem](docs/sdk/README.md#getnhinterioritem) - Single New Horizons interior item
* [GetNhItems](docs/sdk/README.md#getnhitems) - Miscellaneous New Horizons items
* [GetNhItemsItem](docs/sdk/README.md#getnhitemsitem) - Single New Horizons miscellaneous item
* [GetNhPhotos](docs/sdk/README.md#getnhphotos) - All New Horizons photos and posters
* [GetNhPhotosItem](docs/sdk/README.md#getnhphotositem) - Single New Horizons photo or poster
* [GetNhRecipes](docs/sdk/README.md#getnhrecipes) - All New Horizons recipes
* [GetNhRecipesItem](docs/sdk/README.md#getnhrecipesitem) - Single New Horizons recipe
* [GetNhSea](docs/sdk/README.md#getnhsea) - All New Horizons sea creatures
* [GetNhSeaSeaCreature](docs/sdk/README.md#getnhseaseacreature) - Single New Horizons sea creature
* [GetNhTools](docs/sdk/README.md#getnhtools) - All New Horizons tools
* [GetNhToolsTool](docs/sdk/README.md#getnhtoolstool) - Single New Horizons tool
* [GetVillagers](docs/sdk/README.md#getvillagers) - Villagers
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
