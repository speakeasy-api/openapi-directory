import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolDhcpSetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to set the DHCP configuration
     */
    agentNum: number;
    /**
     * Parameter to set the DHCP configuration
     */
    argument: string;
    /**
     * Value to set the DHCP configuration
     */
    value: string;
}
export declare class ProtocolDhcpSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolDhcpSetConfig200ApplicationJSONString?: string;
}
