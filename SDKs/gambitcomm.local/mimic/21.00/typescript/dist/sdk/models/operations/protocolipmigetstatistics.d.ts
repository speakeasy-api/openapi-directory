import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolIpmiGetStatisticsRequest extends SpeakeasyBase {
    /**
     * Agent to show IPMI statistics
     */
    agentNum: number;
}
export declare class ProtocolIpmiGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolIpmiGetStatistics200ApplicationJSONInt32Integers?: number[];
}
