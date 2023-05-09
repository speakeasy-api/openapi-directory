# typeCataloglink

## Overview

Search API for 'Catalog Link' entry type

### Available Operations

* [searchCataloglink](#searchcataloglink) - Search API for 'Catalog Link' entry type

## searchCataloglink

API to search for entries of type Catalog Link

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchCataloglinkRequest;
import org.openapis.openapi.models.operations.SearchCataloglinkResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchCataloglinkRequest req = new SearchCataloglinkRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-11-13T06:52:38.237Z");
                changedateTo = OffsetDateTime.parse("2022-01-08T02:07:04.894Z");
                createdateFrom = OffsetDateTime.parse("2021-04-04T14:18:49.875Z");
                createdateTo = OffsetDateTime.parse("2021-12-30T00:19:55.496Z");
                description = "suscipit";
                filesuffix = "repudiandae";
                fromdate = OffsetDateTime.parse("2021-12-01T19:00:30.130Z");
                group = "sunt";
                max = 923306L;
                maxlatitude = 6806.97;
                maxlongitude = 8298.98;
                minlatitude = 2871.19;
                minlongitude = 9682.87;
                name = "Mr. Elvira Buckridge";
                skip = 316488L;
                text = "laboriosam";
                todate = OffsetDateTime.parse("2022-01-18T11:13:47.798Z");
            }};            

            SearchCataloglinkResponse res = sdk.typeCataloglink.searchCataloglink(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
