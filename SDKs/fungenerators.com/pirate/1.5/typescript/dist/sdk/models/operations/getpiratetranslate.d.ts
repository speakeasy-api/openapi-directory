import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPirateTranslateSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: string;
}
export declare class GetPirateTranslateRequest extends SpeakeasyBase {
    /**
     * Text to translate to pirate lingo.
     */
    text: string;
}
export declare class GetPirateTranslateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
