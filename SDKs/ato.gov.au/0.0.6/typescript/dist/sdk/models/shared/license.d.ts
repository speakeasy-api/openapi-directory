import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The license type.
 */
export declare enum LicenseLicenseTypeEnum {
    AustralianFinancialServicesLicense = "Australian Financial Services License",
    License2B = "License 2B"
}
/**
 * The business name's lifecycle state.
 */
export declare enum LicenseLifecycleStateEnum {
    Approved = "Approved",
    Expired = "Expired",
    Issued = "Issued",
    PendingApproval = "Pending Approval",
    Suspended = "Suspended"
}
/**
 * The License resource.
 */
export declare class LicenseInput extends SpeakeasyBase {
    /**
     * The license type.
     */
    licenseType?: LicenseLicenseTypeEnum;
    /**
     * The business name's lifecycle state.
     */
    lifecycleState?: LicenseLifecycleStateEnum;
}
/**
 * The License resource.
 */
export declare class License extends SpeakeasyBase {
    /**
     * The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    fromDate?: Date;
    /**
     * The resource's unique identifier.
     */
    id?: string;
    /**
     * The license type.
     */
    licenseType?: LicenseLicenseTypeEnum;
    /**
     * The business name's lifecycle state.
     */
    lifecycleState?: LicenseLifecycleStateEnum;
    /**
     * The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    toDate?: Date;
}
