package shared

type GetBackendResponse struct {
	AmplifyMetaConfig      map[string]interface{} `json:"AmplifyMetaConfig,omitempty"`
	AppID                  map[string]interface{} `json:"AppId,omitempty"`
	AppName                map[string]interface{} `json:"AppName,omitempty"`
	BackendEnvironmentList map[string]interface{} `json:"BackendEnvironmentList,omitempty"`
	BackendEnvironmentName map[string]interface{} `json:"BackendEnvironmentName,omitempty"`
	Error                  map[string]interface{} `json:"Error,omitempty"`
}
