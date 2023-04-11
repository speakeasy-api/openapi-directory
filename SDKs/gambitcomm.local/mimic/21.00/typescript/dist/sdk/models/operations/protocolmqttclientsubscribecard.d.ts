import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolMqttClientSubscribeCardRequest extends SpeakeasyBase {
    /**
     * Agent to show MQTT subscription state
     */
    agentNum: number;
}
export declare class ProtocolMqttClientSubscribeCardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolMqttClientSubscribeCard200ApplicationJSONInt32Integers?: number[];
}
