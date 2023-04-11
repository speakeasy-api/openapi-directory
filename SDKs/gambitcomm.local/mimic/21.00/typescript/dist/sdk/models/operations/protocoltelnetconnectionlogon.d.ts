import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTelnetConnectionLogonRequest extends SpeakeasyBase {
    /**
     * Agent to manipulate TELNET connection
     */
    agentNum: number;
    connectionID: number;
    password: string;
    user: string;
}
export declare class ProtocolTelnetConnectionLogonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTelnetConnectionLogon200ApplicationJSONStrings?: string[];
}
