import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolSyslogGetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to show whether SYSLOG tracing is enabled
     */
    agentNum: number;
}
export declare class ProtocolSyslogGetTraceResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configSYSLOG?: shared.ConfigSYSLOG;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
