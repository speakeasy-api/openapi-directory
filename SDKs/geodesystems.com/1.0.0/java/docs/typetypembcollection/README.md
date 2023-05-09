# typeTypeMbCollection

## Overview

Search API for 'Bathymetry Collection' entry type

### Available Operations

* [searchTypeMbCollection](#searchtypembcollection) - Search API for 'Bathymetry Collection' entry type

## searchTypeMbCollection

API to search for entries of type Bathymetry Collection

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeMbCollectionRequest;
import org.openapis.openapi.models.operations.SearchTypeMbCollectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeMbCollectionRequest req = new SearchTypeMbCollectionRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-11-01T03:40:00.912Z");
                changedateTo = OffsetDateTime.parse("2021-08-25T07:41:00.958Z");
                createdateFrom = OffsetDateTime.parse("2022-02-28T07:51:52.960Z");
                createdateTo = OffsetDateTime.parse("2020-10-18T22:48:14.460Z");
                description = "commodi";
                filesuffix = "autem";
                fromdate = OffsetDateTime.parse("2022-09-01T17:17:25.932Z");
                group = "quisquam";
                max = 711819L;
                maxlatitude = 4478.78;
                maxlongitude = 526.59;
                minlatitude = 9662.22;
                minlongitude = 5019.46;
                name = "Roman Shanahan";
                skip = 733674L;
                text = "laboriosam";
                todate = OffsetDateTime.parse("2021-04-05T19:29:25.874Z");
            }};            

            SearchTypeMbCollectionResponse res = sdk.typeTypeMbCollection.searchTypeMbCollection(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
