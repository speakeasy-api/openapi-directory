import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSyslogGetStatisticsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSyslogGetStatisticsRequest extends SpeakeasyBase {
    pathParams: ProtocolSyslogGetStatisticsPathParams;
}
export declare class ProtocolSyslogGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSyslogGetStatistics200ApplicationJSONInt32Integers?: number[];
}
