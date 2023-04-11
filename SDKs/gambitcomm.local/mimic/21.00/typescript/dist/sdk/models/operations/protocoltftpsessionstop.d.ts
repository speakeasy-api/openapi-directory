import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTftpSessionStopRequest extends SpeakeasyBase {
    /**
     * Agent to stop TFTP transaction
     */
    agentNum: number;
    /**
     * SessionID
     */
    sessionID: string;
}
export declare class ProtocolTftpSessionStopResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTftpSessionStop200ApplicationJSONString?: string;
}
