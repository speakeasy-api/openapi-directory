import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmptcpSetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to set the SNMPTCP configuration
     */
    agentNum: number;
    /**
     * Parameter to set the SNMPTCP configuration
     */
    argument: string;
    /**
     * Value to set the SNMPTCP configuration
     */
    value: string;
}
export declare class ProtocolSnmptcpSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmptcpSetConfig200ApplicationJSONString?: string;
}
