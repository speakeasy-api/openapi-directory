# SDK

## Overview

<p>Amazon Web Services Billing Conductor is a fully managed service that you can use to customize a <a href="https://docs.aws.amazon.com/billingconductor/latest/userguide/understanding-eb.html#eb-other-definitions">pro forma</a> version of your billing data each month, to accurately show or chargeback your end customers. Amazon Web Services Billing Conductor doesn't change the way you're billed by Amazon Web Services each month by design. Instead, it provides you with a mechanism to configure, generate, and display rates to certain customers over a given billing period. You can also analyze the difference between the rates you apply to your accounting groupings relative to your actual rates from Amazon Web Services. As a result of your Amazon Web Services Billing Conductor configuration, the payer account can also see the custom rate applied on the billing details page of the <a href="https://console.aws.amazon.com/billing">Amazon Web Services Billing console</a>, or configure a cost and usage report per billing group.</p> <p>This documentation shows how you can configure Amazon Web Services Billing Conductor using its API. For more information about using the <a href="https://console.aws.amazon.com/billingconductor/">Amazon Web Services Billing Conductor</a> user interface, see the <a href="https://docs.aws.amazon.com/billingconductor/latest/userguide/what-is-billingconductor.html"> Amazon Web Services Billing Conductor User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/billingconductor/>
### Available Operations

* [associateAccounts](#associateaccounts) - Connects an array of account IDs in a consolidated billing family to a predefined billing group. The account IDs must be a part of the consolidated billing family during the current month, and not already associated with another billing group. The maximum number of accounts that can be associated in one call is 30. 
* [associatePricingRules](#associatepricingrules) - Connects an array of <code>PricingRuleArns</code> to a defined <code>PricingPlan</code>. The maximum number <code>PricingRuleArn</code> that can be associated in one call is 30. 
* [batchAssociateResourcesToCustomLineItem](#batchassociateresourcestocustomlineitem) -  Associates a batch of resources to a percentage custom line item. 
* [batchDisassociateResourcesFromCustomLineItem](#batchdisassociateresourcesfromcustomlineitem) -  Disassociates a batch of resources from a percentage custom line item. 
* [createBillingGroup](#createbillinggroup) -  Creates a billing group that resembles a consolidated billing family that Amazon Web Services charges, based off of the predefined pricing plan computation. 
* [createCustomLineItem](#createcustomlineitem) -  Creates a custom line item that can be used to create a one-time fixed charge that can be applied to a single billing group for the current or previous billing period. The one-time fixed charge is either a fee or discount. 
* [createPricingPlan](#createpricingplan) - Creates a pricing plan that is used for computing Amazon Web Services charges for billing groups. 
* [createPricingRule](#createpricingrule) -  Creates a pricing rule can be associated to a pricing plan, or a set of pricing plans. 
* [deleteBillingGroup](#deletebillinggroup) -  Deletes a billing group. 
* [deleteCustomLineItem](#deletecustomlineitem) -  Deletes the custom line item identified by the given ARN in the current, or previous billing period. 
* [deletePricingPlan](#deletepricingplan) - Deletes a pricing plan. The pricing plan must not be associated with any billing groups to delete successfully.
* [deletePricingRule](#deletepricingrule) -  Deletes the pricing rule that's identified by the input Amazon Resource Name (ARN). 
* [disassociateAccounts](#disassociateaccounts) - Removes the specified list of account IDs from the given billing group. 
* [disassociatePricingRules](#disassociatepricingrules) -  Disassociates a list of pricing rules from a pricing plan. 
* [listAccountAssociations](#listaccountassociations) -  This is a paginated call to list linked accounts that are linked to the payer account for the specified time period. If no information is provided, the current billing period is used. The response will optionally include the billing group that's associated with the linked account.
* [listBillingGroupCostReports](#listbillinggroupcostreports) - A paginated call to retrieve a summary report of actual Amazon Web Services charges and the calculated Amazon Web Services charges based on the associated pricing plan of a billing group.
* [listBillingGroups](#listbillinggroups) - A paginated call to retrieve a list of billing groups for the given billing period. If you don't provide a billing group, the current billing period is used.
* [listCustomLineItemVersions](#listcustomlineitemversions) - A paginated call to get a list of all custom line item versions.
* [listCustomLineItems](#listcustomlineitems) -  A paginated call to get a list of all custom line items (FFLIs) for the given billing period. If you don't provide a billing period, the current billing period is used. 
* [listPricingPlans](#listpricingplans) - A paginated call to get pricing plans for the given billing period. If you don't provide a billing period, the current billing period is used. 
* [listPricingPlansAssociatedWithPricingRule](#listpricingplansassociatedwithpricingrule) -  A list of the pricing plans that are associated with a pricing rule. 
* [listPricingRules](#listpricingrules) -  Describes a pricing rule that can be associated to a pricing plan, or set of pricing plans. 
* [listPricingRulesAssociatedToPricingPlan](#listpricingrulesassociatedtopricingplan) -  Lists the pricing rules that are associated with a pricing plan. 
* [listResourcesAssociatedToCustomLineItem](#listresourcesassociatedtocustomlineitem) -  List the resources that are associated to a custom line item. 
* [listTagsForResource](#listtagsforresource) -  A list the tags for a resource. 
* [tagResource](#tagresource) -  Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. 
* [untagResource](#untagresource) -  Deletes specified tags from a resource. 
* [updateBillingGroup](#updatebillinggroup) - This updates an existing billing group. 
* [updateCustomLineItem](#updatecustomlineitem) -  Update an existing custom line item in the current or previous billing period. 
* [updatePricingPlan](#updatepricingplan) - This updates an existing pricing plan. 
* [updatePricingRule](#updatepricingrule) -  Updates an existing pricing rule. 

## associateAccounts

Connects an array of account IDs in a consolidated billing family to a predefined billing group. The account IDs must be a part of the consolidated billing family during the current month, and not already associated with another billing group. The maximum number of accounts that can be associated in one call is 30. 

### Example Usage

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
        'magnam',
        'debitis',
    ];
    $request->requestBody->arn = 'ipsa';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'voluptatum';

    $response = $sdk->sdk->associateAccounts($request);

    if ($response->associateAccountsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associatePricingRules

Connects an array of <code>PricingRuleArns</code> to a defined <code>PricingPlan</code>. The maximum number <code>PricingRuleArn</code> that can be associated in one call is 30. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociatePricingRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociatePricingRulesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociatePricingRulesRequest();
    $request->requestBody = new AssociatePricingRulesRequestBody();
    $request->requestBody->arn = 'iusto';
    $request->requestBody->pricingRuleArns = [
        'nisi',
        'recusandae',
        'temporibus',
    ];
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'repellendus';

    $response = $sdk->sdk->associatePricingRules($request);

    if ($response->associatePricingRulesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchAssociateResourcesToCustomLineItem

 Associates a batch of resources to a percentage custom line item. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchAssociateResourcesToCustomLineItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchAssociateResourcesToCustomLineItemRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\BatchAssociateResourcesToCustomLineItemRequestBodyBillingPeriodRange;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchAssociateResourcesToCustomLineItemRequest();
    $request->requestBody = new BatchAssociateResourcesToCustomLineItemRequestBody();
    $request->requestBody->billingPeriodRange = new BatchAssociateResourcesToCustomLineItemRequestBodyBillingPeriodRange();
    $request->requestBody->billingPeriodRange->exclusiveEndBillingPeriod = 'sapiente';
    $request->requestBody->billingPeriodRange->inclusiveStartBillingPeriod = 'quo';
    $request->requestBody->resourceArns = [
        'at',
    ];
    $request->requestBody->targetArn = 'at';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'porro';

    $response = $sdk->sdk->batchAssociateResourcesToCustomLineItem($request);

    if ($response->batchAssociateResourcesToCustomLineItemOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDisassociateResourcesFromCustomLineItem

 Disassociates a batch of resources from a percentage custom line item. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDisassociateResourcesFromCustomLineItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDisassociateResourcesFromCustomLineItemRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\BatchDisassociateResourcesFromCustomLineItemRequestBodyBillingPeriodRange;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDisassociateResourcesFromCustomLineItemRequest();
    $request->requestBody = new BatchDisassociateResourcesFromCustomLineItemRequestBody();
    $request->requestBody->billingPeriodRange = new BatchDisassociateResourcesFromCustomLineItemRequestBodyBillingPeriodRange();
    $request->requestBody->billingPeriodRange->exclusiveEndBillingPeriod = 'dolorum';
    $request->requestBody->billingPeriodRange->inclusiveStartBillingPeriod = 'dicta';
    $request->requestBody->resourceArns = [
        'officia',
        'occaecati',
        'fugit',
    ];
    $request->requestBody->targetArn = 'deleniti';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'beatae';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'modi';

    $response = $sdk->sdk->batchDisassociateResourcesFromCustomLineItem($request);

    if ($response->batchDisassociateResourcesFromCustomLineItemOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBillingGroup

 Creates a billing group that resembles a consolidated billing family that Amazon Web Services charges, based off of the predefined pricing plan computation. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBillingGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBillingGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateBillingGroupRequestBodyAccountGrouping;
use \OpenAPI\OpenAPI\Models\Operations\CreateBillingGroupRequestBodyComputationPreference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBillingGroupRequest();
    $request->requestBody = new CreateBillingGroupRequestBody();
    $request->requestBody->accountGrouping = new CreateBillingGroupRequestBodyAccountGrouping();
    $request->requestBody->accountGrouping->linkedAccountIds = [
        'impedit',
    ];
    $request->requestBody->computationPreference = new CreateBillingGroupRequestBodyComputationPreference();
    $request->requestBody->computationPreference->pricingPlanArn = 'cum';
    $request->requestBody->description = 'esse';
    $request->requestBody->name = 'ipsum';
    $request->requestBody->primaryAccountId = 'excepturi';
    $request->requestBody->tags = [
        'perferendis' => 'ad',
    ];
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmznClientToken = 'saepe';

    $response = $sdk->sdk->createBillingGroup($request);

    if ($response->createBillingGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCustomLineItem

 Creates a custom line item that can be used to create a one-time fixed charge that can be applied to a single billing group for the current or previous billing period. The one-time fixed charge is either a fee or discount. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomLineItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomLineItemRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomLineItemRequestBodyBillingPeriodRange;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomLineItemRequestBodyChargeDetails;
use \OpenAPI\OpenAPI\Models\Shared\CustomLineItemFlatChargeDetails;
use \OpenAPI\OpenAPI\Models\Shared\CustomLineItemPercentageChargeDetails;
use \OpenAPI\OpenAPI\Models\Shared\CustomLineItemTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCustomLineItemRequest();
    $request->requestBody = new CreateCustomLineItemRequestBody();
    $request->requestBody->billingGroupArn = 'fuga';
    $request->requestBody->billingPeriodRange = new CreateCustomLineItemRequestBodyBillingPeriodRange();
    $request->requestBody->billingPeriodRange->exclusiveEndBillingPeriod = 'in';
    $request->requestBody->billingPeriodRange->inclusiveStartBillingPeriod = 'corporis';
    $request->requestBody->chargeDetails = new CreateCustomLineItemRequestBodyChargeDetails();
    $request->requestBody->chargeDetails->flat = new CustomLineItemFlatChargeDetails();
    $request->requestBody->chargeDetails->flat->chargeValue = 6130.64;
    $request->requestBody->chargeDetails->percentage = new CustomLineItemPercentageChargeDetails();
    $request->requestBody->chargeDetails->percentage->associatedValues = [
        'saepe',
        'quidem',
    ];
    $request->requestBody->chargeDetails->percentage->percentageValue = 992.8;
    $request->requestBody->chargeDetails->type = CustomLineItemTypeEnum::CREDIT;
    $request->requestBody->description = 'reiciendis';
    $request->requestBody->name = 'est';
    $request->requestBody->tags = [
        'laborum' => 'dolores',
        'dolorem' => 'corporis',
        'explicabo' => 'nobis',
    ];
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmznClientToken = 'culpa';

    $response = $sdk->sdk->createCustomLineItem($request);

    if ($response->createCustomLineItemOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPricingPlan

Creates a pricing plan that is used for computing Amazon Web Services charges for billing groups. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePricingPlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePricingPlanRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePricingPlanRequest();
    $request->requestBody = new CreatePricingPlanRequestBody();
    $request->requestBody->description = 'doloribus';
    $request->requestBody->name = 'sapiente';
    $request->requestBody->pricingRuleArns = [
        'mollitia',
    ];
    $request->requestBody->tags = [
        'culpa' => 'consequuntur',
    ];
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmznClientToken = 'velit';

    $response = $sdk->sdk->createPricingPlan($request);

    if ($response->createPricingPlanOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPricingRule

 Creates a pricing rule can be associated to a pricing plan, or a set of pricing plans. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePricingRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePricingRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreatePricingRuleRequestBodyScopeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreatePricingRuleRequestBodyTiering;
use \OpenAPI\OpenAPI\Models\Shared\CreateFreeTierConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreatePricingRuleRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePricingRuleRequest();
    $request->requestBody = new CreatePricingRuleRequestBody();
    $request->requestBody->billingEntity = 'error';
    $request->requestBody->description = 'quia';
    $request->requestBody->modifierPercentage = 3380.07;
    $request->requestBody->name = 'vitae';
    $request->requestBody->operation = 'laborum';
    $request->requestBody->scope = CreatePricingRuleRequestBodyScopeEnum::BILLING_ENTITY;
    $request->requestBody->service = 'enim';
    $request->requestBody->tags = [
        'quo' => 'sequi',
    ];
    $request->requestBody->tiering = new CreatePricingRuleRequestBodyTiering();
    $request->requestBody->tiering->freeTier = new CreateFreeTierConfig();
    $request->requestBody->tiering->freeTier->activated = false;
    $request->requestBody->type = CreatePricingRuleRequestBodyTypeEnum::TIERING;
    $request->requestBody->usageType = 'ipsam';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmznClientToken = 'quasi';

    $response = $sdk->sdk->createPricingRule($request);

    if ($response->createPricingRuleOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBillingGroup

 Deletes a billing group. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBillingGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBillingGroupRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBillingGroupRequest();
    $request->requestBody = new DeleteBillingGroupRequestBody();
    $request->requestBody->arn = 'reiciendis';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->deleteBillingGroup($request);

    if ($response->deleteBillingGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCustomLineItem

 Deletes the custom line item identified by the given ARN in the current, or previous billing period. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomLineItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomLineItemRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomLineItemRequestBodyBillingPeriodRange;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomLineItemRequest();
    $request->requestBody = new DeleteCustomLineItemRequestBody();
    $request->requestBody->arn = 'voluptate';
    $request->requestBody->billingPeriodRange = new DeleteCustomLineItemRequestBodyBillingPeriodRange();
    $request->requestBody->billingPeriodRange->exclusiveEndBillingPeriod = 'cum';
    $request->requestBody->billingPeriodRange->inclusiveStartBillingPeriod = 'perferendis';
    $request->xAmzAlgorithm = 'doloremque';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'dolore';

    $response = $sdk->sdk->deleteCustomLineItem($request);

    if ($response->deleteCustomLineItemOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePricingPlan

Deletes a pricing plan. The pricing plan must not be associated with any billing groups to delete successfully.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePricingPlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePricingPlanRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePricingPlanRequest();
    $request->requestBody = new DeletePricingPlanRequestBody();
    $request->requestBody->arn = 'iusto';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->deletePricingPlan($request);

    if ($response->deletePricingPlanOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePricingRule

 Deletes the pricing rule that's identified by the input Amazon Resource Name (ARN). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePricingRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePricingRuleRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePricingRuleRequest();
    $request->requestBody = new DeletePricingRuleRequestBody();
    $request->requestBody->arn = 'ipsum';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'rem';

    $response = $sdk->sdk->deletePricingRule($request);

    if ($response->deletePricingRuleOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateAccounts

Removes the specified list of account IDs from the given billing group. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateAccountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateAccountsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateAccountsRequest();
    $request->requestBody = new DisassociateAccountsRequestBody();
    $request->requestBody->accountIds = [
        'quasi',
        'repudiandae',
        'sint',
        'veritatis',
    ];
    $request->requestBody->arn = 'itaque';
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'deserunt';

    $response = $sdk->sdk->disassociateAccounts($request);

    if ($response->disassociateAccountsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociatePricingRules

 Disassociates a list of pricing rules from a pricing plan. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociatePricingRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociatePricingRulesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociatePricingRulesRequest();
    $request->requestBody = new DisassociatePricingRulesRequestBody();
    $request->requestBody->arn = 'distinctio';
    $request->requestBody->pricingRuleArns = [
        'labore',
        'modi',
        'qui',
        'aliquid',
    ];
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'alias';

    $response = $sdk->sdk->disassociatePricingRules($request);

    if ($response->disassociatePricingRulesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAccountAssociations

 This is a paginated call to list linked accounts that are linked to the payer account for the specified time period. If no information is provided, the current billing period is used. The response will optionally include the billing group that's associated with the linked account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountAssociationsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountAssociationsRequestBodyFilters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAccountAssociationsRequest();
    $request->nextToken = 'fugit';
    $request->requestBody = new ListAccountAssociationsRequestBody();
    $request->requestBody->billingPeriod = 'dolorum';
    $request->requestBody->filters = new ListAccountAssociationsRequestBodyFilters();
    $request->requestBody->filters->accountId = 'excepturi';
    $request->requestBody->filters->accountIds = [
        'facilis',
        'tempore',
    ];
    $request->requestBody->filters->association = 'labore';
    $request->requestBody->nextToken = 'delectus';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->listAccountAssociations($request);

    if ($response->listAccountAssociationsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBillingGroupCostReports

A paginated call to retrieve a summary report of actual Amazon Web Services charges and the calculated Amazon Web Services charges based on the associated pricing plan of a billing group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBillingGroupCostReportsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListBillingGroupCostReportsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListBillingGroupCostReportsRequestBodyFilters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBillingGroupCostReportsRequest();
    $request->maxResults = 'sint';
    $request->nextToken = 'officia';
    $request->requestBody = new ListBillingGroupCostReportsRequestBody();
    $request->requestBody->billingPeriod = 'dolor';
    $request->requestBody->filters = new ListBillingGroupCostReportsRequestBodyFilters();
    $request->requestBody->filters->billingGroupArns = [
        'a',
        'dolorum',
        'in',
        'in',
    ];
    $request->requestBody->maxResults = 846409;
    $request->requestBody->nextToken = 'maiores';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aliquid';

    $response = $sdk->sdk->listBillingGroupCostReports($request);

    if ($response->listBillingGroupCostReportsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBillingGroups

A paginated call to retrieve a list of billing groups for the given billing period. If you don't provide a billing group, the current billing period is used.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBillingGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListBillingGroupsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListBillingGroupsRequestBodyFilters;
use \OpenAPI\OpenAPI\Models\Shared\BillingGroupStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBillingGroupsRequest();
    $request->maxResults = 'laborum';
    $request->nextToken = 'accusamus';
    $request->requestBody = new ListBillingGroupsRequestBody();
    $request->requestBody->billingPeriod = 'non';
    $request->requestBody->filters = new ListBillingGroupsRequestBodyFilters();
    $request->requestBody->filters->arns = [
        'enim',
        'accusamus',
        'delectus',
    ];
    $request->requestBody->filters->pricingPlan = 'quidem';
    $request->requestBody->filters->statuses = [
        BillingGroupStatusEnum::PRIMARY_ACCOUNT_MISSING,
        BillingGroupStatusEnum::PRIMARY_ACCOUNT_MISSING,
        BillingGroupStatusEnum::PRIMARY_ACCOUNT_MISSING,
    ];
    $request->requestBody->maxResults = 533206;
    $request->requestBody->nextToken = 'sapiente';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->listBillingGroups($request);

    if ($response->listBillingGroupsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCustomLineItemVersions

A paginated call to get a list of all custom line item versions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomLineItemVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomLineItemVersionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomLineItemVersionsRequestBodyFilters;
use \OpenAPI\OpenAPI\Models\Shared\ListCustomLineItemVersionsBillingPeriodRangeFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCustomLineItemVersionsRequest();
    $request->maxResults = 'perferendis';
    $request->nextToken = 'nihil';
    $request->requestBody = new ListCustomLineItemVersionsRequestBody();
    $request->requestBody->arn = 'magnam';
    $request->requestBody->filters = new ListCustomLineItemVersionsRequestBodyFilters();
    $request->requestBody->filters->billingPeriodRange = new ListCustomLineItemVersionsBillingPeriodRangeFilter();
    $request->requestBody->filters->billingPeriodRange->endBillingPeriod = 'distinctio';
    $request->requestBody->filters->billingPeriodRange->startBillingPeriod = 'id';
    $request->requestBody->maxResults = 287991;
    $request->requestBody->nextToken = 'labore';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->listCustomLineItemVersions($request);

    if ($response->listCustomLineItemVersionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCustomLineItems

 A paginated call to get a list of all custom line items (FFLIs) for the given billing period. If you don't provide a billing period, the current billing period is used. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomLineItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomLineItemsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomLineItemsRequestBodyFilters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCustomLineItemsRequest();
    $request->maxResults = 'magnam';
    $request->nextToken = 'et';
    $request->requestBody = new ListCustomLineItemsRequestBody();
    $request->requestBody->billingPeriod = 'excepturi';
    $request->requestBody->filters = new ListCustomLineItemsRequestBodyFilters();
    $request->requestBody->filters->arns = [
        'provident',
        'quos',
    ];
    $request->requestBody->filters->billingGroups = [
        'accusantium',
        'mollitia',
        'reiciendis',
    ];
    $request->requestBody->filters->names = [
        'ad',
        'eum',
        'dolor',
    ];
    $request->requestBody->maxResults = 896547;
    $request->requestBody->nextToken = 'odit';
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'maxime';

    $response = $sdk->sdk->listCustomLineItems($request);

    if ($response->listCustomLineItemsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPricingPlans

A paginated call to get pricing plans for the given billing period. If you don't provide a billing period, the current billing period is used. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPricingPlansRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPricingPlansRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListPricingPlansRequestBodyFilters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPricingPlansRequest();
    $request->maxResults = 'deleniti';
    $request->nextToken = 'facilis';
    $request->requestBody = new ListPricingPlansRequestBody();
    $request->requestBody->billingPeriod = 'in';
    $request->requestBody->filters = new ListPricingPlansRequestBodyFilters();
    $request->requestBody->filters->arns = [
        'architecto',
    ];
    $request->requestBody->maxResults = 919483;
    $request->requestBody->nextToken = 'ullam';
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'pariatur';

    $response = $sdk->sdk->listPricingPlans($request);

    if ($response->listPricingPlansOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPricingPlansAssociatedWithPricingRule

 A list of the pricing plans that are associated with a pricing rule. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPricingPlansAssociatedWithPricingRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPricingPlansAssociatedWithPricingRuleRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPricingPlansAssociatedWithPricingRuleRequest();
    $request->maxResults = 'accusantium';
    $request->nextToken = 'consequuntur';
    $request->requestBody = new ListPricingPlansAssociatedWithPricingRuleRequestBody();
    $request->requestBody->billingPeriod = 'praesentium';
    $request->requestBody->maxResults = 615560;
    $request->requestBody->nextToken = 'magni';
    $request->requestBody->pricingRuleArn = 'sunt';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->listPricingPlansAssociatedWithPricingRule($request);

    if ($response->listPricingPlansAssociatedWithPricingRuleOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPricingRules

 Describes a pricing rule that can be associated to a pricing plan, or set of pricing plans. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPricingRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPricingRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListPricingRulesRequestBodyFilters;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPricingRulesRequest();
    $request->maxResults = 'ea';
    $request->nextToken = 'accusantium';
    $request->requestBody = new ListPricingRulesRequestBody();
    $request->requestBody->billingPeriod = 'ab';
    $request->requestBody->filters = new ListPricingRulesRequestBodyFilters();
    $request->requestBody->filters->arns = [
        'quidem',
        'ipsam',
        'voluptate',
        'autem',
    ];
    $request->requestBody->maxResults = 722056;
    $request->requestBody->nextToken = 'eaque';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'aut';

    $response = $sdk->sdk->listPricingRules($request);

    if ($response->listPricingRulesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPricingRulesAssociatedToPricingPlan

 Lists the pricing rules that are associated with a pricing plan. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPricingRulesAssociatedToPricingPlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPricingRulesAssociatedToPricingPlanRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPricingRulesAssociatedToPricingPlanRequest();
    $request->maxResults = 'cumque';
    $request->nextToken = 'corporis';
    $request->requestBody = new ListPricingRulesAssociatedToPricingPlanRequestBody();
    $request->requestBody->billingPeriod = 'hic';
    $request->requestBody->maxResults = 729991;
    $request->requestBody->nextToken = 'nobis';
    $request->requestBody->pricingPlanArn = 'dolores';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'nesciunt';
    $request->xAmzSignedHeaders = 'eos';

    $response = $sdk->sdk->listPricingRulesAssociatedToPricingPlan($request);

    if ($response->listPricingRulesAssociatedToPricingPlanOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResourcesAssociatedToCustomLineItem

 List the resources that are associated to a custom line item. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResourcesAssociatedToCustomLineItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListResourcesAssociatedToCustomLineItemRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListResourcesAssociatedToCustomLineItemRequestBodyFilters;
use \OpenAPI\OpenAPI\Models\Shared\CustomLineItemRelationshipEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResourcesAssociatedToCustomLineItemRequest();
    $request->maxResults = 'perferendis';
    $request->nextToken = 'dolores';
    $request->requestBody = new ListResourcesAssociatedToCustomLineItemRequestBody();
    $request->requestBody->arn = 'minus';
    $request->requestBody->billingPeriod = 'quam';
    $request->requestBody->filters = new ListResourcesAssociatedToCustomLineItemRequestBodyFilters();
    $request->requestBody->filters->relationship = CustomLineItemRelationshipEnum::PARENT;
    $request->requestBody->maxResults = 874573;
    $request->requestBody->nextToken = 'nostrum';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'perspiciatis';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'porro';

    $response = $sdk->sdk->listResourcesAssociatedToCustomLineItem($request);

    if ($response->listResourcesAssociatedToCustomLineItemOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

 A list the tags for a resource. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->resourceArn = 'consequuntur';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'asperiores';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

 Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'modi' => 'iste',
        'dolorum' => 'deleniti',
        'pariatur' => 'provident',
        'nobis' => 'libero',
    ];
    $request->resourceArn = 'delectus';
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

 Deletes specified tags from a resource. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->resourceArn = 'ipsum';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'amet';
    $request->tagKeys = [
        'numquam',
        'veritatis',
        'ipsa',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBillingGroup

This updates an existing billing group. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBillingGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBillingGroupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBillingGroupRequestBodyComputationPreference;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBillingGroupRequestBodyStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBillingGroupRequest();
    $request->requestBody = new UpdateBillingGroupRequestBody();
    $request->requestBody->arn = 'ipsa';
    $request->requestBody->computationPreference = new UpdateBillingGroupRequestBodyComputationPreference();
    $request->requestBody->computationPreference->pricingPlanArn = 'iure';
    $request->requestBody->description = 'odio';
    $request->requestBody->name = 'quaerat';
    $request->requestBody->status = UpdateBillingGroupRequestBodyStatusEnum::PRIMARY_ACCOUNT_MISSING;
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'sit';

    $response = $sdk->sdk->updateBillingGroup($request);

    if ($response->updateBillingGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCustomLineItem

 Update an existing custom line item in the current or previous billing period. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomLineItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomLineItemRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomLineItemRequestBodyBillingPeriodRange;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomLineItemRequestBodyChargeDetails;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCustomLineItemFlatChargeDetails;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCustomLineItemPercentageChargeDetails;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCustomLineItemRequest();
    $request->requestBody = new UpdateCustomLineItemRequestBody();
    $request->requestBody->arn = 'fugiat';
    $request->requestBody->billingPeriodRange = new UpdateCustomLineItemRequestBodyBillingPeriodRange();
    $request->requestBody->billingPeriodRange->exclusiveEndBillingPeriod = 'ab';
    $request->requestBody->billingPeriodRange->inclusiveStartBillingPeriod = 'soluta';
    $request->requestBody->chargeDetails = new UpdateCustomLineItemRequestBodyChargeDetails();
    $request->requestBody->chargeDetails->flat = new UpdateCustomLineItemFlatChargeDetails();
    $request->requestBody->chargeDetails->flat->chargeValue = 6793.93;
    $request->requestBody->chargeDetails->percentage = new UpdateCustomLineItemPercentageChargeDetails();
    $request->requestBody->chargeDetails->percentage->percentageValue = 4785.96;
    $request->requestBody->description = 'voluptate';
    $request->requestBody->name = 'dolorum';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'ipsum';

    $response = $sdk->sdk->updateCustomLineItem($request);

    if ($response->updateCustomLineItemOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePricingPlan

This updates an existing pricing plan. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePricingPlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePricingPlanRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePricingPlanRequest();
    $request->requestBody = new UpdatePricingPlanRequestBody();
    $request->requestBody->arn = 'voluptate';
    $request->requestBody->description = 'id';
    $request->requestBody->name = 'saepe';
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'ad';

    $response = $sdk->sdk->updatePricingPlan($request);

    if ($response->updatePricingPlanOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePricingRule

 Updates an existing pricing rule. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePricingRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePricingRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePricingRuleRequestBodyTiering;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFreeTierConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePricingRuleRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePricingRuleRequest();
    $request->requestBody = new UpdatePricingRuleRequestBody();
    $request->requestBody->arn = 'saepe';
    $request->requestBody->description = 'suscipit';
    $request->requestBody->modifierPercentage = 6457.85;
    $request->requestBody->name = 'provident';
    $request->requestBody->tiering = new UpdatePricingRuleRequestBodyTiering();
    $request->requestBody->tiering->freeTier = new UpdateFreeTierConfig();
    $request->requestBody->tiering->freeTier->activated = false;
    $request->requestBody->type = UpdatePricingRuleRequestBodyTypeEnum::MARKUP;
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'similique';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->updatePricingRule($request);

    if ($response->updatePricingRuleOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
