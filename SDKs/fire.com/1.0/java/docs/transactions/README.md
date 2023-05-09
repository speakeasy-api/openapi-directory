# transactions

## Overview

While there are many types of transactions, they are all represented by the same JSON object with a different txnType.

### Available Operations

* [~~getTransactionsByAccountIdFiltered~~](#gettransactionsbyaccountidfiltered) - Filtered list of transactions for an account (v1) :warning: **Deprecated**
* [~~getTransactionsByAccountIdv1~~](#gettransactionsbyaccountidv1) - List transactions for an account (v1) :warning: **Deprecated**
* [getTransactionsByAccountIdv3](#gettransactionsbyaccountidv3) - List transactions for an account (v3)

## ~~getTransactionsByAccountIdFiltered~~

Retrieve a filtered list of transactions against an account. Recommended to use the v3 endpoint instead.
* `dateRangeFrom` - A millisecond epoch time specifying the date range start date.
* `dateRangeTo` - A millisecond epoch time specifying the date range end date.
* `searchKeyword` - Search term to filter by from the reference field (`myRef`).
* `transactionTypes` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.
* `offset` - The page offset. Defaults to 0. This is the record number that the returned list will start at. E.g. offset = 40 and limit = 20 will return records 40 to 59.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionsByAccountIdFilteredRequest;
import org.openapis.openapi.models.operations.GetTransactionsByAccountIdFilteredResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetTransactionsByAccountIdFilteredRequest req = new GetTransactionsByAccountIdFilteredRequest(774234L, 736918L, 456150L, 216550L, "excepturi",                 new String[]{{
                                add("perferendis"),
                            }});            

            GetTransactionsByAccountIdFilteredResponse res = sdk.transactions.getTransactionsByAccountIdFiltered(req);

            if (res.cardTransactionsv1 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getTransactionsByAccountIdv1~~

Retrieve a list of transactions against an account. Recommended to use the v3 endpoint instead.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionsByAccountIdv1Request;
import org.openapis.openapi.models.operations.GetTransactionsByAccountIdv1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetTransactionsByAccountIdv1Request req = new GetTransactionsByAccountIdv1Request(617636L, 149675L, 612096L);            

            GetTransactionsByAccountIdv1Response res = sdk.transactions.getTransactionsByAccountIdv1(req);

            if (res.cardTransactionsv1 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactionsByAccountIdv3

Retrieve a list of transactions against an account. Initially, use the optional `limit`, `dateRangeFrom` and `dateRangeTo` query params to limit your query, then use the embedded `next` or `prev` links in the response to get newer or older pages.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionsByAccountIdv3Request;
import org.openapis.openapi.models.operations.GetTransactionsByAccountIdv3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetTransactionsByAccountIdv3Request req = new GetTransactionsByAccountIdv3Request(616934L) {{
                dateRangeFrom = 386489L;
                dateRangeTo = 943749L;
                limit = 902599L;
                startAfter = "fuga";
            }};            

            GetTransactionsByAccountIdv3Response res = sdk.transactions.getTransactionsByAccountIdv3(req);

            if (res.cardTransactionsv3 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
