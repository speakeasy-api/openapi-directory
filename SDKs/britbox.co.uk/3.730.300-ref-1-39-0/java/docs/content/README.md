# content

### Available Operations

* [getAnonNextPlaybackItem](#getanonnextplaybackitem) - Identical to GET /account/profile/items/{itemId}/next route but for users
that are not logged in i.e. this endpoint does not require authorisation

* [getItem](#getitem) - Returns the details of an item with the specified id.
* [getItemChildrenList](#getitemchildrenlist) - Returns the List of child summary items under an item.

If the item is a Season then the children will be episodes and ordered by episode number.

If the item is a Show then the children will be Seasons and ordered by season number.

Returns 404 if no children found.

* [getItemDownloadables](#getitemdownloadables) - Returns the details of an item with the specified id.
* [getItemRelatedList](#getitemrelatedlist) - Returns the list of items related to the parent item.

Note for now, due to the size of the list being unknown, only a single page will be returned.

* [getItemsMediaClipFiles](#getitemsmediaclipfiles) - Get the media clip files associated with items.

* [getList](#getlist) - Returns a list of items under the specified item list
* [getLists](#getlists) - Returns an array of item lists with their first page of content resolved.
* [getPublicItemMediaFiles](#getpublicitemmediafiles) - Get the free / public video files associated with an item given maximum resolution,
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

* [getSchedules](#getschedules) - Returns schedules for a defined set of channels over a requested period.

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

* [getPlansId](#getplansid) - Returns the details of a Plan with the specified id.
* [search](#search) - Search the catalog of items and people.

## getAnonNextPlaybackItem

Identical to GET /account/profile/items/{itemId}/next route but for users
that are not logged in i.e. this endpoint does not require authorisation


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnonNextPlaybackItemExpandEnum;
import org.openapis.openapi.models.operations.GetAnonNextPlaybackItemRequest;
import org.openapis.openapi.models.operations.GetAnonNextPlaybackItemResponse;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAnonNextPlaybackItemRequest req = new GetAnonNextPlaybackItemRequest("qui") {{
                device = "ipsum";
                expand = GetAnonNextPlaybackItemExpandEnum.ANCESTORS;
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CAS),
                    add(FeatureFlagsEnum.HB),
                    add(FeatureFlagsEnum.HB),
                }};
                lang = "reiciendis";
                maxRating = "amet";
                segments = new String[]{{
                    add("numquam"),
                    add("veritatis"),
                    add("ipsa"),
                }};
            }};            

            GetAnonNextPlaybackItemResponse res = sdk.content.getAnonNextPlaybackItem(req);

            if (res.nextPlaybackItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItem

Returns the details of an item with the specified id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemExpandEnum;
import org.openapis.openapi.models.operations.GetItemRequest;
import org.openapis.openapi.models.operations.GetItemResponse;
import org.openapis.openapi.models.operations.GetItemSelectSeasonEnum;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItemRequest req = new GetItemRequest("ipsa") {{
                device = "iure";
                expand = GetItemExpandEnum.CHILDREN;
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CD),
                    add(FeatureFlagsEnum.CAS),
                }};
                lang = "voluptatibus";
                maxRating = "voluptas";
                segments = new String[]{{
                    add("eos"),
                    add("atque"),
                    add("sit"),
                }};
                selectSeason = GetItemSelectSeasonEnum.LATEST;
                sub = "ab";
                useCustomId = false;
            }};            

            GetItemResponse res = sdk.content.getItem(req);

            if (res.itemDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItemChildrenList

Returns the List of child summary items under an item.

If the item is a Season then the children will be episodes and ordered by episode number.

If the item is a Show then the children will be Seasons and ordered by season number.

Returns 404 if no children found.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemChildrenListRequest;
import org.openapis.openapi.models.operations.GetItemChildrenListResponse;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.ListOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItemChildrenListRequest req = new GetItemChildrenListRequest("soluta") {{
                device = "dolorum";
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.HB),
                    add(FeatureFlagsEnum.CAS),
                }};
                lang = "deleniti";
                maxRating = "omnis";
                order = ListOrderEnum.DESC;
                page = 714697;
                pageSize = 990339;
                segments = new String[]{{
                    add("ipsum"),
                    add("voluptate"),
                }};
                sub = "id";
            }};            

            GetItemChildrenListResponse res = sdk.content.getItemChildrenList(req);

            if (res.itemList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItemDownloadables

Returns the details of an item with the specified id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemDownloadablesRequest;
import org.openapis.openapi.models.operations.GetItemDownloadablesResponse;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.ItemDownloadableRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItemDownloadablesRequest req = new GetItemDownloadablesRequest(                new ItemDownloadableRequest("saepe");) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.IDP),
                    add(FeatureFlagsEnum.ALL),
                }};
                lang = "amet";
            }};            

            GetItemDownloadablesResponse res = sdk.content.getItemDownloadables(req);

            if (res.itemDownloadableList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItemRelatedList

Returns the list of items related to the parent item.

Note for now, due to the size of the list being unknown, only a single page will be returned.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemRelatedListRequest;
import org.openapis.openapi.models.operations.GetItemRelatedListResponse;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItemRelatedListRequest req = new GetItemRelatedListRequest("optio") {{
                device = "accusamus";
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CD),
                    add(FeatureFlagsEnum.HB),
                }};
                lang = "deserunt";
                maxRating = "provident";
                page = 324683;
                pageSize = 831049;
                segments = new String[]{{
                    add("similique"),
                    add("alias"),
                    add("at"),
                }};
                sub = "quaerat";
            }};            

            GetItemRelatedListResponse res = sdk.content.getItemRelatedList(req);

            if (res.itemList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItemsMediaClipFiles

Get the media clip files associated with items.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemsMediaClipFilesRequest;
import org.openapis.openapi.models.operations.GetItemsMediaClipFilesResponse;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.ItemDownloadableRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItemsMediaClipFilesRequest req = new GetItemsMediaClipFilesRequest(                new ItemDownloadableRequest("tempora");) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.LRL),
                    add(FeatureFlagsEnum.CD),
                }};
                lang = "qui";
            }};            

            GetItemsMediaClipFilesResponse res = sdk.content.getItemsMediaClipFiles(req);

            if (res.itemClipFilesList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getList

Returns a list of items under the specified item list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetListRequest;
import org.openapis.openapi.models.operations.GetListResponse;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.ItemTypeEnum;
import org.openapis.openapi.models.shared.ListOrderByEnum;
import org.openapis.openapi.models.shared.ListOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetListRequest req = new GetListRequest("dolorum") {{
                device = "a";
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CAS),
                    add(FeatureFlagsEnum.HB),
                }};
                itemType = ItemTypeEnum.SHOW;
                lang = "quisquam";
                maxRating = "tenetur";
                order = ListOrderEnum.ASC;
                orderBy = ListOrderByEnum.DATE_ADDED;
                page = 880298;
                pageSize = 253941;
                param = "enim";
                segments = new String[]{{
                    add("sapiente"),
                }};
                sub = "totam";
            }};            

            GetListResponse res = sdk.content.getList(req);

            if (res.itemList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLists

Returns an array of item lists with their first page of content resolved.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetListsRequest;
import org.openapis.openapi.models.operations.GetListsResponse;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.ItemTypeEnum;
import org.openapis.openapi.models.shared.ListOrderByEnum;
import org.openapis.openapi.models.shared.ListOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetListsRequest req = new GetListsRequest(                new String[]{{
                                add("sit"),
                                add("expedita"),
                            }}) {{
                device = "neque";
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.HB),
                }};
                itemType = ItemTypeEnum.TRAILER;
                lang = "voluptas";
                maxRating = "deserunt";
                order = ListOrderEnum.ASC;
                orderBy = ListOrderByEnum.AZ;
                pageSize = 277628;
                segments = new String[]{{
                    add("cupiditate"),
                }};
                sub = "maxime";
            }};            

            GetListsResponse res = sdk.content.getLists(req);

            if (res.itemLists != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPublicItemMediaFiles

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPublicItemMediaFilesRequest;
import org.openapis.openapi.models.operations.GetPublicItemMediaFilesResponse;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.MediaFileDeliveryEnum;
import org.openapis.openapi.models.shared.MediaFileFormatsEnum;
import org.openapis.openapi.models.shared.MediaFileResolutionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPublicItemMediaFilesRequest req = new GetPublicItemMediaFilesRequest(                new org.openapis.openapi.models.shared.MediaFileDeliveryEnum[]{{
                                add(MediaFileDeliveryEnum.DOWNLOAD),
                                add(MediaFileDeliveryEnum.STREAM),
                                add(MediaFileDeliveryEnum.DOWNLOAD),
                                add(MediaFileDeliveryEnum.PROGRESSIVE),
                            }}, "incidunt", MediaFileResolutionEnum.HD4_K) {{
                device = "dolores";
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CAS),
                    add(FeatureFlagsEnum.HB),
                    add(FeatureFlagsEnum.HB),
                }};
                formats = new org.openapis.openapi.models.shared.MediaFileFormatsEnum[]{{
                    add(MediaFileFormatsEnum.EXTERNAL),
                    add(MediaFileFormatsEnum.MP4),
                    add(MediaFileFormatsEnum.MP4),
                }};
                lang = "fugit";
                segments = new String[]{{
                    add("odio"),
                }};
                sub = "sunt";
            }};            

            GetPublicItemMediaFilesResponse res = sdk.content.getPublicItemMediaFiles(req);

            if (res.mediaFiles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchedules

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

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchedulesRequest;
import org.openapis.openapi.models.operations.GetSchedulesResponse;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSchedulesRequest req = new GetSchedulesRequest(                new String[]{{
                                add("nam"),
                                add("hic"),
                            }}, LocalDate.parse("2022-03-27"), 746994, 748664) {{
                device = "et";
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.IDP),
                    add(FeatureFlagsEnum.ALL),
                    add(FeatureFlagsEnum.CAS),
                    add(FeatureFlagsEnum.RPT),
                }};
                intersect = false;
                lang = "tempore";
                segments = new String[]{{
                    add("aperiam"),
                    add("delectus"),
                    add("dolorem"),
                }};
                sub = "dolore";
            }};            

            GetSchedulesResponse res = sdk.content.getSchedules(req);

            if (res.itemScheduleLists != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPlansId

Returns the details of a Plan with the specified id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlansIdRequest;
import org.openapis.openapi.models.operations.GetPlansIdResponse;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPlansIdRequest req = new GetPlansIdRequest("labore") {{
                device = "adipisci";
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.ALL),
                    add(FeatureFlagsEnum.ALL),
                    add(FeatureFlagsEnum.ALL),
                }};
                lang = "quas";
                segments = new String[]{{
                    add("consequatur"),
                    add("est"),
                    add("repellendus"),
                    add("porro"),
                }};
                sub = "doloribus";
            }};            

            GetPlansIdResponse res = sdk.content.getPlansId(req);

            if (res.plan != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## search

Search the catalog of items and people.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchIncludeEnum;
import org.openapis.openapi.models.operations.SearchRequest;
import org.openapis.openapi.models.operations.SearchResponse;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchRequest req = new SearchRequest("ut") {{
                device = "facilis";
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.IDP),
                    add(FeatureFlagsEnum.ALL),
                    add(FeatureFlagsEnum.RPT),
                }};
                group = false;
                include = new org.openapis.openapi.models.operations.SearchIncludeEnum[]{{
                    add(SearchIncludeEnum.PEOPLE),
                    add(SearchIncludeEnum.OTHER),
                }};
                lang = "quisquam";
                maxRating = "vero";
                maxResults = 606476;
                segments = new String[]{{
                    add("ipsum"),
                    add("delectus"),
                }};
                sub = "voluptate";
            }};            

            SearchResponse res = sdk.content.search(req);

            if (res.searchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
