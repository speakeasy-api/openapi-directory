package shared

type GetProtectionStatusResponse struct {
	AdminAccountID *string                `json:"AdminAccountId,omitempty"`
	Data           *string                `json:"Data,omitempty"`
	NextToken      *string                `json:"NextToken,omitempty"`
	ServiceType    map[string]interface{} `json:"ServiceType,omitempty"`
}
