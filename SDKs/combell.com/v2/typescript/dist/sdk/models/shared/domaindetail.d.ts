import { SpeakeasyBase } from "../../../internal/utils";
import { NameServer } from "./nameserver";
import { Registrant } from "./registrant";
/**
 * Success
 */
export declare class DomainDetail extends SpeakeasyBase {
    /**
     * Indication if the domain renew state can be changed.
     */
    canToggleRenew?: boolean;
    /**
     * The domain name
     */
    domainName?: string;
    /**
     * Expiration date of the domain
     */
    expirationDate?: Date;
    /**
     * Nameservers of the domain
     */
    nameServers?: NameServer[];
    registrant?: Registrant;
    /**
     * Indication of renewal.<br />
     *
     * @remarks
     * No value indicates that the renewal state could not be determined at the moment.
     */
    willRenew?: boolean;
}
