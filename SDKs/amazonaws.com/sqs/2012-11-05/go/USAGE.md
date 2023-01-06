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
            AccountNumber: 6453386329510832785,
            QueueName: "dolores",
        },
        QueryParams: operations.GetChangeMessageVisibilityQueryParams{
            Action: "ChangeMessageVisibility",
            ReceiptHandle: "voluptatibus",
            Version: "2012-11-05",
            VisibilityTimeout: 957516156830760386,
        },
        Headers: operations.GetChangeMessageVisibilityHeaders{
            XAmzAlgorithm: "repudiandae",
            XAmzContentSha256: "quo",
            XAmzCredential: "omnis",
            XAmzDate: "adipisci",
            XAmzSecurityToken: "praesentium",
            XAmzSignature: "qui",
            XAmzSignedHeaders: "ipsam",
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