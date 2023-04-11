import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTelnetServerGetConnectionsRequest extends SpeakeasyBase {
    /**
     * Agent to show TELNET configuration
     */
    agentNum: number;
}
export declare class ProtocolTelnetServerGetConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTelnetServerGetConnections200ApplicationJSONInt32Integers?: number[];
}
