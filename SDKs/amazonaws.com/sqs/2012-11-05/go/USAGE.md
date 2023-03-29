<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GETAddPermissionRequest{
        PathParams: operations.GETAddPermissionPathParams{
            AccountNumber: 548814,
            QueueName: "deserunt",
        },
        QueryParams: operations.GETAddPermissionQueryParams{
            AWSAccountIds: []string{
                "nulla",
                "id",
                "vero",
            },
            Action: "AddPermission",
            Actions: []string{
                "nihil",
                "fuga",
                "facilis",
                "eum",
            },
            Label: "iusto",
            Version: "2012-11-05",
        },
        Headers: operations.GETAddPermissionHeaders{
            XAmzAlgorithm: "saepe",
            XAmzContentSha256: "inventore",
            XAmzCredential: "sapiente",
            XAmzDate: "enim",
            XAmzSecurityToken: "eum",
            XAmzSignature: "voluptatum",
            XAmzSignedHeaders: "autem",
        },
    }

    ctx := context.Background()
    res, err := s.GETAddPermission(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->