import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolIpmiSetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to set the IPMI tracing
     */
    agentNum: number;
    /**
     * Value to set the IPMI tracing
     */
    enableOrNot: string;
}
export declare class ProtocolIpmiSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolIpmiSetTrace200ApplicationJSONString?: string;
}
