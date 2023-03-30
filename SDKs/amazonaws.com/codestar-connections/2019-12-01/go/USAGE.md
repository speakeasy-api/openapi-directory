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

    req := operations.CreateConnectionRequest{
        Headers: operations.CreateConnectionHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection",
        },
        Request: shared.CreateConnectionInput{
            ConnectionName: "illum",
            HostArn: "vel",
            ProviderType: "GitHub",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "suscipit",
                    Value: "iure",
                },
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
    res, err := s.CreateConnection(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConnectionOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->