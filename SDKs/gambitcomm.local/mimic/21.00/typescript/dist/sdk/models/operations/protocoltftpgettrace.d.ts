import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolTftpGetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to show whether TFTP tracing is enabled
     */
    agentNum: number;
}
export declare class ProtocolTftpGetTraceResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configTFTP?: shared.ConfigTFTP;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
