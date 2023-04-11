import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DelIpaliasRequest extends SpeakeasyBase {
    /**
     * IP address , IPv4 or IPv6
     */
    ip: string;
    /**
     * Agent to delete the IP alias
     */
    agentNum: number;
    /**
     * SNMP port , 0 or empty for default
     */
    port: number;
}
export declare class DelIpaliasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    delIpalias200ApplicationJSONString?: string;
}
