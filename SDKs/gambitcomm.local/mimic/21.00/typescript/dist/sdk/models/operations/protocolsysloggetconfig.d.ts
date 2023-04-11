import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolSyslogGetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to show the SYSLOG configuration
     */
    agentNum: number;
}
export declare class ProtocolSyslogGetConfigResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configSYSLOG?: shared.ConfigSYSLOG;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
