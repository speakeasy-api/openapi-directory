# typeTypePointIcebridgeMccordsIrmcr2

## Overview

Search API for 'McCords Irmcr2 Data' entry type

### Available Operations

* [searchTypePointIcebridgeMccordsIrmcr2](#searchtypepointicebridgemccordsirmcr2) - Search API for 'McCords Irmcr2 Data' entry type

## searchTypePointIcebridgeMccordsIrmcr2

API to search for entries of type McCords Irmcr2 Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointIcebridgeMccordsIrmcr2Request;
import org.openapis.openapi.models.operations.SearchTypePointIcebridgeMccordsIrmcr2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointIcebridgeMccordsIrmcr2Request req = new SearchTypePointIcebridgeMccordsIrmcr2Request() {{
                changedateFrom = OffsetDateTime.parse("2022-09-01T20:19:05.294Z");
                changedateTo = OffsetDateTime.parse("2022-11-16T15:03:29.219Z");
                createdateFrom = OffsetDateTime.parse("2022-08-07T16:38:24.285Z");
                createdateTo = OffsetDateTime.parse("2020-08-18T13:51:19.758Z");
                description = "molestiae";
                filesuffix = "mollitia";
                fromdate = OffsetDateTime.parse("2021-01-28T14:46:04.955Z");
                group = "eum";
                max = 106201L;
                maxlatitude = 3811.97;
                maxlongitude = 9115.47;
                minlatitude = 6520.29;
                minlongitude = 3688.49;
                name = "Fernando Bode";
                skip = 116452L;
                text = "provident";
                todate = OffsetDateTime.parse("2022-09-15T17:32:45.445Z");
            }};            

            SearchTypePointIcebridgeMccordsIrmcr2Response res = sdk.typeTypePointIcebridgeMccordsIrmcr2.searchTypePointIcebridgeMccordsIrmcr2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
