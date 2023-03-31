# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/billingconductor/2021-07-30/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateAccountsRequest(
    request_body=operations.AssociateAccountsRequestBody(
        account_ids=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
        arn="unde",
    ),
    x_amz_algorithm="nulla",
    x_amz_content_sha256="corrupti",
    x_amz_credential="illum",
    x_amz_date="vel",
    x_amz_security_token="error",
    x_amz_signature="deserunt",
    x_amz_signed_headers="suscipit",
)
    
res = s.associate_accounts(req)

if res.associate_accounts_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `associate_accounts` - Connects an array of account IDs in a consolidated billing family to a predefined billing group. The account IDs must be a part of the consolidated billing family during the current month, and not already associated with another billing group. The maximum number of accounts that can be associated in one call is 30. 
* `associate_pricing_rules` - Connects an array of <code>PricingRuleArns</code> to a defined <code>PricingPlan</code>. The maximum number <code>PricingRuleArn</code> that can be associated in one call is 30. 
* `batch_associate_resources_to_custom_line_item` -  Associates a batch of resources to a percentage custom line item. 
* `batch_disassociate_resources_from_custom_line_item` -  Disassociates a batch of resources from a percentage custom line item. 
* `create_billing_group` -  Creates a billing group that resembles a consolidated billing family that Amazon Web Services charges, based off of the predefined pricing plan computation. 
* `create_custom_line_item` -  Creates a custom line item that can be used to create a one-time fixed charge that can be applied to a single billing group for the current or previous billing period. The one-time fixed charge is either a fee or discount. 
* `create_pricing_plan` - Creates a pricing plan that is used for computing Amazon Web Services charges for billing groups. 
* `create_pricing_rule` -  Creates a pricing rule can be associated to a pricing plan, or a set of pricing plans. 
* `delete_billing_group` -  Deletes a billing group. 
* `delete_custom_line_item` -  Deletes the custom line item identified by the given ARN in the current, or previous billing period. 
* `delete_pricing_plan` - Deletes a pricing plan. The pricing plan must not be associated with any billing groups to delete successfully.
* `delete_pricing_rule` -  Deletes the pricing rule that's identified by the input Amazon Resource Name (ARN). 
* `disassociate_accounts` - Removes the specified list of account IDs from the given billing group. 
* `disassociate_pricing_rules` -  Disassociates a list of pricing rules from a pricing plan. 
* `list_account_associations` -  This is a paginated call to list linked accounts that are linked to the payer account for the specified time period. If no information is provided, the current billing period is used. The response will optionally include the billing group that's associated with the linked account.
* `list_billing_group_cost_reports` - A paginated call to retrieve a summary report of actual Amazon Web Services charges and the calculated Amazon Web Services charges based on the associated pricing plan of a billing group.
* `list_billing_groups` - A paginated call to retrieve a list of billing groups for the given billing period. If you don't provide a billing group, the current billing period is used.
* `list_custom_line_item_versions` - A paginated call to get a list of all custom line item versions.
* `list_custom_line_items` -  A paginated call to get a list of all custom line items (FFLIs) for the given billing period. If you don't provide a billing period, the current billing period is used. 
* `list_pricing_plans` - A paginated call to get pricing plans for the given billing period. If you don't provide a billing period, the current billing period is used. 
* `list_pricing_plans_associated_with_pricing_rule` -  A list of the pricing plans that are associated with a pricing rule. 
* `list_pricing_rules` -  Describes a pricing rule that can be associated to a pricing plan, or set of pricing plans. 
* `list_pricing_rules_associated_to_pricing_plan` -  Lists the pricing rules that are associated with a pricing plan. 
* `list_resources_associated_to_custom_line_item` -  List the resources that are associated to a custom line item. 
* `list_tags_for_resource` -  A list the tags for a resource. 
* `tag_resource` -  Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. 
* `untag_resource` -  Deletes specified tags from a resource. 
* `update_billing_group` - This updates an existing billing group. 
* `update_custom_line_item` -  Update an existing custom line item in the current or previous billing period. 
* `update_pricing_plan` - This updates an existing pricing plan. 
* `update_pricing_rule` -  Updates an existing pricing rule. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
