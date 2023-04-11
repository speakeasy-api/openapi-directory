import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSshGetStatisticsRequest extends SpeakeasyBase {
    /**
     * Agent to show SSH statistics
     */
    agentNum: number;
}
export declare class ProtocolSshGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSshGetStatistics200ApplicationJSONInt32Integers?: number[];
}
