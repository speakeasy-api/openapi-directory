# typeProjectInstrument

## Overview

Search API for 'Instrument Data Collection' entry type

### Available Operations

* [searchProjectInstrument](#searchprojectinstrument) - Search API for 'Instrument Data Collection' entry type

## searchProjectInstrument

API to search for entries of type Instrument Data Collection

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectInstrumentRequest;
import org.openapis.openapi.models.operations.SearchProjectInstrumentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectInstrumentRequest req = new SearchProjectInstrumentRequest() {{
                changedateFrom = OffsetDateTime.parse("2020-02-15T03:11:54.650Z");
                changedateTo = OffsetDateTime.parse("2022-10-05T07:02:20.526Z");
                createdateFrom = OffsetDateTime.parse("2022-03-28T10:53:29.573Z");
                createdateTo = OffsetDateTime.parse("2020-05-23T03:36:44.573Z");
                description = "tenetur";
                filesuffix = "molestias";
                fromdate = OffsetDateTime.parse("2022-07-18T11:29:26.661Z");
                group = "laborum";
                max = 596185L;
                maxlatitude = 9156.47;
                maxlongitude = 4288.1;
                minlatitude = 951.23;
                minlongitude = 5551.94;
                name = "Tonya Sauer";
                skip = 695347L;
                text = "explicabo";
                todate = OffsetDateTime.parse("2022-02-21T02:10:01.888Z");
            }};            

            SearchProjectInstrumentResponse res = sdk.typeProjectInstrument.searchProjectInstrument(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
