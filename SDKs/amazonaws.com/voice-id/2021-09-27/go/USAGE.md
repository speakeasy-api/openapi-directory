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

    req := operations.CreateDomainRequest{
        Headers: operations.CreateDomainHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "VoiceID.CreateDomain",
        },
        Request: shared.CreateDomainRequest{
            ClientToken: "nihil",
            Description: "fuga",
            Name: "facilis",
            ServerSideEncryptionConfiguration: shared.ServerSideEncryptionConfiguration{
                KmsKeyID: "eum",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ullam",
                    Value: "saepe",
                },
                shared.Tag{
                    Key: "inventore",
                    Value: "sapiente",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateDomain(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDomainResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->