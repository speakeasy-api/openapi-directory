# transactions

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [listTransactions](#listtransactions) - List transactions

## listTransactions

Details of all financial transactions recorded in the commerce or point of sale system are added to the Transactions data type. For example, payments, service charges, and fees.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTransactionsRequest;
import org.openapis.openapi.models.operations.ListTransactionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTransactionsRequest req = new ListTransactionsRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", 1) {{
                orderBy = "-modifiedDate";
                pageSize = 100;
                query = "molestiae";
            }};            

            ListTransactionsResponse res = sdk.transactions.listTransactions(req);

            if (res.transactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
