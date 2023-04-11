import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTelnetGetStatisticsRequest extends SpeakeasyBase {
    /**
     * Agent to show TELNET statistics
     */
    agentNum: number;
}
export declare class ProtocolTelnetGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTelnetGetStatistics200ApplicationJSONInt32Integers?: number[];
}
