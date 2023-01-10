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
    
    req := operations.AcknowledgeJobRequest{
        Headers: operations.AcknowledgeJobHeaders{
            XAmzAlgorithm: "qui",
            XAmzContentSha256: "numquam",
            XAmzCredential: "et",
            XAmzDate: "ut",
            XAmzSecurityToken: "soluta",
            XAmzSignature: "minima",
            XAmzSignedHeaders: "fugit",
            XAmzTarget: "CodePipeline_20150709.AcknowledgeJob",
        },
        Request: shared.AcknowledgeJobInput{
            JobID: "et",
            Nonce: "autem",
        },
    }
    
    res, err := s.AcknowledgeJob(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcknowledgeJobOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->