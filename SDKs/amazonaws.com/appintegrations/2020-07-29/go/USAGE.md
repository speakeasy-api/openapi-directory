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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateDataIntegrationRequestBody{
            ClientToken: "nulla",
            Description: "nihil",
            FileConfiguration: &operations.CreateDataIntegrationRequestBodyFileConfiguration{
                Filters: map[string][]string{
                    "facilis": []string{
                        "iusto",
                        "ullam",
                    },
                    "saepe": []string{
                        "sapiente",
                    },
                    "enim": []string{
                        "voluptatum",
                        "autem",
                    },
                },
                Folders: []string{
                    "non",
                    "deleniti",
                    "similique",
                    "reprehenderit",
                },
            },
            KmsKey: "molestiae",
            Name: "quo",
            ObjectConfiguration: map[string]map[string][]string{
                "laboriosam": map[string][]string{
                    "est": []string{
                        "consequatur",
                    },
                },
            },
            ScheduleConfig: operations.CreateDataIntegrationRequestBodyScheduleConfig{
                FirstExecutionFrom: "fugiat",
                Object: "a",
                ScheduleExpression: "omnis",
            },
            SourceURI: "eos",
            Tags: map[string]string{
                "accusamus": "reiciendis",
                "rem": "quibusdam",
                "et": "praesentium",
                "occaecati": "dolor",
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