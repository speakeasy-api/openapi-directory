# transactionStatus

## Overview

Retrieve the status of transactions within a sync.

### Available Operations

* [getSyncTransaction](#getsynctransaction) - Get Sync Transaction
* [listSyncTransactions](#listsynctransactions) - Get Sync transactions

## getSyncTransaction

Gets the status of a transaction for a sync

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSyncTransactionRequest;
import org.openapis.openapi.models.operations.GetSyncTransactionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSyncTransactionRequest req = new GetSyncTransactionRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "6fb40d5e-b13e-11ed-afa1-0242ac120002", "336694d8-2dca-4cb5-a28d-3ccb83e55eee");            

            GetSyncTransactionResponse res = sdk.transactionStatus.getSyncTransaction(req);

            if (res.transactionMetadata != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSyncTransactions

Get's the transactions and status for a sync

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSyncTransactionsRequest;
import org.openapis.openapi.models.operations.ListSyncTransactionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSyncTransactionsRequest req = new ListSyncTransactionsRequest("8a210b68-6988-11ed-a1eb-0242ac120002", 1, "6fb40d5e-b13e-11ed-afa1-0242ac120002") {{
                pageSize = 100;
            }};            

            ListSyncTransactionsResponse res = sdk.transactionStatus.listSyncTransactions(req);

            if (res.transactionMetadataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
