import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolWebPortExistsRequest extends SpeakeasyBase {
    /**
     * Agent to show WEB configuration
     */
    agentNum: number;
    /**
     * TCP port
     */
    port: number;
}
export declare class ProtocolWebPortExistsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolWebPortExists200ApplicationJSONStrings?: string[];
}
