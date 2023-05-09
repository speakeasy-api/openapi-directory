# auth

## Overview

Authentication related

### Available Operations

* [getCredentials](#getcredentials) - List the credentials associated with the authenticated user.
* [getScopes](#getscopes) - Scopes
* [postVerify](#postverify) - Verify token and return details of the owning user

## getCredentials

List the credentials associated with the authenticated user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCredentialsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCredentialsResponse res = sdk.auth.getCredentials();

            if (res.credentials != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getScopes

List available token scopes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetScopesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetScopesResponse res = sdk.auth.getScopes();

            if (res.getScopes200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postVerify

Verify token and return details of the owning user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostVerifyResponse;
import org.openapis.openapi.models.operations.PostVerifySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostVerifyResponse res = sdk.auth.postVerify(new PostVerifySecurity("a") {{
                oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.authority != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
