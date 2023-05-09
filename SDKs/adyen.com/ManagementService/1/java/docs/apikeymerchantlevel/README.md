# apiKeyMerchantLevel

### Available Operations

* [postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKey](#postmerchantsmerchantidapicredentialsapicredentialidgenerateapikey) - Generate new API key

## postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKey

Returns a new API key for the API credential. You can use the new API key a few minutes after generating it. The old API key stops working 24 hours after generating a new one.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyRequest;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyResponse;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeySecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyRequest req = new PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyRequest("ipsum", "excepturi");            

            PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyResponse res = sdk.apiKeyMerchantLevel.postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKey(req, new PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeySecurity() {{
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
