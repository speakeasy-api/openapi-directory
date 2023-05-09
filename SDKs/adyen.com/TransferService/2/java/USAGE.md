<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionsRequest;
import org.openapis.openapi.models.operations.GetTransactionsResponse;
import org.openapis.openapi.models.operations.GetTransactionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTransactionsRequest req = new GetTransactionsRequest(OffsetDateTime.parse("2021-10-25T05:21:43.948Z"), OffsetDateTime.parse("2021-04-24T16:27:50.833Z")) {{
                accountHolderId = "unde";
                balanceAccountId = "nulla";
                balancePlatform = "corrupti";
                cursor = "illum";
                limit = 423655;
                paymentInstrumentId = "error";
            }};            

            GetTransactionsResponse res = sdk.transactions.getTransactions(req, new GetTransactionsSecurity("deserunt") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.transactionSearchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->