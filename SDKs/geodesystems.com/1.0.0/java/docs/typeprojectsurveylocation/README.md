# typeProjectSurveylocation

## Overview

Search API for 'Survey Location' entry type

### Available Operations

* [searchProjectSurveylocation](#searchprojectsurveylocation) - Search API for 'Survey Location' entry type

## searchProjectSurveylocation

API to search for entries of type Survey Location

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectSurveylocationRequest;
import org.openapis.openapi.models.operations.SearchProjectSurveylocationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectSurveylocationRequest req = new SearchProjectSurveylocationRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-03-25T11:30:31.290Z");
                changedateTo = OffsetDateTime.parse("2022-06-13T16:26:05.767Z");
                createdateFrom = OffsetDateTime.parse("2021-11-18T05:53:55.515Z");
                createdateTo = OffsetDateTime.parse("2022-05-30T00:03:31.362Z");
                description = "quas";
                filesuffix = "ipsum";
                fromdate = OffsetDateTime.parse("2020-12-13T13:53:50.677Z");
                group = "facilis";
                max = 983060L;
                maxlatitude = 6229.68;
                maxlongitude = 9261.19;
                minlatitude = 9559.62;
                minlongitude = 2349.64;
                name = "Jan Senger";
                skip = 966652L;
                text = "odio";
                todate = OffsetDateTime.parse("2022-12-17T10:03:07.861Z");
            }};            

            SearchProjectSurveylocationResponse res = sdk.typeProjectSurveylocation.searchProjectSurveylocation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
