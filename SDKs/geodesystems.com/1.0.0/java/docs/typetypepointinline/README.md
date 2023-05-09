# typeTypePointInline

## Overview

Search API for 'Inline Point File' entry type

### Available Operations

* [searchTypePointInline](#searchtypepointinline) - Search API for 'Inline Point File' entry type

## searchTypePointInline

API to search for entries of type Inline Point File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointInlineRequest;
import org.openapis.openapi.models.operations.SearchTypePointInlineResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointInlineRequest req = new SearchTypePointInlineRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-01-20T08:15:00.491Z");
                changedateTo = OffsetDateTime.parse("2022-03-22T22:42:10.471Z");
                createdateFrom = OffsetDateTime.parse("2022-06-14T19:35:26.505Z");
                createdateTo = OffsetDateTime.parse("2022-02-18T04:05:38.697Z");
                description = "quis";
                filesuffix = "aliquid";
                fromdate = OffsetDateTime.parse("2020-02-02T22:08:01.958Z");
                group = "dicta";
                max = 23410L;
                maxlatitude = 2379.6;
                maxlongitude = 802.94;
                minlatitude = 9016.07;
                minlongitude = 4349.36;
                name = "Freddie Mohr DDS";
                skip = 128390L;
                text = "accusantium";
                todate = OffsetDateTime.parse("2022-11-26T13:03:58.735Z");
            }};            

            SearchTypePointInlineResponse res = sdk.typeTypePointInline.searchTypePointInline(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
