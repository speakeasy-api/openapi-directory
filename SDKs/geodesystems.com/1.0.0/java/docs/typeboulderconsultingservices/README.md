# typeBoulderConsultingServices

## Overview

Search API for 'Boulder Consulting Services Database' entry type

### Available Operations

* [searchBoulderConsultingServices](#searchboulderconsultingservices) - Search API for 'Boulder Consulting Services Database' entry type

## searchBoulderConsultingServices

API to search for entries of type Boulder Consulting Services Database

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBoulderConsultingServicesRequest;
import org.openapis.openapi.models.operations.SearchBoulderConsultingServicesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBoulderConsultingServicesRequest req = new SearchBoulderConsultingServicesRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-08-16T16:15:17.905Z");
                changedateTo = OffsetDateTime.parse("2022-07-05T18:37:23.267Z");
                createdateFrom = OffsetDateTime.parse("2022-01-07T16:50:11.026Z");
                createdateTo = OffsetDateTime.parse("2022-07-06T09:42:25.585Z");
                description = "voluptatibus";
                filesuffix = "voluptas";
                fromdate = OffsetDateTime.parse("2022-11-12T00:03:51.639Z");
                group = "ea";
                max = 310067L;
                maxlatitude = 1629.54;
                maxlongitude = 8315.2;
                minlatitude = 6387.62;
                minlongitude = 8070.23;
                name = "Blanche Yundt II";
                searchDbBoulderConsultingServicesAccountDescription = "porro";
                searchDbBoulderConsultingServicesAmount = 8018.36;
                searchDbBoulderConsultingServicesComment = "labore";
                searchDbBoulderConsultingServicesDate = "ab";
                searchDbBoulderConsultingServicesDepartment = "adipisci";
                searchDbBoulderConsultingServicesFund = "fuga";
                searchDbBoulderConsultingServicesObject = "id";
                searchDbBoulderConsultingServicesOrganization = "suscipit";
                searchDbBoulderConsultingServicesProject = "velit";
                searchDbBoulderConsultingServicesPurchaseOrder = "culpa";
                searchDbBoulderConsultingServicesVendorName = "est";
                skip = 926880L;
                text = "totam";
                todate = OffsetDateTime.parse("2021-09-23T14:56:28.537Z");
            }};            

            SearchBoulderConsultingServicesResponse res = sdk.typeBoulderConsultingServices.searchBoulderConsultingServices(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
