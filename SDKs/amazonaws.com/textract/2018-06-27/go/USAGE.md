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
            XAmzAlgorithm: "repellendus",
            XAmzContentSha256: "corrupti",
            XAmzCredential: "ex",
            XAmzDate: "voluptatum",
            XAmzSecurityToken: "voluptas",
            XAmzSignature: "et",
            XAmzSignedHeaders: "doloribus",
            XAmzTarget: "Textract.AnalyzeDocument",
        },
        Request: shared.AnalyzeDocumentRequest{
            Document: shared.Document{
                Bytes: "sunt",
                S3Object: &shared.S3Object{
                    Bucket: "et",
                    Name: "ea",
                    Version: "deserunt",
                },
            },
            FeatureTypes: []shared.FeatureTypeEnum{
                "TABLES",
                "FORMS",
            },
            HumanLoopConfig: &shared.HumanLoopConfig{
                DataAttributes: &shared.HumanLoopDataAttributes{
                    ContentClassifiers: []shared.ContentClassifierEnum{
                        "FreeOfAdultContent",
                    },
                },
                FlowDefinitionArn: "magnam",
                HumanLoopName: "dicta",
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