import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolWebGetStatisticsRequest extends SpeakeasyBase {
    /**
     * Agent to show WEB statistics
     */
    agentNum: number;
}
export declare class ProtocolWebGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolWebGetStatistics200ApplicationJSONInt32Integers?: number[];
}
