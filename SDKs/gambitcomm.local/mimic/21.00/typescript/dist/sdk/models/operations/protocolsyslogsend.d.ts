import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolSyslogSendRequest extends SpeakeasyBase {
    syslogMsg: shared.SyslogMsg;
    /**
     * Agent to set the SYSLOG tracing
     */
    agentNum: number;
    /**
     * Message Priority
     */
    pri: number;
}
export declare class ProtocolSyslogSendResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSyslogSend200ApplicationJSONString?: string;
}
