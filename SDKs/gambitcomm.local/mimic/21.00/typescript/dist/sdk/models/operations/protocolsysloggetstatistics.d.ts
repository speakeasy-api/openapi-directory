import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSyslogGetStatisticsRequest extends SpeakeasyBase {
    /**
     * Agent to show SYSLOG statistics
     */
    agentNum: number;
}
export declare class ProtocolSyslogGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSyslogGetStatistics200ApplicationJSONInt32Integers?: number[];
}
