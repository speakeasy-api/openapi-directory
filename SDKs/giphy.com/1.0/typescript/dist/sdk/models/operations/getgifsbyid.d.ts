import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGifsByIdRequest extends SpeakeasyBase {
    /**
     * Filters results by specified GIF IDs, separated by commas.
     */
    ids?: string;
}
export declare class GetGifsById200ApplicationJSON extends SpeakeasyBase {
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
export declare class GetGifsByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getGifsById200ApplicationJSONObject?: GetGifsById200ApplicationJSON;
}
