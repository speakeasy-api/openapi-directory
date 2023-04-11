import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GeneralApiDateFormatsRequest extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class GeneralApiDateFormatsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    generalApiDateFormats200ApplicationJSONStrings?: string[];
    /**
     * OK
     */
    generalApiDateFormats200TextJSONStrings?: string[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
