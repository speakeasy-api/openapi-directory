import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrderManagementReadyMarketplaceBusinessCodeRequest extends SpeakeasyBase {
    /**
     * Indicates that the client accepts the following languages.
     */
    acceptLanguage?: string[];
    /**
     * StoredIds to filter
     */
    storeIds?: string[];
}
export declare class GetOrderManagementReadyMarketplaceBusinessCodeResponse extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requested Store could not be found
     */
    errorResponseMessage?: shared.ErrorResponseMessage;
    /**
     * Successfully fetched current synchronization status
     */
    oMReadyMarketplaceBusinessCodeResponse?: shared.ListOfValueItem[];
}
