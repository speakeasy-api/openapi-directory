# transactionCategories

## Overview

Hierarchical categories associated with a transaction for greater contextual meaning to transaction activity.

### Available Operations

* [~~getTransactionCategory~~](#gettransactioncategory) - Get transaction category :warning: **Deprecated**
* [listTransactionCategories](#listtransactioncategories) - List all transaction categories

## ~~getTransactionCategory~~

Gets a specified bank transaction category for a given company

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionCategoryRequest;
import org.openapis.openapi.models.operations.GetTransactionCategoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTransactionCategoryRequest req = new GetTransactionCategoryRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", "vel");            

            GetTransactionCategoryResponse res = sdk.transactionCategories.getTransactionCategory(req);

            if (res.transactionCategory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTransactionCategories

Gets a list of hierarchical categories associated with a transaction for greater contextual meaning to transactionactivity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTransactionCategoriesRequest;
import org.openapis.openapi.models.operations.ListTransactionCategoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTransactionCategoriesRequest req = new ListTransactionCategoriesRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", 1) {{
                orderBy = "-modifiedDate";
                pageSize = 100;
                query = "deserunt";
            }};            

            ListTransactionCategoriesResponse res = sdk.transactionCategories.listTransactionCategories(req);

            if (res.transactionCategories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
