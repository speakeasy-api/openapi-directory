import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTftpSessionStartPathParams extends SpeakeasyBase {
    agentNum: number;
    sessionID: string;
}
export declare class ProtocolTftpSessionStartRequest extends SpeakeasyBase {
    pathParams: ProtocolTftpSessionStartPathParams;
}
export declare class ProtocolTftpSessionStartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTftpSessionStart200ApplicationJSONString?: string;
}
