# Profile

### Available Operations

* [BookmarkItem](#bookmarkitem) - Bookmark an item under the active profile.

Creates one if it doesn't exist, overwrites one if it does.

* [DeleteItemBookmark](#deleteitembookmark) - Unbookmark an item under the active profile.
* [DeleteWatched](#deletewatched) - Remove the watched status of items under the active profile. Passing in
specific `itemId`s to the `item_ids` query parameter will cause only these
items to be removed. **If this list is missing all watched items will be
removed**

* [GetBookmarkList](#getbookmarklist) - Returns the list of bookmarked items under the active profile.
* [GetBookmarks](#getbookmarks) - Get the map of bookmarked item ids (itemId => creationDate) under the active profile.
* [GetContinueWatchingList](#getcontinuewatchinglist) - Returns a list of items which have been watched but not completed under the active
profile.

Multiple episodes under the same show may be watched or in progress, however only a
single item belonging to a particular show will be included in the returned list.

The next episode to continue watching for a particular show will be the most recent
incompletely watched episode, or the next episode following the most recently
completely watched episode. Based on the specified `show_item_type` type, either the next
episode, the season of the next episode, or the show will be included in the list.

* [GetItemBookmark](#getitembookmark) - Get the bookmark for an item under the active profile.
* [GetItemRating](#getitemrating) - Get the rating info for an item under the active profile.
* [GetItemWatchedStatus](#getitemwatchedstatus) - Get the watched status info for an item under the active profile.
* [GetNextPlaybackItem](#getnextplaybackitem) - Returns the next item to play given a source item id.

For an unwatched show it returns the first episode available to the account.

For a watched show it returns the last incompletely watched episode by the profile,
or the episode that immediately follows the last completely watched episode 
or nothing.

For an episode it always returns the immediately following episode, if available to
the account, or nothing.

If the response does not contain a `next` property then no item was found.

* [GetProfile](#getprofile) - Get the details of the active profile, including watched, bookmarked and rated items.
* [GetRatings](#getratings) - Get the map of rated item ids (itemId => rating out of 10) under the active profile.
* [GetRatingsList](#getratingslist) - Returns the list of rated items under the active profile.
* [GetWatched](#getwatched) - Get the map of watched item ids (itemId => last playhead position) under the active profile.
* [GetWatchedList](#getwatchedlist) - Returns the list of watched items under the active profile.
* [RateItem](#rateitem) - Rate an item under the active profile.

Creates one if it doesn't exist, overwrites one if it does.

* [SetItemWatchedStatus](#setitemwatchedstatus) - Record the watched playhead position of a video under the active profile.

Can be used later to resume a video from where it was last watched.

Creates one if it doesn't exist, overwrites one if it does.


## BookmarkItem

Bookmark an item under the active profile.

Creates one if it doesn't exist, overwrites one if it does.


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
    res, err := s.Profile.BookmarkItem(ctx, operations.BookmarkItemRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumAll,
            shared.FeatureFlagsEnumLrl,
        },
        ItemID: "totam",
        Lang: sdk.String("impedit"),
    }, operations.BookmarkItemSecurity{
        ProfileAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Bookmark != nil {
        // handle response
    }
}
```

## DeleteItemBookmark

Unbookmark an item under the active profile.

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
    res, err := s.Profile.DeleteItemBookmark(ctx, operations.DeleteItemBookmarkRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumCas,
            shared.FeatureFlagsEnumLdp,
            shared.FeatureFlagsEnumCas,
            shared.FeatureFlagsEnumIdp,
        },
        ItemID: "aliquam",
        Lang: sdk.String("inventore"),
    }, operations.DeleteItemBookmarkSecurity{
        ProfileAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteWatched

Remove the watched status of items under the active profile. Passing in
specific `itemId`s to the `item_ids` query parameter will cause only these
items to be removed. **If this list is missing all watched items will be
removed**


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
    res, err := s.Profile.DeleteWatched(ctx, operations.DeleteWatchedRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumAll,
            shared.FeatureFlagsEnumLdp,
            shared.FeatureFlagsEnumIdp,
        },
        ItemIds: []string{
            "architecto",
        },
        Lang: sdk.String("sit"),
    }, operations.DeleteWatchedSecurity{
        ProfileAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetBookmarkList

Returns the list of bookmarked items under the active profile.

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
    res, err := s.Profile.GetBookmarkList(ctx, operations.GetBookmarkListRequest{
        Device: sdk.String("modi"),
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumAll,
        },
        ItemType: shared.ItemTypeEnumProgram.ToPointer(),
        Lang: sdk.String("quae"),
        Order: shared.ListOrderEnumAsc.ToPointer(),
        Page: sdk.Int(856277),
        PageSize: sdk.Int(369490),
        Segments: []string{
            "ipsa",
        },
        Sub: sdk.String("quas"),
    }, operations.GetBookmarkListSecurity{
        ProfileAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemList != nil {
        // handle response
    }
}
```

## GetBookmarks

Get the map of bookmarked item ids (itemId => creationDate) under the active profile.

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
    res, err := s.Profile.GetBookmarks(ctx, operations.GetBookmarksRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumLrl,
            shared.FeatureFlagsEnumCd,
            shared.FeatureFlagsEnumHb,
            shared.FeatureFlagsEnumCd,
        },
        Lang: sdk.String("sed"),
    }, operations.GetBookmarksSecurity{
        ProfileAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBookmarks200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetContinueWatchingList

Returns a list of items which have been watched but not completed under the active
profile.

Multiple episodes under the same show may be watched or in progress, however only a
single item belonging to a particular show will be included in the returned list.

The next episode to continue watching for a particular show will be the most recent
incompletely watched episode, or the next episode following the most recently
completely watched episode. Based on the specified `show_item_type` type, either the next
episode, the season of the next episode, or the show will be included in the list.


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
    res, err := s.Profile.GetContinueWatchingList(ctx, operations.GetContinueWatchingListRequest{
        Device: sdk.String("veniam"),
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumCas,
        },
        Include: []GetContinueWatchingListIncludeEnum{
            operations.GetContinueWatchingListIncludeEnumSeason,
            operations.GetContinueWatchingListIncludeEnumSeason,
        },
        Lang: sdk.String("magnam"),
        MaxRating: sdk.String("exercitationem"),
        Page: sdk.Int(70410),
        PageSize: sdk.Int(781480),
        Segments: []string{
            "nobis",
            "laboriosam",
        },
        ShowItemType: operations.GetContinueWatchingListShowItemTypeEnumShow.ToPointer(),
        Sub: sdk.String("consequuntur"),
    }, operations.GetContinueWatchingListSecurity{
        ProfileAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemList != nil {
        // handle response
    }
}
```

## GetItemBookmark

Get the bookmark for an item under the active profile.

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
    res, err := s.Profile.GetItemBookmark(ctx, operations.GetItemBookmarkRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumLdp,
        },
        ItemID: "necessitatibus",
        Lang: sdk.String("quasi"),
    }, operations.GetItemBookmarkSecurity{
        ProfileAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Bookmark != nil {
        // handle response
    }
}
```

## GetItemRating

Get the rating info for an item under the active profile.

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
    res, err := s.Profile.GetItemRating(ctx, operations.GetItemRatingRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumLrl,
            shared.FeatureFlagsEnumCd,
        },
        ItemID: "est",
        Lang: sdk.String("harum"),
    }, operations.GetItemRatingSecurity{
        ProfileAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserRating != nil {
        // handle response
    }
}
```

## GetItemWatchedStatus

Get the watched status info for an item under the active profile.

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
    res, err := s.Profile.GetItemWatchedStatus(ctx, operations.GetItemWatchedStatusRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumCd,
        },
        ItemID: "repudiandae",
        Lang: sdk.String("optio"),
    }, operations.GetItemWatchedStatusSecurity{
        ProfileAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Watched != nil {
        // handle response
    }
}
```

## GetNextPlaybackItem

Returns the next item to play given a source item id.

For an unwatched show it returns the first episode available to the account.

For a watched show it returns the last incompletely watched episode by the profile,
or the episode that immediately follows the last completely watched episode 
or nothing.

For an episode it always returns the immediately following episode, if available to
the account, or nothing.

If the response does not contain a `next` property then no item was found.


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
    res, err := s.Profile.GetNextPlaybackItem(ctx, operations.GetNextPlaybackItemRequest{
        Device: sdk.String("occaecati"),
        Expand: operations.GetNextPlaybackItemExpandEnumParent.ToPointer(),
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumRpt,
            shared.FeatureFlagsEnumCas,
        },
        ItemID: "voluptas",
        Lang: sdk.String("numquam"),
        MaxRating: sdk.String("nemo"),
        Segments: []string{
            "eius",
            "aspernatur",
            "ducimus",
        },
        Sub: sdk.String("nesciunt"),
    }, operations.GetNextPlaybackItemSecurity{
        ProfileAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NextPlaybackItem != nil {
        // handle response
    }
}
```

## GetProfile

Get the details of the active profile, including watched, bookmarked and rated items.

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
    res, err := s.Profile.GetProfile(ctx, operations.GetProfileRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumRpt,
            shared.FeatureFlagsEnumLdp,
            shared.FeatureFlagsEnumAll,
        },
        Lang: sdk.String("rem"),
    }, operations.GetProfileSecurity{
        ProfileAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProfileDetail != nil {
        // handle response
    }
}
```

## GetRatings

Get the map of rated item ids (itemId => rating out of 10) under the active profile.

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
    res, err := s.Profile.GetRatings(ctx, operations.GetRatingsRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumAll,
            shared.FeatureFlagsEnumHb,
            shared.FeatureFlagsEnumIdp,
            shared.FeatureFlagsEnumIdp,
        },
        Lang: sdk.String("aperiam"),
    }, operations.GetRatingsSecurity{
        ProfileAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRatings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetRatingsList

Returns the list of rated items under the active profile.

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
    res, err := s.Profile.GetRatingsList(ctx, operations.GetRatingsListRequest{
        Device: sdk.String("cupiditate"),
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumCas,
            shared.FeatureFlagsEnumAll,
            shared.FeatureFlagsEnumRpt,
            shared.FeatureFlagsEnumIdp,
        },
        ItemType: shared.ItemTypeEnumLink.ToPointer(),
        Lang: sdk.String("iste"),
        Order: shared.ListOrderEnumAsc.ToPointer(),
        OrderBy: operations.GetRatingsListOrderByEnumDateAdded.ToPointer(),
        Page: sdk.Int(686362),
        PageSize: sdk.Int(881897),
        Segments: []string{
            "distinctio",
            "omnis",
            "delectus",
            "minima",
        },
        Sub: sdk.String("praesentium"),
    }, operations.GetRatingsListSecurity{
        ProfileAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemList != nil {
        // handle response
    }
}
```

## GetWatched

Get the map of watched item ids (itemId => last playhead position) under the active profile.

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
    res, err := s.Profile.GetWatched(ctx, operations.GetWatchedRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumLdp,
            shared.FeatureFlagsEnumLrl,
            shared.FeatureFlagsEnumRpt,
            shared.FeatureFlagsEnumHb,
        },
        Lang: sdk.String("itaque"),
    }, operations.GetWatchedSecurity{
        ProfileAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWatched200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetWatchedList

Returns the list of watched items under the active profile.

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
    res, err := s.Profile.GetWatchedList(ctx, operations.GetWatchedListRequest{
        Completed: sdk.Bool(false),
        Device: sdk.String("commodi"),
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumCd,
            shared.FeatureFlagsEnumLdp,
            shared.FeatureFlagsEnumCas,
        },
        ItemType: shared.ItemTypeEnumChannel.ToPointer(),
        Lang: sdk.String("voluptatem"),
        Order: shared.ListOrderEnumAsc.ToPointer(),
        OrderBy: operations.GetWatchedListOrderByEnumDateAdded.ToPointer(),
        Page: sdk.Int(1383),
        PageSize: sdk.Int(93894),
        Segments: []string{
            "maiores",
        },
        Sub: sdk.String("enim"),
    }, operations.GetWatchedListSecurity{
        ProfileAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemList != nil {
        // handle response
    }
}
```

## RateItem

Rate an item under the active profile.

Creates one if it doesn't exist, overwrites one if it does.


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
    res, err := s.Profile.RateItem(ctx, operations.RateItemRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumLrl,
            shared.FeatureFlagsEnumCas,
            shared.FeatureFlagsEnumHb,
        },
        ItemID: "nemo",
        Lang: sdk.String("reprehenderit"),
        Rating: 667715,
    }, operations.RateItemSecurity{
        ProfileAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserRating != nil {
        // handle response
    }
}
```

## SetItemWatchedStatus

Record the watched playhead position of a video under the active profile.

Can be used later to resume a video from where it was last watched.

Creates one if it doesn't exist, overwrites one if it does.


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
    res, err := s.Profile.SetItemWatchedStatus(ctx, operations.SetItemWatchedStatusRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumRpt,
            shared.FeatureFlagsEnumCd,
        },
        ItemID: "impedit",
        Lang: sdk.String("hic"),
        Position: 900103,
    }, operations.SetItemWatchedStatusSecurity{
        ProfileAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Watched != nil {
        // handle response
    }
}
```
