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
    
    req := operations.AcceptEnvironmentAccountConnectionRequest{
        Headers: operations.AcceptEnvironmentAccountConnectionHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AwsProton20200720.AcceptEnvironmentAccountConnection",
        },
        Request: shared.AcceptEnvironmentAccountConnectionInput{
            ID: "fugit",
        },
    }
    
    res, err := s.AcceptEnvironmentAccountConnection(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptEnvironmentAccountConnectionOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->