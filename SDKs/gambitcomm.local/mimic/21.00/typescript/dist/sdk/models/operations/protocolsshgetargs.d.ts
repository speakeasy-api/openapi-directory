import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSshGetArgsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSshGetArgsRequest extends SpeakeasyBase {
    pathParams: ProtocolSshGetArgsPathParams;
}
export declare class ProtocolSshGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSshGetArgs200ApplicationJSONObject?: Record<string, any>;
}
