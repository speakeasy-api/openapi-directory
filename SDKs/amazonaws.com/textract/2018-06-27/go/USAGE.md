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
    res, err := s.AnalyzeDocument(ctx, operations.AnalyzeDocumentRequest{
        AnalyzeDocumentRequest: shared.AnalyzeDocumentRequest{
            Document: shared.Document{
                Bytes: sdk.String("corrupti"),
                S3Object: &shared.S3Object{
                    Bucket: sdk.String("provident"),
                    Name: sdk.String("Ellis Mitchell"),
                    Version: sdk.String("illum"),
                },
            },
            FeatureTypes: []shared.FeatureTypeEnum{
                shared.FeatureTypeEnumQueries,
                shared.FeatureTypeEnumQueries,
            },
            HumanLoopConfig: &shared.HumanLoopConfig{
                DataAttributes: &shared.HumanLoopDataAttributes{
                    ContentClassifiers: []shared.ContentClassifierEnum{
                        shared.ContentClassifierEnumFreeOfPersonallyIdentifiableInformation,
                        shared.ContentClassifierEnumFreeOfPersonallyIdentifiableInformation,
                    },
                },
                FlowDefinitionArn: "debitis",
                HumanLoopName: "ipsa",
            },
            QueriesConfig: &shared.QueriesConfig{
                Queries: []shared.Query{
                    shared.Query{
                        Alias: sdk.String("tempora"),
                        Pages: []string{
                            "molestiae",
                            "minus",
                        },
                        Text: "placeat",
                    },
                    shared.Query{
                        Alias: sdk.String("voluptatum"),
                        Pages: []string{
                            "excepturi",
                            "nisi",
                        },
                        Text: "recusandae",
                    },
                    shared.Query{
                        Alias: sdk.String("temporibus"),
                        Pages: []string{
                            "quis",
                        },
                        Text: "veritatis",
                    },
                    shared.Query{
                        Alias: sdk.String("deserunt"),
                        Pages: []string{
                            "ipsam",
                        },
                        Text: "repellendus",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.AnalyzeDocumentXAmzTargetEnumTextractAnalyzeDocument,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyzeDocumentResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->