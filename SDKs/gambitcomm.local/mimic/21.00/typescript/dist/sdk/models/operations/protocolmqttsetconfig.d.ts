import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolMqttSetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to set the MQTT configuration
     */
    agentNum: number;
    /**
     * Parameter to set the MQTT configuration
     */
    argument: string;
    /**
     * Value to set the MQTT configuration
     */
    value: string;
}
export declare class ProtocolMqttSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolMqttSetConfig200ApplicationJSONString?: string;
}
