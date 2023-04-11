import { SpeakeasyBase } from "../../../internal/utils";
import { Region } from "./region";
/**
 * A status of a call feature. Available values: DISABLED, ENABLED
 */
export declare enum NumberLeaseCallFeatureStatusEnum {
    Unsupported = "UNSUPPORTED",
    Pending = "PENDING",
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}
/**
 * A status of a text feature. Available values: DISABLED, ENABLED
 */
export declare enum NumberLeaseTextFeatureStatusEnum {
    Unsupported = "UNSUPPORTED",
    Pending = "PENDING",
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}
/**
 * ~
 */
export declare enum NumberLeaseTypeEnum {
    Plan = "PLAN",
    Extra = "EXTRA"
}
/**
 * Represents a lease object for a given phone number
 */
export declare class NumberLeaseInput extends SpeakeasyBase {
    /**
     * Enables the auto renewal of number lease at end of each billing cycle
     */
    autoRenew?: boolean;
    /**
     * A status of a call feature. Available values: DISABLED, ENABLED
     */
    callFeatureStatus?: NumberLeaseCallFeatureStatusEnum;
    /**
     * ~
     */
    labels?: string[];
    /**
     * A date and time of a lease start. Timestamp, formatted in unix time milliseconds (read only). Example: 1473781817000
     */
    leaseBegin?: number;
    /**
     * A data and time of a lease finish. Timestamp, formatted in unix time milliseconds (read only). Example: 1473781817000
     */
    leaseEnd?: number;
    /**
     * Formatted number with a country code
     */
    nationalFormat?: string;
    /**
     * A phone number in E.164 format (11-digit). Example: 12132000384
     */
    number?: string;
    /**
     * Every local number associated with a region. You can query regions to use them in subsequent purchase requests
     */
    region?: Region;
    /**
     * ~
     */
    sendEmailOnCreate?: boolean;
    /**
     * A status of a text feature. Available values: DISABLED, ENABLED
     */
    textFeatureStatus?: NumberLeaseTextFeatureStatusEnum;
    /**
     * A  toll-free number
     */
    tollFree?: boolean;
    /**
     * ~
     */
    type?: NumberLeaseTypeEnum;
}
/**
 * A lease status. Available values: PENDING, ACTIVE, RELEASED, UNAVAILABLE
 */
export declare enum NumberLeaseStatusEnum {
    Pending = "PENDING",
    Active = "ACTIVE",
    Released = "RELEASED",
    Unavailable = "UNAVAILABLE"
}
/**
 * Represents a lease object for a given phone number
 */
export declare class NumberLease extends SpeakeasyBase {
    /**
     * Enables the auto renewal of number lease at end of each billing cycle
     */
    autoRenew?: boolean;
    /**
     * A status of a call feature. Available values: DISABLED, ENABLED
     */
    callFeatureStatus?: NumberLeaseCallFeatureStatusEnum;
    /**
     * ~
     */
    labels?: string[];
    /**
     * A date and time of a lease start. Timestamp, formatted in unix time milliseconds (read only). Example: 1473781817000
     */
    leaseBegin?: number;
    /**
     * A data and time of a lease finish. Timestamp, formatted in unix time milliseconds (read only). Example: 1473781817000
     */
    leaseEnd?: number;
    /**
     * Formatted number with a country code
     */
    nationalFormat?: string;
    /**
     * A phone number in E.164 format (11-digit). Example: 12132000384
     */
    number?: string;
    /**
     * Every local number associated with a region. You can query regions to use them in subsequent purchase requests
     */
    region?: Region;
    /**
     * ~
     */
    sendEmailOnCreate?: boolean;
    /**
     * A lease status. Available values: PENDING, ACTIVE, RELEASED, UNAVAILABLE
     */
    status?: NumberLeaseStatusEnum;
    /**
     * A status of a text feature. Available values: DISABLED, ENABLED
     */
    textFeatureStatus?: NumberLeaseTextFeatureStatusEnum;
    /**
     * A  toll-free number
     */
    tollFree?: boolean;
    /**
     * ~
     */
    type?: NumberLeaseTypeEnum;
}
