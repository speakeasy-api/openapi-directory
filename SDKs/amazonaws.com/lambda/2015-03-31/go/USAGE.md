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
            LayerName: "qui",
            VersionNumber: 1890455036426927167,
        },
        QueryParams: operations.AddLayerVersionPermissionQueryParams{
            RevisionID: "sed",
        },
        Headers: operations.AddLayerVersionPermissionHeaders{
            XAmzAlgorithm: "enim",
            XAmzContentSha256: "eum",
            XAmzCredential: "et",
            XAmzDate: "expedita",
            XAmzSecurityToken: "et",
            XAmzSignature: "quasi",
            XAmzSignedHeaders: "nisi",
        },
        Request: operations.AddLayerVersionPermissionRequestBody{
            Action: "et",
            OrganizationID: "unde",
            Principal: "in",
            StatementID: "ut",
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