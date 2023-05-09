# Auth

## Overview

Please note that in keeping with the OAuth standard, parameters are underscored however all other API parameters are camelCase.

### Available Operations

* [PostOauthAccessToken](#postoauthaccesstoken) - Generate an Access Token

## PostOauthAccessToken

By default tokens are valid for 7 days while refresh tokens are valid for 30 days. If your `grant_type` is "password" include the `username` and `password`, if however your `grant_type` is "refresh_token" the username/password are not required, instead set the `refresh_token`

More Information on Refresh Tokens
<#section/Getting-Started/Perpetuating-Access>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Auth.PostOauthAccessToken(ctx, operations.PostOauthAccessTokenAccessTokenRequestV2{})
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessTokenResponseV2 != nil {
        // handle response
    }
}
```
