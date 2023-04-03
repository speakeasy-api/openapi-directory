# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/art19.com/1.0.0/go
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

    req := operations.GetClassificationsRequest{
        Ids: []string{
            "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
            "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
            "b7392059-2939-46fe-a759-6eb10faaa235",
        },
        IsCountry: "explicabo",
        PageNumber: 750686,
        PageSize: 315428,
        Q: "omnis",
        Sort: []GetClassificationsSortEnum{
            "created_at",
            "updated_at",
        },
        Type: "AlternateFeedType",
    }

    ctx := context.Background()
    res, err := s.Classification.GetClassifications(ctx, req, operations.GetClassificationsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClassifications200ApplicationVndAPIPlusJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Classification

* `GetClassifications` - Get a list of classifications
* `GetClassificationsID` - Get a specific classification

### ClassificationInclusion

* `GetClassificationInclusions` - Get ClassificationInclusion records
* `GetClassificationInclusionsID` - Get a specific classification inclusion

### Credit

* `GetCredits` - Get a list of credits
* `GetCreditsID` - Get a specific credit

### Episode

* `GetEpisodes` - Get a list of episodes
* `GetEpisodesID` - Get a specific episode
* `GetEpisodesIDNextSibling` - Get the episode released right after the specified one
* `GetEpisodesIDPreviousSibling` - Get the episode released right before the specified one

### Image

* `GetImages` - Get a list of images
* `GetImagesID` - Get a specific image

### MediaAsset

* `GetMediaAssets` - Get a list of media assets
* `GetMediaAssetsID` - Get a specific media asset

### Network

* `GetNetworks` - Get a list of networks
* `GetNetworksID` - Get a specific network

### Person

* `GetPeople` - Get a list of people
* `GetPeopleID` - Get a specific person

### Season

* `GetSeasons` - Get a list of seasons
* `GetSeasonsID` - Get a specific season

### Series

* `GetSeries` - Get a list of series
* `GetSeriesID` - Get a specific series
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
