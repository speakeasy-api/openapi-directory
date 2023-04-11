import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolNetflowGetArgsRequest extends SpeakeasyBase {
    /**
     * Agent to show the NETFLOW argument structure
     */
    agentNum: number;
}
export declare class ProtocolNetflowGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolNetflowGetArgs200ApplicationJSONObject?: Record<string, any>;
}
