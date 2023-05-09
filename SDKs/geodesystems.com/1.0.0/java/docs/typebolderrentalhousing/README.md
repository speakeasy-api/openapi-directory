# typeBolderRentalHousing

## Overview

Search API for 'Boulder Rental Housing' entry type

### Available Operations

* [searchBolderRentalHousing](#searchbolderrentalhousing) - Search API for 'Boulder Rental Housing' entry type

## searchBolderRentalHousing

API to search for entries of type Boulder Rental Housing

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBolderRentalHousingRequest;
import org.openapis.openapi.models.operations.SearchBolderRentalHousingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBolderRentalHousingRequest req = new SearchBolderRentalHousingRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-08-28T09:43:20.644Z");
                changedateTo = OffsetDateTime.parse("2022-04-07T07:44:57.988Z");
                createdateFrom = OffsetDateTime.parse("2022-07-31T12:04:26.954Z");
                createdateTo = OffsetDateTime.parse("2021-04-30T16:20:53.400Z");
                description = "assumenda";
                filesuffix = "nulla";
                fromdate = OffsetDateTime.parse("2022-04-10T15:05:31.822Z");
                group = "quasi";
                max = 270328L;
                maxlatitude = 2561.39;
                maxlongitude = 1314.82;
                minlatitude = 5919.35;
                minlongitude = 553.74;
                name = "Megan Kuhlman";
                searchDbBolderRentalHousingBldgtype = "esse";
                searchDbBolderRentalHousingCompany = "rem";
                searchDbBolderRentalHousingComplexnm = "fuga";
                searchDbBolderRentalHousingDwellunits = 442015L;
                searchDbBolderRentalHousingEngcompl = "quidem";
                searchDbBolderRentalHousingLicenseexp = "fugiat";
                searchDbBolderRentalHousingLicensenum = "ut";
                searchDbBolderRentalHousingLocation = "eum";
                searchDbBolderRentalHousingName = "suscipit";
                searchDbBolderRentalHousingNeighbrhd = "assumenda";
                searchDbBolderRentalHousingPerson1 = "eos";
                searchDbBolderRentalHousingPerson2 = "praesentium";
                searchDbBolderRentalHousingPersontype = "quisquam";
                searchDbBolderRentalHousingPpl1Coname = "veritatis";
                searchDbBolderRentalHousingPpl1Role = "ipsa";
                searchDbBolderRentalHousingPpl2Coname = "id";
                searchDbBolderRentalHousingPpl2Role = "quidem";
                searchDbBolderRentalHousingPropaddr1 = "neque";
                searchDbBolderRentalHousingRentaltype = "quo";
                searchDbBolderRentalHousingRoomunits = 847276L;
                skip = 777408L;
                text = "fuga";
                todate = OffsetDateTime.parse("2022-10-27T21:30:06.318Z");
            }};            

            SearchBolderRentalHousingResponse res = sdk.typeBolderRentalHousing.searchBolderRentalHousing(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
