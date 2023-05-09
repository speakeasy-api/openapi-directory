# companySettings

### Available Operations

* [companySettingsGet](#companysettingsget) - Returns a list of company settings. Supports OData querying protocol.
Filtering is forbidden.

## companySettingsGet

Returns a list of company settings. Supports OData querying protocol.
Filtering is forbidden.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompanySettingsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanySettingsGetResponse res = sdk.companySettings.companySettingsGet();

            if (res.pageResultCompanySettingDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
