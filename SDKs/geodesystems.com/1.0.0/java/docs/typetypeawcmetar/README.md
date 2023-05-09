# typeTypeAwcMetar

## Overview

Search API for 'AWC Weather Observations' entry type

### Available Operations

* [searchTypeAwcMetar](#searchtypeawcmetar) - Search API for 'AWC Weather Observations' entry type

## searchTypeAwcMetar

API to search for entries of type AWC Weather Observations

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeAwcMetarRequest;
import org.openapis.openapi.models.operations.SearchTypeAwcMetarResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeAwcMetarRequest req = new SearchTypeAwcMetarRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-04-23T05:13:17.017Z");
                changedateTo = OffsetDateTime.parse("2021-05-12T15:02:04.341Z");
                createdateFrom = OffsetDateTime.parse("2022-07-06T17:14:37.803Z");
                createdateTo = OffsetDateTime.parse("2022-11-12T23:49:14.405Z");
                description = "at";
                filesuffix = "illum";
                fromdate = OffsetDateTime.parse("2021-11-07T06:10:09.611Z");
                group = "exercitationem";
                max = 739938L;
                maxlatitude = 5327.21;
                maxlongitude = 7046.65;
                minlatitude = 8092.12;
                minlongitude = 9682.12;
                name = "Eleanor Streich";
                searchTypeAwcMetarSiteId = "nemo";
                skip = 615532L;
                text = "nisi";
                todate = OffsetDateTime.parse("2022-07-16T15:58:54.382Z");
            }};            

            SearchTypeAwcMetarResponse res = sdk.typeTypeAwcMetar.searchTypeAwcMetar(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
