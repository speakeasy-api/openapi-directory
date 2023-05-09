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
    res, err := s.AddTagsToResource(ctx, operations.AddTagsToResourceRequest{
        AddTagsToResourceMessage: shared.AddTagsToResourceMessage{
            ResourceArn: "corrupti",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("distinctio"),
                    ResourceArn: sdk.String("quibusdam"),
                    Value: sdk.String("unde"),
                },
                shared.Tag{
                    Key: sdk.String("nulla"),
                    ResourceArn: sdk.String("corrupti"),
                    Value: sdk.String("illum"),
                },
                shared.Tag{
                    Key: sdk.String("vel"),
                    ResourceArn: sdk.String("error"),
                    Value: sdk.String("deserunt"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.AddTagsToResourceXAmzTargetEnumAmazonDmSv20160101AddTagsToResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddTagsToResourceResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->