import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolDhcpSetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to set the DHCP tracing
     */
    agentNum: number;
    /**
     * Value to set the DHCP tracing
     */
    enableOrNot: string;
}
export declare class ProtocolDhcpSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolDhcpSetTrace200ApplicationJSONString?: string;
}
