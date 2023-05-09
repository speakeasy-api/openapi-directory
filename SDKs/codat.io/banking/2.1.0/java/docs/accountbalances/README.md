# accountBalances

## Overview

Balances for a bank account including end-of-day batch balance or running balances per transaction.

### Available Operations

* [listAccountBalances](#listaccountbalances) - List account balances

## listAccountBalances

Gets a list of balances for a bank account including end-of-day batch balance or running balances per transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAccountBalancesRequest;
import org.openapis.openapi.models.operations.ListAccountBalancesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAccountBalancesRequest req = new ListAccountBalancesRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", 1) {{
                orderBy = "-modifiedDate";
                pageSize = 100;
                query = "quibusdam";
            }};            

            ListAccountBalancesResponse res = sdk.accountBalances.listAccountBalances(req);

            if (res.accountBalances != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
