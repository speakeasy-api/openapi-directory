# typeBioDicomTest

## Overview

Search API for 'DICOM Test File' entry type

### Available Operations

* [searchBioDicomTest](#searchbiodicomtest) - Search API for 'DICOM Test File' entry type

## searchBioDicomTest

API to search for entries of type DICOM Test File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBioDicomTestRequest;
import org.openapis.openapi.models.operations.SearchBioDicomTestResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBioDicomTestRequest req = new SearchBioDicomTestRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-11-18T15:56:41.921Z");
                changedateTo = OffsetDateTime.parse("2022-05-13T20:56:04.612Z");
                createdateFrom = OffsetDateTime.parse("2021-10-04T09:10:06.610Z");
                createdateTo = OffsetDateTime.parse("2022-10-22T18:12:12.288Z");
                description = "ipsum";
                filesuffix = "quidem";
                fromdate = OffsetDateTime.parse("2021-11-13T09:08:33.009Z");
                group = "pariatur";
                max = 265389L;
                maxlatitude = 5089.69;
                maxlongitude = 5232.48;
                minlatitude = 9167.23;
                minlongitude = 939.4;
                name = "Kirk Boehm";
                searchBioDicomTestPatientID = "enim";
                searchBioDicomTestPatientName = "consequatur";
                skip = 667411L;
                text = "quibusdam";
                todate = OffsetDateTime.parse("2022-05-09T18:45:16.013Z");
            }};            

            SearchBioDicomTestResponse res = sdk.typeBioDicomTest.searchBioDicomTest(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
