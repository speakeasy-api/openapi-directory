import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://billingconductor.{region}.amazonaws.com", "https://billingconductor.{region}.amazonaws.com", "http://billingconductor.{region}.amazonaws.com.cn", "https://billingconductor.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * <p>Amazon Web Services Billing Conductor is a fully managed service that you can use to customize a <a href="https://docs.aws.amazon.com/billingconductor/latest/userguide/understanding-eb.html#eb-other-definitions">pro forma</a> version of your billing data each month, to accurately show or chargeback your end customers. Amazon Web Services Billing Conductor doesn't change the way you're billed by Amazon Web Services each month by design. Instead, it provides you with a mechanism to configure, generate, and display rates to certain customers over a given billing period. You can also analyze the difference between the rates you apply to your accounting groupings relative to your actual rates from Amazon Web Services. As a result of your Amazon Web Services Billing Conductor configuration, the payer account can also see the custom rate applied on the billing details page of the <a href="https://console.aws.amazon.com/billing">Amazon Web Services Billing console</a>, or configure a cost and usage report per billing group.</p> <p>This documentation shows how you can configure Amazon Web Services Billing Conductor using its API. For more information about using the <a href="https://console.aws.amazon.com/billingconductor/">Amazon Web Services Billing Conductor</a> user interface, see the <a href="https://docs.aws.amazon.com/billingconductor/latest/userguide/what-is-billingconductor.html"> Amazon Web Services Billing Conductor User Guide</a>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/billingconductor/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Connects an array of account IDs in a consolidated billing family to a predefined billing group. The account IDs must be a part of the consolidated billing family during the current month, and not already associated with another billing group. The maximum number of accounts that can be associated in one call is 30.
     */
    associateAccounts(req: operations.AssociateAccountsRequest, config?: AxiosRequestConfig): Promise<operations.AssociateAccountsResponse>;
    /**
     * Connects an array of <code>PricingRuleArns</code> to a defined <code>PricingPlan</code>. The maximum number <code>PricingRuleArn</code> that can be associated in one call is 30.
     */
    associatePricingRules(req: operations.AssociatePricingRulesRequest, config?: AxiosRequestConfig): Promise<operations.AssociatePricingRulesResponse>;
    /**
     *  Associates a batch of resources to a percentage custom line item.
     */
    batchAssociateResourcesToCustomLineItem(req: operations.BatchAssociateResourcesToCustomLineItemRequest, config?: AxiosRequestConfig): Promise<operations.BatchAssociateResourcesToCustomLineItemResponse>;
    /**
     *  Disassociates a batch of resources from a percentage custom line item.
     */
    batchDisassociateResourcesFromCustomLineItem(req: operations.BatchDisassociateResourcesFromCustomLineItemRequest, config?: AxiosRequestConfig): Promise<operations.BatchDisassociateResourcesFromCustomLineItemResponse>;
    /**
     *  Creates a billing group that resembles a consolidated billing family that Amazon Web Services charges, based off of the predefined pricing plan computation.
     */
    createBillingGroup(req: operations.CreateBillingGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateBillingGroupResponse>;
    /**
     *  Creates a custom line item that can be used to create a one-time fixed charge that can be applied to a single billing group for the current or previous billing period. The one-time fixed charge is either a fee or discount.
     */
    createCustomLineItem(req: operations.CreateCustomLineItemRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomLineItemResponse>;
    /**
     * Creates a pricing plan that is used for computing Amazon Web Services charges for billing groups.
     */
    createPricingPlan(req: operations.CreatePricingPlanRequest, config?: AxiosRequestConfig): Promise<operations.CreatePricingPlanResponse>;
    /**
     *  Creates a pricing rule can be associated to a pricing plan, or a set of pricing plans.
     */
    createPricingRule(req: operations.CreatePricingRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreatePricingRuleResponse>;
    /**
     *  Deletes a billing group.
     */
    deleteBillingGroup(req: operations.DeleteBillingGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBillingGroupResponse>;
    /**
     *  Deletes the custom line item identified by the given ARN in the current, or previous billing period.
     */
    deleteCustomLineItem(req: operations.DeleteCustomLineItemRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomLineItemResponse>;
    /**
     * Deletes a pricing plan. The pricing plan must not be associated with any billing groups to delete successfully.
     */
    deletePricingPlan(req: operations.DeletePricingPlanRequest, config?: AxiosRequestConfig): Promise<operations.DeletePricingPlanResponse>;
    /**
     *  Deletes the pricing rule that's identified by the input Amazon Resource Name (ARN).
     */
    deletePricingRule(req: operations.DeletePricingRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeletePricingRuleResponse>;
    /**
     * Removes the specified list of account IDs from the given billing group.
     */
    disassociateAccounts(req: operations.DisassociateAccountsRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateAccountsResponse>;
    /**
     *  Disassociates a list of pricing rules from a pricing plan.
     */
    disassociatePricingRules(req: operations.DisassociatePricingRulesRequest, config?: AxiosRequestConfig): Promise<operations.DisassociatePricingRulesResponse>;
    /**
     *  This is a paginated call to list linked accounts that are linked to the payer account for the specified time period. If no information is provided, the current billing period is used. The response will optionally include the billing group that's associated with the linked account.
     */
    listAccountAssociations(req: operations.ListAccountAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.ListAccountAssociationsResponse>;
    /**
     * A paginated call to retrieve a summary report of actual Amazon Web Services charges and the calculated Amazon Web Services charges based on the associated pricing plan of a billing group.
     */
    listBillingGroupCostReports(req: operations.ListBillingGroupCostReportsRequest, config?: AxiosRequestConfig): Promise<operations.ListBillingGroupCostReportsResponse>;
    /**
     * A paginated call to retrieve a list of billing groups for the given billing period. If you don't provide a billing group, the current billing period is used.
     */
    listBillingGroups(req: operations.ListBillingGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListBillingGroupsResponse>;
    /**
     * A paginated call to get a list of all custom line item versions.
     */
    listCustomLineItemVersions(req: operations.ListCustomLineItemVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomLineItemVersionsResponse>;
    /**
     *  A paginated call to get a list of all custom line items (FFLIs) for the given billing period. If you don't provide a billing period, the current billing period is used.
     */
    listCustomLineItems(req: operations.ListCustomLineItemsRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomLineItemsResponse>;
    /**
     * A paginated call to get pricing plans for the given billing period. If you don't provide a billing period, the current billing period is used.
     */
    listPricingPlans(req: operations.ListPricingPlansRequest, config?: AxiosRequestConfig): Promise<operations.ListPricingPlansResponse>;
    /**
     *  A list of the pricing plans that are associated with a pricing rule.
     */
    listPricingPlansAssociatedWithPricingRule(req: operations.ListPricingPlansAssociatedWithPricingRuleRequest, config?: AxiosRequestConfig): Promise<operations.ListPricingPlansAssociatedWithPricingRuleResponse>;
    /**
     *  Describes a pricing rule that can be associated to a pricing plan, or set of pricing plans.
     */
    listPricingRules(req: operations.ListPricingRulesRequest, config?: AxiosRequestConfig): Promise<operations.ListPricingRulesResponse>;
    /**
     *  Lists the pricing rules that are associated with a pricing plan.
     */
    listPricingRulesAssociatedToPricingPlan(req: operations.ListPricingRulesAssociatedToPricingPlanRequest, config?: AxiosRequestConfig): Promise<operations.ListPricingRulesAssociatedToPricingPlanResponse>;
    /**
     *  List the resources that are associated to a custom line item.
     */
    listResourcesAssociatedToCustomLineItem(req: operations.ListResourcesAssociatedToCustomLineItemRequest, config?: AxiosRequestConfig): Promise<operations.ListResourcesAssociatedToCustomLineItemResponse>;
    /**
     *  A list the tags for a resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     *  Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     *  Deletes specified tags from a resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * This updates an existing billing group.
     */
    updateBillingGroup(req: operations.UpdateBillingGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBillingGroupResponse>;
    /**
     *  Update an existing custom line item in the current or previous billing period.
     */
    updateCustomLineItem(req: operations.UpdateCustomLineItemRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCustomLineItemResponse>;
    /**
     * This updates an existing pricing plan.
     */
    updatePricingPlan(req: operations.UpdatePricingPlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePricingPlanResponse>;
    /**
     *  Updates an existing pricing rule.
     */
    updatePricingRule(req: operations.UpdatePricingRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePricingRuleResponse>;
}
