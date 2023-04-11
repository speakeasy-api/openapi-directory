import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolMqttClientSetOnDisconnectRequest extends SpeakeasyBase {
    /**
     * Action to take
     */
    action: string;
    /**
     * Agent to set MQTT config
     */
    agentNum: number;
}
export declare class ProtocolMqttClientSetOnDisconnectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolMqttClientSetOnDisconnect200ApplicationJSONInt32Integers?: number[];
}
