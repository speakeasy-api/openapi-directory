# SDKKeys

## Overview

With these endpoints you can manage your SDK Keys.

### Available Operations

* [GetSDKKeys](#getsdkkeys) - Get SDK Key

## GetSDKKeys

This endpoint returns the SDK Key for your Config in a specified Environment.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDKKeys.GetSDKKeys(ctx, operations.GetSDKKeysRequest{
        ConfigID: "1f6c37a5-1262-4438-b5bb-c05a23a45cef",
        EnvironmentID: "c5fde10a-0ce2-4169-a510-019c6dc5e347",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SDKKeysModel != nil {
        // handle response
    }
}
```
