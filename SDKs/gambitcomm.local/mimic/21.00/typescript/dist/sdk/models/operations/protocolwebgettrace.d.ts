import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolWebGetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to show whether WEB tracing is enabled
     */
    agentNum: number;
}
export declare class ProtocolWebGetTraceResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configWEB?: shared.ConfigWEB;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
