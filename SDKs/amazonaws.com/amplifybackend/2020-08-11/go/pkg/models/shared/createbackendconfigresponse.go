package shared

type CreateBackendConfigResponse struct {
	AppID                  map[string]interface{} `json:"AppId,omitempty"`
	BackendEnvironmentName map[string]interface{} `json:"BackendEnvironmentName,omitempty"`
	JobID                  map[string]interface{} `json:"JobId,omitempty"`
	Status                 map[string]interface{} `json:"Status,omitempty"`
}
