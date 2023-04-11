import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TranslateStickerRequest extends SpeakeasyBase {
    /**
     * Search term.
     */
    s: string;
}
export declare class TranslateSticker200ApplicationJSON extends SpeakeasyBase {
    data?: shared.Gif;
    /**
     * The Meta Object contains basic information regarding the request, whether it was successful, and the response given by the API.  Check `responses` to see a description of types of response codes the API might give you under different cirumstances.
     *
     * @remarks
     *
     */
    meta?: shared.Meta;
}
export declare class TranslateStickerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    translateSticker200ApplicationJSONObject?: TranslateSticker200ApplicationJSON;
}
