import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolProxyGetArgsRequest extends SpeakeasyBase {
    /**
     * Agent to show the PROXY argument structure
     */
    agentNum: number;
}
export declare class ProtocolProxyGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolProxyGetArgs200ApplicationJSONObject?: Record<string, any>;
}
