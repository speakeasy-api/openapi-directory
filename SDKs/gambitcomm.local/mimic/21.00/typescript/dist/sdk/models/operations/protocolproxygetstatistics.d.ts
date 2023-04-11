import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolProxyGetStatisticsRequest extends SpeakeasyBase {
    /**
     * Agent to show PROXY statistics
     */
    agentNum: number;
}
export declare class ProtocolProxyGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolProxyGetStatistics200ApplicationJSONInt32Integers?: number[];
}
