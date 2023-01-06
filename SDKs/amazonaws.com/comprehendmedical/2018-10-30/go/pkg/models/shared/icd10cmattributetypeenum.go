package shared

type Icd10CmAttributeTypeEnum string

const (
	Icd10CMAttributeTypeEnumAcuity          Icd10CmAttributeTypeEnum = "ACUITY"
	Icd10CMAttributeTypeEnumDirection       Icd10CmAttributeTypeEnum = "DIRECTION"
	Icd10CMAttributeTypeEnumSystemOrganSite Icd10CmAttributeTypeEnum = "SYSTEM_ORGAN_SITE"
	Icd10CMAttributeTypeEnumQuality         Icd10CmAttributeTypeEnum = "QUALITY"
	Icd10CMAttributeTypeEnumQuantity        Icd10CmAttributeTypeEnum = "QUANTITY"
	Icd10CMAttributeTypeEnumTimeToDxName    Icd10CmAttributeTypeEnum = "TIME_TO_DX_NAME"
	Icd10CMAttributeTypeEnumTimeExpression  Icd10CmAttributeTypeEnum = "TIME_EXPRESSION"
)
