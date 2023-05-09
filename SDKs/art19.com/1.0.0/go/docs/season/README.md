# Season

### Available Operations

* [GetSeasons](#getseasons) - Get a list of seasons
* [GetSeasonsID](#getseasonsid) - Get a specific season

## GetSeasons

When retrieving a list of seasons, the result is automatically filtered depending on the
privileges the used credential holds. If there are no specific privileges to a series or network,
only active seasons for active series are included.


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
    res, err := s.Season.GetSeasons(ctx, operations.GetSeasonsRequest{
        Ids: []string{
            "e1ade008-e6f8-4c5f-b50d-8cdb5a341814",
            "30104218-13d5-4208-ace7-e253b668451c",
            "6c6e205e-16de-4ab3-bec9-578a64584273",
            "a8418d16-2309-4fb0-9299-21aefb9f58c4",
        },
        PageNumber: sdk.Int64(836364),
        PageSize: sdk.Int64(549501),
        Q: sdk.String("commodi"),
        SeriesID: sdk.String("e68e4be0-5601-43f5-9da7-57a59ecfef66"),
        Sort: []GetSeasonsSortEnum{
            operations.GetSeasonsSortEnumUpdatedAt,
            operations.GetSeasonsSortEnumCreatedAt,
            operations.GetSeasonsSortEnumUpdatedAt,
            operations.GetSeasonsSortEnumTitle,
        },
    }, operations.GetSeasonsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSeasons200ApplicationVndAPIPlusJSONObject != nil {
        // handle response
    }
}
```

## GetSeasonsID

Get a specific season

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
    res, err := s.Season.GetSeasonsID(ctx, operations.GetSeasonsIDRequest{
        ID: "a3383c2b-eb47-4737-bc8d-72f64d1db1f2",
    }, operations.GetSeasonsIDSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSeasonsID200ApplicationVndAPIPlusJSONObject != nil {
        // handle response
    }
}
```
