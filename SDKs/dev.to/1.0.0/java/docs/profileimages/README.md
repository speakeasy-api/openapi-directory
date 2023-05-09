# profileImages

### Available Operations

* [getProfileImage](#getprofileimage) - A Users or organizations profile image

## getProfileImage

This endpoint allows the client to retrieve a user or organization profile image information by its
        corresponding username.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProfileImageRequest;
import org.openapis.openapi.models.operations.GetProfileImageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProfileImageRequest req = new GetProfileImageRequest("ipsa");            

            GetProfileImageResponse res = sdk.profileImages.getProfileImage(req);

            if (res.getProfileImage200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
