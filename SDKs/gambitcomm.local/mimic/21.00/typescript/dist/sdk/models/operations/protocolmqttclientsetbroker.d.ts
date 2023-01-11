import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolMqttClientSetBrokerPathParams extends SpeakeasyBase {
    agentNum: number;
    brokerAddr: string;
}
export declare class ProtocolMqttClientSetBrokerRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientSetBrokerPathParams;
}
export declare class ProtocolMqttClientSetBrokerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientSetBroker200ApplicationJSONInt32Integers?: number[];
}
