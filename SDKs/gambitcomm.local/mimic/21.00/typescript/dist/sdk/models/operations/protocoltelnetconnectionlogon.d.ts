import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTelnetConnectionLogonPathParams extends SpeakeasyBase {
    agentNum: number;
    connectionID: number;
    password: string;
    user: string;
}
export declare class ProtocolTelnetConnectionLogonRequest extends SpeakeasyBase {
    pathParams: ProtocolTelnetConnectionLogonPathParams;
}
export declare class ProtocolTelnetConnectionLogonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTelnetConnectionLogon200ApplicationJSONStrings?: string[];
}
