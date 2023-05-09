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
    res, err := s.CreateProfile(ctx, operations.CreateProfileRequest{
        RequestBody: operations.CreateProfileRequestBody{
            DurationSeconds: sdk.Int64(548814),
            Enabled: sdk.Bool(false),
            ManagedPolicyArns: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            Name: "Johnnie Stamm",
            RequireInstanceProperties: sdk.Bool(false),
            RoleArns: []string{
                "suscipit",
                "iure",
                "magnam",
            },
            SessionPolicy: sdk.String("debitis"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "delectus",
                    Value: "tempora",
                },
            },
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProfileDetailResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->