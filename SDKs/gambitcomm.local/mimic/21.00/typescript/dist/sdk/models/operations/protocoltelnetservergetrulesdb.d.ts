import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTelnetServerGetRulesdbRequest extends SpeakeasyBase {
    /**
     * Agent to show TELNET statistics
     */
    agentNum: number;
}
export declare class ProtocolTelnetServerGetRulesdbResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTelnetServerGetRulesdb200ApplicationJSONStrings?: string[];
}
