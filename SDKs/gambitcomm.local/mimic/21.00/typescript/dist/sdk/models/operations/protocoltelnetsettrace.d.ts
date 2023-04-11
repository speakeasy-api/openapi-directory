import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTelnetSetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to set the TELNET tracing
     */
    agentNum: number;
    /**
     * Value to set the TELNET tracing
     */
    enableOrNot: string;
}
export declare class ProtocolTelnetSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTelnetSetTrace200ApplicationJSONString?: string;
}
