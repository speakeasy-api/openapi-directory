# typeTypeIdvBundle

## Overview

Search API for 'IDV Bundle' entry type

### Available Operations

* [searchTypeIdvBundle](#searchtypeidvbundle) - Search API for 'IDV Bundle' entry type

## searchTypeIdvBundle

API to search for entries of type IDV Bundle

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeIdvBundleRequest;
import org.openapis.openapi.models.operations.SearchTypeIdvBundleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeIdvBundleRequest req = new SearchTypeIdvBundleRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-03-20T21:35:25.876Z");
                changedateTo = OffsetDateTime.parse("2020-11-09T03:34:35.256Z");
                createdateFrom = OffsetDateTime.parse("2022-11-08T17:29:46.483Z");
                createdateTo = OffsetDateTime.parse("2022-05-15T00:58:22.386Z");
                description = "facilis";
                filesuffix = "minus";
                fromdate = OffsetDateTime.parse("2020-09-06T04:49:44.902Z");
                group = "omnis";
                max = 92279L;
                maxlatitude = 9391.31;
                maxlongitude = 6855.13;
                minlatitude = 6654.27;
                minlongitude = 7160.24;
                name = "Jody Lebsack";
                skip = 461094L;
                text = "vitae";
                todate = OffsetDateTime.parse("2021-11-03T21:22:50.101Z");
            }};            

            SearchTypeIdvBundleResponse res = sdk.typeTypeIdvBundle.searchTypeIdvBundle(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
