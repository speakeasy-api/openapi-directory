import { SpeakeasyBase } from "../../../internal/utils";
import { AccountInfoLinks } from "./accountinfolinks";
import { AccountStatusEnum } from "./accountstatusenum";
import { BeezUPCommonInfoSummaries } from "./beezupcommoninfosummaries";
import { CompanyInfo } from "./companyinfo";
import { PersonalInfo } from "./personalinfo";
/**
 * User account information
 */
export declare class AccountInfo extends SpeakeasyBase {
    /**
     * The email
     */
    commercialOwnerEmail?: string;
    companyInfo?: CompanyInfo;
    /**
     * The email
     */
    email: string;
    info?: BeezUPCommonInfoSummaries;
    /**
     * The different actions you can make on this account
     */
    links: AccountInfoLinks;
    personalInfo?: PersonalInfo;
    /**
     * Indicate the url of your picture profil
     */
    profilePictureUrl?: string;
    /**
     * The account status
     *
     * @remarks
     * * Active:  When the account is active
     * * SystemBlocked:  When all stores on the account are blocked by the system
     * * UserBlocked: When all stores on the account are blocked on GO not on the system
     * * NotActivated: When the email is not verified
     *
     */
    status: AccountStatusEnum;
    /**
     * The user identifier
     */
    userId: string;
}
