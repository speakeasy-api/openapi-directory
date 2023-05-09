# userManagement

### Available Operations

* [deleteUsersUserid](#deleteusersuserid) - Unlink User
* [deleteUsersUseridAuthorization](#deleteusersuseridauthorization) - Deauthorize User
* [postUsersUseridLink](#postusersuseridlink) - Link User

## deleteUsersUserid

Deletes a User and all of their data permanently, and invalidates any associated sessions, authorization codes, and access/refresh tokens

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersUseridRequest;
import org.openapis.openapi.models.operations.DeleteUsersUseridResponse;
import org.openapis.openapi.models.operations.DeleteUsersUseridSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsersUseridRequest req = new DeleteUsersUseridRequest("excepturi");            

            DeleteUsersUseridResponse res = sdk.userManagement.deleteUsersUserid(req, new DeleteUsersUseridSecurity("nisi") {{
                clientAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUsersUseridAuthorization

Deletes the User's stored vendor authorizations and credentials, invalidates any associated sessions, authorization codes, and access/refresh tokens.

All other User data is retained, and if the User is sent through the Link User flow in the future their account will be just as they left it.

No webhook events will be generated for a deauthorized user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersUseridAuthorizationRequest;
import org.openapis.openapi.models.operations.DeleteUsersUseridAuthorizationResponse;
import org.openapis.openapi.models.operations.DeleteUsersUseridAuthorizationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsersUseridAuthorizationRequest req = new DeleteUsersUseridAuthorizationRequest("recusandae");            

            DeleteUsersUseridAuthorizationResponse res = sdk.userManagement.deleteUsersUseridAuthorization(req, new DeleteUsersUseridAuthorizationSecurity("temporibus") {{
                clientAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersUseridLink

Creates an Enode Link session attached to the provided User ID. If this User does not exist, it will be created. The returned `linkState` gives the user short-lived access to Enode Link.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersUseridLinkRequest;
import org.openapis.openapi.models.operations.PostUsersUseridLinkRequestBody;
import org.openapis.openapi.models.operations.PostUsersUseridLinkRequestBodyVendorEnum;
import org.openapis.openapi.models.operations.PostUsersUseridLinkResponse;
import org.openapis.openapi.models.operations.PostUsersUseridLinkSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUsersUseridLinkRequest req = new PostUsersUseridLinkRequest("ab") {{
                requestBody = new PostUsersUseridLinkRequestBody() {{
                    forceLanguage = "nb-NO";
                    linkMultiple = false;
                    userImage = "https://cdn.website.example/user/x/profile.jpg";
                    userName = "Ola";
                    vendor = PostUsersUseridLinkRequestBodyVendorEnum.TESLA;
                }};;
            }};            

            PostUsersUseridLinkResponse res = sdk.userManagement.postUsersUseridLink(req, new PostUsersUseridLinkSecurity("quis") {{
                clientAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.postUsersUseridLink200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
