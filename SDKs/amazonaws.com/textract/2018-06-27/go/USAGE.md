<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AnalyzeDocumentRequest{
        Headers: operations.AnalyzeDocumentHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "Textract.AnalyzeDocument",
        },
        Request: shared.AnalyzeDocumentRequest{
            Document: shared.Document{
                Bytes: "fugit",
                S3Object: &shared.S3Object{
                    Bucket: "et",
                    Name: "nihil",
                    Version: "rerum",
                },
            },
            FeatureTypes: []shared.FeatureTypeEnum{
                "TABLES",
                "TABLES",
                "TABLES",
            },
            HumanLoopConfig: &shared.HumanLoopConfig{
                DataAttributes: &shared.HumanLoopDataAttributes{
                    ContentClassifiers: []shared.ContentClassifierEnum{
                        "FreeOfPersonallyIdentifiableInformation",
                        "FreeOfPersonallyIdentifiableInformation",
                        "FreeOfPersonallyIdentifiableInformation",
                    },
                },
                FlowDefinitionArn: "iste",
                HumanLoopName: "vitae",
            },
        },
    }
    
    res, err := s.AnalyzeDocument(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyzeDocumentResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->