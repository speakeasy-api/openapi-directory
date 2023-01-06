<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateReplicationSetRequest{
        Headers: operations.CreateReplicationSetHeaders{
            XAmzAlgorithm: "molestiae",
            XAmzContentSha256: "molestias",
            XAmzCredential: "magnam",
            XAmzDate: "voluptatem",
            XAmzSecurityToken: "nihil",
            XAmzSignature: "et",
            XAmzSignedHeaders: "recusandae",
        },
        Request: operations.CreateReplicationSetRequestBody{
            ClientToken: "error",
            Regions: map[string]shared.RegionMapInputValue{
                "et": shared.RegionMapInputValue{
                    SseKmsKeyID: "ratione",
                },
            },
        },
    }
    
    res, err := s.CreateReplicationSet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateReplicationSetOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->