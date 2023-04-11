import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolMqttClientSetKeepaliveRequest extends SpeakeasyBase {
    /**
     * Agent to set MQTT config
     */
    agentNum: number;
    /**
     * period to send keepalive messages
     */
    aliveTime: number;
}
export declare class ProtocolMqttClientSetKeepaliveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolMqttClientSetKeepalive200ApplicationJSONInt32Integers?: number[];
}
