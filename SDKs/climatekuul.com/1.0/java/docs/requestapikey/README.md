# requestApiKey

### Available Operations

* [requestApiKey](#requestapikey) - requestApiKey

## requestApiKey

requestApiKey

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RequestApiKeyRequestBody;
import org.openapis.openapi.models.operations.RequestApiKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RequestApiKeyRequestBody req = new RequestApiKeyRequestBody("qNahlSrEaduQ", "eCqMeAfaDBWG", "abcd@gmail.com", 234, "usman", "ch");            

            RequestApiKeyResponse res = sdk.requestApiKey.requestApiKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
