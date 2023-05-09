# transactions

### Available Operations

* [getTransaction](#gettransaction) - Get a specific transaction
* [getTransactionCost](#gettransactioncost) - Get a specific transaction's cost
* [getTransactions](#gettransactions) - Get a list of transactions

## getTransaction

Get a specific transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionRequest;
import org.openapis.openapi.models.operations.GetTransactionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTransactionRequest req = new GetTransactionRequest("repellendus") {{
                includeChargestation = false;
                includeConnector = false;
                includeDriver = false;
                includeEvse = false;
                includeOrganization = false;
                includeRate = false;
                includeReservation = false;
                includeToken = false;
            }};            

            GetTransactionResponse res = sdk.transactions.getTransaction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactionCost

Get a specific transaction's cost

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionCostRequest;
import org.openapis.openapi.models.operations.GetTransactionCostResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTransactionCostRequest req = new GetTransactionCostRequest("doloribus");            

            GetTransactionCostResponse res = sdk.transactions.getTransactionCost(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactions

Get a list of transactions

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionsRequest;
import org.openapis.openapi.models.operations.GetTransactionsResponse;
import org.openapis.openapi.models.operations.GetTransactionsStatusEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrder1Enum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTransactionsRequest req = new GetTransactionsRequest() {{
                createdAtDollarGte = OffsetDateTime.parse("2021-10-29T22:05:37.347Z");
                createdAtDollarLte = OffsetDateTime.parse("2022-12-08T15:45:05.802Z");
                includeChargestation = false;
                includeConnector = false;
                includeDriver = false;
                includeEvse = false;
                includeOrganization = false;
                includeRate = false;
                includeReservation = false;
                includeToken = false;
                paginateEnabled = false;
                paginateLimit = 512393L;
                paginatePage = "odio";
                sortBy = "occaecati";
                sortOrder = SortOrder1Enum.ASC;
                status = GetTransactionsStatusEnum.ENDED;
                updatedAtDollarGte = OffsetDateTime.parse("2021-03-07T21:49:29.078Z");
                updatedAtDollarLte = OffsetDateTime.parse("2022-10-13T06:47:27.001Z");
            }};            

            GetTransactionsResponse res = sdk.transactions.getTransactions(req);

            if (res.getTransactions200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
