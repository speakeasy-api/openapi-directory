import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A lease status. Available values: PENDING, ACTIVE, RELEASED, UNAVAILABLE
 */
export declare enum KeywordLeaseStatusEnum {
    Pending = "PENDING",
    Active = "ACTIVE",
    Released = "RELEASED",
    Unavailable = "UNAVAILABLE"
}
/**
 * ~
 */
export declare enum KeywordLeaseTypeEnum {
    Plan = "PLAN",
    Extra = "EXTRA"
}
/**
 * Represents a lease object for a given keyword
 */
export declare class KeywordLease extends SpeakeasyBase {
    /**
     * Enables the auto renewal of a keyword lease at the end of each billing cycle
     */
    autoRenew?: boolean;
    /**
     * Existing contact list ID
     */
    contactListId?: number;
    /**
     * Enable/disable double opt in feature
     */
    doubleOptInEnabled?: boolean;
    /**
     * A text used as a keyword
     */
    keyword?: string;
    /**
     * ~
     */
    labels?: string[];
    /**
     * A time of a lease timestamp, formatted in unix time milliseconds (read only). Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    leaseBegin?: number;
    /**
     * A date and time when the keyword lease is finishes. Timestamp, formatted in unix time milliseconds (read only). Example: 1473781817000
     */
    leaseEnd?: number;
    /**
     * A number assigned to keyword. Example: 12132212344
     */
    number?: string;
    /**
     * Opt in confirmation message
     */
    optInConfirmationMessage?: string;
    /**
     * A short code assigned to keyword. Example: 67076 (Deprecated - please use number instead)
     */
    shortCode?: string;
    /**
     * A lease status. Available values: PENDING, ACTIVE, RELEASED, UNAVAILABLE
     */
    status?: KeywordLeaseStatusEnum;
    /**
     * ~
     */
    type?: KeywordLeaseTypeEnum;
}
