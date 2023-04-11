import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Show site DNS configuration.
 */
export declare class DnsRecordEntity extends SpeakeasyBase {
    /**
     * DNS record domain name
     */
    domain?: string;
    /**
     * Unique label for DNS record; used by Zapier and other integrations.
     */
    id?: string;
    /**
     * DNS record type
     */
    rrtype?: string;
    /**
     * DNS record value
     */
    value?: string;
}
