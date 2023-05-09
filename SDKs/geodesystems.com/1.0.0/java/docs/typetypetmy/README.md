# typeTypeTmy

## Overview

Search API for 'NREL TMY Data' entry type

### Available Operations

* [searchTypeTmy](#searchtypetmy) - Search API for 'NREL TMY Data' entry type

## searchTypeTmy

API to search for entries of type NREL TMY Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeTmyRequest;
import org.openapis.openapi.models.operations.SearchTypeTmyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeTmyRequest req = new SearchTypeTmyRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-05-18T02:30:42.135Z");
                changedateTo = OffsetDateTime.parse("2022-03-11T02:17:59.836Z");
                createdateFrom = OffsetDateTime.parse("2021-07-28T14:30:56.159Z");
                createdateTo = OffsetDateTime.parse("2021-12-01T09:16:59.500Z");
                description = "assumenda";
                filesuffix = "laborum";
                fromdate = OffsetDateTime.parse("2022-11-30T06:55:42.234Z");
                group = "fugit";
                max = 471317L;
                maxlatitude = 8467.15;
                maxlongitude = 8601.44;
                minlatitude = 3648.57;
                minlongitude = 6073.65;
                name = "Darla Williamson";
                skip = 96301L;
                text = "inventore";
                todate = OffsetDateTime.parse("2021-09-05T10:47:22.933Z");
            }};            

            SearchTypeTmyResponse res = sdk.typeTypeTmy.searchTypeTmy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
