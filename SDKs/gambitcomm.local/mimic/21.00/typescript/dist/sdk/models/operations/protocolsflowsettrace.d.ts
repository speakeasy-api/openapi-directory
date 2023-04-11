import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSflowSetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to set the SFLOW tracing
     */
    agentNum: number;
    /**
     * Value to set the SFLOW tracing
     */
    enableOrNot: string;
}
export declare class ProtocolSflowSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSflowSetTrace200ApplicationJSONString?: string;
}
