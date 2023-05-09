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
        AddTagsRequest: shared.AddTagsRequest{
            ResourceID: "corrupti",
            TagsList: []shared.Tag{
                shared.Tag{
                    Key: "distinctio",
                    Value: sdk.String("quibusdam"),
                },
                shared.Tag{
                    Key: "unde",
                    Value: sdk.String("nulla"),
                },
                shared.Tag{
                    Key: "corrupti",
                    Value: sdk.String("illum"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("debitis"),
        XAmzTarget: operations.AddTagsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101AddTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddTagsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->