import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolMqttClientMessageCardRequest extends SpeakeasyBase {
    /**
     * Agent to show MQTT message state
     */
    agentNum: number;
}
export declare class ProtocolMqttClientMessageCardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolMqttClientMessageCard200ApplicationJSONInt32Integers?: number[];
}
