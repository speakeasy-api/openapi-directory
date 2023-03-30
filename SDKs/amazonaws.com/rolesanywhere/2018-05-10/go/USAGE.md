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

    req := operations.CreateProfileRequest{
        Headers: operations.CreateProfileHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateProfileRequestBody{
            DurationSeconds: 847252,
            Enabled: false,
            ManagedPolicyArns: []string{
                "error",
                "deserunt",
            },
            Name: "suscipit",
            RequireInstanceProperties: false,
            RoleArns: []string{
                "magnam",
                "debitis",
            },
            SessionPolicy: "ipsa",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "tempora",
                    Value: "suscipit",
                },
                shared.Tag{
                    Key: "molestiae",
                    Value: "minus",
                },
                shared.Tag{
                    Key: "placeat",
                    Value: "voluptatum",
                },
                shared.Tag{
                    Key: "iusto",
                    Value: "excepturi",
                },
            },
        },
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