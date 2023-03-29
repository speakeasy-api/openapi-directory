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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.BatchGetRecordRequestBody{
            Identifiers: []shared.BatchGetRecordIdentifier{
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "nihil",
                    FeatureNames: []string{
                        "facilis",
                        "eum",
                        "iusto",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "saepe",
                        "inventore",
                    },
                },
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "sapiente",
                    FeatureNames: []string{
                        "eum",
                        "voluptatum",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "vel",
                        "non",
                        "deleniti",
                        "similique",
                    },
                },
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "reprehenderit",
                    FeatureNames: []string{
                        "quo",
                        "quasi",
                        "laboriosam",
                        "dicta",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "voluptatem",
                        "consequatur",
                        "fugiat",
                    },
                },
                shared.BatchGetRecordIdentifier{
                    FeatureGroupName: "a",
                    FeatureNames: []string{
                        "eos",
                        "accusamus",
                        "accusamus",
                        "reiciendis",
                    },
                    RecordIdentifiersValueAsString: []string{
                        "quibusdam",
                        "et",
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