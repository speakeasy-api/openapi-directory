import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StatusIpaliasRequest extends SpeakeasyBase {
    /**
     * IP address , IPv4 or IPv6
     */
    ip: string;
    /**
     * Agent to show status of the IP alias
     */
    agentNum: number;
    /**
     * SNMP port , 0 or empty for default
     */
    port: number;
}
export declare class StatusIpaliasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    statusIpalias200ApplicationJSONString?: string;
}
