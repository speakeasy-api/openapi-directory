import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTelnetConnectionRequestPathParams extends SpeakeasyBase {
    agentNum: number;
    command: string;
    connectionID: number;
}
export declare class ProtocolTelnetConnectionRequestRequest extends SpeakeasyBase {
    pathParams: ProtocolTelnetConnectionRequestPathParams;
}
export declare class ProtocolTelnetConnectionRequestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTelnetConnectionRequest200ApplicationJSONStrings?: string[];
}
