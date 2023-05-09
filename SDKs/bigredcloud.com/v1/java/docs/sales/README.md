# sales

### Available Operations

* [salesGet](#salesget) - Returns a list of company's Sales Entries, Sales Invoices and Sales Credit Notes. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.

## salesGet

Returns a list of company's Sales Entries, Sales Invoices and Sales Credit Notes. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SalesGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SalesGetResponse res = sdk.sales.salesGet();

            if (res.pageResultSalesQueryDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
