<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.DeleteResourcePermissionRequest{
        Headers: operations.DeleteResourcePermissionHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.DeleteResourcePermissionRequestBody{
            ActionType: "RESTORE",
            ResourceArn: "nihil",
            SourceResourceArn: "fuga",
        },
    }

    ctx := context.Background()
    res, err := s.DeleteResourcePermission(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResourcePermissionOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->