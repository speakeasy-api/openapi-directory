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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateServiceQuotaTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateServiceQuotaTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateServiceQuotaTemplateRequest();
    $request->requestBody = [
        'provident' => 'distinctio',
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
    ];
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = AssociateServiceQuotaTemplateXAmzTargetEnum::SERVICE_QUOTAS_V20190624_ASSOCIATE_SERVICE_QUOTA_TEMPLATE;

    $response = $sdk->associateServiceQuotaTemplate($request);

    if ($response->associateServiceQuotaTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [associateServiceQuotaTemplate](docs/sdk/README.md#associateservicequotatemplate) - Associates your quota request template with your organization. When a new account is created in your organization, the quota increase requests in the template are automatically applied to the account. You can add a quota increase request for any adjustable quota to your template.
* [deleteServiceQuotaIncreaseRequestFromTemplate](docs/sdk/README.md#deleteservicequotaincreaserequestfromtemplate) - Deletes the quota increase request for the specified quota from your quota request template.
* [disassociateServiceQuotaTemplate](docs/sdk/README.md#disassociateservicequotatemplate) - Disables your quota request template. After a template is disabled, the quota increase requests in the template are not applied to new accounts in your organization. Disabling a quota request template does not apply its quota increase requests.
* [getAWSDefaultServiceQuota](docs/sdk/README.md#getawsdefaultservicequota) - Retrieves the default value for the specified quota. The default value does not reflect any quota increases.
* [getAssociationForServiceQuotaTemplate](docs/sdk/README.md#getassociationforservicequotatemplate) - Retrieves the status of the association for the quota request template.
* [getRequestedServiceQuotaChange](docs/sdk/README.md#getrequestedservicequotachange) - Retrieves information about the specified quota increase request.
* [getServiceQuota](docs/sdk/README.md#getservicequota) - Retrieves the applied quota value for the specified quota. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.
* [getServiceQuotaIncreaseRequestFromTemplate](docs/sdk/README.md#getservicequotaincreaserequestfromtemplate) - Retrieves information about the specified quota increase request in your quota request template.
* [listAWSDefaultServiceQuotas](docs/sdk/README.md#listawsdefaultservicequotas) - Lists the default values for the quotas for the specified AWS service. A default value does not reflect any quota increases.
* [listRequestedServiceQuotaChangeHistory](docs/sdk/README.md#listrequestedservicequotachangehistory) - Retrieves the quota increase requests for the specified service.
* [listRequestedServiceQuotaChangeHistoryByQuota](docs/sdk/README.md#listrequestedservicequotachangehistorybyquota) - Retrieves the quota increase requests for the specified quota.
* [listServiceQuotaIncreaseRequestsInTemplate](docs/sdk/README.md#listservicequotaincreaserequestsintemplate) - Lists the quota increase requests in the specified quota request template.
* [listServiceQuotas](docs/sdk/README.md#listservicequotas) - Lists the applied quota values for the specified AWS service. For some quotas, only the default values are available. If the applied quota value is not available for a quota, the quota is not retrieved.
* [listServices](docs/sdk/README.md#listservices) - Lists the names and codes for the services integrated with Service Quotas.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Returns a list of the tags assigned to the specified applied quota.
* [putServiceQuotaIncreaseRequestIntoTemplate](docs/sdk/README.md#putservicequotaincreaserequestintotemplate) - Adds a quota increase request to your quota request template.
* [requestServiceQuotaIncrease](docs/sdk/README.md#requestservicequotaincrease) - Submits a quota increase request for the specified quota.
* [tagResource](docs/sdk/README.md#tagresource) - Adds tags to the specified applied quota. You can include one or more tags to add to the quota.
* [untagResource](docs/sdk/README.md#untagresource) - Removes tags from the specified applied quota. You can specify one or more tags to remove.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
