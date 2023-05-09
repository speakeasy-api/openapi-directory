# typeProjectStandardName

## Overview

Search API for 'Standard Parameter Name' entry type

### Available Operations

* [searchProjectStandardName](#searchprojectstandardname) - Search API for 'Standard Parameter Name' entry type

## searchProjectStandardName

API to search for entries of type Standard Parameter Name

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectStandardNameRequest;
import org.openapis.openapi.models.operations.SearchProjectStandardNameResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectStandardNameRequest req = new SearchProjectStandardNameRequest() {{
                changedateFrom = OffsetDateTime.parse("2020-06-25T04:21:40.208Z");
                changedateTo = OffsetDateTime.parse("2021-09-05T01:09:34.246Z");
                createdateFrom = OffsetDateTime.parse("2022-10-28T08:52:08.006Z");
                createdateTo = OffsetDateTime.parse("2020-07-26T23:23:59.902Z");
                description = "quam";
                filesuffix = "similique";
                fromdate = OffsetDateTime.parse("2020-04-15T01:03:52.923Z");
                group = "facere";
                max = 748723L;
                maxlatitude = 8690.88;
                maxlongitude = 5611.21;
                minlatitude = 128.77;
                minlongitude = 8365.48;
                name = "Barry Funk";
                searchProjectStandardNameAliases = "dolore";
                searchProjectStandardNameUnit = "esse";
                skip = 968205L;
                text = "iste";
                todate = OffsetDateTime.parse("2022-06-02T22:16:37.572Z");
            }};            

            SearchProjectStandardNameResponse res = sdk.typeProjectStandardName.searchProjectStandardName(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
