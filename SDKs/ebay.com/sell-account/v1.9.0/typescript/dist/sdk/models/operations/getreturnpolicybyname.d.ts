import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetReturnPolicyByNameSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetReturnPolicyByNameRequest extends SpeakeasyBase {
    /**
     * This query parameter specifies the ID of the eBay marketplace of the policy you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum
     */
    marketplaceId: string;
    /**
     * This query parameter specifies the seller-defined name of the return policy you want to retrieve.
     */
    name: string;
}
export declare class GetReturnPolicyByNameResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    returnPolicy?: shared.ReturnPolicy;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
