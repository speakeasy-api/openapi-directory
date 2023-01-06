package shared

type ListFunctionsByCodeSigningConfigResponse struct {
	FunctionArns map[string]interface{} `json:"FunctionArns,omitempty"`
	NextMarker   *string                `json:"NextMarker,omitempty"`
}
