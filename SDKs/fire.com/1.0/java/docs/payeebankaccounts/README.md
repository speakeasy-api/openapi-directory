# payeeBankAccounts

### Available Operations

* [getPayees](#getpayees) - List all Payee Bank Accounts

## getPayees

Returns all your payee bank accounts. 

Ordered by payee name ascending. 

Can be paginated.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayeesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetPayeesResponse res = sdk.payeeBankAccounts.getPayees();

            if (res.payeeBankAccounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
