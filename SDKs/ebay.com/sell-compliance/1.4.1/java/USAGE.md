<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetListingViolationsSecurity;
import org.openapis.openapi.models.operations.GetListingViolationsRequest;
import org.openapis.openapi.models.operations.GetListingViolationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetListingViolationsRequest req = new GetListingViolationsRequest() {{
                xEbayCMarketplaceId = "corrupti";
                complianceType = "provident";
                filter = "distinctio";
                limit = "quibusdam";
                listingId = "unde";
                offset = "nulla";
            }}            

            GetListingViolationsResponse res = sdk.listingViolation.getListingViolations(req, new GetListingViolationsSecurity() {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.pagedComplianceViolationCollection.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->