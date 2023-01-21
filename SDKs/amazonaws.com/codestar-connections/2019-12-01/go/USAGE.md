<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateConnectionRequest{
        Headers: operations.CreateConnectionHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection",
        },
        Request: shared.CreateConnectionInput{
            ConnectionName: "fugit",
            HostArn: "et",
            ProviderType: "Bitbucket",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dicta",
                    Value: "debitis",
                },
                shared.Tag{
                    Key: "voluptatum",
                    Value: "et",
                },
                shared.Tag{
                    Key: "ut",
                    Value: "dolorem",
                },
            },
        },
    }
    
    res, err := s.CreateConnection(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConnectionOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->