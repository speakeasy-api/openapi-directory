import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolIpmiGetArgsRequest extends SpeakeasyBase {
    /**
     * Agent to show the IPMI argument structure
     */
    agentNum: number;
}
export declare class ProtocolIpmiGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolIpmiGetArgs200ApplicationJSONObject?: Record<string, any>;
}
