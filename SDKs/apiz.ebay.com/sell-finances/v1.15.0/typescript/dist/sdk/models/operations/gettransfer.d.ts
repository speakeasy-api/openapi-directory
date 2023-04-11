import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTransferSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetTransferRequest extends SpeakeasyBase {
    /**
     * This header identifies the seller's eBay marketplace. It is required for all marketplaces outside of the US. See <a href="/api-docs/static/rest-request-components.html#marketpl " target="_blank ">HTTP request headers</a> for the marketplace ID values.
     */
    xEbayCMarketplaceId?: string;
    /**
     * The unique identifier of the <code>TRANSFER</code> transaction type you wish to retrieve.
     */
    transferId: string;
}
export declare class GetTransferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success.
     */
    transfer?: shared.Transfer;
}
