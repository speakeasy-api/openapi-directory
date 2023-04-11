import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolGetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to show the protocol configuration
     */
    agentNum: number;
    /**
     * Protocol to show configuration
     */
    prot: string;
}
export declare class ProtocolGetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolGetConfig200ApplicationJSONObject?: Record<string, any>;
}
