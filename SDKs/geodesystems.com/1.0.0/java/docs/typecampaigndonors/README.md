# typeCampaignDonors

## Overview

Search API for 'Campaign Donors' entry type

### Available Operations

* [searchCampaignDonors](#searchcampaigndonors) - Search API for 'Campaign Donors' entry type

## searchCampaignDonors

API to search for entries of type Campaign Donors

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchCampaignDonorsRequest;
import org.openapis.openapi.models.operations.SearchCampaignDonorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchCampaignDonorsRequest req = new SearchCampaignDonorsRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-11-28T21:25:01.550Z");
                changedateTo = OffsetDateTime.parse("2021-07-31T10:53:55.286Z");
                createdateFrom = OffsetDateTime.parse("2022-12-29T02:56:05.947Z");
                createdateTo = OffsetDateTime.parse("2022-08-17T23:19:52.079Z");
                description = "sit";
                filesuffix = "voluptatum";
                fromdate = OffsetDateTime.parse("2021-02-26T20:36:25.696Z");
                group = "corporis";
                max = 89494L;
                maxlatitude = 5027.1;
                maxlongitude = 4059.42;
                minlatitude = 1536.27;
                minlongitude = 243.13;
                name = "Bernice Ullrich II";
                searchDbCampaignDonorsAmount = 9688.65;
                searchDbCampaignDonorsCity = "dolorem";
                searchDbCampaignDonorsCommittee = "harum";
                searchDbCampaignDonorsDate = "dicta";
                searchDbCampaignDonorsDonor = "architecto";
                searchDbCampaignDonorsEmployer = "occaecati";
                searchDbCampaignDonorsGender = "labore";
                searchDbCampaignDonorsLocation = "quidem";
                searchDbCampaignDonorsOccupation = "atque";
                searchDbCampaignDonorsParty = "laborum";
                searchDbCampaignDonorsState = "nam";
                searchDbCampaignDonorsZipCode = "tenetur";
                skip = 388867L;
                text = "alias";
                todate = OffsetDateTime.parse("2022-05-09T18:33:26.033Z");
            }};            

            SearchCampaignDonorsResponse res = sdk.typeCampaignDonors.searchCampaignDonors(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
