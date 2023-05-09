# typeBioFastq

## Overview

Search API for 'FASTQ File' entry type

### Available Operations

* [searchBioFastq](#searchbiofastq) - Search API for 'FASTQ File' entry type

## searchBioFastq

API to search for entries of type FASTQ File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBioFastqRequest;
import org.openapis.openapi.models.operations.SearchBioFastqResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBioFastqRequest req = new SearchBioFastqRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-04-14T09:13:11.675Z");
                changedateTo = OffsetDateTime.parse("2022-07-22T03:36:34.615Z");
                createdateFrom = OffsetDateTime.parse("2020-02-22T17:45:21.686Z");
                createdateTo = OffsetDateTime.parse("2022-02-08T14:21:47.573Z");
                description = "in";
                filesuffix = "illum";
                fromdate = OffsetDateTime.parse("2020-11-26T01:41:04.216Z");
                group = "dicta";
                max = 297437L;
                maxlatitude = 7670.24;
                maxlongitude = 8137.98;
                minlatitude = 4118.2;
                minlongitude = 3965.06;
                name = "Tomas Friesen";
                skip = 881736L;
                text = "delectus";
                todate = OffsetDateTime.parse("2021-10-28T10:05:29.849Z");
            }};            

            SearchBioFastqResponse res = sdk.typeBioFastq.searchBioFastq(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
