import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolDhcpParamsRequest extends SpeakeasyBase {
    /**
     * Agent to show DHCP DHCP-OFFER message
     */
    agentNum: number;
}
export declare class ProtocolDhcpParamsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolDhcpParams200ApplicationJSONObjects?: Record<string, any>[];
}
