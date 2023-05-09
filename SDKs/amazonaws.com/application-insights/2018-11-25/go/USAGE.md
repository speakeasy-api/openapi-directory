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
    res, err := s.CreateApplication(ctx, operations.CreateApplicationRequest{
        CreateApplicationRequest: shared.CreateApplicationRequest{
            AutoConfigEnabled: sdk.Bool(false),
            AutoCreate: sdk.Bool(false),
            CWEMonitorEnabled: sdk.Bool(false),
            GroupingType: shared.GroupingTypeEnumAccountBased.ToPointer(),
            OpsCenterEnabled: sdk.Bool(false),
            OpsItemSNSTopicArn: sdk.String("corrupti"),
            ResourceGroupName: sdk.String("provident"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quibusdam",
                    Value: "unde",
                },
                shared.Tag{
                    Key: "nulla",
                    Value: "corrupti",
                },
                shared.Tag{
                    Key: "illum",
                    Value: "vel",
                },
            },
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.CreateApplicationXAmzTargetEnumEc2WindowsBarleyServiceCreateApplication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplicationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->