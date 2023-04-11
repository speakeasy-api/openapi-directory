import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StoreUnsetRequest extends SpeakeasyBase {
    /**
     * Variable name
     */
    var: string;
}
export declare class StoreUnsetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    storeUnset200ApplicationJSONString?: string;
}
