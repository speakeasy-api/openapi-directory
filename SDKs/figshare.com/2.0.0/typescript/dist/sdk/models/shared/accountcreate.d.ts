import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Account description
 */
export declare class AccountCreate extends SpeakeasyBase {
    /**
     * Email of account
     */
    email: string;
    /**
     * First Name
     */
    firstName: string;
    /**
     * Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups
     */
    groupId?: number;
    /**
     * Institution user id
     */
    institutionUserId?: string;
    /**
     * Is account active
     */
    isActive?: boolean;
    /**
     * Last Name
     */
    lastName?: string;
    /**
     * Account quota
     */
    quota?: number;
    /**
     * Symplectic user id
     */
    symplecticUserId?: string;
}
