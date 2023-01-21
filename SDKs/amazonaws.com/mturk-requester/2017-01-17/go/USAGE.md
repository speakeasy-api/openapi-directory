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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "MTurkRequesterServiceV20170117.AcceptQualificationRequest",
        },
        Request: shared.AcceptQualificationRequestRequest{
            IntegerValue: 8274930044578894929,
            QualificationRequestID: "et",
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