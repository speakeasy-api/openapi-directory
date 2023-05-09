# typeTypePointWsbbGgp

## Overview

Search API for 'Global Geodynamics GGP Format' entry type

### Available Operations

* [searchTypePointWsbbGgp](#searchtypepointwsbbggp) - Search API for 'Global Geodynamics GGP Format' entry type

## searchTypePointWsbbGgp

API to search for entries of type Global Geodynamics GGP Format

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointWsbbGgpRequest;
import org.openapis.openapi.models.operations.SearchTypePointWsbbGgpResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointWsbbGgpRequest req = new SearchTypePointWsbbGgpRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-05-22T02:36:50.647Z");
                changedateTo = OffsetDateTime.parse("2020-04-15T01:27:01.127Z");
                createdateFrom = OffsetDateTime.parse("2021-08-30T09:06:30.305Z");
                createdateTo = OffsetDateTime.parse("2022-05-20T21:45:29.582Z");
                description = "molestiae";
                filesuffix = "facilis";
                fromdate = OffsetDateTime.parse("2022-05-10T03:35:29.040Z");
                group = "itaque";
                max = 586366L;
                maxlatitude = 92.47;
                maxlongitude = 6893.66;
                minlatitude = 7524.92;
                minlongitude = 2563.25;
                name = "Mona Wyman";
                searchTypePointWsbbGgpAuthor = "blanditiis";
                searchTypePointWsbbGgpInstrument = "voluptatibus";
                searchTypePointWsbbGgpStation = "nulla";
                skip = 367747L;
                text = "ratione";
                todate = OffsetDateTime.parse("2022-12-24T23:27:12.449Z");
            }};            

            SearchTypePointWsbbGgpResponse res = sdk.typeTypePointWsbbGgp.searchTypePointWsbbGgp(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
