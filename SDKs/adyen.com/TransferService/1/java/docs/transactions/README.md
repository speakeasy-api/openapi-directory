# transactions

### Available Operations

* [getTransactions](#gettransactions) - Get all transactions
* [getTransactionsId](#gettransactionsid) - Get a transaction

## getTransactions

Returns all transactions related to a balance account with a payment instrument of type **bankAccount**.

This endpoint supports cursor-based pagination. The response returns the first page of results, and returns links to the next page when applicable. You can use the links to page through the results. The response also returns links to the previous page when applicable.

### Example Usage

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

            GetTransactionsRequest req = new GetTransactionsRequest(OffsetDateTime.parse("2022-07-25T06:44:09.184Z"), OffsetDateTime.parse("2022-02-09T12:04:06.508Z")) {{
                accountHolderId = "ipsa";
                balanceAccountId = "delectus";
                balancePlatform = "tempora";
                cursor = "suscipit";
                limit = 477665;
                paymentInstrumentId = "minus";
            }};            

            GetTransactionsResponse res = sdk.transactions.getTransactions(req, new GetTransactionsSecurity("placeat") {{
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

## getTransactionsId

Returns a transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionsIdRequest;
import org.openapis.openapi.models.operations.GetTransactionsIdResponse;
import org.openapis.openapi.models.operations.GetTransactionsIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTransactionsIdRequest req = new GetTransactionsIdRequest("voluptatum");            

            GetTransactionsIdResponse res = sdk.transactions.getTransactionsId(req, new GetTransactionsIdSecurity("iusto") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.transaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
