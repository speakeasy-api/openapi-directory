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
    
    req := operations.ChangeServerLifeCycleStateRequest{
        Headers: operations.ChangeServerLifeCycleStateHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.ChangeServerLifeCycleStateRequestBody{
            LifeCycle: operations.ChangeServerLifeCycleStateRequestBodyLifeCycle{
                State: "CUTOVER",
            },
            SourceServerID: "fugit",
        },
    }
    
    res, err := s.ChangeServerLifeCycleState(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SourceServer != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->