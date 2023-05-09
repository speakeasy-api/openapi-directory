# typeProjectOrganization

## Overview

Search API for 'Organization' entry type

### Available Operations

* [searchProjectOrganization](#searchprojectorganization) - Search API for 'Organization' entry type

## searchProjectOrganization

API to search for entries of type Organization

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectOrganizationRequest;
import org.openapis.openapi.models.operations.SearchProjectOrganizationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectOrganizationRequest req = new SearchProjectOrganizationRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-04-10T02:34:04.729Z");
                changedateTo = OffsetDateTime.parse("2021-03-14T12:10:11.341Z");
                createdateFrom = OffsetDateTime.parse("2022-03-25T23:55:31.783Z");
                createdateTo = OffsetDateTime.parse("2021-04-20T17:26:00.007Z");
                description = "distinctio";
                filesuffix = "voluptatem";
                fromdate = OffsetDateTime.parse("2022-09-09T18:41:13.955Z");
                group = "consequatur";
                max = 515433L;
                maxlatitude = 8310.67;
                maxlongitude = 4159.53;
                minlatitude = 8436.79;
                minlongitude = 2312.55;
                name = "Michele Wehner";
                searchProjectOrganizationOrganizationType = "dolore";
                searchProjectOrganizationStatus = "enim";
                skip = 353904L;
                text = "perspiciatis";
                todate = OffsetDateTime.parse("2022-08-06T11:53:42.173Z");
            }};            

            SearchProjectOrganizationResponse res = sdk.typeProjectOrganization.searchProjectOrganization(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
