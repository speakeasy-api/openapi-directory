import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PaymentPolicy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * This method creates a new payment policy where the policy encapsulates seller's terms for order payments.  <br/><br/>Each policy targets a specific eBay marketplace and category group, and you can create multiple policies for each combination.  <br/><br/>A successful request returns the <b>getPaymentPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>
     */
    createPaymentPolicy(req: shared.PaymentPolicyRequest, security: operations.CreatePaymentPolicySecurity, config?: AxiosRequestConfig): Promise<operations.CreatePaymentPolicyResponse>;
    /**
     * This method deletes a payment policy. Supply the ID of the policy you want to delete in the <b>paymentPolicyId</b> path parameter.
     */
    deletePaymentPolicy(req: operations.DeletePaymentPolicyRequest, security: operations.DeletePaymentPolicySecurity, config?: AxiosRequestConfig): Promise<operations.DeletePaymentPolicyResponse>;
    /**
     * This method retrieves all the payment policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.
     */
    getPaymentPolicies(req: operations.GetPaymentPoliciesRequest, security: operations.GetPaymentPoliciesSecurity, config?: AxiosRequestConfig): Promise<operations.GetPaymentPoliciesResponse>;
    /**
     * This method retrieves the complete details of a payment policy. Supply the ID of the policy you want to retrieve using the <b>paymentPolicyId</b> path parameter.
     */
    getPaymentPolicy(req: operations.GetPaymentPolicyRequest, security: operations.GetPaymentPolicySecurity, config?: AxiosRequestConfig): Promise<operations.GetPaymentPolicyResponse>;
    /**
     * This method retrieves the details of a specific payment policy. Supply both the policy <code>name</code> and its associated <code>marketplace_id</code> in the request query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.
     */
    getPaymentPolicyByName(req: operations.GetPaymentPolicyByNameRequest, security: operations.GetPaymentPolicyByNameSecurity, config?: AxiosRequestConfig): Promise<operations.GetPaymentPolicyByNameResponse>;
    /**
     * This method updates an existing payment policy. Specify the policy you want to update using the <b>payment_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.
     */
    updatePaymentPolicy(req: operations.UpdatePaymentPolicyRequest, security: operations.UpdatePaymentPolicySecurity, config?: AxiosRequestConfig): Promise<operations.UpdatePaymentPolicyResponse>;
}
