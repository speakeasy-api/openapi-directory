import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolMqttClientMessageGetRequest extends SpeakeasyBase {
    /**
     * Agent to show MQTT state
     */
    agentNum: number;
    /**
     * Attribute
     */
    attr: string;
    /**
     * Message Number
     */
    msgNum: number;
}
export declare class ProtocolMqttClientMessageGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolMqttClientMessageGet200ApplicationJSONStrings?: string[];
}
