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

    req := operations.AddTagsToOnPremisesInstancesRequest{
        Headers: operations.AddTagsToOnPremisesInstancesHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "CodeDeploy_20141006.AddTagsToOnPremisesInstances",
        },
        Request: shared.AddTagsToOnPremisesInstancesInput{
            InstanceNames: []string{
                "vel",
                "error",
                "deserunt",
                "suscipit",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "magnam",
                    Value: "debitis",
                },
                shared.Tag{
                    Key: "ipsa",
                    Value: "delectus",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.AddTagsToOnPremisesInstances(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->