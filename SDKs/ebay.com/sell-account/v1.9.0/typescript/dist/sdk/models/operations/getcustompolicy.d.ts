import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomPolicySecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetCustomPolicyRequest extends SpeakeasyBase {
    /**
     * This header parameter specifies the eBay marketplace for the custom policy that is being created. Supported values for this header can be found in the <a href="/api-docs/sell/account/types/ba:MarketplaceIdEnum" target="_blank">MarketplaceIdEnum</a> type definition.<br/> <br/> <span class="tablenote"><strong>Note:</strong> The following eBay marketplaces support Custom Policies: <ul><li>Germany (EBAY_DE)</li> <li>Canada (EBAY_CA)</li> <li>Australia (EBAY_AU)</li> <li>United States (EBAY_US)</li> <li>France (EBAY_FR)</li></ul></span>
     */
    xEbayCMarketplaceId: string;
    /**
     * This path parameter is the unique custom policy identifier for the policy to be returned.<br/><br/><span class="tablenote"><strong>Note:</strong> This value is automatically assigned by the system when the policy is created.</span>
     */
    customPolicyId: string;
}
export declare class GetCustomPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customPolicy?: shared.CustomPolicy;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
