import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ReturnPolicy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * This method creates a new return policy where the policy encapsulates seller's terms for returning items.  <br/><br/>Each policy targets a specific marketplace, and you can create multiple policies for each marketplace. Return policies are not applicable to motor-vehicle listings.<br/><br/>A successful request returns the <b>getReturnPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>
     */
    createReturnPolicy(req: shared.ReturnPolicyRequest, security: operations.CreateReturnPolicySecurity, config?: AxiosRequestConfig): Promise<operations.CreateReturnPolicyResponse>;
    /**
     * This method deletes a return policy. Supply the ID of the policy you want to delete in the <b>returnPolicyId</b> path parameter.
     */
    deleteReturnPolicy(req: operations.DeleteReturnPolicyRequest, security: operations.DeleteReturnPolicySecurity, config?: AxiosRequestConfig): Promise<operations.DeleteReturnPolicyResponse>;
    /**
     * This method retrieves all the return policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.
     */
    getReturnPolicies(req: operations.GetReturnPoliciesRequest, security: operations.GetReturnPoliciesSecurity, config?: AxiosRequestConfig): Promise<operations.GetReturnPoliciesResponse>;
    /**
     * This method retrieves the complete details of the return policy specified by the <b>returnPolicyId</b> path parameter.
     */
    getReturnPolicy(req: operations.GetReturnPolicyRequest, security: operations.GetReturnPolicySecurity, config?: AxiosRequestConfig): Promise<operations.GetReturnPolicyResponse>;
    /**
     * This method retrieves the details of a specific return policy. Supply both the policy <code>name</code> and its associated <code>marketplace_id</code> in the request query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.
     */
    getReturnPolicyByName(req: operations.GetReturnPolicyByNameRequest, security: operations.GetReturnPolicyByNameSecurity, config?: AxiosRequestConfig): Promise<operations.GetReturnPolicyByNameResponse>;
    /**
     * This method updates an existing return policy. Specify the policy you want to update using the <b>return_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.
     */
    updateReturnPolicy(req: operations.UpdateReturnPolicyRequest, security: operations.UpdateReturnPolicySecurity, config?: AxiosRequestConfig): Promise<operations.UpdateReturnPolicyResponse>;
}
