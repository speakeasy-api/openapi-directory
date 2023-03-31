<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BalanceSheetOneSecurity;
import org.openapis.openapi.models.operations.BalanceSheetOneQueryParams;
import org.openapis.openapi.models.operations.BalanceSheetOneHeaders;
import org.openapis.openapi.models.operations.BalanceSheetOneRequest;
import org.openapis.openapi.models.operations.BalanceSheetOneResponse;
import org.openapis.openapi.models.shared.BalanceSheetFilter;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BalanceSheetOneRequest req = new BalanceSheetOneRequest() {{
                security = new BalanceSheetOneSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new BalanceSheetOneQueryParams() {{
                    filter = new BalanceSheetFilter() {{
                        endDate = "2021-12-31";
                        startDate = "2021-01-01";
                    }};
                    passThrough = new java.util.HashMap<String, Object>() {{
                        put("provident", "distinctio");
                        put("quibusdam", "unde");
                        put("nulla", "corrupti");
                    }};
                    raw = false;
                }};
                headers = new BalanceSheetOneHeaders() {{
                    xApideckAppId = "illum";
                    xApideckConsumerId = "vel";
                    xApideckServiceId = "error";
                }};
            }};            

            BalanceSheetOneResponse res = sdk.balanceSheet.balanceSheetOne(req);

            if (res.getBalanceSheetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->