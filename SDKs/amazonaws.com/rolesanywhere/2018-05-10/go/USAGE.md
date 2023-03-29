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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateProfileRequestBody{
            DurationSeconds: 847252,
            Enabled: false,
            ManagedPolicyArns: []string{
                "fuga",
                "facilis",
            },
            Name: "eum",
            RequireInstanceProperties: false,
            RoleArns: []string{
                "ullam",
                "saepe",
            },
            SessionPolicy: "inventore",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "enim",
                    Value: "eum",
                },
                shared.Tag{
                    Key: "voluptatum",
                    Value: "autem",
                },
                shared.Tag{
                    Key: "vel",
                    Value: "non",
                },
                shared.Tag{
                    Key: "deleniti",
                    Value: "similique",
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