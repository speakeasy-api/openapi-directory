import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TranslateSecurity extends SpeakeasyBase {
    apiAuth: string;
}
/**
 * Internal Server Error
 */
export declare class Translate500ApplicationJSON extends SpeakeasyBase {
    errors?: shared.ErrorT[];
}
/**
 * Bad Request
 */
export declare class Translate400ApplicationJSON extends SpeakeasyBase {
    errors?: shared.ErrorT[];
}
export declare class TranslateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    translateResponse?: shared.TranslateResponse;
    /**
     * Bad Request
     */
    translate400ApplicationJSONObject?: Translate400ApplicationJSON;
    /**
     * Internal Server Error
     */
    translate500ApplicationJSONObject?: Translate500ApplicationJSON;
}
