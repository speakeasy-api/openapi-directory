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
            DBClusterIdentifier: "qui",
            FeatureName: "consequatur",
            RoleArn: "laborum",
            Version: "2014-10-31",
        },
        Headers: operations.GetAddRoleToDbClusterHeaders{
            XAmzAlgorithm: "laboriosam",
            XAmzContentSha256: "fugiat",
            XAmzCredential: "et",
            XAmzDate: "nesciunt",
            XAmzSecurityToken: "tempore",
            XAmzSignature: "libero",
            XAmzSignedHeaders: "modi",
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