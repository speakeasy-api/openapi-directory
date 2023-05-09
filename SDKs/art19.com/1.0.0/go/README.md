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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Classification.GetClassifications(ctx, operations.GetClassificationsRequest{
        Ids: []string{
            "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
            "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
            "b7392059-2939-46fe-a759-6eb10faaa235",
        },
        IsCountry: sdk.String("explicabo"),
        PageNumber: sdk.Int64(750686),
        PageSize: sdk.Int64(315428),
        Q: sdk.String("omnis"),
        Sort: []GetClassificationsSortEnum{
            operations.GetClassificationsSortEnumCreatedAt,
            operations.GetClassificationsSortEnumUpdatedAt,
        },
        Type: operations.GetClassificationsTypeEnumAlternateFeedType.ToPointer(),
    }, operations.GetClassificationsSecurity{
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


### [Classification](docs/classification/README.md)

* [GetClassifications](docs/classification/README.md#getclassifications) - Get a list of classifications
* [GetClassificationsID](docs/classification/README.md#getclassificationsid) - Get a specific classification

### [ClassificationInclusion](docs/classificationinclusion/README.md)

* [GetClassificationInclusions](docs/classificationinclusion/README.md#getclassificationinclusions) - Get ClassificationInclusion records
* [GetClassificationInclusionsID](docs/classificationinclusion/README.md#getclassificationinclusionsid) - Get a specific classification inclusion

### [Credit](docs/credit/README.md)

* [GetCredits](docs/credit/README.md#getcredits) - Get a list of credits
* [GetCreditsID](docs/credit/README.md#getcreditsid) - Get a specific credit

### [Episode](docs/episode/README.md)

* [GetEpisodes](docs/episode/README.md#getepisodes) - Get a list of episodes
* [GetEpisodesID](docs/episode/README.md#getepisodesid) - Get a specific episode
* [GetEpisodesIDNextSibling](docs/episode/README.md#getepisodesidnextsibling) - Get the episode released right after the specified one
* [GetEpisodesIDPreviousSibling](docs/episode/README.md#getepisodesidprevioussibling) - Get the episode released right before the specified one

### [Image](docs/image/README.md)

* [GetImages](docs/image/README.md#getimages) - Get a list of images
* [GetImagesID](docs/image/README.md#getimagesid) - Get a specific image

### [MediaAsset](docs/mediaasset/README.md)

* [GetMediaAssets](docs/mediaasset/README.md#getmediaassets) - Get a list of media assets
* [GetMediaAssetsID](docs/mediaasset/README.md#getmediaassetsid) - Get a specific media asset

### [Network](docs/network/README.md)

* [GetNetworks](docs/network/README.md#getnetworks) - Get a list of networks
* [GetNetworksID](docs/network/README.md#getnetworksid) - Get a specific network

### [Person](docs/person/README.md)

* [GetPeople](docs/person/README.md#getpeople) - Get a list of people
* [GetPeopleID](docs/person/README.md#getpeopleid) - Get a specific person

### [Season](docs/season/README.md)

* [GetSeasons](docs/season/README.md#getseasons) - Get a list of seasons
* [GetSeasonsID](docs/season/README.md#getseasonsid) - Get a specific season

### [Series](docs/series/README.md)

* [GetSeries](docs/series/README.md#getseries) - Get a list of series
* [GetSeriesID](docs/series/README.md#getseriesid) - Get a specific series
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
