import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSflowSetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to set the SFLOW configuration
     */
    agentNum: number;
    /**
     * Parameter to set the SFLOW configuration
     */
    argument: string;
    /**
     * Value to set the SFLOW configuration
     */
    value: string;
}
export declare class ProtocolSflowSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSflowSetConfig200ApplicationJSONString?: string;
}
