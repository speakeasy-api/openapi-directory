# promotionSummaryReport

### Available Operations

* [getPromotionSummaryReport](#getpromotionsummaryreport) - This method generates a report that summarizes the seller's promotions for the specified eBay marketplace. The report returns information on <code>RUNNING</code>, <code>PAUSED</code>, and <code>ENDED</code> promotions (deleted reports are not returned) and summarizes the seller's campaign performance for all promotions on a given site.  <br><br>For information about summary reports, see <a href="/api-docs/sell/static/marketing/pm-summary-report.html">Reading the item promotion Summary report</a>.

## getPromotionSummaryReport

This method generates a report that summarizes the seller's promotions for the specified eBay marketplace. The report returns information on <code>RUNNING</code>, <code>PAUSED</code>, and <code>ENDED</code> promotions (deleted reports are not returned) and summarizes the seller's campaign performance for all promotions on a given site.  <br><br>For information about summary reports, see <a href="/api-docs/sell/static/marketing/pm-summary-report.html">Reading the item promotion Summary report</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPromotionSummaryReportRequest;
import org.openapis.openapi.models.operations.GetPromotionSummaryReportResponse;
import org.openapis.openapi.models.operations.GetPromotionSummaryReportSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPromotionSummaryReportRequest req = new GetPromotionSummaryReportRequest("esse");            

            GetPromotionSummaryReportResponse res = sdk.promotionSummaryReport.getPromotionSummaryReport(req, new GetPromotionSummaryReportSecurity("ipsam") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.summaryReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
