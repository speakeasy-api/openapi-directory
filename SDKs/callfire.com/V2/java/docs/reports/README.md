# reports

### Available Operations

* [getDeliveryReports](#getdeliveryreports) - Get delivery reports by ad hoc criteria

## getDeliveryReports

Get delivery reports

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeliveryReportsDeliveryCategoryEnum;
import org.openapis.openapi.models.operations.GetDeliveryReportsDeliveryStateEnum;
import org.openapis.openapi.models.operations.GetDeliveryReportsRequest;
import org.openapis.openapi.models.operations.GetDeliveryReportsResponse;
import org.openapis.openapi.models.operations.GetDeliveryReportsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDeliveryReportsRequest req = new GetDeliveryReportsRequest() {{
                campaignId = 63207L;
                carrier = "recusandae";
                deliveryCategory = GetDeliveryReportsDeliveryCategoryEnum.NO_CREDITS;
                deliveryState = GetDeliveryReportsDeliveryStateEnum.UNSENT_ALREADY_SCRUBBED;
                endDate = "molestiae";
                fromNumber = "ex";
                limit = 284000;
                messageText = "culpa";
                offset = 238413;
                startDate = "debitis";
                toNumber = "laudantium";
            }};            

            GetDeliveryReportsResponse res = sdk.reports.getDeliveryReports(req, new GetDeliveryReportsSecurity("eum", "nemo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.pageDeliveryReport != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
