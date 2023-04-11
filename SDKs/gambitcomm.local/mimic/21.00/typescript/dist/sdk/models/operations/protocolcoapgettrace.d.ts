import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolCoapGetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to show whether COAP tracing is enabled
     */
    agentNum: number;
}
export declare class ProtocolCoapGetTraceResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configCOAP?: shared.ConfigCOAP;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
