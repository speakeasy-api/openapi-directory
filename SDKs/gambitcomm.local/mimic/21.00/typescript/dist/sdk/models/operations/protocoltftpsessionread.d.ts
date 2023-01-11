import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolTftpSessionReadPathParams extends SpeakeasyBase {
    agentNum: number;
    srcfile: string;
}
export declare class ProtocolTftpSessionReadRequest extends SpeakeasyBase {
    pathParams: ProtocolTftpSessionReadPathParams;
}
export declare class ProtocolTftpSessionReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTftpSessionRead200ApplicationJSONInt32Integers?: number[];
}
