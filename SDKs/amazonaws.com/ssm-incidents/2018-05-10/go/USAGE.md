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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateReplicationSetRequest{
        RequestBody: operations.CreateReplicationSetRequestBody{
            ClientToken: "corrupti",
            Regions: map[string]shared.RegionMapInputValue{
                "distinctio": shared.RegionMapInputValue{
                    SseKmsKeyID: "quibusdam",
                },
                "unde": shared.RegionMapInputValue{
                    SseKmsKeyID: "nulla",
                },
                "corrupti": shared.RegionMapInputValue{
                    SseKmsKeyID: "illum",
                },
            },
            Tags: map[string]string{
                "error": "deserunt",
                "suscipit": "iure",
            },
        },
        XAmzAlgorithm: "magnam",
        XAmzContentSha256: "debitis",
        XAmzCredential: "ipsa",
        XAmzDate: "delectus",
        XAmzSecurityToken: "tempora",
        XAmzSignature: "suscipit",
        XAmzSignedHeaders: "molestiae",
    }

    ctx := context.Background()
    res, err := s.CreateReplicationSet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateReplicationSetOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->