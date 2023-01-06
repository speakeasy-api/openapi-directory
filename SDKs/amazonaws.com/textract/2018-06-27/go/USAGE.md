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
            XAmzAlgorithm: "et",
            XAmzContentSha256: "alias",
            XAmzCredential: "aliquam",
            XAmzDate: "vel",
            XAmzSecurityToken: "cumque",
            XAmzSignature: "ea",
            XAmzSignedHeaders: "earum",
            XAmzTarget: "Textract.AnalyzeDocument",
        },
        Request: shared.AnalyzeDocumentRequest{
            Document: shared.Document{
                Bytes: "explicabo",
                S3Object: &shared.S3Object{
                    Bucket: "id",
                    Name: "aperiam",
                    Version: "esse",
                },
            },
            FeatureTypes: []shared.FeatureTypeEnum{
                "TABLES",
                "TABLES",
                "FORMS",
            },
            HumanLoopConfig: &shared.HumanLoopConfig{
                DataAttributes: &shared.HumanLoopDataAttributes{
                    ContentClassifiers: []shared.ContentClassifierEnum{
                        "FreeOfAdultContent",
                        "FreeOfPersonallyIdentifiableInformation",
                    },
                },
                FlowDefinitionArn: "maxime",
                HumanLoopName: "expedita",
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