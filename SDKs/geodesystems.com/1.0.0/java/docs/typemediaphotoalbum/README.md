# typeMediaPhotoalbum

## Overview

Search API for 'Photo Album' entry type

### Available Operations

* [searchMediaPhotoalbum](#searchmediaphotoalbum) - Search API for 'Photo Album' entry type

## searchMediaPhotoalbum

API to search for entries of type Photo Album

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchMediaPhotoalbumRequest;
import org.openapis.openapi.models.operations.SearchMediaPhotoalbumResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchMediaPhotoalbumRequest req = new SearchMediaPhotoalbumRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-10-10T02:06:29.028Z");
                changedateTo = OffsetDateTime.parse("2022-06-20T03:06:33.282Z");
                createdateFrom = OffsetDateTime.parse("2022-02-07T13:46:35.143Z");
                createdateTo = OffsetDateTime.parse("2022-06-08T21:51:55.851Z");
                description = "dolore";
                filesuffix = "sunt";
                fromdate = OffsetDateTime.parse("2022-05-21T12:17:59.359Z");
                group = "odit";
                max = 936845L;
                maxlatitude = 3305.96;
                maxlongitude = 3731.06;
                minlatitude = 510.53;
                minlongitude = 3503.87;
                name = "Jackie Hammes";
                skip = 338281L;
                text = "quibusdam";
                todate = OffsetDateTime.parse("2022-08-14T06:59:07.022Z");
            }};            

            SearchMediaPhotoalbumResponse res = sdk.typeMediaPhotoalbum.searchMediaPhotoalbum(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
