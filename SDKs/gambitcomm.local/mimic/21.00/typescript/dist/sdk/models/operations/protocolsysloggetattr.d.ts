import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSyslogGetAttrRequest extends SpeakeasyBase {
    /**
     * Agent to set the SYSLOG tracing
     */
    agentNum: number;
    /**
     * Attribute
     */
    attr: string;
}
export declare class ProtocolSyslogGetAttrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSyslogGetAttr200ApplicationJSONString?: string;
}
