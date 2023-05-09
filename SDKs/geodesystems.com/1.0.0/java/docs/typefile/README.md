# typeFile

## Overview

Search API for 'File' entry type

### Available Operations

* [searchFile](#searchfile) - Search API for 'File' entry type

## searchFile

API to search for entries of type File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchFileRequest;
import org.openapis.openapi.models.operations.SearchFileResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchFileRequest req = new SearchFileRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-01-25T16:13:44.576Z");
                changedateTo = OffsetDateTime.parse("2022-10-14T09:06:41.387Z");
                createdateFrom = OffsetDateTime.parse("2021-04-14T09:55:28.474Z");
                createdateTo = OffsetDateTime.parse("2021-05-24T21:18:28.969Z");
                description = "quia";
                filesuffix = "quia";
                fromdate = OffsetDateTime.parse("2022-05-24T21:57:47.411Z");
                group = "libero";
                max = 115661L;
                maxlatitude = 6633.18;
                maxlongitude = 7278.88;
                minlatitude = 8544.6;
                minlongitude = 6374.62;
                name = "Clark Balistreri DVM";
                skip = 80061L;
                text = "aperiam";
                todate = OffsetDateTime.parse("2022-06-01T04:35:31.707Z");
            }};            

            SearchFileResponse res = sdk.typeFile.searchFile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
