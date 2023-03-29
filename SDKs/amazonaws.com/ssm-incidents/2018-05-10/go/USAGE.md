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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateReplicationSetRequestBody{
            ClientToken: "nulla",
            Regions: map[string]shared.RegionMapInputValue{
                "fuga": shared.RegionMapInputValue{
                    SseKmsKeyID: "facilis",
                },
                "eum": shared.RegionMapInputValue{
                    SseKmsKeyID: "iusto",
                },
            },
            Tags: map[string]string{
                "saepe": "inventore",
                "sapiente": "enim",
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