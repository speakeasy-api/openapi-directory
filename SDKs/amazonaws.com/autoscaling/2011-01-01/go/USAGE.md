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

    req := operations.GETAttachInstancesRequest{
        QueryParams: operations.GETAttachInstancesQueryParams{
            Action: "AttachInstances",
            AutoScalingGroupName: "corrupti",
            InstanceIds: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            Version: "2011-01-01",
        },
        Headers: operations.GETAttachInstancesHeaders{
            XAmzAlgorithm: "nulla",
            XAmzContentSha256: "corrupti",
            XAmzCredential: "illum",
            XAmzDate: "vel",
            XAmzSecurityToken: "error",
            XAmzSignature: "deserunt",
            XAmzSignedHeaders: "suscipit",
        },
    }

    ctx := context.Background()
    res, err := s.GETAttachInstances(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->