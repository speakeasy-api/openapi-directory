# taxComponents

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [getTaxComponents](#gettaxcomponents) - List tax components

## getTaxComponents

This endpoint returns a lits of tax rates from the commerce platform, including tax rate names and values. This supports the mapping of tax rates from the commerce platform to the accounting platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTaxComponentsRequest;
import org.openapis.openapi.models.operations.GetTaxComponentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTaxComponentsRequest req = new GetTaxComponentsRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171");            

            GetTaxComponentsResponse res = sdk.taxComponents.getTaxComponents(req);

            if (res.taxComponents != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
