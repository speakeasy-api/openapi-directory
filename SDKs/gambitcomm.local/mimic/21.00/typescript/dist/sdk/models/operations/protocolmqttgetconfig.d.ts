import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolMqttGetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to show the MQTT configuration
     */
    agentNum: number;
}
export declare class ProtocolMqttGetConfigResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configMQTT?: shared.ConfigMQTT;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
