# typeFecPacs

## Overview

Search API for 'FEC PACs' entry type

### Available Operations

* [searchFecPacs](#searchfecpacs) - Search API for 'FEC PACs' entry type

## searchFecPacs

API to search for entries of type FEC PACs

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchFecPacsRequest;
import org.openapis.openapi.models.operations.SearchFecPacsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchFecPacsRequest req = new SearchFecPacsRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-06-06T06:38:58.719Z");
                changedateTo = OffsetDateTime.parse("2020-09-04T17:19:05.591Z");
                createdateFrom = OffsetDateTime.parse("2020-04-20T09:18:57.946Z");
                createdateTo = OffsetDateTime.parse("2021-10-15T06:49:27.168Z");
                description = "voluptas";
                filesuffix = "debitis";
                fromdate = OffsetDateTime.parse("2022-10-21T17:37:55.823Z");
                group = "minus";
                max = 685478L;
                maxlatitude = 6756.89;
                maxlongitude = 2310.7;
                minlatitude = 2448.89;
                minlongitude = 5388.69;
                name = "Pat Cummerata";
                searchDbFecPacsBeginningCash = 7214.3;
                searchDbFecPacsCandidateLoanRepayments = 2940.76;
                searchDbFecPacsCommittee = "iusto";
                searchDbFecPacsContributionsFromCandidate = 4530.94;
                searchDbFecPacsContributionsFromIndividuals = 1940.23;
                searchDbFecPacsContributionsFromOtherCommittees = 4939.58;
                searchDbFecPacsContributionsToOtherCommittee = 2055.66;
                searchDbFecPacsEndingCash = 7781.72;
                searchDbFecPacsLoanRepayments = 5354.68;
                searchDbFecPacsLoansFromCandidate = 8442.35;
                searchDbFecPacsRefendsToOthercommittees = 4378.14;
                searchDbFecPacsRefundsToIndividuals = 1390.72;
                searchDbFecPacsTotalDistributions = 9749.9;
                searchDbFecPacsTotalLoansReceived = 4269.04;
                searchDbFecPacsTotalReceipts = 3008.24;
                searchDbFecPacsTransFromAffiliates = 8428.55;
                searchDbFecPacsTransfersToAffiliates = 789.69;
                skip = 818034L;
                text = "libero";
                todate = OffsetDateTime.parse("2022-01-09T23:17:04.281Z");
            }};            

            SearchFecPacsResponse res = sdk.typeFecPacs.searchFecPacs(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
