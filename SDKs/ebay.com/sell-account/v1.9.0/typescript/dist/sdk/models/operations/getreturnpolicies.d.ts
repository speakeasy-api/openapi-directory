import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetReturnPoliciesSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetReturnPoliciesRequest extends SpeakeasyBase {
    /**
     * This query parameter specifies the ID of the eBay marketplace of the policy you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum
     */
    marketplaceId: string;
}
export declare class GetReturnPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    returnPolicyResponse?: shared.ReturnPolicyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
