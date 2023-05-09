# terminalsTerminalLevel

### Available Operations

* [getTerminals](#getterminals) - Get a list of terminals

## getTerminals

Returns the payment terminals that the API credential has access to and that match the query parameters. 
When using `searchQuery`, other query parameters are ignored.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API — Terminal actions read

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTerminalsRequest;
import org.openapis.openapi.models.operations.GetTerminalsResponse;
import org.openapis.openapi.models.operations.GetTerminalsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTerminalsRequest req = new GetTerminalsRequest() {{
                brandModels = "ipsa";
                countries = "sint";
                merchantIds = "dolore";
                pageNumber = 457063;
                pageSize = 38044;
                searchQuery = "distinctio";
                storeIds = "sapiente";
            }};            

            GetTerminalsResponse res = sdk.terminalsTerminalLevel.getTerminals(req, new GetTerminalsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.listTerminalsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
