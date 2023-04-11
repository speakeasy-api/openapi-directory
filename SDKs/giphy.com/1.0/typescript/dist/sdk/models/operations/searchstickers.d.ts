import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchStickersRequest extends SpeakeasyBase {
    /**
     * Specify default language for regional content; use a 2-letter ISO 639-1 language code.
     */
    lang?: string;
    /**
     * The maximum number of records to return.
     */
    limit?: number;
    /**
     * An optional results offset.
     */
    offset?: number;
    /**
     * Search query term or prhase.
     */
    q: string;
    /**
     * Filters results by specified rating.
     */
    rating?: string;
}
/**
 * Search results
 */
export declare class SearchStickers200ApplicationJSON extends SpeakeasyBase {
    data?: shared.Gif[];
    /**
     * The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
     *
     * @remarks
     *
     */
    meta?: shared.Meta;
    /**
     * The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.
     *
     * @remarks
     *
     */
    pagination?: shared.Pagination;
}
export declare class SearchStickersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Search results
     */
    searchStickers200ApplicationJSONObject?: SearchStickers200ApplicationJSON;
}
