import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTelnetConnectionRequestRequest extends SpeakeasyBase {
    /**
     * Agent to manipulate TELNET connection
     */
    agentNum: number;
    command: string;
    connectionID: number;
}
export declare class ProtocolTelnetConnectionRequestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTelnetConnectionRequest200ApplicationJSONStrings?: string[];
}
