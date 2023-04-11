import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolMqttClientUnsubscribeRequest extends SpeakeasyBase {
    /**
     * Agent to change MQTT state
     */
    agentNum: number;
    /**
     * Subscription Number
     */
    subNum: number;
}
export declare class ProtocolMqttClientUnsubscribeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolMqttClientUnsubscribe200ApplicationJSONString?: string;
}
