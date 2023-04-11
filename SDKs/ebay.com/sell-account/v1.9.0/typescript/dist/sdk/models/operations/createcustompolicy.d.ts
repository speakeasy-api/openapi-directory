import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCustomPolicySecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class CreateCustomPolicyRequest extends SpeakeasyBase {
    /**
     * Request to create a new Custom Policy.
     */
    customPolicyCreateRequest: shared.CustomPolicyCreateRequest;
    /**
     * This header parameter specifies the eBay marketplace for the custom policy that is being created. Supported values for this header can be found in the <a href="/api-docs/sell/account/types/ba:MarketplaceIdEnum" target="_blank">MarketplaceIdEnum</a> type definition.<br/> <br/> <span class="tablenote"><strong>Note:</strong> The following eBay marketplaces support Custom Policies: <ul><li>Germany (EBAY_DE)</li> <li>Canada (EBAY_CA)</li> <li>Australia (EBAY_AU)</li> <li>United States (EBAY_US)</li> <li>France (EBAY_FR)</li></ul></span>
     */
    xEbayCMarketplaceId: string;
}
export declare class CreateCustomPolicyResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    createCustomPolicy201ApplicationJSONObject?: Record<string, any>;
}
