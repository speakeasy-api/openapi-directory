# typeBlogentry

## Overview

Search API for 'Weblog Entry' entry type

### Available Operations

* [searchBlogentry](#searchblogentry) - Search API for 'Weblog Entry' entry type

## searchBlogentry

API to search for entries of type Weblog Entry

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBlogentryRequest;
import org.openapis.openapi.models.operations.SearchBlogentryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBlogentryRequest req = new SearchBlogentryRequest() {{
                changedateFrom = OffsetDateTime.parse("2020-04-13T07:43:17.350Z");
                changedateTo = OffsetDateTime.parse("2022-03-24T11:20:42.976Z");
                createdateFrom = OffsetDateTime.parse("2022-09-01T09:38:53.685Z");
                createdateTo = OffsetDateTime.parse("2022-12-02T09:33:05.571Z");
                description = "magnam";
                filesuffix = "ea";
                fromdate = OffsetDateTime.parse("2022-04-21T16:53:11.568Z");
                group = "recusandae";
                max = 132487L;
                maxlatitude = 3253.1;
                maxlongitude = 534.27;
                minlatitude = 9528.71;
                minlongitude = 7255.95;
                name = "Jennifer Lesch";
                searchBlogentryBlogtext = "fugit";
                skip = 882860L;
                text = "inventore";
                todate = OffsetDateTime.parse("2022-11-29T07:04:37.837Z");
            }};            

            SearchBlogentryResponse res = sdk.typeBlogentry.searchBlogentry(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
