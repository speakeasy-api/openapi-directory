<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.BalanceSheetOneSecurity;
import org.openapis.openapi.models.operations.BalanceSheetOneRequest;
import org.openapis.openapi.models.operations.BalanceSheetOneResponse;
import org.openapis.openapi.models.shared.BalanceSheetFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BalanceSheetOneRequest req = new BalanceSheetOneRequest() {{
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
                xApideckAppId = "illum";
                xApideckConsumerId = "vel";
                xApideckServiceId = "error";
            }}            

            BalanceSheetOneResponse res = sdk.balanceSheet.balanceSheetOne(req, new BalanceSheetOneSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getBalanceSheetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->