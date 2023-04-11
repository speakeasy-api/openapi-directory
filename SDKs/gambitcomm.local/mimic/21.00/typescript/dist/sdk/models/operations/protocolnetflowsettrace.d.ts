import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolNetflowSetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to set the NETFLOW tracing
     */
    agentNum: number;
    /**
     * Value to set the NETFLOW tracing
     */
    enableOrNot: string;
}
export declare class ProtocolNetflowSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolNetflowSetTrace200ApplicationJSONString?: string;
}
