package shared

type CompanySettingDto struct {
	EnableVOCRReporting *bool   `json:"enableVOCRReporting,omitempty"`
	ID                  *int64  `json:"id,omitempty"`
	UseAllocations      *bool   `json:"useAllocations,omitempty"`
	Value               *string `json:"value,omitempty"`
	VocrSettingValue    *bool   `json:"vocrSettingValue,omitempty"`
}
