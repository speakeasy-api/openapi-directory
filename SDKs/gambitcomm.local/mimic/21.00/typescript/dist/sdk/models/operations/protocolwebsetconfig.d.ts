import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolWebSetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to set the WEB configuration
     */
    agentNum: number;
    /**
     * Parameter to set the WEB configuration
     */
    argument: string;
    /**
     * Value to set the WEB configuration
     */
    value: string;
}
export declare class ProtocolWebSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolWebSetConfig200ApplicationJSONString?: string;
}
