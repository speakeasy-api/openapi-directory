import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTelnetGetArgsRequest extends SpeakeasyBase {
    /**
     * Agent to show the TELNET argument structure
     */
    agentNum: number;
}
export declare class ProtocolTelnetGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTelnetGetArgs200ApplicationJSONObject?: Record<string, any>;
}
