import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSshGetStatisticsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSshGetStatisticsRequest extends SpeakeasyBase {
    pathParams: ProtocolSshGetStatisticsPathParams;
}
export declare class ProtocolSshGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSshGetStatistics200ApplicationJSONInt32Integers?: number[];
}
