import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmpv3ViewDelRequest extends SpeakeasyBase {
    /**
     * Agent to add the SNMPv3 view
     */
    agentNum: number;
    /**
     * SNMPv3 view name
     */
    viewName: string;
}
export declare class ProtocolSnmpv3ViewDelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmpv3ViewDel200ApplicationJSONString?: string;
}
