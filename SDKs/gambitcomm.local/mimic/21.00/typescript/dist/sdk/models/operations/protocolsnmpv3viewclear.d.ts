import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmpv3ViewClearRequest extends SpeakeasyBase {
    /**
     * Agent to add the SNMPv3 view
     */
    agentNum: number;
}
export declare class ProtocolSnmpv3ViewClearResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmpv3ViewClear200ApplicationJSONString?: string;
}
