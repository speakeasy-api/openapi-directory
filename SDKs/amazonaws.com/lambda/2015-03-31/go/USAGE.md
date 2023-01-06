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
            LayerName: "quos",
            VersionNumber: 2630384357033883160,
        },
        QueryParams: operations.AddLayerVersionPermissionQueryParams{
            RevisionID: "adipisci",
        },
        Headers: operations.AddLayerVersionPermissionHeaders{
            XAmzAlgorithm: "quo",
            XAmzContentSha256: "laborum",
            XAmzCredential: "ipsum",
            XAmzDate: "delectus",
            XAmzSecurityToken: "tenetur",
            XAmzSignature: "expedita",
            XAmzSignedHeaders: "quia",
        },
        Request: operations.AddLayerVersionPermissionRequestBody{
            Action: "ut",
            OrganizationID: "sed",
            Principal: "qui",
            StatementID: "nostrum",
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