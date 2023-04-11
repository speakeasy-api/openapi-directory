import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTodSetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to set the TOD configuration
     */
    agentNum: number;
    /**
     * Parameter to set the TOD configuration
     */
    argument: string;
    /**
     * Value to set the TOD configuration
     */
    value: string;
}
export declare class ProtocolTodSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTodSetConfig200ApplicationJSONString?: string;
}
