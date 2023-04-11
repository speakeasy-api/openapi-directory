import { SpeakeasyBase } from "../../../internal/utils";
import { BrandingSettings } from "./brandingsettings";
import { PlanDetails } from "./plandetails";
import { Quota } from "./quota";
export declare class AccountAttributesAllowedIp extends SpeakeasyBase {
    ipEnd?: string;
    ipStart?: string;
}
/**
 * Branding flag. Set to `true` if the account has branding functionality enabled.
 */
export declare enum AccountAttributesBrandingEnum {
    True = "true",
    False = "false"
}
/**
 * Custom domain flag. Set to `true` if account type allows custom domain functionality.
 */
export declare enum AccountAttributesCustomDomainEnum {
    True = "true",
    False = "false"
}
/**
 * Account status flag. A one (1) means the account is active; zero (0) means it is suspended.
 */
export declare enum AccountAttributesStatusEnum {
    One = "1",
    Zero = "0"
}
export declare class AccountAttributes extends SpeakeasyBase {
    /**
     * Name of the account
     */
    accountName?: string;
    /**
     * Whether the web application onboarding help is enabled for new users in the account.
     */
    accountOnboarding?: boolean;
    /**
     * Range of IP addresses allowed to access this account.
     */
    allowedIp?: AccountAttributesAllowedIp[];
    /**
     * Branding flag. Set to `true` if the account has branding functionality enabled.
     */
    branding?: AccountAttributesBrandingEnum;
    brandingSettings?: BrandingSettings;
    /**
     * (ExaVault Use Only) Internal ID of the account in CMS.
     */
    clientId?: number;
    /**
     * Flag to indicate whether the account requires complex passwords. Set to `true` to require complex passwords on all users and shares.
     */
    complexPasswords?: boolean;
    /**
     * Timestamp of account creation.
     */
    created?: Date;
    /**
     * Custom domain flag. Set to `true` if account type allows custom domain functionality.
     */
    customDomain?: AccountAttributesCustomDomainEnum;
    /**
     * Custom signature for all account emails users or recipients will receive.
     */
    customSignature?: string;
    /**
     * Custom domain used to brand this account.
     */
    externalDomains?: string[];
    /**
     * Maximum number of users the account can have. This can be increased by contacting ExaVault Support.
     */
    maxUsers?: number;
    /**
     * Timestamp of account modification.
     */
    modified?: Date;
    planDetails?: PlanDetails;
    quota?: Quota;
    /**
     * Flag to indicate whether the account disables connections via insecure protocols (e.g. FTP). Set to `true` to disable all traffic over port 21.
     */
    secureOnly?: boolean;
    /**
     * Flag to indicate showing of referrals links in the account. Set to `true` to include marketing messages in share invitations.
     */
    showReferralLinks?: boolean;
    /**
     * Account status flag. A one (1) means the account is active; zero (0) means it is suspended.
     */
    status?: AccountAttributesStatusEnum;
    /**
     * Current number of users on the account.
     */
    userCount?: number;
    /**
     * Content of welcome email each new user will receive.
     */
    welcomeEmailContent?: string;
    /**
     * Subject of welcome email each new user will receive.
     */
    welcomeEmailSubject?: string;
}
