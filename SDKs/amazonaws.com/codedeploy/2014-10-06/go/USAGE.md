<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AddTagsToOnPremisesInstances(ctx, operations.AddTagsToOnPremisesInstancesRequest{
        AddTagsToOnPremisesInstancesInput: shared.AddTagsToOnPremisesInstancesInput{
            InstanceNames: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("nulla"),
                    Value: sdk.String("corrupti"),
                },
                shared.Tag{
                    Key: sdk.String("illum"),
                    Value: sdk.String("vel"),
                },
                shared.Tag{
                    Key: sdk.String("error"),
                    Value: sdk.String("deserunt"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.AddTagsToOnPremisesInstancesXAmzTargetEnumCodeDeploy20141006AddTagsToOnPremisesInstances,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->