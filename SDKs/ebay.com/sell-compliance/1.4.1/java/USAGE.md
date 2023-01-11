<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetListingViolationsRequest req = new GetListingViolationsRequest() {{
                security = new GetListingViolationsSecurity() {{
                    apiAuth = new SchemeApiAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new GetListingViolationsQueryParams() {{
                    complianceType = "quidem";
                    filter = "est";
                    limit = "quo";
                    listingId = "vero";
                    offset = "alias";
                }};
                headers = new GetListingViolationsHeaders() {{
                    xEBAYCMARKETPLACEID = "totam";
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