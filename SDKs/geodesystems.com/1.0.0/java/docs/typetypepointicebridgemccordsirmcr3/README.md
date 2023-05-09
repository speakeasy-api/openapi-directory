# typeTypePointIcebridgeMccordsIrmcr3

## Overview

Search API for 'McCords Irmcr3 Data' entry type

### Available Operations

* [searchTypePointIcebridgeMccordsIrmcr3](#searchtypepointicebridgemccordsirmcr3) - Search API for 'McCords Irmcr3 Data' entry type

## searchTypePointIcebridgeMccordsIrmcr3

API to search for entries of type McCords Irmcr3 Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointIcebridgeMccordsIrmcr3Request;
import org.openapis.openapi.models.operations.SearchTypePointIcebridgeMccordsIrmcr3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointIcebridgeMccordsIrmcr3Request req = new SearchTypePointIcebridgeMccordsIrmcr3Request() {{
                changedateFrom = OffsetDateTime.parse("2021-11-02T20:34:30.193Z");
                changedateTo = OffsetDateTime.parse("2022-01-03T09:52:02.484Z");
                createdateFrom = OffsetDateTime.parse("2022-02-11T22:30:11.425Z");
                createdateTo = OffsetDateTime.parse("2022-06-04T03:35:50.569Z");
                description = "nulla";
                filesuffix = "ab";
                fromdate = OffsetDateTime.parse("2021-05-10T07:27:43.062Z");
                group = "magni";
                max = 951633L;
                maxlatitude = 7687.72;
                maxlongitude = 1277.84;
                minlatitude = 9668.01;
                minlongitude = 6189.9;
                name = "Mr. Louis Waelchi";
                skip = 589014L;
                text = "numquam";
                todate = OffsetDateTime.parse("2022-04-07T08:46:00.661Z");
            }};            

            SearchTypePointIcebridgeMccordsIrmcr3Response res = sdk.typeTypePointIcebridgeMccordsIrmcr3.searchTypePointIcebridgeMccordsIrmcr3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
