package shared

type GetBackendAPIResponse struct {
	AppID                  map[string]interface{} `json:"AppId,omitempty"`
	BackendEnvironmentName map[string]interface{} `json:"BackendEnvironmentName,omitempty"`
	Error                  map[string]interface{} `json:"Error,omitempty"`
	ResourceConfig         map[string]interface{} `json:"ResourceConfig,omitempty"`
	ResourceName           map[string]interface{} `json:"ResourceName,omitempty"`
}
