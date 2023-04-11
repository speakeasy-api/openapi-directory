import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StoreSetRequest extends SpeakeasyBase {
    /**
     * Value
     */
    requestBody?: string;
    /**
     * Persistent setting
     */
    persist: number;
    /**
     * Variable name
     */
    var: string;
}
export declare class StoreSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    storeSet200ApplicationJSONString?: string;
}
