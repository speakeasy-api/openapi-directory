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
    
    req := operations.CreateDatasetRequest{
        Headers: operations.CreateDatasetHeaders{
            XAmzAlgorithm: "similique",
            XAmzContentSha256: "porro",
            XAmzCredential: "praesentium",
            XAmzDate: "ipsa",
            XAmzSecurityToken: "ipsa",
            XAmzSignature: "rerum",
            XAmzSignedHeaders: "iure",
            XAmzTarget: "AmazonForecast.CreateDataset",
        },
        Request: shared.CreateDatasetRequest{
            DataFrequency: "dolore",
            DatasetName: "doloribus",
            DatasetType: "RELATED_TIME_SERIES",
            Domain: "METRICS",
            EncryptionConfig: &shared.EncryptionConfig{
                KMSKeyArn: "ut",
                RoleArn: "sint",
            },
            Schema: shared.Schema{
                Attributes: []shared.SchemaAttribute{
                    shared.SchemaAttribute{
                        AttributeName: "officia",
                        AttributeType: "integer",
                    },
                    shared.SchemaAttribute{
                        AttributeName: "sit",
                        AttributeType: "float",
                    },
                    shared.SchemaAttribute{
                        AttributeName: "earum",
                        AttributeType: "integer",
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "et",
                    Value: "alias",
                },
                shared.Tag{
                    Key: "in",
                    Value: "repellendus",
                },
                shared.Tag{
                    Key: "repudiandae",
                    Value: "sed",
                },
            },
        },
    }
    
    res, err := s.CreateDataset(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDatasetResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->