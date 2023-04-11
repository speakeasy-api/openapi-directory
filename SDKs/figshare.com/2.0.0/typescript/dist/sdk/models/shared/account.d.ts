import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK. Account representation
 */
export declare class Account extends SpeakeasyBase {
    /**
     * Account activity status
     */
    active: number;
    /**
     * Date when account was created
     */
    createdDate: string;
    /**
     * User email
     */
    email: string;
    /**
     * First Name
     */
    firstName: string;
    /**
     * Account group id
     */
    groupId: number;
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
     * Maximum upload size for account
     */
    maximumFileSize: number;
    /**
     * Date of last account modification
     */
    modifiedDate: string;
    /**
     * True if a quota request is pending
     */
    pendingQuotaRequest: boolean;
    /**
     * Account quota
     */
    quota: number;
    /**
     * Account total used quota
     */
    usedQuota: number;
    /**
     * Account used private quota
     */
    usedQuotaPrivate: number;
    /**
     * Account public used quota
     */
    usedQuotaPublic: number;
}
