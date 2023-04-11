import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolMqttClientResubscribeRequest extends SpeakeasyBase {
    /**
     * Agent to change MQTT state
     */
    agentNum: number;
    /**
     * Subscription Number
     */
    subNum: number;
}
export declare class ProtocolMqttClientResubscribeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolMqttClientResubscribe200ApplicationJSONString?: string;
}
