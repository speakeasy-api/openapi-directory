# billingDetails

## Overview

Billing Details Rest V 2 Controller

### Available Operations

* [getBillingDetails](#getbillingdetails) - Retrieves the Billing Details
* [putBillingDetails](#putbillingdetails) - Updates the Billing Details

## getBillingDetails

Retrieves the Billing Details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBillingDetailsRequest;
import org.openapis.openapi.models.operations.GetBillingDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBillingDetailsRequest req = new GetBillingDetailsRequest("iusto");            

            GetBillingDetailsResponse res = sdk.billingDetails.getBillingDetails(req);

            if (res.billingDetailsModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putBillingDetails

Updates the Billing Details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutBillingDetailsRequest;
import org.openapis.openapi.models.operations.PutBillingDetailsResponse;
import org.openapis.openapi.models.shared.BillingDetailsModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutBillingDetailsRequest req = new PutBillingDetailsRequest(                new BillingDetailsModel("excepturi", "nisi", "recusandae", "temporibus", "ab", "quis", "veritatis", "deserunt", "perferendis") {{
                                email2 = "ipsam";
                                email3 = "repellendus";
                                firstName2 = "sapiente";
                                firstName3 = "quo";
                                lastName2 = "odit";
                                lastName3 = "at";
                                state = "at";
                                taxNumber = "maiores";
                            }};, "molestiae");            

            PutBillingDetailsResponse res = sdk.billingDetails.putBillingDetails(req);

            if (res.billingDetailsModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
