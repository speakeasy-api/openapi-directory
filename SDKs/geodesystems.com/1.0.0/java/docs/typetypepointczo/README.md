# typeTypePointCzo

## Overview

Search API for 'CZO Display File Format' entry type

### Available Operations

* [searchTypePointCzo](#searchtypepointczo) - Search API for 'CZO Display File Format' entry type

## searchTypePointCzo

API to search for entries of type CZO Display File Format

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointCzoRequest;
import org.openapis.openapi.models.operations.SearchTypePointCzoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointCzoRequest req = new SearchTypePointCzoRequest() {{
                changedateFrom = OffsetDateTime.parse("2020-11-21T17:50:54.328Z");
                changedateTo = OffsetDateTime.parse("2022-08-31T14:44:31.131Z");
                createdateFrom = OffsetDateTime.parse("2022-09-08T00:50:35.455Z");
                createdateTo = OffsetDateTime.parse("2022-08-10T16:00:54.799Z");
                description = "consectetur";
                filesuffix = "quos";
                fromdate = OffsetDateTime.parse("2022-08-19T07:07:10.067Z");
                group = "repudiandae";
                max = 818273L;
                maxlatitude = 7165.38;
                maxlongitude = 4973.63;
                minlatitude = 5404.16;
                minlongitude = 2343.83;
                name = "Sherri Tillman";
                skip = 327624L;
                text = "cumque";
                todate = OffsetDateTime.parse("2021-12-27T00:11:05.949Z");
            }};            

            SearchTypePointCzoResponse res = sdk.typeTypePointCzo.searchTypePointCzo(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
