import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolMqttGetArgsRequest extends SpeakeasyBase {
    /**
     * Agent to show the MQTT argument structure
     */
    agentNum: number;
}
export declare class ProtocolMqttGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolMqttGetArgs200ApplicationJSONObject?: Record<string, any>;
}
