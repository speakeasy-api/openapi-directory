# typeFitsData

## Overview

Search API for 'FITS Data File' entry type

### Available Operations

* [searchFitsData](#searchfitsdata) - Search API for 'FITS Data File' entry type

## searchFitsData

API to search for entries of type FITS Data File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchFitsDataRequest;
import org.openapis.openapi.models.operations.SearchFitsDataResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchFitsDataRequest req = new SearchFitsDataRequest() {{
                changedateFrom = OffsetDateTime.parse("2020-11-09T00:25:03.486Z");
                changedateTo = OffsetDateTime.parse("2022-08-01T09:21:47.394Z");
                createdateFrom = OffsetDateTime.parse("2022-10-29T20:56:45.429Z");
                createdateTo = OffsetDateTime.parse("2022-09-05T14:30:04.979Z");
                description = "est";
                filesuffix = "facere";
                fromdate = OffsetDateTime.parse("2022-01-20T14:32:05.606Z");
                group = "provident";
                max = 882284L;
                maxlatitude = 8964.8;
                maxlongitude = 7332.89;
                minlatitude = 5750.78;
                minlongitude = 4097.26;
                name = "Brittany Prosacco";
                searchFitsDataInstrument = "officiis";
                searchFitsDataOrigin = "voluptatibus";
                searchFitsDataTelescope = "cum";
                skip = 872303L;
                text = "alias";
                todate = OffsetDateTime.parse("2022-04-22T15:10:37.825Z");
            }};            

            SearchFitsDataResponse res = sdk.typeFitsData.searchFitsData(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
