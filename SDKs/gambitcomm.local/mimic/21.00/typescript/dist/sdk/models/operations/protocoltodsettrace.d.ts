import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTodSetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to set the TOD tracing
     */
    agentNum: number;
    /**
     * Value to set the TOD tracing
     */
    enableOrNot: string;
}
export declare class ProtocolTodSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTodSetTrace200ApplicationJSONString?: string;
}
