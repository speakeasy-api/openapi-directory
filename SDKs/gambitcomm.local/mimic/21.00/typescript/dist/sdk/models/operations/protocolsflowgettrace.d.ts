import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolSflowGetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to show whether SFLOW tracing is enabled
     */
    agentNum: number;
}
export declare class ProtocolSflowGetTraceResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configSFLOW?: shared.ConfigSFLOW;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
