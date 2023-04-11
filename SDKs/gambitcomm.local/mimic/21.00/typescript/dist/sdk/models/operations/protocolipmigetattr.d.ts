import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolIpmiGetAttrRequest extends SpeakeasyBase {
    /**
     * Agent to set the IPMI tracing
     */
    agentNum: number;
    /**
     * Attribute
     */
    attr: string;
}
export declare class ProtocolIpmiGetAttrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolIpmiGetAttr200ApplicationJSONString?: string;
}
