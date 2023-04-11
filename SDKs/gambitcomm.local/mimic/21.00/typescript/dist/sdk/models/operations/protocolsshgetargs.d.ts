import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSshGetArgsRequest extends SpeakeasyBase {
    /**
     * Agent to show the SSH argument structure
     */
    agentNum: number;
}
export declare class ProtocolSshGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSshGetArgs200ApplicationJSONObject?: Record<string, any>;
}
