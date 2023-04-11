import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StoreGetRequest extends SpeakeasyBase {
    /**
     * Variable name
     */
    var: string;
}
export declare class StoreGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    storeGet200ApplicationJSONString?: string;
}
