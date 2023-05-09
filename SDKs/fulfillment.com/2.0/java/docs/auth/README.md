# auth

## Overview

Please note that in keeping with the OAuth standard, parameters are underscored however all other API parameters are camelCase.

### Available Operations

* [postOauthAccessToken](#postoauthaccesstoken) - Generate an Access Token

## postOauthAccessToken

By default tokens are valid for 7 days while refresh tokens are valid for 30 days. If your `grant_type` is "password" include the `username` and `password`, if however your `grant_type` is "refresh_token" the username/password are not required, instead set the `refresh_token`

More Information on Refresh Tokens
<#section/Getting-Started/Perpetuating-Access>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2;
import org.openapis.openapi.models.operations.PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum;
import org.openapis.openapi.models.operations.PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum;
import org.openapis.openapi.models.operations.PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3;
import org.openapis.openapi.models.operations.PostOauthAccessTokenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3("perferendis", "ipsam", PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum.REFRESH_TOKEN, "sapiente", PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum.OMS) {{
                clientId = "ab";
                clientSecret = "quis";
                grantType = PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum.PASSWORD;
                refreshToken = "deserunt";
                scope = PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum.OMS;
            }}            

            PostOauthAccessTokenResponse res = sdk.auth.postOauthAccessToken(req);

            if (res.accessTokenResponseV2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
