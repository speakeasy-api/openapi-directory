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
            AccountNumber: 4772934432398856168,
            QueueName: "velit",
        },
        QueryParams: operations.GetChangeMessageVisibilityQueryParams{
            Action: "ChangeMessageVisibility",
            ReceiptHandle: "nulla",
            Version: "2012-11-05",
            VisibilityTimeout: 1092410701567644413,
        },
        Headers: operations.GetChangeMessageVisibilityHeaders{
            XAmzAlgorithm: "qui",
            XAmzContentSha256: "odit",
            XAmzCredential: "tempora",
            XAmzDate: "voluptatem",
            XAmzSecurityToken: "dignissimos",
            XAmzSignature: "velit",
            XAmzSignedHeaders: "magnam",
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