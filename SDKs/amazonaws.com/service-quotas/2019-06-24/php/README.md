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

* `associateServiceQuotaTemplate` - Associates your quota request template with your organization. When a new account is created in your organization, the quota increase requests in the template are automatically applied to the account. You can add a quota increase request for any adjustable quota to your template.
* `deleteServiceQuotaIncreaseRequestFromTemplate` - Deletes the quota increase request for the specified quota from your quota request template.
* `disassociateServiceQuotaTemplate` - Disables your quota request template. After a template is disabled, the quota increase requests in the template are not applied to new accounts in your organization. Disabling a quota request template does not apply its quota increase requests.
* `getAWSDefaultServiceQuota` - Retrieves the default value for the specified quota. The default value does not reflect any quota increases.
* `getAssociationForServiceQuotaTemplate` - Retrieves the status of the association for the quota request template.
* `getRequestedServiceQuotaChange` - Retrieves information about the specified quota increase request.
* `getServiceQuota` - Retrieves the applied quota value for the specified quota. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.
* `getServiceQuotaIncreaseRequestFromTemplate` - Retrieves information about the specified quota increase request in your quota request template.
* `listAWSDefaultServiceQuotas` - Lists the default values for the quotas for the specified AWS service. A default value does not reflect any quota increases.
* `listRequestedServiceQuotaChangeHistory` - Retrieves the quota increase requests for the specified service.
* `listRequestedServiceQuotaChangeHistoryByQuota` - Retrieves the quota increase requests for the specified quota.
* `listServiceQuotaIncreaseRequestsInTemplate` - Lists the quota increase requests in the specified quota request template.
* `listServiceQuotas` - Lists the applied quota values for the specified AWS service. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.
* `listServices` - Lists the names and codes for the services integrated with Service Quotas.
* `listTagsForResource` - Returns a list of the tags assigned to the specified applied quota.
* `putServiceQuotaIncreaseRequestIntoTemplate` - Adds a quota increase request to your quota request template.
* `requestServiceQuotaIncrease` - Submits a quota increase request for the specified quota.
* `tagResource` - Adds tags to the specified applied quota. You can include one or more tags to add to the quota.
* `untagResource` - Removes tags from the specified applied quota. You can specify one or more tags to remove.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
