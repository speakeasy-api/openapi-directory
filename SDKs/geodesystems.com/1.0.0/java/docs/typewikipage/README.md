# typeWikipage

## Overview

Search API for 'Wiki Page' entry type

### Available Operations

* [searchWikipage](#searchwikipage) - Search API for 'Wiki Page' entry type

## searchWikipage

API to search for entries of type Wiki Page

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchWikipageRequest;
import org.openapis.openapi.models.operations.SearchWikipageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchWikipageRequest req = new SearchWikipageRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-08-31T11:42:20.406Z");
                changedateTo = OffsetDateTime.parse("2021-08-16T13:25:39.162Z");
                createdateFrom = OffsetDateTime.parse("2022-07-30T16:38:01.137Z");
                createdateTo = OffsetDateTime.parse("2022-11-23T18:10:33.380Z");
                description = "dignissimos";
                filesuffix = "quia";
                fromdate = OffsetDateTime.parse("2022-11-30T07:33:22.410Z");
                group = "amet";
                max = 192447L;
                maxlatitude = 9262.29;
                maxlongitude = 8524.45;
                minlatitude = 8020.82;
                minlongitude = 245.22;
                name = "Natalie Price";
                searchWikipageCategory = "architecto";
                searchWikipageWikitext = "vel";
                skip = 227713L;
                text = "facilis";
                todate = OffsetDateTime.parse("2021-05-23T00:22:51.337Z");
            }};            

            SearchWikipageResponse res = sdk.typeWikipage.searchWikipage(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
