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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AmazonForecast.CreateDataset",
        },
        Request: shared.CreateDatasetRequest{
            DataFrequency: "fugit",
            DatasetName: "et",
            DatasetType: "TARGET_TIME_SERIES",
            Domain: "METRICS",
            EncryptionConfig: &shared.EncryptionConfig{
                KMSKeyArn: "dicta",
                RoleArn: "debitis",
            },
            Schema: shared.Schema{
                Attributes: []shared.SchemaAttribute{
                    shared.SchemaAttribute{
                        AttributeName: "et",
                        AttributeType: "integer",
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "et",
                    Value: "voluptate",
                },
                shared.Tag{
                    Key: "iste",
                    Value: "vitae",
                },
                shared.Tag{
                    Key: "totam",
                    Value: "dolores",
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