import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTelnetSetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to set the TELNET configuration
     */
    agentNum: number;
    /**
     * Parameter to set the TELNET configuration
     */
    argument: string;
    /**
     * Value to set the TELNET configuration
     */
    value: string;
}
export declare class ProtocolTelnetSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTelnetSetConfig200ApplicationJSONString?: string;
}
