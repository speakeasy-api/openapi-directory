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
                BearerAuth: shared.SchemeBearerAuth{
                    Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.InstallKubernetesRequest{
        Request: operations.InstallKubernetesRequestBody{
            AddonSlugs: []string{
                "corrupti",
                "quod",
            },
            ClusterUUID: "voluptas",
        },
    }
    
    res, err := s.OneClickApplications.InstallKubernetes(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.InstallKubernetes200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->