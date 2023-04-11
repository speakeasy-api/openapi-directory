import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmpv3GroupClearRequest extends SpeakeasyBase {
    /**
     * Agent to add the SNMPv3 group
     */
    agentNum: number;
}
export declare class ProtocolSnmpv3GroupClearResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmpv3GroupClear200ApplicationJSONString?: string;
}
