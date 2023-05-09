<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateNotificationRule(ctx, operations.CreateNotificationRuleRequest{
        RequestBody: operations.CreateNotificationRuleRequestBody{
            ClientRequestToken: sdk.String("corrupti"),
            DetailType: operations.CreateNotificationRuleRequestBodyDetailTypeEnumFull,
            EventTypeIds: []string{
                "quibusdam",
                "unde",
                "nulla",
            },
            Name: "corrupti",
            Resource: "illum",
            Status: operations.CreateNotificationRuleRequestBodyStatusEnumEnabled.ToPointer(),
            Tags: map[string]string{
                "deserunt": "suscipit",
                "iure": "magnam",
                "debitis": "ipsa",
            },
            Targets: []shared.Target{
                shared.Target{
                    TargetAddress: sdk.String("tempora"),
                    TargetType: sdk.String("suscipit"),
                },
                shared.Target{
                    TargetAddress: sdk.String("molestiae"),
                    TargetType: sdk.String("minus"),
                },
                shared.Target{
                    TargetAddress: sdk.String("placeat"),
                    TargetType: sdk.String("voluptatum"),
                },
                shared.Target{
                    TargetAddress: sdk.String("iusto"),
                    TargetType: sdk.String("excepturi"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNotificationRuleResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->