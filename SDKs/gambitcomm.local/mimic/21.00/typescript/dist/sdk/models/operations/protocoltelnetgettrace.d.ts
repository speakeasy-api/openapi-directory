import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolTelnetGetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to show whether TELNET tracing is enabled
     */
    agentNum: number;
}
export declare class ProtocolTelnetGetTraceResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configTELNET?: shared.ConfigTELNET;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
