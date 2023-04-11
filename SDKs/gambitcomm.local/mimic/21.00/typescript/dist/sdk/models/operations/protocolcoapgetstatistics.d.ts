import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolCoapGetStatisticsRequest extends SpeakeasyBase {
    /**
     * Agent to show COAP statistics
     */
    agentNum: number;
}
export declare class ProtocolCoapGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolCoapGetStatistics200ApplicationJSONInt32Integers?: number[];
}
