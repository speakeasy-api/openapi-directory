# typeBioSam

## Overview

Search API for 'SAM Data' entry type

### Available Operations

* [searchBioSam](#searchbiosam) - Search API for 'SAM Data' entry type

## searchBioSam

API to search for entries of type SAM Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBioSamRequest;
import org.openapis.openapi.models.operations.SearchBioSamResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBioSamRequest req = new SearchBioSamRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-03-29T09:11:09.370Z");
                changedateTo = OffsetDateTime.parse("2022-09-08T12:03:15.868Z");
                createdateFrom = OffsetDateTime.parse("2022-01-16T12:43:49.763Z");
                createdateTo = OffsetDateTime.parse("2022-01-21T14:54:44.081Z");
                description = "sit";
                filesuffix = "expedita";
                fromdate = OffsetDateTime.parse("2022-11-05T21:38:15.600Z");
                group = "vel";
                max = 730442L;
                maxlatitude = 3741.7;
                maxlongitude = 6462.65;
                minlatitude = 4635.75;
                minlongitude = 2148.8;
                name = "Norma McGlynn";
                skip = 747080L;
                text = "dicta";
                todate = OffsetDateTime.parse("2021-12-19T07:31:04.219Z");
            }};            

            SearchBioSamResponse res = sdk.typeBioSam.searchBioSam(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
