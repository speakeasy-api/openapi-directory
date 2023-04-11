import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmptcpSetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to set the SNMPTCP tracing
     */
    agentNum: number;
    /**
     * Value to set the SNMPTCP tracing
     */
    enableOrNot: string;
}
export declare class ProtocolSnmptcpSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmptcpSetTrace200ApplicationJSONString?: string;
}
