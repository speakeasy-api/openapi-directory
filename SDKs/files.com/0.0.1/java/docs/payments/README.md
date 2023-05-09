# payments

## Overview

Operations about payments

### Available Operations

* [getPayments](#getpayments) - List Payments
* [getPaymentsId](#getpaymentsid) - Show Payment

## getPayments

List Payments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentsRequest;
import org.openapis.openapi.models.operations.GetPaymentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentsRequest req = new GetPaymentsRequest() {{
                cursor = "corrupti";
                perPage = 879235;
            }};            

            GetPaymentsResponse res = sdk.payments.getPayments(req);

            if (res.accountLineItemEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaymentsId

Show Payment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentsIdRequest;
import org.openapis.openapi.models.operations.GetPaymentsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentsIdRequest req = new GetPaymentsIdRequest(272683);            

            GetPaymentsIdResponse res = sdk.payments.getPaymentsId(req);

            if (res.accountLineItemEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
