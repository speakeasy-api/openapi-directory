import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSshSetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to set the SSH tracing
     */
    agentNum: number;
    /**
     * Value to set the SSH tracing
     */
    enableOrNot: string;
}
export declare class ProtocolSshSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSshSetTrace200ApplicationJSONString?: string;
}
