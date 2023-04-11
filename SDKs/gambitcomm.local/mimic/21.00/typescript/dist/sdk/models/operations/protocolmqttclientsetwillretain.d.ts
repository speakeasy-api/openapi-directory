import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolMqttClientSetWillretainRequest extends SpeakeasyBase {
    /**
     * Agent to set MQTT config
     */
    agentNum: number;
    /**
     * Retaining will
     */
    retain: string;
}
export declare class ProtocolMqttClientSetWillretainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolMqttClientSetWillretain200ApplicationJSONInt32Integers?: number[];
}
