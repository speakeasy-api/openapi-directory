import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to set trace setting
     */
    agentNum: number;
    /**
     * Trace setting for the agent
     */
    trace: number;
}
export declare class SetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    setTrace200ApplicationJSONInt32Integer?: number;
}
