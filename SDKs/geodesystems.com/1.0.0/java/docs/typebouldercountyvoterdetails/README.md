# typeBoulderCountyVoterDetails

## Overview

Search API for 'Boulder County Voter Details' entry type

### Available Operations

* [searchBoulderCountyVoterDetails](#searchbouldercountyvoterdetails) - Search API for 'Boulder County Voter Details' entry type

## searchBoulderCountyVoterDetails

API to search for entries of type Boulder County Voter Details

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBoulderCountyVoterDetailsRequest;
import org.openapis.openapi.models.operations.SearchBoulderCountyVoterDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBoulderCountyVoterDetailsRequest req = new SearchBoulderCountyVoterDetailsRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-06-12T12:56:04.738Z");
                changedateTo = OffsetDateTime.parse("2022-09-18T05:25:42.565Z");
                createdateFrom = OffsetDateTime.parse("2020-11-18T07:12:59.777Z");
                createdateTo = OffsetDateTime.parse("2022-03-04T03:42:26.898Z");
                description = "in";
                filesuffix = "corporis";
                fromdate = OffsetDateTime.parse("2020-07-07T14:53:46.338Z");
                group = "nemo";
                max = 924967L;
                maxlatitude = 3975.33;
                maxlongitude = 460.07;
                minlatitude = 7386.83;
                minlongitude = 2326.27;
                name = "Annette Wehner";
                searchDbBoulderCountyVoterDetailsBirthYear = 985492L;
                searchDbBoulderCountyVoterDetailsCityWardDistrict = "suscipit";
                searchDbBoulderCountyVoterDetailsCongressional = "reiciendis";
                searchDbBoulderCountyVoterDetailsFirstName = "quidem";
                searchDbBoulderCountyVoterDetailsGender = "saepe";
                searchDbBoulderCountyVoterDetailsLastName = "necessitatibus";
                searchDbBoulderCountyVoterDetailsLastUpdatedDate = "dolore";
                searchDbBoulderCountyVoterDetailsLocation = "sunt";
                searchDbBoulderCountyVoterDetailsMailingZipCode = "asperiores";
                searchDbBoulderCountyVoterDetailsMunicipality = "adipisci";
                searchDbBoulderCountyVoterDetailsParty = "non";
                searchDbBoulderCountyVoterDetailsPrecinctCode = "amet";
                searchDbBoulderCountyVoterDetailsRegistrationDate = "beatae";
                searchDbBoulderCountyVoterDetailsResidentialAddress = "dignissimos";
                searchDbBoulderCountyVoterDetailsResidentialCity = "a";
                searchDbBoulderCountyVoterDetailsSchoolDistrict = "debitis";
                searchDbBoulderCountyVoterDetailsStateHouse = "consectetur";
                searchDbBoulderCountyVoterDetailsStateSenate = "corporis";
                searchDbBoulderCountyVoterDetailsVoterStatus = "harum";
                skip = 385237L;
                text = "ipsa";
                todate = OffsetDateTime.parse("2020-10-22T20:57:52.942Z");
            }};            

            SearchBoulderCountyVoterDetailsResponse res = sdk.typeBoulderCountyVoterDetails.searchBoulderCountyVoterDetails(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
