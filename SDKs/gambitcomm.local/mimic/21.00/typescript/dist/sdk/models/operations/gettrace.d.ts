import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to return the indicator
     */
    agentNum: number;
}
export declare class GetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getTrace200ApplicationJSONInt32Integer?: number;
}
