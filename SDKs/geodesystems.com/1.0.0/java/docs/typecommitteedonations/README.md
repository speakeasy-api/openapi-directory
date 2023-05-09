# typeCommitteeDonations

## Overview

Search API for 'Committee Donations' entry type

### Available Operations

* [searchCommitteeDonations](#searchcommitteedonations) - Search API for 'Committee Donations' entry type

## searchCommitteeDonations

API to search for entries of type Committee Donations

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchCommitteeDonationsRequest;
import org.openapis.openapi.models.operations.SearchCommitteeDonationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchCommitteeDonationsRequest req = new SearchCommitteeDonationsRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-04-23T08:23:19.189Z");
                changedateTo = OffsetDateTime.parse("2020-02-18T03:48:05.478Z");
                createdateFrom = OffsetDateTime.parse("2022-08-29T17:35:23.458Z");
                createdateTo = OffsetDateTime.parse("2022-06-16T06:32:28.803Z");
                description = "quis";
                filesuffix = "inventore";
                fromdate = OffsetDateTime.parse("2022-03-27T16:13:46.480Z");
                group = "quae";
                max = 21688L;
                maxlatitude = 2419.01;
                maxlongitude = 1372.51;
                minlatitude = 4322.81;
                minlongitude = 2606.28;
                name = "Wilfred Rutherford";
                searchDbCommitteeDonationsAmount = 4332.79;
                searchDbCommitteeDonationsCity = "dicta";
                searchDbCommitteeDonationsCommittee = "minima";
                searchDbCommitteeDonationsDate = "beatae";
                searchDbCommitteeDonationsEmployer = "cupiditate";
                searchDbCommitteeDonationsLocation = "provident";
                searchDbCommitteeDonationsOccupation = "earum";
                searchDbCommitteeDonationsRecipient = "soluta";
                searchDbCommitteeDonationsState = "hic";
                searchDbCommitteeDonationsZipCode = "illum";
                skip = 52508L;
                text = "earum";
                todate = OffsetDateTime.parse("2021-01-13T02:22:20.450Z");
            }};            

            SearchCommitteeDonationsResponse res = sdk.typeCommitteeDonations.searchCommitteeDonations(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
