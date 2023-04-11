import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTelnetServerGetKeymapRequest extends SpeakeasyBase {
    /**
     * Agent to show TELNET statistics
     */
    agentNum: number;
}
export declare class ProtocolTelnetServerGetKeymapResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTelnetServerGetKeymap200ApplicationJSONStrings?: string[];
}
