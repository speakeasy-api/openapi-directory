# clientKeyCompanyLevel

### Available Operations

* [postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKey](#postcompaniescompanyidapicredentialsapicredentialidgenerateclientkey) - Generate new client key

## postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKey

Returns a new [client key](https://docs.adyen.com/development-resources/client-side-authentication#how-it-works) for the API credential identified in the path. You can use the new client key a few minutes after generating it. The old client key stops working 24 hours after generating a new one.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyRequest;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyResponse;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeySecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyRequest req = new PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyRequest("eius", "maxime");            

            PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyResponse res = sdk.clientKeyCompanyLevel.postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKey(req, new PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeySecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.generateClientKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
