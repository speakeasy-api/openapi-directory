import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolMqttGetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to show whether MQTT tracing is enabled
     */
    agentNum: number;
}
export declare class ProtocolMqttGetTraceResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configMQTT?: shared.ConfigMQTT;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
