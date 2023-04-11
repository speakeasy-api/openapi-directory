import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTodGetArgsRequest extends SpeakeasyBase {
    /**
     * Agent to show the TOD argument structure
     */
    agentNum: number;
}
export declare class ProtocolTodGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTodGetArgs200ApplicationJSONObject?: Record<string, any>;
}
