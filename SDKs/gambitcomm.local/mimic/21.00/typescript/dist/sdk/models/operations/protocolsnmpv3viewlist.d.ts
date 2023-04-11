import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmpv3ViewListRequest extends SpeakeasyBase {
    /**
     * Agent to show the SNMPv3 configuration
     */
    agentNum: number;
}
export declare class ProtocolSnmpv3ViewListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmpv3ViewList200ApplicationJSONStrings?: string[];
}
