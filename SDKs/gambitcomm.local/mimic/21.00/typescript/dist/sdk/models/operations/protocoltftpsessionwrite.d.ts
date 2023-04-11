import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTftpSessionWriteRequest extends SpeakeasyBase {
    /**
     * Agent to show TFTP statistics
     */
    agentNum: number;
    /**
     * File name to upload to server
     */
    srcfile: string;
}
export declare class ProtocolTftpSessionWriteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTftpSessionWrite200ApplicationJSONInt32Integers?: number[];
}
