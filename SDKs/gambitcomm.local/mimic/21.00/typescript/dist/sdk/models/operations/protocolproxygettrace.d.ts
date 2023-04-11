import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolProxyGetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to show whether PROXY tracing is enabled
     */
    agentNum: number;
}
export declare class ProtocolProxyGetTraceResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configPROXY?: shared.ConfigPROXY;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
