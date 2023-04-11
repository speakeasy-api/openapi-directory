import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolDhcpGetArgsRequest extends SpeakeasyBase {
    /**
     * Agent to show the DHCP argument structure
     */
    agentNum: number;
}
export declare class ProtocolDhcpGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolDhcpGetArgs200ApplicationJSONObject?: Record<string, any>;
}
