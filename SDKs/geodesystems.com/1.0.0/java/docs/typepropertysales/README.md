# typePropertySales

## Overview

Search API for 'Property Sales' entry type

### Available Operations

* [searchPropertySales](#searchpropertysales) - Search API for 'Property Sales' entry type

## searchPropertySales

API to search for entries of type Property Sales

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchPropertySalesRequest;
import org.openapis.openapi.models.operations.SearchPropertySalesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchPropertySalesRequest req = new SearchPropertySalesRequest() {{
                changedateFrom = OffsetDateTime.parse("2020-03-31T22:12:08.601Z");
                changedateTo = OffsetDateTime.parse("2022-12-02T09:58:06.659Z");
                createdateFrom = OffsetDateTime.parse("2022-07-09T12:42:18.572Z");
                createdateTo = OffsetDateTime.parse("2022-07-19T01:47:33.364Z");
                description = "sed";
                filesuffix = "dolorem";
                fromdate = OffsetDateTime.parse("2022-08-27T04:15:11.226Z");
                group = "amet";
                max = 454165L;
                maxlatitude = 4542.32;
                maxlongitude = 8652.12;
                minlatitude = 7914.21;
                minlongitude = 9550.65;
                name = "Jimmie McGlynn";
                searchDbPropertySalesBuildingDescription = "omnis";
                searchDbPropertySalesBuildingDesign = "quam";
                searchDbPropertySalesBuyer = "exercitationem";
                searchDbPropertySalesCity = "voluptates";
                searchDbPropertySalesLocation = "sequi";
                searchDbPropertySalesPropertyAddress = "quis";
                searchDbPropertySalesSaleDate = "commodi";
                searchDbPropertySalesSalePrice = 4264.81;
                searchDbPropertySalesSeller = "rem";
                searchDbPropertySalesSubdivision = "aliquid";
                searchDbPropertySalesType = "aperiam";
                searchDbPropertySalesZipcode = "perspiciatis";
                skip = 145841L;
                text = "itaque";
                todate = OffsetDateTime.parse("2021-06-19T12:32:11.312Z");
            }};            

            SearchPropertySalesResponse res = sdk.typePropertySales.searchPropertySales(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
