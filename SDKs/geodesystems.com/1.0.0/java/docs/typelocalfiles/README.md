# typeLocalfiles

## Overview

Search API for 'Server Side Files' entry type

### Available Operations

* [searchLocalfiles](#searchlocalfiles) - Search API for 'Server Side Files' entry type

## searchLocalfiles

API to search for entries of type Server Side Files

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchLocalfilesRequest;
import org.openapis.openapi.models.operations.SearchLocalfilesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchLocalfilesRequest req = new SearchLocalfilesRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-12-20T11:24:22.596Z");
                changedateTo = OffsetDateTime.parse("2020-04-19T09:30:43.417Z");
                createdateFrom = OffsetDateTime.parse("2022-12-21T17:37:11.705Z");
                createdateTo = OffsetDateTime.parse("2022-11-24T15:03:49.689Z");
                description = "similique";
                filesuffix = "porro";
                fromdate = OffsetDateTime.parse("2022-11-17T13:10:04.528Z");
                group = "magni";
                max = 885797L;
                maxlatitude = 1483.79;
                maxlongitude = 8981.11;
                minlatitude = 7732.59;
                minlongitude = 559.81;
                name = "Darnell Wunsch";
                skip = 691L;
                text = "asperiores";
                todate = OffsetDateTime.parse("2022-10-06T09:51:21.294Z");
            }};            

            SearchLocalfilesResponse res = sdk.typeLocalfiles.searchLocalfiles(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
