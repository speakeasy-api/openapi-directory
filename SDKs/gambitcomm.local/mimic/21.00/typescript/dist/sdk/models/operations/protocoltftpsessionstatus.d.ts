import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTftpSessionStatusPathParams extends SpeakeasyBase {
    agentNum: number;
    sessionID: string;
}
export declare class ProtocolTftpSessionStatusRequest extends SpeakeasyBase {
    pathParams: ProtocolTftpSessionStatusPathParams;
}
export declare class ProtocolTftpSessionStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTftpSessionStatus200ApplicationJSONString?: string;
}
