import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolMqttClientSetWillqosRequest extends SpeakeasyBase {
    /**
     * Agent to set MQTT config
     */
    agentNum: number;
    /**
     * Quality of service field
     */
    qos: string;
}
export declare class ProtocolMqttClientSetWillqosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolMqttClientSetWillqos200ApplicationJSONInt32Integers?: number[];
}
