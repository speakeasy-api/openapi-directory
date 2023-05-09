# typeBoulderCampaignContributions

## Overview

Search API for 'Boulder Campaign Contributions' entry type

### Available Operations

* [searchBoulderCampaignContributions](#searchbouldercampaigncontributions) - Search API for 'Boulder Campaign Contributions' entry type

## searchBoulderCampaignContributions

API to search for entries of type Boulder Campaign Contributions

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBoulderCampaignContributionsRequest;
import org.openapis.openapi.models.operations.SearchBoulderCampaignContributionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBoulderCampaignContributionsRequest req = new SearchBoulderCampaignContributionsRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-04-21T04:50:55.832Z");
                changedateTo = OffsetDateTime.parse("2022-12-07T16:30:09.640Z");
                createdateFrom = OffsetDateTime.parse("2022-01-15T23:18:40.855Z");
                createdateTo = OffsetDateTime.parse("2022-08-24T06:58:07.315Z");
                description = "reprehenderit";
                filesuffix = "ullam";
                fromdate = OffsetDateTime.parse("2022-12-26T00:57:43.290Z");
                group = "voluptatum";
                max = 185232L;
                maxlatitude = 8453.58;
                maxlongitude = 4012.59;
                minlatitude = 5362.75;
                minlongitude = 9292.92;
                name = "Roger Monahan PhD";
                searchDbBoulderCampaignContributionsAmendedDate = "et";
                searchDbBoulderCampaignContributionsAnonymous = "voluptate";
                searchDbBoulderCampaignContributionsCandidate = "ipsa";
                searchDbBoulderCampaignContributionsCity = "minima";
                searchDbBoulderCampaignContributionsCommittee = "veritatis";
                searchDbBoulderCampaignContributionsCommitteeNum = "consectetur";
                searchDbBoulderCampaignContributionsContribution = 2371.73;
                searchDbBoulderCampaignContributionsContributionType = "iste";
                searchDbBoulderCampaignContributionsFilingDate = "temporibus";
                searchDbBoulderCampaignContributionsFirstName = "accusantium";
                searchDbBoulderCampaignContributionsFromCandidate = "rem";
                searchDbBoulderCampaignContributionsLastName = "aut";
                searchDbBoulderCampaignContributionsMatch = 5130.75;
                searchDbBoulderCampaignContributionsOfficialFiling = "eum";
                searchDbBoulderCampaignContributionsState = "mollitia";
                searchDbBoulderCampaignContributionsStreet = "ab";
                searchDbBoulderCampaignContributionsTransactionDate = "corrupti";
                searchDbBoulderCampaignContributionsType = "non";
                searchDbBoulderCampaignContributionsZip = "voluptatem";
                skip = 221161L;
                text = "occaecati";
                todate = OffsetDateTime.parse("2022-03-25T13:15:35.424Z");
            }};            

            SearchBoulderCampaignContributionsResponse res = sdk.typeBoulderCampaignContributions.searchBoulderCampaignContributions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
