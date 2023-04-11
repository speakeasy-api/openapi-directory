import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RandomStickerRequest extends SpeakeasyBase {
    /**
     * Filters results by specified rating.
     */
    rating?: string;
    /**
     * Filters results by specified tag.
     */
    tag?: string;
}
export declare class RandomSticker200ApplicationJSON extends SpeakeasyBase {
    data?: shared.Gif;
    /**
     * The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
     *
     * @remarks
     *
     */
    meta?: shared.Meta;
}
export declare class RandomStickerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    randomSticker200ApplicationJSONObject?: RandomSticker200ApplicationJSON;
}
