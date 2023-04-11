import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BillingAggregatedInformationGetByAppSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * Type of period that should be included in the Billing Information
 */
export declare enum BillingAggregatedInformationGetByAppPeriodEnum {
    Previous = "Previous",
    Current = "Current",
    Next = "Next"
}
/**
 * Type of service that should be included in the Billing Information
 */
export declare enum BillingAggregatedInformationGetByAppServiceEnum {
    Test = "Test",
    Build = "Build"
}
export declare class BillingAggregatedInformationGetByAppRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * Type of period that should be included in the Billing Information
     */
    period?: BillingAggregatedInformationGetByAppPeriodEnum;
    /**
     * Type of service that should be included in the Billing Information
     */
    service?: BillingAggregatedInformationGetByAppServiceEnum;
    /**
     * Controls whether the API should show the original plan when Azure Subscription is not enabled
     */
    showOriginalPlans?: boolean;
}
/**
 * The status code return by the API. It can be 400 or 403 or 500.
 */
export declare enum BillingAggregatedInformationGetByAppDefaultApplicationJSONErrorCodeEnum {
    FourHundred = "400",
    FourHundredAndThree = "403",
    FiveHundred = "500"
}
export declare class BillingAggregatedInformationGetByAppDefaultApplicationJSONError extends SpeakeasyBase {
    /**
     * The status code return by the API. It can be 400 or 403 or 500.
     */
    code?: BillingAggregatedInformationGetByAppDefaultApplicationJSONErrorCodeEnum;
    /**
     * The reason for the request failed
     */
    message?: string;
}
/**
 * Error
 */
export declare class BillingAggregatedInformationGetByAppDefaultApplicationJSON extends SpeakeasyBase {
    error?: BillingAggregatedInformationGetByAppDefaultApplicationJSONError;
}
/**
 * State of the Azure subscription used for billing
 */
export declare enum BillingAggregatedInformationGetByApp200ApplicationJSONAzureSubscriptionStateEnum {
    Enabled = "Enabled",
    Disabled = "Disabled",
    NotSet = "NotSet"
}
/**
 * Service that receives payments for this billing plan.
 */
export declare enum BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlansBuildServiceCurrentBillingPeriodByAccountPlanPaymentSourceEnum {
    None = "None",
    AppCenter = "AppCenter",
    GitHub = "GitHub",
    Xtc = "Xtc"
}
/**
 * Name of the service that the plan applies to.
 */
export declare enum BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlansBuildServiceCurrentBillingPeriodByAccountPlanServiceEnum {
    Build = "Build",
    Test = "Test"
}
/**
 * Billing Plan
 */
export declare class BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlansBuildServiceCurrentBillingPeriodByAccountPlan extends SpeakeasyBase {
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
    paymentSource?: BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlansBuildServiceCurrentBillingPeriodByAccountPlanPaymentSourceEnum;
    /**
     * Price of the Billing Plan
     */
    price?: number;
    /**
     * Name of the service that the plan applies to.
     */
    service?: BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlansBuildServiceCurrentBillingPeriodByAccountPlanServiceEnum;
    /**
     * Version of the Billing Plan schema
     */
    version?: string;
}
/**
 * Selection of a billing plan
 */
export declare class BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlansBuildServiceCurrentBillingPeriodByAccount extends SpeakeasyBase {
    /**
     * Number of instances of the billing plan.
     */
    count?: number;
    /**
     * Billing Plan
     */
    plan?: BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlansBuildServiceCurrentBillingPeriodByAccountPlan;
}
/**
 * Billing plans for a given period
 */
export declare class BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlansBuildServiceCurrentBillingPeriod extends SpeakeasyBase {
    /**
     * Selection of a billing plan
     */
    byAccount?: BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlansBuildServiceCurrentBillingPeriodByAccount;
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
export declare class BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlansBuildService extends SpeakeasyBase {
    /**
     * Can customer select trial plan for that service (if it exists)?
     */
    canSelectTrialPlan?: boolean;
    /**
     * Billing plans for a given period
     */
    currentBillingPeriod?: BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlansBuildServiceCurrentBillingPeriod;
    /**
     * Expiration time of the last selected trial plan. Will be null if trial plan was not used.
     */
    lastTrialPlanExpirationTime?: string;
}
/**
 * Service that receives payments for this billing plan.
 */
export declare enum BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlansTestServiceCurrentBillingPeriodByAccountPlanPaymentSourceEnum {
    None = "None",
    AppCenter = "AppCenter",
    GitHub = "GitHub",
    Xtc = "Xtc"
}
/**
 * Name of the service that the plan applies to.
 */
export declare enum BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlansTestServiceCurrentBillingPeriodByAccountPlanServiceEnum {
    Build = "Build",
    Test = "Test"
}
/**
 * Billing Plan
 */
export declare class BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlansTestServiceCurrentBillingPeriodByAccountPlan extends SpeakeasyBase {
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
    paymentSource?: BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlansTestServiceCurrentBillingPeriodByAccountPlanPaymentSourceEnum;
    /**
     * Price of the Billing Plan
     */
    price?: number;
    /**
     * Name of the service that the plan applies to.
     */
    service?: BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlansTestServiceCurrentBillingPeriodByAccountPlanServiceEnum;
    /**
     * Version of the Billing Plan schema
     */
    version?: string;
}
/**
 * Selection of a billing plan
 */
export declare class BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlansTestServiceCurrentBillingPeriodByAccount extends SpeakeasyBase {
    /**
     * Number of instances of the billing plan.
     */
    count?: number;
    /**
     * Billing Plan
     */
    plan?: BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlansTestServiceCurrentBillingPeriodByAccountPlan;
}
/**
 * Billing plans for a given period
 */
export declare class BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlansTestServiceCurrentBillingPeriod extends SpeakeasyBase {
    /**
     * Selection of a billing plan
     */
    byAccount?: BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlansTestServiceCurrentBillingPeriodByAccount;
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
export declare class BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlansTestService extends SpeakeasyBase {
    /**
     * Can customer select trial plan for that service (if it exists)?
     */
    canSelectTrialPlan?: boolean;
    /**
     * Billing plans for a given period
     */
    currentBillingPeriod?: BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlansTestServiceCurrentBillingPeriod;
    /**
     * Expiration time of the last selected trial plan. Will be null if trial plan was not used.
     */
    lastTrialPlanExpirationTime?: string;
}
/**
 * Billing Plans section in the Billing Information
 */
export declare class BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlans extends SpeakeasyBase {
    /**
     * Billing Plans for a single service
     */
    buildService?: BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlansBuildService;
    /**
     * Billing Plans for a single service
     */
    testService?: BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlansTestService;
}
/**
 * Usage for a single period
 */
export declare class BillingAggregatedInformationGetByApp200ApplicationJSONUsageBuildServiceCurrentUsagePeriod extends SpeakeasyBase {
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
export declare class BillingAggregatedInformationGetByApp200ApplicationJSONUsageBuildService extends SpeakeasyBase {
    /**
     * Usage for a single period
     */
    currentUsagePeriod?: BillingAggregatedInformationGetByApp200ApplicationJSONUsageBuildServiceCurrentUsagePeriod;
}
/**
 * Usage for a single period
 */
export declare class BillingAggregatedInformationGetByApp200ApplicationJSONUsageTestServiceCurrentUsagePeriod extends SpeakeasyBase {
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
export declare class BillingAggregatedInformationGetByApp200ApplicationJSONUsageTestService extends SpeakeasyBase {
    /**
     * Usage for a single period
     */
    currentUsagePeriod?: BillingAggregatedInformationGetByApp200ApplicationJSONUsageTestServiceCurrentUsagePeriod;
}
/**
 * Usage section in the Billing Information
 */
export declare class BillingAggregatedInformationGetByApp200ApplicationJSONUsage extends SpeakeasyBase {
    /**
     * Resource usage for a single Mobile Center service
     */
    buildService?: BillingAggregatedInformationGetByApp200ApplicationJSONUsageBuildService;
    /**
     * Resource usage for a single Mobile Center service
     */
    testService?: BillingAggregatedInformationGetByApp200ApplicationJSONUsageTestService;
}
/**
 * Aggregated Billing Information for a user or an organization
 */
export declare class BillingAggregatedInformationGetByApp200ApplicationJSON extends SpeakeasyBase {
    /**
     * Unique identifier for the Azure subscription used for billing
     */
    azureSubscriptionId?: string;
    /**
     * State of the Azure subscription used for billing
     */
    azureSubscriptionState?: BillingAggregatedInformationGetByApp200ApplicationJSONAzureSubscriptionStateEnum;
    /**
     * Billing Plans section in the Billing Information
     */
    billingPlans?: BillingAggregatedInformationGetByApp200ApplicationJSONBillingPlans;
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
    usage?: BillingAggregatedInformationGetByApp200ApplicationJSONUsage;
    /**
     * Version of the Billing Information schema
     */
    version?: string;
}
export declare class BillingAggregatedInformationGetByAppResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Aggregated Billing Information for owner of a given app
     */
    billingAggregatedInformationGetByApp200ApplicationJSONObject?: BillingAggregatedInformationGetByApp200ApplicationJSON;
    /**
     * Error code with reason
     */
    billingAggregatedInformationGetByAppDefaultApplicationJSONObject?: BillingAggregatedInformationGetByAppDefaultApplicationJSON;
}
