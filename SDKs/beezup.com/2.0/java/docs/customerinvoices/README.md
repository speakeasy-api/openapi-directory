# customerInvoices

### Available Operations

* [getInvoices](#getinvoices) - Get all your invoices

## getInvoices

Get all your invoices

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
                ifNoneMatch = "consequuntur";
            }};            

            GetInvoicesResponse res = sdk.customerInvoices.getInvoices(req);

            if (res.invoiceList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
