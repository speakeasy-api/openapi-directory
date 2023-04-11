import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTelnetServerGetUserdbRequest extends SpeakeasyBase {
    /**
     * Agent to show TELNET statistics
     */
    agentNum: number;
}
export declare class ProtocolTelnetServerGetUserdbResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTelnetServerGetUserdb200ApplicationJSONStrings?: string[];
}
