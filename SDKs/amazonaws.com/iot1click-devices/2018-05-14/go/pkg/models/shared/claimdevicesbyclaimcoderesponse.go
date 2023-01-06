package shared

type ClaimDevicesByClaimCodeResponse struct {
	ClaimCode map[string]interface{} `json:"ClaimCode,omitempty"`
	Total     map[string]interface{} `json:"Total,omitempty"`
}
