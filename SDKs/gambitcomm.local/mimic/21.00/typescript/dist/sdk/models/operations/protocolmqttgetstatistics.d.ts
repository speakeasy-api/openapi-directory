import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolMqttGetStatisticsRequest extends SpeakeasyBase {
    /**
     * Agent to show MQTT statistics
     */
    agentNum: number;
}
export declare class ProtocolMqttGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolMqttGetStatistics200ApplicationJSONInt32Integers?: number[];
}
