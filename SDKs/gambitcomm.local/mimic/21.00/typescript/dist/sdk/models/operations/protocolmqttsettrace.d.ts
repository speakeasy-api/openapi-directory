import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolMqttSetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to set the MQTT tracing
     */
    agentNum: number;
    /**
     * Value to set the MQTT tracing
     */
    enableOrNot: string;
}
export declare class ProtocolMqttSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolMqttSetTrace200ApplicationJSONString?: string;
}
