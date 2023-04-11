import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmptcpGetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to show whether SNMPTCP tracing is enabled
     */
    agentNum: number;
}
export declare class ProtocolSnmptcpGetTraceResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configSNMPTCP?: shared.ConfigSNMPTCP;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
