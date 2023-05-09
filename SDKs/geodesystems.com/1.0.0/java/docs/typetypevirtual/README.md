# typeTypeVirtual

## Overview

Search API for 'Virtual Group' entry type

### Available Operations

* [searchTypeVirtual](#searchtypevirtual) - Search API for 'Virtual Group' entry type

## searchTypeVirtual

API to search for entries of type Virtual Group

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeVirtualRequest;
import org.openapis.openapi.models.operations.SearchTypeVirtualResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeVirtualRequest req = new SearchTypeVirtualRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-07-10T19:02:58.831Z");
                changedateTo = OffsetDateTime.parse("2021-04-15T15:12:23.880Z");
                createdateFrom = OffsetDateTime.parse("2022-10-26T11:56:54.380Z");
                createdateTo = OffsetDateTime.parse("2022-08-16T09:32:17.458Z");
                description = "quis";
                filesuffix = "corrupti";
                fromdate = OffsetDateTime.parse("2022-04-21T11:01:53.379Z");
                group = "quod";
                max = 954989L;
                maxlatitude = 915.29;
                maxlongitude = 3715.34;
                minlatitude = 1768.52;
                minlongitude = 3465.57;
                name = "Myrtle Spinka";
                skip = 566024L;
                text = "corporis";
                todate = OffsetDateTime.parse("2021-02-18T15:25:52.242Z");
            }};            

            SearchTypeVirtualResponse res = sdk.typeTypeVirtual.searchTypeVirtual(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
