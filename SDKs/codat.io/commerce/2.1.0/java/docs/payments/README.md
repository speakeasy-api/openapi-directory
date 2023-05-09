# payments

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [listPaymentMethods](#listpaymentmethods) - List payment methods
* [listPayments](#listpayments) - List payments

## listPaymentMethods

Retrieve a list of payment methods, such as card, cash or other online payment methods, as held in the linked commerce platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPaymentMethodsRequest;
import org.openapis.openapi.models.operations.ListPaymentMethodsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPaymentMethodsRequest req = new ListPaymentMethodsRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", 1) {{
                orderBy = "-modifiedDate";
                pageSize = 100;
                query = "deserunt";
            }};            

            ListPaymentMethodsResponse res = sdk.payments.listPaymentMethods(req);

            if (res.paymentMethods != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPayments

List commerce payments for the given company & data connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPaymentsRequest;
import org.openapis.openapi.models.operations.ListPaymentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPaymentsRequest req = new ListPaymentsRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", 1) {{
                orderBy = "-modifiedDate";
                pageSize = 100;
                query = "iure";
            }};            

            ListPaymentsResponse res = sdk.payments.listPayments(req);

            if (res.payments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
