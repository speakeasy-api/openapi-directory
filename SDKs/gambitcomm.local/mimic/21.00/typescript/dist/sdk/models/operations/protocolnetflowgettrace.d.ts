import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolNetflowGetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to show whether NETFLOW tracing is enabled
     */
    agentNum: number;
}
export declare class ProtocolNetflowGetTraceResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configNETFLOW?: shared.ConfigNETFLOW;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
