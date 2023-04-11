import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolWebGetArgsRequest extends SpeakeasyBase {
    /**
     * Agent to show the WEB argument structure
     */
    agentNum: number;
}
export declare class ProtocolWebGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolWebGetArgs200ApplicationJSONObject?: Record<string, any>;
}
