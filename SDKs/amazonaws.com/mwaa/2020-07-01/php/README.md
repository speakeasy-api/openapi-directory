# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createCliToken` - Creates a CLI token for the Airflow CLI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-cli.html">Creating an Apache Airflow CLI token</a>.
* `createEnvironment` - Creates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
* `createWebLoginToken` - Creates a web login token for the Airflow Web UI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-web.html">Creating an Apache Airflow web login token</a>.
* `deleteEnvironment` - Deletes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
* `getEnvironment` - Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
* `listEnvironments` - Lists the Amazon Managed Workflows for Apache Airflow (MWAA) environments.
* `listTagsForResource` - Lists the key-value tag pairs associated to the Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>. 
* `publishMetrics` -  <b>Internal only</b>. Publishes environment health metrics to Amazon CloudWatch.
* `tagResource` - Associates key-value tag pairs to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. 
* `untagResource` - Removes key-value tag pairs associated to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>.
* `updateEnvironment` - Updates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
