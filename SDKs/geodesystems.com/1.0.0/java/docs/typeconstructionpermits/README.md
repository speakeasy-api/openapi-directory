# typeConstructionPermits

## Overview

Search API for 'Construction Permits' entry type

### Available Operations

* [searchConstructionPermits](#searchconstructionpermits) - Search API for 'Construction Permits' entry type

## searchConstructionPermits

API to search for entries of type Construction Permits

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchConstructionPermitsRequest;
import org.openapis.openapi.models.operations.SearchConstructionPermitsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchConstructionPermitsRequest req = new SearchConstructionPermitsRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-11-10T20:51:38.142Z");
                changedateTo = OffsetDateTime.parse("2021-05-10T15:26:02.215Z");
                createdateFrom = OffsetDateTime.parse("2021-01-15T12:05:30.894Z");
                createdateTo = OffsetDateTime.parse("2021-07-19T18:28:47.948Z");
                description = "ad";
                filesuffix = "deleniti";
                fromdate = OffsetDateTime.parse("2022-11-21T16:13:12.951Z");
                group = "repellendus";
                max = 405036L;
                maxlatitude = 7758.03;
                maxlongitude = 4053.73;
                minlatitude = 2811.53;
                minlongitude = 3210.43;
                name = "Donald MacGyver";
                searchDbConstructionPermitsAddress = "beatae";
                searchDbConstructionPermitsAffordableHsgUnit = 530860L;
                searchDbConstructionPermitsApplied = "omnis";
                searchDbConstructionPermitsApproved = "veritatis";
                searchDbConstructionPermitsBuildingUsesAndWorkScopes = "rerum";
                searchDbConstructionPermitsCaseStatus = "est";
                searchDbConstructionPermitsCategory = "culpa";
                searchDbConstructionPermitsCoDate = "voluptatem";
                searchDbConstructionPermitsCompletionDate = "sapiente";
                searchDbConstructionPermitsContractorCompany = "officiis";
                searchDbConstructionPermitsContractorFirstName = "architecto";
                searchDbConstructionPermitsContractorLastName = "fuga";
                searchDbConstructionPermitsExistingResUnit = 867168L;
                searchDbConstructionPermitsIssued = "debitis";
                searchDbConstructionPermitsNarrativeDescription = "voluptatem";
                searchDbConstructionPermitsNewResUnit = 1207L;
                searchDbConstructionPermitsNewSf = 534917L;
                searchDbConstructionPermitsOwner1Company = "earum";
                searchDbConstructionPermitsOwner1FirstName = "ex";
                searchDbConstructionPermitsOwner1LastName = "sapiente";
                searchDbConstructionPermitsOwner2Company = "rem";
                searchDbConstructionPermitsOwner2FirstName = "minus";
                searchDbConstructionPermitsOwner2LastName = "nemo";
                searchDbConstructionPermitsPermitTypes = "asperiores";
                searchDbConstructionPermitsPrimaryCompany = "ratione";
                searchDbConstructionPermitsPrimaryFirstName = "ullam";
                searchDbConstructionPermitsPrimaryLastName = "perferendis";
                searchDbConstructionPermitsRemodelSf = 848341L;
                searchDbConstructionPermitsTotalProjectValue = 5181.5;
                searchDbConstructionPermitsTotalSubpermitValue = 7706.75;
                skip = 842777L;
                text = "nam";
                todate = OffsetDateTime.parse("2022-05-14T19:17:09.662Z");
            }};            

            SearchConstructionPermitsResponse res = sdk.typeConstructionPermits.searchConstructionPermits(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
