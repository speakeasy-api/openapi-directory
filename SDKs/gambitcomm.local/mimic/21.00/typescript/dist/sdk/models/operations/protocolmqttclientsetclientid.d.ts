import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolMqttClientSetClientidRequest extends SpeakeasyBase {
    /**
     * Agent to set MQTT config
     */
    agentNum: number;
    /**
     * Client ID
     */
    clientID: string;
}
export declare class ProtocolMqttClientSetClientidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolMqttClientSetClientid200ApplicationJSONInt32Integers?: number[];
}
