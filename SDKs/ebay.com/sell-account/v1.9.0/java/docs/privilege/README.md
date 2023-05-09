# privilege

### Available Operations

* [getPrivileges](#getprivileges) - This method retrieves the seller's current set of privileges, including whether or not the seller's eBay registration has been completed, as well as the details of their site-wide <b>sellingLimt</b> (the amount and quantity they can sell on a given day).

## getPrivileges

This method retrieves the seller's current set of privileges, including whether or not the seller's eBay registration has been completed, as well as the details of their site-wide <b>sellingLimt</b> (the amount and quantity they can sell on a given day).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPrivilegesResponse;
import org.openapis.openapi.models.operations.GetPrivilegesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPrivilegesResponse res = sdk.privilege.getPrivileges(new GetPrivilegesSecurity("minima") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.sellingPrivileges != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
