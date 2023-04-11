import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BillingAggregatedInformationGetAllSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * Type of period that should be included in the Billing Information
 */
export declare enum BillingAggregatedInformationGetAllPeriodEnum {
    Previous = "Previous",
    Current = "Current",
    Next = "Next"
}
/**
 * Type of service that should be included in the Billing Information
 */
export declare enum BillingAggregatedInformationGetAllServiceEnum {
    Test = "Test",
    Build = "Build"
}
export declare class BillingAggregatedInformationGetAllRequest extends SpeakeasyBase {
    /**
     * Type of period that should be included in the Billing Information
     */
    period?: BillingAggregatedInformationGetAllPeriodEnum;
    /**
     * Type of service that should be included in the Billing Information
     */
    service?: BillingAggregatedInformationGetAllServiceEnum;
    /**
     * Controls whether the API should show the original plan when Azure Subscription is not enabled
     */
    showOriginalPlans?: boolean;
}
/**
 * The status code return by the API. It can be 400 or 403 or 500.
 */
export declare enum BillingAggregatedInformationGetAllDefaultApplicationJSONErrorCodeEnum {
    FourHundred = "400",
    FourHundredAndThree = "403",
    FiveHundred = "500"
}
export declare class BillingAggregatedInformationGetAllDefaultApplicationJSONError extends SpeakeasyBase {
    /**
     * The status code return by the API. It can be 400 or 403 or 500.
     */
    code?: BillingAggregatedInformationGetAllDefaultApplicationJSONErrorCodeEnum;
    /**
     * The reason for the request failed
     */
    message?: string;
}
/**
 * Error
 */
export declare class BillingAggregatedInformationGetAllDefaultApplicationJSON extends SpeakeasyBase {
    error?: BillingAggregatedInformationGetAllDefaultApplicationJSONError;
}
/**
 * State of the Azure subscription used for billing
 */
export declare enum BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsAzureSubscriptionStateEnum {
    Enabled = "Enabled",
    Disabled = "Disabled",
    NotSet = "NotSet"
}
/**
 * Service that receives payments for this billing plan.
 */
export declare enum BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlansBuildServiceCurrentBillingPeriodByAccountPlanPaymentSourceEnum {
    None = "None",
    AppCenter = "AppCenter",
    GitHub = "GitHub",
    Xtc = "Xtc"
}
/**
 * Name of the service that the plan applies to.
 */
export declare enum BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlansBuildServiceCurrentBillingPeriodByAccountPlanServiceEnum {
    Build = "Build",
    Test = "Test"
}
/**
 * Billing Plan
 */
export declare class BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlansBuildServiceCurrentBillingPeriodByAccountPlan extends SpeakeasyBase {
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
    paymentSource?: BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlansBuildServiceCurrentBillingPeriodByAccountPlanPaymentSourceEnum;
    /**
     * Price of the Billing Plan
     */
    price?: number;
    /**
     * Name of the service that the plan applies to.
     */
    service?: BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlansBuildServiceCurrentBillingPeriodByAccountPlanServiceEnum;
    /**
     * Version of the Billing Plan schema
     */
    version?: string;
}
/**
 * Selection of a billing plan
 */
export declare class BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlansBuildServiceCurrentBillingPeriodByAccount extends SpeakeasyBase {
    /**
     * Number of instances of the billing plan.
     */
    count?: number;
    /**
     * Billing Plan
     */
    plan?: BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlansBuildServiceCurrentBillingPeriodByAccountPlan;
}
/**
 * Billing plans for a given period
 */
export declare class BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlansBuildServiceCurrentBillingPeriod extends SpeakeasyBase {
    /**
     * Selection of a billing plan
     */
    byAccount?: BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlansBuildServiceCurrentBillingPeriodByAccount;
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
export declare class BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlansBuildService extends SpeakeasyBase {
    /**
     * Can customer select trial plan for that service (if it exists)?
     */
    canSelectTrialPlan?: boolean;
    /**
     * Billing plans for a given period
     */
    currentBillingPeriod?: BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlansBuildServiceCurrentBillingPeriod;
    /**
     * Expiration time of the last selected trial plan. Will be null if trial plan was not used.
     */
    lastTrialPlanExpirationTime?: string;
}
/**
 * Service that receives payments for this billing plan.
 */
export declare enum BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlansTestServiceCurrentBillingPeriodByAccountPlanPaymentSourceEnum {
    None = "None",
    AppCenter = "AppCenter",
    GitHub = "GitHub",
    Xtc = "Xtc"
}
/**
 * Name of the service that the plan applies to.
 */
export declare enum BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlansTestServiceCurrentBillingPeriodByAccountPlanServiceEnum {
    Build = "Build",
    Test = "Test"
}
/**
 * Billing Plan
 */
export declare class BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlansTestServiceCurrentBillingPeriodByAccountPlan extends SpeakeasyBase {
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
    paymentSource?: BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlansTestServiceCurrentBillingPeriodByAccountPlanPaymentSourceEnum;
    /**
     * Price of the Billing Plan
     */
    price?: number;
    /**
     * Name of the service that the plan applies to.
     */
    service?: BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlansTestServiceCurrentBillingPeriodByAccountPlanServiceEnum;
    /**
     * Version of the Billing Plan schema
     */
    version?: string;
}
/**
 * Selection of a billing plan
 */
export declare class BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlansTestServiceCurrentBillingPeriodByAccount extends SpeakeasyBase {
    /**
     * Number of instances of the billing plan.
     */
    count?: number;
    /**
     * Billing Plan
     */
    plan?: BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlansTestServiceCurrentBillingPeriodByAccountPlan;
}
/**
 * Billing plans for a given period
 */
export declare class BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlansTestServiceCurrentBillingPeriod extends SpeakeasyBase {
    /**
     * Selection of a billing plan
     */
    byAccount?: BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlansTestServiceCurrentBillingPeriodByAccount;
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
export declare class BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlansTestService extends SpeakeasyBase {
    /**
     * Can customer select trial plan for that service (if it exists)?
     */
    canSelectTrialPlan?: boolean;
    /**
     * Billing plans for a given period
     */
    currentBillingPeriod?: BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlansTestServiceCurrentBillingPeriod;
    /**
     * Expiration time of the last selected trial plan. Will be null if trial plan was not used.
     */
    lastTrialPlanExpirationTime?: string;
}
/**
 * Billing Plans section in the Billing Information
 */
export declare class BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlans extends SpeakeasyBase {
    /**
     * Billing Plans for a single service
     */
    buildService?: BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlansBuildService;
    /**
     * Billing Plans for a single service
     */
    testService?: BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlansTestService;
}
/**
 * Usage for a single period
 */
export declare class BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsUsageBuildServiceCurrentUsagePeriod extends SpeakeasyBase {
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
export declare class BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsUsageBuildService extends SpeakeasyBase {
    /**
     * Usage for a single period
     */
    currentUsagePeriod?: BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsUsageBuildServiceCurrentUsagePeriod;
}
/**
 * Usage for a single period
 */
export declare class BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsUsageTestServiceCurrentUsagePeriod extends SpeakeasyBase {
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
export declare class BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsUsageTestService extends SpeakeasyBase {
    /**
     * Usage for a single period
     */
    currentUsagePeriod?: BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsUsageTestServiceCurrentUsagePeriod;
}
/**
 * Usage section in the Billing Information
 */
export declare class BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsUsage extends SpeakeasyBase {
    /**
     * Resource usage for a single Mobile Center service
     */
    buildService?: BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsUsageBuildService;
    /**
     * Resource usage for a single Mobile Center service
     */
    testService?: BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsUsageTestService;
}
/**
 * Aggregated Billing Information for a user or an organization
 */
export declare class BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillings extends SpeakeasyBase {
    /**
     * Unique identifier for the Azure subscription used for billing
     */
    azureSubscriptionId?: string;
    /**
     * State of the Azure subscription used for billing
     */
    azureSubscriptionState?: BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsAzureSubscriptionStateEnum;
    /**
     * Billing Plans section in the Billing Information
     */
    billingPlans?: BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsBillingPlans;
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
    usage?: BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsUsage;
    /**
     * Version of the Billing Information schema
     */
    version?: string;
}
/**
 * Aggregated Billing Information for a user an the organizations in which the user is an admin.
 */
export declare class BillingAggregatedInformationGetAll200ApplicationJSON extends SpeakeasyBase {
    /**
     * Aggregated Billing Information for a user or an organization
     */
    aggregatedBillings?: BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillings;
}
export declare class BillingAggregatedInformationGetAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Aggregated Billing Information for the requesting user and the organizations in which the user is an admin.
     */
    billingAggregatedInformationGetAll200ApplicationJSONObject?: BillingAggregatedInformationGetAll200ApplicationJSON;
    /**
     * Error code with reason
     */
    billingAggregatedInformationGetAllDefaultApplicationJSONObject?: BillingAggregatedInformationGetAllDefaultApplicationJSON;
}
