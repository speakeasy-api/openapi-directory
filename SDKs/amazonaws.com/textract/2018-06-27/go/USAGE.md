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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "Textract.AnalyzeDocument",
        },
        Request: shared.AnalyzeDocumentRequest{
            Document: shared.Document{
                Bytes: "illum",
                S3Object: &shared.S3Object{
                    Bucket: "vel",
                    Name: "error",
                    Version: "deserunt",
                },
            },
            FeatureTypes: []shared.FeatureTypeEnum{
                "FORMS",
                "FORMS",
            },
            HumanLoopConfig: &shared.HumanLoopConfig{
                DataAttributes: &shared.HumanLoopDataAttributes{
                    ContentClassifiers: []shared.ContentClassifierEnum{
                        "FreeOfPersonallyIdentifiableInformation",
                        "FreeOfAdultContent",
                        "FreeOfPersonallyIdentifiableInformation",
                        "FreeOfPersonallyIdentifiableInformation",
                    },
                },
                FlowDefinitionArn: "molestiae",
                HumanLoopName: "minus",
            },
            QueriesConfig: &shared.QueriesConfig{
                Queries: []shared.Query{
                    shared.Query{
                        Alias: "voluptatum",
                        Pages: []string{
                            "excepturi",
                            "nisi",
                        },
                        Text: "recusandae",
                    },
                    shared.Query{
                        Alias: "temporibus",
                        Pages: []string{
                            "quis",
                        },
                        Text: "veritatis",
                    },
                    shared.Query{
                        Alias: "deserunt",
                        Pages: []string{
                            "ipsam",
                        },
                        Text: "repellendus",
                    },
                    shared.Query{
                        Alias: "sapiente",
                        Pages: []string{
                            "odit",
                            "at",
                            "at",
                            "maiores",
                        },
                        Text: "molestiae",
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