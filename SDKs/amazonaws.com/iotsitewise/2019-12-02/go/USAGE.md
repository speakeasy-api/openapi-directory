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
    
    req := operations.AssociateAssetsRequest{
        PathParams: operations.AssociateAssetsPathParams{
            AssetID: "molestiae",
        },
        Headers: operations.AssociateAssetsHeaders{
            XAmzAlgorithm: "aut",
            XAmzContentSha256: "dignissimos",
            XAmzCredential: "consectetur",
            XAmzDate: "repellendus",
            XAmzSecurityToken: "molestias",
            XAmzSignature: "et",
            XAmzSignedHeaders: "quia",
        },
        Request: operations.AssociateAssetsRequestBody{
            ChildAssetID: "ipsa",
            ClientToken: "sit",
            HierarchyID: "repellat",
        },
    }
    
    res, err := s.AssociateAssets(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->