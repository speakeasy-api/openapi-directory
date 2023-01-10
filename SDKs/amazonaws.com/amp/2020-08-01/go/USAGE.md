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
            XAmzAlgorithm: "commodi",
            XAmzContentSha256: "in",
            XAmzCredential: "quibusdam",
            XAmzDate: "asperiores",
            XAmzSecurityToken: "quo",
            XAmzSignature: "ea",
            XAmzSignedHeaders: "soluta",
        },
        Request: operations.CreateWorkspaceRequestBody{
            Alias: "tempora",
            ClientToken: "commodi",
            Tags: map[string]string{
                "facere": "in",
                "et": "odit",
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