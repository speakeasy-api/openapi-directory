import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetStatisticsRequest extends SpeakeasyBase {
    /**
     * Agent to return the statistics
     */
    agentNum: number;
}
export declare class GetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getStatistics200ApplicationJSONInt32Integers?: number[];
}
