import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ReturnPolicy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createReturnPolicy - This method creates a new return policy where the policy encapsulates seller's terms for returning items. Use the Metadata API method getReturnPolicies to determine which categories require you to supply a return policy for the marketplace(s) into which you list. Each policy targets a marketplaceId and categoryTypes.name combination and you can create multiple policies for each combination. A successful request returns the URI to the new policy in the Location response header and the ID for the new policy is returned in the response payload. Tip: For details on creating and using the business policies supported by the Account API, see eBay business policies. Marketplaces and locales Policy instructions can be localized by providing a locale in the Accept-Language HTTP request header. For example, the following setting displays field values from the request body in German: Accept-Language: de-DE. Target the specific locale of a marketplace that supports multiple locales using the Content-Language request header. For example, target the French locale of the Canadian marketplace by specifying the fr-CA locale for Content-Language. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. Tip: For details on headers, see HTTP request headers.
    **/
    createReturnPolicy(req: operations.CreateReturnPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateReturnPolicyResponse>;
    /**
     * deleteReturnPolicy - This method deletes a return policy. Supply the ID of the policy you want to delete in the returnPolicyId path parameter. Note that you cannot delete the default return policy.
    **/
    deleteReturnPolicy(req: operations.DeleteReturnPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReturnPolicyResponse>;
    /**
     * getReturnPolicies - This method retrieves all the return policies configured for the marketplace you specify using the marketplace_id query parameter. Marketplaces and locales Get the correct policies for a marketplace that supports multiple locales using the Content-Language request header. For example, get the policies for the French locale of the Canadian marketplace by specifying fr-CA for the Content-Language header. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. For details on header values, see HTTP request headers.
    **/
    getReturnPolicies(req: operations.GetReturnPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetReturnPoliciesResponse>;
    /**
     * getReturnPolicy - This method retrieves the complete details of the return policy specified by the returnPolicyId path parameter.
    **/
    getReturnPolicy(req: operations.GetReturnPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetReturnPolicyResponse>;
    /**
     * getReturnPolicyByName - This method retrieves the complete details of a single return policy. Supply both the policy name and its associated marketplace_id in the request query parameters. Marketplaces and locales Get the correct policy for a marketplace that supports multiple locales using the Content-Language request header. For example, get a policy for the French locale of the Canadian marketplace by specifying fr-CA for the Content-Language header. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. For details on header values, see HTTP request headers.
    **/
    getReturnPolicyByName(req: operations.GetReturnPolicyByNameRequest, config?: AxiosRequestConfig): Promise<operations.GetReturnPolicyByNameResponse>;
    /**
     * updateReturnPolicy - This method updates an existing return policy. Specify the policy you want to update using the return_policy_id path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.
    **/
    updateReturnPolicy(req: operations.UpdateReturnPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateReturnPolicyResponse>;
}
