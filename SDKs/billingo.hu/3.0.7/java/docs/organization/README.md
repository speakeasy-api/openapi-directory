# organization

### Available Operations

* [getOrganizationData](#getorganizationdata) - Retrieve a organization data.

## getOrganizationData

Retrieves the data of organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDataResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDataResponse res = sdk.organization.getOrganizationData();

            if (res.organizationData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
