# accounts

## Overview

Where payments are made or received, and bank transactions are recorded.

### Available Operations

* [~~getAccount~~](#getaccount) - Get account :warning: **Deprecated**
* [listAccounts](#listaccounts) - List accounts

## ~~getAccount~~

Gets a specified bank account for a given company

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountRequest;
import org.openapis.openapi.models.operations.GetAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccountRequest req = new GetAccountRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171");            

            GetAccountResponse res = sdk.accounts.getAccount(req);

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAccounts

Gets a list of all bank accounts of the SMB, with rich data like balances, account numbers and institutions holdingthe accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAccountsRequest;
import org.openapis.openapi.models.operations.ListAccountsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAccountsRequest req = new ListAccountsRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", 1) {{
                orderBy = "-modifiedDate";
                pageSize = 100;
                query = "corrupti";
            }};            

            ListAccountsResponse res = sdk.accounts.listAccounts(req);

            if (res.accounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
