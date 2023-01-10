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
    
    req := operations.CreateActivityRequest{
        Headers: operations.CreateActivityHeaders{
            XAmzAlgorithm: "laboriosam",
            XAmzContentSha256: "totam",
            XAmzCredential: "atque",
            XAmzDate: "corrupti",
            XAmzSecurityToken: "quibusdam",
            XAmzSignature: "dolorum",
            XAmzSignedHeaders: "placeat",
            XAmzTarget: "AWSStepFunctions.CreateActivity",
        },
        Request: shared.CreateActivityInput{
            Name: "laborum",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "numquam",
                    Value: "et",
                },
            },
        },
    }
    
    res, err := s.CreateActivity(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateActivityOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->