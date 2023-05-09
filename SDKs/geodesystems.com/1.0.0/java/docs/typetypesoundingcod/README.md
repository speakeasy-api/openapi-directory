# typeTypeSoundingCod

## Overview

Search API for 'COD Sounding' entry type

### Available Operations

* [searchTypeSoundingCod](#searchtypesoundingcod) - Search API for 'COD Sounding' entry type

## searchTypeSoundingCod

API to search for entries of type COD Sounding

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeSoundingCodRequest;
import org.openapis.openapi.models.operations.SearchTypeSoundingCodResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeSoundingCodRequest req = new SearchTypeSoundingCodRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-06-20T14:42:56.584Z");
                changedateTo = OffsetDateTime.parse("2022-06-15T12:37:10.194Z");
                createdateFrom = OffsetDateTime.parse("2022-12-06T10:34:05.102Z");
                createdateTo = OffsetDateTime.parse("2021-05-14T00:18:21.167Z");
                description = "ducimus";
                filesuffix = "nisi";
                fromdate = OffsetDateTime.parse("2020-05-07T02:41:22.401Z");
                group = "necessitatibus";
                max = 720552L;
                maxlatitude = 3673.5;
                maxlongitude = 841.54;
                minlatitude = 5623.39;
                minlongitude = 7721.25;
                name = "Dr. Elena Murazik";
                skip = 832589L;
                text = "dolor";
                todate = OffsetDateTime.parse("2022-08-31T14:19:07.244Z");
            }};            

            SearchTypeSoundingCodResponse res = sdk.typeTypeSoundingCod.searchTypeSoundingCod(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
