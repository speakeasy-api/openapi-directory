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
    
    req := operations.AddLayerVersionPermissionRequest{
        PathParams: operations.AddLayerVersionPermissionPathParams{
            LayerName: "sit",
            VersionNumber: 2259404117704393152,
        },
        QueryParams: operations.AddLayerVersionPermissionQueryParams{
            RevisionID: "culpa",
        },
        Headers: operations.AddLayerVersionPermissionHeaders{
            XAmzAlgorithm: "expedita",
            XAmzContentSha256: "consequuntur",
            XAmzCredential: "dolor",
            XAmzDate: "expedita",
            XAmzSecurityToken: "voluptas",
            XAmzSignature: "fugit",
            XAmzSignedHeaders: "et",
        },
        Request: operations.AddLayerVersionPermissionRequestBody{
            Action: "nihil",
            OrganizationID: "rerum",
            Principal: "dicta",
            StatementID: "debitis",
        },
    }
    
    res, err := s.AddLayerVersionPermission(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddLayerVersionPermissionResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->