import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolCoapSetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to set the COAP configuration
     */
    agentNum: number;
    /**
     * Parameter to set the COAP configuration
     */
    argument: string;
    /**
     * Value to set the COAP configuration
     */
    value: string;
}
export declare class ProtocolCoapSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolCoapSetConfig200ApplicationJSONString?: string;
}
