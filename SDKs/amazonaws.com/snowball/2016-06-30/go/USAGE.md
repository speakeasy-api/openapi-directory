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
    
    req := operations.CancelClusterRequest{
        Headers: operations.CancelClusterHeaders{
            XAmzAlgorithm: "perferendis",
            XAmzContentSha256: "consequatur",
            XAmzCredential: "ut",
            XAmzDate: "soluta",
            XAmzSecurityToken: "voluptatem",
            XAmzSignature: "adipisci",
            XAmzSignedHeaders: "nobis",
            XAmzTarget: "AWSIESnowballJobManagementService.CancelCluster",
        },
        Request: shared.CancelClusterRequest{
            ClusterID: "necessitatibus",
        },
    }
    
    res, err := s.CancelCluster(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelClusterResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->