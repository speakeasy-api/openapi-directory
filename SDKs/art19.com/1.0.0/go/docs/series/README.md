# Series

### Available Operations

* [GetSeries](#getseries) - Get a list of series
* [GetSeriesID](#getseriesid) - Get a specific series

## GetSeries

When retrieving a list of series, the result is automatically filtered depending on the
privileges the used credential holds. All credentials will have access to active series
with a public page enabled (on ART19). Utilizing a filter to limit the result to series
associated with your account is recommended.


### Example Usage

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
    res, err := s.Series.GetSeries(ctx, operations.GetSeriesRequest{
        AdRepAccountID: sdk.String("c4310661-e963-449e-9cf9-e06e3a437000"),
        Ids: []string{
            "e6b6bc9b-8f75-49ea-855a-9741d3113529",
            "65bb8a72-0261-4143-9e13-9dbc2259b1ab",
            "da8c070e-1084-4cb0-a72d-1ad879eeb966",
        },
        NetworkID: sdk.String("5b85efbd-02ba-4e0b-a2d7-82259e3ea4b5"),
        PageNumber: sdk.Int64(106255),
        PageSize: sdk.Int64(600213),
        Q: sdk.String("molestiae"),
        Sort: []GetSeriesSortEnum{
            operations.GetSeriesSortEnumSortTitle,
            operations.GetSeriesSortEnumCreatedAt,
            operations.GetSeriesSortEnumEpisodeReleasedAt,
            operations.GetSeriesSortEnumEpisodeReleasedAt,
        },
    }, operations.GetSeriesSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSeries200ApplicationVndAPIPlusJSONObject != nil {
        // handle response
    }
}
```

## GetSeriesID

Get a specific series

### Example Usage

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
    res, err := s.Series.GetSeriesID(ctx, operations.GetSeriesIDRequest{
        ID: "3da7ce52-b895-4c53-bc64-54efb0b34896",
    }, operations.GetSeriesIDSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSeriesID200ApplicationVndAPIPlusJSONObject != nil {
        // handle response
    }
}
```
