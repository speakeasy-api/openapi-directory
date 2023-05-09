# authentication

### Available Operations

* [authorize](#authorize) - Authenticate a user
* [token](#token) - Obtain an ID Token
* [userInfo](#userinfo) - Retrieve a user profile

## authorize

Start a session with Authentiq Connect to authenticate a user.

```
GET https://connect.authentiq.io/authorize?client_id=<your-client-id>&response_type=code+id_token&scope=openid+email&redirect_uri=<your-redirect-uri>&state=0123456789
```

This endpoint also supports the POST method.


OIDC Authorization Endpoint
<http://openid.net/specs/openid-connect-core-1_0.html#AuthorizationEndpoint>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizeRequest;
import org.openapis.openapi.models.operations.AuthorizeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizeRequest req = new AuthorizeRequest("suscipit", "iure", "magnam", "debitis", "ipsa") {{
                display = "delectus";
                maxAge = 272656L;
                nonce = "suscipit";
                prompt = "molestiae";
                responseMode = "minus";
                uiLocales = "placeat";
            }};            

            AuthorizeResponse res = sdk.authentication.authorize(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## token

Exchange en authorization code for an ID Token or Access Token.

This endpoint supports both `client_secret_basic` (default) and `client_secret_basic` authentication methods, as specified by the client's `token_endpoint_auth_method`.


OIDC Token Endpoint
<http://openid.net/specs/openid-connect-core-1_0.html#TokenEndpoint>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TokenRequest;
import org.openapis.openapi.models.operations.TokenRequestBody;
import org.openapis.openapi.models.operations.TokenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TokenRequest req = new TokenRequest(                new TokenRequestBody("voluptatum", "iusto", "excepturi", "nisi", "recusandae");) {{
                authorization = "temporibus";
            }};            

            TokenResponse res = sdk.authentication.token(req);

            if (res.token != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userInfo

Use this endpoint to retrieve a user's profile in case you are unable to parse an ID Token or you've not already obtained enough details from the ID Token via the Token Endpoint.


OIDC UserInfo Endpoint
<http://openid.net/specs/openid-connect-core-1_0.html#UserInfo>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserInfoResponse;
import org.openapis.openapi.models.operations.UserInfoSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UserInfoResponse res = sdk.authentication.userInfo(new UserInfoSecurity() {{
                oauthCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
