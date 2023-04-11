import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmpv3GroupDelRequest extends SpeakeasyBase {
    /**
     * Agent to add the SNMPv3 group
     */
    agentNum: number;
    /**
     * SNMPv3 group name
     */
    groupName: string;
}
export declare class ProtocolSnmpv3GroupDelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmpv3GroupDel200ApplicationJSONString?: string;
}
