import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFulfillmentPolicyByNameSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetFulfillmentPolicyByNameRequest extends SpeakeasyBase {
    /**
     * This query parameter specifies the eBay marketplace of the policy you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:MarketplaceIdEnum
     */
    marketplaceId: string;
    /**
     * This query parameter specifies the seller-defined name of the fulfillment policy you want to retrieve.
     */
    name: string;
}
export declare class GetFulfillmentPolicyByNameResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    fulfillmentPolicy?: shared.FulfillmentPolicy;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
