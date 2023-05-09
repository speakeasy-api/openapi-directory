# typeBoulder2017ElectionContributions

## Overview

Search API for 'Boulder 2017 Election Contributions' entry type

### Available Operations

* [searchBoulder2017ElectionContributions](#searchboulder2017electioncontributions) - Search API for 'Boulder 2017 Election Contributions' entry type

## searchBoulder2017ElectionContributions

API to search for entries of type Boulder 2017 Election Contributions

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBoulder2017ElectionContributionsRequest;
import org.openapis.openapi.models.operations.SearchBoulder2017ElectionContributionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBoulder2017ElectionContributionsRequest req = new SearchBoulder2017ElectionContributionsRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-12-02T08:37:36.325Z");
                changedateTo = OffsetDateTime.parse("2021-07-16T01:55:06.595Z");
                createdateFrom = OffsetDateTime.parse("2022-03-27T01:23:58.638Z");
                createdateTo = OffsetDateTime.parse("2022-12-28T10:26:44.811Z");
                description = "minus";
                filesuffix = "quaerat";
                fromdate = OffsetDateTime.parse("2022-04-21T00:17:42.407Z");
                group = "esse";
                max = 503427L;
                maxlatitude = 5909.84;
                maxlongitude = 9537.22;
                minlatitude = 8577.23;
                minlongitude = 5578.11;
                name = "Joyce Wilderman";
                searchDbBoulder2017ElectionContributionsAmount = 8630.23;
                searchDbBoulder2017ElectionContributionsCity = "possimus";
                searchDbBoulder2017ElectionContributionsCommittee = "quia";
                searchDbBoulder2017ElectionContributionsContributionType = "eveniet";
                searchDbBoulder2017ElectionContributionsDate = "asperiores";
                searchDbBoulder2017ElectionContributionsFirstName = "facere";
                searchDbBoulder2017ElectionContributionsFromCandidate = "veritatis";
                searchDbBoulder2017ElectionContributionsLastName = "consequuntur";
                searchDbBoulder2017ElectionContributionsLocation = "quasi";
                searchDbBoulder2017ElectionContributionsMatchAmount = 6288.99;
                searchDbBoulder2017ElectionContributionsState = "culpa";
                searchDbBoulder2017ElectionContributionsStreet = "aliquid";
                searchDbBoulder2017ElectionContributionsYtdAmount = 9492.98;
                searchDbBoulder2017ElectionContributionsZip = "quae";
                skip = 936747L;
                text = "vel";
                todate = OffsetDateTime.parse("2022-09-28T13:55:38.564Z");
            }};            

            SearchBoulder2017ElectionContributionsResponse res = sdk.typeBoulder2017ElectionContributions.searchBoulder2017ElectionContributions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
