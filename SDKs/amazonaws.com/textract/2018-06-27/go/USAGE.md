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

    req := operations.AnalyzeDocumentRequest{
        AnalyzeDocumentRequest: shared.AnalyzeDocumentRequest{
            Document: shared.Document{
                Bytes: "corrupti",
                S3Object: &shared.S3Object{
                    Bucket: "provident",
                    Name: "distinctio",
                    Version: "quibusdam",
                },
            },
            FeatureTypes: []shared.FeatureTypeEnum{
                "SIGNATURES",
                "QUERIES",
                "SIGNATURES",
            },
            HumanLoopConfig: &shared.HumanLoopConfig{
                DataAttributes: &shared.HumanLoopDataAttributes{
                    ContentClassifiers: []shared.ContentClassifierEnum{
                        "FreeOfAdultContent",
                        "FreeOfAdultContent",
                    },
                },
                FlowDefinitionArn: "suscipit",
                HumanLoopName: "iure",
            },
            QueriesConfig: &shared.QueriesConfig{
                Queries: []shared.Query{
                    shared.Query{
                        Alias: "debitis",
                        Pages: []string{
                            "delectus",
                        },
                        Text: "tempora",
                    },
                    shared.Query{
                        Alias: "suscipit",
                        Pages: []string{
                            "minus",
                            "placeat",
                        },
                        Text: "voluptatum",
                    },
                },
            },
        },
        XAmzAlgorithm: "iusto",
        XAmzContentSha256: "excepturi",
        XAmzCredential: "nisi",
        XAmzDate: "recusandae",
        XAmzSecurityToken: "temporibus",
        XAmzSignature: "ab",
        XAmzSignedHeaders: "quis",
        XAmzTarget: "Textract.AnalyzeDocument",
    }

    ctx := context.Background()
    res, err := s.AnalyzeDocument(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyzeDocumentResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->