# typeProjectDataformat

## Overview

Search API for 'Data Format' entry type

### Available Operations

* [searchProjectDataformat](#searchprojectdataformat) - Search API for 'Data Format' entry type

## searchProjectDataformat

API to search for entries of type Data Format

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectDataformatRequest;
import org.openapis.openapi.models.operations.SearchProjectDataformatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectDataformatRequest req = new SearchProjectDataformatRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-09-14T03:21:59.824Z");
                changedateTo = OffsetDateTime.parse("2022-02-20T03:58:51.322Z");
                createdateFrom = OffsetDateTime.parse("2021-03-30T00:37:54.186Z");
                createdateTo = OffsetDateTime.parse("2022-08-26T17:41:33.772Z");
                description = "laborum";
                filesuffix = "illum";
                fromdate = OffsetDateTime.parse("2022-03-13T05:15:53.160Z");
                group = "dolorum";
                max = 998355L;
                maxlatitude = 3419.83;
                maxlongitude = 8473.08;
                minlatitude = 8450.86;
                minlongitude = 4144.56;
                name = "Judith Feest";
                searchProjectDataformatDataType = "ipsa";
                searchProjectDataformatField = "maiores";
                skip = 350271L;
                text = "culpa";
                todate = OffsetDateTime.parse("2022-08-06T19:13:49.286Z");
            }};            

            SearchProjectDataformatResponse res = sdk.typeProjectDataformat.searchProjectDataformat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
