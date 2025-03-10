import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This container defines a seller's custom policy identified by policy ID for the selected eBay marketplace. A successful call returns the requested policy information.
 */
export declare class CustomPolicy extends SpeakeasyBase {
    /**
     * The unique custom policy identifier for a policy.<br/><br/><span class="tablenote"><strong>Note:</strong> This value is automatically assigned by the system when the policy is created.</span>
     */
    customPolicyId?: string;
    /**
     * Details of the seller's specific policy and terms associated with the policy. Buyers access this information from the View Item page for items to which the policy has been applied.<br/><br/><b>Max length:</b> 15,000
     */
    description?: string;
    /**
     * Customer-facing label shown on View Item pages for items to which the policy applies. This seller-defined string is displayed as a system-generated hyperlink pointing to detailed policy information.<br/><br/><b>Max length:</b> 65
     */
    label?: string;
    /**
     * The seller-defined name for the custom policy. Names must be unique for policies assigned to the same seller, policy type, and eBay marketplace.<br /><span class="tablenote"><strong>Note:</strong> This field is visible only to the seller. </span><br/><br/><b>Max length:</b> 65
     */
    name?: string;
    /**
     * Specifies the type of Custom Policy. <br/><br/>Two Custom Policy types are supported: <ul><li>Product Compliance (PRODUCT_COMPLIANCE)</li> <li>Takeback (TAKE_BACK)</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/account/types/api:CustomPolicyTypeEnum'>eBay API documentation</a>
     */
    policyType?: string;
}
