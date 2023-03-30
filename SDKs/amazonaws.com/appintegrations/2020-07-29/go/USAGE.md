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

    req := operations.CreateDataIntegrationRequest{
        Headers: operations.CreateDataIntegrationHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateDataIntegrationRequestBody{
            ClientToken: "illum",
            Description: "vel",
            FileConfiguration: &operations.CreateDataIntegrationRequestBodyFileConfiguration{
                Filters: map[string][]string{
                    "deserunt": []string{
                        "iure",
                        "magnam",
                    },
                    "debitis": []string{
                        "delectus",
                    },
                    "tempora": []string{
                        "molestiae",
                        "minus",
                    },
                },
                Folders: []string{
                    "voluptatum",
                    "iusto",
                    "excepturi",
                    "nisi",
                },
            },
            KmsKey: "recusandae",
            Name: "temporibus",
            ObjectConfiguration: map[string]map[string][]string{
                "quis": map[string][]string{
                    "deserunt": []string{
                        "ipsam",
                    },
                },
            },
            ScheduleConfig: operations.CreateDataIntegrationRequestBodyScheduleConfig{
                FirstExecutionFrom: "repellendus",
                Object: "sapiente",
                ScheduleExpression: "quo",
            },
            SourceURI: "odit",
            Tags: map[string]string{
                "at": "maiores",
                "molestiae": "quod",
                "quod": "esse",
                "totam": "porro",
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateDataIntegration(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDataIntegrationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->