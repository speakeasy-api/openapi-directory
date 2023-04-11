import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolNetflowSetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to set the NETFLOW configuration
     */
    agentNum: number;
    /**
     * Parameter to set the NETFLOW configuration
     */
    argument: string;
    /**
     * Value to set the NETFLOW configuration
     */
    value: string;
}
export declare class ProtocolNetflowSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolNetflowSetConfig200ApplicationJSONString?: string;
}
