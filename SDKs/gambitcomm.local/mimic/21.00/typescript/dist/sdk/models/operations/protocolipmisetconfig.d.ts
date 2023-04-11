import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolIpmiSetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to set the IPMI configuration
     */
    agentNum: number;
    /**
     * Parameter to set the IPMI configuration
     */
    argument: string;
    /**
     * Value to set the IPMI configuration
     */
    value: string;
}
export declare class ProtocolIpmiSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolIpmiSetConfig200ApplicationJSONString?: string;
}
