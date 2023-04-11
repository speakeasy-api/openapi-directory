import { SpeakeasyBase } from "../../../internal/utils";
import { DateTimeZone } from "./datetimezone";
import { Duration } from "./duration";
import { Locale } from "./locale";
import { LocalTimeZoneRestriction } from "./localtimezonerestriction";
import { TimeZone } from "./timezone";
import { ZoneId } from "./zoneid";
/**
 * ~
 */
export declare enum AccountBrandEnum {
    Eztexting = "EZTEXTING",
    Clubtexting = "CLUBTEXTING",
    Grouptexting = "GROUPTEXTING",
    Tellmycell = "TELLMYCELL",
    Ez = "EZ",
    Callfire = "CALLFIRE",
    Tesla = "TESLA"
}
/**
 * ~
 */
export declare enum AccountCountryEnum {
    Us = "US",
    Ca = "CA"
}
/**
 * ~
 */
export declare enum AccountCountryOrDefaultEnum {
    Us = "US",
    Ca = "CA"
}
/**
 * ~
 */
export declare enum AccountEntityTypeEnum {
    Sp = "SP",
    Company = "COMPANY"
}
/**
 * ~
 */
export declare enum AccountIndustryEnum {
    Unknown = "UNKNOWN",
    Advertising = "ADVERTISING",
    Automotive = "AUTOMOTIVE",
    Collections = "COLLECTIONS",
    Consulting = "CONSULTING",
    Decline = "DECLINE",
    Education = "EDUCATION",
    Emergency = "EMERGENCY",
    Entertainment = "ENTERTAINMENT",
    Finance = "FINANCE",
    Hospitality = "HOSPITALITY",
    Healthfitness = "HEALTHFITNESS",
    Healthcare = "HEALTHCARE",
    Insurance = "INSURANCE",
    Lead = "LEAD",
    Other = "OTHER",
    Political = "POLITICAL",
    RealEstate = "REAL_ESTATE",
    Retail = "RETAIL",
    SearchMarketing = "SEARCH_MARKETING",
    Telecom = "TELECOM"
}
/**
 * ~
 */
export declare enum AccountReceiverPeriodTimeUnitEnum {
    Nanoseconds = "NANOSECONDS",
    Microseconds = "MICROSECONDS",
    Milliseconds = "MILLISECONDS",
    Seconds = "SECONDS",
    Minutes = "MINUTES",
    Hours = "HOURS",
    Days = "DAYS"
}
/**
 * ~
 */
export declare enum AccountStatusEnum {
    Active = "ACTIVE",
    PendingCancelled = "PENDING_CANCELLED",
    Cancelled = "CANCELLED",
    Archived = "ARCHIVED"
}
/**
 * ~
 */
export declare enum AccountTrustLevelEnum {
    Locked = "LOCKED",
    Suspended = "SUSPENDED",
    Probation = "PROBATION",
    Normal = "NORMAL",
    Trusted = "TRUSTED"
}
/**
 * Object represents user account in Callfire system
 */
export declare class Account extends SpeakeasyBase {
    /**
     * ~
     */
    active?: boolean;
    /**
     * ~
     */
    address?: string;
    /**
     * ~
     */
    age?: Duration;
    /**
     * ~
     */
    agencyManagedAccounts?: boolean;
    /**
     * ~
     */
    allowedToCreateCampaign?: boolean;
    /**
     * ~
     */
    apiCallLimit?: number;
    /**
     * ~
     */
    archived?: boolean;
    /**
     * ~
     */
    autoAddDoNotContact?: boolean;
    /**
     * ~
     */
    brand?: AccountBrandEnum;
    /**
     * ~
     */
    canceled?: boolean;
    /**
     * ~
     */
    canceledOrArchived?: boolean;
    /**
     * ~
     */
    city?: string;
    /**
     * ~
     */
    companyName?: string;
    /**
     * ~
     */
    country?: AccountCountryEnum;
    /**
     * ~
     */
    countryOrDefault?: AccountCountryOrDefaultEnum;
    /**
     * ~
     */
    created?: Date;
    /**
     * ~
     */
    dateTimeZone?: DateTimeZone;
    /**
     * ~
     */
    defaultNotificationTtlMillis?: number;
    /**
     * ~
     */
    defaultNumberId?: number;
    /**
     * ~
     */
    ein?: string;
    /**
     * ~
     */
    entityType?: AccountEntityTypeEnum;
    /**
     * ~
     */
    ez?: boolean;
    /**
     * ~
     */
    failedVerificationAttempts?: number;
    /**
     * ~
     */
    fromNumberPool?: string;
    /**
     * An id of an account
     */
    id?: number;
    /**
     * ~
     */
    industry?: AccountIndustryEnum;
    /**
     * ~
     */
    industryName?: string;
    /**
     * ~
     */
    key?: string;
    /**
     * ~
     */
    localTimeZoneRestriction?: LocalTimeZoneRestriction;
    /**
     * ~
     */
    locale?: Locale;
    /**
     * ~
     */
    maxAgents?: number;
    /**
     * ~
     */
    messageClass?: string;
    /**
     * ~
     */
    messageFlows?: string[];
    /**
     * Name associated with an account
     */
    name?: string;
    /**
     * ~
     */
    outboundThreshold?: number;
    /**
     * ~
     */
    receiverPeriodCall?: number;
    /**
     * ~
     */
    receiverPeriodEnabled?: boolean;
    /**
     * ~
     */
    receiverPeriodGlobal?: number;
    /**
     * ~
     */
    receiverPeriodText?: number;
    /**
     * ~
     */
    receiverPeriodTimeUnit?: AccountReceiverPeriodTimeUnitEnum;
    /**
     * ~
     */
    retainOnlyMetadata?: boolean;
    /**
     * ~
     */
    retainOnlyMetadataLastDetailRecordId?: number;
    /**
     * ~
     */
    retainOnlyMetadataLastModified?: Date;
    /**
     * ~
     */
    scrub?: boolean;
    /**
     * ~
     */
    sharedShortCodeAllowed?: boolean;
    /**
     * ~
     */
    sharedShortCodeId?: number;
    /**
     * Object represents user account in Callfire system
     */
    soaAccount?: Account;
    /**
     * ~
     */
    startCapable?: boolean;
    /**
     * ~
     */
    state?: string;
    /**
     * ~
     */
    status?: AccountStatusEnum;
    /**
     * ~
     */
    textOutboundThreshold?: number;
    /**
     * ~
     */
    timeZone?: TimeZone;
    /**
     * ~
     */
    timeZoneId?: ZoneId;
    /**
     * ~
     */
    trustLevel?: AccountTrustLevelEnum;
    /**
     * ~
     */
    tsrAgreement?: Date;
    /**
     * ~
     */
    tsrInitials?: string;
    /**
     * ~
     */
    uiContext?: string;
    /**
     * ~
     */
    universal?: boolean;
    /**
     * ~
     */
    website?: string;
    /**
     * ~
     */
    zipcode?: string;
}
