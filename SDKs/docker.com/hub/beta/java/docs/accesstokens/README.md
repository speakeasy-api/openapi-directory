# accessTokens

## Overview

The Personal Access Token endpoints lets you manage personal access tokens. For more 
information, see [Access Tokens](https://docs.docker.com/docker-hub/access-tokens/).

You can use a personal access token instead of a password in the [Docker CLI](https://docs.docker.com/engine/reference/commandline/cli/) 
or in the [Create an authentication token](#operation/PostUsersLogin) route to obtain a bearer 
token.

### Scopes

For each scope grouping (in this case "repo"), you only need to define 1 scope as any lower 
scopes are assumed. For example: If you define `repo:write`, the API assumes the scope of both 
`repo:read` *and* `repo:public_read` as well. If you were to define both `repo:write` *and* 
`repo:read`, then `repo:read` is assumed by `repo:write` and ignored.

***Treat your personal access token like your password and keep it secret. You cannot retrieve 
your token after it is generated.***


### Available Operations

* [deleteV2AccessTokensUuid](#deletev2accesstokensuuid) - Delete a personal access token
* [getV2AccessTokens](#getv2accesstokens) - Get a list of personal access tokens
* [getV2AccessTokensUuid](#getv2accesstokensuuid) - Get a personal access token
* [patchV2AccessTokensUuid](#patchv2accesstokensuuid) - Update a personal access token
* [postV2AccessTokens](#postv2accesstokens) - Create a personal access token

## deleteV2AccessTokensUuid

Deletes a personal access token permanently. This cannot be undone.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteV2AccessTokensUuidRequest;
import org.openapis.openapi.models.operations.DeleteV2AccessTokensUuidResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteV2AccessTokensUuidRequest req = new DeleteV2AccessTokensUuidRequest("provident");            

            DeleteV2AccessTokensUuidResponse res = sdk.accessTokens.deleteV2AccessTokensUuid(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2AccessTokens

Returns a paginated list of personal access tokens.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2AccessTokensRequest;
import org.openapis.openapi.models.operations.GetV2AccessTokensResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2AccessTokensRequest req = new GetV2AccessTokensRequest() {{
                page = 7151.9;
                pageSize = 8442.66;
            }};            

            GetV2AccessTokensResponse res = sdk.accessTokens.getV2AccessTokens(req);

            if (res.getAccessTokensResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2AccessTokensUuid

Returns a personal access token by UUID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2AccessTokensUuidRequest;
import org.openapis.openapi.models.operations.GetV2AccessTokensUuidResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2AccessTokensUuidRequest req = new GetV2AccessTokensUuidRequest("unde");            

            GetV2AccessTokensUuidResponse res = sdk.accessTokens.getV2AccessTokensUuid(req);

            if (res.getV2AccessTokensUuid200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchV2AccessTokensUuid

Updates a personal access token partially. You can either update the
token's label or enable/disable it.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchV2AccessTokensUuidRequest;
import org.openapis.openapi.models.operations.PatchV2AccessTokensUuidResponse;
import org.openapis.openapi.models.shared.PatchAccessTokenRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchV2AccessTokensUuidRequest req = new PatchV2AccessTokensUuidRequest(                new PatchAccessTokenRequest() {{
                                isActive = false;
                                tokenLabel = "My read only token";
                            }};, "nulla");            

            PatchV2AccessTokensUuidResponse res = sdk.accessTokens.patchV2AccessTokensUuid(req);

            if (res.patchAccessTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV2AccessTokens

Creates and returns a personal access token.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2AccessTokensResponse;
import org.openapis.openapi.models.shared.CreateAccessTokenRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateAccessTokenRequest req = new CreateAccessTokenRequest(                new String[]{{
                                add("illum"),
                                add("vel"),
                                add("error"),
                            }}, "My read only token");            

            PostV2AccessTokensResponse res = sdk.accessTokens.postV2AccessTokens(req);

            if (res.createAccessTokensResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
