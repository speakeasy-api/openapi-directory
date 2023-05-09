# typeCampaignExpenditures

## Overview

Search API for 'Campaign Expenditures' entry type

### Available Operations

* [searchCampaignExpenditures](#searchcampaignexpenditures) - Search API for 'Campaign Expenditures' entry type

## searchCampaignExpenditures

API to search for entries of type Campaign Expenditures

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchCampaignExpendituresRequest;
import org.openapis.openapi.models.operations.SearchCampaignExpendituresResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchCampaignExpendituresRequest req = new SearchCampaignExpendituresRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-05-26T20:33:50.122Z");
                changedateTo = OffsetDateTime.parse("2021-03-27T07:55:22.584Z");
                createdateFrom = OffsetDateTime.parse("2020-02-11T18:23:46.078Z");
                createdateTo = OffsetDateTime.parse("2022-12-13T12:36:43.531Z");
                description = "est";
                filesuffix = "quidem";
                fromdate = OffsetDateTime.parse("2022-03-10T00:10:29.953Z");
                group = "fuga";
                max = 509807L;
                maxlatitude = 6485.98;
                maxlongitude = 3339.65;
                minlatitude = 291;
                minlongitude = 7908.4;
                name = "Ryan Littel";
                searchDbCampaignExpendituresAmount = 5199.52;
                searchDbCampaignExpendituresCity = "suscipit";
                searchDbCampaignExpendituresCommittee = "quidem";
                searchDbCampaignExpendituresLocation = "maxime";
                searchDbCampaignExpendituresMemoText = "et";
                searchDbCampaignExpendituresParty = "esse";
                searchDbCampaignExpendituresPurpose = "amet";
                searchDbCampaignExpendituresRecipient = "assumenda";
                searchDbCampaignExpendituresState = "ea";
                searchDbCampaignExpendituresTransactionDate = "atque";
                searchDbCampaignExpendituresZipCode = "error";
                skip = 887265L;
                text = "officiis";
                todate = OffsetDateTime.parse("2021-02-22T09:14:53.307Z");
            }};            

            SearchCampaignExpendituresResponse res = sdk.typeCampaignExpenditures.searchCampaignExpenditures(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
