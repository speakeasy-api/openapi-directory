# apiKeyCompanyLevel

### Available Operations

* [postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKey](#postcompaniescompanyidapicredentialsapicredentialidgenerateapikey) - Generate new API key

## postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKey

Returns a new API key for the API credential. You can use the new API key a few minutes after generating it. The old API key stops working 24 hours after generating a new one.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyRequest;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyResponse;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeySecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyRequest req = new PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyRequest("cum", "esse");            

            PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyResponse res = sdk.apiKeyCompanyLevel.postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKey(req, new PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeySecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.generateApiKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
