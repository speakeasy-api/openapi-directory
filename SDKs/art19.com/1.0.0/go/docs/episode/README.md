# Episode

### Available Operations

* [GetEpisodes](#getepisodes) - Get a list of episodes
* [GetEpisodesID](#getepisodesid) - Get a specific episode
* [GetEpisodesIDNextSibling](#getepisodesidnextsibling) - Get the episode released right after the specified one
* [GetEpisodesIDPreviousSibling](#getepisodesidprevioussibling) - Get the episode released right before the specified one

## GetEpisodes

One initial filter must be provided (`ids`, `series_id`, or `season_id`), otherwise a `400 Bad Request` response
will be returned. Additional filters are allowed.

This API will only return episodes that your credential has permission to access, which may not be exclusive to
your account, depending on the filter(s) being used. Be careful to filter the results as needed.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Episode.GetEpisodes(ctx, operations.GetEpisodesRequest{
        Ids: []string{
            "5d2cff7c-70a4-4562-ad43-6813f16d9f5f",
            "ce6c5561-46c3-4e25-8fb0-08c42e141aac",
            "366c8dd6-b144-4290-b474-778a7bd466d2",
            "8c10ab3c-dca4-4251-904e-523c7e0bc717",
        },
        IncludedInInventoryCalendar: sdk.String("8e4796f2-a70c-4688-a82a-a482562f222e"),
        Month: sdk.String("occaecati"),
        PageNumber: 543806,
        PageSize: 92260,
        Published: sdk.Bool(false),
        Q: sdk.String("esse"),
        ReleasedAfter: types.MustTimeFromString("2020-05-10T03:57:05.694Z"),
        ReleasedBefore: types.MustTimeFromString("2022-07-17T14:37:45.086Z"),
        Rss: sdk.Bool(false),
        SeasonID: sdk.String("cbe61e6b-7b95-4bc0-ab3c-20c4f3789fd8"),
        SeriesID: sdk.String("71f99dd2-efd1-421a-a6f1-e674bdb04f15"),
        Sort: []GetEpisodesSortEnum{
            operations.GetEpisodesSortEnumReleasedAt,
            operations.GetEpisodesSortEnumReleasedAt,
        },
        Year: sdk.String("aut"),
    }, operations.GetEpisodesSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEpisodes200ApplicationVndAPIPlusJSONObject != nil {
        // handle response
    }
}
```

## GetEpisodesID

Get a specific episode

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
    res, err := s.Episode.GetEpisodesID(ctx, operations.GetEpisodesIDRequest{
        ID: "82d68ea1-9f1d-4170-9133-9d08086a1840",
    }, operations.GetEpisodesIDSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEpisodesID200ApplicationVndAPIPlusJSONObject != nil {
        // handle response
    }
}
```

## GetEpisodesIDNextSibling

Get the episode released right after the specified one

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
    res, err := s.Episode.GetEpisodesIDNextSibling(ctx, operations.GetEpisodesIDNextSiblingRequest{
        ID: "394c2607-1f93-4f5f-8642-dac7af515cc4",
        Rss: sdk.Bool(false),
    }, operations.GetEpisodesIDNextSiblingSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEpisodesIDNextSibling200ApplicationVndAPIPlusJSONObject != nil {
        // handle response
    }
}
```

## GetEpisodesIDPreviousSibling

Get the episode released right before the specified one

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
    res, err := s.Episode.GetEpisodesIDPreviousSibling(ctx, operations.GetEpisodesIDPreviousSiblingRequest{
        ID: "13aa63aa-e8d6-4786-8dbb-675fd5e60b37",
        Rss: sdk.Bool(false),
    }, operations.GetEpisodesIDPreviousSiblingSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEpisodesIDPreviousSibling200ApplicationVndAPIPlusJSONObject != nil {
        // handle response
    }
}
```
