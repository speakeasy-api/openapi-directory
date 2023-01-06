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
            SourceIdentifier: "illum",
            SubscriptionName: "similique",
            Version: "2013-02-12",
        },
        Headers: operations.GetAddSourceIdentifierToSubscriptionHeaders{
            XAmzAlgorithm: "sint",
            XAmzContentSha256: "rerum",
            XAmzCredential: "quibusdam",
            XAmzDate: "voluptas",
            XAmzSecurityToken: "molestiae",
            XAmzSignature: "ut",
            XAmzSignedHeaders: "qui",
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