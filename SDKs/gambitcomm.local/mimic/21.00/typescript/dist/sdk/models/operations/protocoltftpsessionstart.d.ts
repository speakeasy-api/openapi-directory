import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTftpSessionStartRequest extends SpeakeasyBase {
    /**
     * Agent to start TFTP transaction
     */
    agentNum: number;
    /**
     * SessionID
     */
    sessionID: string;
}
export declare class ProtocolTftpSessionStartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTftpSessionStart200ApplicationJSONString?: string;
}
