import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolWebSetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to set the WEB tracing
     */
    agentNum: number;
    /**
     * Value to set the WEB tracing
     */
    enableOrNot: string;
}
export declare class ProtocolWebSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolWebSetTrace200ApplicationJSONString?: string;
}
