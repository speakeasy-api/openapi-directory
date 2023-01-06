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
    
    req := operations.GetAddSourceIdentifierToSubscriptionRequest{
        QueryParams: operations.GetAddSourceIdentifierToSubscriptionQueryParams{
            Action: "AddSourceIdentifierToSubscription",
            SourceIdentifier: "nulla",
            SubscriptionName: "non",
            Version: "2014-09-01",
        },
        Headers: operations.GetAddSourceIdentifierToSubscriptionHeaders{
            XAmzAlgorithm: "minus",
            XAmzContentSha256: "maxime",
            XAmzCredential: "eum",
            XAmzDate: "sapiente",
            XAmzSecurityToken: "nostrum",
            XAmzSignature: "quos",
            XAmzSignedHeaders: "sint",
        },
    }
    
    res, err := s.GetAddSourceIdentifierToSubscription(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->