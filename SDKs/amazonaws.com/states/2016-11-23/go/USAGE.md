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
    res, err := s.CreateActivity(ctx, operations.CreateActivityRequest{
        CreateActivityInput: shared.CreateActivityInput{
            Name: "Terrence Rau",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("corrupti"),
                    Value: sdk.String("illum"),
                },
                shared.Tag{
                    Key: sdk.String("vel"),
                    Value: sdk.String("error"),
                },
                shared.Tag{
                    Key: sdk.String("deserunt"),
                    Value: sdk.String("suscipit"),
                },
                shared.Tag{
                    Key: sdk.String("iure"),
                    Value: sdk.String("magnam"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("minus"),
        XAmzTarget: operations.CreateActivityXAmzTargetEnumAwsStepFunctionsCreateActivity,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateActivityOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->