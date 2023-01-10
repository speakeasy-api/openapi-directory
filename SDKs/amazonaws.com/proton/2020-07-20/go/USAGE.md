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
            XAmzAlgorithm: "possimus",
            XAmzContentSha256: "ullam",
            XAmzCredential: "eveniet",
            XAmzDate: "alias",
            XAmzSecurityToken: "tenetur",
            XAmzSignature: "dolorem",
            XAmzSignedHeaders: "porro",
            XAmzTarget: "AwsProton20200720.AcceptEnvironmentAccountConnection",
        },
        Request: shared.AcceptEnvironmentAccountConnectionInput{
            ID: "sed",
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