import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BillingProfileCptCodesNdcCodeUnitsEnum {
    F2 = "F2",
    Gr = "GR",
    Me = "ME",
    Ml = "ML",
    Un = "UN"
}


// BillingProfileCptCodesNdcCode
/** 
 * NDC code object
**/
export class BillingProfileCptCodesNdcCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ndc_package_code" })
  ndcPackageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: string;

  @SpeakeasyMetadata({ data: "json, name=units" })
  units?: BillingProfileCptCodesNdcCodeUnitsEnum;
}


// BillingProfileCptCodes
/** 
 * CPT Code object
**/
export class BillingProfileCptCodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=diagnosis_pointers_icd10" })
  diagnosisPointersIcd10?: string[];

  @SpeakeasyMetadata({ data: "json, name=diagnosis_pointers_icd9" })
  diagnosisPointersIcd9?: string[];

  @SpeakeasyMetadata({ data: "json, name=modifiers" })
  modifiers?: string[];

  @SpeakeasyMetadata({ data: "json, name=ndc_code", elemType: BillingProfileCptCodesNdcCode })
  ndcCode?: BillingProfileCptCodesNdcCode[];

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: string;
}


// BillingProfileCustomProcedureCodes
/** 
 * Custom procedure code object
**/
export class BillingProfileCustomProcedureCodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: string;
}

export enum BillingProfileHcpcsCodesNdcCodeUnitsEnum {
    F2 = "F2",
    Gr = "GR",
    Me = "ME",
    Ml = "ML",
    Un = "UN"
}


// BillingProfileHcpcsCodesNdcCode
/** 
 * NDC code object
**/
export class BillingProfileHcpcsCodesNdcCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ndc_package_code" })
  ndcPackageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: string;

  @SpeakeasyMetadata({ data: "json, name=units" })
  units?: BillingProfileHcpcsCodesNdcCodeUnitsEnum;
}


// BillingProfileHcpcsCodes
/** 
 * HCPCS code object
**/
export class BillingProfileHcpcsCodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=diagnosis_pointers_icd10" })
  diagnosisPointersIcd10?: string[];

  @SpeakeasyMetadata({ data: "json, name=diagnosis_pointers_icd9" })
  diagnosisPointersIcd9?: string[];

  @SpeakeasyMetadata({ data: "json, name=modifiers" })
  modifiers?: string[];

  @SpeakeasyMetadata({ data: "json, name=ndc_code", elemType: BillingProfileHcpcsCodesNdcCode })
  ndcCode?: BillingProfileHcpcsCodesNdcCode[];

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: string;
}


export class BillingProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cpt_codes", elemType: BillingProfileCptCodes })
  cptCodes?: BillingProfileCptCodes[];

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_procedure_codes", elemType: BillingProfileCustomProcedureCodes })
  customProcedureCodes?: BillingProfileCustomProcedureCodes[];

  @SpeakeasyMetadata({ data: "json, name=doctor" })
  doctor?: string;

  @SpeakeasyMetadata({ data: "json, name=hcpcs_codes", elemType: BillingProfileHcpcsCodes })
  hcpcsCodes?: BillingProfileHcpcsCodes[];

  @SpeakeasyMetadata({ data: "json, name=icd10_codes" })
  icd10Codes?: string[];

  @SpeakeasyMetadata({ data: "json, name=icd9_codes" })
  icd9Codes?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
