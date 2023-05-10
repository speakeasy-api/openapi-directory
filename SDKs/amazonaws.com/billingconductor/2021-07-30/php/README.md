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
use \OpenAPI\OpenAPI\Models\Operations\AssociateAccountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateAccountsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateAccountsRequest();
    $request->requestBody = new AssociateAccountsRequestBody();
    $request->requestBody->accountIds = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->requestBody->arn = 'unde';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->associateAccounts($request);

    if ($response->associateAccountsOutput !== null) {
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

* [associateAccounts](docs/sdk/README.md#associateaccounts) - Connects an array of account IDs in a consolidated billing family to a predefined billing group. The account IDs must be a part of the consolidated billing family during the current month, and not already associated with another billing group. The maximum number of accounts that can be associated in one call is 30. 
* [associatePricingRules](docs/sdk/README.md#associatepricingrules) - Connects an array of <code>PricingRuleArns</code> to a defined <code>PricingPlan</code>. The maximum number <code>PricingRuleArn</code> that can be associated in one call is 30. 
* [batchAssociateResourcesToCustomLineItem](docs/sdk/README.md#batchassociateresourcestocustomlineitem) -  Associates a batch of resources to a percentage custom line item. 
* [batchDisassociateResourcesFromCustomLineItem](docs/sdk/README.md#batchdisassociateresourcesfromcustomlineitem) -  Disassociates a batch of resources from a percentage custom line item. 
* [createBillingGroup](docs/sdk/README.md#createbillinggroup) -  Creates a billing group that resembles a consolidated billing family that Amazon Web Services charges, based off of the predefined pricing plan computation. 
* [createCustomLineItem](docs/sdk/README.md#createcustomlineitem) -  Creates a custom line item that can be used to create a one-time fixed charge that can be applied to a single billing group for the current or previous billing period. The one-time fixed charge is either a fee or discount. 
* [createPricingPlan](docs/sdk/README.md#createpricingplan) - Creates a pricing plan that is used for computing Amazon Web Services charges for billing groups. 
* [createPricingRule](docs/sdk/README.md#createpricingrule) -  Creates a pricing rule can be associated to a pricing plan, or a set of pricing plans. 
* [deleteBillingGroup](docs/sdk/README.md#deletebillinggroup) -  Deletes a billing group. 
* [deleteCustomLineItem](docs/sdk/README.md#deletecustomlineitem) -  Deletes the custom line item identified by the given ARN in the current, or previous billing period. 
* [deletePricingPlan](docs/sdk/README.md#deletepricingplan) - Deletes a pricing plan. The pricing plan must not be associated with any billing groups to delete successfully.
* [deletePricingRule](docs/sdk/README.md#deletepricingrule) -  Deletes the pricing rule that's identified by the input Amazon Resource Name (ARN). 
* [disassociateAccounts](docs/sdk/README.md#disassociateaccounts) - Removes the specified list of account IDs from the given billing group. 
* [disassociatePricingRules](docs/sdk/README.md#disassociatepricingrules) -  Disassociates a list of pricing rules from a pricing plan. 
* [listAccountAssociations](docs/sdk/README.md#listaccountassociations) -  This is a paginated call to list linked accounts that are linked to the payer account for the specified time period. If no information is provided, the current billing period is used. The response will optionally include the billing group that's associated with the linked account.
* [listBillingGroupCostReports](docs/sdk/README.md#listbillinggroupcostreports) - A paginated call to retrieve a summary report of actual Amazon Web Services charges and the calculated Amazon Web Services charges based on the associated pricing plan of a billing group.
* [listBillingGroups](docs/sdk/README.md#listbillinggroups) - A paginated call to retrieve a list of billing groups for the given billing period. If you don't provide a billing group, the current billing period is used.
* [listCustomLineItemVersions](docs/sdk/README.md#listcustomlineitemversions) - A paginated call to get a list of all custom line item versions.
* [listCustomLineItems](docs/sdk/README.md#listcustomlineitems) -  A paginated call to get a list of all custom line items (FFLIs) for the given billing period. If you don't provide a billing period, the current billing period is used. 
* [listPricingPlans](docs/sdk/README.md#listpricingplans) - A paginated call to get pricing plans for the given billing period. If you don't provide a billing period, the current billing period is used. 
* [listPricingPlansAssociatedWithPricingRule](docs/sdk/README.md#listpricingplansassociatedwithpricingrule) -  A list of the pricing plans that are associated with a pricing rule. 
* [listPricingRules](docs/sdk/README.md#listpricingrules) -  Describes a pricing rule that can be associated to a pricing plan, or set of pricing plans. 
* [listPricingRulesAssociatedToPricingPlan](docs/sdk/README.md#listpricingrulesassociatedtopricingplan) -  Lists the pricing rules that are associated with a pricing plan. 
* [listResourcesAssociatedToCustomLineItem](docs/sdk/README.md#listresourcesassociatedtocustomlineitem) -  List the resources that are associated to a custom line item. 
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) -  A list the tags for a resource. 
* [tagResource](docs/sdk/README.md#tagresource) -  Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. 
* [untagResource](docs/sdk/README.md#untagresource) -  Deletes specified tags from a resource. 
* [updateBillingGroup](docs/sdk/README.md#updatebillinggroup) - This updates an existing billing group. 
* [updateCustomLineItem](docs/sdk/README.md#updatecustomlineitem) -  Update an existing custom line item in the current or previous billing period. 
* [updatePricingPlan](docs/sdk/README.md#updatepricingplan) - This updates an existing pricing plan. 
* [updatePricingRule](docs/sdk/README.md#updatepricingrule) -  Updates an existing pricing rule. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
