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
            XAmzAlgorithm: "non",
            XAmzContentSha256: "totam",
            XAmzCredential: "similique",
            XAmzDate: "sunt",
            XAmzSecurityToken: "aut",
            XAmzSignature: "quis",
            XAmzSignedHeaders: "quis",
        },
        Request: operations.CreateReplicationSetRequestBody{
            ClientToken: "amet",
            Regions: map[string]shared.RegionMapInputValue{
                "totam": shared.RegionMapInputValue{
                    SseKmsKeyID: "perspiciatis",
                },
                "cupiditate": shared.RegionMapInputValue{
                    SseKmsKeyID: "asperiores",
                },
                "quasi": shared.RegionMapInputValue{
                    SseKmsKeyID: "eius",
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