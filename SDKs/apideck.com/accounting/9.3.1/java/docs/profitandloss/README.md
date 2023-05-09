# profitAndLoss

### Available Operations

* [profitAndLossOne](#profitandlossone) - Get Profit and Loss

## profitAndLossOne

Get Profit and Loss

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProfitAndLossOneRequest;
import org.openapis.openapi.models.operations.ProfitAndLossOneResponse;
import org.openapis.openapi.models.operations.ProfitAndLossOneSecurity;
import org.openapis.openapi.models.shared.ProfitAndLossFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProfitAndLossOneRequest req = new ProfitAndLossOneRequest("dolores", "quis") {{
                fields = "totam";
                filter = new ProfitAndLossFilter() {{
                    customerId = "123abc";
                    endDate = "2021-12-31";
                    startDate = "2021-01-01";
                }};;
                passThrough = new java.util.HashMap<String, Object>() {{
                    put("eaque", "quis");
                    put("nesciunt", "eos");
                }};
                raw = false;
                xApideckServiceId = "perferendis";
            }};            

            ProfitAndLossOneResponse res = sdk.profitAndLoss.profitAndLossOne(req, new ProfitAndLossOneSecurity("dolores") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getProfitAndLossResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
