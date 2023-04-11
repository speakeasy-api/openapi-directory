import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolMqttClientGetStateRequest extends SpeakeasyBase {
    /**
     * Agent to show MQTT state
     */
    agentNum: number;
}
export declare class ProtocolMqttClientGetStateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolMqttClientGetState200ApplicationJSONInt32Integers?: number[];
}
