import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolMqttClientSetWilltopicRequest extends SpeakeasyBase {
    /**
     * Agent to set MQTT config
     */
    agentNum: number;
    /**
     * topic
     */
    topic: string;
}
export declare class ProtocolMqttClientSetWilltopicResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolMqttClientSetWilltopic200ApplicationJSONInt32Integers?: number[];
}
