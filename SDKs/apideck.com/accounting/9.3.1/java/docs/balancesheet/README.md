# balanceSheet

### Available Operations

* [balanceSheetOne](#balancesheetone) - Get BalanceSheet

## balanceSheetOne

Get BalanceSheet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BalanceSheetOneRequest;
import org.openapis.openapi.models.operations.BalanceSheetOneResponse;
import org.openapis.openapi.models.operations.BalanceSheetOneSecurity;
import org.openapis.openapi.models.shared.BalanceSheetFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BalanceSheetOneRequest req = new BalanceSheetOneRequest("suscipit", "iure") {{
                filter = new BalanceSheetFilter() {{
                    endDate = "2021-12-31";
                    startDate = "2021-01-01";
                }};;
                passThrough = new java.util.HashMap<String, Object>() {{
                    put("debitis", "ipsa");
                    put("delectus", "tempora");
                }};
                raw = false;
                xApideckServiceId = "suscipit";
            }};            

            BalanceSheetOneResponse res = sdk.balanceSheet.balanceSheetOne(req, new BalanceSheetOneSecurity("molestiae") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getBalanceSheetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
