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
            XAmzAlgorithm: "earum",
            XAmzContentSha256: "est",
            XAmzCredential: "error",
            XAmzDate: "ipsa",
            XAmzSecurityToken: "sint",
            XAmzSignature: "saepe",
            XAmzSignedHeaders: "qui",
            XAmzTarget: "AWSStepFunctions.CreateActivity",
        },
        Request: shared.CreateActivityInput{
            Name: "neque",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ab",
                    Value: "dolore",
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