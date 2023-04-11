import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolMqttClientSubscribeSetRequest extends SpeakeasyBase {
    /**
     * Agent to show MQTT state
     */
    agentNum: number;
    /**
     * Attribute
     */
    attr: string;
    /**
     * Subscribe Number
     */
    subNum: number;
    /**
     * Value
     */
    value: string;
}
export declare class ProtocolMqttClientSubscribeSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolMqttClientSubscribeSet200ApplicationJSONStrings?: string[];
}
