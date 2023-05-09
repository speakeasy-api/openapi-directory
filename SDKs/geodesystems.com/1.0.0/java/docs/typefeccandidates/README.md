# typeFeccandidates

## Overview

Search API for 'Candidates' entry type

### Available Operations

* [searchFeccandidates](#searchfeccandidates) - Search API for 'Candidates' entry type

## searchFeccandidates

API to search for entries of type Candidates

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchFeccandidatesRequest;
import org.openapis.openapi.models.operations.SearchFeccandidatesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchFeccandidatesRequest req = new SearchFeccandidatesRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-03-21T12:53:49.231Z");
                changedateTo = OffsetDateTime.parse("2022-10-02T19:53:01.274Z");
                createdateFrom = OffsetDateTime.parse("2022-12-18T15:43:31.696Z");
                createdateTo = OffsetDateTime.parse("2022-08-05T11:21:49.286Z");
                description = "beatae";
                filesuffix = "vero";
                fromdate = OffsetDateTime.parse("2022-02-19T15:28:07.331Z");
                group = "velit";
                max = 284086L;
                maxlatitude = 5964.33;
                maxlongitude = 9353.02;
                minlatitude = 1175.25;
                minlongitude = 7722.66;
                name = "Mrs. Jackie Watsica";
                searchDbFeccandidatesBeginningCash = 2421.78;
                searchDbFeccandidatesCandidateLoanRepayments = 6738.38;
                searchDbFeccandidatesCommitteeRefunds = 2503.98;
                searchDbFeccandidatesContributionsFromCandidate = 2244.67;
                searchDbFeccandidatesContributionsFromOtherCommittees = 4833.94;
                searchDbFeccandidatesContributionsFromPartyCommittees = 247.53;
                searchDbFeccandidatesCoverageEndDate = "doloremque";
                searchDbFeccandidatesDebtsOwedBy = 74.68;
                searchDbFeccandidatesDistrict = "officia";
                searchDbFeccandidatesEndingCash = 9274.03;
                searchDbFeccandidatesGender = "ea";
                searchDbFeccandidatesIndividualRefunds = 6931.53;
                searchDbFeccandidatesLoansFromCandidates = 3774.06;
                searchDbFeccandidatesName = "facilis";
                searchDbFeccandidatesOtherLoanRepayments = 8093.65;
                searchDbFeccandidatesOtherLoans = 5960.65;
                searchDbFeccandidatesParty = "expedita";
                searchDbFeccandidatesState = "deleniti";
                searchDbFeccandidatesTotalDisbursements = 9543.34;
                searchDbFeccandidatesTotalIndivualContributions = 4555.79;
                searchDbFeccandidatesTotalReceipts = 3519.36;
                searchDbFeccandidatesTransfersFromCommittees = 6001.93;
                searchDbFeccandidatesTransfersToCommittees = 8975.43;
                skip = 654082L;
                text = "impedit";
                todate = OffsetDateTime.parse("2022-08-23T12:57:35.673Z");
            }};            

            SearchFeccandidatesResponse res = sdk.typeFeccandidates.searchFeccandidates(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
