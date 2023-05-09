# promotionReport

### Available Operations

* [getPromotionReports](#getpromotionreports) - This method generates a report that lists the seller's running, paused, and ended promotions for the specified eBay marketplace. The result set can be filtered by the promotion status and the number of results to return. You can also supply <i>keywords</i> to limit the report to promotions that contain the specified keywords. <br><br>Specify the eBay marketplace for which you want the report run using the <b>marketplace_id</b> query parameter. Supply additional query parameters to control the report as needed.

## getPromotionReports

This method generates a report that lists the seller's running, paused, and ended promotions for the specified eBay marketplace. The result set can be filtered by the promotion status and the number of results to return. You can also supply <i>keywords</i> to limit the report to promotions that contain the specified keywords. <br><br>Specify the eBay marketplace for which you want the report run using the <b>marketplace_id</b> query parameter. Supply additional query parameters to control the report as needed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPromotionReportsRequest;
import org.openapis.openapi.models.operations.GetPromotionReportsResponse;
import org.openapis.openapi.models.operations.GetPromotionReportsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPromotionReportsRequest req = new GetPromotionReportsRequest("ut") {{
                limit = "fugiat";
                offset = "voluptatem";
                promotionStatus = "culpa";
                promotionType = "expedita";
                q = "magnam";
            }};            

            GetPromotionReportsResponse res = sdk.promotionReport.getPromotionReports(req, new GetPromotionReportsSecurity("consequatur") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.promotionsReportPagedCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
