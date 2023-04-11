import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmpv3UserDelRequest extends SpeakeasyBase {
    /**
     * Agent to add the SNMPv3 user
     */
    agentNum: number;
    /**
     * SNMPv3 user name
     */
    userName: string;
}
export declare class ProtocolSnmpv3UserDelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmpv3UserDel200ApplicationJSONString?: string;
}
