import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccessLoadRequest extends SpeakeasyBase {
    /**
     * Filename to load
     */
    filename: string;
}
export declare class AccessLoadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    accessLoad200ApplicationJSONStrings?: string[];
}
