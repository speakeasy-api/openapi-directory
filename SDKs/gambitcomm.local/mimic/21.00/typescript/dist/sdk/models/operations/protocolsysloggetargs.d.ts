import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSyslogGetArgsRequest extends SpeakeasyBase {
    /**
     * Agent to show the SYSLOG argument structure
     */
    agentNum: number;
}
export declare class ProtocolSyslogGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSyslogGetArgs200ApplicationJSONObject?: Record<string, any>;
}
