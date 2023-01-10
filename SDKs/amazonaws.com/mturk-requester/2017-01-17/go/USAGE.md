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
    
    req := operations.AcceptQualificationRequestRequest{
        Headers: operations.AcceptQualificationRequestHeaders{
            XAmzAlgorithm: "et",
            XAmzContentSha256: "sit",
            XAmzCredential: "minus",
            XAmzDate: "iste",
            XAmzSecurityToken: "tempora",
            XAmzSignature: "officia",
            XAmzSignedHeaders: "ducimus",
            XAmzTarget: "MTurkRequesterServiceV20170117.AcceptQualificationRequest",
        },
        Request: shared.AcceptQualificationRequestRequest{
            IntegerValue: 8893427221521046744,
            QualificationRequestID: "perferendis",
        },
    }
    
    res, err := s.AcceptQualificationRequest(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptQualificationRequestResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->