# connections

## Overview

Create and manage partner expense connection.

### Available Operations

* [createPartnerExpenseConnection](#createpartnerexpenseconnection) - Create Partner Expense connection

## createPartnerExpenseConnection

Creates a Partner Expense data connection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePartnerExpenseConnectionRequest;
import org.openapis.openapi.models.operations.CreatePartnerExpenseConnectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePartnerExpenseConnectionRequest req = new CreatePartnerExpenseConnectionRequest("8a210b68-6988-11ed-a1eb-0242ac120002");            

            CreatePartnerExpenseConnectionResponse res = sdk.connections.createPartnerExpenseConnection(req);

            if (res.dataConnection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
