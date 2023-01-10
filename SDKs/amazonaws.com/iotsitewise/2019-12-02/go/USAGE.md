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
            AssetID: "labore",
        },
        Headers: operations.AssociateAssetsHeaders{
            XAmzAlgorithm: "cupiditate",
            XAmzContentSha256: "unde",
            XAmzCredential: "cupiditate",
            XAmzDate: "odio",
            XAmzSecurityToken: "rerum",
            XAmzSignature: "placeat",
            XAmzSignedHeaders: "nostrum",
        },
        Request: operations.AssociateAssetsRequestBody{
            ChildAssetID: "repellat",
            ClientToken: "earum",
            HierarchyID: "eum",
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