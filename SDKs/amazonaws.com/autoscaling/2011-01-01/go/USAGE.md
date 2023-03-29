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
            AutoScalingGroupName: "deserunt",
            InstanceIds: []string{
                "nulla",
                "id",
                "vero",
            },
            Version: "2011-01-01",
        },
        Headers: operations.GETAttachInstancesHeaders{
            XAmzAlgorithm: "nulla",
            XAmzContentSha256: "nihil",
            XAmzCredential: "fuga",
            XAmzDate: "facilis",
            XAmzSecurityToken: "eum",
            XAmzSignature: "iusto",
            XAmzSignedHeaders: "ullam",
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