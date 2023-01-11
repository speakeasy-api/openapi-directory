import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FulfillmentPolicy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createFulfillmentPolicy - This method creates a new fulfillment policy where the policy encapsulates seller's terms for fulfilling item purchases. Fulfillment policies include the shipment options that the seller offers to buyers. Each policy targets a marketplaceId and categoryTypes.name combination and you can create multiple policies for each combination. Be aware that some marketplaces require a specific fulfillment policy for vehicle listings. A successful request returns the URI to the new policy in the Location response header and the ID for the new policy is returned in the response payload. Tip: For details on creating and using the business policies supported by the Account API, see eBay business policies. Marketplaces and locales Policy instructions can be localized by providing a locale in the Accept-Language HTTP request header. For example, the following setting displays field values from the request body in German: Accept-Language: de-DE. Target the specific locale of a marketplace that supports multiple locales using the Content-Language request header. For example, target the French locale of the Canadian marketplace by specifying the fr-CA locale for Content-Language. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. Tip: For details on headers, see HTTP request headers.
    **/
    createFulfillmentPolicy(req: operations.CreateFulfillmentPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateFulfillmentPolicyResponse>;
    /**
     * deleteFulfillmentPolicy - This method deletes a fulfillment policy. Supply the ID of the policy you want to delete in the fulfillmentPolicyId path parameter. Note that you cannot delete the default fulfillment policy.
    **/
    deleteFulfillmentPolicy(req: operations.DeleteFulfillmentPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFulfillmentPolicyResponse>;
    /**
     * getFulfillmentPolicies - This method retrieves all the fulfillment policies configured for the marketplace you specify using the marketplace_id query parameter. Marketplaces and locales Get the correct policies for a marketplace that supports multiple locales using the Content-Language request header. For example, get the policies for the French locale of the Canadian marketplace by specifying fr-CA for the Content-Language header. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. For details on header values, see HTTP request headers.
    **/
    getFulfillmentPolicies(req: operations.GetFulfillmentPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetFulfillmentPoliciesResponse>;
    /**
     * getFulfillmentPolicy - This method retrieves the complete details of a fulfillment policy. Supply the ID of the policy you want to retrieve using the fulfillmentPolicyId path parameter.
    **/
    getFulfillmentPolicy(req: operations.GetFulfillmentPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetFulfillmentPolicyResponse>;
    /**
     * getFulfillmentPolicyByName - This method retrieves the complete details for a single fulfillment policy. In the request, supply both the policy name and its associated marketplace_id as query parameters. Marketplaces and locales Get the correct policy for a marketplace that supports multiple locales using the Content-Language request header. For example, get a policy for the French locale of the Canadian marketplace by specifying fr-CA for the Content-Language header. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. For details on header values, see HTTP request headers.
    **/
    getFulfillmentPolicyByName(req: operations.GetFulfillmentPolicyByNameRequest, config?: AxiosRequestConfig): Promise<operations.GetFulfillmentPolicyByNameResponse>;
    /**
     * updateFulfillmentPolicy - This method updates an existing fulfillment policy. Specify the policy you want to update using the fulfillment_policy_id path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.
    **/
    updateFulfillmentPolicy(req: operations.UpdateFulfillmentPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFulfillmentPolicyResponse>;
}
