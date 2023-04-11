import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSshSetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to set the SSH configuration
     */
    agentNum: number;
    /**
     * Parameter to set the SSH configuration
     */
    argument: string;
    /**
     * Value to set the SSH configuration
     */
    value: string;
}
export declare class ProtocolSshSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSshSetConfig200ApplicationJSONString?: string;
}
