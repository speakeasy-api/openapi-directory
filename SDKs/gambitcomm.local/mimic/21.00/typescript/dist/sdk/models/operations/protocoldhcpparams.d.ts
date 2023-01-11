import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolDhcpParamsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolDhcpParamsRequest extends SpeakeasyBase {
    pathParams: ProtocolDhcpParamsPathParams;
}
export declare class ProtocolDhcpParamsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolDhcpParams200ApplicationJSONObjects?: Record<string, any>[];
}
