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

    req := operations.AnalyzeDocumentRequest{
        Headers: operations.AnalyzeDocumentHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "Textract.AnalyzeDocument",
        },
        Request: shared.AnalyzeDocumentRequest{
            Document: shared.Document{
                Bytes: "nihil",
                S3Object: &shared.S3Object{
                    Bucket: "fuga",
                    Name: "facilis",
                    Version: "eum",
                },
            },
            FeatureTypes: []shared.FeatureTypeEnum{
                "FORMS",
                "SIGNATURES",
            },
            HumanLoopConfig: &shared.HumanLoopConfig{
                DataAttributes: &shared.HumanLoopDataAttributes{
                    ContentClassifiers: []shared.ContentClassifierEnum{
                        "FreeOfAdultContent",
                    },
                },
                FlowDefinitionArn: "enim",
                HumanLoopName: "eum",
            },
            QueriesConfig: &shared.QueriesConfig{
                Queries: []shared.Query{
                    shared.Query{
                        Alias: "autem",
                        Pages: []string{
                            "non",
                            "deleniti",
                            "similique",
                            "reprehenderit",
                        },
                        Text: "molestiae",
                    },
                    shared.Query{
                        Alias: "quo",
                        Pages: []string{
                            "laboriosam",
                        },
                        Text: "dicta",
                    },
                },
            },
        },
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