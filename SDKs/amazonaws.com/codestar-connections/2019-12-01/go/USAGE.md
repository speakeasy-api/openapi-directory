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
            XAmzAlgorithm: "et",
            XAmzContentSha256: "ut",
            XAmzCredential: "soluta",
            XAmzDate: "minima",
            XAmzSecurityToken: "fugit",
            XAmzSignature: "accusamus",
            XAmzSignedHeaders: "et",
            XAmzTarget: "com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection",
        },
        Request: shared.CreateConnectionInput{
            ConnectionName: "quod",
            HostArn: "ut",
            ProviderType: "GitHubEnterpriseServer",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quibusdam",
                    Value: "harum",
                },
                shared.Tag{
                    Key: "repudiandae",
                    Value: "similique",
                },
                shared.Tag{
                    Key: "molestiae",
                    Value: "rerum",
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