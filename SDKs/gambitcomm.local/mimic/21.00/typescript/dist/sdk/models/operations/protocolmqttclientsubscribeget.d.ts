import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolMqttClientSubscribeGetRequest extends SpeakeasyBase {
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
}
export declare class ProtocolMqttClientSubscribeGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolMqttClientSubscribeGet200ApplicationJSONStrings?: string[];
}
