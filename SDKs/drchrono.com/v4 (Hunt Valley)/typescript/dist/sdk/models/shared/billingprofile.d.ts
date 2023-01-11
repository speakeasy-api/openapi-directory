import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BillingProfileCptCodesNdcCodeUnitsEnum {
    F2 = "F2",
    Gr = "GR",
    Me = "ME",
    Ml = "ML",
    Un = "UN"
}
/**
 * NDC code object
**/
export declare class BillingProfileCptCodesNdcCode extends SpeakeasyBase {
    ndcPackageCode?: string;
    quantity?: string;
    units?: BillingProfileCptCodesNdcCodeUnitsEnum;
}
/**
 * CPT Code object
**/
export declare class BillingProfileCptCodes extends SpeakeasyBase {
    code?: string;
    diagnosisPointersIcd10?: string[];
    diagnosisPointersIcd9?: string[];
    modifiers?: string[];
    ndcCode?: BillingProfileCptCodesNdcCode[];
    price?: string;
    quantity?: string;
}
/**
 * Custom procedure code object
**/
export declare class BillingProfileCustomProcedureCodes extends SpeakeasyBase {
    code?: string;
    price?: string;
    quantity?: string;
}
export declare enum BillingProfileHcpcsCodesNdcCodeUnitsEnum {
    F2 = "F2",
    Gr = "GR",
    Me = "ME",
    Ml = "ML",
    Un = "UN"
}
/**
 * NDC code object
**/
export declare class BillingProfileHcpcsCodesNdcCode extends SpeakeasyBase {
    ndcPackageCode?: string;
    quantity?: string;
    units?: BillingProfileHcpcsCodesNdcCodeUnitsEnum;
}
/**
 * HCPCS code object
**/
export declare class BillingProfileHcpcsCodes extends SpeakeasyBase {
    code?: string;
    diagnosisPointersIcd10?: string[];
    diagnosisPointersIcd9?: string[];
    modifiers?: string[];
    ndcCode?: BillingProfileHcpcsCodesNdcCode[];
    price?: string;
    quantity?: string;
}
export declare class BillingProfile extends SpeakeasyBase {
    archived?: boolean;
    cptCodes?: BillingProfileCptCodes[];
    createdAt?: string;
    customProcedureCodes?: BillingProfileCustomProcedureCodes[];
    doctor?: string;
    hcpcsCodes?: BillingProfileHcpcsCodes[];
    icd10Codes?: string[];
    icd9Codes?: string[];
    id?: number;
    name?: string;
    updatedAt?: string;
}
