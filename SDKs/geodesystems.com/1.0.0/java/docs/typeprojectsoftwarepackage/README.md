# typeProjectSoftwarepackage

## Overview

Search API for 'Software Tool' entry type

### Available Operations

* [searchProjectSoftwarepackage](#searchprojectsoftwarepackage) - Search API for 'Software Tool' entry type

## searchProjectSoftwarepackage

API to search for entries of type Software Tool

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectSoftwarepackageRequest;
import org.openapis.openapi.models.operations.SearchProjectSoftwarepackageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectSoftwarepackageRequest req = new SearchProjectSoftwarepackageRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-04-18T04:34:13.998Z");
                changedateTo = OffsetDateTime.parse("2022-02-28T18:10:48.265Z");
                createdateFrom = OffsetDateTime.parse("2022-09-13T17:26:24.471Z");
                createdateTo = OffsetDateTime.parse("2022-08-07T19:41:24.337Z");
                description = "eum";
                filesuffix = "vel";
                fromdate = OffsetDateTime.parse("2022-06-13T09:57:43.930Z");
                group = "illo";
                max = 383381L;
                maxlatitude = 8444.71;
                maxlongitude = 8554.84;
                minlatitude = 7716.03;
                minlongitude = 6329.39;
                name = "Pat Wuckert DVM";
                searchProjectSoftwarepackageCapabilities = "cumque";
                searchProjectSoftwarepackageDomain = "expedita";
                searchProjectSoftwarepackageLicense = "modi";
                searchProjectSoftwarepackagePlatform = "cumque";
                searchProjectSoftwarepackageSoftwareType = "ipsam";
                searchProjectSoftwarepackageSoftwareUse = "occaecati";
                searchProjectSoftwarepackageStatus = "ipsum";
                skip = 879193L;
                text = "quisquam";
                todate = OffsetDateTime.parse("2022-11-09T08:27:23.346Z");
            }};            

            SearchProjectSoftwarepackageResponse res = sdk.typeProjectSoftwarepackage.searchProjectSoftwarepackage(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
