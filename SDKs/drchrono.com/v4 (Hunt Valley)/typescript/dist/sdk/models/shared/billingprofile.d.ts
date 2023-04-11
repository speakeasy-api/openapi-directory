import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Can be one of `F2`(International Unit), `GR`(Gram), `ME`(Milligram), `ML`(Millimeter) or `UN`(Unit)
 */
export declare enum BillingProfileCptCodesNdcCodeUnitsEnum {
    F2 = "F2",
    Gr = "GR",
    Me = "ME",
    Ml = "ML",
    Un = "UN"
}
/**
 * NDC code object
 */
export declare class BillingProfileCptCodesNdcCode extends SpeakeasyBase {
    ndcPackageCode?: string;
    quantity?: string;
    /**
     * Can be one of `F2`(International Unit), `GR`(Gram), `ME`(Milligram), `ML`(Millimeter) or `UN`(Unit)
     */
    units?: BillingProfileCptCodesNdcCodeUnitsEnum;
}
/**
 * CPT Code object
 */
export declare class BillingProfileCptCodes extends SpeakeasyBase {
    code?: string;
    /**
     * ICD10 codes represented in strings
     */
    diagnosisPointersIcd10?: string[];
    /**
     * ICD9 codes represented in strings
     */
    diagnosisPointersIcd9?: string[];
    /**
     * Modifiers represented in strings
     */
    modifiers?: string[];
    /**
     * Array of NDC Code objects
     */
    ndcCode?: BillingProfileCptCodesNdcCode[];
    /**
     * This field is represented in string format
     */
    price?: string;
    /**
     * This field is represented in string format
     */
    quantity?: string;
}
/**
 * Custom procedure code object
 */
export declare class BillingProfileCustomProcedureCodes extends SpeakeasyBase {
    code?: string;
    /**
     * This field is represented in string format
     */
    price?: string;
    /**
     * This field is represented in string format
     */
    quantity?: string;
}
/**
 * Can be one of `F2`(International Unit), `GR`(Gram), `ME`(Milligram), `ML`(Millimeter) or `UN`(Unit)
 */
export declare enum BillingProfileHcpcsCodesNdcCodeUnitsEnum {
    F2 = "F2",
    Gr = "GR",
    Me = "ME",
    Ml = "ML",
    Un = "UN"
}
/**
 * NDC code object
 */
export declare class BillingProfileHcpcsCodesNdcCode extends SpeakeasyBase {
    ndcPackageCode?: string;
    quantity?: string;
    /**
     * Can be one of `F2`(International Unit), `GR`(Gram), `ME`(Milligram), `ML`(Millimeter) or `UN`(Unit)
     */
    units?: BillingProfileHcpcsCodesNdcCodeUnitsEnum;
}
/**
 * HCPCS code object
 */
export declare class BillingProfileHcpcsCodes extends SpeakeasyBase {
    code?: string;
    /**
     * ICD10 codes represented in array of strings
     */
    diagnosisPointersIcd10?: string[];
    /**
     * ICD9 codes represented in array of strings
     */
    diagnosisPointersIcd9?: string[];
    /**
     * Modifiers represented in array of strings
     */
    modifiers?: string[];
    /**
     * Array of NDC Code objects
     */
    ndcCode?: BillingProfileHcpcsCodesNdcCode[];
    /**
     * This field is represented in string format
     */
    price?: string;
    /**
     * This field is represented in string format
     */
    quantity?: string;
}
/**
 * OK
 */
export declare class BillingProfile extends SpeakeasyBase {
    archived?: boolean;
    /**
     * Array of CPT Code objects
     */
    cptCodes?: BillingProfileCptCodes[];
    createdAt?: string;
    /**
     * Array of custom procedure code objects
     */
    customProcedureCodes?: BillingProfileCustomProcedureCodes[];
    doctor?: string;
    /**
     * Array of HCPCS Code objects
     */
    hcpcsCodes?: BillingProfileHcpcsCodes[];
    /**
     * ICD10 Codes represented in string format
     */
    icd10Codes?: string[];
    /**
     * ICD9 Codes represented in string format
     */
    icd9Codes?: string[];
    id?: number;
    name?: string;
    updatedAt?: string;
}
