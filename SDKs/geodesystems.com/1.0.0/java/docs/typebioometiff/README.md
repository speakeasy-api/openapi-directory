# typeBioOmeTiff

## Overview

Search API for 'OME TIFF File' entry type

### Available Operations

* [searchBioOmeTiff](#searchbioometiff) - Search API for 'OME TIFF File' entry type

## searchBioOmeTiff

API to search for entries of type OME TIFF File

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBioOmeTiffRequest;
import org.openapis.openapi.models.operations.SearchBioOmeTiffResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBioOmeTiffRequest req = new SearchBioOmeTiffRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-06-06T23:06:26.119Z");
                changedateTo = OffsetDateTime.parse("2022-05-30T07:57:16.138Z");
                createdateFrom = OffsetDateTime.parse("2021-11-07T17:49:17.039Z");
                createdateTo = OffsetDateTime.parse("2022-05-07T13:57:38.738Z");
                description = "reiciendis";
                filesuffix = "mollitia";
                fromdate = OffsetDateTime.parse("2022-07-27T12:46:27.682Z");
                group = "dolor";
                max = 896547L;
                maxlatitude = 1412.64;
                maxlongitude = 3675.62;
                minlatitude = 972.6;
                minlongitude = 4358.65;
                name = "Doyle Gibson";
                skip = 703889L;
                text = "in";
                todate = OffsetDateTime.parse("2022-11-25T15:46:28.441Z");
            }};            

            SearchBioOmeTiffResponse res = sdk.typeBioOmeTiff.searchBioOmeTiff(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
