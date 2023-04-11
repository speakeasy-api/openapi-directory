import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTelnetConnectionSignalRequest extends SpeakeasyBase {
    /**
     * Agent to manipulate TELNET connection
     */
    agentNum: number;
    connectionID: number;
    signalName: string;
}
export declare class ProtocolTelnetConnectionSignalResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTelnetConnectionSignal200ApplicationJSONStrings?: string[];
}
