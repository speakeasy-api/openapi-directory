import { SpeakeasyBase } from "../../../internal/utils";
export declare class ShortAccount extends SpeakeasyBase {
    /**
     * Account activity status
     */
    active: number;
    /**
     * User email
     */
    email: string;
    /**
     * First Name
     */
    firstName: string;
    /**
     * Account id
     */
    id: number;
    /**
     * Account institution
     */
    institutionId: number;
    /**
     * Account institution user id
     */
    institutionUserId: string;
    /**
     * Last Name
     */
    lastName: string;
    /**
     * ORCID iD associated to account
     */
    orcidId: string;
    /**
     * Total storage available to account, in bytes
     */
    quota: number;
    /**
     * Storage used by the account, in bytes
     */
    usedQuota: number;
    /**
     * User id associated with account, useful for example for adding the account as an author to an item
     */
    userId: number;
}
