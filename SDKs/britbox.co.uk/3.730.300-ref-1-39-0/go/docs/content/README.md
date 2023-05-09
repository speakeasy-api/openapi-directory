# Content

### Available Operations

* [GetAnonNextPlaybackItem](#getanonnextplaybackitem) - Identical to GET /account/profile/items/{itemId}/next route but for users
that are not logged in i.e. this endpoint does not require authorisation

* [GetItem](#getitem) - Returns the details of an item with the specified id.
* [GetItemChildrenList](#getitemchildrenlist) - Returns the List of child summary items under an item.

If the item is a Season then the children will be episodes and ordered by episode number.

If the item is a Show then the children will be Seasons and ordered by season number.

Returns 404 if no children found.

* [GetItemDownloadables](#getitemdownloadables) - Returns the details of an item with the specified id.
* [GetItemRelatedList](#getitemrelatedlist) - Returns the list of items related to the parent item.

Note for now, due to the size of the list being unknown, only a single page will be returned.

* [GetItemsMediaClipFiles](#getitemsmediaclipfiles) - Get the media clip files associated with items.

* [GetList](#getlist) - Returns a list of items under the specified item list
* [GetLists](#getlists) - Returns an array of item lists with their first page of content resolved.
* [GetPublicItemMediaFiles](#getpublicitemmediafiles) - Get the free / public video files associated with an item given maximum resolution,
device type and one or more delivery types.

Returns an array of video file objects which each include a url to a video.

The first entry in the array contains what is predicted to be the best match.
The remainder of the entries, if any, may contain resolutions below what was
requests. For example if you request HD-720 the response may also contain
SD entries.

If you specify multiple delivery types, then the response array will insert
types in the order you specify them in the query. For example `stream,progressive`
would return an array with 0 or more stream files followed by 0 or more progressive files.

If no files are found a 404 is returned.

* [GetSchedules](#getschedules) - Returns schedules for a defined set of channels over a requested period.

Schedules are requested in hour blocks and returned grouped by the channel
they belong to.

For example, to load 12 hours of schedules for channels `4343` and `5234`,
on 21/2/2017 starting from 08:00.

```
channels=4343,5234
date=2017-02-21
hour=8
duration=12
```

Please remember that `date` and `hour` combined represent a normal datetime, 
so they should be converted to UTC on the client - this will help to avoid 
issues with EPG schedules near midnight.

If a channel id is passed which doesn't exist then this endpoint will
return an empty schedule list for it. If instead we returned 404,
this would invalidate all other channel schedules in the same request
which would be unfriendly for clients presenting these channel schedules.

* [GetPlansID](#getplansid) - Returns the details of a Plan with the specified id.
* [Search](#search) - Search the catalog of items and people.

## GetAnonNextPlaybackItem

Identical to GET /account/profile/items/{itemId}/next route but for users
that are not logged in i.e. this endpoint does not require authorisation


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Content.GetAnonNextPlaybackItem(ctx, operations.GetAnonNextPlaybackItemRequest{
        Device: sdk.String("natus"),
        Expand: operations.GetAnonNextPlaybackItemExpandEnumParent.ToPointer(),
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumLdp,
            shared.FeatureFlagsEnumCd,
            shared.FeatureFlagsEnumAll,
            shared.FeatureFlagsEnumHb,
        },
        ItemID: "quaerat",
        Lang: sdk.String("consequuntur"),
        MaxRating: sdk.String("repellendus"),
        Segments: []string{
            "maxime",
            "dignissimos",
            "officia",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NextPlaybackItem != nil {
        // handle response
    }
}
```

## GetItem

Returns the details of an item with the specified id.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Content.GetItem(ctx, operations.GetItemRequest{
        Device: sdk.String("asperiores"),
        Expand: operations.GetItemExpandEnumChildren.ToPointer(),
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumLdp,
        },
        ID: "cc413aa6-3aae-48d6-b864-dbb675fd5e60",
        Lang: sdk.String("cum"),
        MaxRating: sdk.String("consectetur"),
        Segments: []string{
            "exercitationem",
            "earum",
        },
        SelectSeason: operations.GetItemSelectSeasonEnumLatest.ToPointer(),
        Sub: sdk.String("numquam"),
        UseCustomID: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemDetail != nil {
        // handle response
    }
}
```

## GetItemChildrenList

Returns the List of child summary items under an item.

If the item is a Season then the children will be episodes and ordered by episode number.

If the item is a Show then the children will be Seasons and ordered by season number.

Returns 404 if no children found.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Content.GetItemChildrenList(ctx, operations.GetItemChildrenListRequest{
        Device: sdk.String("doloribus"),
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumCd,
            shared.FeatureFlagsEnumCas,
        },
        ID: "ee41f333-17fe-435b-a0eb-1ea426555ba3",
        Lang: sdk.String("minus"),
        MaxRating: sdk.String("dolores"),
        Order: shared.ListOrderEnumDesc.ToPointer(),
        Page: sdk.Int(449292),
        PageSize: sdk.Int(296242),
        Segments: []string{
            "officiis",
            "temporibus",
        },
        Sub: sdk.String("ullam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemList != nil {
        // handle response
    }
}
```

## GetItemDownloadables

Returns the details of an item with the specified id.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Content.GetItemDownloadables(ctx, operations.GetItemDownloadablesRequest{
        ItemDownloadableRequest: shared.ItemDownloadableRequest{
            Ids: "adipisci",
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumRpt,
            shared.FeatureFlagsEnumRpt,
            shared.FeatureFlagsEnumCd,
        },
        Lang: sdk.String("nesciunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemDownloadableList != nil {
        // handle response
    }
}
```

## GetItemRelatedList

Returns the list of items related to the parent item.

Note for now, due to the size of the list being unknown, only a single page will be returned.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Content.GetItemRelatedList(ctx, operations.GetItemRelatedListRequest{
        Device: sdk.String("culpa"),
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumLrl,
            shared.FeatureFlagsEnumRpt,
            shared.FeatureFlagsEnumCd,
        },
        ID: "5c0b2f2f-b7b1-494a-a76b-26916fe1f08f",
        Lang: sdk.String("incidunt"),
        MaxRating: sdk.String("sed"),
        Page: sdk.Int(592231),
        PageSize: sdk.Int(258702),
        Segments: []string{
            "ipsum",
            "ea",
            "occaecati",
            "quos",
        },
        Sub: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemList != nil {
        // handle response
    }
}
```

## GetItemsMediaClipFiles

Get the media clip files associated with items.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Content.GetItemsMediaClipFiles(ctx, operations.GetItemsMediaClipFilesRequest{
        ItemDownloadableRequest: shared.ItemDownloadableRequest{
            Ids: "tempora",
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumHb,
            shared.FeatureFlagsEnumCd,
        },
        Lang: sdk.String("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemClipFilesList != nil {
        // handle response
    }
}
```

## GetList

Returns a list of items under the specified item list

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Content.GetList(ctx, operations.GetListRequest{
        Device: sdk.String("sit"),
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumCd,
        },
        ID: "8b445e80-ca55-4efd-a0e4-57e1858b6a89",
        ItemType: shared.ItemTypeEnumCustomAsset.ToPointer(),
        Lang: sdk.String("expedita"),
        MaxRating: sdk.String("debitis"),
        Order: shared.ListOrderEnumAsc.ToPointer(),
        OrderBy: shared.ListOrderByEnumDateAdded.ToPointer(),
        Page: sdk.Int(341698),
        PageSize: sdk.Int(639028),
        Param: sdk.String("dolorum"),
        Segments: []string{
            "accusamus",
            "tempora",
            "atque",
        },
        Sub: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemList != nil {
        // handle response
    }
}
```

## GetLists

Returns an array of item lists with their first page of content resolved.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Content.GetLists(ctx, operations.GetListsRequest{
        Device: sdk.String("ut"),
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumAll,
            shared.FeatureFlagsEnumCas,
            shared.FeatureFlagsEnumCas,
            shared.FeatureFlagsEnumLdp,
        },
        Ids: []string{
            "esse",
        },
        ItemType: shared.ItemTypeEnumEpisode.ToPointer(),
        Lang: sdk.String("sit"),
        MaxRating: sdk.String("voluptatum"),
        Order: shared.ListOrderEnumDesc.ToPointer(),
        OrderBy: shared.ListOrderByEnumDateAdded.ToPointer(),
        PageSize: sdk.Int(361151),
        Segments: []string{
            "blanditiis",
        },
        Sub: sdk.String("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemLists != nil {
        // handle response
    }
}
```

## GetPublicItemMediaFiles

Get the free / public video files associated with an item given maximum resolution,
device type and one or more delivery types.

Returns an array of video file objects which each include a url to a video.

The first entry in the array contains what is predicted to be the best match.
The remainder of the entries, if any, may contain resolutions below what was
requests. For example if you request HD-720 the response may also contain
SD entries.

If you specify multiple delivery types, then the response array will insert
types in the order you specify them in the query. For example `stream,progressive`
would return an array with 0 or more stream files followed by 0 or more progressive files.

If no files are found a 404 is returned.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Content.GetPublicItemMediaFiles(ctx, operations.GetPublicItemMediaFilesRequest{
        Delivery: []shared.MediaFileDeliveryEnum{
            shared.MediaFileDeliveryEnumStream,
        },
        Device: sdk.String("vel"),
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumCd,
            shared.FeatureFlagsEnumRpt,
        },
        Formats: []shared.MediaFileFormatsEnum{
            shared.MediaFileFormatsEnumMpd,
        },
        ID: "f3b1194b-8abf-4603-a79f-9dfe0ab7da8a",
        Lang: sdk.String("veniam"),
        Resolution: shared.MediaFileResolutionEnumHd4K,
        Segments: []string{
            "repudiandae",
            "quasi",
            "atque",
            "reprehenderit",
        },
        Sub: sdk.String("asperiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaFiles != nil {
        // handle response
    }
}
```

## GetSchedules

Returns schedules for a defined set of channels over a requested period.

Schedules are requested in hour blocks and returned grouped by the channel
they belong to.

For example, to load 12 hours of schedules for channels `4343` and `5234`,
on 21/2/2017 starting from 08:00.

```
channels=4343,5234
date=2017-02-21
hour=8
duration=12
```

Please remember that `date` and `hour` combined represent a normal datetime, 
so they should be converted to UTC on the client - this will help to avoid 
issues with EPG schedules near midnight.

If a channel id is passed which doesn't exist then this endpoint will
return an empty schedule list for it. If instead we returned 404,
this would invalidate all other channel schedules in the same request
which would be unfriendly for clients presenting these channel schedules.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Content.GetSchedules(ctx, operations.GetSchedulesRequest{
        Channels: []string{
            "suscipit",
            "quidem",
            "maxime",
        },
        Date: types.MustDateFromString("2022-07-16"),
        Device: sdk.String("amet"),
        Duration: 826825,
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumRpt,
            shared.FeatureFlagsEnumRpt,
        },
        Hour: 887265,
        Intersect: sdk.Bool(false),
        Lang: sdk.String("officiis"),
        Segments: []string{
            "natus",
            "minima",
            "aspernatur",
            "ex",
        },
        Sub: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemScheduleLists != nil {
        // handle response
    }
}
```

## GetPlansID

Returns the details of a Plan with the specified id.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Content.GetPlansID(ctx, operations.GetPlansIDRequest{
        Device: sdk.String("corrupti"),
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumRpt,
            shared.FeatureFlagsEnumRpt,
            shared.FeatureFlagsEnumHb,
            shared.FeatureFlagsEnumCd,
        },
        ID: "881ead4f-0e10-4125-a3f9-4e29e973e922",
        Lang: sdk.String("id"),
        Segments: []string{
            "reprehenderit",
            "error",
        },
        Sub: sdk.String("illo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Plan != nil {
        // handle response
    }
}
```

## Search

Search the catalog of items and people.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Content.Search(ctx, operations.SearchRequest{
        Device: sdk.String("corporis"),
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumCd,
            shared.FeatureFlagsEnumIdp,
            shared.FeatureFlagsEnumCd,
        },
        Group: sdk.Bool(false),
        Include: []SearchIncludeEnum{
            operations.SearchIncludeEnumMovies,
        },
        Lang: sdk.String("ipsa"),
        MaxRating: sdk.String("totam"),
        MaxResults: sdk.Int(61078),
        Segments: []string{
            "eveniet",
            "qui",
        },
        Sub: sdk.String("cum"),
        Term: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResults != nil {
        // handle response
    }
}
```
