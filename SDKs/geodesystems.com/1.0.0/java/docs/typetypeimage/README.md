# typeTypeImage

## Overview

Search API for 'Image' entry type

### Available Operations

* [searchTypeImage](#searchtypeimage) - Search API for 'Image' entry type

## searchTypeImage

API to search for entries of type Image

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeImageRequest;
import org.openapis.openapi.models.operations.SearchTypeImageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeImageRequest req = new SearchTypeImageRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-02-18T02:17:34.001Z");
                changedateTo = OffsetDateTime.parse("2022-09-14T01:23:15.914Z");
                createdateFrom = OffsetDateTime.parse("2022-11-07T11:08:01.952Z");
                createdateTo = OffsetDateTime.parse("2021-09-03T01:31:33.904Z");
                description = "voluptate";
                filesuffix = "reprehenderit";
                fromdate = OffsetDateTime.parse("2022-02-02T14:09:54.334Z");
                group = "voluptate";
                max = 941091L;
                maxlatitude = 8719.69;
                maxlongitude = 190.76;
                minlatitude = 4482.82;
                minlongitude = 2591.34;
                name = "Elizabeth Moore";
                skip = 532110L;
                text = "facere";
                todate = OffsetDateTime.parse("2022-05-20T16:59:43.803Z");
            }};            

            SearchTypeImageResponse res = sdk.typeTypeImage.searchTypeImage(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
