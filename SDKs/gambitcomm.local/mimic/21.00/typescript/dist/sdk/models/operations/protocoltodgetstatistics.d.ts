import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTodGetStatisticsRequest extends SpeakeasyBase {
    /**
     * Agent to show TOD statistics
     */
    agentNum: number;
}
export declare class ProtocolTodGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTodGetStatistics200ApplicationJSONInt32Integers?: number[];
}
