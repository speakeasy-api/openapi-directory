import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetConsumedLicensesUsers extends SpeakeasyBase {
    enterpriseServerEmails?: string[];
    enterpriseServerUser?: boolean;
    enterpriseServerUserIds?: string[];
    /**
     * All enterprise roles for a user.
     */
    githubComEnterpriseRoles?: string[];
    githubComLogin?: string;
    githubComMemberRoles?: string[];
    githubComName?: string;
    githubComOrgsWithPendingInvites?: string[];
    githubComProfile?: string;
    githubComSamlNameId?: string;
    githubComTwoFactorAuth?: boolean;
    githubComUser?: boolean;
    githubComVerifiedDomainEmails?: string[];
    licenseType?: string;
    totalUserAccounts?: number;
    visualStudioLicenseStatus?: string;
    visualStudioSubscriptionEmail?: string;
    visualStudioSubscriptionUser?: boolean;
}
/**
 * A breakdown of the licenses consumed by an enterprise.
 */
export declare class GetConsumedLicenses extends SpeakeasyBase {
    totalSeatsConsumed?: number;
    totalSeatsPurchased?: number;
    users?: GetConsumedLicensesUsers[];
}
