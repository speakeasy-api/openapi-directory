<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetTransactionsSecurity;
import org.openapis.openapi.models.operations.GetTransactionsQueryParams;
import org.openapis.openapi.models.operations.GetTransactionsRequest;
import org.openapis.openapi.models.operations.GetTransactionsResponse;
import org.openapis.openapi.models.shared.SchemeAPIKeyAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTransactionsRequest req = new GetTransactionsRequest() {{
                security = new GetTransactionsSecurity() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GetTransactionsQueryParams() {{
                    accountHolderId = "corrupti";
                    balanceAccountId = "provident";
                    balancePlatform = "distinctio";
                    createdSince = "2021-03-11T23:22:42.658Z";
                    createdUntil = "2021-05-14T08:28:11.899Z";
                    cursor = "illum";
                    limit = 423655;
                    paymentInstrumentId = "error";
                }};
            }};            

            GetTransactionsResponse res = sdk.transactions.getTransactions(req);

            if (res.transactionSearchResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->