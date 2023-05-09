# typeOpendaplink

## Overview

Search API for 'OPeNDAP Link' entry type

### Available Operations

* [searchOpendaplink](#searchopendaplink) - Search API for 'OPeNDAP Link' entry type

## searchOpendaplink

API to search for entries of type OPeNDAP Link

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchOpendaplinkRequest;
import org.openapis.openapi.models.operations.SearchOpendaplinkResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchOpendaplinkRequest req = new SearchOpendaplinkRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-03-17T01:52:56.190Z");
                changedateTo = OffsetDateTime.parse("2020-03-24T21:36:14.545Z");
                createdateFrom = OffsetDateTime.parse("2021-06-25T15:44:39.144Z");
                createdateTo = OffsetDateTime.parse("2022-11-09T08:59:28.620Z");
                description = "sit";
                filesuffix = "aliquid";
                fromdate = OffsetDateTime.parse("2022-07-21T20:56:24.947Z");
                group = "deleniti";
                max = 122744L;
                maxlatitude = 2001.9;
                maxlongitude = 9639.13;
                minlatitude = 6736.53;
                minlongitude = 3034.21;
                name = "Edwin Cartwright";
                skip = 528320L;
                text = "ipsa";
                todate = OffsetDateTime.parse("2022-05-16T04:51:59.785Z");
            }};            

            SearchOpendaplinkResponse res = sdk.typeOpendaplink.searchOpendaplink(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
