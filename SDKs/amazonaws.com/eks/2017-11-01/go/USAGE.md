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

    req := operations.AssociateEncryptionConfigRequest{
        RequestBody: operations.AssociateEncryptionConfigRequestBody{
            ClientRequestToken: "corrupti",
            EncryptionConfig: []shared.EncryptionConfig{
                shared.EncryptionConfig{
                    Provider: &shared.Provider{
                        KeyArn: "distinctio",
                    },
                    Resources: []string{
                        "unde",
                        "nulla",
                        "corrupti",
                        "illum",
                    },
                },
                shared.EncryptionConfig{
                    Provider: &shared.Provider{
                        KeyArn: "vel",
                    },
                    Resources: []string{
                        "deserunt",
                        "suscipit",
                        "iure",
                    },
                },
                shared.EncryptionConfig{
                    Provider: &shared.Provider{
                        KeyArn: "magnam",
                    },
                    Resources: []string{
                        "ipsa",
                        "delectus",
                        "tempora",
                        "suscipit",
                    },
                },
            },
        },
        XAmzAlgorithm: "molestiae",
        XAmzContentSha256: "minus",
        XAmzCredential: "placeat",
        XAmzDate: "voluptatum",
        XAmzSecurityToken: "iusto",
        XAmzSignature: "excepturi",
        XAmzSignedHeaders: "nisi",
        Name: "recusandae",
    }

    ctx := context.Background()
    res, err := s.AssociateEncryptionConfig(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateEncryptionConfigResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->