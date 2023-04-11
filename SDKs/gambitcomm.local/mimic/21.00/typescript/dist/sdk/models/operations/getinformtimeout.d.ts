import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetInformTimeoutRequest extends SpeakeasyBase {
    /**
     * Agent to return the timeout setting
     */
    agentNum: number;
}
export declare class GetInformTimeoutResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getInformTimeout200ApplicationJSONInt32Integer?: number;
}
