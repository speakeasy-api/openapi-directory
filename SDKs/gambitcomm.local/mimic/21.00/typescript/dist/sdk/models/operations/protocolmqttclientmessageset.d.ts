import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolMqttClientMessageSetRequest extends SpeakeasyBase {
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
    /**
     * Value
     */
    value: string;
}
export declare class ProtocolMqttClientMessageSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolMqttClientMessageSet200ApplicationJSONStrings?: string[];
}
