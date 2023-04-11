import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolMqttClientRuntimeAbortRequest extends SpeakeasyBase {
    /**
     * Agent to set MQTT behavior
     */
    agentNum: number;
}
export declare class ProtocolMqttClientRuntimeAbortResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolMqttClientRuntimeAbort200ApplicationJSONStrings?: string[];
}
