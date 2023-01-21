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
    
    req := operations.GetAddRoleToDbClusterRequest{
        QueryParams: operations.GetAddRoleToDbClusterQueryParams{
            Action: "AddRoleToDBCluster",
            DBClusterIdentifier: "voluptas",
            FeatureName: "culpa",
            RoleArn: "expedita",
            Version: "2014-10-31",
        },
        Headers: operations.GetAddRoleToDbClusterHeaders{
            XAmzAlgorithm: "dolor",
            XAmzContentSha256: "expedita",
            XAmzCredential: "voluptas",
            XAmzDate: "fugit",
            XAmzSecurityToken: "et",
            XAmzSignature: "nihil",
            XAmzSignedHeaders: "rerum",
        },
    }
    
    res, err := s.GetAddRoleToDbCluster(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->