import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolCoapSetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to set the COAP tracing
     */
    agentNum: number;
    /**
     * Value to set the COAP tracing
     */
    enableOrNot: string;
}
export declare class ProtocolCoapSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolCoapSetTrace200ApplicationJSONString?: string;
}
