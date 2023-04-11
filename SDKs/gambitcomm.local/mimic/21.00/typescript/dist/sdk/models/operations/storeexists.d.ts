import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StoreExistsRequest extends SpeakeasyBase {
    /**
     * Variable name
     */
    var: string;
}
export declare class StoreExistsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    storeExists200ApplicationJSONString?: string;
}
