import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSyslogSetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to set the SYSLOG configuration
     */
    agentNum: number;
    /**
     * Parameter to set the SYSLOG configuration
     */
    argument: string;
    /**
     * Value to set the SYSLOG configuration
     */
    value: string;
}
export declare class ProtocolSyslogSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSyslogSetConfig200ApplicationJSONString?: string;
}
