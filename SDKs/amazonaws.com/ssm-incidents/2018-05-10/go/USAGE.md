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

    req := operations.CreateReplicationSetRequest{
        Headers: operations.CreateReplicationSetHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateReplicationSetRequestBody{
            ClientToken: "illum",
            Regions: map[string]shared.RegionMapInputValue{
                "error": shared.RegionMapInputValue{
                    SseKmsKeyID: "deserunt",
                },
                "suscipit": shared.RegionMapInputValue{
                    SseKmsKeyID: "iure",
                },
            },
            Tags: map[string]string{
                "debitis": "ipsa",
                "delectus": "tempora",
            },
        },
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