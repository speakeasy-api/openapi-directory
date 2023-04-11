import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BillingAggregatedInformationGetForOrgSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * Type of period that should be included in the Billing Information
 */
export declare enum BillingAggregatedInformationGetForOrgPeriodEnum {
    Previous = "Previous",
    Current = "Current",
    Next = "Next"
}
/**
 * Type of service that should be included in the Billing Information
 */
export declare enum BillingAggregatedInformationGetForOrgServiceEnum {
    Test = "Test",
    Build = "Build"
}
export declare class BillingAggregatedInformationGetForOrgRequest extends SpeakeasyBase {
    /**
     * The name of the Organization
     */
    orgName: string;
    /**
     * Type of period that should be included in the Billing Information
     */
    period?: BillingAggregatedInformationGetForOrgPeriodEnum;
    /**
     * Type of service that should be included in the Billing Information
     */
    service?: BillingAggregatedInformationGetForOrgServiceEnum;
    /**
     * Controls whether the API should show the original plan when Azure Subscription is not enabled
     */
    showOriginalPlans?: boolean;
}
/**
 * The status code return by the API. It can be 400 or 403 or 500.
 */
export declare enum BillingAggregatedInformationGetForOrgDefaultApplicationJSONErrorCodeEnum {
    FourHundred = "400",
    FourHundredAndThree = "403",
    FiveHundred = "500"
}
export declare class BillingAggregatedInformationGetForOrgDefaultApplicationJSONError extends SpeakeasyBase {
    /**
     * The status code return by the API. It can be 400 or 403 or 500.
     */
    code?: BillingAggregatedInformationGetForOrgDefaultApplicationJSONErrorCodeEnum;
    /**
     * The reason for the request failed
     */
    message?: string;
}
/**
 * Error
 */
export declare class BillingAggregatedInformationGetForOrgDefaultApplicationJSON extends SpeakeasyBase {
    error?: BillingAggregatedInformationGetForOrgDefaultApplicationJSONError;
}
/**
 * State of the Azure subscription used for billing
 */
export declare enum BillingAggregatedInformationGetForOrg200ApplicationJSONAzureSubscriptionStateEnum {
    Enabled = "Enabled",
    Disabled = "Disabled",
    NotSet = "NotSet"
}
/**
 * Service that receives payments for this billing plan.
 */
export declare enum BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlansBuildServiceCurrentBillingPeriodByAccountPlanPaymentSourceEnum {
    None = "None",
    AppCenter = "AppCenter",
    GitHub = "GitHub",
    Xtc = "Xtc"
}
/**
 * Name of the service that the plan applies to.
 */
export declare enum BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlansBuildServiceCurrentBillingPeriodByAccountPlanServiceEnum {
    Build = "Build",
    Test = "Test"
}
/**
 * Billing Plan
 */
export declare class BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlansBuildServiceCurrentBillingPeriodByAccountPlan extends SpeakeasyBase {
    /**
     * Collection of attribute values.
     */
    attributes?: Record<string, Record<string, any>>;
    /**
     * The Billing Plan ID
     */
    id?: string;
    /**
     * A collection of named numeric values
     */
    limits?: Record<string, number>;
    parentId?: string;
    /**
     * Service that receives payments for this billing plan.
     */
    paymentSource?: BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlansBuildServiceCurrentBillingPeriodByAccountPlanPaymentSourceEnum;
    /**
     * Price of the Billing Plan
     */
    price?: number;
    /**
     * Name of the service that the plan applies to.
     */
    service?: BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlansBuildServiceCurrentBillingPeriodByAccountPlanServiceEnum;
    /**
     * Version of the Billing Plan schema
     */
    version?: string;
}
/**
 * Selection of a billing plan
 */
export declare class BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlansBuildServiceCurrentBillingPeriodByAccount extends SpeakeasyBase {
    /**
     * Number of instances of the billing plan.
     */
    count?: number;
    /**
     * Billing Plan
     */
    plan?: BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlansBuildServiceCurrentBillingPeriodByAccountPlan;
}
/**
 * Billing plans for a given period
 */
export declare class BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlansBuildServiceCurrentBillingPeriod extends SpeakeasyBase {
    /**
     * Selection of a billing plan
     */
    byAccount?: BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlansBuildServiceCurrentBillingPeriodByAccount;
    /**
     * Exclusive end of the period.
     */
    endTime?: string;
    /**
     * Inclusive start of the period
     */
    startTime?: string;
}
/**
 * Billing Plans for a single service
 */
export declare class BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlansBuildService extends SpeakeasyBase {
    /**
     * Can customer select trial plan for that service (if it exists)?
     */
    canSelectTrialPlan?: boolean;
    /**
     * Billing plans for a given period
     */
    currentBillingPeriod?: BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlansBuildServiceCurrentBillingPeriod;
    /**
     * Expiration time of the last selected trial plan. Will be null if trial plan was not used.
     */
    lastTrialPlanExpirationTime?: string;
}
/**
 * Service that receives payments for this billing plan.
 */
export declare enum BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlansTestServiceCurrentBillingPeriodByAccountPlanPaymentSourceEnum {
    None = "None",
    AppCenter = "AppCenter",
    GitHub = "GitHub",
    Xtc = "Xtc"
}
/**
 * Name of the service that the plan applies to.
 */
export declare enum BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlansTestServiceCurrentBillingPeriodByAccountPlanServiceEnum {
    Build = "Build",
    Test = "Test"
}
/**
 * Billing Plan
 */
export declare class BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlansTestServiceCurrentBillingPeriodByAccountPlan extends SpeakeasyBase {
    /**
     * Collection of attribute values.
     */
    attributes?: Record<string, Record<string, any>>;
    /**
     * The Billing Plan ID
     */
    id?: string;
    /**
     * A collection of named numeric values
     */
    limits?: Record<string, number>;
    parentId?: string;
    /**
     * Service that receives payments for this billing plan.
     */
    paymentSource?: BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlansTestServiceCurrentBillingPeriodByAccountPlanPaymentSourceEnum;
    /**
     * Price of the Billing Plan
     */
    price?: number;
    /**
     * Name of the service that the plan applies to.
     */
    service?: BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlansTestServiceCurrentBillingPeriodByAccountPlanServiceEnum;
    /**
     * Version of the Billing Plan schema
     */
    version?: string;
}
/**
 * Selection of a billing plan
 */
export declare class BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlansTestServiceCurrentBillingPeriodByAccount extends SpeakeasyBase {
    /**
     * Number of instances of the billing plan.
     */
    count?: number;
    /**
     * Billing Plan
     */
    plan?: BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlansTestServiceCurrentBillingPeriodByAccountPlan;
}
/**
 * Billing plans for a given period
 */
export declare class BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlansTestServiceCurrentBillingPeriod extends SpeakeasyBase {
    /**
     * Selection of a billing plan
     */
    byAccount?: BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlansTestServiceCurrentBillingPeriodByAccount;
    /**
     * Exclusive end of the period.
     */
    endTime?: string;
    /**
     * Inclusive start of the period
     */
    startTime?: string;
}
/**
 * Billing Plans for a single service
 */
export declare class BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlansTestService extends SpeakeasyBase {
    /**
     * Can customer select trial plan for that service (if it exists)?
     */
    canSelectTrialPlan?: boolean;
    /**
     * Billing plans for a given period
     */
    currentBillingPeriod?: BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlansTestServiceCurrentBillingPeriod;
    /**
     * Expiration time of the last selected trial plan. Will be null if trial plan was not used.
     */
    lastTrialPlanExpirationTime?: string;
}
/**
 * Billing Plans section in the Billing Information
 */
export declare class BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlans extends SpeakeasyBase {
    /**
     * Billing Plans for a single service
     */
    buildService?: BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlansBuildService;
    /**
     * Billing Plans for a single service
     */
    testService?: BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlansTestService;
}
/**
 * Usage for a single period
 */
export declare class BillingAggregatedInformationGetForOrg200ApplicationJSONUsageBuildServiceCurrentUsagePeriod extends SpeakeasyBase {
    /**
     * A collection of named numeric values
     */
    byAccount?: Record<string, number>;
    /**
     * A collection of  named numeric values grouped by app
     */
    byApp?: Record<string, Record<string, number>>;
    /**
     * Exclusive end time of the usage period.
     */
    endTime?: string;
    /**
     * Inclusive start time of the usage period
     */
    startTime?: string;
}
/**
 * Resource usage for a single Mobile Center service
 */
export declare class BillingAggregatedInformationGetForOrg200ApplicationJSONUsageBuildService extends SpeakeasyBase {
    /**
     * Usage for a single period
     */
    currentUsagePeriod?: BillingAggregatedInformationGetForOrg200ApplicationJSONUsageBuildServiceCurrentUsagePeriod;
}
/**
 * Usage for a single period
 */
export declare class BillingAggregatedInformationGetForOrg200ApplicationJSONUsageTestServiceCurrentUsagePeriod extends SpeakeasyBase {
    /**
     * A collection of named numeric values
     */
    byAccount?: Record<string, number>;
    /**
     * A collection of  named numeric values grouped by app
     */
    byApp?: Record<string, Record<string, number>>;
    /**
     * Exclusive end time of the usage period.
     */
    endTime?: string;
    /**
     * Inclusive start time of the usage period
     */
    startTime?: string;
}
/**
 * Resource usage for a single Mobile Center service
 */
export declare class BillingAggregatedInformationGetForOrg200ApplicationJSONUsageTestService extends SpeakeasyBase {
    /**
     * Usage for a single period
     */
    currentUsagePeriod?: BillingAggregatedInformationGetForOrg200ApplicationJSONUsageTestServiceCurrentUsagePeriod;
}
/**
 * Usage section in the Billing Information
 */
export declare class BillingAggregatedInformationGetForOrg200ApplicationJSONUsage extends SpeakeasyBase {
    /**
     * Resource usage for a single Mobile Center service
     */
    buildService?: BillingAggregatedInformationGetForOrg200ApplicationJSONUsageBuildService;
    /**
     * Resource usage for a single Mobile Center service
     */
    testService?: BillingAggregatedInformationGetForOrg200ApplicationJSONUsageTestService;
}
/**
 * Aggregated Billing Information for a user or an organization
 */
export declare class BillingAggregatedInformationGetForOrg200ApplicationJSON extends SpeakeasyBase {
    /**
     * Unique identifier for the Azure subscription used for billing
     */
    azureSubscriptionId?: string;
    /**
     * State of the Azure subscription used for billing
     */
    azureSubscriptionState?: BillingAggregatedInformationGetForOrg200ApplicationJSONAzureSubscriptionStateEnum;
    /**
     * Billing Plans section in the Billing Information
     */
    billingPlans?: BillingAggregatedInformationGetForOrg200ApplicationJSONBillingPlans;
    /**
     * ID of the user or organization
     */
    id?: string;
    /**
     * The ISO 8601 datetime of last modification
     */
    timestamp?: string;
    /**
     * Usage section in the Billing Information
     */
    usage?: BillingAggregatedInformationGetForOrg200ApplicationJSONUsage;
    /**
     * Version of the Billing Information schema
     */
    version?: string;
}
export declare class BillingAggregatedInformationGetForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Aggregated Billing Information for a given Organization
     */
    billingAggregatedInformationGetForOrg200ApplicationJSONObject?: BillingAggregatedInformationGetForOrg200ApplicationJSON;
    /**
     * Error code with reason
     */
    billingAggregatedInformationGetForOrgDefaultApplicationJSONObject?: BillingAggregatedInformationGetForOrgDefaultApplicationJSON;
}
