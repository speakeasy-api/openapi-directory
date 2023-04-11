import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetInformTimeoutRequest extends SpeakeasyBase {
    /**
     * Agent to set the timeout setting
     */
    agentNum: number;
    /**
     * Tmeout setting
     */
    informTimeout: number;
}
export declare class SetInformTimeoutResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    setInformTimeout200ApplicationJSONInt32Integer?: number;
}
