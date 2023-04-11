import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmpv3AccessClearRequest extends SpeakeasyBase {
    /**
     * Agent to add the SNMPv3 access
     */
    agentNum: number;
}
export declare class ProtocolSnmpv3AccessClearResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmpv3AccessClear200ApplicationJSONString?: string;
}
