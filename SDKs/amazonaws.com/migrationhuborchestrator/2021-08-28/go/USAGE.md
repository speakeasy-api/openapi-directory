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

    req := operations.CreateWorkflowRequest{
        Headers: operations.CreateWorkflowHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateWorkflowRequestBody{
            ApplicationConfigurationID: "illum",
            Description: "vel",
            InputParameters: map[string]shared.StepInput{
                "deserunt": shared.StepInput{
                    IntegerValue: 384382,
                    ListOfStringsValue: []string{
                        "magnam",
                        "debitis",
                    },
                    MapOfStringValue: map[string]string{
                        "delectus": "tempora",
                    },
                    StringValue: "suscipit",
                },
                "molestiae": shared.StepInput{
                    IntegerValue: 791725,
                    ListOfStringsValue: []string{
                        "voluptatum",
                        "iusto",
                        "excepturi",
                        "nisi",
                    },
                    MapOfStringValue: map[string]string{
                        "temporibus": "ab",
                        "quis": "veritatis",
                        "deserunt": "perferendis",
                        "ipsam": "repellendus",
                    },
                    StringValue: "sapiente",
                },
                "quo": shared.StepInput{
                    IntegerValue: 140350,
                    ListOfStringsValue: []string{
                        "at",
                        "maiores",
                        "molestiae",
                        "quod",
                    },
                    MapOfStringValue: map[string]string{
                        "esse": "totam",
                        "porro": "dolorum",
                        "dicta": "nam",
                        "officia": "occaecati",
                    },
                    StringValue: "fugit",
                },
            },
            Name: "deleniti",
            StepTargets: []string{
                "optio",
                "totam",
                "beatae",
                "commodi",
            },
            Tags: map[string]string{
                "modi": "qui",
                "impedit": "cum",
            },
            TemplateID: "esse",
        },
    }

    ctx := context.Background()
    res, err := s.CreateWorkflow(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMigrationWorkflowResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->