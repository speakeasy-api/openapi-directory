# typeTypePointNoaaTower

## Overview

Search API for 'NOAA Tower Network' entry type

### Available Operations

* [searchTypePointNoaaTower](#searchtypepointnoaatower) - Search API for 'NOAA Tower Network' entry type

## searchTypePointNoaaTower

API to search for entries of type NOAA Tower Network

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointNoaaTowerRequest;
import org.openapis.openapi.models.operations.SearchTypePointNoaaTowerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointNoaaTowerRequest req = new SearchTypePointNoaaTowerRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-10-27T17:27:51.202Z");
                changedateTo = OffsetDateTime.parse("2021-05-24T05:26:08.769Z");
                createdateFrom = OffsetDateTime.parse("2022-10-07T17:16:18.553Z");
                createdateTo = OffsetDateTime.parse("2022-08-10T22:20:26.115Z");
                description = "aspernatur";
                filesuffix = "eveniet";
                fromdate = OffsetDateTime.parse("2021-01-08T15:03:54.731Z");
                group = "temporibus";
                max = 966682L;
                maxlatitude = 3165.84;
                maxlongitude = 3686.58;
                minlatitude = 7835.08;
                minlongitude = 1748.97;
                name = "Ms. Mario Sawayn DDS";
                searchTypePointNoaaTowerSiteId = "accusantium";
                skip = 408509L;
                text = "laborum";
                todate = OffsetDateTime.parse("2022-11-09T03:03:37.221Z");
            }};            

            SearchTypePointNoaaTowerResponse res = sdk.typeTypePointNoaaTower.searchTypePointNoaaTower(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
