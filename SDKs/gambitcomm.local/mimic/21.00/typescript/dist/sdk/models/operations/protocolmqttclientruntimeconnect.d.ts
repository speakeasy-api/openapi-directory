import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolMqttClientRuntimeConnectRequest extends SpeakeasyBase {
    /**
     * Agent to set MQTT behavior
     */
    agentNum: number;
}
export declare class ProtocolMqttClientRuntimeConnectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolMqttClientRuntimeConnect200ApplicationJSONStrings?: string[];
}
