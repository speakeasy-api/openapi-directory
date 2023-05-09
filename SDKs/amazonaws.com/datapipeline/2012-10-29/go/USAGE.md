<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ActivatePipeline(ctx, operations.ActivatePipelineRequest{
        ActivatePipelineInput: shared.ActivatePipelineInput{
            ParameterValues: []shared.ParameterValue{
                shared.ParameterValue{
                    ID: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
                    StringValue: "perferendis",
                },
                shared.ParameterValue{
                    ID: "5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb",
                    StringValue: "esse",
                },
                shared.ParameterValue{
                    ID: "39205929-396f-4ea7-996e-b10faaa2352c",
                    StringValue: "enim",
                },
            },
            PipelineID: "omnis",
            StartTimestamp: types.MustTimeFromString("2022-09-04T08:35:09.957Z"),
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.ActivatePipelineXAmzTargetEnumDataPipelineActivatePipeline,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActivatePipelineOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->