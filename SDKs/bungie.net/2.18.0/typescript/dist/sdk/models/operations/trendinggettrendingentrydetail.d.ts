import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TrendingGetTrendingEntryDetailRequest extends SpeakeasyBase {
    /**
     * The identifier for the entity to be returned.
     */
    identifier: string;
    /**
     * The type of entity to be returned.
     */
    trendingEntryType: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class TrendingGetTrendingEntryDetail200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.TrendingTrendingDetail;
    throttleSeconds?: number;
}
export declare class TrendingGetTrendingEntryDetailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
