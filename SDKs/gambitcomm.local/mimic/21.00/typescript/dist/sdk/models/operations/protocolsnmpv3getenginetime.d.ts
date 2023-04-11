import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmpv3GetEnginetimeRequest extends SpeakeasyBase {
    /**
     * Agent to show the SNMPv3 engine
     */
    agentNum: number;
}
export declare class ProtocolSnmpv3GetEnginetimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmpv3GetEnginetime200ApplicationJSONInt32Integer?: number;
}
