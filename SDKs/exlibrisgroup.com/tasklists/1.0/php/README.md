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


### lendingRequests

* `getAlmawsV1TaskListsRsLendingRequests` - Get Lending Requests
* `postAlmawsV1TaskListsRsLendingRequests` - Act on Lending Requests

### printouts

* `getAlmawsV1TaskListsPrintouts` - Retrieve Printouts
* `getAlmawsV1TaskListsPrintoutsPrintoutId` - Retrieve a Printout
* `postAlmawsV1TaskListsPrintouts` - Act on Printouts
* `postAlmawsV1TaskListsPrintoutsPrintoutId` - Printout Service

### requestedResources

* `getAlmawsV1TaskListsRequestedResources` - Get Requested Resources
* `postAlmawsV1TaskListsRequestedResources` - Act on Requested Resources

### test

* `getAlmawsV1TaskListsTest` - GET Task-lists Test API
* `postAlmawsV1TaskListsTest` - POST Task-lists Test API
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
