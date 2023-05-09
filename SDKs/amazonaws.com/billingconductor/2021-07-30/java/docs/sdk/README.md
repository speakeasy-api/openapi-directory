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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateAccountsRequest;
import org.openapis.openapi.models.operations.AssociateAccountsRequestBody;
import org.openapis.openapi.models.operations.AssociateAccountsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateAccountsRequest req = new AssociateAccountsRequest(                new AssociateAccountsRequestBody(                new String[]{{
                                                add("ipsa"),
                                                add("delectus"),
                                                add("tempora"),
                                                add("suscipit"),
                                            }}, "molestiae");) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            AssociateAccountsResponse res = sdk.sdk.associateAccounts(req);

            if (res.associateAccountsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associatePricingRules

Connects an array of <code>PricingRuleArns</code> to a defined <code>PricingPlan</code>. The maximum number <code>PricingRuleArn</code> that can be associated in one call is 30. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociatePricingRulesRequest;
import org.openapis.openapi.models.operations.AssociatePricingRulesRequestBody;
import org.openapis.openapi.models.operations.AssociatePricingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociatePricingRulesRequest req = new AssociatePricingRulesRequest(                new AssociatePricingRulesRequestBody("ab",                 new String[]{{
                                                add("veritatis"),
                                                add("deserunt"),
                                            }});) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "repellendus";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "quo";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "at";
            }};            

            AssociatePricingRulesResponse res = sdk.sdk.associatePricingRules(req);

            if (res.associatePricingRulesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchAssociateResourcesToCustomLineItem

 Associates a batch of resources to a percentage custom line item. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchAssociateResourcesToCustomLineItemRequest;
import org.openapis.openapi.models.operations.BatchAssociateResourcesToCustomLineItemRequestBody;
import org.openapis.openapi.models.operations.BatchAssociateResourcesToCustomLineItemRequestBodyBillingPeriodRange;
import org.openapis.openapi.models.operations.BatchAssociateResourcesToCustomLineItemResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchAssociateResourcesToCustomLineItemRequest req = new BatchAssociateResourcesToCustomLineItemRequest(                new BatchAssociateResourcesToCustomLineItemRequestBody(                new String[]{{
                                                add("molestiae"),
                                                add("quod"),
                                                add("quod"),
                                                add("esse"),
                                            }}, "totam") {{
                                billingPeriodRange = new BatchAssociateResourcesToCustomLineItemRequestBodyBillingPeriodRange() {{
                                    exclusiveEndBillingPeriod = "porro";
                                    inclusiveStartBillingPeriod = "dolorum";
                                }};;
                            }};) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "nam";
                xAmzCredential = "officia";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "hic";
            }};            

            BatchAssociateResourcesToCustomLineItemResponse res = sdk.sdk.batchAssociateResourcesToCustomLineItem(req);

            if (res.batchAssociateResourcesToCustomLineItemOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDisassociateResourcesFromCustomLineItem

 Disassociates a batch of resources from a percentage custom line item. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDisassociateResourcesFromCustomLineItemRequest;
import org.openapis.openapi.models.operations.BatchDisassociateResourcesFromCustomLineItemRequestBody;
import org.openapis.openapi.models.operations.BatchDisassociateResourcesFromCustomLineItemRequestBodyBillingPeriodRange;
import org.openapis.openapi.models.operations.BatchDisassociateResourcesFromCustomLineItemResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDisassociateResourcesFromCustomLineItemRequest req = new BatchDisassociateResourcesFromCustomLineItemRequest(                new BatchDisassociateResourcesFromCustomLineItemRequestBody(                new String[]{{
                                                add("beatae"),
                                                add("commodi"),
                                                add("molestiae"),
                                            }}, "modi") {{
                                billingPeriodRange = new BatchDisassociateResourcesFromCustomLineItemRequestBodyBillingPeriodRange() {{
                                    exclusiveEndBillingPeriod = "qui";
                                    inclusiveStartBillingPeriod = "impedit";
                                }};;
                            }};) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "esse";
                xAmzCredential = "ipsum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "ad";
            }};            

            BatchDisassociateResourcesFromCustomLineItemResponse res = sdk.sdk.batchDisassociateResourcesFromCustomLineItem(req);

            if (res.batchDisassociateResourcesFromCustomLineItemOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBillingGroup

 Creates a billing group that resembles a consolidated billing family that Amazon Web Services charges, based off of the predefined pricing plan computation. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBillingGroupRequest;
import org.openapis.openapi.models.operations.CreateBillingGroupRequestBody;
import org.openapis.openapi.models.operations.CreateBillingGroupRequestBodyAccountGrouping;
import org.openapis.openapi.models.operations.CreateBillingGroupRequestBodyComputationPreference;
import org.openapis.openapi.models.operations.CreateBillingGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBillingGroupRequest req = new CreateBillingGroupRequest(                new CreateBillingGroupRequestBody(                new CreateBillingGroupRequestBodyAccountGrouping() {{
                                                linkedAccountIds = new String[]{{
                                                    add("iste"),
                                                }};
                                            }};,                 new CreateBillingGroupRequestBodyComputationPreference() {{
                                                pricingPlanArn = "dolor";
                                            }};, "natus") {{
                                description = "laboriosam";
                                primaryAccountId = "hic";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("fuga", "in");
                                    put("corporis", "iste");
                                    put("iure", "saepe");
                                    put("quidem", "architecto");
                                }};
                            }};) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "est";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "dolorem";
                xAmznClientToken = "corporis";
            }};            

            CreateBillingGroupResponse res = sdk.sdk.createBillingGroup(req);

            if (res.createBillingGroupOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCustomLineItem

 Creates a custom line item that can be used to create a one-time fixed charge that can be applied to a single billing group for the current or previous billing period. The one-time fixed charge is either a fee or discount. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCustomLineItemRequest;
import org.openapis.openapi.models.operations.CreateCustomLineItemRequestBody;
import org.openapis.openapi.models.operations.CreateCustomLineItemRequestBodyBillingPeriodRange;
import org.openapis.openapi.models.operations.CreateCustomLineItemRequestBodyChargeDetails;
import org.openapis.openapi.models.operations.CreateCustomLineItemResponse;
import org.openapis.openapi.models.shared.CustomLineItemFlatChargeDetails;
import org.openapis.openapi.models.shared.CustomLineItemPercentageChargeDetails;
import org.openapis.openapi.models.shared.CustomLineItemTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCustomLineItemRequest req = new CreateCustomLineItemRequest(                new CreateCustomLineItemRequestBody("nobis",                 new CreateCustomLineItemRequestBodyChargeDetails() {{
                                                flat = new CustomLineItemFlatChargeDetails(3154.28);;
                                                percentage = new CustomLineItemPercentageChargeDetails(6078.31) {{
                                                    associatedValues = new String[]{{
                                                        add("minima"),
                                                        add("excepturi"),
                                                    }};
                                                }};;
                                                type = CustomLineItemTypeEnum.CREDIT;
                                            }};, "iure", "culpa") {{
                                billingPeriodRange = new CreateCustomLineItemRequestBodyBillingPeriodRange() {{
                                    exclusiveEndBillingPeriod = "doloribus";
                                    inclusiveStartBillingPeriod = "sapiente";
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("mollitia", "dolorem");
                                }};
                            }};) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "repellat";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "commodi";
                xAmznClientToken = "quam";
            }};            

            CreateCustomLineItemResponse res = sdk.sdk.createCustomLineItem(req);

            if (res.createCustomLineItemOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPricingPlan

Creates a pricing plan that is used for computing Amazon Web Services charges for billing groups. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePricingPlanRequest;
import org.openapis.openapi.models.operations.CreatePricingPlanRequestBody;
import org.openapis.openapi.models.operations.CreatePricingPlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePricingPlanRequest req = new CreatePricingPlanRequest(                new CreatePricingPlanRequestBody("velit") {{
                                description = "error";
                                pricingRuleArns = new String[]{{
                                    add("quis"),
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("laborum", "animi");
                                }};
                            }};) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "odit";
                xAmzCredential = "quo";
                xAmzDate = "sequi";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "id";
                xAmznClientToken = "possimus";
            }};            

            CreatePricingPlanResponse res = sdk.sdk.createPricingPlan(req);

            if (res.createPricingPlanOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPricingRule

 Creates a pricing rule can be associated to a pricing plan, or a set of pricing plans. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePricingRuleRequest;
import org.openapis.openapi.models.operations.CreatePricingRuleRequestBody;
import org.openapis.openapi.models.operations.CreatePricingRuleRequestBodyScopeEnum;
import org.openapis.openapi.models.operations.CreatePricingRuleRequestBodyTiering;
import org.openapis.openapi.models.operations.CreatePricingRuleRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.CreatePricingRuleResponse;
import org.openapis.openapi.models.shared.CreateFreeTierConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePricingRuleRequest req = new CreatePricingRuleRequest(                new CreatePricingRuleRequestBody("quasi", CreatePricingRuleRequestBodyScopeEnum.BILLING_ENTITY, CreatePricingRuleRequestBodyTypeEnum.TIERING) {{
                                billingEntity = "laborum";
                                description = "quasi";
                                modifierPercentage = 9719.45;
                                operation = "voluptatibus";
                                service = "vero";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("praesentium", "voluptatibus");
                                    put("ipsa", "omnis");
                                }};
                                tiering = new CreatePricingRuleRequestBodyTiering() {{
                                    freeTier = new CreateFreeTierConfig(false);;
                                }};;
                                usageType = "voluptate";
                            }};) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "doloremque";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "ut";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "dicta";
                xAmznClientToken = "corporis";
            }};            

            CreatePricingRuleResponse res = sdk.sdk.createPricingRule(req);

            if (res.createPricingRuleOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBillingGroup

 Deletes a billing group. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBillingGroupRequest;
import org.openapis.openapi.models.operations.DeleteBillingGroupRequestBody;
import org.openapis.openapi.models.operations.DeleteBillingGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteBillingGroupRequest req = new DeleteBillingGroupRequest(                new DeleteBillingGroupRequestBody("iusto");) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "harum";
                xAmzCredential = "enim";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "quae";
            }};            

            DeleteBillingGroupResponse res = sdk.sdk.deleteBillingGroup(req);

            if (res.deleteBillingGroupOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCustomLineItem

 Deletes the custom line item identified by the given ARN in the current, or previous billing period. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomLineItemRequest;
import org.openapis.openapi.models.operations.DeleteCustomLineItemRequestBody;
import org.openapis.openapi.models.operations.DeleteCustomLineItemRequestBodyBillingPeriodRange;
import org.openapis.openapi.models.operations.DeleteCustomLineItemResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCustomLineItemRequest req = new DeleteCustomLineItemRequest(                new DeleteCustomLineItemRequestBody("quidem") {{
                                billingPeriodRange = new DeleteCustomLineItemRequestBodyBillingPeriodRange() {{
                                    exclusiveEndBillingPeriod = "molestias";
                                    inclusiveStartBillingPeriod = "excepturi";
                                }};;
                            }};) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "modi";
                xAmzCredential = "praesentium";
                xAmzDate = "rem";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "repudiandae";
            }};            

            DeleteCustomLineItemResponse res = sdk.sdk.deleteCustomLineItem(req);

            if (res.deleteCustomLineItemOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePricingPlan

Deletes a pricing plan. The pricing plan must not be associated with any billing groups to delete successfully.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePricingPlanRequest;
import org.openapis.openapi.models.operations.DeletePricingPlanRequestBody;
import org.openapis.openapi.models.operations.DeletePricingPlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePricingPlanRequest req = new DeletePricingPlanRequest(                new DeletePricingPlanRequestBody("veritatis");) {{
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "enim";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "explicabo";
            }};            

            DeletePricingPlanResponse res = sdk.sdk.deletePricingPlan(req);

            if (res.deletePricingPlanOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePricingRule

 Deletes the pricing rule that's identified by the input Amazon Resource Name (ARN). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePricingRuleRequest;
import org.openapis.openapi.models.operations.DeletePricingRuleRequestBody;
import org.openapis.openapi.models.operations.DeletePricingRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePricingRuleRequest req = new DeletePricingRuleRequest(                new DeletePricingRuleRequestBody("distinctio");) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "labore";
                xAmzCredential = "modi";
                xAmzDate = "qui";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "quos";
            }};            

            DeletePricingRuleResponse res = sdk.sdk.deletePricingRule(req);

            if (res.deletePricingRuleOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateAccounts

Removes the specified list of account IDs from the given billing group. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateAccountsRequest;
import org.openapis.openapi.models.operations.DisassociateAccountsRequestBody;
import org.openapis.openapi.models.operations.DisassociateAccountsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateAccountsRequest req = new DisassociateAccountsRequest(                new DisassociateAccountsRequestBody(                new String[]{{
                                                add("assumenda"),
                                            }}, "ipsam");) {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "dolorum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "tempore";
            }};            

            DisassociateAccountsResponse res = sdk.sdk.disassociateAccounts(req);

            if (res.disassociateAccountsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociatePricingRules

 Disassociates a list of pricing rules from a pricing plan. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociatePricingRulesRequest;
import org.openapis.openapi.models.operations.DisassociatePricingRulesRequestBody;
import org.openapis.openapi.models.operations.DisassociatePricingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociatePricingRulesRequest req = new DisassociatePricingRulesRequest(                new DisassociatePricingRulesRequestBody("delectus",                 new String[]{{
                                                add("non"),
                                                add("eligendi"),
                                            }});) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "provident";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "sint";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "dolor";
            }};            

            DisassociatePricingRulesResponse res = sdk.sdk.disassociatePricingRules(req);

            if (res.disassociatePricingRulesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAccountAssociations

 This is a paginated call to list linked accounts that are linked to the payer account for the specified time period. If no information is provided, the current billing period is used. The response will optionally include the billing group that's associated with the linked account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAccountAssociationsRequest;
import org.openapis.openapi.models.operations.ListAccountAssociationsRequestBody;
import org.openapis.openapi.models.operations.ListAccountAssociationsRequestBodyFilters;
import org.openapis.openapi.models.operations.ListAccountAssociationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAccountAssociationsRequest req = new ListAccountAssociationsRequest(                new ListAccountAssociationsRequestBody() {{
                                billingPeriod = "a";
                                filters = new ListAccountAssociationsRequestBodyFilters() {{
                                    accountId = "dolorum";
                                    accountIds = new String[]{{
                                        add("in"),
                                        add("illum"),
                                    }};
                                    association = "maiores";
                                }};;
                                nextToken = "rerum";
                            }};) {{
                nextToken = "dicta";
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "facere";
                xAmzDate = "ea";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "accusamus";
            }};            

            ListAccountAssociationsResponse res = sdk.sdk.listAccountAssociations(req);

            if (res.listAccountAssociationsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBillingGroupCostReports

A paginated call to retrieve a summary report of actual Amazon Web Services charges and the calculated Amazon Web Services charges based on the associated pricing plan of a billing group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBillingGroupCostReportsRequest;
import org.openapis.openapi.models.operations.ListBillingGroupCostReportsRequestBody;
import org.openapis.openapi.models.operations.ListBillingGroupCostReportsRequestBodyFilters;
import org.openapis.openapi.models.operations.ListBillingGroupCostReportsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBillingGroupCostReportsRequest req = new ListBillingGroupCostReportsRequest(                new ListBillingGroupCostReportsRequestBody() {{
                                billingPeriod = "occaecati";
                                filters = new ListBillingGroupCostReportsRequestBodyFilters() {{
                                    billingGroupArns = new String[]{{
                                        add("accusamus"),
                                        add("delectus"),
                                    }};
                                }};;
                                maxResults = 692532L;
                                nextToken = "provident";
                            }};) {{
                maxResults = "nam";
                nextToken = "id";
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "sapiente";
                xAmzDate = "amet";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "vel";
            }};            

            ListBillingGroupCostReportsResponse res = sdk.sdk.listBillingGroupCostReports(req);

            if (res.listBillingGroupCostReportsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBillingGroups

A paginated call to retrieve a list of billing groups for the given billing period. If you don't provide a billing group, the current billing period is used.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBillingGroupsRequest;
import org.openapis.openapi.models.operations.ListBillingGroupsRequestBody;
import org.openapis.openapi.models.operations.ListBillingGroupsRequestBodyFilters;
import org.openapis.openapi.models.operations.ListBillingGroupsResponse;
import org.openapis.openapi.models.shared.BillingGroupStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBillingGroupsRequest req = new ListBillingGroupsRequest(                new ListBillingGroupsRequestBody() {{
                                billingPeriod = "omnis";
                                filters = new ListBillingGroupsRequestBodyFilters() {{
                                    arns = new String[]{{
                                        add("perferendis"),
                                        add("nihil"),
                                    }};
                                    pricingPlan = "magnam";
                                    statuses = new org.openapis.openapi.models.shared.BillingGroupStatusEnum[]{{
                                        add(BillingGroupStatusEnum.PRIMARY_ACCOUNT_MISSING),
                                        add(BillingGroupStatusEnum.ACTIVE),
                                        add(BillingGroupStatusEnum.ACTIVE),
                                    }};
                                }};;
                                maxResults = 383462L;
                                nextToken = "natus";
                            }};) {{
                maxResults = "nobis";
                nextToken = "eum";
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "architecto";
                xAmzDate = "magnam";
                xAmzSecurityToken = "et";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "ullam";
            }};            

            ListBillingGroupsResponse res = sdk.sdk.listBillingGroups(req);

            if (res.listBillingGroupsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCustomLineItemVersions

A paginated call to get a list of all custom line item versions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCustomLineItemVersionsRequest;
import org.openapis.openapi.models.operations.ListCustomLineItemVersionsRequestBody;
import org.openapis.openapi.models.operations.ListCustomLineItemVersionsRequestBodyFilters;
import org.openapis.openapi.models.operations.ListCustomLineItemVersionsResponse;
import org.openapis.openapi.models.shared.ListCustomLineItemVersionsBillingPeriodRangeFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCustomLineItemVersionsRequest req = new ListCustomLineItemVersionsRequest(                new ListCustomLineItemVersionsRequestBody("quos") {{
                                filters = new ListCustomLineItemVersionsRequestBodyFilters() {{
                                    billingPeriodRange = new ListCustomLineItemVersionsBillingPeriodRangeFilter() {{
                                        endBillingPeriod = "sint";
                                        startBillingPeriod = "accusantium";
                                    }};;
                                }};;
                                maxResults = 653201L;
                                nextToken = "reiciendis";
                            }};) {{
                maxResults = "mollitia";
                nextToken = "ad";
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "necessitatibus";
                xAmzDate = "odit";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "iure";
            }};            

            ListCustomLineItemVersionsResponse res = sdk.sdk.listCustomLineItemVersions(req);

            if (res.listCustomLineItemVersionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCustomLineItems

 A paginated call to get a list of all custom line items (FFLIs) for the given billing period. If you don't provide a billing period, the current billing period is used. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCustomLineItemsRequest;
import org.openapis.openapi.models.operations.ListCustomLineItemsRequestBody;
import org.openapis.openapi.models.operations.ListCustomLineItemsRequestBodyFilters;
import org.openapis.openapi.models.operations.ListCustomLineItemsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCustomLineItemsRequest req = new ListCustomLineItemsRequest(                new ListCustomLineItemsRequestBody() {{
                                billingPeriod = "debitis";
                                filters = new ListCustomLineItemsRequestBodyFilters() {{
                                    arns = new String[]{{
                                        add("maxime"),
                                        add("deleniti"),
                                    }};
                                    billingGroups = new String[]{{
                                        add("in"),
                                        add("architecto"),
                                        add("architecto"),
                                    }};
                                    names = new String[]{{
                                        add("ullam"),
                                        add("expedita"),
                                        add("nihil"),
                                        add("repellat"),
                                    }};
                                }};;
                                maxResults = 841140L;
                                nextToken = "sed";
                            }};) {{
                maxResults = "saepe";
                nextToken = "pariatur";
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "praesentium";
                xAmzDate = "natus";
                xAmzSecurityToken = "magni";
                xAmzSignature = "sunt";
                xAmzSignedHeaders = "quo";
            }};            

            ListCustomLineItemsResponse res = sdk.sdk.listCustomLineItems(req);

            if (res.listCustomLineItemsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPricingPlans

A paginated call to get pricing plans for the given billing period. If you don't provide a billing period, the current billing period is used. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPricingPlansRequest;
import org.openapis.openapi.models.operations.ListPricingPlansRequestBody;
import org.openapis.openapi.models.operations.ListPricingPlansRequestBodyFilters;
import org.openapis.openapi.models.operations.ListPricingPlansResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPricingPlansRequest req = new ListPricingPlansRequest(                new ListPricingPlansRequestBody() {{
                                billingPeriod = "pariatur";
                                filters = new ListPricingPlansRequestBodyFilters() {{
                                    arns = new String[]{{
                                        add("ea"),
                                        add("excepturi"),
                                        add("odit"),
                                        add("ea"),
                                    }};
                                }};;
                                maxResults = 33222L;
                                nextToken = "ab";
                            }};) {{
                maxResults = "maiores";
                nextToken = "quidem";
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "autem";
                xAmzDate = "nam";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "nemo";
            }};            

            ListPricingPlansResponse res = sdk.sdk.listPricingPlans(req);

            if (res.listPricingPlansOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPricingPlansAssociatedWithPricingRule

 A list of the pricing plans that are associated with a pricing rule. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPricingPlansAssociatedWithPricingRuleRequest;
import org.openapis.openapi.models.operations.ListPricingPlansAssociatedWithPricingRuleRequestBody;
import org.openapis.openapi.models.operations.ListPricingPlansAssociatedWithPricingRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPricingPlansAssociatedWithPricingRuleRequest req = new ListPricingPlansAssociatedWithPricingRuleRequest(                new ListPricingPlansAssociatedWithPricingRuleRequestBody("perferendis") {{
                                billingPeriod = "fugiat";
                                maxResults = 230742L;
                                nextToken = "aut";
                            }};) {{
                maxResults = "cumque";
                nextToken = "corporis";
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "libero";
                xAmzCredential = "nobis";
                xAmzDate = "dolores";
                xAmzSecurityToken = "quis";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "dignissimos";
            }};            

            ListPricingPlansAssociatedWithPricingRuleResponse res = sdk.sdk.listPricingPlansAssociatedWithPricingRule(req);

            if (res.listPricingPlansAssociatedWithPricingRuleOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPricingRules

 Describes a pricing rule that can be associated to a pricing plan, or set of pricing plans. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPricingRulesRequest;
import org.openapis.openapi.models.operations.ListPricingRulesRequestBody;
import org.openapis.openapi.models.operations.ListPricingRulesRequestBodyFilters;
import org.openapis.openapi.models.operations.ListPricingRulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPricingRulesRequest req = new ListPricingRulesRequest(                new ListPricingRulesRequestBody() {{
                                billingPeriod = "quis";
                                filters = new ListPricingRulesRequestBodyFilters() {{
                                    arns = new String[]{{
                                        add("eos"),
                                    }};
                                }};;
                                maxResults = 18521L;
                                nextToken = "dolores";
                            }};) {{
                maxResults = "minus";
                nextToken = "quam";
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nostrum";
                xAmzDate = "hic";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "facilis";
            }};            

            ListPricingRulesResponse res = sdk.sdk.listPricingRules(req);

            if (res.listPricingRulesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPricingRulesAssociatedToPricingPlan

 Lists the pricing rules that are associated with a pricing plan. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPricingRulesAssociatedToPricingPlanRequest;
import org.openapis.openapi.models.operations.ListPricingRulesAssociatedToPricingPlanRequestBody;
import org.openapis.openapi.models.operations.ListPricingRulesAssociatedToPricingPlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPricingRulesAssociatedToPricingPlanRequest req = new ListPricingRulesAssociatedToPricingPlanRequest(                new ListPricingRulesAssociatedToPricingPlanRequestBody("voluptatem") {{
                                billingPeriod = "porro";
                                maxResults = 164694L;
                                nextToken = "blanditiis";
                            }};) {{
                maxResults = "error";
                nextToken = "eaque";
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "adipisci";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "earum";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "iste";
            }};            

            ListPricingRulesAssociatedToPricingPlanResponse res = sdk.sdk.listPricingRulesAssociatedToPricingPlan(req);

            if (res.listPricingRulesAssociatedToPricingPlanOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResourcesAssociatedToCustomLineItem

 List the resources that are associated to a custom line item. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourcesAssociatedToCustomLineItemRequest;
import org.openapis.openapi.models.operations.ListResourcesAssociatedToCustomLineItemRequestBody;
import org.openapis.openapi.models.operations.ListResourcesAssociatedToCustomLineItemRequestBodyFilters;
import org.openapis.openapi.models.operations.ListResourcesAssociatedToCustomLineItemResponse;
import org.openapis.openapi.models.shared.CustomLineItemRelationshipEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourcesAssociatedToCustomLineItemRequest req = new ListResourcesAssociatedToCustomLineItemRequest(                new ListResourcesAssociatedToCustomLineItemRequestBody("deleniti") {{
                                billingPeriod = "pariatur";
                                filters = new ListResourcesAssociatedToCustomLineItemRequestBodyFilters() {{
                                    relationship = CustomLineItemRelationshipEnum.CHILD;
                                }};;
                                maxResults = 750844L;
                                nextToken = "libero";
                            }};) {{
                maxResults = "delectus";
                nextToken = "quaerat";
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "dolorem";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "ipsum";
            }};            

            ListResourcesAssociatedToCustomLineItemResponse res = sdk.sdk.listResourcesAssociatedToCustomLineItem(req);

            if (res.listResourcesAssociatedToCustomLineItemOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

 A list the tags for a resource. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("excepturi") {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "dignissimos";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "amet";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "numquam";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

 Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("ipsa", "iure");
                                            }});, "odio") {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "quidem";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "eos";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

 Deletes specified tags from a resource. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("sit",                 new String[]{{
                                add("ab"),
                                add("soluta"),
                                add("dolorum"),
                                add("iusto"),
                            }}) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "deleniti";
                xAmzDate = "omnis";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "asperiores";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBillingGroup

This updates an existing billing group. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBillingGroupRequest;
import org.openapis.openapi.models.operations.UpdateBillingGroupRequestBody;
import org.openapis.openapi.models.operations.UpdateBillingGroupRequestBodyComputationPreference;
import org.openapis.openapi.models.operations.UpdateBillingGroupRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.UpdateBillingGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateBillingGroupRequest req = new UpdateBillingGroupRequest(                new UpdateBillingGroupRequestBody("ipsum") {{
                                computationPreference = new UpdateBillingGroupRequestBodyComputationPreference() {{
                                    pricingPlanArn = "voluptate";
                                }};;
                                description = "id";
                                name = "saepe";
                                status = UpdateBillingGroupRequestBodyStatusEnum.ACTIVE;
                            }};) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "amet";
                xAmzDate = "optio";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "saepe";
            }};            

            UpdateBillingGroupResponse res = sdk.sdk.updateBillingGroup(req);

            if (res.updateBillingGroupOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCustomLineItem

 Update an existing custom line item in the current or previous billing period. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCustomLineItemRequest;
import org.openapis.openapi.models.operations.UpdateCustomLineItemRequestBody;
import org.openapis.openapi.models.operations.UpdateCustomLineItemRequestBodyBillingPeriodRange;
import org.openapis.openapi.models.operations.UpdateCustomLineItemRequestBodyChargeDetails;
import org.openapis.openapi.models.operations.UpdateCustomLineItemResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateCustomLineItemFlatChargeDetails;
import org.openapis.openapi.models.shared.UpdateCustomLineItemPercentageChargeDetails;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCustomLineItemRequest req = new UpdateCustomLineItemRequest(                new UpdateCustomLineItemRequestBody("deserunt") {{
                                billingPeriodRange = new UpdateCustomLineItemRequestBodyBillingPeriodRange() {{
                                    exclusiveEndBillingPeriod = "provident";
                                    inclusiveStartBillingPeriod = "minima";
                                }};;
                                chargeDetails = new UpdateCustomLineItemRequestBodyChargeDetails() {{
                                    flat = new UpdateCustomLineItemFlatChargeDetails(8310.49);;
                                    percentage = new UpdateCustomLineItemPercentageChargeDetails(5197.11);;
                                }};;
                                description = "similique";
                                name = "alias";
                            }};) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "tempora";
                xAmzDate = "vel";
                xAmzSecurityToken = "quod";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "qui";
            }};            

            UpdateCustomLineItemResponse res = sdk.sdk.updateCustomLineItem(req);

            if (res.updateCustomLineItemOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePricingPlan

This updates an existing pricing plan. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePricingPlanRequest;
import org.openapis.openapi.models.operations.UpdatePricingPlanRequestBody;
import org.openapis.openapi.models.operations.UpdatePricingPlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePricingPlanRequest req = new UpdatePricingPlanRequest(                new UpdatePricingPlanRequestBody("a") {{
                                description = "esse";
                                name = "harum";
                            }};) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "quisquam";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "amet";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "accusamus";
            }};            

            UpdatePricingPlanResponse res = sdk.sdk.updatePricingPlan(req);

            if (res.updatePricingPlanOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePricingRule

 Updates an existing pricing rule. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePricingRuleRequest;
import org.openapis.openapi.models.operations.UpdatePricingRuleRequestBody;
import org.openapis.openapi.models.operations.UpdatePricingRuleRequestBodyTiering;
import org.openapis.openapi.models.operations.UpdatePricingRuleRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.UpdatePricingRuleResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateFreeTierConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePricingRuleRequest req = new UpdatePricingRuleRequest(                new UpdatePricingRuleRequestBody("enim") {{
                                description = "dolorem";
                                modifierPercentage = 9574.51;
                                name = "totam";
                                tiering = new UpdatePricingRuleRequestBodyTiering() {{
                                    freeTier = new UpdateFreeTierConfig(false);;
                                }};;
                                type = UpdatePricingRuleRequestBodyTypeEnum.DISCOUNT;
                            }};) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "neque";
                xAmzDate = "sed";
                xAmzSecurityToken = "vel";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "voluptas";
            }};            

            UpdatePricingRuleResponse res = sdk.sdk.updatePricingRule(req);

            if (res.updatePricingRuleOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
