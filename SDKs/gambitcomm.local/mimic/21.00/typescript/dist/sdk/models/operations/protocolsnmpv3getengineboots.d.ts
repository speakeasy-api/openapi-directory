import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmpv3GetEnginebootsRequest extends SpeakeasyBase {
    /**
     * Agent to show the SNMPv3 engine
     */
    agentNum: number;
}
export declare class ProtocolSnmpv3GetEnginebootsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmpv3GetEngineboots200ApplicationJSONInt32Integer?: number;
}
