import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTftpSessionStatusRequest extends SpeakeasyBase {
    /**
     * Agent to show TFTP transaction
     */
    agentNum: number;
    /**
     * SessionID
     */
    sessionID: string;
}
export declare class ProtocolTftpSessionStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTftpSessionStatus200ApplicationJSONString?: string;
}
