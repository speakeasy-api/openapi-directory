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
            XAmzContentSha256: "blanditiis",
            XAmzCredential: "facere",
            XAmzDate: "in",
            XAmzSecurityToken: "et",
            XAmzSignature: "odit",
            XAmzSignedHeaders: "est",
        },
        Request: operations.CreateWorkspaceRequestBody{
            Alias: "id",
            ClientToken: "ipsum",
            Tags: map[string]string{
                "perspiciatis": "et",
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