# profile

### Available Operations

* [bookmarkItem](#bookmarkitem) - Bookmark an item under the active profile.

Creates one if it doesn't exist, overwrites one if it does.

* [deleteItemBookmark](#deleteitembookmark) - Unbookmark an item under the active profile.
* [deleteWatched](#deletewatched) - Remove the watched status of items under the active profile. Passing in
specific `itemId`s to the `item_ids` query parameter will cause only these
items to be removed. **If this list is missing all watched items will be
removed**

* [getBookmarkList](#getbookmarklist) - Returns the list of bookmarked items under the active profile.
* [getBookmarks](#getbookmarks) - Get the map of bookmarked item ids (itemId => creationDate) under the active profile.
* [getContinueWatchingList](#getcontinuewatchinglist) - Returns a list of items which have been watched but not completed under the active
profile.

Multiple episodes under the same show may be watched or in progress, however only a
single item belonging to a particular show will be included in the returned list.

The next episode to continue watching for a particular show will be the most recent
incompletely watched episode, or the next episode following the most recently
completely watched episode. Based on the specified `show_item_type` type, either the next
episode, the season of the next episode, or the show will be included in the list.

* [getItemBookmark](#getitembookmark) - Get the bookmark for an item under the active profile.
* [getItemRating](#getitemrating) - Get the rating info for an item under the active profile.
* [getItemWatchedStatus](#getitemwatchedstatus) - Get the watched status info for an item under the active profile.
* [getNextPlaybackItem](#getnextplaybackitem) - Returns the next item to play given a source item id.

For an unwatched show it returns the first episode available to the account.

For a watched show it returns the last incompletely watched episode by the profile,
or the episode that immediately follows the last completely watched episode 
or nothing.

For an episode it always returns the immediately following episode, if available to
the account, or nothing.

If the response does not contain a `next` property then no item was found.

* [getProfile](#getprofile) - Get the details of the active profile, including watched, bookmarked and rated items.
* [getRatings](#getratings) - Get the map of rated item ids (itemId => rating out of 10) under the active profile.
* [getRatingsList](#getratingslist) - Returns the list of rated items under the active profile.
* [getWatched](#getwatched) - Get the map of watched item ids (itemId => last playhead position) under the active profile.
* [getWatchedList](#getwatchedlist) - Returns the list of watched items under the active profile.
* [rateItem](#rateitem) - Rate an item under the active profile.

Creates one if it doesn't exist, overwrites one if it does.

* [setItemWatchedStatus](#setitemwatchedstatus) - Record the watched playhead position of a video under the active profile.

Can be used later to resume a video from where it was last watched.

Creates one if it doesn't exist, overwrites one if it does.


## bookmarkItem

Bookmark an item under the active profile.

Creates one if it doesn't exist, overwrites one if it does.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BookmarkItemRequest;
import org.openapis.openapi.models.operations.BookmarkItemResponse;
import org.openapis.openapi.models.operations.BookmarkItemSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BookmarkItemRequest req = new BookmarkItemRequest("esse") {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.RPT),
                    add(FeatureFlagsEnum.CD),
                    add(FeatureFlagsEnum.LRL),
                }};
                lang = "quas";
            }};            

            BookmarkItemResponse res = sdk.profile.bookmarkItem(req, new BookmarkItemSecurity("esse") {{
                profileAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bookmark != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteItemBookmark

Unbookmark an item under the active profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteItemBookmarkRequest;
import org.openapis.openapi.models.operations.DeleteItemBookmarkResponse;
import org.openapis.openapi.models.operations.DeleteItemBookmarkSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteItemBookmarkRequest req = new DeleteItemBookmarkRequest("quasi") {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.RPT),
                    add(FeatureFlagsEnum.RPT),
                    add(FeatureFlagsEnum.LRL),
                    add(FeatureFlagsEnum.LRL),
                }};
                lang = "quia";
            }};            

            DeleteItemBookmarkResponse res = sdk.profile.deleteItemBookmark(req, new DeleteItemBookmarkSecurity("eveniet") {{
                profileAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWatched

Remove the watched status of items under the active profile. Passing in
specific `itemId`s to the `item_ids` query parameter will cause only these
items to be removed. **If this list is missing all watched items will be
removed**


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWatchedRequest;
import org.openapis.openapi.models.operations.DeleteWatchedResponse;
import org.openapis.openapi.models.operations.DeleteWatchedSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWatchedRequest req = new DeleteWatchedRequest() {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.LRL),
                    add(FeatureFlagsEnum.ALL),
                    add(FeatureFlagsEnum.IDP),
                    add(FeatureFlagsEnum.ALL),
                }};
                itemIds = new String[]{{
                    add("culpa"),
                    add("aliquid"),
                    add("tenetur"),
                }};
                lang = "quae";
            }};            

            DeleteWatchedResponse res = sdk.profile.deleteWatched(req, new DeleteWatchedSecurity("earum") {{
                profileAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBookmarkList

Returns the list of bookmarked items under the active profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBookmarkListRequest;
import org.openapis.openapi.models.operations.GetBookmarkListResponse;
import org.openapis.openapi.models.operations.GetBookmarkListSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.ItemTypeEnum;
import org.openapis.openapi.models.shared.ListOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBookmarkListRequest req = new GetBookmarkListRequest() {{
                device = "vel";
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.LDP),
                    add(FeatureFlagsEnum.CAS),
                }};
                itemType = ItemTypeEnum.CHANNEL;
                lang = "soluta";
                order = ListOrderEnum.ASC;
                page = 306986;
                pageSize = 958983;
                segments = new String[]{{
                    add("ullam"),
                }};
                sub = "reprehenderit";
            }};            

            GetBookmarkListResponse res = sdk.profile.getBookmarkList(req, new GetBookmarkListSecurity("ullam") {{
                profileAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itemList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBookmarks

Get the map of bookmarked item ids (itemId => creationDate) under the active profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBookmarksRequest;
import org.openapis.openapi.models.operations.GetBookmarksResponse;
import org.openapis.openapi.models.operations.GetBookmarksSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBookmarksRequest req = new GetBookmarksRequest() {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.ALL),
                    add(FeatureFlagsEnum.RPT),
                }};
                lang = "qui";
            }};            

            GetBookmarksResponse res = sdk.profile.getBookmarks(req, new GetBookmarksSecurity("quibusdam") {{
                profileAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getBookmarks200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContinueWatchingList

Returns a list of items which have been watched but not completed under the active
profile.

Multiple episodes under the same show may be watched or in progress, however only a
single item belonging to a particular show will be included in the returned list.

The next episode to continue watching for a particular show will be the most recent
incompletely watched episode, or the next episode following the most recently
completely watched episode. Based on the specified `show_item_type` type, either the next
episode, the season of the next episode, or the show will be included in the list.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContinueWatchingListIncludeEnum;
import org.openapis.openapi.models.operations.GetContinueWatchingListRequest;
import org.openapis.openapi.models.operations.GetContinueWatchingListResponse;
import org.openapis.openapi.models.operations.GetContinueWatchingListSecurity;
import org.openapis.openapi.models.operations.GetContinueWatchingListShowItemTypeEnum;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContinueWatchingListRequest req = new GetContinueWatchingListRequest() {{
                device = "ex";
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CD),
                    add(FeatureFlagsEnum.CAS),
                    add(FeatureFlagsEnum.ALL),
                }};
                include = new org.openapis.openapi.models.operations.GetContinueWatchingListIncludeEnum[]{{
                    add(GetContinueWatchingListIncludeEnum.SHOW),
                    add(GetContinueWatchingListIncludeEnum.EPISODE),
                    add(GetContinueWatchingListIncludeEnum.SHOW),
                }};
                lang = "et";
                maxRating = "voluptate";
                page = 55965;
                pageSize = 326701;
                segments = new String[]{{
                    add("consectetur"),
                }};
                showItemType = GetContinueWatchingListShowItemTypeEnum.EPISODE;
                sub = "iste";
            }};            

            GetContinueWatchingListResponse res = sdk.profile.getContinueWatchingList(req, new GetContinueWatchingListSecurity("temporibus") {{
                profileAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itemList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItemBookmark

Get the bookmark for an item under the active profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemBookmarkRequest;
import org.openapis.openapi.models.operations.GetItemBookmarkResponse;
import org.openapis.openapi.models.operations.GetItemBookmarkSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItemBookmarkRequest req = new GetItemBookmarkRequest("accusantium") {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.ALL),
                    add(FeatureFlagsEnum.RPT),
                    add(FeatureFlagsEnum.HB),
                }};
                lang = "mollitia";
            }};            

            GetItemBookmarkResponse res = sdk.profile.getItemBookmark(req, new GetItemBookmarkSecurity("ab") {{
                profileAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bookmark != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItemRating

Get the rating info for an item under the active profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemRatingRequest;
import org.openapis.openapi.models.operations.GetItemRatingResponse;
import org.openapis.openapi.models.operations.GetItemRatingSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItemRatingRequest req = new GetItemRatingRequest("corrupti") {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.ALL),
                    add(FeatureFlagsEnum.IDP),
                }};
                lang = "occaecati";
            }};            

            GetItemRatingResponse res = sdk.profile.getItemRating(req, new GetItemRatingSecurity("numquam") {{
                profileAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userRating != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItemWatchedStatus

Get the watched status info for an item under the active profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemWatchedStatusRequest;
import org.openapis.openapi.models.operations.GetItemWatchedStatusResponse;
import org.openapis.openapi.models.operations.GetItemWatchedStatusSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItemWatchedStatusRequest req = new GetItemWatchedStatusRequest("impedit") {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.HB),
                }};
                lang = "aut";
            }};            

            GetItemWatchedStatusResponse res = sdk.profile.getItemWatchedStatus(req, new GetItemWatchedStatusSecurity("dignissimos") {{
                profileAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.watched != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNextPlaybackItem

Returns the next item to play given a source item id.

For an unwatched show it returns the first episode available to the account.

For a watched show it returns the last incompletely watched episode by the profile,
or the episode that immediately follows the last completely watched episode 
or nothing.

For an episode it always returns the immediately following episode, if available to
the account, or nothing.

If the response does not contain a `next` property then no item was found.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNextPlaybackItemExpandEnum;
import org.openapis.openapi.models.operations.GetNextPlaybackItemRequest;
import org.openapis.openapi.models.operations.GetNextPlaybackItemResponse;
import org.openapis.openapi.models.operations.GetNextPlaybackItemSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNextPlaybackItemRequest req = new GetNextPlaybackItemRequest("dicta") {{
                device = "maiores";
                expand = GetNextPlaybackItemExpandEnum.ANCESTORS;
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CD),
                }};
                lang = "voluptas";
                maxRating = "asperiores";
                segments = new String[]{{
                    add("ea"),
                }};
                sub = "quaerat";
            }};            

            GetNextPlaybackItemResponse res = sdk.profile.getNextPlaybackItem(req, new GetNextPlaybackItemSecurity("consequuntur") {{
                profileAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.nextPlaybackItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProfile

Get the details of the active profile, including watched, bookmarked and rated items.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProfileRequest;
import org.openapis.openapi.models.operations.GetProfileResponse;
import org.openapis.openapi.models.operations.GetProfileSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProfileRequest req = new GetProfileRequest() {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CAS),
                    add(FeatureFlagsEnum.LRL),
                    add(FeatureFlagsEnum.HB),
                    add(FeatureFlagsEnum.CAS),
                }};
                lang = "asperiores";
            }};            

            GetProfileResponse res = sdk.profile.getProfile(req, new GetProfileSecurity("nemo") {{
                profileAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.profileDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRatings

Get the map of rated item ids (itemId => rating out of 10) under the active profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRatingsRequest;
import org.openapis.openapi.models.operations.GetRatingsResponse;
import org.openapis.openapi.models.operations.GetRatingsSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRatingsRequest req = new GetRatingsRequest() {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.LDP),
                }};
                lang = "porro";
            }};            

            GetRatingsResponse res = sdk.profile.getRatings(req, new GetRatingsSecurity("quod") {{
                profileAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getRatings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRatingsList

Returns the list of rated items under the active profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRatingsListOrderByEnum;
import org.openapis.openapi.models.operations.GetRatingsListRequest;
import org.openapis.openapi.models.operations.GetRatingsListResponse;
import org.openapis.openapi.models.operations.GetRatingsListSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.ItemTypeEnum;
import org.openapis.openapi.models.shared.ListOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRatingsListRequest req = new GetRatingsListRequest() {{
                device = "labore";
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.IDP),
                }};
                itemType = ItemTypeEnum.TRAILER;
                lang = "id";
                order = ListOrderEnum.ASC;
                orderBy = GetRatingsListOrderByEnum.DATE_ADDED;
                page = 633931;
                pageSize = 665859;
                segments = new String[]{{
                    add("totam"),
                    add("fugiat"),
                    add("vel"),
                    add("ducimus"),
                }};
                sub = "quos";
            }};            

            GetRatingsListResponse res = sdk.profile.getRatingsList(req, new GetRatingsListSecurity("vel") {{
                profileAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itemList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWatched

Get the map of watched item ids (itemId => last playhead position) under the active profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWatchedRequest;
import org.openapis.openapi.models.operations.GetWatchedResponse;
import org.openapis.openapi.models.operations.GetWatchedSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWatchedRequest req = new GetWatchedRequest() {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.LRL),
                    add(FeatureFlagsEnum.CAS),
                }};
                lang = "cum";
            }};            

            GetWatchedResponse res = sdk.profile.getWatched(req, new GetWatchedSecurity("commodi") {{
                profileAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getWatched200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWatchedList

Returns the list of watched items under the active profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWatchedListOrderByEnum;
import org.openapis.openapi.models.operations.GetWatchedListRequest;
import org.openapis.openapi.models.operations.GetWatchedListResponse;
import org.openapis.openapi.models.operations.GetWatchedListSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.ItemTypeEnum;
import org.openapis.openapi.models.shared.ListOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWatchedListRequest req = new GetWatchedListRequest() {{
                completed = false;
                device = "in";
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CD),
                    add(FeatureFlagsEnum.LRL),
                }};
                itemType = ItemTypeEnum.EPISODE;
                lang = "recusandae";
                order = ListOrderEnum.ASC;
                orderBy = GetWatchedListOrderByEnum.DATE_ADDED;
                page = 738683;
                pageSize = 232627;
                segments = new String[]{{
                    add("exercitationem"),
                    add("earum"),
                }};
                sub = "facere";
            }};            

            GetWatchedListResponse res = sdk.profile.getWatchedList(req, new GetWatchedListSecurity("numquam") {{
                profileAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itemList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rateItem

Rate an item under the active profile.

Creates one if it doesn't exist, overwrites one if it does.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RateItemRequest;
import org.openapis.openapi.models.operations.RateItemResponse;
import org.openapis.openapi.models.operations.RateItemSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RateItemRequest req = new RateItemRequest("doloribus", 381760) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CAS),
                    add(FeatureFlagsEnum.CD),
                    add(FeatureFlagsEnum.CD),
                    add(FeatureFlagsEnum.LDP),
                }};
                lang = "sunt";
            }};            

            RateItemResponse res = sdk.profile.rateItem(req, new RateItemSecurity("asperiores") {{
                profileAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userRating != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setItemWatchedStatus

Record the watched playhead position of a video under the active profile.

Can be used later to resume a video from where it was last watched.

Creates one if it doesn't exist, overwrites one if it does.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetItemWatchedStatusRequest;
import org.openapis.openapi.models.operations.SetItemWatchedStatusResponse;
import org.openapis.openapi.models.operations.SetItemWatchedStatusSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SetItemWatchedStatusRequest req = new SetItemWatchedStatusRequest("adipisci", 249420) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.ALL),
                }};
                lang = "dignissimos";
            }};            

            SetItemWatchedStatusResponse res = sdk.profile.setItemWatchedStatus(req, new SetItemWatchedStatusSecurity("a") {{
                profileAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.watched != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
