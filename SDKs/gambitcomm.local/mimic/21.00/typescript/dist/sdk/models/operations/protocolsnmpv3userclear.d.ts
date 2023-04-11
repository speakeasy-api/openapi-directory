import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmpv3UserClearRequest extends SpeakeasyBase {
    /**
     * Agent to add the SNMPv3 user
     */
    agentNum: number;
}
export declare class ProtocolSnmpv3UserClearResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmpv3UserClear200ApplicationJSONString?: string;
}
