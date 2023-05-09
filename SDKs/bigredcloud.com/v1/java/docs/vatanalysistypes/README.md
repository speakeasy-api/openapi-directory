# vatAnalysisTypes

### Available Operations

* [vatAnalysisTypesGet](#vatanalysistypesget) - Returns a list of global Vat Analysis Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

## vatAnalysisTypesGet

Returns a list of global Vat Analysis Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VatAnalysisTypesGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VatAnalysisTypesGetResponse res = sdk.vatAnalysisTypes.vatAnalysisTypesGet();

            if (res.pageResultVatAnalysisTypeDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
