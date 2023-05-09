# typeTypeEsriRestfolder

## Overview

Search API for 'ESRI Services Folder' entry type

### Available Operations

* [searchTypeEsriRestfolder](#searchtypeesrirestfolder) - Search API for 'ESRI Services Folder' entry type

## searchTypeEsriRestfolder

API to search for entries of type ESRI Services Folder

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeEsriRestfolderRequest;
import org.openapis.openapi.models.operations.SearchTypeEsriRestfolderResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeEsriRestfolderRequest req = new SearchTypeEsriRestfolderRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-01-17T10:42:22.968Z");
                changedateTo = OffsetDateTime.parse("2021-12-05T03:14:49.946Z");
                createdateFrom = OffsetDateTime.parse("2022-12-17T20:31:22.684Z");
                createdateTo = OffsetDateTime.parse("2022-04-10T08:34:13.727Z");
                description = "excepturi";
                filesuffix = "odio";
                fromdate = OffsetDateTime.parse("2021-03-24T04:22:11.526Z");
                group = "delectus";
                max = 169229L;
                maxlatitude = 232.36;
                maxlongitude = 2432.47;
                minlatitude = 5311.04;
                minlongitude = 4716.42;
                name = "Nicole Becker";
                skip = 15563L;
                text = "impedit";
                todate = OffsetDateTime.parse("2020-09-04T12:32:09.161Z");
            }};            

            SearchTypeEsriRestfolderResponse res = sdk.typeTypeEsriRestfolder.searchTypeEsriRestfolder(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
