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
            XAmzAlgorithm: "voluptatem",
            XAmzContentSha256: "quia",
            XAmzCredential: "voluptas",
            XAmzDate: "maxime",
            XAmzSecurityToken: "error",
            XAmzSignature: "exercitationem",
            XAmzSignedHeaders: "quisquam",
            XAmzTarget: "AmazonForecast.CreateDataset",
        },
        Request: shared.CreateDatasetRequest{
            DataFrequency: "quaerat",
            DatasetName: "earum",
            DatasetType: "TARGET_TIME_SERIES",
            Domain: "CUSTOM",
            EncryptionConfig: &shared.EncryptionConfig{
                KMSKeyArn: "ut",
                RoleArn: "ut",
            },
            Schema: shared.Schema{
                Attributes: []shared.SchemaAttribute{
                    shared.SchemaAttribute{
                        AttributeName: "magni",
                        AttributeType: "timestamp",
                    },
                    shared.SchemaAttribute{
                        AttributeName: "quaerat",
                        AttributeType: "timestamp",
                    },
                    shared.SchemaAttribute{
                        AttributeName: "voluptas",
                        AttributeType: "float",
                    },
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "sed",
                    Value: "accusantium",
                },
                shared.Tag{
                    Key: "repellat",
                    Value: "quam",
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