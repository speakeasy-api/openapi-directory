# typeTypePointGeomagIaga2002

## Overview

Search API for 'IAGA 2002 Geomagnetism Data' entry type

### Available Operations

* [searchTypePointGeomagIaga2002](#searchtypepointgeomagiaga2002) - Search API for 'IAGA 2002 Geomagnetism Data' entry type

## searchTypePointGeomagIaga2002

API to search for entries of type IAGA 2002 Geomagnetism Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointGeomagIaga2002Request;
import org.openapis.openapi.models.operations.SearchTypePointGeomagIaga2002Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointGeomagIaga2002Request req = new SearchTypePointGeomagIaga2002Request() {{
                changedateFrom = OffsetDateTime.parse("2020-05-27T21:37:33.522Z");
                changedateTo = OffsetDateTime.parse("2022-04-19T22:48:27.858Z");
                createdateFrom = OffsetDateTime.parse("2022-02-26T02:08:07.981Z");
                createdateTo = OffsetDateTime.parse("2022-04-25T19:30:06.702Z");
                description = "expedita";
                filesuffix = "libero";
                fromdate = OffsetDateTime.parse("2020-03-31T05:07:12.669Z");
                group = "dolores";
                max = 281416L;
                maxlatitude = 4724.44;
                maxlongitude = 6906.54;
                minlatitude = 4559.58;
                minlongitude = 4006.57;
                name = "Marcus VonRueden";
                searchTypePointGeomagIaga2002DataInterval = "exercitationem";
                searchTypePointGeomagIaga2002DataType = "voluptatem";
                searchTypePointGeomagIaga2002DigitalSampling = "beatae";
                searchTypePointGeomagIaga2002IagaCode = "qui";
                searchTypePointGeomagIaga2002SourceOfData = "laboriosam";
                searchTypePointGeomagIaga2002StationName = "temporibus";
                skip = 447678L;
                text = "veritatis";
                todate = OffsetDateTime.parse("2020-01-28T19:32:23.296Z");
            }};            

            SearchTypePointGeomagIaga2002Response res = sdk.typeTypePointGeomagIaga2002.searchTypePointGeomagIaga2002(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
