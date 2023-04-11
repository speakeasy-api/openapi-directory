import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPayoutSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetPayoutRequest extends SpeakeasyBase {
    /**
     * This header identifies the seller's eBay marketplace. It is required for all marketplaces outside of the US. See <a href="/api-docs/static/rest-request-components.html#marketpl " target="_blank ">HTTP request headers</a> for the marketplace ID values.
     */
    xEbayCMarketplaceId?: string;
    /**
     * The unique identfier of the payout is passed in as a path parameter at the end of the call URI. <br><br>The <b>getPayouts</b> method can be used to retrieve the unique identifier of a payout, or the user can check Seller Hub to get the payout ID.
     */
    payoutId: string;
}
export declare class GetPayoutResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    payout?: shared.Payout;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
