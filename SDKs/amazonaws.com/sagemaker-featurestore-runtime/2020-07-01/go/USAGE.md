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
    res, err := s.BatchGetRecord(ctx, operations.BatchGetRecordRequest{
        RequestBody: operations.BatchGetRecordRequestBody{
            Identifiers: []shared.BatchGetRecordIdentifier{
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "provident",
                    FeatureNames: []string{
                        "quibusdam",
                        "unde",
                        "nulla",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "illum",
                        "vel",
                        "error",
                    },
                },
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "deserunt",
                    FeatureNames: []string{
                        "iure",
                        "magnam",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "ipsa",
                        "delectus",
                        "tempora",
                        "suscipit",
                    },
                },
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "molestiae",
                    FeatureNames: []string{
                        "placeat",
                        "voluptatum",
                        "iusto",
                        "excepturi",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "recusandae",
                        "temporibus",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("repellendus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetRecordResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->