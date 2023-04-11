import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolProxySetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to set the PROXY configuration
     */
    agentNum: number;
    /**
     * Parameter to set the PROXY configuration
     */
    argument: string;
    /**
     * Value to set the PROXY configuration
     */
    value: string;
}
export declare class ProtocolProxySetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolProxySetConfig200ApplicationJSONString?: string;
}
