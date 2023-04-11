import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSyslogSetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to set the SYSLOG tracing
     */
    agentNum: number;
    /**
     * Value to set the SYSLOG tracing
     */
    enableOrNot: string;
}
export declare class ProtocolSyslogSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSyslogSetTrace200ApplicationJSONString?: string;
}
