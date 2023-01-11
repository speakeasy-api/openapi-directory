import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PaymentPolicy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createPaymentPolicy - This method creates a new payment policy where the policy encapsulates seller's terms for purchase payments. Each policy targets a marketplaceId and categoryTypes.name combination and you can create multiple policies for each combination. Be aware that some marketplaces require a specific payment policy for vehicle listings. A successful request returns the URI to the new policy in the Location response header and the ID for the new policy is returned in the response payload. Tip: For details on creating and using the business policies supported by the Account API, see eBay business policies. Marketplaces and locales Policy instructions can be localized by providing a locale in the Accept-Language HTTP request header. For example, the following setting displays field values from the request body in German: Accept-Language: de-DE. Target the specific locale of a marketplace that supports multiple locales using the Content-Language request header. For example, target the French locale of the Canadian marketplace by specifying the fr-CA locale for Content-Language. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. Tip: For details on headers, see HTTP request headers.
    **/
    createPaymentPolicy(req: operations.CreatePaymentPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreatePaymentPolicyResponse>;
    /**
     * deletePaymentPolicy - This method deletes a payment policy. Supply the ID of the policy you want to delete in the paymentPolicyId path parameter. Note that you cannot delete the default payment policy.
    **/
    deletePaymentPolicy(req: operations.DeletePaymentPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeletePaymentPolicyResponse>;
    /**
     * getPaymentPolicies - This method retrieves all the payment policies configured for the marketplace you specify using the marketplace_id query parameter. Marketplaces and locales Get the correct policies for a marketplace that supports multiple locales using the Content-Language request header. For example, get the policies for the French locale of the Canadian marketplace by specifying fr-CA for the Content-Language header. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. For details on header values, see HTTP request headers.
    **/
    getPaymentPolicies(req: operations.GetPaymentPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentPoliciesResponse>;
    /**
     * getPaymentPolicy - This method retrieves the complete details of a payment policy. Supply the ID of the policy you want to retrieve using the paymentPolicyId path parameter.
    **/
    getPaymentPolicy(req: operations.GetPaymentPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentPolicyResponse>;
    /**
     * getPaymentPolicyByName - This method retrieves the complete details of a single payment policy. Supply both the policy name and its associated marketplace_id in the request query parameters. Marketplaces and locales Get the correct policy for a marketplace that supports multiple locales using the Content-Language request header. For example, get a policy for the French locale of the Canadian marketplace by specifying fr-CA for the Content-Language header. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. For details on header values, see HTTP request headers.
    **/
    getPaymentPolicyByName(req: operations.GetPaymentPolicyByNameRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentPolicyByNameResponse>;
    /**
     * updatePaymentPolicy - This method updates an existing payment policy. Specify the policy you want to update using the payment_policy_id path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.
    **/
    updatePaymentPolicy(req: operations.UpdatePaymentPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePaymentPolicyResponse>;
}
