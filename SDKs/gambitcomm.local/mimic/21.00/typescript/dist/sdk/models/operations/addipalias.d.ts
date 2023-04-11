import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddIpaliasRequest extends SpeakeasyBase {
    /**
     * IP address , IPv4 or IPv6
     */
    ip: string;
    /**
     * Agent to add the IP alias
     */
    agentNum: number;
    /**
     * Interface. Empty for default
     */
    interface: string;
    /**
     * Netmask, empty for default
     */
    mask: string;
    /**
     * SNMP port , 0 or empty for default
     */
    port: number;
}
export declare class AddIpaliasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    addIpalias200ApplicationJSONString?: string;
}
