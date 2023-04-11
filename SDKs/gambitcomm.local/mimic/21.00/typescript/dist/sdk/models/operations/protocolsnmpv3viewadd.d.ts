import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmpv3ViewAddRequest extends SpeakeasyBase {
    /**
     * Agent to add the SNMPv3 view
     */
    agentNum: number;
    /**
     * SNMPv3 view mask
     */
    mask: string;
    /**
     * SNMPv3 view subtree
     */
    subtree: string;
    /**
     * SNMPv3 view name
     */
    viewName: string;
    /**
     * SNMPv3 view type
     */
    viewType: string;
}
export declare class ProtocolSnmpv3ViewAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmpv3ViewAdd200ApplicationJSONString?: string;
}
