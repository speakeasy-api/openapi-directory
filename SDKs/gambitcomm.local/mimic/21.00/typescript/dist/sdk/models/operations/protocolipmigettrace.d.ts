import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolIpmiGetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to show whether IPMI tracing is enabled
     */
    agentNum: number;
}
export declare class ProtocolIpmiGetTraceResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configIPMI?: shared.ConfigIPMI;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
