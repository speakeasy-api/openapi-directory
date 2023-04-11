import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSflowGetArgsRequest extends SpeakeasyBase {
    /**
     * Agent to show the SFLOW argument structure
     */
    agentNum: number;
}
export declare class ProtocolSflowGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSflowGetArgs200ApplicationJSONObject?: Record<string, any>;
}
