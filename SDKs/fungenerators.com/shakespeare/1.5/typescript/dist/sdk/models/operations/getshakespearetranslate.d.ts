import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetShakespeareTranslateSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: string;
}
export declare class GetShakespeareTranslateRequest extends SpeakeasyBase {
    /**
     * Text to translate to Shakespeare English.
     */
    text: string;
}
export declare class GetShakespeareTranslateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
