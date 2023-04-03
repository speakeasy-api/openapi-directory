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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateDataIntegrationRequest{
        RequestBody: operations.CreateDataIntegrationRequestBody{
            ClientToken: "corrupti",
            Description: "provident",
            FileConfiguration: &operations.CreateDataIntegrationRequestBodyFileConfiguration{
                Filters: map[string][]string{
                    "quibusdam": []string{
                        "nulla",
                        "corrupti",
                        "illum",
                    },
                    "vel": []string{
                        "deserunt",
                        "suscipit",
                        "iure",
                    },
                    "magnam": []string{
                        "ipsa",
                        "delectus",
                        "tempora",
                        "suscipit",
                    },
                },
                Folders: []string{
                    "minus",
                    "placeat",
                },
            },
            KmsKey: "voluptatum",
            Name: "iusto",
            ObjectConfiguration: map[string]map[string][]string{
                "nisi": map[string][]string{
                    "temporibus": []string{
                        "quis",
                    },
                    "veritatis": []string{
                        "perferendis",
                        "ipsam",
                        "repellendus",
                    },
                    "sapiente": []string{
                        "odit",
                        "at",
                        "at",
                        "maiores",
                    },
                    "molestiae": []string{
                        "quod",
                        "esse",
                        "totam",
                        "porro",
                    },
                },
                "dolorum": map[string][]string{
                    "nam": []string{
                        "occaecati",
                        "fugit",
                        "deleniti",
                    },
                },
                "hic": map[string][]string{
                    "totam": []string{
                        "commodi",
                    },
                    "molestiae": []string{
                        "qui",
                        "impedit",
                    },
                    "cum": []string{
                        "ipsum",
                        "excepturi",
                    },
                    "aspernatur": []string{
                        "ad",
                    },
                },
            },
            ScheduleConfig: operations.CreateDataIntegrationRequestBodyScheduleConfig{
                FirstExecutionFrom: "natus",
                Object: "sed",
                ScheduleExpression: "iste",
            },
            SourceURI: "dolor",
            Tags: map[string]string{
                "laboriosam": "hic",
                "saepe": "fuga",
                "in": "corporis",
            },
        },
        XAmzAlgorithm: "iste",
        XAmzContentSha256: "iure",
        XAmzCredential: "saepe",
        XAmzDate: "quidem",
        XAmzSecurityToken: "architecto",
        XAmzSignature: "ipsa",
        XAmzSignedHeaders: "reiciendis",
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