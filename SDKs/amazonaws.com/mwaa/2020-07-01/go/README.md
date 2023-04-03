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

    req := operations.CreateCliTokenRequest{
        Name: "corrupti",
        XAmzAlgorithm: "provident",
        XAmzContentSha256: "distinctio",
        XAmzCredential: "quibusdam",
        XAmzDate: "unde",
        XAmzSecurityToken: "nulla",
        XAmzSignature: "corrupti",
        XAmzSignedHeaders: "illum",
    }

    ctx := context.Background()
    res, err := s.CreateCliToken(ctx, req)
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

### SDK SDK

* `CreateCliToken` - Creates a CLI token for the Airflow CLI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-cli.html">Creating an Apache Airflow CLI token</a>.
* `CreateEnvironment` - Creates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
* `CreateWebLoginToken` - Creates a web login token for the Airflow Web UI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-web.html">Creating an Apache Airflow web login token</a>.
* `DeleteEnvironment` - Deletes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
* `GetEnvironment` - Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
* `ListEnvironments` - Lists the Amazon Managed Workflows for Apache Airflow (MWAA) environments.
* `ListTagsForResource` - Lists the key-value tag pairs associated to the Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>. 
* `PublishMetrics` -  <b>Internal only</b>. Publishes environment health metrics to Amazon CloudWatch.
* `TagResource` - Associates key-value tag pairs to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. 
* `UntagResource` - Removes key-value tag pairs associated to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>.
* `UpdateEnvironment` - Updates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
