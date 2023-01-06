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
            XAmzAlgorithm: "necessitatibus",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "quod",
            XAmzDate: "maxime",
            XAmzSecurityToken: "minima",
            XAmzSignature: "eligendi",
            XAmzSignedHeaders: "dolorum",
            XAmzTarget: "MTurkRequesterServiceV20170117.AcceptQualificationRequest",
        },
        Request: shared.AcceptQualificationRequestRequest{
            IntegerValue: 6448156504048960045,
            QualificationRequestID: "nostrum",
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