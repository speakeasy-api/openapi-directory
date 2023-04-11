import { SpeakeasyBase } from "../../../internal/utils";
export declare class Domain extends SpeakeasyBase {
    /**
     * The domain name
     */
    domainName?: string;
    /**
     * Expiration date of the domain
     */
    expirationDate?: Date;
    /**
     * Indication of renewal.<br />
     *
     * @remarks
     * No value indicates that the renewal state could not be determined at the moment.
     */
    willRenew?: boolean;
}
