# typeTypePointHydroWaterml

## Overview

Search API for 'WaterML' entry type

### Available Operations

* [searchTypePointHydroWaterml](#searchtypepointhydrowaterml) - Search API for 'WaterML' entry type

## searchTypePointHydroWaterml

API to search for entries of type WaterML

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointHydroWatermlRequest;
import org.openapis.openapi.models.operations.SearchTypePointHydroWatermlResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointHydroWatermlRequest req = new SearchTypePointHydroWatermlRequest() {{
                changedateFrom = OffsetDateTime.parse("2020-11-20T16:02:49.007Z");
                changedateTo = OffsetDateTime.parse("2022-12-19T12:36:59.311Z");
                createdateFrom = OffsetDateTime.parse("2020-11-27T16:31:45.176Z");
                createdateTo = OffsetDateTime.parse("2022-09-10T08:29:20.302Z");
                description = "distinctio";
                filesuffix = "blanditiis";
                fromdate = OffsetDateTime.parse("2022-11-11T00:09:42.792Z");
                group = "ab";
                max = 603512L;
                maxlatitude = 3654.73;
                maxlongitude = 2134.05;
                minlatitude = 6979.15;
                minlongitude = 2828.25;
                name = "Melody Stoltenberg";
                searchTypePointHydroWatermlSiteCode = "labore";
                searchTypePointHydroWatermlSiteName = "sequi";
                skip = 86885L;
                text = "veniam";
                todate = OffsetDateTime.parse("2021-05-08T12:41:52.891Z");
            }};            

            SearchTypePointHydroWatermlResponse res = sdk.typeTypePointHydroWaterml.searchTypePointHydroWaterml(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
