import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGifByIdRequest extends SpeakeasyBase {
    /**
     * Filters results by specified GIF ID.
     */
    gifId: number;
}
export declare class GetGifById200ApplicationJSON extends SpeakeasyBase {
    data?: shared.Gif;
    /**
     * The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
     *
     * @remarks
     *
     */
    meta?: shared.Meta;
}
export declare class GetGifByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getGifById200ApplicationJSONObject?: GetGifById200ApplicationJSON;
}
