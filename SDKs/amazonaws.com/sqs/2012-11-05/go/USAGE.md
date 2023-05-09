<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.GETAddPermission(ctx, operations.GETAddPermissionRequest{
        AWSAccountIds: []string{
            "provident",
            "distinctio",
            "quibusdam",
        },
        AccountNumber: 602763,
        Action: operations.GETAddPermissionActionEnumAddPermission,
        Actions: []string{
            "corrupti",
            "illum",
            "vel",
            "error",
        },
        Label: "deserunt",
        QueueName: "suscipit",
        Version: operations.GETAddPermissionVersionEnumTwoThousandAndTwelve1105,
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->