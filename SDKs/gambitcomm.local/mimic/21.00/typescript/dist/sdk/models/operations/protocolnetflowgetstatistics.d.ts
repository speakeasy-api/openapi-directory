import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolNetflowGetStatisticsRequest extends SpeakeasyBase {
    /**
     * Agent to show NETFLOW statistics
     */
    agentNum: number;
}
export declare class ProtocolNetflowGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolNetflowGetStatistics200ApplicationJSONInt32Integers?: number[];
}
