import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetMibRequest extends SpeakeasyBase {
    /**
     * Agent to show the MIB
     */
    agentNum: number;
    /**
     * Object
     */
    object: string;
}
export declare class GetMibResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getMib200ApplicationJSONString?: string;
}
