import { SpeakeasyBase } from "../../../internal/utils";
import { AccountSupportingEntityCapability, AccountSupportingEntityCapabilityInput } from "./accountsupportingentitycapability";
import { JSONObject } from "./jsonobject";
/**
 * The capability level that is allowed for the account holder.
 *
 * @remarks
 *
 * Possible values: **notApplicable**, **low**, **medium**, **high**.
 */
export declare enum AccountHolderCapabilityAllowedLevelEnum {
    High = "high",
    Low = "low",
    Medium = "medium",
    NotApplicable = "notApplicable"
}
/**
 * The requested level of the capability. Some capabilities, such as those used in [card issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different levels. Levels increase the capability, but also require additional checks and increased monitoring.
 *
 * @remarks
 *
 * Possible values: **notApplicable**, **low**, **medium**, **high**.
 */
export declare enum AccountHolderCapabilityRequestedLevelEnum {
    High = "high",
    Low = "low",
    Medium = "medium",
    NotApplicable = "notApplicable"
}
/**
 * The status of the verification checks for the capability.
 *
 * @remarks
 *
 * Possible values:
 *
 * * **pending**: Adyen is running the verification.
 *
 * * **invalid**: The verification failed. Check if the `errors` array contains more information.
 *
 * * **valid**: The verification has been successfully completed.
 *
 * * **rejected**: Adyen has verified the information, but found reasons to not allow the capability.
 *
 */
export declare enum AccountHolderCapabilityVerificationStatusEnum {
    Invalid = "invalid",
    Pending = "pending",
    Rejected = "rejected",
    Valid = "valid"
}
export declare class AccountHolderCapability extends SpeakeasyBase {
    /**
     * Indicates whether the capability is allowed. Adyen sets this to **true** if the verification is successful and the account holder is permitted to use the capability.
     */
    allowed?: boolean;
    /**
     * The capability level that is allowed for the account holder.
     *
     * @remarks
     *
     * Possible values: **notApplicable**, **low**, **medium**, **high**.
     */
    allowedLevel?: AccountHolderCapabilityAllowedLevelEnum;
    allowedSettings?: JSONObject;
    /**
     * Indicates whether the capability is enabled. If **false**, the capability is temporarily disabled for the account holder.
     */
    enabled?: boolean;
    /**
     * Contains verification errors and the actions that you can take to resolve them.
     */
    problems?: Record<string, any>[];
    /**
     * Indicates whether the capability is requested. To check whether the account holder is permitted to use the capability, refer to the `allowed` field.
     */
    requested?: boolean;
    /**
     * The requested level of the capability. Some capabilities, such as those used in [card issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different levels. Levels increase the capability, but also require additional checks and increased monitoring.
     *
     * @remarks
     *
     * Possible values: **notApplicable**, **low**, **medium**, **high**.
     */
    requestedLevel?: AccountHolderCapabilityRequestedLevelEnum;
    requestedSettings?: JSONObject;
    /**
     * Contains the status of the transfer instruments associated with this capability.
     */
    transferInstruments?: AccountSupportingEntityCapability[];
    /**
     * The status of the verification checks for the capability.
     *
     * @remarks
     *
     * Possible values:
     *
     * * **pending**: Adyen is running the verification.
     *
     * * **invalid**: The verification failed. Check if the `errors` array contains more information.
     *
     * * **valid**: The verification has been successfully completed.
     *
     * * **rejected**: Adyen has verified the information, but found reasons to not allow the capability.
     *
     */
    verificationStatus?: AccountHolderCapabilityVerificationStatusEnum;
}
export declare class AccountHolderCapabilityInput extends SpeakeasyBase {
    allowedSettings?: JSONObject;
    /**
     * Indicates whether the capability is enabled. If **false**, the capability is temporarily disabled for the account holder.
     */
    enabled?: boolean;
    /**
     * Indicates whether the capability is requested. To check whether the account holder is permitted to use the capability, refer to the `allowed` field.
     */
    requested?: boolean;
    /**
     * The requested level of the capability. Some capabilities, such as those used in [card issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different levels. Levels increase the capability, but also require additional checks and increased monitoring.
     *
     * @remarks
     *
     * Possible values: **notApplicable**, **low**, **medium**, **high**.
     */
    requestedLevel?: AccountHolderCapabilityRequestedLevelEnum;
    requestedSettings?: JSONObject;
    /**
     * Contains the status of the transfer instruments associated with this capability.
     */
    transferInstruments?: AccountSupportingEntityCapabilityInput[];
}
