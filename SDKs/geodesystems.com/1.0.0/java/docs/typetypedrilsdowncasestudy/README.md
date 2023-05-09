# typeTypeDrilsdownCasestudy

## Overview

Search API for 'Drilsdown Case Study' entry type

### Available Operations

* [searchTypeDrilsdownCasestudy](#searchtypedrilsdowncasestudy) - Search API for 'Drilsdown Case Study' entry type

## searchTypeDrilsdownCasestudy

API to search for entries of type Drilsdown Case Study

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeDrilsdownCasestudyRequest;
import org.openapis.openapi.models.operations.SearchTypeDrilsdownCasestudyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeDrilsdownCasestudyRequest req = new SearchTypeDrilsdownCasestudyRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-08-10T06:27:07.573Z");
                changedateTo = OffsetDateTime.parse("2021-01-15T19:33:26.213Z");
                createdateFrom = OffsetDateTime.parse("2021-08-06T05:38:53.226Z");
                createdateTo = OffsetDateTime.parse("2021-05-27T13:23:11.341Z");
                description = "aspernatur";
                filesuffix = "eaque";
                fromdate = OffsetDateTime.parse("2020-10-31T16:33:47.128Z");
                group = "ex";
                max = 483626L;
                maxlatitude = 9630.94;
                maxlongitude = 7949.27;
                minlatitude = 2835.14;
                minlongitude = 7160.58;
                name = "Julia Hartmann";
                skip = 577707L;
                text = "debitis";
                todate = OffsetDateTime.parse("2022-10-28T15:46:21.236Z");
            }};            

            SearchTypeDrilsdownCasestudyResponse res = sdk.typeTypeDrilsdownCasestudy.searchTypeDrilsdownCasestudy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
