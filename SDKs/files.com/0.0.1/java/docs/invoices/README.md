# invoices

## Overview

Operations about invoices

### Available Operations

* [getInvoices](#getinvoices) - List Invoices
* [getInvoicesId](#getinvoicesid) - Show Invoice

## getInvoices

List Invoices

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInvoicesRequest;
import org.openapis.openapi.models.operations.GetInvoicesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInvoicesRequest req = new GetInvoicesRequest() {{
                cursor = "dolorum";
                perPage = 237807;
            }};            

            GetInvoicesResponse res = sdk.invoices.getInvoices(req);

            if (res.accountLineItemEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInvoicesId

Show Invoice

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInvoicesIdRequest;
import org.openapis.openapi.models.operations.GetInvoicesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInvoicesIdRequest req = new GetInvoicesIdRequest(795535);            

            GetInvoicesIdResponse res = sdk.invoices.getInvoicesId(req);

            if (res.accountLineItemEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
