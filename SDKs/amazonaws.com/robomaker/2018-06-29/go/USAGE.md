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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.BatchDeleteWorldsRequestBody{
            Worlds: []string{
                "fugit",
                "et",
                "nihil",
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