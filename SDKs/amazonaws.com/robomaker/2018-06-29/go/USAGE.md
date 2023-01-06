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
    
    req := operations.BatchDeleteWorldsRequest{
        Headers: operations.BatchDeleteWorldsHeaders{
            XAmzAlgorithm: "sed",
            XAmzContentSha256: "dolores",
            XAmzCredential: "rem",
            XAmzDate: "perspiciatis",
            XAmzSecurityToken: "molestias",
            XAmzSignature: "repellendus",
            XAmzSignedHeaders: "doloremque",
        },
        Request: operations.BatchDeleteWorldsRequestBody{
            Worlds: []string{
                "consectetur",
            },
        },
    }
    
    res, err := s.BatchDeleteWorlds(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteWorldsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->