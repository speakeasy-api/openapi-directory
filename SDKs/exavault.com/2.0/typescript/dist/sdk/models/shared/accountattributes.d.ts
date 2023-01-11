import { SpeakeasyBase } from "../../../internal/utils";
import { BrandingSettings } from "./brandingsettings";
import { PlanDetails } from "./plandetails";
import { Quota } from "./quota";
export declare class AccountAttributesAllowedIp extends SpeakeasyBase {
    ipEnd?: string;
    ipStart?: string;
}
export declare class AccountAttributes extends SpeakeasyBase {
    accountName?: string;
    accountOnboarding?: boolean;
    allowedIp?: AccountAttributesAllowedIp[];
    branding?: boolean;
    brandingSettings?: BrandingSettings;
    clientId?: number;
    complexPasswords?: boolean;
    created?: Date;
    customDomain?: boolean;
    customSignature?: string;
    externalDomains?: string[];
    maxUsers?: number;
    modified?: Date;
    planDetails?: PlanDetails;
    quota?: Quota;
    secureOnly?: boolean;
    showReferralLinks?: boolean;
    status?: number;
    userCount?: number;
    welcomeEmailContent?: string;
    welcomeEmailSubject?: string;
}
