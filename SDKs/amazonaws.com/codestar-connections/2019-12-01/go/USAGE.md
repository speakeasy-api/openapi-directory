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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection",
        },
        Request: shared.CreateConnectionInput{
            ConnectionName: "nihil",
            HostArn: "fuga",
            ProviderType: "GitHub",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "iusto",
                    Value: "ullam",
                },
                shared.Tag{
                    Key: "saepe",
                    Value: "inventore",
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