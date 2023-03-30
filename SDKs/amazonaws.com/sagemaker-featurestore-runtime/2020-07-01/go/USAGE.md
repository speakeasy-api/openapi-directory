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

    req := operations.BatchGetRecordRequest{
        Headers: operations.BatchGetRecordHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.BatchGetRecordRequestBody{
            Identifiers: []shared.BatchGetRecordIdentifier{
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "vel",
                    FeatureNames: []string{
                        "deserunt",
                        "suscipit",
                        "iure",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "debitis",
                        "ipsa",
                    },
                },
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "delectus",
                    FeatureNames: []string{
                        "suscipit",
                        "molestiae",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "placeat",
                        "voluptatum",
                        "iusto",
                        "excepturi",
                    },
                },
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "nisi",
                    FeatureNames: []string{
                        "temporibus",
                        "ab",
                        "quis",
                        "veritatis",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "perferendis",
                        "ipsam",
                        "repellendus",
                    },
                },
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "sapiente",
                    FeatureNames: []string{
                        "odit",
                        "at",
                        "at",
                        "maiores",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "quod",
                        "quod",
                    },
                },
            },
        },
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