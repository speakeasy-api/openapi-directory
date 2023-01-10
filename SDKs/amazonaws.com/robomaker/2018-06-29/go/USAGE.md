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
            XAmzAlgorithm: "et",
            XAmzContentSha256: "ea",
            XAmzCredential: "sapiente",
            XAmzDate: "consequatur",
            XAmzSecurityToken: "et",
            XAmzSignature: "voluptate",
            XAmzSignedHeaders: "dolore",
        },
        Request: operations.BatchDeleteWorldsRequestBody{
            Worlds: []string{
                "quia",
                "eum",
                "iure",
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