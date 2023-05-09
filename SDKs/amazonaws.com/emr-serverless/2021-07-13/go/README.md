# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/emr-serverless/2021-07-13/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CancelJobRun(ctx, operations.CancelJobRunRequest{
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("unde"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("corrupti"),
        ApplicationID: "illum",
        JobRunID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelJobRunResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CancelJobRun](docs/sdk/README.md#canceljobrun) - Cancels a job run.
* [CreateApplication](docs/sdk/README.md#createapplication) - Creates an application.
* [DeleteApplication](docs/sdk/README.md#deleteapplication) - Deletes an application. An application has to be in a stopped or created state in order to be deleted.
* [GetApplication](docs/sdk/README.md#getapplication) - Displays detailed information about a specified application.
* [GetDashboardForJobRun](docs/sdk/README.md#getdashboardforjobrun) - Returns a URL to access the job run dashboard. The generated URL is valid for one hour, after which you must invoke the API again to generate a new URL.
* [GetJobRun](docs/sdk/README.md#getjobrun) - Displays detailed information about a job run.
* [ListApplications](docs/sdk/README.md#listapplications) - Lists applications based on a set of parameters.
* [ListJobRuns](docs/sdk/README.md#listjobruns) - Lists job runs based on a set of parameters.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags assigned to the resources.
* [StartApplication](docs/sdk/README.md#startapplication) - Starts a specified application and initializes initial capacity if configured.
* [StartJobRun](docs/sdk/README.md#startjobrun) - Starts a job run.
* [StopApplication](docs/sdk/README.md#stopapplication) - Stops a specified application and releases initial capacity if configured. All scheduled and running jobs must be completed or cancelled before stopping an application.
* [TagResource](docs/sdk/README.md#tagresource) - Assigns tags to resources. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your Amazon Web Services resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. 
* [UntagResource](docs/sdk/README.md#untagresource) - Removes tags from resources.
* [UpdateApplication](docs/sdk/README.md#updateapplication) - Updates a specified application. An application has to be in a stopped or created state in order to be updated.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
