# typeBioDicom

## Overview

Search API for 'DICOM File' entry type

### Available Operations

* [searchBioDicom](#searchbiodicom) - Search API for 'DICOM File' entry type

## searchBioDicom

API to search for entries of type DICOM File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBioDicomRequest;
import org.openapis.openapi.models.operations.SearchBioDicomResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBioDicomRequest req = new SearchBioDicomRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-11-23T05:54:08.890Z");
                changedateTo = OffsetDateTime.parse("2021-05-11T16:11:54.761Z");
                createdateFrom = OffsetDateTime.parse("2022-11-26T13:23:33.410Z");
                createdateTo = OffsetDateTime.parse("2021-04-29T07:12:18.684Z");
                description = "laborum";
                filesuffix = "quasi";
                fromdate = OffsetDateTime.parse("2020-01-27T18:38:42.890Z");
                group = "vero";
                max = 468651L;
                maxlatitude = 5096.24;
                maxlongitude = 9767.62;
                minlatitude = 557.14;
                minlongitude = 6048.46;
                name = "Ms. Karla Aufderhar";
                skip = 979587L;
                text = "dicta";
                todate = OffsetDateTime.parse("2022-09-14T21:48:41.971Z");
            }};            

            SearchBioDicomResponse res = sdk.typeBioDicom.searchBioDicom(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
