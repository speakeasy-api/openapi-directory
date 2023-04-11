import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolDhcpGetStatisticsRequest extends SpeakeasyBase {
    /**
     * Agent to show DHCP statistics
     */
    agentNum: number;
}
export declare class ProtocolDhcpGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolDhcpGetStatistics200ApplicationJSONInt32Integers?: number[];
}
