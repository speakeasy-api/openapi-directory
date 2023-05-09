# user

### Available Operations

* [apiKeyOwner](#apikeyowner) - API Key Owner

## apiKeyOwner

the `/me` Postman API endpoint lets you access information about the authenticated user. You can retrieve the authenticated user's username, full name, e-mail address, and any other available information.

> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApiKeyOwnerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApiKeyOwnerResponse res = sdk.user.apiKeyOwner();

            if (res.apiKeyOwner200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
