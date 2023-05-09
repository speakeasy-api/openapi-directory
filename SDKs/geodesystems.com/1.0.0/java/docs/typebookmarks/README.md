# typeBookmarks

## Overview

Search API for 'Bookmarks' entry type

### Available Operations

* [searchBookmarks](#searchbookmarks) - Search API for 'Bookmarks' entry type

## searchBookmarks

API to search for entries of type Bookmarks

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBookmarksRequest;
import org.openapis.openapi.models.operations.SearchBookmarksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBookmarksRequest req = new SearchBookmarksRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-12-06T12:02:05.098Z");
                changedateTo = OffsetDateTime.parse("2022-12-24T22:15:46.522Z");
                createdateFrom = OffsetDateTime.parse("2022-02-09T09:38:41.756Z");
                createdateTo = OffsetDateTime.parse("2022-11-13T06:50:40.250Z");
                description = "sequi";
                filesuffix = "quo";
                fromdate = OffsetDateTime.parse("2022-01-28T07:34:05.998Z");
                group = "aperiam";
                max = 715179L;
                maxlatitude = 7997.96;
                maxlongitude = 4908.19;
                minlatitude = 769.56;
                minlongitude = 4694.98;
                name = "Sheldon Hackett";
                searchDbBookmarksCategory = "commodi";
                searchDbBookmarksDate = "sapiente";
                searchDbBookmarksTitle = "dolores";
                searchDbBookmarksUrl = "deserunt";
                skip = 475289L;
                text = "accusantium";
                todate = OffsetDateTime.parse("2021-09-16T17:01:25.429Z");
            }};            

            SearchBookmarksResponse res = sdk.typeBookmarks.searchBookmarks(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
