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

* `createConnector` - Creates a connector using the specified properties.
* `createCustomPlugin` - Creates a custom plugin using the specified properties.
* `createWorkerConfiguration` - Creates a worker configuration using the specified properties.
* `deleteConnector` - Deletes the specified connector.
* `deleteCustomPlugin` - Deletes a custom plugin.
* `describeConnector` - Returns summary information about the connector.
* `describeCustomPlugin` - A summary description of the custom plugin.
* `describeWorkerConfiguration` - Returns information about a worker configuration.
* `listConnectors` - Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.
* `listCustomPlugins` - Returns a list of all of the custom plugins in this account and Region.
* `listWorkerConfigurations` - Returns a list of all of the worker configurations in this account and Region.
* `updateConnector` - Updates the specified connector.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
