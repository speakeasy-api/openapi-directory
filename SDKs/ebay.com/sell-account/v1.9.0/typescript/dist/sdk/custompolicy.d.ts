import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomPolicy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * This method creates a new custom policy in which a seller specifies their terms for complying with local governmental regulations. <br/><br/>Two Custom Policy types are supported: <ul><li>Product Compliance (PRODUCT_COMPLIANCE)</li> <li>Takeback (TAKE_BACK)</li></ul>Each Custom Policy targets a <b>policyType</b> and <b>eBay marketplace</b> combination. Multiple policies may be created as follows: <ul><li><b>Product Compliance</b>: a maximum of 10 policies per eBay marketplace may be created</li> <li><b>Takeback</b>: a maximum of 3 policies per eBay marketplace may be created</li></ul>A successful create policy call returns an HTTP status code of <b>201 Created</b> with the system-generated policy ID included in the <b>Location</b> response header.<br/><br/><b>Product Compliance Policy</b><br/><br/>Product Compliance policies disclose product information as required for regulatory compliance.<br/><br/><span class="tablenote"><strong>Note:</strong> A maximum of 10 Product Compliance policies per eBay marketplace may be created.</span> <br/><br/> <b>Takeback Policy</b><br/><br/>Takeback policies describe the seller's legal obligation to take back a previously purchased item when the buyer purchases a new one.<br/><br/><span class="tablenote"><strong>Note:</strong> A maximum of 3 Takeback policies per eBay marketplace may be created.</span>
     */
    createCustomPolicy(req: operations.CreateCustomPolicyRequest, security: operations.CreateCustomPolicySecurity, config?: AxiosRequestConfig): Promise<operations.CreateCustomPolicyResponse>;
    /**
     * This method retrieves the list of custom policies specified by the <b>policy_types</b> query parameter for the selected eBay marketplace.<br/> <br/> <span class="tablenote"><strong>Note:</strong> The following eBay marketplaces support Custom Policies: <ul><li>Germany (EBAY_DE)</li> <li>Canada (EBAY_CA)</li> <li>Australia (EBAY_AU)</li> <li>United States (EBAY_US)</li> <li>France (EBAY_FR)</li></ul></span><br/><br/>For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.
     */
    getCustomPolicies(req: operations.GetCustomPoliciesRequest, security: operations.GetCustomPoliciesSecurity, config?: AxiosRequestConfig): Promise<operations.GetCustomPoliciesResponse>;
    /**
     * This method retrieves the custom policy specified by the <b>custom_policy_id</b> path parameter for the selected eBay marketplace.<br/> <br/> <span class="tablenote"><strong>Note:</strong> The following eBay marketplaces support Custom Policies: <ul><li>Germany (EBAY_DE)</li> <li>Canada (EBAY_CA)</li> <li>Australia (EBAY_AU)</li> <li>United States (EBAY_US)</li> <li>France (EBAY_FR)</li></ul></span><br/><br/>For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.
     */
    getCustomPolicy(req: operations.GetCustomPolicyRequest, security: operations.GetCustomPolicySecurity, config?: AxiosRequestConfig): Promise<operations.GetCustomPolicyResponse>;
    /**
     * This method updates an existing custom policy specified by the <b>custom_policy_id</b> path parameter for the selected marketplace. This method overwrites the policy's <b>Name</b>, <b>Label</b>, and <b>Description</b> fields. Therefore, the complete, current text of all three policy fields must be included in the request payload even when one or two of these fields will not actually be updated.<br/> <br/>For example, the value for the <b>Label</b> field is to be updated, but the <b>Name</b> and <b>Description</b> values will remain unchanged. The existing <b>Name</b> and <b>Description</b> values, as they are defined in the current policy, must also be passed in. <br/><br/>A successful policy update call returns an HTTP status code of <b>204 No Content</b>.<br/><br/><span class="tablenote"><strong>Note:</strong> The following eBay marketplaces support Custom Policies: <ul><li>Germany (EBAY_DE)</li> <li>Canada (EBAY_CA)</li> <li>Australia (EBAY_AU)</li> <li>United States (EBAY_US)</li> <li>France (EBAY_FR)</li></ul></span><br/><br/>For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.
     */
    updateCustomPolicy(req: operations.UpdateCustomPolicyRequest, security: operations.UpdateCustomPolicySecurity, config?: AxiosRequestConfig): Promise<operations.UpdateCustomPolicyResponse>;
}
