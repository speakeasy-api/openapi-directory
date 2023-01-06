package shared

type BillingProfileCptCodesNdcCodeUnitsEnum string

const (
	BillingProfileCptCodesNdcCodeUnitsEnumF2 BillingProfileCptCodesNdcCodeUnitsEnum = "F2"
	BillingProfileCptCodesNdcCodeUnitsEnumGr BillingProfileCptCodesNdcCodeUnitsEnum = "GR"
	BillingProfileCptCodesNdcCodeUnitsEnumMe BillingProfileCptCodesNdcCodeUnitsEnum = "ME"
	BillingProfileCptCodesNdcCodeUnitsEnumMl BillingProfileCptCodesNdcCodeUnitsEnum = "ML"
	BillingProfileCptCodesNdcCodeUnitsEnumUn BillingProfileCptCodesNdcCodeUnitsEnum = "UN"
)

// BillingProfileCptCodesNdcCode
// NDC code object
type BillingProfileCptCodesNdcCode struct {
	NdcPackageCode *string                                 `json:"ndc_package_code,omitempty"`
	Quantity       *string                                 `json:"quantity,omitempty"`
	Units          *BillingProfileCptCodesNdcCodeUnitsEnum `json:"units,omitempty"`
}

// BillingProfileCptCodes
// CPT Code object
type BillingProfileCptCodes struct {
	Code                   *string                         `json:"code,omitempty"`
	DiagnosisPointersIcd10 []string                        `json:"diagnosis_pointers_icd10,omitempty"`
	DiagnosisPointersIcd9  []string                        `json:"diagnosis_pointers_icd9,omitempty"`
	Modifiers              []string                        `json:"modifiers,omitempty"`
	NdcCode                []BillingProfileCptCodesNdcCode `json:"ndc_code,omitempty"`
	Price                  *string                         `json:"price,omitempty"`
	Quantity               *string                         `json:"quantity,omitempty"`
}

// BillingProfileCustomProcedureCodes
// Custom procedure code object
type BillingProfileCustomProcedureCodes struct {
	Code     *string `json:"code,omitempty"`
	Price    *string `json:"price,omitempty"`
	Quantity *string `json:"quantity,omitempty"`
}

type BillingProfileHcpcsCodesNdcCodeUnitsEnum string

const (
	BillingProfileHcpcsCodesNdcCodeUnitsEnumF2 BillingProfileHcpcsCodesNdcCodeUnitsEnum = "F2"
	BillingProfileHcpcsCodesNdcCodeUnitsEnumGr BillingProfileHcpcsCodesNdcCodeUnitsEnum = "GR"
	BillingProfileHcpcsCodesNdcCodeUnitsEnumMe BillingProfileHcpcsCodesNdcCodeUnitsEnum = "ME"
	BillingProfileHcpcsCodesNdcCodeUnitsEnumMl BillingProfileHcpcsCodesNdcCodeUnitsEnum = "ML"
	BillingProfileHcpcsCodesNdcCodeUnitsEnumUn BillingProfileHcpcsCodesNdcCodeUnitsEnum = "UN"
)

// BillingProfileHcpcsCodesNdcCode
// NDC code object
type BillingProfileHcpcsCodesNdcCode struct {
	NdcPackageCode *string                                   `json:"ndc_package_code,omitempty"`
	Quantity       *string                                   `json:"quantity,omitempty"`
	Units          *BillingProfileHcpcsCodesNdcCodeUnitsEnum `json:"units,omitempty"`
}

// BillingProfileHcpcsCodes
// HCPCS code object
type BillingProfileHcpcsCodes struct {
	Code                   *string                           `json:"code,omitempty"`
	DiagnosisPointersIcd10 []string                          `json:"diagnosis_pointers_icd10,omitempty"`
	DiagnosisPointersIcd9  []string                          `json:"diagnosis_pointers_icd9,omitempty"`
	Modifiers              []string                          `json:"modifiers,omitempty"`
	NdcCode                []BillingProfileHcpcsCodesNdcCode `json:"ndc_code,omitempty"`
	Price                  *string                           `json:"price,omitempty"`
	Quantity               *string                           `json:"quantity,omitempty"`
}

type BillingProfile struct {
	Archived             *bool                                `json:"archived,omitempty"`
	CptCodes             []BillingProfileCptCodes             `json:"cpt_codes,omitempty"`
	CreatedAt            *string                              `json:"created_at,omitempty"`
	CustomProcedureCodes []BillingProfileCustomProcedureCodes `json:"custom_procedure_codes,omitempty"`
	Doctor               *string                              `json:"doctor,omitempty"`
	HcpcsCodes           []BillingProfileHcpcsCodes           `json:"hcpcs_codes,omitempty"`
	Icd10Codes           []string                             `json:"icd10_codes,omitempty"`
	Icd9Codes            []string                             `json:"icd9_codes,omitempty"`
	ID                   *int64                               `json:"id,omitempty"`
	Name                 *string                              `json:"name,omitempty"`
	UpdatedAt            *string                              `json:"updated_at,omitempty"`
}
