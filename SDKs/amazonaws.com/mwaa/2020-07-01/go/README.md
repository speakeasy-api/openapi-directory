# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/mwaa/2020-07-01/go
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
    res, err := s.CreateCliToken(ctx, operations.CreateCliTokenRequest{
        Name: "Terrence Rau",
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCliTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateCliToken](docs/sdk/README.md#createclitoken) - Creates a CLI token for the Airflow CLI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-cli.html">Creating an Apache Airflow CLI token</a>.
* [CreateEnvironment](docs/sdk/README.md#createenvironment) - Creates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
* [CreateWebLoginToken](docs/sdk/README.md#createweblogintoken) - Creates a web login token for the Airflow Web UI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-web.html">Creating an Apache Airflow web login token</a>.
* [DeleteEnvironment](docs/sdk/README.md#deleteenvironment) - Deletes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
* [GetEnvironment](docs/sdk/README.md#getenvironment) - Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
* [ListEnvironments](docs/sdk/README.md#listenvironments) - Lists the Amazon Managed Workflows for Apache Airflow (MWAA) environments.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the key-value tag pairs associated to the Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>. 
* [PublishMetrics](docs/sdk/README.md#publishmetrics) -  <b>Internal only</b>. Publishes environment health metrics to Amazon CloudWatch.
* [TagResource](docs/sdk/README.md#tagresource) - Associates key-value tag pairs to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. 
* [UntagResource](docs/sdk/README.md#untagresource) - Removes key-value tag pairs associated to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>.
* [UpdateEnvironment](docs/sdk/README.md#updateenvironment) - Updates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
