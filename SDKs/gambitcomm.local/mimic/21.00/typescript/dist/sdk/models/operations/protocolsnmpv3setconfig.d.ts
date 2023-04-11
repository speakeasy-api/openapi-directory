import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmpv3SetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to show the SNMPv3 configuration
     */
    agentNum: number;
    /**
     * SNMPv3 configuration parameter
     */
    parameter: string;
    /**
     * SNMPv3 parameter value
     */
    value: string;
}
export declare class ProtocolSnmpv3SetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmpv3SetConfig200ApplicationJSONString?: string;
}
