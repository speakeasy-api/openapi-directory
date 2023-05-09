# typeTypeSoundingFrd

## Overview

Search API for 'FRD Sounding' entry type

### Available Operations

* [searchTypeSoundingFrd](#searchtypesoundingfrd) - Search API for 'FRD Sounding' entry type

## searchTypeSoundingFrd

API to search for entries of type FRD Sounding

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeSoundingFrdRequest;
import org.openapis.openapi.models.operations.SearchTypeSoundingFrdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeSoundingFrdRequest req = new SearchTypeSoundingFrdRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-11-10T18:02:08.902Z");
                changedateTo = OffsetDateTime.parse("2022-11-14T00:59:39.924Z");
                createdateFrom = OffsetDateTime.parse("2022-02-22T00:14:35.920Z");
                createdateTo = OffsetDateTime.parse("2022-01-25T11:56:59.355Z");
                description = "enim";
                filesuffix = "nam";
                fromdate = OffsetDateTime.parse("2022-11-02T00:03:25.771Z");
                group = "sapiente";
                max = 912L;
                maxlatitude = 9866.23;
                maxlongitude = 3634.67;
                minlatitude = 2961.27;
                minlongitude = 5453.14;
                name = "Tonya Langworth II";
                skip = 174836L;
                text = "labore";
                todate = OffsetDateTime.parse("2022-12-25T08:43:43.550Z");
            }};            

            SearchTypeSoundingFrdResponse res = sdk.typeTypeSoundingFrd.searchTypeSoundingFrd(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
