import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolMqttClientRuntimeDisconnectRequest extends SpeakeasyBase {
    /**
     * Agent to set MQTT behavior
     */
    agentNum: number;
}
export declare class ProtocolMqttClientRuntimeDisconnectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolMqttClientRuntimeDisconnect200ApplicationJSONStrings?: string[];
}
