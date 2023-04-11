import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSflowGetStatisticsRequest extends SpeakeasyBase {
    /**
     * Agent to show SFLOW statistics
     */
    agentNum: number;
}
export declare class ProtocolSflowGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSflowGetStatistics200ApplicationJSONInt32Integers?: number[];
}
