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
            XAmzAlgorithm: "nobis",
            XAmzContentSha256: "libero",
            XAmzCredential: "cumque",
            XAmzDate: "accusamus",
            XAmzSecurityToken: "voluptates",
            XAmzSignature: "est",
            XAmzSignedHeaders: "inventore",
            XAmzTarget: "com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection",
        },
        Request: shared.CreateConnectionInput{
            ConnectionName: "minima",
            HostArn: "iusto",
            ProviderType: "GitHub",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "sed",
                    Value: "quo",
                },
                shared.Tag{
                    Key: "animi",
                    Value: "et",
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