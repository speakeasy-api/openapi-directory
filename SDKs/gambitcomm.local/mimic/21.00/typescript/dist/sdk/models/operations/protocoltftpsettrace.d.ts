import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTftpSetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to set the TFTP tracing
     */
    agentNum: number;
    /**
     * Value to set the TFTP tracing
     */
    enableOrNot: string;
}
export declare class ProtocolTftpSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTftpSetTrace200ApplicationJSONString?: string;
}
