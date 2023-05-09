# typeTypeNasaames

## Overview

Search API for 'NASA AMES File' entry type

### Available Operations

* [searchTypeNasaames](#searchtypenasaames) - Search API for 'NASA AMES File' entry type

## searchTypeNasaames

API to search for entries of type NASA AMES File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeNasaamesRequest;
import org.openapis.openapi.models.operations.SearchTypeNasaamesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeNasaamesRequest req = new SearchTypeNasaamesRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-03-06T04:50:31.611Z");
                changedateTo = OffsetDateTime.parse("2022-08-24T06:24:18.561Z");
                createdateFrom = OffsetDateTime.parse("2022-07-15T07:16:53.819Z");
                createdateTo = OffsetDateTime.parse("2022-05-23T16:27:54.446Z");
                description = "reiciendis";
                filesuffix = "qui";
                fromdate = OffsetDateTime.parse("2021-06-27T13:27:59.360Z");
                group = "numquam";
                max = 78996L;
                maxlatitude = 8997.47;
                maxlongitude = 9464.16;
                minlatitude = 3495.58;
                minlongitude = 4682.21;
                name = "Mr. Erica Wuckert";
                skip = 572996L;
                text = "id";
                todate = OffsetDateTime.parse("2022-09-19T12:52:26.784Z");
            }};            

            SearchTypeNasaamesResponse res = sdk.typeTypeNasaames.searchTypeNasaames(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
