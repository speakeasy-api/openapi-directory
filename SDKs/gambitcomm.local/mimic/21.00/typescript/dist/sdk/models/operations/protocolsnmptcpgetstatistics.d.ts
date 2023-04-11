import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmptcpGetStatisticsRequest extends SpeakeasyBase {
    /**
     * Agent to show SNMPTCP statistics
     */
    agentNum: number;
}
export declare class ProtocolSnmptcpGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmptcpGetStatistics200ApplicationJSONInt32Integers?: number[];
}
