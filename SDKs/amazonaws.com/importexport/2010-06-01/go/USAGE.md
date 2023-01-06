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
    
    req := operations.GetCancelJobRequest{
        QueryParams: operations.GetCancelJobQueryParams{
            APIVersion: "vero",
            AWSAccessKeyID: "blanditiis",
            Action: "CancelJob",
            JobID: "odio",
            Operation: "CancelJob",
            Signature: "eligendi",
            SignatureMethod: "animi",
            SignatureVersion: "est",
            Timestamp: "voluptas",
            Version: "2010-06-01",
        },
    }
    
    res, err := s.GetCancelJob(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->