import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmpv3UserAddRequest extends SpeakeasyBase {
    /**
     * Agent to add the SNMPv3 user
     */
    agentNum: number;
    /**
     * SNMPv3 user authentication key
     */
    authKey: string;
    /**
     * SNMPv3 user authentication protocol
     */
    authProtocol: string;
    /**
     * SNMPv3 user privacy encryption key
     */
    privKey: string;
    /**
     * SNMPv3 user privacy encryption protocol
     */
    privProtocol: string;
    /**
     * SNMPv3 user security name
     */
    securityName: string;
    /**
     * SNMPv3 user name
     */
    userName: string;
}
export declare class ProtocolSnmpv3UserAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmpv3UserAdd200ApplicationJSONString?: string;
}
