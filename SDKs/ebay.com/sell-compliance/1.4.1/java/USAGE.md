<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetListingViolationsSecurity;
import org.openapis.openapi.models.operations.GetListingViolationsQueryParams;
import org.openapis.openapi.models.operations.GetListingViolationsHeaders;
import org.openapis.openapi.models.operations.GetListingViolationsRequest;
import org.openapis.openapi.models.operations.GetListingViolationsResponse;
import org.openapis.openapi.models.shared.SchemeAPIAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetListingViolationsRequest req = new GetListingViolationsRequest() {{
                security = new GetListingViolationsSecurity() {{
                    apiAuth = new SchemeAPIAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new GetListingViolationsQueryParams() {{
                    complianceType = "corrupti";
                    filter = "provident";
                    limit = "distinctio";
                    listingId = "quibusdam";
                    offset = "unde";
                }};
                headers = new GetListingViolationsHeaders() {{
                    xEbayCMarketplaceId = "nulla";
                }};
            }};            

            GetListingViolationsResponse res = sdk.listingViolation.getListingViolations(req);

            if (res.pagedComplianceViolationCollection.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->