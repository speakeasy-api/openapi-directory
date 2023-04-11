import { SpeakeasyBase } from "../../../internal/utils";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
export declare class DNSRuleDescriptor extends SpeakeasyBase {
    /**
     * Identifies the DNS Rule
     */
    dnsRuleId: string;
    /**
     * FQDN of the DNS rule
     */
    domainName: string;
    /**
     * IP address given by the DNS rule
     */
    ipAddress: string;
    /**
     * Specifies the IP address type
     */
    ipAddressType: IpAddressTypeEnum;
    /**
     * Time-to-live value
     */
    ttl?: number;
}
