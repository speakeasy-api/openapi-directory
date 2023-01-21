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
    
    req := operations.GetChangeMessageVisibilityRequest{
        PathParams: operations.GetChangeMessageVisibilityPathParams{
            AccountNumber: 8717895732742165505,
            QueueName: "voluptas",
        },
        QueryParams: operations.GetChangeMessageVisibilityQueryParams{
            Action: "ChangeMessageVisibility",
            ReceiptHandle: "expedita",
            Version: "2012-11-05",
            VisibilityTimeout: 2669985732393126063,
        },
        Headers: operations.GetChangeMessageVisibilityHeaders{
            XAmzAlgorithm: "expedita",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "fugit",
            XAmzDate: "et",
            XAmzSecurityToken: "nihil",
            XAmzSignature: "rerum",
            XAmzSignedHeaders: "dicta",
        },
    }
    
    res, err := s.GetChangeMessageVisibility(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->