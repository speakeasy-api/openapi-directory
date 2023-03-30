<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GETAddRoleToDBClusterRequest{
        QueryParams: operations.GETAddRoleToDBClusterQueryParams{
            Action: "AddRoleToDBCluster",
            DBClusterIdentifier: "corrupti",
            FeatureName: "provident",
            RoleArn: "distinctio",
            Version: "2014-10-31",
        },
        Headers: operations.GETAddRoleToDBClusterHeaders{
            XAmzAlgorithm: "quibusdam",
            XAmzContentSha256: "unde",
            XAmzCredential: "nulla",
            XAmzDate: "corrupti",
            XAmzSecurityToken: "illum",
            XAmzSignature: "vel",
            XAmzSignedHeaders: "error",
        },
    }

    ctx := context.Background()
    res, err := s.GETAddRoleToDBCluster(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->