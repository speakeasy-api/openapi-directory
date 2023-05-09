# typeBioStockholm

## Overview

Search API for 'Stockholm File' entry type

### Available Operations

* [searchBioStockholm](#searchbiostockholm) - Search API for 'Stockholm File' entry type

## searchBioStockholm

API to search for entries of type Stockholm File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBioStockholmRequest;
import org.openapis.openapi.models.operations.SearchBioStockholmResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBioStockholmRequest req = new SearchBioStockholmRequest() {{
                changedateFrom = OffsetDateTime.parse("2020-08-21T15:23:31.740Z");
                changedateTo = OffsetDateTime.parse("2021-03-07T21:49:29.078Z");
                createdateFrom = OffsetDateTime.parse("2022-10-13T06:47:27.001Z");
                createdateTo = OffsetDateTime.parse("2021-08-20T14:09:47.998Z");
                description = "consectetur";
                filesuffix = "vero";
                fromdate = OffsetDateTime.parse("2021-07-10T23:11:25.857Z");
                group = "hic";
                max = 715561L;
                maxlatitude = 7992.03;
                maxlongitude = 4861.6;
                minlatitude = 6304.48;
                minlongitude = 7085.48;
                name = "Allan Greenholt";
                skip = 194342L;
                text = "natus";
                todate = OffsetDateTime.parse("2022-12-17T12:08:06.467Z");
            }};            

            SearchBioStockholmResponse res = sdk.typeBioStockholm.searchBioStockholm(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
