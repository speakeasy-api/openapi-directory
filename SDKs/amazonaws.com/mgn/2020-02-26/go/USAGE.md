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
            XAmzAlgorithm: "adipisci",
            XAmzContentSha256: "dolorem",
            XAmzCredential: "quas",
            XAmzDate: "eum",
            XAmzSecurityToken: "distinctio",
            XAmzSignature: "nostrum",
            XAmzSignedHeaders: "sed",
        },
        Request: operations.ChangeServerLifeCycleStateRequestBody{
            LifeCycle: operations.ChangeServerLifeCycleStateRequestBodyLifeCycle{
                State: "READY_FOR_CUTOVER",
            },
            SourceServerID: "mollitia",
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