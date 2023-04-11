import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSellerFundsSummarySecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetSellerFundsSummaryRequest extends SpeakeasyBase {
    /**
     * This header identifies the seller's eBay marketplace. It is required for all marketplaces outside of the US. See <a href="/api-docs/static/rest-request-components.html#marketpl " target="_blank ">HTTP request headers</a> for the marketplace ID values.
     */
    xEbayCMarketplaceId?: string;
}
export declare class GetSellerFundsSummaryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    sellerFundsSummaryResponse?: shared.SellerFundsSummaryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
