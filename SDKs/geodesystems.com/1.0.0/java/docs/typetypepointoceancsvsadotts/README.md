# typeTypePointOceanCsvSadoTTS

## Overview

Search API for 'SADO TTS Data' entry type

### Available Operations

* [searchTypePointOceanCsvSadoTTS](#searchtypepointoceancsvsadotts) - Search API for 'SADO TTS Data' entry type

## searchTypePointOceanCsvSadoTTS

API to search for entries of type SADO TTS Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointOceanCsvSadoTTSRequest;
import org.openapis.openapi.models.operations.SearchTypePointOceanCsvSadoTTSResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointOceanCsvSadoTTSRequest req = new SearchTypePointOceanCsvSadoTTSRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-12-03T23:04:12.170Z");
                changedateTo = OffsetDateTime.parse("2022-12-11T19:04:42.317Z");
                createdateFrom = OffsetDateTime.parse("2021-08-21T23:19:50.215Z");
                createdateTo = OffsetDateTime.parse("2021-02-25T23:03:51.261Z");
                description = "deleniti";
                filesuffix = "dignissimos";
                fromdate = OffsetDateTime.parse("2022-02-26T21:44:20.533Z");
                group = "adipisci";
                max = 793752L;
                maxlatitude = 3309.08;
                maxlongitude = 6646.79;
                minlatitude = 1021.82;
                minlongitude = 9782.29;
                name = "Wilbert Cummings";
                skip = 789015L;
                text = "odio";
                todate = OffsetDateTime.parse("2022-02-16T00:22:11.378Z");
            }};            

            SearchTypePointOceanCsvSadoTTSResponse res = sdk.typeTypePointOceanCsvSadoTTS.searchTypePointOceanCsvSadoTTS(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
