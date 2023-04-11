import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomPoliciesSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetCustomPoliciesRequest extends SpeakeasyBase {
    /**
     * This header parameter specifies the eBay marketplace for the custom policy that is being created. Supported values for this header can be found in the <a href="/api-docs/sell/account/types/ba:MarketplaceIdEnum" target="_blank">MarketplaceIdEnum</a> type definition.<br/> <br/> <span class="tablenote"><strong>Note:</strong> The following eBay marketplaces support Custom Policies: <ul><li>Germany (EBAY_DE)</li> <li>Canada (EBAY_CA)</li> <li>Australia (EBAY_AU)</li> <li>United States (EBAY_US)</li> <li>France (EBAY_FR)</li></ul></span>
     */
    xEbayCMarketplaceId: string;
    /**
     * This query parameter specifies the type of custom policies to be returned.<br /><br />Multiple policy types may be requested in a single call by providing a comma-delimited set of all policy types to be returned.<br/><br/><span class="tablenote"><strong>Note:</strong> Omitting this query parameter from a request will also return policies of all policy types.</span><br/><br/>Two Custom Policy types are supported: <ul><li>Product Compliance (PRODUCT_COMPLIANCE)</li> <li>Takeback (TAKE_BACK)</li></ul>
     */
    policyTypes?: string;
}
export declare class GetCustomPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    customPolicyResponse?: shared.CustomPolicyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
