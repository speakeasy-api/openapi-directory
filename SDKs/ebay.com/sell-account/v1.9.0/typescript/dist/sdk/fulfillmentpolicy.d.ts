import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FulfillmentPolicy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * This method creates a new fulfillment policy where the policy encapsulates seller's terms for fulfilling item purchases. Fulfillment policies include the shipment options that the seller offers to buyers.  <br/><br/>Each policy targets a specific eBay marketplace and a category group type, and you can create multiple policies for each combination. <br/><br/>A successful request returns the <b>getFulfillmentPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>  <p><b>Using the eBay standard envelope service (eSE)</b></p>  <p>The eBay standard envelope service (eSE) is a domestic envelope service with tracking through eBay. This service applies to specific Trading Cards categories (not all categories are supported), and to Coins & Paper Money, Postcards, and Stamps. See <a href="/api-docs/sell/static/seller-accounts/using-the-ebay-standard-envelope-service.html" target="_blank">Using the eBay standard envelope (eSE) service</a>.</p>
     */
    createFulfillmentPolicy(req: shared.FulfillmentPolicyRequest, security: operations.CreateFulfillmentPolicySecurity, config?: AxiosRequestConfig): Promise<operations.CreateFulfillmentPolicyResponse>;
    /**
     * This method deletes a fulfillment policy. Supply the ID of the policy you want to delete in the <b>fulfillmentPolicyId</b> path parameter.
     */
    deleteFulfillmentPolicy(req: operations.DeleteFulfillmentPolicyRequest, security: operations.DeleteFulfillmentPolicySecurity, config?: AxiosRequestConfig): Promise<operations.DeleteFulfillmentPolicyResponse>;
    /**
     * This method retrieves all the fulfillment policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.
     */
    getFulfillmentPolicies(req: operations.GetFulfillmentPoliciesRequest, security: operations.GetFulfillmentPoliciesSecurity, config?: AxiosRequestConfig): Promise<operations.GetFulfillmentPoliciesResponse>;
    /**
     * This method retrieves the complete details of a fulfillment policy. Supply the ID of the policy you want to retrieve using the <b>fulfillmentPolicyId</b> path parameter.
     */
    getFulfillmentPolicy(req: operations.GetFulfillmentPolicyRequest, security: operations.GetFulfillmentPolicySecurity, config?: AxiosRequestConfig): Promise<operations.GetFulfillmentPolicyResponse>;
    /**
     * This method retrieves the details for a specific fulfillment policy. In the request, supply both the policy <code>name</code> and its associated <code>marketplace_id</code> as query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.
     */
    getFulfillmentPolicyByName(req: operations.GetFulfillmentPolicyByNameRequest, security: operations.GetFulfillmentPolicyByNameSecurity, config?: AxiosRequestConfig): Promise<operations.GetFulfillmentPolicyByNameResponse>;
    /**
     * This method updates an existing fulfillment policy. Specify the policy you want to update using the <b>fulfillment_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.
     */
    updateFulfillmentPolicy(req: operations.UpdateFulfillmentPolicyRequest, security: operations.UpdateFulfillmentPolicySecurity, config?: AxiosRequestConfig): Promise<operations.UpdateFulfillmentPolicyResponse>;
}
