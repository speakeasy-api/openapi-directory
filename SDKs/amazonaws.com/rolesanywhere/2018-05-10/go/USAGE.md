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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateProfileRequest{
        RequestBody: operations.CreateProfileRequestBody{
            DurationSeconds: 548814,
            Enabled: false,
            ManagedPolicyArns: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            Name: "nulla",
            RequireInstanceProperties: false,
            RoleArns: []string{
                "illum",
                "vel",
                "error",
            },
            SessionPolicy: "deserunt",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "iure",
                    Value: "magnam",
                },
                shared.Tag{
                    Key: "debitis",
                    Value: "ipsa",
                },
            },
        },
        XAmzAlgorithm: "delectus",
        XAmzContentSha256: "tempora",
        XAmzCredential: "suscipit",
        XAmzDate: "molestiae",
        XAmzSecurityToken: "minus",
        XAmzSignature: "placeat",
        XAmzSignedHeaders: "voluptatum",
    }

    ctx := context.Background()
    res, err := s.CreateProfile(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ProfileDetailResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->