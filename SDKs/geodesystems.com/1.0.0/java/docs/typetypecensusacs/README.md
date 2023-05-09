# typeTypeCensusAcs

## Overview

Search API for 'US Census ACS Data' entry type

### Available Operations

* [searchTypeCensusAcs](#searchtypecensusacs) - Search API for 'US Census ACS Data' entry type

## searchTypeCensusAcs

API to search for entries of type US Census ACS Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeCensusAcsRequest;
import org.openapis.openapi.models.operations.SearchTypeCensusAcsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeCensusAcsRequest req = new SearchTypeCensusAcsRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-04-11T17:07:28.537Z");
                changedateTo = OffsetDateTime.parse("2022-10-18T18:15:07.964Z");
                createdateFrom = OffsetDateTime.parse("2022-06-22T03:59:26.894Z");
                createdateTo = OffsetDateTime.parse("2022-09-06T06:29:15.334Z");
                description = "a";
                filesuffix = "facere";
                fromdate = OffsetDateTime.parse("2021-12-03T03:19:06.487Z");
                group = "quaerat";
                max = 45850L;
                maxlatitude = 4898.21;
                maxlongitude = 4638.95;
                minlatitude = 2640.73;
                minlongitude = 6839.8;
                name = "Leah Nienow";
                searchTypeCensusAcsFields = "dolor";
                searchTypeCensusAcsForType = "ad";
                searchTypeCensusAcsInType1 = "illum";
                searchTypeCensusAcsInType2 = "sit";
                skip = 561399L;
                text = "voluptas";
                todate = OffsetDateTime.parse("2022-04-01T23:22:38.639Z");
            }};            

            SearchTypeCensusAcsResponse res = sdk.typeTypeCensusAcs.searchTypeCensusAcs(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
