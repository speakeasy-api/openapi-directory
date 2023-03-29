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
            DBClusterIdentifier: "deserunt",
            FeatureName: "porro",
            RoleArn: "nulla",
            Version: "2014-10-31",
        },
        Headers: operations.GETAddRoleToDBClusterHeaders{
            XAmzAlgorithm: "vero",
            XAmzContentSha256: "perspiciatis",
            XAmzCredential: "nulla",
            XAmzDate: "nihil",
            XAmzSecurityToken: "fuga",
            XAmzSignature: "facilis",
            XAmzSignedHeaders: "eum",
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