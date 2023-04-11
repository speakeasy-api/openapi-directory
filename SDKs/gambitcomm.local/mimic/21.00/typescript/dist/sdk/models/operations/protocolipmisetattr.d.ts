import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolIpmiSetAttrRequest extends SpeakeasyBase {
    /**
     * Agent to set the IPMI tracing
     */
    agentNum: number;
    /**
     * Attribute
     */
    attr: string;
    value: string;
}
export declare class ProtocolIpmiSetAttrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolIpmiSetAttr200ApplicationJSONString?: string;
}
