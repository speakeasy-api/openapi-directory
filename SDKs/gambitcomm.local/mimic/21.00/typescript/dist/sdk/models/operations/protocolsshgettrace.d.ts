import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolSshGetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to show whether SSH tracing is enabled
     */
    agentNum: number;
}
export declare class ProtocolSshGetTraceResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configSSH?: shared.ConfigSSH;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
