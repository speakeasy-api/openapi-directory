import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmpv3GroupAddRequest extends SpeakeasyBase {
    /**
     * Agent to add the SNMPv3 group
     */
    agentNum: number;
    /**
     * SNMPv3 group name
     */
    groupName: string;
    /**
     * SNMPv3 group security model
     */
    securityModel: string;
    /**
     * SNMPv3 group security name
     */
    securityName: string;
}
export declare class ProtocolSnmpv3GroupAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmpv3GroupAdd200ApplicationJSONString?: string;
}
