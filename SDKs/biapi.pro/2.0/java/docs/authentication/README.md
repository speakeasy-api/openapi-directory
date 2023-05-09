# authentication

### Available Operations

* [deleteAuthToken](#deleteauthtoken) - Remove user access
* [deleteUsersIdUser](#deleteusersiduser) - Delete the user
* [getAuthTokenCode](#getauthtokencode) - Generate a user temporary token
* [getCertificateType](#getcertificatetype) - Get the latest certificate of a type
* [getUsersIdUser](#getusersiduser) - Get a user
* [getWebauth](#getwebauth) - First step to establish an oAuth2 connection.
* [postAdminJwt](#postadminjwt) - Generate a jwt manage token
* [postAuthInit](#postauthinit) - Create a new anonymous user
* [postAuthJwt](#postauthjwt) - Generate a user jwt token
* [postAuthRenew](#postauthrenew) - Get a new access token given an user id and client credentials
* [postAuthTokenAccess](#postauthtokenaccess) - Transform a temporary code to a access_token
* [postUsersIdUserToken](#postusersidusertoken) - Create a token

## deleteAuthToken

This endpoint removes the token in use.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAuthTokenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAuthTokenResponse res = sdk.authentication.deleteAuthToken();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUsersIdUser

This endpoint deletes the user.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersIdUserRequest;
import org.openapis.openapi.models.operations.DeleteUsersIdUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsersIdUserRequest req = new DeleteUsersIdUserRequest("repellat") {{
                expand = "mollitia";
            }};            

            DeleteUsersIdUserResponse res = sdk.authentication.deleteUsersIdUser(req);

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAuthTokenCode

This endpoint generates a new temporary token for the user.<br><br>In case the access_token is used by a trusted device, and you want to let another one (for example a web browser) access to user resources, use this service to create a token which will expire in 30 minutes.<br><br>Additionally, you can also generate a temporary single-use token by specifying 'type=singleAccess' as query parameter. A single-use token can only be used once no matter the endpoint being accessed.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAuthTokenCodeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAuthTokenCodeResponse res = sdk.authentication.getAuthTokenCode();

            if (res.getAuthTokenCode200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCertificateType

Get the latest certificate of a type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCertificateTypeRequest;
import org.openapis.openapi.models.operations.GetCertificateTypeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCertificateTypeRequest req = new GetCertificateTypeRequest("occaecati") {{
                expand = "numquam";
            }};            

            GetCertificateTypeResponse res = sdk.authentication.getCertificateType(req);

            if (res.certificate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdUser

Get a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdUserRequest;
import org.openapis.openapi.models.operations.GetUsersIdUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersIdUserRequest req = new GetUsersIdUserRequest("commodi") {{
                expand = "quam";
            }};            

            GetUsersIdUserResponse res = sdk.authentication.getUsersIdUser(req);

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWebauth

The route encapsulate 2 functionalities: 1. Create or update a connection through oAuth2 session.<br><br>2. Execute a transfer through OAuth2 session.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebauthRequestBody;
import org.openapis.openapi.models.operations.GetWebauthResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWebauthRequestBody req = new GetWebauthRequestBody() {{
                clientId = 474697L;
                idTransfer = 244425L;
                redirectUri = "error";
                state = "quia";
            }};            

            GetWebauthResponse res = sdk.authentication.getWebauth(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAdminJwt

This endpoint generates a new jwt manage token. It requires an admin manage token to be used<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAdminJwtRequestBody;
import org.openapis.openapi.models.operations.PostAdminJwtResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAdminJwtRequestBody req = new PostAdminJwtRequestBody() {{
                duration = 338007L;
                scope = "vitae";
            }};            

            PostAdminJwtResponse res = sdk.authentication.postAdminJwt(req);

            if (res.postAdminJwt200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAuthInit

This endpoint creates a new temporary token related to a new anonymous user.<br><br>It will expire 30 minutes after.<br><br>Note: if you supply client_id and client_secret, or if you call this endpoint with the manage_token, the token will be permanent.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAuthInitRequestBody;
import org.openapis.openapi.models.operations.PostAuthInitResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAuthInitRequestBody req = new PostAuthInitRequestBody() {{
                clientId = "laborum";
                clientSecret = "animi";
            }};            

            PostAuthInitResponse res = sdk.authentication.postAuthInit(req);

            if (res.postAuthInit200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAuthJwt

This endpoint generates a new jwt token for the user. This token will last the time in minutes given by the config key auth.default_token_expire (permanent if this the parameter expire=False is given)<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAuthJwtRequestBody;
import org.openapis.openapi.models.operations.PostAuthJwtResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAuthJwtRequestBody req = new PostAuthJwtRequestBody() {{
                clientId = "enim";
                clientSecret = "odit";
                expire = false;
                idUser = 778346L;
                scope = "sequi";
            }};            

            PostAuthJwtResponse res = sdk.authentication.postAuthJwt(req);

            if (res.postAuthJwt200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAuthRenew

Get a new access token given an user id and client credentials

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAuthRenewRequestBody;
import org.openapis.openapi.models.operations.PostAuthRenewResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAuthRenewRequestBody req = new PostAuthRenewRequestBody("tenetur", "ipsam", 662527L) {{
                grantType = "possimus";
                revokePrevious = false;
            }};            

            PostAuthRenewResponse res = sdk.authentication.postAuthRenew(req);

            if (res.postAuthRenew200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAuthTokenAccess

In order to register a new user with the OAuth 2 process, the client has to call this endpoint to request a granted access_token with the received temporary code.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAuthTokenAccessRequestBody;
import org.openapis.openapi.models.operations.PostAuthTokenAccessResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAuthTokenAccessRequestBody req = new PostAuthTokenAccessRequestBody("aut", "quasi", "error") {{
                grantType = "temporibus";
                redirectUri = "laborum";
            }};            

            PostAuthTokenAccessResponse res = sdk.authentication.postAuthTokenAccess(req);

            if (res.postAuthTokenAccess200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersIdUserToken

Create an access_token for this user and get it.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersIdUserTokenRequest;
import org.openapis.openapi.models.operations.PostUsersIdUserTokenRequestBody;
import org.openapis.openapi.models.operations.PostUsersIdUserTokenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUsersIdUserTokenRequest req = new PostUsersIdUserTokenRequest(                new PostUsersIdUserTokenRequestBody("quasi");, "reiciendis");            

            PostUsersIdUserTokenResponse res = sdk.authentication.postUsersIdUserToken(req);

            if (res.postUsersIdUserToken200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
