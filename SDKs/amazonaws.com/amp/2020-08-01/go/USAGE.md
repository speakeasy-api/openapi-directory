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
    
    req := operations.CreateWorkspaceRequest{
        Headers: operations.CreateWorkspaceHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.CreateWorkspaceRequestBody{
            Alias: "voluptas",
            ClientToken: "fugit",
            Tags: map[string]string{
                "nihil": "rerum",
            },
        },
    }
    
    res, err := s.CreateWorkspace(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorkspaceResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->