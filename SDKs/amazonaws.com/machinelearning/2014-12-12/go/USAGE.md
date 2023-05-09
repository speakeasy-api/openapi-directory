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
    res, err := s.AddTags(ctx, operations.AddTagsRequest{
        AddTagsInput: shared.AddTagsInput{
            ResourceID: "corrupti",
            ResourceType: shared.TaggableResourceTypeEnumEvaluation,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("quibusdam"),
                    Value: sdk.String("unde"),
                },
                shared.Tag{
                    Key: sdk.String("nulla"),
                    Value: sdk.String("corrupti"),
                },
                shared.Tag{
                    Key: sdk.String("illum"),
                    Value: sdk.String("vel"),
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
        XAmzTarget: operations.AddTagsXAmzTargetEnumAmazonMl20141212AddTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddTagsOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->