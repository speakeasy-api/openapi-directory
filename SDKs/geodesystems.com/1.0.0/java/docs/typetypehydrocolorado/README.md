# typeTypeHydroColorado

## Overview

Search API for 'Colorado DNR Stream Gage' entry type

### Available Operations

* [searchTypeHydroColorado](#searchtypehydrocolorado) - Search API for 'Colorado DNR Stream Gage' entry type

## searchTypeHydroColorado

API to search for entries of type Colorado DNR Stream Gage

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeHydroColoradoRequest;
import org.openapis.openapi.models.operations.SearchTypeHydroColoradoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeHydroColoradoRequest req = new SearchTypeHydroColoradoRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-12-25T13:16:35.979Z");
                changedateTo = OffsetDateTime.parse("2022-01-15T04:37:44.760Z");
                createdateFrom = OffsetDateTime.parse("2020-04-16T00:30:13.504Z");
                createdateTo = OffsetDateTime.parse("2022-10-31T19:42:19.266Z");
                description = "nostrum";
                filesuffix = "minus";
                fromdate = OffsetDateTime.parse("2022-07-16T07:41:05.814Z");
                group = "ea";
                max = 256941L;
                maxlatitude = 1032.53;
                maxlongitude = 6864.7;
                minlatitude = 5190.99;
                minlongitude = 2443.32;
                name = "Jane Towne II";
                searchTypeHydroColoradoSiteId = "in";
                skip = 730370L;
                text = "ut";
                todate = OffsetDateTime.parse("2022-07-15T10:01:53.355Z");
            }};            

            SearchTypeHydroColoradoResponse res = sdk.typeTypeHydroColorado.searchTypeHydroColorado(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
