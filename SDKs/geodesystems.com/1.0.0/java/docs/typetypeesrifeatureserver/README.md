# typeTypeEsriFeatureserver

## Overview

Search API for 'ESRI Feature Server' entry type

### Available Operations

* [searchTypeEsriFeatureserver](#searchtypeesrifeatureserver) - Search API for 'ESRI Feature Server' entry type

## searchTypeEsriFeatureserver

API to search for entries of type ESRI Feature Server

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeEsriFeatureserverRequest;
import org.openapis.openapi.models.operations.SearchTypeEsriFeatureserverResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeEsriFeatureserverRequest req = new SearchTypeEsriFeatureserverRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-10-10T02:46:21.249Z");
                changedateTo = OffsetDateTime.parse("2022-06-17T01:57:37.545Z");
                createdateFrom = OffsetDateTime.parse("2022-07-11T16:58:55.649Z");
                createdateTo = OffsetDateTime.parse("2022-11-28T14:50:23.356Z");
                description = "vitae";
                filesuffix = "mollitia";
                fromdate = OffsetDateTime.parse("2020-05-20T12:36:20.334Z");
                group = "quibusdam";
                max = 461853L;
                maxlatitude = 5345.09;
                maxlongitude = 5232.66;
                minlatitude = 4245.53;
                minlongitude = 1777.9;
                name = "Katherine Kuvalis";
                skip = 716410L;
                text = "incidunt";
                todate = OffsetDateTime.parse("2022-07-02T07:17:30.104Z");
            }};            

            SearchTypeEsriFeatureserverResponse res = sdk.typeTypeEsriFeatureserver.searchTypeEsriFeatureserver(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
