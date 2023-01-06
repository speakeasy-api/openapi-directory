package shared

type UpdateBackendConfigResponse struct {
	AppID               map[string]interface{} `json:"AppId,omitempty"`
	BackendManagerAppID map[string]interface{} `json:"BackendManagerAppId,omitempty"`
	Error               map[string]interface{} `json:"Error,omitempty"`
	LoginAuthConfig     map[string]interface{} `json:"LoginAuthConfig,omitempty"`
}
