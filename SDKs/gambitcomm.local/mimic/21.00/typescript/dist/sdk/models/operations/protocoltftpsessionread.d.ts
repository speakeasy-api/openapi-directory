import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTftpSessionReadRequest extends SpeakeasyBase {
    /**
     * Agent to show TFTP statistics
     */
    agentNum: number;
    /**
     * File name to retrieve from server
     */
    srcfile: string;
}
export declare class ProtocolTftpSessionReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTftpSessionRead200ApplicationJSONInt32Integers?: number[];
}
