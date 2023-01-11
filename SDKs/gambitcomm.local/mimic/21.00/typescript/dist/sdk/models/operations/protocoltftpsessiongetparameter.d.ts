import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTftpSessionGetParameterPathParams extends SpeakeasyBase {
    agentNum: number;
    parameter: string;
    sessionID: string;
}
export declare class ProtocolTftpSessionGetParameterRequest extends SpeakeasyBase {
    pathParams: ProtocolTftpSessionGetParameterPathParams;
}
export declare class ProtocolTftpSessionGetParameterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTftpSessionGetParameter200ApplicationJSONString?: string;
}
