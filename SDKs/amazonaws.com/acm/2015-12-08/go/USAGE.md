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

    req := operations.AddTagsToCertificateRequest{
        AddTagsToCertificateRequest: shared.AddTagsToCertificateRequest{
            CertificateArn: "corrupti",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "distinctio",
                    Value: "quibusdam",
                },
                shared.Tag{
                    Key: "unde",
                    Value: "nulla",
                },
                shared.Tag{
                    Key: "corrupti",
                    Value: "illum",
                },
            },
        },
        XAmzAlgorithm: "vel",
        XAmzContentSha256: "error",
        XAmzCredential: "deserunt",
        XAmzDate: "suscipit",
        XAmzSecurityToken: "iure",
        XAmzSignature: "magnam",
        XAmzSignedHeaders: "debitis",
        XAmzTarget: "CertificateManager.AddTagsToCertificate",
    }

    ctx := context.Background()
    res, err := s.AddTagsToCertificate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->