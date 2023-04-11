import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolProxySetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to set the PROXY tracing
     */
    agentNum: number;
    /**
     * Value to set the PROXY tracing
     */
    enableOrNot: string;
}
export declare class ProtocolProxySetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolProxySetTrace200ApplicationJSONString?: string;
}
