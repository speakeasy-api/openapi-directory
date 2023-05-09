# transactions

## Overview

An immutable source of up-to-date information on income and expenditure.

### Available Operations

* [~~getTransaction~~](#gettransaction) - Get bank transaction :warning: **Deprecated**
* [listBankTransactions](#listbanktransactions) - List banking transactions
* [listTransactions](#listtransactions) - List transactions

## ~~getTransaction~~

Gets a specified bank transaction for a given company

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
                .setSecurity(new Security("suscipit") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTransactionRequest req = new GetTransactionRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", "iure");            

            GetTransactionResponse res = sdk.transactions.getTransaction(req);

            if (res.transaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBankTransactions

Gets a list of transactions incurred by a company across all bank accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBankTransactionsRequest;
import org.openapis.openapi.models.operations.ListBankTransactionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBankTransactionsRequest req = new ListBankTransactionsRequest("8a210b68-6988-11ed-a1eb-0242ac120002", 1) {{
                orderBy = "-modifiedDate";
                pageSize = 100;
                query = "debitis";
            }};            

            ListBankTransactionsResponse res = sdk.transactions.listBankTransactions(req);

            if (res.transactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTransactions

Gets a list of transactions incurred by a bank account.

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
                .setSecurity(new Security("ipsa") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTransactionsRequest req = new ListTransactionsRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", 1) {{
                orderBy = "-modifiedDate";
                pageSize = 100;
                query = "delectus";
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
