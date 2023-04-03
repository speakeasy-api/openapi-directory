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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.BatchGetRecordRequest{
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
        XAmzAlgorithm: "ab",
        XAmzContentSha256: "quis",
        XAmzCredential: "veritatis",
        XAmzDate: "deserunt",
        XAmzSecurityToken: "perferendis",
        XAmzSignature: "ipsam",
        XAmzSignedHeaders: "repellendus",
    }

    ctx := context.Background()
    res, err := s.BatchGetRecord(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetRecordResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->