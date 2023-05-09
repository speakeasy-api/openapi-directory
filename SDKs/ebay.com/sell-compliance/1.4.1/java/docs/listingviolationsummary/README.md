# listingViolationSummary

### Available Operations

* [getListingViolationsSummary](#getlistingviolationssummary) - This call returns listing violation counts for a seller. A user can pass in one or more compliance types through the compliance_type query parameter. See ComplianceTypeEnum for more information on the supported listing compliance types. Listing violations are returned for multiple marketplaces if the seller sells on multiple eBay marketplaces. Note: Only a canned response, with counts for all listing compliance types, is returned in the Sandbox environment. Due to this limitation, the compliance_type query parameter (if used) will not have an effect on the response.

## getListingViolationsSummary

This call returns listing violation counts for a seller. A user can pass in one or more compliance types through the compliance_type query parameter. See ComplianceTypeEnum for more information on the supported listing compliance types. Listing violations are returned for multiple marketplaces if the seller sells on multiple eBay marketplaces. Note: Only a canned response, with counts for all listing compliance types, is returned in the Sandbox environment. Due to this limitation, the compliance_type query parameter (if used) will not have an effect on the response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetListingViolationsSummaryRequest;
import org.openapis.openapi.models.operations.GetListingViolationsSummaryResponse;
import org.openapis.openapi.models.operations.GetListingViolationsSummarySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetListingViolationsSummaryRequest req = new GetListingViolationsSummaryRequest() {{
                xEbayCMarketplaceId = "tempora";
                complianceType = "suscipit";
            }};            

            GetListingViolationsSummaryResponse res = sdk.listingViolationSummary.getListingViolationsSummary(req, new GetListingViolationsSummarySecurity("molestiae") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.complianceSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
