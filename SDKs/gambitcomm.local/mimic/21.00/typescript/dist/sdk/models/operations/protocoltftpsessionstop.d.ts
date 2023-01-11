import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTftpSessionStopPathParams extends SpeakeasyBase {
    agentNum: number;
    sessionID: string;
}
export declare class ProtocolTftpSessionStopRequest extends SpeakeasyBase {
    pathParams: ProtocolTftpSessionStopPathParams;
}
export declare class ProtocolTftpSessionStopResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTftpSessionStop200ApplicationJSONString?: string;
}
