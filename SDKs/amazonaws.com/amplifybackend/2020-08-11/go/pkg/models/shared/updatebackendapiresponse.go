package shared

type UpdateBackendAPIResponse struct {
	AppID                  map[string]interface{} `json:"AppId,omitempty"`
	BackendEnvironmentName map[string]interface{} `json:"BackendEnvironmentName,omitempty"`
	Error                  map[string]interface{} `json:"Error,omitempty"`
	JobID                  map[string]interface{} `json:"JobId,omitempty"`
	Operation              map[string]interface{} `json:"Operation,omitempty"`
	Status                 map[string]interface{} `json:"Status,omitempty"`
}
