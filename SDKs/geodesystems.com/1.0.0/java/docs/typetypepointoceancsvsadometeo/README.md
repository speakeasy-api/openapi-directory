# typeTypePointOceanCsvSadoMeteo

## Overview

Search API for 'SADO Meteo Data' entry type

### Available Operations

* [searchTypePointOceanCsvSadoMeteo](#searchtypepointoceancsvsadometeo) - Search API for 'SADO Meteo Data' entry type

## searchTypePointOceanCsvSadoMeteo

API to search for entries of type SADO Meteo Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointOceanCsvSadoMeteoRequest;
import org.openapis.openapi.models.operations.SearchTypePointOceanCsvSadoMeteoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointOceanCsvSadoMeteoRequest req = new SearchTypePointOceanCsvSadoMeteoRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-05-13T11:12:39.454Z");
                changedateTo = OffsetDateTime.parse("2022-01-11T22:31:41.392Z");
                createdateFrom = OffsetDateTime.parse("2022-12-17T05:18:24.814Z");
                createdateTo = OffsetDateTime.parse("2021-07-11T09:21:33.418Z");
                description = "non";
                filesuffix = "facere";
                fromdate = OffsetDateTime.parse("2021-12-15T21:04:43.668Z");
                group = "quidem";
                max = 408208L;
                maxlatitude = 4772.22;
                maxlongitude = 1124.41;
                minlatitude = 5704.37;
                minlongitude = 5280.85;
                name = "Gary Wisozk";
                skip = 667449L;
                text = "tempora";
                todate = OffsetDateTime.parse("2021-07-31T23:57:53.258Z");
            }};            

            SearchTypePointOceanCsvSadoMeteoResponse res = sdk.typeTypePointOceanCsvSadoMeteo.searchTypePointOceanCsvSadoMeteo(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
