import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmpv3AccessDelRequest extends SpeakeasyBase {
    /**
     * SNMPv3 access name
     */
    accessName: string;
    /**
     * Agent to add the SNMPv3 access
     */
    agentNum: number;
}
export declare class ProtocolSnmpv3AccessDelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmpv3AccessDel200ApplicationJSONString?: string;
}
