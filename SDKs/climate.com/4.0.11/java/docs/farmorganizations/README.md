# farmOrganizations

## Overview

Farm organization data endpoints.

### Available Operations

* [fetchFarmOrganizationByTypeAndId](#fetchfarmorganizationbytypeandid) - Retrieve a specific farm organization by organization type and ID

## fetchFarmOrganizationByTypeAndId

Retrieve a given **farm organization** by organization type and ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchFarmOrganizationByTypeAndIdRequest;
import org.openapis.openapi.models.operations.FetchFarmOrganizationByTypeAndIdResponse;
import org.openapis.openapi.models.operations.FetchFarmOrganizationByTypeAndIdSecurity;
import org.openapis.openapi.models.shared.FarmOrganizationTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchFarmOrganizationByTypeAndIdRequest req = new FetchFarmOrganizationByTypeAndIdRequest("ae395efb-9ba8-48f3-a669-97074ba4469b", FarmOrganizationTypeEnum.FARM);            

            FetchFarmOrganizationByTypeAndIdResponse res = sdk.farmOrganizations.fetchFarmOrganizationByTypeAndId(req, new FetchFarmOrganizationByTypeAndIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.farmOrganization != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
