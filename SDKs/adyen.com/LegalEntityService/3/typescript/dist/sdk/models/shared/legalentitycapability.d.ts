import { SpeakeasyBase } from "../../../internal/utils";
import { CapabilitySettings } from "./capabilitysettings";
import { SupportingEntityCapability } from "./supportingentitycapability";
/**
 * The capability level that is allowed for the legal entity.
 *
 * @remarks
 *
 * Possible values: **notApplicable**, **low**, **medium**, **high**.
 */
export declare enum LegalEntityCapabilityAllowedLevelEnum {
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
export declare enum LegalEntityCapabilityRequestedLevelEnum {
    High = "high",
    Low = "low",
    Medium = "medium",
    NotApplicable = "notApplicable"
}
export declare class LegalEntityCapability extends SpeakeasyBase {
    /**
     * Indicates whether the capability is allowed. Adyen sets this to **true** if the verification is successful
     */
    allowed?: boolean;
    /**
     * The capability level that is allowed for the legal entity.
     *
     * @remarks
     *
     * Possible values: **notApplicable**, **low**, **medium**, **high**.
     */
    allowedLevel?: LegalEntityCapabilityAllowedLevelEnum;
    allowedSettings?: CapabilitySettings;
    /**
     * Indicates whether the capability is requested. To check whether the Legal Entity is permitted to use the capability,
     */
    requested?: boolean;
    /**
     * The requested level of the capability. Some capabilities, such as those used in [card issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different levels. Levels increase the capability, but also require additional checks and increased monitoring.
     *
     * @remarks
     *
     * Possible values: **notApplicable**, **low**, **medium**, **high**.
     */
    requestedLevel?: LegalEntityCapabilityRequestedLevelEnum;
    requestedSettings?: CapabilitySettings;
    /**
     * Capability status for transfer instruments associated with legal entity
     */
    transferInstruments?: SupportingEntityCapability[];
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
    verificationStatus?: string;
}
